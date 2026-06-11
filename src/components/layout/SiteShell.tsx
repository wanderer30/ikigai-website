"use client";

import dynamic from "next/dynamic";
import { Footer } from "@/components/layout/Footer";
import { Header } from "@/components/layout/Header";
import { ThemeProvider } from "@/context/ThemeContext";

const GradientBackground = dynamic(
  () =>
    import("@/components/background/GradientBackground").then(
      (mod) => mod.GradientBackground,
    ),
  { ssr: false },
);

type SiteShellProps = {
  children: React.ReactNode;
};

export function SiteShell({ children }: SiteShellProps) {
  return (
    <ThemeProvider>
      <GradientBackground />
      <div className="site-shell">
        <Header />
        <main>{children}</main>
        <Footer />
      </div>
    </ThemeProvider>
  );
}
