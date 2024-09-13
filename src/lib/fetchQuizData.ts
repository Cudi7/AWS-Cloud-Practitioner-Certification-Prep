import "server-only";

import { type Question, QuestionsArraySchema } from "@/app/data";

export async function fetchQuizData(url: string): Promise<Question[]> {
  const res = await fetch(url);

  if (!res.ok) throw new Error("Failed to fetch quiz data");

  const data = (await res.json()) as Question[];

  const questionsArray = QuestionsArraySchema.parse(data);

  if (questionsArray.length === 0) throw new Error("The quiz data is empty.");

  return questionsArray;
}
