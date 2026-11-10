
'use server';

/**
 * @fileOverview This file defines a Genkit flow for generating a new, more difficult
 * practice quiz based on a user's incorrectly answered questions. This is the engine for "Model C".
 */

import { ai } from '@/ai/genkit';
import { z } from 'zod';

const OptionSchema = z.object({
  text: z.string().describe('The text of the option.'),
  isCorrect: z.boolean().describe('Whether this option is the correct answer.'),
});

const QuestionSchema = z.object({
  questionText: z.string().describe('The main text of the question.'),
  options: z.array(OptionSchema).length(4).describe('An array of 4 possible answers.'),
  explanation: z.string().describe('A brief explanation for why the correct answer is right.'),
});

const GenerateHarderPracticeQuizInputSchema = z.object({
  questions: z.array(QuestionSchema).describe('An array of source questions that the user answered incorrectly.'),
});
export type GenerateHarderPracticeQuizInput = z.infer<typeof GenerateHarderPracticeQuizInputSchema>;

const GenerateHarderPracticeQuizOutputSchema = z.object({
  questions: z.array(QuestionSchema).describe('An array of newly generated, more difficult practice questions.'),
});
export type GenerateHarderPracticeQuizOutput = z.infer<typeof GenerateHarderPracticeQuizOutputSchema>;

export async function generateHarderPracticeQuiz(input: GenerateHarderPracticeQuizInput): Promise<GenerateHarderPracticeQuizOutput> {
  return generateHarderPracticeQuizFlow(input);
}

const generateHarderPracticeQuizPrompt = ai.definePrompt({
  name: 'generateHarderPracticeQuizPrompt',
  input: { schema: GenerateHarderPracticeQuizInputSchema },
  output: { schema: GenerateHarderPracticeQuizOutputSchema },
  prompt: `You are an expert exam question creator for advanced financial certifications.
Your task is to take a list of questions a high-performing student got wrong and create a new, more challenging exam to push them towards mastery.

For each source question provided, you must create one new, significantly harder multiple-choice question. This new question must test the same core concept but elevate the difficulty.

**Instructions for Increasing Difficulty:**
1.  **Synthesize Concepts:** Combine the core concept with another related concept.
2.  **Use Complex Scenarios:** Instead of direct questions, create a narrative or case study that requires the student to apply the rule in a real-world situation.
3.  **Introduce Nuance and Exceptions:** Test the edge cases or exceptions to the rule that only a true expert would know.
4.  **Use Subtle Distractors:** The incorrect options should be plausible and tempting, designed to catch common misconceptions.
5.  Each new question must have 4 options, with exactly one correct answer.
6.  Provide a clear and concise explanation for the correct answer, ideally explaining why the distractors are wrong.

**Source Questions:**
{{{json questions}}}

Generate the new, harder practice questions based on these sources.`,
});

const generateHarderPracticeQuizFlow = ai.defineFlow(
  {
    name: 'generateHarderPracticeQuizFlow',
    inputSchema: GenerateHarderPracticeQuizInputSchema,
    outputSchema: GenerateHarderPracticeQuizOutputSchema,
  },
  async input => {
    const { output } = await generateHarderPracticeQuizPrompt(input);
    return output!;
  }
);
