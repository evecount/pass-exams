import type { Quiz } from "../types";

export const m8aExam: Quiz = {
    id: "m8a-exam",
    year: "2024",
    title: "M8A Mock Exam",
    description: "A 50-question master mock exam for the M8A (Collective Investment Schemes II) paper, covering advanced CIS topics.",
    price: "$60.00",
    subscriptionPrice: "$39.90/month",
    examDetails: [
        { label: "Format", value: "50 multiple-choice questions (MCQs)." },
        { label: "Duration", value: "1 hour." },
        { label: "Passing Score", value: "70%." },
        { label: "Prerequisites", value: "M8. Can be retaken without limits." }
    ],
    questions: [
        {
            "id": 901,
            "questionText": "When a hedge fund uses a 'lock-up' period, what is its primary purpose?",
            "options": [
              { "text": "To guarantee a minimum return for new investors.", "isCorrect": false },
              { "text": "To prevent investors from redeeming their capital for a specified period, allowing the manager to invest in illiquid assets.", "isCorrect": true },
              { "text": "To ensure the fund manager's performance fee is calculated daily.", "isCorrect": false },
              { "text": "To restrict the fund from using leverage or short-selling.", "isCorrect": false }
            ],
            "explanation": "A lock-up period is a contractual agreement that prevents investors from withdrawing their money for a certain length of time. This stability allows the fund manager to invest in less liquid assets that may offer higher returns, without facing redemption pressure.",
            "difficulty": 7,
            "topic": "Hedge Funds"
        },
        {
            "id": 902,
            "questionText": "What is the primary function of an 'accredited investor' definition in the context of CIS regulation in Singapore?",
            "options": [
              { "text": "To provide them with preferential access to IPOs.", "isCorrect": false },
              { "text": "To allow them to invest in restricted, higher-risk schemes not offered to retail investors, assuming they can bear the risks.", "isCorrect": true },
              { "text": "To exempt them from paying capital gains tax on their investments.", "isCorrect": false },
              { "text": "To ensure they receive a higher dividend payout from REITs.", "isCorrect": false }
            ],
            "explanation": "The 'accredited investor' framework allows sophisticated investors who meet certain wealth or income thresholds to access a wider range of complex and higher-risk investment products, as they are deemed to have the financial capacity to absorb potential losses and the knowledge to assess the risks.",
            "difficulty": 6,
            "topic": "Regulation"
        },
        {
            "id": 903,
            "questionText": "A feeder fund's primary activity is to:",
            "options": [
              { "text": "Invest in a diversified portfolio of direct securities.", "isCorrect": false },
              { "text": "Invest all or substantially all of its assets into a single underlying master fund.", "isCorrect": true },
              { "text": "Provide capital-guaranteed returns to its investors.", "isCorrect": false },
              { "text": "Specialize in short-selling and arbitrage strategies.", "isCorrect": false }
            ],
            "explanation": "A feeder fund is a vehicle that pools capital from investors and then 'feeds' that capital into a larger, central 'master fund' which is responsible for executing the investment strategy.",
            "difficulty": 5,
            "topic": "CIS Structure"
        }
    ],
    questionsEasy: [],
    questionsHard: [],
};
