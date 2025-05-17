export interface DataQuestions {
  response_code: number;
  results: Question[];
}
export type Difficulty = "easy" | "medium" | "hard";
export type Statistic = Record<Difficulty, { correct: number; total: number }>;
export interface Question {
  type: string;
  difficulty: Difficulty;
  category: string;
  question: string;
  correct_answer: string;
  incorrect_answers: string[];
}

export interface SelectOption {
  label: string;
  value: string ;
}