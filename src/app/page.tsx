import { CardDemo } from "./components/CardDemo";
import { shuffledQuestions } from "./data";

export default function HomePage() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center text-black">
      <div className="container flex flex-col items-center justify-center gap-12 px-4 py-16">
        {shuffledQuestions ? <CardDemo questions={shuffledQuestions} /> : null}
      </div>
    </main>
  );
}
