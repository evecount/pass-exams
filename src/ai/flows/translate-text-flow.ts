
'use server';

/**
 * @fileOverview This file defines a Genkit flow for translating text into a specified language.
 *
 * It includes:
 * - `translateText`: An async function that takes a text object and a target language and returns the translated text object.
 * - `TranslateTextInput`: The input type for the `translateText` function.
 * - `TranslateTextOutput`: The output type for the `translateText` function.
 */

import { ai } from '@/ai/genkit';
import { z } from 'zod';

// Define a schema that can handle a JSON object with string values.
const TranslationObjectSchema = z.record(z.string());

const TranslateTextInputSchema = z.object({
  jsonToTranslate: TranslationObjectSchema.describe('A JSON object where all string values need to be translated.'),
  targetLanguage: z.string().describe('The language to translate the text into (e.g., "Spanish", "French", "Japanese", "Chinese", "Malay", "Tamil").'),
});
export type TranslateTextInput = z.infer<typeof TranslateTextInputSchema>;

const TranslateTextOutputSchema = z.object({
  translatedJson: TranslationObjectSchema.describe('A JSON object with the same keys as the input, but with all string values translated.'),
});
export type TranslateTextOutput = z.infer<typeof TranslateTextOutputSchema>;

export async function translateText(input: TranslateTextInput): Promise<TranslateTextOutput> {
  return translateTextFlow(input);
}

const translateTextPrompt = ai.definePrompt({
  name: 'translateTextPrompt',
  input: { schema: TranslateTextInputSchema },
  output: { schema: TranslateTextOutputSchema },
  prompt: `You are a highly skilled translation engine. Your task is to translate the values of a given JSON object from English into the specified target language.

**Instructions:**
1.  You will receive a JSON object and a target language.
2.  Translate *all* the string values within the JSON object to the \`{{{targetLanguage}}}\`.
3.  The structure of the output JSON object (all keys and nesting) must be identical to the input JSON object.
4.  Do not add any extra commentary, greetings, or explanations. Only return the translated JSON object.
5.  If the target language is "Chinese", please use Simplified Chinese characters appropriate for a Singaporean context.
6.  If the target language is "Malay", please use the standard Bahasa Melayu.

**JSON to Translate:**
\`\`\`json
{{{json jsonToTranslate}}}
\`\`\`

**Translated JSON:**`,
});

const translateTextFlow = ai.defineFlow(
  {
    name: 'translateTextFlow',
    inputSchema: TranslateTextInputSchema,
    outputSchema: TranslateTextOutputSchema,
  },
  async input => {
    const { output } = await translateTextPrompt(input);
    return output!;
  }
);
