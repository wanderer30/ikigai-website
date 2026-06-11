import { images } from "@/config/images";

export const servicesHero = {
  title: "Our Services",
  subtitle:
    "Integrated technology solutions across software, data, energy, infrastructure, and industrial services.",
} as const;

export const servicesSection = {
  title: "Our Service Offerings",
  subtitle:
    "Comprehensive solutions designed to support your business operations and growth.",
} as const;

export const serviceItems = [
  {
    title: "Software Applications",
    tagline: "Engineering Digital Excellence",
    description:
      "Custom software solutions designed for operational efficiency, scalability, and long-term reliability. From enterprise applications to specialized systems, we build software that drives performance.",
    image: images.services.software,
    imageAlt: "Software Applications",
  },
  {
    title: "Data Engineering & Analytics",
    tagline: "Turning data into Smart Decisions",
    description:
      "Transform your data into actionable insights. We design and implement data pipelines, analytics platforms, and business intelligence solutions that enable data-driven decision making.",
    image: images.services.data,
    imageAlt: "Data Engineering",
  },
  {
    title: "Renewable Energy",
    tagline: "Solar Solutions for Homes and Businesses",
    description:
      "Sustainable energy solutions through solar installations. We provide comprehensive solar systems for residential and commercial properties, helping you reduce costs and environmental impact.",
    image: images.services.renewable,
    imageAlt: "Renewable Energy",
  },
  {
    title: "Civil Works",
    tagline: "Advanced Civil Engineering for Reliable, Long-Term Durability",
    description:
      "Professional civil engineering services focused on infrastructure that stands the test of time. From planning to execution, we deliver durable, reliable solutions for your construction and development needs.",
    image: images.services.civil,
    imageAlt: "Civil Works",
  },
  {
    title: "Industrial Parts & Board Repair",
    tagline: "Precision Repairs, Reliable Parts, Continuous Uptime",
    description:
      "Expert repair services and quality industrial parts supply. We ensure your equipment stays operational with precision repairs and genuine parts, minimizing downtime and maximizing productivity.",
    image: images.services.industrial,
    imageAlt: "Industrial Parts",
  },
] as const;
