"use client";

import React, { useEffect } from "react";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <Card className="mx-auto max-w-xl dark:bg-gray-800">
      <CardHeader>
        <CardTitle>Oops! Something went wrong</CardTitle>
      </CardHeader>
      <CardContent className="text-slate-700 dark:text-slate-300">
        <p className="mb-4">
          An unexpected error occurred while trying to load the quiz. Please try
          again later.
        </p>
        <p className="mb-4">
          If the issue persists, feel free to contact me. I&apos;m constantly
          working to improve the app, and your feedback is invaluable.
        </p>
        <p className="font-medium">
          Reach out via{" "}
          <a
            href="https://www.linkedin.com/in/cudi7"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-500 hover:underline dark:text-blue-400"
          >
            LinkedIn
          </a>{" "}
          or contribute on{" "}
          <a
            href="https://github.com/Cudi7/AWS-Cloud-Practitioner-Certification-Prep"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-500 hover:underline dark:text-blue-400"
          >
            GitHub
          </a>
          .
        </p>
        <button
          onClick={() => reset()}
          className="mt-4 w-full rounded-md bg-blue-500 p-2 text-white hover:bg-blue-700 dark:bg-blue-400 dark:hover:bg-blue-500"
        >
          Try again
        </button>
      </CardContent>
    </Card>
  );
}
