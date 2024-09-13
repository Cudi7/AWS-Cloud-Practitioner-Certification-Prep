import { ButtonActions } from "./button-actions";

export default function HomePage() {
  return (
    <>
      <main className="flex flex-grow flex-col items-center justify-center gap-12 text-black dark:text-white">
        <h1 className="text-center text-2xl font-extrabold tracking-tight text-black dark:text-white">
          AWS{" "}
          <span className="text-indigo-500 dark:text-indigo-400">
            Cloud Practitioner
          </span>{" "}
          Certification Prep
        </h1>

        <ButtonActions />
      </main>
    </>
  );
}
