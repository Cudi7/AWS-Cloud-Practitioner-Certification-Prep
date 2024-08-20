import { useEffect, useState } from "react";

interface QuizProgress {
  hasProgress: boolean;
  loading: boolean;
  resetProgress: () => void;
}

export function useQuizProgress(): QuizProgress {
  const [hasProgress, setHasProgress] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const savedProgress = localStorage.getItem("quizProgress");
    setHasProgress(!!savedProgress);
    setLoading(false);
  }, []);

  const resetProgress = (): void => {
    localStorage.removeItem("quizProgress");
    setHasProgress(false);
  };

  return { hasProgress, loading, resetProgress };
}
