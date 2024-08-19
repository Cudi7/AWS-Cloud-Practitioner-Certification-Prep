import "@/styles/globals.css";

import { GeistSans } from "geist/font/sans";
import { type Metadata } from "next";
import { ThemeProvider } from "@/app/components/theme-provider";
import { Navbar } from "./components/navbar";

export const metadata: Metadata = {
  title: "AWS Cloud Practitioner Certification Prep",
  description: "AWS Cloud Practitioner Certification Prep",
  icons: [{ rel: "icon", url: "/favicon.ico" }],
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${GeistSans.variable}`}>
      <body className="flex min-h-screen flex-col dark:bg-gray-900">
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          disableTransitionOnChange
        >
          <Navbar />
          <main className="flex flex-grow flex-col items-center justify-center text-black dark:text-white">
            <div className="container flex flex-col items-center justify-center gap-12 px-4 py-16">
              {children}
            </div>
          </main>
          <footer className="container w-full flex-shrink-0 pb-6 pt-4 text-center text-sm text-gray-700 dark:text-gray-400">
            <p className="mx-auto mb-2 max-w-xl">
              This practice quiz is independently created and is not affiliated
              with or endorsed by Amazon Web Services{" "}
              <span className="text-indigo-500 dark:text-indigo-400">
                (AWS)
              </span>
              . It is intended to support those preparing for the AWS Cloud
              Practitioner{" "}
              <span className="text-indigo-500 dark:text-indigo-400">
                (CLF-C02)
              </span>{" "}
              exam and is not a replacement for official AWS study materials.
            </p>
            <p className="font-semibold">
              Developed by{" "}
              <a
                href="https://www.linkedin.com/in/cudi7"
                target="_blank"
                rel="noopener noreferrer"
                className="text-indigo-500 hover:underline dark:text-indigo-400"
              >
                Cudi
              </a>
            </p>
          </footer>
        </ThemeProvider>
      </body>
    </html>
  );
}
