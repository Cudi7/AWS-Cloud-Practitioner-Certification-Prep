import { env } from "@/env";
import MistakesQuizComponent from "@/components/quiz/mistakes";
import { fetchQuizData } from "@/lib/fetchQuizData";

export default async function MistakesQuiz() {
  const questionsArray = await fetchQuizData(env.QUIZ_DATA_URL);

  return (
    <>
      <div className="relative flex-col items-center justify-center">
        <MistakesQuizComponent questionsArray={questionsArray} />
      </div>
    </>
  );
}
