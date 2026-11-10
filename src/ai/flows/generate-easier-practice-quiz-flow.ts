
'use server';

/**
 * @fileOverview This file defines a Genkit flow for generating a new, easier
 * practice quiz based on a user's incorrectly answered questions. This is the engine for "Model B".
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

const GenerateEasierPracticeQuizInputSchema = z.object({
  questions: z.array(QuestionSchema).describe('An array of source questions that the user answered incorrectly.'),
});
export type GenerateEasierPracticeQuizInput = z.infer<typeof GenerateEasierPracticeQuizInputSchema>;

const GenerateEasierPracticeQuizOutputSchema = z.object({
  questions: z.array(QuestionSchema).describe('An array of newly generated, easier practice questions.'),
});
export type GenerateEasierPracticeQuizOutput = z.infer<typeof GenerateEasierPracticeQuizOutputSchema>;

export async function generateEasierPracticeQuiz(input: GenerateEasierPracticeQuizInput): Promise<GenerateEasierPracticeQuizOutput> {
  return generateEasierPracticeQuizFlow(input);
}

const generateEasierPracticeQuizPrompt = ai.definePrompt({
  name: 'generateEasierPracticeQuizPrompt',
  input: { schema: GenerateEasierPracticeQuizInputSchema },
  output: { schema: GenerateEasierPracticeQuizOutputSchema },
  prompt: `You are an expert educator and curriculum designer specializing in scaffolding complex topics for beginners.
Your task is to take a list of questions a student answered incorrectly and create a new, slightly *easier* practice quiz to help them build confidence.

For each source question provided, you must create one new, easier multiple-choice question. This new question must test the same core concept but reduce the difficulty.

**Instructions for Reducing Difficulty:**
1.  **Isolate the Core Concept:** For each source question, identify the single, most fundamental principle being tested.
2.  **Use Direct Questions:** Avoid complex, multi-step scenarios. Phrase the new question as a direct test of the core concept.
3.  **Simplify Language:** Use clearer, more straightforward language. Avoid jargon where possible or explain it simply.
4.  **Create Obvious Distractors:** The incorrect options should be clearly wrong to a student who has a basic grasp of the core concept. This helps reinforce the correct answer.
5.  Ensure each new question has 4 options, with one correct answer and a clear explanation.

**Source Questions:**
{{{json questions}}}

Generate the new, easier practice questions based on these sources.`,
});

const generateEasierPracticeQuizFlow = ai.defineFlow(
  {
    name: 'generateEasierPracticeQuizFlow',
    inputSchema: GenerateEasierPracticeQuizInputSchema,
    outputSchema: GenerateEasierPracticeQuizOutputSchema,
  },
  async input => {
    const { output } = await generateEasierPracticeQuizPrompt(input);
    return output!;
  }
);
