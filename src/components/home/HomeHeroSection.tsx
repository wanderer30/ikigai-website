import Link from "next/link";
import { homeHero, homeSections } from "@/config/content/home";

export function HomeHeroSection() {
  return (
    <section className="hero" id={homeSections.hero} aria-labelledby="home-hero-title">
      <div className="container">
        <h1 id="home-hero-title">{homeHero.title}</h1>
        <p>{homeHero.subtitle}</p>
        <div className="hero-actions">
          <Link href={homeHero.primaryAction.href} className="btn btn-primary">
            {homeHero.primaryAction.label}
          </Link>
          <Link href={homeHero.secondaryAction.href} className="btn btn-secondary">
            {homeHero.secondaryAction.label}
          </Link>
        </div>
      </div>
    </section>
  );
}
