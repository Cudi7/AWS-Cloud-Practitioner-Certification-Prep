import { CardDemo } from "./components/card-demo";
import { shuffledQuestions } from "./data";

export default function HomePage() {
  return shuffledQuestions ? <CardDemo questions={shuffledQuestions} /> : null;
}
