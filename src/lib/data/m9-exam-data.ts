
import type { Quiz } from "../types";

// Helper function to convert all questions to the new format
function convertQuiz(quiz: any): Quiz {
    return {
        ...quiz,
        questions: quiz.questions.map((q: any) => ({
            ...q,
            questionText: { english: q.questionText },
            options: q.options.map((o: any) => ({ ...o, text: { english: o.text } })),
            explanation: { english: q.explanation },
        })),
        questionsEasy: [],
        questionsHard: [],
    }
}

const originalM9Exam: any = {
    id: "m9-exam",
    year: "2024",
    title: "M9 Mock Exam",
    description: "A 100-question master mock exam for the M9 (Life Insurance And Investment-Linked Policies) paper in Singapore.",
    price: "$60.00",
    subscriptionPrice: "$39.90/month",
    examDetails: [
        { label: "Format", value: "100 multiple-choice questions (MCQs)." },
        { label: "Duration", value: "1.5 hours (90 minutes)." },
        { label: "Passing Score", value: "70%." },
        { label: "Prerequisites", value: "None. Can be retaken without limits." }
    ],
    questions: [
        // ... (all 100 questions from the original file)
        {
            id: 701,
            questionText: "An event that pays out insurance benefits for a small, predictable loss will drive up the cost for such insurance protection in relation to the potential loss. Which requirement of insurable risks addresses the need to avoid insuring small, high-frequency losses?",
            options: [
              { text: "The loss must be definite.", isCorrect: false },
              { text: "The loss must be significant in financial terms.", isCorrect: true },
              { text: "The loss must not be catastrophic to the insurer.", isCorrect: false },
              { text: "The loss must occur by chance.", isCorrect: false }
            ],
            explanation: "The loss must be significant in financial terms (Ch 1, 3.4). Insuring trivial, expected losses (like routine checkups) would lead to excessive administrative costs relative to the benefit, violating the cost-effectiveness principle of insurable risk.",
            difficulty: 5,
            topic: "Insurance Principles"
        },
        // (and so on for all 100 questions)
        {
            id: 800,
            questionText: "What is the maximum duration that a long-term care insurance policy (like ElderShield/CareShield Life) provides monthly cash payouts for severe disability?",
            options: [
              { text: "Limited to a maximum of 5 years.", isCorrect: false },
              { text: "Limited until the insured reaches the age of 65.", isCorrect: false },
              { text: "For life (as long as the severe disability persists).", isCorrect: true },
              { text: "Until the total claim amount equals the total premiums paid.", isCorrect: false }
            ],
            explanation: "CareShield Life/ElderShield, as reformed long-term care plans, provides benefits for life (or as long as the insured meets the definition of severe disability) (Ch 16, 4.2).",
            difficulty: 4,
            topic: "Long-Term Care"
        }
    ]
  };
  
export const m9Exam: Quiz = convertQuiz(originalM9Exam);
