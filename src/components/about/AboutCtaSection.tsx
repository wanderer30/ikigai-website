import Link from "next/link";
import { aboutCta, aboutSections } from "@/config/content/about";

export function AboutCtaSection() {
  return (
    <section
      className="section cta-section"
      id={aboutSections.cta}
      aria-labelledby="about-cta-title"
    >
      <div className="container">
        <div className="cta-content">
          <h2 id="about-cta-title">{aboutCta.title}</h2>
          <p>{aboutCta.description}</p>
          <div className="cta-buttons">
            <Link href={aboutCta.primaryButton.href} className="btn btn-primary">
              {aboutCta.primaryButton.label}
            </Link>
            <Link href={aboutCta.secondaryButton.href} className="btn btn-secondary">
              {aboutCta.secondaryButton.label}
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
