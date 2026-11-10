'use server';

import { getAiHintForQuestion } from "@/ai/flows/ai-hint-for-question";
import { explainConcept as generateConceptExplanation } from "@/ai/flows/explain-concept-flow";
import { generateAudioFromText as ttsFlow } from "@/ai/flows/text-to-speech-flow";
import { translateText as translateTextFlow } from "@/ai/flows/translate-text-flow";
import { generatePracticeQuiz as generatePracticeQuizFlow } from "@/ai/flows/generate-practice-quiz-flow";
import { generateHarderPracticeQuiz as generateHarderPracticeQuizFlow } from "@/ai/flows/generate-harder-practice-quiz-flow";
import { generateEasierPracticeQuiz as generateEasierPracticeQuizFlow } from "@/ai/flows/generate-easier-practice-quiz-flow";
import { generateQuestionsFromText as generateQuestionsFromTextFlow, GenerateQuestionsFromTextInput } from "@/ai/flows/generate-questions-from-text-flow";
import { askOnboardingCaptain as askOnboardingCaptainFlow } from "@/ai/flows/onboarding-captain-flow";
import type { Quiz, Question, Language, HomePageContent } from "@/lib/types";
import { quizzes as allQuizzes } from "@/lib/quiz-data";
import { addDoc, collection, doc, updateDoc } from 'firebase/firestore';
import { getDb } from '@/lib/actions';
import { errorEmitter, FirestorePermissionError } from '@/firebase';

export async function generateHint(
  questionText: string
): Promise<{ hint?: string; error?: string }> {
  try {
    const result = await getAiHintForQuestion({ question: questionText });
    return { hint: result.hint };
  } catch (error: any) {
    console.error("Error generating AI hint:", error);
    return { error: error.message || "Failed to generate a hint. Please try again." };
  }
}

export async function explainConcept(
  questionText: string,
  answer: string,
  explanation: string
): Promise<{ explanation?: string; error?: string }> {
  try {
    if (!answer || !explanation) return { error: "Could not find the correct answer or explanation to create a deeper dive." };

    const result = await generateConceptExplanation({ question: questionText, answer, explanation });
    return { explanation: result.conceptExplanation };
  } catch (error: any) {
    console.error("Error generating concept explanation:", error);
    return { error: error.message || "Failed to generate an explanation. Please try again." };
  }
}

export async function generateAudioForText(
  text: string
): Promise<{ audioDataUri?: string; error?: string }> {
  try {
    const result = await ttsFlow({ text });
    return { audioDataUri: result.audioDataUri };
  } catch (error: any) {
    console.error("Error generating audio:", error);
    return { error: "Failed to generate audio. Please try again." };
  }
}

export async function translateHomepage(
  targetLanguage: Language
): Promise<{
  translatedJson?: { translatedHomePage: HomePageContent; translatedQuizzes: Quiz[] };
  error?: string;
}> {
  try {
    const homePageContent: HomePageContent = {
        title: "Pass Your CMFAS Exam. The First Time.",
        description: "The most effective AI-powered study platform for Singapore's CMFAS exams. Practice with high-quality mock exams for RES5, M9, M9A, and HI, and stop worrying about costly retakes.",
        features_title: "Why Smart Learners Choose Us",
        feature_1_title: "AI-Powered Explanations",
        feature_1_desc: "Don't just know the right answer, understand *why* it's right. Our \"Deeper Dive\" feature provides instant, detailed explanations of core concepts for every question.",
        feature_2_title: "Modern & Mobile-Friendly",
        feature_2_desc: "Practice anytime, anywhere. Our platform is designed for your phone, tablet, or desktop, turning downtime into productive study time. No outdated PDFs.",
        feature_3_title: "Best Value for Quality",
        feature_3_desc: "Get high-quality, up-to-date questions and powerful AI learning tools for a fraction of the cost of traditional providers. Master the material, not just memorize.",
        feature_4_title: "Privacy First",
        feature_4_desc: "We never store your name or payment details. All payments are handled by Stripe. We only keep your login email and study bookmarks. Your learning journey is your own.",
    };

    const quizContent = allQuizzes.reduce((acc, quiz) => {
        acc[`quiz_${quiz.id}_title`] = quiz.title;
        acc[`quiz_${quiz.id}_description`] = quiz.description;
        return acc;
    }, {} as Record<string, string>);

    const combinedContent = { ...homePageContent, ...quizContent };

    const result = await translateTextFlow({
      jsonToTranslate: combinedContent,
      targetLanguage,
    });
    
    if (!result.translatedJson) {
      throw new Error('AI did not return translated JSON.');
    }

    const translatedJson = result.translatedJson;

    const translatedHomePage: HomePageContent = {
      title: translatedJson.title,
      description: translatedJson.description,
      features_title: translatedJson.features_title,
      feature_1_title: translatedJson.feature_1_title,
      feature_1_desc: translatedJson.feature_1_desc,
      feature_2_title: translatedJson.feature_2_title,
      feature_2_desc: translatedJson.feature_2_desc,
      feature_3_title: translatedJson.feature_3_title,
      feature_3_desc: translatedJson.feature_3_desc,
      feature_4_title: translatedJson.feature_4_title,
      feature_4_desc: translatedJson.feature_4_desc,
    };
    
    const translatedQuizzes = allQuizzes.map(quiz => ({
      ...quiz,
      title: translatedJson[`quiz_${quiz.id}_title`],
      description: translatedJson[`quiz_${quiz.id}_description`],
    }));
    
    return { translatedJson: { translatedHomePage, translatedQuizzes } };

  } catch (error: any) {
    console.error("Error translating homepage:", error);
    return { error: `Failed to translate content: ${error.message}` };
  }
}

