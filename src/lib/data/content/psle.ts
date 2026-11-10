import type { Quiz } from "../../types";

export const psleQuizzes: Quiz[] = [
  {
    id: "psle-science-2024",
    year: "2024",
    title: "PSLE Science 2024 Mock Paper",
    description: "A comprehensive mock paper for the PSLE Science examination, covering key topics from the latest syllabus.",
    price: "Free",
    questions: [
      {
        id: 3001,
        questionText: "Which of the following is the primary function of the roots of a plant?",
        options: [
          { text: "To make food for the plant.", isCorrect: false },
          { text: "To absorb water and mineral salts from the soil.", isCorrect: true },
          { text: "To help the plant reproduce.", isCorrect: false },
          { text: "To get rid of waste materials.", isCorrect: false },
        ],
        explanation: "The roots anchor the plant and are responsible for absorbing water and dissolved mineral salts from the soil, which are essential for photosynthesis and growth.",
        difficulty: 4,
        topic: "Plant Systems"
      },
      {
        id: 3002,
        questionText: "Which of these materials is the best conductor of electricity?",
        options: [
          { text: "Rubber", isCorrect: false },
          { text: "Wood", isCorrect: false },
          { text: "Copper", isCorrect: true },
          { text: "Glass", isCorrect: false },
        ],
        explanation: "Copper is a metal and an excellent conductor of electricity, which is why it is commonly used in electrical wires. Rubber, wood, and glass are insulators.",
        difficulty: 3,
        topic: "Circuits and Electricity"
      },
      {
        id: 3003,
        questionText: "The process by which water changes from a liquid to a gas (water vapour) is called:",
        options: [
          { text: "Condensation", isCorrect: false },
          { text: "Evaporation", isCorrect: true },
          { text: "Freezing", isCorrect: false },
          { text: "Melting", isCorrect: false },
        ],
        explanation: "Evaporation is the process where a liquid turns into a gas when it is heated. Condensation is the opposite process (gas to liquid).",
        difficulty: 4,
        topic: "Water Cycle"
      },
    ],
    questionsEasy: [],
    questionsHard: [],
  },
  {
    id: "psle-maths-2024",
    year: "2024",
    title: "PSLE Maths 2024 Mock Paper",
    description: "A practice paper for the PSLE Mathematics examination, focusing on problem-solving and heuristic-based questions.",
    price: "Free",
    questions: [
      {
        id: 4001,
        questionText: "A baker had 2/3 kg of flour. He used 1/4 kg to bake a cake. How much flour did he have left?",
        options: [
          { text: "1/12 kg", isCorrect: false },
          { text: "5/12 kg", isCorrect: true },
          { text: "1/2 kg", isCorrect: false },
          { text: "11/12 kg", isCorrect: false },
        ],
        explanation: "To find the remaining flour, subtract the used amount from the initial amount. Find a common denominator: 2/3 = 8/12 and 1/4 = 3/12. So, 8/12 - 3/12 = 5/12 kg.",
        difficulty: 5,
        topic: "Fractions"
      },
      {
        id: 4002,
        questionText: "A rectangular field has a length of 20 m and a perimeter of 64 m. What is the area of the field?",
        options: [
          { text: "240 m²", isCorrect: true },
          { text: "1280 m²", isCorrect: false },
          { text: "44 m²", isCorrect: false },
          { text: "220 m²", isCorrect: false },
        ],
        explanation: "Perimeter = 2 * (Length + Breadth). So, 64 = 2 * (20 + Breadth). This means 32 = 20 + Breadth, so the breadth is 12 m. Area = Length * Breadth = 20 * 12 = 240 m².",
        difficulty: 6,
        topic: "Area and Perimeter"
      },
    ],
    questionsEasy: [],
    questionsHard: [],
  }
];
