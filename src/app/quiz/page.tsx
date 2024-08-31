import { env } from "@/env";
import { type Question, QuestionsArraySchema } from "@/app/data";
import QuizComponent from "@/components/quiz";
// import RatingComponent from "@/components/quiz/rating";

export default async function Quiz() {
  const res = await fetch(env.QUIZ_DATA_URL);

  if (!res.ok) throw new Error("Failed to fetch quiz data");

  const data = (await res.json()) as Question[];

  const questionsArray = QuestionsArraySchema.parse(data);

  if (questionsArray.length === 0) throw new Error("The quiz data is empty.");

  return (
    <div className="flex-col items-center justify-center">
      {/* <RatingComponent /> */}
      <QuizComponent questionsArray={questionsArray} />
    </div>
  );
}
