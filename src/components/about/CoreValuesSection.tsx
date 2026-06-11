import { aboutCoreValues, aboutSections } from "@/config/content/about";
import { GlassSurface } from "@/components/ui/GlassSurface";
import { Section } from "@/components/ui/Section";
import { SectionHeader } from "@/components/ui/SectionHeader";

export function CoreValuesSection() {
  return (
    <Section id={aboutSections.values} ariaLabelledBy="about-values-title">
      <SectionHeader
        id="about-values-title"
        title={aboutCoreValues.title}
        subtitle={aboutCoreValues.subtitle}
      />
      <div className="values-grid">
        {aboutCoreValues.values.map((value) => (
          <GlassSurface key={value.name} className="value-card">
            <h3>{value.name}</h3>
            <p>{value.description}</p>
          </GlassSurface>
        ))}
      </div>
    </Section>
  );
}
