import {
  BadRequestException,
  Body,
  Controller,
  Get,
  Post,
} from '@nestjs/common';

import { AppService } from './app.service';
import { LlmServiceService } from './llm-service/llm-service.service';

@Controller()
export class AppController {
  constructor(
    private readonly appService: AppService,
    private readonly llmService: LlmServiceService,
  ) { }

  @Get()
  getData() {
    return this.appService.getData();
  }

  @Post('/llm-chat')
  async llmChat(
    @Body('prompt') prompt: string | null,
    @Body('histories')
    histories: Array<{ role: 'assistant' | 'user'; msg: string }> | null,
  ) {
    if (!prompt) throw new BadRequestException('prompt is required');
    else if (!histories) throw new BadRequestException('histories is required');

    return await this.llmService.createCompletion({ prompt, histories });
  }
}
