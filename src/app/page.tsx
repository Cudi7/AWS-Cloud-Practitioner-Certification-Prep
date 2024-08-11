import { CardDemo } from "./components/CardDemo";

export default function HomePage() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center text-black">
      <div className="container flex flex-col items-center justify-center gap-12 px-4 py-16">
        <h1 className="text-center text-5xl font-extrabold tracking-tight text-black sm:text-[5rem]">
          AWS <span className="text-indigo-500">Cloud Practitioner</span>{" "}
          Certification Prep
        </h1>
        <div className="max-w-3xl">
          <CardDemo />
        </div>
      </div>
    </main>
  );
}
