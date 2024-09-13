import "@/styles/globals.css";

import { GeistSans } from "geist/font/sans";
import { type Metadata } from "next";
import { Navbar } from "@/components/navbar";
import { ThemeProvider } from "@/components/shared/theme-provider";
import { Analytics } from "@vercel/analytics/react";
import Footer from "@/components/footer";

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
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <Navbar />

          <main className="flex flex-grow flex-col items-center justify-center text-black dark:text-white">
            <div className="container flex flex-col items-center justify-center gap-12 px-4 py-16">
              {children}
              <Analytics />
            </div>
          </main>
        </ThemeProvider>
        <Footer />
      </body>
    </html>
  );
}
