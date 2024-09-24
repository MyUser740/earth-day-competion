import { ChatPromptTemplate } from '@langchain/core/prompts';
import { Injectable } from '@nestjs/common';
import axios from 'axios';
import { pull } from 'langchain/hub';
import { zodToJsonSchema } from 'zod-to-json-schema';

import { LLMInvalidOutputError } from './errors/llmInvalidOutput.error';
import documentQNA from './tools/document_qna.tool';

type CompletionOptions = {
  prompt: string;
  histories: Array<{ role: 'assistant' | 'user'; msg: string }>;
};

@Injectable()
export class LlmServiceService {
  private tools = [documentQNA];
  private promptTemplate: ChatPromptTemplate;

  private createToolsDescription(): string {
    let result = '';

    this.tools.forEach(
      (tool) =>
        (result += `- ${tool.name}: ${tool.desc}, input-json-schema: ${JSON.stringify(zodToJsonSchema(tool.schema))}\n`),
    );

    return result;
  }

  private createToolsName(): string {
    let result = '';
    this.tools.forEach((tool) => (result += `${tool.name}, `));

    return result;
  }

  private async getPromptTemplate(): Promise<ChatPromptTemplate> {
    if (!this.promptTemplate)
      return (this.promptTemplate = await pull<ChatPromptTemplate>(
        'hwchase17/react-chat',
      ));
    else return this.promptTemplate;
  }

  private getHistoryPrompt(
    histories: Array<{ role: 'assistant' | 'user'; msg: string }>,
  ): string {
    console.log(__dirname);

    let result = '';
    histories.forEach(
      (history) => (result += `${history.role}: ${history.msg}\n`),
    );

    return result;
  }

  public async createCompletion({
    prompt,
    histories,
  }: CompletionOptions): Promise<string> {
    const promptTemplate: ChatPromptTemplate = await this.getPromptTemplate();
    const tools = this.createToolsDescription();
    const toolsName = this.createToolsName();

    const llmInvokeReqursive = async (
      { prompt, histories }: CompletionOptions,
      agent_scratchpad = '',
    ): Promise<string> => {
      try {
        const llmPrompt = await promptTemplate.format({
          tools: tools,
          tool_names: toolsName,
          chat_history:
            histories.length === 0
              ? '[No Chat History]'
              : this.getHistoryPrompt(histories),
          agent_scratchpad: agent_scratchpad,
          input: prompt + '\n(Answer in Indonesian only!)\n',
        });

        const response = await axios.post(
          'https://api.binjie.fun/api/generateStream',
          {
            prompt: llmPrompt,
            userId: '#/chat/2727084918037',
            network: false,
            system: '',
            withoutContext: true,
            stream: false,
          },
          {
            headers: {
              'Content-Type': 'application/json',
              Origin: 'https://chat18.aichatos8.com',
              Referer: 'https://chat18.aichatos8.com',
              'Referrer-Policy': 'strict-origin-when-cross-origin',
              'X-Forwarded-For': '127.0.0.1',
              'X-Forwarded-Host': '127.0.0.1',
              'X-Client-IP': '127.0.0.1',
              'X-Remote-IP': '127.0.0.1',
              'X-Remote-Addr': '127.0.0.1',
              'X-Host': '127.0.0.1',
            },
          },
        );

        const thoughtMatch = response.data.match(/Thought:\s*(.*)/);
        const actionMatch = response.data.match(/Action:\s*(.*)/);
        const actionInputMatch = response.data.match(/Action Input:\s*(.*)/);
        const finalInputMatch = response.data.match(/Final Answer:\s*(.*)/);

        if (actionMatch) {
          const action = actionMatch[1].trim();
          const action_input = actionInputMatch[1].trim();

          console.log('Tool needed -> ', action);

          const tool = this.tools.find((x) => x.name === action);

          if (!tool) throw `${action} tool not found!`;

          const toolOutput = await tool.func(action_input);

          console.log('Tool response -> ', toolOutput);

          const agentScratchPad = `
Thought: ${thoughtMatch[1].trim()}
Action: ${actionMatch[1].trim()}
Action Input: ${actionInputMatch[1].trim()}
Observation: ${JSON.stringify(toolOutput)};
        `;

          return await llmInvokeReqursive(
            {
              prompt,
              histories,
            },
            agentScratchPad,
          );
        } else if (finalInputMatch) return finalInputMatch[1].trim();
        else
          throw new LLMInvalidOutputError(
            'Unexpected response from LLM service: ' + response.data,
          );
      } catch (err: unknown) {
        if (err instanceof LLMInvalidOutputError)
          return await llmInvokeReqursive({ prompt, histories });
        else throw err;
      }
    };

    return await llmInvokeReqursive({ prompt, histories });
  }
}
