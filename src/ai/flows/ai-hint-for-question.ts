'use server';

/**
 * @fileOverview This file defines a Genkit flow for generating AI hints for quiz questions.
 *
 * It includes:
 * - `getAiHintForQuestion`: An async function that takes a question as input and returns an AI-generated hint.
 * - `AiHintForQuestionInput`: The input type for the `getAiHintForQuestion` function.
 * - `AiHintForQuestionOutput`: The output type for the `getAiHintForQuestion` function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'zod';

const AiHintForQuestionInputSchema = z.object({
  question: z.string().describe('The quiz question to generate a hint for.'),
});
export type AiHintForQuestionInput = z.infer<typeof AiHintForQuestionInputSchema>;

const AiHintForQuestionOutputSchema = z.object({
  hint: z.string().describe('The AI-generated hint for the question.'),
});
export type AiHintForQuestionOutput = z.infer<typeof AiHintForQuestionOutputSchema>;

export async function getAiHintForQuestion(input: AiHintForQuestionInput): Promise<AiHintForQuestionOutput> {
  return aiHintForQuestionFlow(input);
}

const aiHintForQuestionPrompt = ai.definePrompt({
  name: 'aiHintForQuestionPrompt',
  input: {schema: AiHintForQuestionInputSchema},
  output: {schema: AiHintForQuestionOutputSchema},
  prompt: `You are an AI assistant designed to provide helpful hints for quiz questions.
Your task is to analyze the user's question and generate a helpful hint. The hint should guide the user toward the correct answer without giving it away directly and should clarify the core concept.

**Question to analyze:**
\`\`\`
{{{question}}}
\`\`\`

**Instructions:**
1.  Read the question carefully.
2.  Identify the core concept being tested.
3.  Formulate a hint that provides insight into this concept without revealing the answer.
4.  Return the hint in the specified JSON format.`,
});

const aiHintForQuestionFlow = ai.defineFlow(
  {
    name: 'aiHintForQuestionFlow',
    inputSchema: AiHintForQuestionInputSchema,
    outputSchema: AiHintForQuestionOutputSchema,
  },
  async input => {
    const {output} = await aiHintForQuestionPrompt(input);
    return output!;
  }
);
