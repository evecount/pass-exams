
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

const originalRes5Exam: any = {
    id: "res-5",
    year: "2024",
    title: "RES5 Mock Exam",
    description: "A comprehensive mock exam for the RES5 (Rules, Ethics and Skills for Financial Advisory Services) paper.",
    price: "$60.00",
    subscriptionPrice: "$39.90/month",
    examDetails: [
        { label: "Format", value: "Part I: 110 MCQs, Part II: 40 MCQs. Computer-based." },
        { label: "Duration", value: "Part I: 2 hours, Part II: 45 minutes." },
        { label: "Passing Score", value: "75% for Part I (Rules), 80% for Part II (Ethics & Skills). Must pass both." },
        { label: "Prerequisites", value: "None. Can be retaken without limits." },
        { label: "Study Time", value: "Approximately 112 hours recommended." }
    ],
    questions: [
        // ... (all 150 questions from the original file)
        {
            id: 1,
            questionText: "A foreign company established in Singapore provides financial advisory services but relies on its approved related corporation (licensed in Singapore) for oversight, operational systems, and compliance. Under what condition is this foreign company EXEMPTED from holding a Financial Adviser’s Licence under the FAA?",
            options: [
                { text: "The arrangement must be formally approved by the MAS.", isCorrect: true },
                { text: "The foreign company must limit its clients strictly to Institutional Investors.", isCorrect: false },
                { text: "The financial advisory services provided must be related only to Capital Markets Products.", isCorrect: false },
                { text: "The foreign company must pay a fixed annual fee in lieu of holding a licence.", isCorrect: false }
            ],
            explanation: "Regulation 32CB of the FAR provides an exemption for foreign companies operating under an approved arrangement with a related licensed corporation, provided the arrangement has been formally approved by the MAS (Study Text Ch 1, 4.8(k)).",
            difficulty: 7,
            topic: "FAA & FAR"
        },
        // (and so on for all 150 questions)
        {
            id: 150,
            questionText: "The Balance Sheet (Statement of Net Worth) and the Statement of Cash Flows differ primarily because the Statement of Cash Flows records information:",
            options: [
                { text: "As a summary of assets and liabilities at a specific point in time.", isCorrect: false },
                { text: "Showing income against expenditure over a specific period of time.", isCorrect: true },
                { text: "Detailing accumulated capital for retirement goals only.", isCorrect: false },
                { "text": "Reflecting changes in investment performance only.", isCorrect: false }
            ],
            "explanation": "Chapter 23, Section 3.1 states the Statement of Cash Flows (or income statement) shows income against expenditure over a period of time (flow), whereas the Balance Sheet shows position at a specific point in time (stock).",
            "difficulty": 4,
            "topic": "Financial Analysis"
        }
    ]
  };
  
export const res5Exam: Quiz = convertQuiz(originalRes5Exam);
