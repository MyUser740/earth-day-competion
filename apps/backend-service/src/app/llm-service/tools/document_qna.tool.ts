import { HuggingFaceInferenceEmbeddings } from '@langchain/community/embeddings/hf';
import { FaissStore } from '@langchain/community/vectorstores/faiss';
import path from 'path';
import { z } from 'zod';

import { createTools } from '../utils/create-tools';

const documentQNA = createTools(
  'document_qna',
  'Question answer from "Aplikasi lomba.pdf" document. This document contain information about the mobile application named "Aplikasi Eco Control"',
  z
    .string()
    .describe(
      'Question to document qna tools. You may paraphrase the user question. Also, you must paraphrase the tool output! Call this tool if use talk about Eco Control Appilcation!',
    ),
  async (args: string) => {
    console.log(`Tools qna called -> ${args}`);
    const loadedStore = await FaissStore.load(
      path.join(__dirname, 'assets/qna_documents-store/'),
      new HuggingFaceInferenceEmbeddings({
        apiKey: 'hf_...', // TODO: Remove this
      }),
    );

    const result = await loadedStore.similaritySearch(args);
    return result[0].pageContent;
  },
);

export default documentQNA;
