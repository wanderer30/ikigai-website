import { AboutCtaSection } from "@/components/about/AboutCtaSection";
import { AboutHeroSection } from "@/components/about/AboutHeroSection";
import { CoreValuesSection } from "@/components/about/CoreValuesSection";
import { VisionMissionSection } from "@/components/about/VisionMissionSection";
import { WhoWeAreSection } from "@/components/about/WhoWeAreSection";

export function AboutPage() {
  return (
    <>
      <AboutHeroSection />
      <WhoWeAreSection />
      <VisionMissionSection />
      <CoreValuesSection />
      <AboutCtaSection />
    </>
  );
}
