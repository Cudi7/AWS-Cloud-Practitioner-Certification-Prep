"use client";

import { useState, useEffect, useRef } from "react";
import {
  ArrowRight,
  Check,
  AlertCircle,
  CheckCircle,
  Lightbulb,
} from "lucide-react";
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
import { Label } from "@/components/ui/label";
import { Alert, AlertTitle, AlertDescription } from "@/components/ui/alert";

import { questionsArray, type Question } from "../data";

export default function Quiz() {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedOptions, setSelectedOptions] = useState<string[]>([]);
  const [showAnswer, setShowAnswer] = useState(false);
  const [showClue, setShowClue] = useState(false);
  const [isCorrect, setIsCorrect] = useState<boolean | null>(null);
  const [loading, setLoading] = useState(true);

  const answerSectionRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const savedProgress = localStorage.getItem("quizProgress");
    if (savedProgress) {
      setCurrentQuestionIndex(parseInt(savedProgress));
    }
    setLoading(false);
  }, []);

  if (loading) {
    return (
      <div className="w-full max-w-xl rounded-md border border-slate-300 p-4 shadow dark:border-slate-600">
        <div className="flex animate-pulse space-x-4">
          <div className="h-10 w-10 rounded-full bg-slate-300 dark:bg-slate-600"></div>
          <div className="flex-1 space-y-6 py-1">
            <div className="h-2 rounded bg-slate-300 dark:bg-slate-600"></div>
            <div className="space-y-3">
              <div className="grid grid-cols-3 gap-4">
                <div className="col-span-2 h-2 rounded bg-slate-300 dark:bg-slate-600"></div>
                <div className="col-span-1 h-2 rounded bg-slate-300 dark:bg-slate-600"></div>
              </div>
              <div className="h-2 rounded bg-slate-300 dark:bg-slate-600"></div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  const currentQuestion: Question | undefined =
    questionsArray[currentQuestionIndex ?? 0];

  if (!currentQuestion) {
    return null;
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

    // Scroll to the answer section after checking the answer
    setTimeout(() => {
      answerSectionRef.current?.scrollIntoView({ behavior: "smooth" });
    }, 0);
  };

  const handleNextQuestion = () => {
    setShowAnswer(false);
    setSelectedOptions([]);
    setIsCorrect(null);
    setShowClue(false);

    const nextQuestionIndex =
      (currentQuestionIndex + 1) % questionsArray.length;
    setCurrentQuestionIndex(nextQuestionIndex);
    localStorage.setItem("quizProgress", nextQuestionIndex.toString()); // Save the next question index

    setTimeout(() => {
      titleRef.current?.scrollIntoView({ behavior: "smooth" });
    }, 0);
  };

  const handleClue = () => setShowClue(true);

  return (
    <Card ref={titleRef} className="max-w-lg dark:bg-gray-800">
      <CardHeader className="flex flex-row justify-between">
        <div>
          <CardTitle>Quiz Question</CardTitle>
          <CardDescription className="text-base dark:text-gray-400">
            {currentQuestion.multiSelect ? "Multiple Answers" : "Single Answer"}
          </CardDescription>
        </div>
        <Lightbulb
          className="cursor-pointer text-blue-500 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-500"
          onClick={handleClue}
        />
      </CardHeader>
      <CardContent className="grid gap-4">
        <p className="text-base font-medium">{currentQuestion.question}</p>
        {showClue && (
          <Alert
            variant={null}
            className="dark:border-gray-700 dark:bg-gray-800 dark:text-gray-400"
          >
            <Lightbulb className="size-4" />

            <AlertDescription>{currentQuestion.clue}</AlertDescription>
          </Alert>
        )}

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
                  "border-muted bg-popover hover:bg-accent hover:text-accent-foreground flex flex-col items-center justify-between rounded-md border-2 p-4 peer-checked:border-slate-400 dark:border-gray-700 dark:bg-gray-700 dark:hover:bg-gray-600 sm:text-base",
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
          <div ref={answerSectionRef} className="mt-4 space-y-2">
            {isCorrect !== null && (
              <Alert
                variant={isCorrect ? "default" : "destructive"}
                className="dark:border-gray-700 dark:bg-gray-800 dark:text-gray-400"
              >
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
                <p className="text-sm font-medium leading-none sm:text-base">
                  Correct Answer:
                </p>
                <p className="text-muted-foreground text-base dark:text-gray-400">
                  {Array.isArray(currentQuestion.answer)
                    ? currentQuestion.answer.join(", ")
                    : currentQuestion.answer}
                </p>
              </>
            )}
            <p className="text-sm font-medium leading-none sm:text-base">
              Explanation:
            </p>
            <p className="text-muted-foreground text-base dark:text-gray-400">
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
