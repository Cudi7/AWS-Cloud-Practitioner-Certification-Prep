import { env } from "@/env";
import RandomQuizComponent from "@/components/quiz/random";
import { fetchQuizData } from "@/lib/fetchQuizData";

export default async function RandomQuiz() {
  const questionsArray = await fetchQuizData(env.QUIZ_DATA_URL);

  return (
    <>
      <div className="relative flex-col items-center justify-center">
        <RandomQuizComponent questionsArray={questionsArray} />
      </div>
    </>
  );
}
