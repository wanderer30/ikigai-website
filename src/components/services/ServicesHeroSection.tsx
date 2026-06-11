import Link from "next/link";
import { servicesHero, servicesSections } from "@/config/content/services";

export function ServicesHeroSection() {
  return (
    <section
      className="hero"
      id={servicesSections.hero}
      aria-labelledby="services-hero-title"
    >
      <div className="container">
        <h1 id="services-hero-title">{servicesHero.title}</h1>
        <p>{servicesHero.subtitle}</p>
        <div className="hero-actions">
          <Link href={servicesHero.primaryAction.href} className="btn btn-primary">
            {servicesHero.primaryAction.label}
          </Link>
          <Link href={servicesHero.secondaryAction.href} className="btn btn-secondary">
            {servicesHero.secondaryAction.label}
          </Link>
        </div>
      </div>
    </section>
  );
}
