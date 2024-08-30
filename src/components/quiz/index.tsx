"use client";

import { useState, useRef, useEffect } from "react";
import { Lightbulb, ArrowRight, Check } from "lucide-react";
import { type Question } from "@/app/data";
import QuizAnswer from "./answer";
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
    setSelectedOptions([option]);
  };

  const handleCheckAnswer = () => {
    setShowAnswer(true);
    const correctAnswer = selectedOptions[0] === currentQuestion.answer;
    setIsCorrect(correctAnswer);

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
    localStorage.setItem("quizProgress", nextQuestionIndex.toString());

    setTimeout(() => {
      titleRef.current?.scrollIntoView({ behavior: "smooth" });
    }, 0);
  };

  useEffect(() => {
    if (showClue) {
      const timer = setTimeout(() => {
        setShowClue(false);
      }, 10000);

      return () => clearTimeout(timer);
    }
  }, [showClue]);

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
