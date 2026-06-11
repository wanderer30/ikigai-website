import Link from "next/link";
import { servicesCta, servicesSections } from "@/config/content/services";

export function ServicesCtaSection() {
  return (
    <section
      className="section cta-section"
      id={servicesSections.cta}
      aria-labelledby="services-cta-title"
    >
      <div className="container">
        <div className="cta-content">
          <h2 id="services-cta-title">{servicesCta.title}</h2>
          <p>{servicesCta.description}</p>
          <div className="cta-buttons">
            <Link href={servicesCta.primaryButton.href} className="btn btn-primary">
              {servicesCta.primaryButton.label}
            </Link>
            <Link href={servicesCta.secondaryButton.href} className="btn btn-secondary">
              {servicesCta.secondaryButton.label}
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
