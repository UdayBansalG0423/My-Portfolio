import type { Metadata } from "next";
import { Inter, Space_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import GlobalEffects from "@/components/GlobalEffects";
import PageWrapper from "@/components/PageWrapper";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const spaceMono = Space_Mono({
  variable: "--font-space-mono",
  subsets: ["latin"],
  weight: ["400", "700"],
});

export const metadata: Metadata = {
  title: "Uday Bansal | AI/ML Engineer & GenAI Developer",
  description:
    "Portfolio of Uday Bansal, a 3rd-year B.Tech CSE (AI/ML) student, AI/ML Engineer, Generative AI Developer, and Backend Learner building production-ready intelligent systems.",
  keywords: [
    "Uday Bansal",
    "AI/ML Engineer",
    "Generative AI Developer",
    "GenAI",
    "RAG Pipelines",
    "Backend Developer",
    "FastAPI",
    "Python",
    "Machine Learning",
    "Portfolio",
  ],
  authors: [{ name: "Uday Bansal" }],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${spaceMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-bg text-text selection:bg-white/20 selection:text-white">
        <GlobalEffects />
        {/* Subtle Background Glows */}
        <div className="fixed inset-0 radial-glow-hero -z-20 pointer-events-none" />
        <div className="fixed inset-0 grid-overlay -z-20 pointer-events-none opacity-50" />

        {/* Header / Navbar */}
        <div className="relative z-20">
          <Navbar />
        </div>

        {/* Main Content Area */}
        <main className="flex-1 w-full flex flex-col relative z-10 pt-24">
          <PageWrapper>{children}</PageWrapper>
        </main>

        {/* Minimal Footer */}
        <footer className="w-full border-t border-white/5 bg-black/40 backdrop-blur-md py-8 text-center mt-20 relative z-10">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 flex flex-col items-center justify-center gap-2">
            <span className="font-sans text-sm text-muted">
              Built with precision.
            </span>
            <span className="font-mono text-xs text-muted/60">
              © {new Date().getFullYear()} UDAY BANSAL. ALL RIGHTS RESERVED.
            </span>
          </div>
        </footer>
      </body>
    </html>
  );
}
