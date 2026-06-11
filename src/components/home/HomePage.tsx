import { BenefitsSection } from "@/components/home/BenefitsSection";
import { HomeCtaSection } from "@/components/home/HomeCtaSection";
import { HomeHeroSection } from "@/components/home/HomeHeroSection";
import { IntroSection } from "@/components/home/IntroSection";
import { ServicesPreviewSection } from "@/components/home/ServicesPreviewSection";

export function HomePage() {
  return (
    <div className="home-page">
      <HomeHeroSection />
      <IntroSection />
      <ServicesPreviewSection />
      <BenefitsSection />
      <HomeCtaSection />
    </div>
  );
}
