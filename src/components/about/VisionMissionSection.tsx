import { aboutMission, aboutSections, aboutVision } from "@/config/content/about";
import { GlassSurface } from "@/components/ui/GlassSurface";
import { Section } from "@/components/ui/Section";
import { SectionHeader } from "@/components/ui/SectionHeader";

export function VisionMissionSection() {
  return (
    <Section
      id={aboutSections.visionMission}
      className="section--alt"
      ariaLabelledBy="about-vision-mission-title"
    >
      <SectionHeader
        id="about-vision-mission-title"
        title="Vision & Mission"
        subtitle="Where we're headed and how we deliver value every day."
      />
      <div className="vision-mission-grid">
        <GlassSurface className="vision-mission-card">
          <h3>{aboutVision.title}</h3>
          <p>{aboutVision.description}</p>
        </GlassSurface>
        <GlassSurface className="vision-mission-card">
          <h3>{aboutMission.title}</h3>
          <p>{aboutMission.description}</p>
        </GlassSurface>
      </div>
    </Section>
  );
}
