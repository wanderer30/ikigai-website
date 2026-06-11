import { BenefitsSection } from "@/components/home/BenefitsSection";
import { IntroSection } from "@/components/home/IntroSection";
import { CtaSection } from "@/components/sections/CtaSection";
import { Hero } from "@/components/sections/Hero";
import { homeHero } from "@/config/content/home";

export default function HomePage() {
  return (
    <>
      <Hero title={homeHero.title} subtitle={homeHero.subtitle} />
      <IntroSection />
      <BenefitsSection />
      <CtaSection />
    </>
  );
}
