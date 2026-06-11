import Image from "next/image";
import {
  aboutCoreValues,
  aboutMission,
  aboutVision,
  aboutWhoWeAre,
} from "@/config/content/about";
import { images } from "@/config/images";

export function AboutContent() {
  return (
    <>
      <section className="section">
        <div className="container">
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
              <h2>{aboutWhoWeAre.title}</h2>
              {aboutWhoWeAre.paragraphs.map((paragraph) => (
                <p key={paragraph.slice(0, 40)}>{paragraph}</p>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <h2>{aboutVision.title}</h2>
          <p>{aboutVision.description}</p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <h2>{aboutMission.title}</h2>
          <p>{aboutMission.description}</p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <h2>{aboutCoreValues.title}</h2>
          <div className="core-values">
            {aboutCoreValues.values.map((value) => (
              <p key={value.name}>
                <strong>{value.name}</strong> – {value.description}
              </p>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
