import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function About() {
  return (
    <Card className="max-w-xl dark:bg-gray-800">
      <CardHeader>
        <CardTitle>About This App</CardTitle>
      </CardHeader>
      <CardContent className="text-slate-700 dark:text-slate-300">
        <p className="mb-4">
          Hi! I&apos;m{" "}
          <a
            href="https://github.com/Cudi7"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-500 hover:underline dark:text-blue-400"
          >
            Cudi
          </a>
          , and I&apos;ve created this app to help me prepare and pass the AWS
          Cloud Practitioner Certification. This app is designed to serve as a
          study aid by providing quiz questions that cover the key topics
          you&apos;ll need to know for the exam.
        </p>
        <p className="mb-4">
          While I&apos;ve tried my best to ensure all the information is
          accurate, I&apos;m only human, and there might be mistakes. If you
          find any errors in the questions, answers, or options, please
          don&apos;t hesitate to reach out and let me know. Your feedback helps
          improve the quality of this resource for everyone!
        </p>
        <p className="font-medium">
          If you spot an issue or have any suggestions, please contact me via{" "}
          <a
            href="https://www.linkedin.com/in/cudi7"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-500 hover:underline dark:text-blue-400"
          >
            LinkedIn
          </a>{" "}
          or send me a PR on{" "}
          <a
            href="https://github.com/Cudi7/AWS-Cloud-Practitioner-Certification-Prep"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-500 hover:underline dark:text-blue-400"
          >
            GitHub
          </a>
          !
        </p>
      </CardContent>
    </Card>
  );
}
