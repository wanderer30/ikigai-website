import { serviceItems, servicesSection, servicesSections } from "@/config/content/services";
import { ServiceOffering } from "@/components/services/ServiceOffering";
import { Section } from "@/components/ui/Section";
import { SectionHeader } from "@/components/ui/SectionHeader";

export function ServicesOfferingsSection() {
  return (
    <Section
      id={servicesSections.offerings}
      ariaLabelledBy="services-offerings-title"
    >
      <SectionHeader
        id="services-offerings-title"
        title={servicesSection.title}
        subtitle={servicesSection.subtitle}
      />
      <div className="services-offerings-list">
        {serviceItems.map((service) => (
          <div key={service.id} id={service.id} className="services-offerings-list__item">
            <ServiceOffering service={service} />
          </div>
        ))}
      </div>
    </Section>
  );
}
