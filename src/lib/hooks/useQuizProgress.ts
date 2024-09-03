import { type QuizRating } from "@/app/data";
import { useCallback, useEffect, useState } from "react";

interface QuizProgress {
  hasProgress: boolean;
  hasMistakes: boolean;
  loading: boolean;
  currentQuestionIndex: number;
  resetProgress: () => void;
}

function useLocalStorage<T>(key: string, initialValue: T | null = null) {
  const [storedValue, setStoredValue] = useState<T | null>(() => {
    if (typeof window === "undefined") {
      return initialValue;
    }
    try {
      const item = localStorage.getItem(key);

      if (item) return JSON.parse(item) as T;

      return initialValue;
    } catch (error) {
      console.error(`Error reading localStorage key "${key}":`, error);
      return initialValue;
    }
  });

  const setValue = (value: T) => {
    try {
      localStorage.setItem(key, JSON.stringify(value));
      setStoredValue(value);
    } catch (error) {
      console.error(`Error setting localStorage key "${key}":`, error);
    }
  };

  const removeValue = () => {
    try {
      localStorage.removeItem(key);
      setStoredValue(null);
    } catch (error) {
      console.error(`Error removing localStorage key "${key}":`, error);
    }
  };

  return {
    storedValue,
    setValue,
    removeValue,
  };
}

export function useQuizProgress(): QuizProgress {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState<number>(0);
  const [hasProgress, setHasProgress] = useState<boolean>(false);
  const [hasMistakes, setHasMistakes] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(true);

  const { storedValue: savedProgress, removeValue: removeSavedProgress } =
    useLocalStorage<string>("quizProgress", null);
  const { storedValue: savedMistakes, removeValue: removeSavedMistakes } =
    useLocalStorage<string>("quizMistakes", null);

  useEffect(() => {
    if (savedProgress) {
      setCurrentQuestionIndex(parseInt(savedProgress, 10));
      setHasProgress(true);
    }
    if (savedMistakes?.length) setHasMistakes(true);

    setLoading(false);
  }, [savedProgress, savedMistakes]);

  const resetProgress = useCallback((): void => {
    removeSavedProgress();
    removeSavedMistakes();
    localStorage.removeItem("quizRating");
    setCurrentQuestionIndex(0);
    setHasProgress(false);
    setHasMistakes(false);
  }, [removeSavedProgress, removeSavedMistakes]);

  return {
    hasProgress,
    hasMistakes,
    loading,
    currentQuestionIndex,
    resetProgress,
  };
}

export function useQuizMistakes() {
  const {
    storedValue: mistakes,
    setValue: setMistakes,
    removeValue: clearMistakes,
  } = useLocalStorage<number[]>("quizMistakes", []);

  const addMistake = useCallback(
    (questionId: number) => {
      const updatedMistakes = [...new Set([...(mistakes ?? []), questionId])];
      setMistakes(updatedMistakes);
    },
    [mistakes, setMistakes],
  );

  const removeMistake = useCallback(
    (questionId: number) => {
      const updatedMistakes = (mistakes ?? []).filter(
        (id) => id !== questionId,
      );
      setMistakes(updatedMistakes);
    },
    [mistakes, setMistakes],
  );

  return {
    mistakes: mistakes ?? [],
    addMistake,
    removeMistake,
    clearMistakes,
  };
}

export function useQuizRating() {
  const { storedValue: currentRating, setValue: setCurrentRating } =
    useLocalStorage<QuizRating>("quizRating");

  useEffect(() => {
    const updateRating = () => {
      const savedRating = localStorage.getItem("quizRating");
      if (savedRating) setCurrentRating(JSON.parse(savedRating) as QuizRating);
    };

    window.addEventListener("ratingUpdated", updateRating);

    return () => {
      window.removeEventListener("ratingUpdated", updateRating);
    };
  }, [setCurrentRating]);

  const percentage = currentRating
    ? calculatePercentage(currentRating.correct, currentRating.total)
    : null;

  const ratingDisplay =
    percentage !== null ? `${percentage.toFixed(2)}%` : "No rating available";

  let ratingColor = "text-red-500";

  if (percentage !== null) {
    if (percentage >= 70) {
      ratingColor = "text-green-500";
    } else if (percentage >= 50) {
      ratingColor = "text-yellow-500";
    }
  }

  return {
    currentRating,
    ratingDisplay,
    ratingColor,
  };
}

function calculatePercentage(correct: number, total: number): number {
  if (total === 0) return 0;
  return (correct / total) * 100;
}

// export const useQuizRanking = (userId: string) => {
//   const saveRanking = (isCorrect: boolean) => {
//     const userRanking = JSON.parse(
//       localStorage.getItem("quizRanking") ?? "{}",
//     ) as UserRanking;
//     const total = (userRanking.total || 0) + 1;
//     const correct = isCorrect
//       ? (userRanking.correct || 0) + 1
//       : userRanking.correct || 0;
//     const incorrect = !isCorrect
//       ? (userRanking.incorrect || 0) + 1
//       : userRanking.incorrect || 0;

//     const progressData = { userId, total, correct, incorrect };
//     localStorage.setItem("quizRanking", JSON.stringify(progressData));
//   };

//   return { saveRanking };
// };
