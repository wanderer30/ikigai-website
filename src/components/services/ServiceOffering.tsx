import { ServiceFeaturedLayout } from "@/components/services/layouts/ServiceFeaturedLayout";
import type { ServiceItem } from "@/components/services/types";

type ServiceOfferingProps = {
  service: ServiceItem;
};

export function ServiceOffering({ service }: ServiceOfferingProps) {
  return <ServiceFeaturedLayout service={service} />;
}
