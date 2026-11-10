import type { Quiz } from "../types";

export const pgiExam: Quiz = {
    id: "pgi-exam",
    year: "2024",
    title: "PGI Mock Exam",
    description: "A mock exam for the PGI (Personal General Insurance) paper, covering insurance for individuals like motor and travel.",
    price: "$50.00",
    subscriptionPrice: "$29.90/month",
    examDetails: [
        { label: "Format", value: "50 multiple-choice questions (MCQs)." },
        { label: "Duration", value: "1 hour." },
        { label: "Passing Score", value: "70%." }
    ],
    questions: [
        {
            "id": 1101,
            "questionText": "Under a standard travel insurance policy, which of the following is typically excluded?",
            "options": [
              { "text": "Emergency medical expenses due to an accident abroad.", "isCorrect": false },
              { "text": "Loss of baggage due to theft.", "isCorrect": false },
              { "text": "Trip cancellation due to a pre-existing medical condition that was not declared.", "isCorrect": true },
              { "text": "Flight delays due to adverse weather conditions.", "isCorrect": false }
            ],
            "explanation": "Travel insurance policies almost universally exclude claims arising from pre-existing medical conditions unless they have been declared to and accepted by the insurer. This is a key aspect of the duty of disclosure.",
            "difficulty": 5,
            "topic": "Travel Insurance"
        },
        {
            "id": 1102,
            "questionText": "What does the 'No-Claim Discount (NCD)' in a motor insurance policy reward?",
            "options": [
              { "text": "Driving a car with a larger engine capacity.", "isCorrect": false },
              { "text": "A history of safe driving without making any claims.", "isCorrect": true },
              { "text": "Paying the insurance premium in a single lump sum.", "isCorrect": false },
              { "text": "Being a long-time customer of the same insurance company.", "isCorrect": false }
            ],
            "explanation": "The NCD is a discount on the premium given to policyholders who have not made a claim on their motor insurance policy for a certain number of consecutive years. It is a direct reward for being a low-risk, safe driver.",
            "difficulty": 3,
            "topic": "Motor Insurance"
        }
    ],
    questionsEasy: [],
    questionsHard: [],
};
