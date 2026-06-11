import Image from "next/image";
import { homeIntro } from "@/config/content/home";
import { images } from "@/config/images";

export function IntroSection() {
  return (
    <section className="section">
      <div className="container">
        <div className="intro-with-image">
          <div className="intro-content">
            <h2>{homeIntro.title}</h2>
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
      </div>
    </section>
  );
}
