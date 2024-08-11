/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-unsafe-return */
"use client";
import { ArrowRight, Check } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { questions as originalQuestions, type Question } from "../data"; // Import the original questions
import { useState, useEffect } from "react";
import { Label } from "@/components/ui/label";
import { Alert, AlertTitle, AlertDescription } from "@/components/ui/alert";
import { AlertCircle, CheckCircle } from "lucide-react";

type CardProps = React.ComponentProps<typeof Card>;

// Utility function to shuffle an array
function shuffleArray(array: any[]) {
  return array
    .map((value) => ({ value, sort: Math.random() }))
    .sort((a, b) => a.sort - b.sort)
    .map(({ value }) => value);
}

export function CardDemo({ className, ...props }: CardProps) {
  const [shuffledQuestions, setShuffledQuestions] = useState(() =>
    shuffleArray(originalQuestions),
  ); // State to hold shuffled questions
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedOptions, setSelectedOptions] = useState<string[]>([]);
  const [showAnswer, setShowAnswer] = useState(false);
  const [isCorrect, setIsCorrect] = useState<boolean | null>(null);

  useEffect(() => {
    // Shuffle the questions when the component mounts
    setShuffledQuestions(shuffleArray(originalQuestions));
  }, []);

  const currentQuestion: Question = shuffledQuestions[currentQuestionIndex];

  if (!currentQuestion) {
    return null; // Or display a loading state or fallback UI
  }

  const handleOptionChange = (option: string) => {
    if (showAnswer) return; // Prevent changes if the answer has been checked

    if (currentQuestion.multiSelect) {
      setSelectedOptions((prevOptions) =>
        prevOptions.includes(option)
          ? prevOptions.filter((opt) => opt !== option)
          : [...prevOptions, option],
      );
    } else {
      setSelectedOptions([option]);
    }
  };

  const handleCheckAnswer = () => {
    setShowAnswer(true);

    const correctAnswer = currentQuestion.multiSelect
      ? Array.isArray(currentQuestion.answer) &&
        selectedOptions.sort().join(",") ===
          currentQuestion.answer.sort().join(",")
      : selectedOptions[0] === currentQuestion.answer;

    setIsCorrect(correctAnswer);
  };

  const handleNextQuestion = () => {
    setShowAnswer(false);
    setSelectedOptions([]);
    setIsCorrect(null);
    setCurrentQuestionIndex(
      (prevIndex) => (prevIndex + 1) % shuffledQuestions.length,
    );
  };

  return (
    <Card className={cn(className)} {...props}>
      <CardHeader>
        <CardTitle>Quiz Question</CardTitle>
        <CardDescription>
          {currentQuestion.multiSelect ? "Multiple Answers" : "Single Answer"}
        </CardDescription>
      </CardHeader>
      <CardContent className="grid gap-4">
        <div>
          <p className="text-sm font-medium leading-none">
            {currentQuestion.question}
          </p>
        </div>
        <div className="grid items-start gap-4">
          {currentQuestion.options.map((option, idx) => (
            <div key={idx}>
              <input
                type={currentQuestion.multiSelect ? "checkbox" : "radio"}
                value={option}
                id={`option-${idx}`}
                checked={selectedOptions.includes(option)}
                onChange={() => handleOptionChange(option)}
                className="peer sr-only"
                disabled={showAnswer} // Disable the input if answer is shown
              />
              <Label
                htmlFor={`option-${idx}`}
                className={cn(
                  "border-muted bg-popover hover:bg-accent hover:text-accent-foreground flex flex-col items-center justify-between rounded-md border-2 p-4 peer-checked:border-slate-400",
                  {
                    "cursor-not-allowed opacity-50": showAnswer, // Make the options visually disabled if answer is shown
                  },
                )}
              >
                {option}
              </Label>
            </div>
          ))}
        </div>
        {showAnswer && (
          <div className="mt-4 space-y-2">
            {isCorrect !== null && (
              <Alert variant={isCorrect ? "default" : "destructive"}>
                {isCorrect ? (
                  <CheckCircle className="h-4 w-4" />
                ) : (
                  <AlertCircle className="h-4 w-4" />
                )}
                <AlertTitle>
                  {isCorrect ? "Congratulations!" : "Oops!"}
                </AlertTitle>
                <AlertDescription>
                  {isCorrect
                    ? "You've selected the correct answer."
                    : "The answer you selected is incorrect."}
                </AlertDescription>
              </Alert>
            )}
            {!isCorrect && (
              <>
                <p className="text-sm font-medium leading-none">
                  Correct Answer:
                </p>
                <p className="text-muted-foreground text-sm">
                  {Array.isArray(currentQuestion.answer)
                    ? currentQuestion.answer.join(", ")
                    : currentQuestion.answer}
                </p>
              </>
            )}
            <p className="text-sm font-medium leading-none">Explanation:</p>
            <p className="text-muted-foreground text-sm">
              {currentQuestion.explanation}
            </p>
          </div>
        )}
      </CardContent>
      <CardFooter>
        <Button
          className="w-full"
          onClick={showAnswer ? handleNextQuestion : handleCheckAnswer}
        >
          {showAnswer ? (
            <>
              Next <ArrowRight className="ml-2 h-4 w-4" />
            </>
          ) : (
            <>
              <Check className="mr-2 h-4 w-4" /> Check Answer
            </>
          )}
        </Button>
      </CardFooter>
    </Card>
  );
}
