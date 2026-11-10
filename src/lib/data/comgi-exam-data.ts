import type { Quiz } from "../types";

export const comgiExam: Quiz = {
    id: "comgi-exam",
    year: "2024",
    title: "ComGI Mock Exam",
    description: "A mock exam for the ComGI (Commercial General Insurance) paper, covering business-related risks.",
    price: "$50.00",
    subscriptionPrice: "$29.90/month",
    examDetails: [
        { label: "Format", value: "50 multiple-choice questions (MCQs)." },
        { label: "Duration", value: "1 hour." },
        { label: "Passing Score", value: "70%." }
    ],
    questions: [
        {
            "id": 1201,
            "questionText": "A 'Fire and Extraneous Perils' policy for a commercial property typically covers damage from:",
            "options": [
              { "text": "War and terrorism.", "isCorrect": false },
              { "text": "Fire, lightning, and explosion of domestic boilers.", "isCorrect": true },
              { "text": "Theft by employees.", "isCorrect": false },
              { "text": "Normal wear and tear of the building.", "isCorrect": false }
            ],
            "explanation": "A standard Fire and Extraneous Perils policy covers damage caused by fire, lightning, and specific additional perils ('extraneous perils') such as explosions. War, employee theft, and wear and tear are standard exclusions.",
            "difficulty": 5,
            "topic": "Property Insurance"
        },
        {
            "id": 1202,
            "questionText": "What type of liability does a Public Liability Insurance policy primarily cover?",
            "options": [
              { "text": "Liability towards the company's own employees.", "isCorrect": false },
              { "text": "Liability for professional negligence or errors.", "isCorrect": false },
              { "text": "Legal liability to third parties for bodily injury or property damage arising from the business operations.", "isCorrect": true },
              { "text": "Liability for a director's wrongful acts.", "isCorrect": false }
            ],
            "explanation": "Public Liability insurance is designed to protect a business against claims from third parties (e.g., customers, members of the public) for injury or property damage that occurs on the business premises or as a result of its operations.",
            "difficulty": 6,
            "topic": "Liability Insurance"
        }
    ],
    questionsEasy: [],
    questionsHard: [],
};
