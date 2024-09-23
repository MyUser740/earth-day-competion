import { Test, TestingModule } from '@nestjs/testing';
import { LlmServiceService } from './llm-service.service';

describe('LlmServiceService', () => {
  let service: LlmServiceService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [LlmServiceService],
    }).compile();

    service = module.get<LlmServiceService>(LlmServiceService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
