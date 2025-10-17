import { google } from '@ai-sdk/google';
import { openai } from '@ai-sdk/openai';
import { generateText } from 'ai';

// TODO: Choose a model. I recommend using the Google Gemini model:
// gemini-2.0-flash-lite
const model = google('gemini-2.0-flash-lite');
const openaiModel = openai('gpt-4o');

const prompt = 'What is the capital of France?';
const prompt2 =
  'What is the capital of Botswana? Please respond in a complete sentence.';

const result = await generateText({ model, prompt });
const openaiResult = await generateText({
  model: openaiModel,
  prompt: prompt2,
});

console.log(openaiResult.text);
console.log(result.text);
