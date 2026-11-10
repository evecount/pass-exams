'use server';

/**
 * @fileOverview This file defines a Genkit flow for generating a new practice quiz
 * based on a user's bookmarked questions.
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

const GeneratePracticeQuizInputSchema = z.object({
  questions: z.array(QuestionSchema).describe('An array of source questions to create variations from.'),
});
export type GeneratePracticeQuizInput = z.infer<typeof GeneratePracticeQuizInputSchema>;

const GeneratePracticeQuizOutputSchema = z.object({
  questions: z.array(QuestionSchema).describe('An array of newly generated practice questions.'),
});
export type GeneratePracticeQuizOutput = z.infer<typeof GeneratePracticeQuizOutputSchema>;

export async function generatePracticeQuiz(input: GeneratePracticeQuizInput): Promise<GeneratePracticeQuizOutput> {
  return generatePracticeQuizFlow(input);
}

const generatePracticeQuizPrompt = ai.definePrompt({
  name: 'generatePracticeQuizPrompt',
  input: { schema: GeneratePracticeQuizInputSchema },
  output: { schema: GeneratePracticeQuizOutputSchema },
  prompt: `You are an expert exam question creator for financial services certifications in Singapore.
Your task is to generate a new set of practice questions based on a list of questions that a user found difficult.

For each source question provided, you must create one new, unique multiple-choice question that tests the exact same core concept but uses a different scenario, wording, or numerical values.

**Instructions:**
1.  Analyze the provided source question to identify the core principle it is testing.
2.  Create a new question that is distinct from the original but targets the same principle.
3.  The new question must have 4 options.
4.  Exactly one of the options must be correct.
5.  Provide a clear and concise explanation for the correct answer.
6.  The difficulty and style should match that of a professional certification exam.
7.  Do not repeat the original question. Generate a true variation.

**Source Questions:**
{{{json questions}}}

Generate the new practice questions based on these sources.`,
});

const generatePracticeQuizFlow = ai.defineFlow(
  {
    name: 'generatePracticeQuizFlow',
    inputSchema: GeneratePracticeQuizInputSchema,
    outputSchema: GeneratePracticeQuizOutputSchema,
  },
  async input => {
    const { output } = await generatePracticeQuizPrompt(input);
    return output!;
  }
);
