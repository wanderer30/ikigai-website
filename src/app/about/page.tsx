import type { Metadata } from "next";
import { AboutContent } from "@/components/about/AboutContent";
import { Hero } from "@/components/sections/Hero";
import { aboutHero } from "@/config/content/about";

export const metadata: Metadata = {
  title: "About Us",
};

export default function AboutPage() {
  return (
    <>
      <Hero title={aboutHero.title} subtitle={aboutHero.subtitle} />
      <AboutContent />
    </>
  );
}
