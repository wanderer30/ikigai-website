import Image from "next/image";
import { serviceItems, servicesSection } from "@/config/content/services";
import { GlassSurface } from "@/components/ui/GlassSurface";

export function ServicesGrid() {
  return (
    <section className="section">
      <div className="container">
        <h2>{servicesSection.title}</h2>
        <p className="section-subtitle">{servicesSection.subtitle}</p>
        <div className="services-grid">
          {serviceItems.map((service) => (
            <GlassSurface key={service.title} className="service-item">
              <div className="service-icon">
                <Image
                  src={service.image}
                  alt={service.imageAlt}
                  width={400}
                  height={200}
                />
              </div>
              <h3>{service.title}</h3>
              <p>{service.tagline}</p>
              <p className="service-description">{service.description}</p>
            </GlassSurface>
          ))}
        </div>
      </div>
    </section>
  );
}
