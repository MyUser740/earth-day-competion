/**
 * This is not a production server yet!
 * This is only a minimal backend to get started.
 */

import { PDFLoader } from '@langchain/community/document_loaders/fs/pdf';
import { HuggingFaceInferenceEmbeddings } from '@langchain/community/embeddings/hf';
import { FaissStore } from '@langchain/community/vectorstores/faiss';
import { RecursiveCharacterTextSplitter } from '@langchain/textsplitters';
import { Logger } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';

import path from 'path';
import { AppModule } from './app/app.module';

async function bootstrap() {
  console.log('Starting appilcations...', process.env.HUGGINGFACEHUB_API_KEY);

  const app = await NestFactory.create(AppModule, {
    cors: {
      origin: '*',
    },
  });
  const globalPrefix = 'api';
  app.setGlobalPrefix(globalPrefix);
  const port = process.env.PORT || 3000;

  console.log('Compilling docs...');

  const docs_path = path.join(
    __dirname,
    'assets/qna_documents/App-Information - Indonesian.pdf',
  );
  const loader = new PDFLoader(docs_path);
  const splitter = new RecursiveCharacterTextSplitter({
    chunkSize: 500,
    chunkOverlap: 1,
  });

  const docs = await loader
    .load()
    .then((docs) => splitter.splitDocuments(docs));

  const embeddings = new HuggingFaceInferenceEmbeddings({
    apiKey: process.env.HUGGINGFACEHUB_API_KEY,
  });

  const store = await FaissStore.fromDocuments(docs, embeddings);

  await store.save(path.join(__dirname, 'assets/qna_documents-store/'));

  console.log('Starting server...');

  await app.listen(port);
  Logger.log(
    `🚀 Application is running on: http://localhost:${port}/${globalPrefix}`,
  );
}

bootstrap();
