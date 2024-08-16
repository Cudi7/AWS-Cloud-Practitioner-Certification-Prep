import { CardDemo } from "./components/CardDemo";

export default function HomePage() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center text-black">
      <div className="container flex flex-col items-center justify-center gap-12 px-4 py-16">
        <CardDemo />
      </div>
    </main>
  );
}
