import { ChevronDown } from "lucide-react";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

import Link from "next/link";

export function DropdownMenuQuiz() {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger className="group flex items-center text-sm font-semibold hover:text-indigo-500 dark:hover:text-indigo-400">
        Quiz
        <ChevronDown
          className="relative top-[1px] ml-1 h-3 w-3 transition duration-200 group-data-[state=open]:rotate-180"
          aria-hidden="true"
        />
      </DropdownMenuTrigger>

      <DropdownMenuContent className="w-56">
        <DropdownMenuGroup>
          <DropdownMenuItem asChild className="flex-col items-start">
            <Link
              className="text-sm font-semibold leading-6 hover:text-indigo-500 dark:hover:text-indigo-400"
              href="/quiz"
            >
              Start Quiz
              <p className="text-sm font-normal">
                Track your progress with each question.
              </p>
            </Link>
          </DropdownMenuItem>
          <DropdownMenuItem asChild className="flex-col items-start">
            <Link
              className="text-sm font-semibold leading-6 hover:text-indigo-500 dark:hover:text-indigo-400"
              href="/quiz/random"
            >
              Randomized Quiz
              <p className="text-sm font-normal">
                Answer questions in random order.
              </p>
            </Link>
          </DropdownMenuItem>

          <DropdownMenuItem asChild className="flex-col items-start">
            <Link
              className="text-sm font-semibold leading-6 hover:text-indigo-500 dark:hover:text-indigo-400"
              href="/quiz/mistakes"
            >
              Practice Mistakes
              <p className="text-sm font-normal">
                Focus on questions you missed.
              </p>
            </Link>
          </DropdownMenuItem>
        </DropdownMenuGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
