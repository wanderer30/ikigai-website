import { homeBenefits, homeSections } from "@/config/content/home";
import { GlassSurface } from "@/components/ui/GlassSurface";
import { Section } from "@/components/ui/Section";
import { SectionHeader } from "@/components/ui/SectionHeader";

export function BenefitsSection() {
  return (
    <Section id={homeSections.benefits} ariaLabelledBy="home-benefits-title">
      <SectionHeader
        id="home-benefits-title"
        title={homeBenefits.title}
        subtitle={homeBenefits.subtitle}
      />
      <div className="benefits-grid">
        {homeBenefits.items.map((item) => (
          <GlassSurface key={item.title} className="benefit-item">
            <h3>{item.title}</h3>
            <p>{item.description}</p>
          </GlassSurface>
        ))}
      </div>
    </Section>
  );
}
