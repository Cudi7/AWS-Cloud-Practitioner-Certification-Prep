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
      <body className="h-dvh dark:bg-gray-900">
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          disableTransitionOnChange
        >
          <Navbar />
          <main className="flex flex-col items-center justify-center text-black dark:text-white">
            <div className="container flex flex-col items-center justify-center gap-12 px-4 py-16">
              {children}
            </div>
          </main>
        </ThemeProvider>
      </body>
    </html>
  );
}