export async function generatePracticeQuiz(
  sourceQuestions: Question[]
): Promise<{ practiceQuiz?: Quiz; error?: string }> {
  try {
    const result = await generatePracticeQuizFlow({ questions: sourceQuestions });
    
    const practiceQuiz: Quiz = {
      id: 'ai-practice-quiz',
      year: new Date().getFullYear().toString(),
      title: 'AI Practice Session',
      description: 'A personalized quiz generated by AI based on your bookmarked questions.',
      questions: result.questions.map((q, index) => ({
        ...q,
        id: Date.now() + index,
      })),
    };

    return { practiceQuiz };
  } catch (error: any) {
    console.error("Error generating practice quiz:", error);
    return { error: "Failed to generate a practice quiz. Please try again." };
  }
}

export async function generateHarderPracticeQuiz(
  sourceQuestions: Question[]
): Promise<{ practiceQuiz?: Quiz; error?: string }> {
  try {
    const result = await generateHarderPracticeQuizFlow({ questions: sourceQuestions });
    
    const practiceQuiz: Quiz = {
      id: 'ai-mastery-quiz',
      year: new Date().getFullYear().toString(),
      title: 'AI Mastery Challenge',
      description: 'A new, more difficult quiz generated by AI to test your mastery.',
      questions: result.questions.map((q, index) => ({
        ...q,
        id: Date.now() + index,
      })),
    };

    return { practiceQuiz };
  } catch (error: any) {
    console.error("Error generating mastery quiz:", error);
    return { error: "Failed to generate a mastery quiz. Please try again." };
  }
}

export async function generateEasierPracticeQuiz(
  sourceQuestions: Question[]
): Promise<{ practiceQuiz?: Quiz; error?: string }> {
  try {
    const result = await generateEasierPracticeQuizFlow({ questions: sourceQuestions });
    
    const practiceQuiz: Quiz = {
      id: 'ai-confidence-quiz',
      year: new Date().getFullYear().toString(),
      title: 'AI Confidence-Builder',
      description: 'A new, simpler quiz generated by AI to help you master the fundamentals.',
      questions: result.questions.map((q, index) => ({
        ...q,
        id: Date.now() + index,
      })),
    };

    return { practiceQuiz };
  } catch (error: any) {
    console.error("Error generating easier quiz:", error);
    return { error: "Failed to generate a confidence-builder quiz. Please try again." };
  }
}

export async function generateQuestionsFromText(
  input: GenerateQuestionsFromTextInput
): Promise<{ questions?: any[]; error?: string }> {
  try {
    const result = await generateQuestionsFromTextFlow(input);
    return { questions: result.questions };
  } catch (error: any) {
    console.error("Error generating questions from text:", error);
    return { error: "Failed to generate questions. Please ensure your text is clear and try again." };
  }
}


export async function askOnboardingCaptain(
  input: { question: string, persona: 'homepage-business' | 'affiliate-program' }
): Promise<{ answer?: string; suggestions?: string[]; error?: string }> {
    try {
        const result = await askOnboardingCaptainFlow(input);
        
        const suggestions = result.suggestions || [
            "How does the affiliate commission work?",
            "Tell me about the white-label partnership.",
            "What is the NTU Research Pilot?",
            "How is your platform different?"
        ];

        return { answer: result.answer, suggestions };
    } catch (error: any) {
        console.error("Error with Onboarding Captain:", error);
        return { error: "The AI Captain is currently offline. Please try again later." };
    }
}


export async function saveGeneratedQuiz(
  userId: string,
  quizData: Quiz
): Promise<{ success: boolean; error?: string }> {
  try {
    const db = await getDb();
    const quizzesCollectionRef = collection(db, `users/${userId}/exams`);
    const newQuizData = { ...quizData, userId: userId, public: false };
    
    addDoc(quizzesCollectionRef, newQuizData)
        .catch(async (serverError) => {
            const permissionError = new FirestorePermissionError({
                path: quizzesCollectionRef.path,
                operation: 'create',
                requestResourceData: newQuizData,
            });
            errorEmitter.emit('permission-error', permissionError);
        });

    return { success: true };
  } catch (error: any) {
    console.error("Error saving generated quiz:", error);
    return { success: false, error: "Failed to save quiz to your dashboard." };
  }
}

export async function shareQuiz(userId: string, quizId: string): Promise<{ success: boolean, error?: string }> {
    try {
        const db = await getDb();
        const quizRef = doc(db, `users/${userId}/exams/${quizId}`);
        const updateData = { public: true };
        
        updateDoc(quizRef, updateData)
            .catch(async (serverError) => {
                const permissionError = new FirestorePermissionError({
                    path: quizRef.path,
                    operation: 'update',
                    requestResourceData: updateData
                });
                errorEmitter.emit('permission-error', permissionError);
            });
        
        return { success: true };
    } catch (error: any) {
        console.error("Error sharing quiz:", error);
        return { success: false, error: "Could not make the quiz public." };
    }
}
