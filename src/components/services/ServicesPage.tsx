import { ServicesCtaSection } from "@/components/services/ServicesCtaSection";
import { ServicesHeroSection } from "@/components/services/ServicesHeroSection";
import { ServicesOfferingsSection } from "@/components/services/ServicesOfferingsSection";

export function ServicesPage() {
  return (
    <>
      <ServicesHeroSection />
      <ServicesOfferingsSection />
      <ServicesCtaSection />
    </>
  );
}
