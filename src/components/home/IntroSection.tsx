import Image from "next/image";
import { homeIntro, homeSections } from "@/config/content/home";
import { images } from "@/config/images";
import { Section } from "@/components/ui/Section";
import { SectionHeader } from "@/components/ui/SectionHeader";

export function IntroSection() {
  return (
    <Section id={homeSections.intro} ariaLabelledBy="home-intro-title">
      <div className="intro-with-image">
        <div className="intro-content">
          <SectionHeader id="home-intro-title" title={homeIntro.title} />
          {homeIntro.paragraphs.map((paragraph) => (
            <p key={paragraph.slice(0, 40)}>{paragraph}</p>
          ))}
        </div>
        <div className="intro-image">
          <Image
            src={images.hero.technology}
            alt="Technology Solutions"
            width={800}
            height={500}
          />
        </div>
      </div>
    </Section>
  );
}
