import type { Metadata } from "next";
import { ServicesGrid } from "@/components/services/ServicesGrid";
import { Hero } from "@/components/sections/Hero";
import { servicesHero } from "@/config/content/services";

export const metadata: Metadata = {
  title: "Services",
};

export default function ServicesPage() {
  return (
    <>
      <Hero title={servicesHero.title} subtitle={servicesHero.subtitle} />
      <ServicesGrid />
    </>
  );
}
