import { env } from "@/env";
import QuizComponent from "@/components/quiz";
import RatingComponent from "@/components/quiz/rating";
import { fetchQuizData } from "@/lib/fetchQuizData";

export default async function Quiz() {
  const questionsArray = await fetchQuizData(env.QUIZ_DATA_URL);

  return (
    <>
      <div className="relative flex-col items-center justify-center">
        <RatingComponent />
        <QuizComponent questionsArray={questionsArray} />
      </div>
    </>
  );
}
