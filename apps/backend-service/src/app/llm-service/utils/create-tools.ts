import { z } from 'zod';

type Tool<T extends z.ZodType> = {
  name: string;
  desc: string;
  schema: T;
  func: (args: z.infer<T>) => Promise<unknown>;
};

export function createTools<T extends z.ZodType>(
  name: string,
  description: string,
  schema: T,
  callback: (args: z.infer<T>) => Promise<unknown>,
): Tool<T> {
  return {
    name: name,
    desc: description,
    schema: schema,
    func: callback,
  };
}
