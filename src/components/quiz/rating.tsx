"use client";

import { useQuizRating } from "@/lib/hooks/useQuizProgress";

export default function Rating() {
  const { currentRating, ratingDisplay, ratingColor } = useQuizRating();

  return currentRating ? (
    <p
      className={`${ratingColor} absolute -bottom-10 right-0 font-semibold text-indigo-500`}
    >
      Approval Rate: {ratingDisplay}
    </p>
  ) : null;
}
