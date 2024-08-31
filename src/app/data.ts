import * as z from "zod";

const QuestionSchema = z.object({
  question: z.string(),
  options: z.array(z.string()),
  answer: z.union([z.string(), z.array(z.string())]),
  explanation: z.string(),
  multiSelect: z.boolean(),
  id: z.number(),
  clue: z.string(),
});

const UserRankingSchema = z.object({
  total: z.number(),
  correct: z.number(),
  incorrect: z.number(),
});

export interface QuizRating {
  userId: string;
  total: number;
  correct: number;
  incorrect: number;
}

export const QuestionsArraySchema = z.array(QuestionSchema);

export type Question = z.infer<typeof QuestionSchema>;
export type UserRanking = z.infer<typeof UserRankingSchema>;

// Utility function to shuffle an array using the Fisher-Yates algorithm
export function shuffleArray(array: Question[]): Question[] {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j]!, array[i]!]; // Swap elements with non-null assertion
  }
  return array;
}
