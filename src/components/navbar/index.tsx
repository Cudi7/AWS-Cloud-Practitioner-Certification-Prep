/* eslint-disable @next/next/no-img-element */
import Link from "next/link";

import { DropdownMenuDemo } from "@/components/navbar/dropdown-menu";
import { ModeToggle } from "@/components/shared/mode-toggle";

export function Navbar() {
  return (
    <div className="px-4 pb-5 pt-7 ring-1 ring-zinc-950/5 dark:bg-gray-900 dark:ring-white/5">
      <div className="mx-auto flex items-center justify-between gap-5 px-2 sm:gap-0 sm:px-4 lg:max-w-7xl">
        <Link href="/" className="flex items-center gap-2 sm:gap-4">
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
        </Link>
        <div className="hidden items-center gap-4 sm:gap-8 md:flex">
          <Link
            className="text-sm font-semibold hover:text-indigo-500 dark:hover:text-indigo-400"
            href="/"
          >
            Home
          </Link>
          <Link
            className="text-sm font-semibold hover:text-indigo-500 dark:hover:text-indigo-400"
            href="/rankings"
          >
            Rankings
          </Link>

          <a
            className="scale-[.85] text-sm/6 font-medium text-zinc-700 outline-blue-500 hover:text-zinc-950 dark:text-zinc-300 dark:hover:text-white"
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

          <a
            href="https://github.com/Cudi7/AWS-Cloud-Practitioner-Certification-Prep"
            target="_blank"
            rel="noopener noreferrer"
            className="block text-slate-400 hover:text-slate-500 dark:hover:text-slate-300"
          >
            <span className="sr-only">Tailwind CSS on GitHub</span>
            <svg
              viewBox="0 0 16 16"
              className="h-5 w-5"
              fill="currentColor"
              aria-hidden="true"
            >
              <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z" />
            </svg>
          </a>
        </div>
        <div className="flex md:hidden">
          <DropdownMenuDemo />
        </div>
      </div>
    </div>
  );
}
