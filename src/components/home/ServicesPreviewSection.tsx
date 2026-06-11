import Link from "next/link";
import { homeSections, homeServicesPreview } from "@/config/content/home";
import { serviceItems } from "@/config/content/services";
import { GlassSurface } from "@/components/ui/GlassSurface";
import { Section } from "@/components/ui/Section";
import { SectionHeader } from "@/components/ui/SectionHeader";

const previewServices = serviceItems.filter((service) =>
  homeServicesPreview.highlightedTitles.includes(
    service.title as (typeof homeServicesPreview.highlightedTitles)[number],
  ),
);

export function ServicesPreviewSection() {
  return (
    <Section
      id={homeSections.services}
      className="section--alt"
      ariaLabelledBy="home-services-title"
    >
      <SectionHeader
        id="home-services-title"
        title={homeServicesPreview.title}
        subtitle={homeServicesPreview.subtitle}
      />
      <div className="services-preview-grid">
        {previewServices.map((service) => (
          <GlassSurface key={service.title} className="service-preview-card">
            <span className="service-preview-card__tagline">{service.tagline}</span>
            <h3>{service.title}</h3>
            <p>{service.description}</p>
          </GlassSurface>
        ))}
      </div>
      <div className="section-footer-action">
        <Link href={homeServicesPreview.viewAll.href} className="btn btn-secondary">
          {homeServicesPreview.viewAll.label}
        </Link>
      </div>
    </Section>
  );
}
