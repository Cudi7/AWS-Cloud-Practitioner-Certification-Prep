import { CheckCircle, AlertCircle } from "lucide-react";
import { type Question } from "@/app/data";
import { Alert, AlertTitle, AlertDescription } from "@/components/ui/alert";

type QuizAnswerProps = Pick<Question, "answer" | "explanation"> & {
  isCorrect: boolean | null;
};

export default function QuizAnswer({
  isCorrect,
  answer,
  explanation,
}: QuizAnswerProps) {
  return (
    <div className="mt-4 space-y-2">
      <Alert
        variant={isCorrect ? "default" : "destructive"}
        className="dark:border-gray-700 dark:bg-gray-800 dark:text-gray-400"
      >
        {isCorrect ? (
          <CheckCircle className="h-4 w-4" />
        ) : (
          <AlertCircle className="h-4 w-4" />
        )}
        <AlertTitle>{isCorrect ? "Congratulations!" : "Oops!"}</AlertTitle>
        <AlertDescription>
          {isCorrect
            ? "You've selected the correct answer."
            : "The answer you selected is incorrect."}
        </AlertDescription>
      </Alert>
      {!isCorrect && (
        <>
          <p className="text-sm font-medium leading-none sm:text-base">
            Correct Answer:
          </p>
          <p className="text-muted-foreground text-base dark:text-gray-400">
            {Array.isArray(answer) ? answer.join(", ") : answer}
          </p>
        </>
      )}
      <p className="text-sm font-medium leading-none sm:text-base">
        Explanation:
      </p>
      <p className="text-muted-foreground text-base dark:text-gray-400">
        {explanation}
      </p>
    </div>
  );
}
