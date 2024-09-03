"use client";

import { useState, useRef, useEffect, useId } from "react";
import { Lightbulb, ArrowRight, Check } from "lucide-react";
import { type UserRating, type Question } from "@/app/data";
import QuizAnswer from "@/components/quiz/answer";
import QuizQuestion from "@/components/quiz/question";
import { Alert, AlertDescription } from "@/components/ui/alert";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useQuizMistakes } from "@/lib/hooks/useQuizProgress";

export default function QuizComponent({
  questionsArray,
}: {
  questionsArray: Question[];
}) {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedOptions, setSelectedOptions] = useState<string[]>([]);
  const [showAnswer, setShowAnswer] = useState(false);
  const [showClue, setShowClue] = useState(false);
  const [isCorrect, setIsCorrect] = useState<boolean | null>(null);
  const [loading, setLoading] = useState(true);

  const { addMistake, removeMistake } = useQuizMistakes();

  const userId = useId();
  const titleRef = useRef<HTMLDivElement>(null);
  const answerSectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const savedProgress = localStorage.getItem("quizProgress");

    if (savedProgress) setCurrentQuestionIndex(parseInt(savedProgress, 10));

    setLoading(false);
  }, []);

  const currentQuestion = questionsArray[currentQuestionIndex ?? 0]!;

  const handleOptionChange = (option: string) => {
    if (showAnswer) return;

    if (currentQuestion.multiSelect) {
      setSelectedOptions((prev) =>
        prev.includes(option)
          ? prev.filter((opt) => opt !== option)
          : [...prev, option],
      );
    } else {
      setSelectedOptions([option]);
    }
  };

  const handleCheckAnswer = () => {
    setShowAnswer(true);

    const { multiSelect, answer } = currentQuestion;

    const correctAnswer = multiSelect
      ? Array.isArray(answer) &&
        selectedOptions.sort().join(",") === answer.sort().join(",")
      : selectedOptions[0] === answer;

    setIsCorrect(correctAnswer);

    correctAnswer
      ? removeMistake(currentQuestion.id)
      : addMistake(currentQuestion.id);

    setTimeout(() => {
      answerSectionRef.current?.scrollIntoView({ behavior: "smooth" });
    }, 0);
  };

  const handleNextQuestion = () => {
    saveRating();
    saveProgress();

    setShowAnswer(false);
    setSelectedOptions([]);
    setIsCorrect(null);
    setShowClue(false);

    const nextQuestionIndex =
      (currentQuestionIndex + 1) % questionsArray.length;
    setCurrentQuestionIndex(nextQuestionIndex);
    localStorage.setItem("quizProgress", nextQuestionIndex.toString());

    setTimeout(() => {
      titleRef.current?.scrollIntoView({ behavior: "smooth" });
    }, 0);
  };

  const saveProgress = () => {
    const nextQuestionIndex =
      (currentQuestionIndex + 1) % questionsArray.length;
    setCurrentQuestionIndex(nextQuestionIndex);
    localStorage.setItem("quizProgress", nextQuestionIndex.toString());
  };

  const saveRating = () => {
    const userRating = JSON.parse(
      localStorage.getItem("quizRating") ?? "{}",
    ) as UserRating;

    const total = (userRating.total || 0) + 1;
    const correct = isCorrect
      ? (userRating.correct || 0) + 1
      : userRating.correct || 0;
    const incorrect = !isCorrect
      ? (userRating.incorrect || 0) + 1
      : userRating.incorrect || 0;

    const progressData = {
      userId,
      total,
      correct,
      incorrect,
    };

    localStorage.setItem("quizRating", JSON.stringify(progressData));
    window.dispatchEvent(new Event("ratingUpdated"));
  };

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
          onClick={() => setShowClue(true)}
          aria-label="Show Clue"
        />
      </CardHeader>
      <CardContent className="grid gap-4">
        {showClue && (
          <Alert
            variant={null}
            className="dark:border-gray-700 dark:bg-gray-800 dark:text-gray-400"
          >
            <Lightbulb className="size-4" />
            <AlertDescription>{currentQuestion.clue}</AlertDescription>
          </Alert>
        )}

        <QuizQuestion
          question={currentQuestion}
          selectedOptions={selectedOptions}
          handleOptionChange={handleOptionChange}
          showAnswer={showAnswer}
        />
        {showAnswer && (
          <div ref={answerSectionRef}>
            <QuizAnswer
              isCorrect={isCorrect}
              answer={currentQuestion.answer}
              explanation={currentQuestion.explanation}
            />
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
