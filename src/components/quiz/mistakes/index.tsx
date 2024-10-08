"use client";

import { ArrowRight, Check, Lightbulb } from "lucide-react";
import { useMemo, useRef, useState } from "react";

import { type Question } from "@/app/data";
import QuizAnswer from "@/components/quiz/answer";
import QuizQuestion from "@/components/quiz/question";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { useQuizMistakes } from "@/lib/hooks/useQuizProgress";

export default function MistakesQuizComponent({
  questionsArray,
}: {
  questionsArray: Question[];
}) {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedOptions, setSelectedOptions] = useState<string[]>([]);
  const [showAnswer, setShowAnswer] = useState(false);
  const [showClue, setShowClue] = useState(false);
  const [isCorrect, setIsCorrect] = useState<boolean | null>(null);

  const { mistakes, removeMistake } = useQuizMistakes();

  const titleRef = useRef<HTMLDivElement>(null);
  const answerSectionRef = useRef<HTMLDivElement>(null);

  const filteredQuestions = useMemo(
    () => questionsArray.filter((question) => mistakes.includes(question.id)),
    [questionsArray, mistakes],
  );

  if (filteredQuestions.length === 0)
    return <div>No mistakes to review! 🥳🎉</div>;

  const currentQuestion = filteredQuestions[currentQuestionIndex]!;

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

    setTimeout(() => {
      answerSectionRef.current?.scrollIntoView({ behavior: "smooth" });
    }, 0);
  };

  const handleNextQuestion = () => {
    if (isCorrect) removeMistake(currentQuestion.id);

    setShowAnswer(false);
    setSelectedOptions([]);
    setIsCorrect(null);
    setShowClue(false);

    setCurrentQuestionIndex(0);

    setTimeout(() => {
      titleRef.current?.scrollIntoView({ behavior: "smooth" });
    }, 0);
  };

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
