export interface DataQuestions {
  response_code: number;
  results: Question[];
}

export interface Question {
  type: string;
  difficulty: "easy" | "medium" | "hard";
  category: string;
  question: string;
  correct_answer: string;
  incorrect_answers: string[];
}

export interface SelectOption {
  label: string;
  value: string ;
}