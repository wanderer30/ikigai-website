import Link from "next/link";
import { aboutHero, aboutSections } from "@/config/content/about";

export function AboutHeroSection() {
  return (
    <section
      className="hero"
      id={aboutSections.hero}
      aria-labelledby="about-hero-title"
    >
      <div className="container">
        <h1 id="about-hero-title">{aboutHero.title}</h1>
        <p>{aboutHero.subtitle}</p>
        <div className="hero-actions">
          <Link href={aboutHero.primaryAction.href} className="btn btn-primary">
            {aboutHero.primaryAction.label}
          </Link>
          <Link href={aboutHero.secondaryAction.href} className="btn btn-secondary">
            {aboutHero.secondaryAction.label}
          </Link>
        </div>
      </div>
    </section>
  );
}
