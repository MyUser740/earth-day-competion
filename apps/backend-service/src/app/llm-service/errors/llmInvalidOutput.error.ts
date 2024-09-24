export class LLMInvalidOutputError extends Error {
  constructor(message: string) {
    super(message);
    this.name = 'LLMInvalidOutputError';
  }
}
