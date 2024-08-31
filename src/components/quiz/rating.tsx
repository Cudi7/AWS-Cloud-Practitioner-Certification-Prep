"use client";
import { type QuizRating } from "@/app/data";
import { useEffect, useState } from "react";

function calculatePercentage(correct: number, total: number): string {
  if (total === 0) return "0%";
  const percentage = (correct / total) * 100;
  return `${percentage.toFixed(2)}%`;
}

export default function Rating() {
  const [currentRating, setCurrentRating] = useState<QuizRating | null>(null);
  //   const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const savedRating = localStorage.getItem("quizRating");

    if (savedRating) setCurrentRating(JSON.parse(savedRating) as QuizRating);

    // setLoading(false);
  }, []);

  const ratingDisplay = currentRating
    ? calculatePercentage(currentRating.correct, currentRating.total)
    : "No rating available";

  return <p>Rating: {ratingDisplay}</p>;
}
