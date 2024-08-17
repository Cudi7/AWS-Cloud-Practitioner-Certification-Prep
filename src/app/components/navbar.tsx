/* eslint-disable @next/next/no-img-element */
import { ModeToggle } from "./mode-toggle";

export function Navbar() {
  return (
    <div className="px-4 pb-5 pt-7 ring-1 ring-zinc-950/5 dark:bg-gray-900 dark:ring-white/5">
      <div className="mx-auto flex flex-col items-center justify-between gap-5 px-2 sm:flex-row sm:gap-0 sm:px-4 lg:max-w-7xl">
        <div className="flex items-center gap-2 sm:gap-4">
          <svg
            className="h-6 text-zinc-950 dark:text-white forced-colors:text-[CanvasText]"
            fill="currentColor"
            viewBox="0 0 34 28"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M9.3311 0.166016L8.90235 0.408763L0.902352 13.7418L0.902344 14.2563L8.90234 27.5903L8.97771 27.6867L8.97871 27.6877L9.3321 27.834H25.3321L25.6857 26.9805L22.3527 23.6465L21.9991 23.5H12.2742L6.25596 14L12.2733 4.49902H21.9981L22.3517 4.35257L25.6847 1.01957L25.3311 0.166016H9.3311Z"
            />
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M27.836 5.07617L24.6 8.31317L24.5312 8.93422L27.7398 13.9997L24.5312 19.0651L24.6001 19.6862L27.8361 22.9222L28.6184 22.8259L33.7604 14.2569L33.7604 13.7424L28.6184 5.17242L27.836 5.07617Z"
            />
          </svg>

          <h1 className="text-center text-2xl font-extrabold tracking-tight text-black dark:text-white">
            CLF-
            <span className="text-indigo-500 dark:text-indigo-400">
              C02
            </span>{" "}
          </h1>
        </div>
        <div className="flex items-center gap-4 sm:gap-8">
          {/* <a
            className="text-sm/6 font-medium text-zinc-700 outline-blue-500 hover:text-zinc-950 dark:text-zinc-300 dark:hover:text-white"
            href="/rankings"
          >
            Rankings
          </a>
*/}
          <a
            className="text-sm/6 font-medium text-zinc-700 outline-blue-500 hover:text-zinc-950 dark:text-zinc-300 dark:hover:text-white"
            href="https://buymeacoffee.com/cudi7"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              alt="buy me a coffe img"
              src="https://img.buymeacoffee.com/button-api/?text=Buy me a coffee&emoji=&slug=cudi7&button_colour=FFDD00&font_colour=000000&font_family=Poppins&outline_colour=000000&coffee_colour=ffffff"
            />
          </a>
          <ModeToggle />
        </div>
      </div>
    </div>
  );
}
