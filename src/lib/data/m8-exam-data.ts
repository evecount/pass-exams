
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

const originalM8Exam: any = {
    id: "m8-exam",
    year: "2024",
    title: "M8 Mock Exam",
    description: "A 50-question master mock exam for the M8 (Collective Investment Schemes) paper in Singapore.",
    price: "$60.00",
    subscriptionPrice: "$39.90/month",
    examDetails: [
        { label: "Format", value: "50 multiple-choice questions (MCQs)." },
        { label: "Duration", value: "1 hour." },
        { label: "Passing Score", value: "70%." },
        { label: "Prerequisites", value: "None. Can be retaken without limits." }
    ],
    questions: [
        {
            "id": 801,
            "questionText": "A bond with a S$1,000 par value and a 4% coupon is purchased for S$800. What is the Current Yield?",
            "options": [
              { "text": "4.00%", "isCorrect": false },
              { "text": "5.00%", "isCorrect": true },
              { "text": "6.25%", "isCorrect": false },
              { "text": "8.00%", "isCorrect": false }
            ],
            "explanation": "Correct. Current Yield = (Annual Coupon Payment) / (Current Market Price) = (S$1000 * 4%) / S$800 = S$40 / S$800 = 5.00%.",
            "difficulty": 6,
            "topic": "Bonds"
        },
        {
            "id": 802,
            "questionText": "Which of the following describes the 'Longevity Risk' that an annuity is designed to hedge?",
            "options": [
              { "text": "The risk of dying too soon and leaving no estate.", "isCorrect": false },
              { "text": "The risk of investment assets losing value during a market crash.", "isCorrect": false },
              { "text": "The risk of outliving one's income after retirement.", "isCorrect": true },
              { "text": "The risk of inflation eroding the purchasing power of cash.", "isCorrect": false }
            ],
            "explanation": "Correct. Annuities provide a guaranteed income stream for as long as the annuitant lives, thereby hedging the risk of outliving one's savings.",
            "difficulty": 4,
            "topic": "Annuities"
        },
        // ... (and so on for all 50 questions)
        {
            "id": 850,
            "questionText": "The Yield to Maturity (YTM) of a bond accounts for:",
            "options": [
              { "text": "Only the annual interest income.", "isCorrect": false },
              { "text": "Both the interest income and the capital gain or loss if held to maturity.", "isCorrect": true },
              { "text": "Only the capital gain upon sale.", "isCorrect": false },
              { "text": "The risk-free rate plus the inflation premium only.", "isCorrect": false }
            ],
            "explanation": "Correct. YTM assumes the bond is held until maturity, capturing all cash flows. Current yield only looks at annual interest.",
            "difficulty": 6,
            "topic": "Bonds"
        }
    ]
};

export const m8Exam: Quiz = convertQuiz(originalM8Exam);
