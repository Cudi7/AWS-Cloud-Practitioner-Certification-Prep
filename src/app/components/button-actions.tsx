"use client";
import Link from "next/link";

import { Play } from "lucide-react";

import { Button } from "@/components/ui/button";

export function ButtonActions() {
  return (
    <>
      <Button asChild size="lg">
        <Link href="/quiz">
          Start Quiz
          <Play className="ml-2" size={20} />
        </Link>
      </Button>
    </>
  );
}
