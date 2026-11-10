'use server';

/**
 * @fileOverview This file defines a Genkit flow for generating a detailed explanation for a quiz question.
 *
 * It includes:
 * - `explainConcept`: An async function that takes a question and its answer and returns a detailed explanation.
 * - `ExplainConceptInput`: The input type for the `explainConcept` function.
 * - `ExplainConceptOutput`: The output type for the `explainConcept` function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'zod';

const ExplainConceptInputSchema = z.object({
  question: z.string().describe('The quiz question to explain.'),
  answer: z.string().describe('The correct answer to the question.'),
  explanation: z.string().describe('The brief explanation for the correct answer.'),
});
export type ExplainConceptInput = z.infer<typeof ExplainConceptInputSchema>;

const ExplainConceptOutputSchema = z.object({
  conceptExplanation: z.string().describe('A detailed, beginner-friendly explanation of the concept behind the quiz question, formatted as Markdown.'),
});
export type ExplainConceptOutput = z.infer<typeof ExplainConceptOutputSchema>;

export async function explainConcept(input: ExplainConceptInput): Promise<ExplainConceptOutput> {
  return explainConceptFlow(input);
}

const explainConceptPrompt = ai.definePrompt({
  name: 'explainConceptPrompt',
  input: {schema: ExplainConceptInputSchema},
  output: {schema: ExplainConceptOutputSchema},
  prompt: `You are an AI Tutor creating a "Deeper Dive" mini-lesson for a student.
The goal is to explain the core concept behind a quiz question in a structured, engaging, and easy-to-understand format.

**Instructions:**
Generate a response in Markdown format that includes the following four sections:

1.  **Core Concept:** Start with a heading \`## Core Concept\`. Clearly and simply explain the main principle or rule being tested in the question.

2.  **Analogy/Example:** Start with a heading \`## Analogy & Example\`. Provide a simple real-world analogy or a concrete example to make the concept easier to visualize and understand.

3.  **Why it Matters:** Start with a heading \`## Why It Matters\`. Briefly explain why this concept is important in a real-world financial advisory context.

4.  **Practice Question:** Start with a heading \`## Test Your Knowledge\`. Create one new multiple-choice question that tests a slightly different aspect of the same core concept. Provide the options and indicate the correct answer with an explanation.

**Source Information:**
Here is the quiz question, the correct answer, and the provided explanation:
- Question: \`{{{question}}}\`
- Answer: \`{{{answer}}}\`
- Explanation: \`{{{explanation}}}\`

Create the "Deeper Dive" based on this information.`,
});

const explainConceptFlow = ai.defineFlow(
  {
    name: 'explainConceptFlow',
    inputSchema: ExplainConceptInputSchema,
    outputSchema: ExplainConceptOutputSchema,
  },
  async input => {
    const {output} = await explainConceptPrompt(input);
    return output!;
  }
);
