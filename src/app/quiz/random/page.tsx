import { env } from "@/env";
import { type Question, QuestionsArraySchema, shuffleArray } from "@/app/data";
import RatingComponent from "@/components/quiz/rating";
import RandomQuizComponent from "@/components/quiz/random";

export default async function RandomQuiz() {
  const res = await fetch(env.QUIZ_DATA_URL);

  if (!res.ok) throw new Error("Failed to fetch quiz data");

  const data = (await res.json()) as Question[];

  const questionsArray = QuestionsArraySchema.parse(data);

  if (questionsArray.length === 0) throw new Error("The quiz data is empty.");

  return (
    <>
      <div className="relative flex-col items-center justify-center">
        <RatingComponent />
        <RandomQuizComponent questionsArray={questionsArray} />
      </div>
    </>
  );
}
