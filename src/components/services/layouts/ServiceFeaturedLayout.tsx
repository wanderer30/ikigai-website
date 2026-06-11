import Image from "next/image";
import { GlassSurface } from "@/components/ui/GlassSurface";
import type { ServiceItem } from "@/components/services/types";

type ServiceFeaturedLayoutProps = {
  service: ServiceItem;
};

export function ServiceFeaturedLayout({ service }: ServiceFeaturedLayoutProps) {
  return (
    <GlassSurface className="service-featured service-featured--reverse">
      <div className="service-featured__media">
        <Image
          src={service.image}
          alt={service.imageAlt}
          width={640}
          height={400}
          className="service-featured__image"
        />
      </div>
      <div className="service-featured__content">
        <span className="service-layout__tagline">{service.tagline}</span>
        <h3>{service.title}</h3>
        <p>{service.description}</p>
        <ul className="service-highlights">
          {service.highlights.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </div>
    </GlassSurface>
  );
}
