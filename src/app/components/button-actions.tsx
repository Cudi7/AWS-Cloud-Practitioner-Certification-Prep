"use client";
import { useEffect, useState } from "react";
import Link from "next/link";
import { Play, RefreshCw } from "lucide-react";
import { Button } from "@/components/ui/button";

export function ButtonActions() {
  const [hasProgress, setHasProgress] = useState(false);
  const [loading, setLoading] = useState(true); // Track loading state

  useEffect(() => {
    const savedProgress = localStorage.getItem("quizProgress");
    setHasProgress(!!savedProgress);
    setLoading(false); // Set loading to false once check is complete
  }, []);

  const handleResetProgress = (): void => {
    localStorage.removeItem("quizProgress");
    setHasProgress(false);
  };

  if (loading) {
    return (
      <div className="mx-auto w-full max-w-sm rounded-md p-4 shadow">
        <div className="flex animate-spin space-x-4">
          <div className="h-10 w-10 rounded-full bg-slate-700"></div>
        </div>
        <p className="mt-5">loading...</p>
      </div>
    );
  }

  return (
    <>
      {!hasProgress ? (
        <Button asChild size="lg">
          <Link href="/quiz">
            Start Quiz
            <Play className="ml-2" size={20} />
          </Link>
        </Button>
      ) : (
        <div className="flex space-x-4">
          <Button asChild size="lg">
            <Link href="/quiz">
              Resume Quiz
              <Play className="ml-2" size={20} />
            </Link>
          </Button>
          <Button size="lg" variant="outline" onClick={handleResetProgress}>
            Reset Progress
            <RefreshCw className="ml-2" size={20} />
          </Button>
        </div>
      )}
    </>
  );
}
