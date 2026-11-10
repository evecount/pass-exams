
export type LocalizedText = {
  english: string;
  chinese?: string;
  malay?: string;
  tamil?: string;
}

export type QuizOption = {
  text: LocalizedText;
  isCorrect: boolean;
};

export type Question = {
  id: number;
  questionText: LocalizedText;
  options: QuizOption[];
  explanation: LocalizedText;
  difficulty: number; // New field: 1-10 scale
  topic: string; // New field: e.g., "Licensing", "Derivatives"
};

export type ExamDetail = {
  label: string;
  value: string;
};

export type QuizDisclaimer = {
  title: string;
  paragraphs: string[];
};

export type Quiz = {
  id: string;
  year: string; // For display purposes
  title: string;
  description: string;
  questions: Question[];
  questionsEasy?: Question[]; // Model B
  questionsHard?: Question[]; // Model C
  disclaimer?: QuizDisclaimer;
  examDetails?: ExamDetail[];
  showDisclaimer?: boolean; 
  price?: string;
  subscriptionPrice?: string;
  oneTimePaymentLink?: string;
  subscriptionPaymentLink?: string;
  userId?: string; // Add userId to associate with a user
  public?: boolean; // Add public flag for sharing
};

export type Language = "english" | "chinese" | "malay" | "tamil";

export const AVAILABLE_LANGUAGES: { value: Language; label: string }[] = [
    { value: "english", label: "English" },
    { value: "chinese", label: "Chinese" },
    { value: "malay", label: "Malay" },
    { value: "tamil", label: "Tamil" },
].sort((a, b) => a.label.localeCompare(b.label));

export type HomePageContent = {
  title: string;
  description: string;
  features_title: string;
  feature_1_title: string;
  feature_1_desc: string;
  feature_2_title: string;
  feature_2_desc: string;
  feature_3_title: string;
  feature_3_desc: string;
  feature_4_title: string;
  feature_4_desc: string;
};
