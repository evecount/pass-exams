
'use server';

/**
 * @fileOverview A Genkit flow to generate new quiz questions from a piece of source text.
 * This is designed for a demo page to showcase the platform's AI capabilities.
 */

import { ai } from '@/ai/genkit';
import { z } from 'zod';

// --- Schemas for Structured Output ---
const OptionSchema = z.object({
  text: z.string().describe('The text of the option.'),
  isCorrect: z.boolean().describe('Whether this option is the correct answer.'),
});

const QuestionSchema = z.object({
  questionText: z.string().describe('The main text of the question.'),
  options: z.array(OptionSchema).optional().describe('An array of 4 possible answers for multiple choice questions.'),
  explanation: z.string().describe('A brief explanation for why the correct answer is right, or the key points a short answer should contain.'),
});

const GenerateQuestionsFromTextInputSchema = z.object({
  sourceText: z.string().describe('A piece of text to be used as source material.'),
  questionType: z.enum(['multipleChoice', 'shortAnswer']).describe('The type of questions to generate.'),
  difficultyLevel: z.enum(['preSchool', 'primarySchool', 'highSchool', 'professional', 'phd']).describe('The difficulty level for the questions.'),
  numQuestions: z.number().min(1).max(10).default(5).describe('The number of questions to generate.'),
});
export type GenerateQuestionsFromTextInput = z.infer<typeof GenerateQuestionsFromTextInputSchema>;

const GenerateQuestionsFromTextOutputSchema = z.object({
  questions: z.array(QuestionSchema).describe('An array of newly generated, unique questions based on the source text and parameters.'),
});
export type GenerateQuestionsFromTextOutput = z.infer<typeof GenerateQuestionsFromTextOutputSchema>;

// --- The Server Action / Flow ---
export async function generateQuestionsFromText(input: GenerateQuestionsFromTextInput): Promise<GenerateQuestionsFromTextOutput> {
  return generateQuestionsFromTextFlow(input);
}

const generateQuestionsPrompt = ai.definePrompt({
  name: 'generateQuestionsFromTextPrompt',
  input: { schema: GenerateQuestionsFromTextInputSchema },
  output: { schema: GenerateQuestionsFromTextOutputSchema },
  prompt: `You are an expert curriculum designer and exam question creator.
Your task is to analyze the provided source text and generate a set of high-quality questions based on the given parameters.

**Instructions:**
1.  Read the source text carefully to understand the core topics and concepts.
2.  Generate {{{numQuestions}}} unique questions that test these concepts.
3.  The style and complexity of the questions must match the specified **Difficulty Level**: '{{{difficultyLevel}}}'.
    - 'preSchool': Use very simple language, one-sentence questions, and concrete concepts suitable for a 4-6 year old.
    - 'primarySchool': Use clear language suitable for ages 7-12. Focus on factual recall and basic comprehension.
    - 'highSchool': Use more formal language and test analytical skills or deeper understanding.
    - 'professional': Use industry-specific terminology. The questions should be complex, scenario-based, and suitable for a professional certification exam.
    - 'phd': Use academic language. The questions should test critical thinking, synthesis of information, and complex problem-solving, similar to a university exam or aptitude test like the LSAT.
4.  The format of the questions must match the specified **Question Type**: '{{{questionType}}}'.
    - If 'multipleChoice', each question must have exactly 4 options, with one marked as correct.
    - If 'shortAnswer', do not provide options; the 'explanation' field should describe the key points the correct answer should contain.
5.  Provide a clear and concise explanation for each question.
6.  Do NOT simply copy sentences from the source text. Create new scenarios and wording to test true understanding.

**Source Text:**
\`\`\`
{{{sourceText}}}
\`\`\`

Now, generate the {{{numQuestions}}} new questions based on this text and the specified parameters.`,
  // Add safety settings to prevent generation from inappropriate content.
  config: {
    safetySettings: [
      {
        category: 'HARM_CATEGORY_DANGEROUS_CONTENT',
        threshold: 'BLOCK_ONLY_HIGH',
      },
      {
        category: 'HARM_CATEGORY_HARASSMENT',
        threshold: 'BLOCK_MEDIUM_AND_ABOVE',
      },
      {
        category: 'HARM_CATEGORY_HATE_SPEECH',
        threshold: 'BLOCK_MEDIUM_AND_ABOVE',
      },
      {
        category: 'HARM_CATEGORY_SEXUALLY_EXPLICIT',
        threshold: 'BLOCK_MEDIUM_AND_ABOVE',
      },
    ],
  },
});

const generateQuestionsFromTextFlow = ai.defineFlow(
  {
    name: 'generateQuestionsFromTextFlow',
    inputSchema: GenerateQuestionsFromTextInputSchema,
    outputSchema: GenerateQuestionsFromTextOutputSchema,
  },
  async (input) => {
    const { output } = await generateQuestionsPrompt(input);
    return output!;
  }
);
