"use client";
import Link from "next/link";
import { Play, RefreshCw, RotateCw, Shuffle } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { useQuizProgress } from "@/lib/hooks/useQuizProgress";

export function ButtonActions() {
  const { hasProgress, loading, resetProgress, hasMistakes } =
    useQuizProgress();

  if (loading) return <LoadingSpinner />;

  return (
    <div
      className={`grid gap-5 sm:gap-4 ${
        hasMistakes && hasProgress
          ? "grid-cols-1 sm:grid-cols-2"
          : "grid-cols-2"
      }`}
    >
      <Button asChild size="lg">
        <Link href="/quiz">
          {hasProgress ? "Resume Quiz" : "Start Quiz"}
          <Play className="ml-2" size={20} />
        </Link>
      </Button>
      <Button asChild size="lg" variant={"outline"}>
        <Link href="/quiz/random">
          Start Randomized Quiz
          <Shuffle className="ml-2" size={20} />
        </Link>
      </Button>
      {hasMistakes ? (
        <Button asChild size="lg" variant={"emphasized"}>
          <Link href="/quiz/mistakes">
            Practice Mistakes
            <RotateCw className="ml-2" size={20} />
          </Link>
        </Button>
      ) : null}
      {hasProgress ? (
        <Dialog>
          <DialogTrigger asChild>
            <Button size="lg" variant="secondary">
              Reset Progress
              <RefreshCw className="ml-2" size={20} />
            </Button>
          </DialogTrigger>
          <DialogContent className="sm:max-w-[425px]">
            <DialogHeader>
              <DialogTitle>Reset Quiz Progress</DialogTitle>
              <DialogDescription>
                This action will permanently delete all your saved progress for
                the quiz. You won&#39;t be able to undo this. Are you sure you
                want to proceed?
              </DialogDescription>
            </DialogHeader>

            <DialogFooter>
              <Button onClick={resetProgress} variant="destructive">
                Confirm Reset
              </Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      ) : null}
    </div>
  );
}

function LoadingSpinner() {
  return (
    <div className="mx-auto w-full max-w-sm rounded-md p-4">
      <div className="flex justify-center">
        <div className="h-10 w-10 animate-spin rounded-full bg-slate-700"></div>
      </div>
      <p className="mt-5 text-center">Loading...</p>
    </div>
  );
}
