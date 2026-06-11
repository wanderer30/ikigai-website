import Image from "next/image";
import { aboutSections, aboutWhoWeAre } from "@/config/content/about";
import { images } from "@/config/images";
import { Section } from "@/components/ui/Section";
import { SectionHeader } from "@/components/ui/SectionHeader";

export function WhoWeAreSection() {
  return (
    <Section id={aboutSections.whoWeAre} ariaLabelledBy="about-who-title">
      <div className="content-with-image">
        <div className="image-side">
          <Image
            src={images.hero.team}
            alt="Professional Team Collaboration"
            width={600}
            height={400}
          />
        </div>
        <div className="text-side">
          <SectionHeader id="about-who-title" title={aboutWhoWeAre.title} />
          {aboutWhoWeAre.paragraphs.map((paragraph) => (
            <p key={paragraph.slice(0, 40)}>{paragraph}</p>
          ))}
        </div>
      </div>
    </Section>
  );
}
