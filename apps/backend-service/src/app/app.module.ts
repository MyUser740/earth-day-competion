import { Module } from '@nestjs/common';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { LlmServiceModule } from './llm-service/llm-service.module';

@Module({
  imports: [LlmServiceModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
