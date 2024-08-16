import { ModeToggle } from "./mode-toggle";

export function Navbar() {
  return (
    <div className="px-4 pb-5 pt-7 ring-1 ring-zinc-950/5 dark:bg-gray-900 dark:ring-white/5">
      <div className="mx-auto flex flex-col items-center justify-between gap-5 px-2 sm:flex-row sm:gap-0 sm:px-4 lg:max-w-7xl">
        <div className="flex items-center gap-2 sm:gap-4">
          <h1 className="text-center text-2xl font-extrabold tracking-tight text-black dark:text-white">
            AWS{" "}
            <span className="text-indigo-500 dark:text-indigo-400">
              Cloud Practitioner
            </span>{" "}
            Certification Prep
          </h1>
        </div>
        <div className="flex items-center gap-4 sm:gap-8">
          {/* <a
            className="text-sm/6 font-medium text-zinc-700 outline-blue-500 hover:text-zinc-950 dark:text-zinc-300 dark:hover:text-white"
            href="/rankings"
          >
            Rankings
          </a>

          <a
            className="text-sm/6 font-medium text-zinc-700 outline-blue-500 hover:text-zinc-950 dark:text-zinc-300 dark:hover:text-white"
            href="https://tailwindui.com/templates/catalyst"
          >
            Buy me a coffee <span aria-hidden="true">→</span>
          </a> */}
          <ModeToggle />
        </div>
      </div>
    </div>
  );
}
