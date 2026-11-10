import type { Quiz } from "../types";

export const bcpExam: Quiz = {
    id: "bcp-exam",
    year: "2024",
    title: "BCP Mock Exam",
    description: "A mock exam for the BCP (Basic Insurance Concepts and Principles) paper, the foundation for general insurance.",
    price: "$50.00",
    subscriptionPrice: "$29.90/month",
    examDetails: [
        { label: "Format", value: "50 multiple-choice questions (MCQs)." },
        { label: "Duration", value: "1 hour." },
        { label: "Passing Score", value: "70%." }
    ],
    questions: [
        {
            "id": 1001,
            "questionText": "The principle of 'Indemnity' in insurance aims to:",
            "options": [
              { "text": "Ensure the insured makes a profit from a loss.", "isCorrect": false },
              { "text": "Restore the insured to the same financial position they were in immediately before the loss.", "isCorrect": true },
              { "text": "Guarantee that the premium will be returned if no claims are made.", "isCorrect": false },
              { "text": "Transfer the risk of loss to a third party.", "isCorrect": false }
            ],
            "explanation": "The principle of indemnity is fundamental to general insurance. It ensures that the insured is compensated for their actual loss, but does not profit from the unfortunate event. The goal is to return them to their pre-loss financial status.",
            "difficulty": 4,
            "topic": "Insurance Principles"
        },
        {
            "id": 1002,
            "questionText": "In insurance terms, 'Proximate Cause' refers to:",
            "options": [
              { "text": "The least important cause of a loss.", "isCorrect": false },
              { "text": "The active, efficient cause that sets in motion a chain of events which brings about a result, without the intervention of any force started and working actively from a new and independent source.", "isCorrect": true },
              { "text": "Any event that contributes to a loss, no matter how remote.", "isCorrect": false },
              { "text": "The last event to occur before the loss is discovered.", "isCorrect": false }
            ],
            "explanation": "Proximate cause is the dominant and direct cause of the loss. For a claim to be valid, the loss must be a direct consequence of an insured peril, which is identified as the proximate cause.",
            "difficulty": 6,
            "topic": "Insurance Principles"
        }
    ],
    questionsEasy: [],
    questionsHard: [],
};
