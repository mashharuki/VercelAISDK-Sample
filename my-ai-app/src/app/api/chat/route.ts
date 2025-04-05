import { openai } from '@ai-sdk/openai';
import { StreamingTextResponse, streamText } from 'ai';

/**
 * OpenAIのAPIを呼び出す
 * @param req 
 * @returns 
 */
export async function POST(req: Request) {
  const { messages } = await req.json();
  // プロンプトを引数に渡して推論結果を得る
  const result = await streamText({
    model: openai('gpt-4-turbo'),
    messages,
  });

  return new StreamingTextResponse(result.toAIStream());
}