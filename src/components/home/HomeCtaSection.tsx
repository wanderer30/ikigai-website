import Link from "next/link";
import { homeCta, homeSections } from "@/config/content/home";

export function HomeCtaSection() {
  return (
    <section
      className="section cta-section"
      id={homeSections.cta}
      aria-labelledby="home-cta-title"
    >
      <div className="container">
        <div className="cta-content">
          <h2 id="home-cta-title">{homeCta.title}</h2>
          <p>{homeCta.description}</p>
          <div className="cta-buttons">
            <Link href={homeCta.primaryButton.href} className="btn btn-primary">
              {homeCta.primaryButton.label}
            </Link>
            <Link href={homeCta.secondaryButton.href} className="btn btn-secondary">
              {homeCta.secondaryButton.label}
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
