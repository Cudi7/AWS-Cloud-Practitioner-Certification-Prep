"use client";
import { type QuizRating } from "@/app/data";
import { useEffect, useState } from "react";

function calculatePercentage(correct: number, total: number): number {
  if (total === 0) return 0;
  return (correct / total) * 100;
}

export default function Rating() {
  const [currentRating, setCurrentRating] = useState<QuizRating | null>(null);

  const updateRating = () => {
    const savedRating = localStorage.getItem("quizRating");
    if (savedRating) setCurrentRating(JSON.parse(savedRating) as QuizRating);
  };

  useEffect(() => {
    updateRating();

    window.addEventListener("ratingUpdated", updateRating);

    return () => {
      window.removeEventListener("ratingUpdated", updateRating);
    };
  }, []);

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

  return currentRating ? (
    <p
      className={`${ratingColor} absolute -top-10 right-0 font-semibold text-indigo-500`}
    >
      Rating: {ratingDisplay}
    </p>
  ) : null;
}
