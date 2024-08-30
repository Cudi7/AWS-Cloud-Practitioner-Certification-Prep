import { type Question } from "@/app/data";
import { Label } from "@/components/ui/label";
import { cn } from "@/lib/utils";

type QuizQuestionProps = {
  question: Pick<Question, "question" | "options" | "multiSelect">;
  selectedOptions: string[];
  handleOptionChange: (option: string) => void;
  showAnswer: boolean;
};

export default function QuizQuestion({
  question,
  selectedOptions,
  handleOptionChange,
  showAnswer,
}: QuizQuestionProps) {
  return (
    <>
      <h2 className="text-base font-medium">{question.question}</h2>
      {question.options.map((option, idx) => (
        <div key={idx}>
          <input
            type={question.multiSelect ? "checkbox" : "radio"}
            value={option}
            id={`option-${idx}`}
            checked={selectedOptions.includes(option)}
            onChange={() => handleOptionChange(option)}
            className="peer sr-only"
            disabled={showAnswer}
          />
          <Label
            htmlFor={`option-${idx}`}
            className={cn(
              "border-muted bg-popover hover:bg-accent hover:text-accent-foreground flex flex-col items-center justify-between rounded-md border-2 p-4 peer-checked:border-slate-400 dark:border-gray-700 dark:bg-gray-700 dark:hover:bg-gray-600 sm:text-base",
              {
                "cursor-not-allowed opacity-50": showAnswer,
              },
            )}
          >
            {option}
          </Label>
        </div>
      ))}
    </>
  );
}
