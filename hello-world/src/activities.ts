import { error } from "console";

// @@@SNIPSTART typescript-hello-activity
export async function greet(name: string): Promise<string> {
  throw new Error('oops')
  return `Hello, ${name}!`;
}
// @@@SNIPEND
