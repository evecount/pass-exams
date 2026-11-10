
'use server';

import { config } from 'dotenv';
config();

import '@/ai/flows/ai-hint-for-question.ts';
import '@/ai/flows/explain-concept-flow.ts';
import '@/ai/flows/text-to-speech-flow.ts';
import '@/ai/flows/translate-text-flow.ts';
import '@/ai/flows/generate-practice-quiz-flow.ts';
import '@/ai/flows/generate-harder-practice-quiz-flow.ts';
import '@/ai/flows/generate-easier-practice-quiz-flow.ts';
import '@/ai/flows/generate-questions-from-text-flow.ts';
import '@/ai/flows/onboarding-captain-flow.ts';
