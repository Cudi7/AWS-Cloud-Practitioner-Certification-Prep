import { env } from "@/env";
import { type Question, QuestionsArraySchema } from "@/app/data";
import MistakesQuizComponent from "@/components/quiz/mistakes/page";

export default async function MistakesQuiz() {
  const res = await fetch(env.QUIZ_DATA_URL);

  if (!res.ok) throw new Error("Failed to fetch quiz data");

  const data = (await res.json()) as Question[];

  const questionsArray = QuestionsArraySchema.parse(data);

  if (questionsArray.length === 0) throw new Error("The quiz data is empty.");

  return (
    <>
      <div className="relative flex-col items-center justify-center">
        <MistakesQuizComponent questionsArray={questionsArray} />
      </div>
    </>
  );
}
