import { type Question, type UserRanking } from "@/app/data";
import { useEffect, useState } from "react";

interface QuizProgress {
  hasProgress: boolean;
  loading: boolean;
  currentQuestionIndex: number;
  saveProgress: () => void;
  resetProgress: () => void;
}

export function useQuizProgress(
  initialIndex = 0,
  questionsArray?: Question[],
): QuizProgress {
  const [currentQuestionIndex, setCurrentQuestionIndex] =
    useState(initialIndex);
  const [hasProgress, setHasProgress] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const savedProgress = localStorage.getItem("quizProgress");
    if (savedProgress !== null) {
      setCurrentQuestionIndex(parseInt(savedProgress, 10));
      setHasProgress(true);
    }
    setLoading(false);
  }, []);

  const saveProgress = (): void => {
    if (!questionsArray) return;
    const nextQuestionIndex =
      (currentQuestionIndex + 1) % questionsArray.length;
    setCurrentQuestionIndex(nextQuestionIndex);
    localStorage.setItem("quizProgress", nextQuestionIndex.toString());
  };

  const resetProgress = (): void => {
    localStorage.removeItem("quizProgress");
    localStorage.removeItem("quizRanking");
    setCurrentQuestionIndex(initialIndex);
    setHasProgress(false);
  };

  return {
    hasProgress,
    loading,
    currentQuestionIndex,
    saveProgress,
    resetProgress,
  };
}

export const useQuizRanking = (userId: string) => {
  const saveRanking = (isCorrect: boolean) => {
    const userRanking = JSON.parse(
      localStorage.getItem("quizRanking") ?? "{}",
    ) as UserRanking;
    const total = (userRanking.total || 0) + 1;
    const correct = isCorrect
      ? (userRanking.correct || 0) + 1
      : userRanking.correct || 0;
    const incorrect = !isCorrect
      ? (userRanking.incorrect || 0) + 1
      : userRanking.incorrect || 0;

    const progressData = { userId, total, correct, incorrect };
    localStorage.setItem("quizRanking", JSON.stringify(progressData));
  };

  return { saveRanking };
};
