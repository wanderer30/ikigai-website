"use client";

import dynamic from "next/dynamic";
import { DarkModeProvider } from "@/components/layout/DarkModeProvider";
import { Footer } from "@/components/layout/Footer";
import { Header } from "@/components/layout/Header";

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
    <>
      <GradientBackground />
      <DarkModeProvider>
        <div className="site-shell">
          <Header />
          <main>{children}</main>
          <Footer />
        </div>
      </DarkModeProvider>
    </>
  );
}
