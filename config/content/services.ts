import { images } from "@/config/images";

export const servicesSections = {
  hero: "services-overview",
  offerings: "service-offerings",
  cta: "start-project",
} as const;

export const servicesHero = {
  title: "Our Services",
  subtitle:
    "Integrated technology solutions across software, data, energy, infrastructure, and industrial services.",
  primaryAction: { href: "/contact", label: "Request a Consultation" },
  secondaryAction: { href: "/about", label: "About IKIGAI" },
} as const;

export const servicesSection = {
  title: "Our Service Offerings",
  subtitle:
    "Comprehensive solutions designed to support your business operations and growth.",
} as const;

export const serviceItems = [
  {
    id: "software",
    title: "Software Applications",
    tagline: "Engineering Digital Excellence",
    description:
      "Custom software solutions designed for operational efficiency, scalability, and long-term reliability. From enterprise applications to specialized systems, we build software that drives performance.",
    highlights: ["Enterprise systems", "Custom development", "Long-term support"],
    image: images.services.software,
    imageAlt: "Software Applications",
  },
  {
    id: "data",
    title: "Data Engineering & Analytics",
    tagline: "Turning data into Smart Decisions",
    description:
      "Transform your data into actionable insights. We design and implement data pipelines, analytics platforms, and business intelligence solutions that enable data-driven decision making.",
    highlights: ["Data pipelines", "Analytics platforms", "Business intelligence"],
    image: images.services.data,
    imageAlt: "Data Engineering",
  },
  {
    id: "renewable",
    title: "Renewable Energy",
    tagline: "Solar Solutions for Homes and Businesses",
    description:
      "Sustainable energy solutions through solar installations. We provide comprehensive solar systems for residential and commercial properties, helping you reduce costs and environmental impact.",
    highlights: ["Residential solar", "Commercial systems", "Cost reduction"],
    image: images.services.renewable,
    imageAlt: "Renewable Energy",
  },
  {
    id: "civil",
    title: "Civil Works",
    tagline: "Advanced Civil Engineering for Reliable, Long-Term Durability",
    description:
      "Professional civil engineering services focused on infrastructure that stands the test of time. From planning to execution, we deliver durable, reliable solutions for your construction and development needs.",
    highlights: ["Infrastructure planning", "Durable execution", "Commercial & industrial"],
    image: images.services.civil,
    imageAlt: "Civil Works",
  },
  {
    id: "industrial",
    title: "Industrial Parts & Board Repair",
    tagline: "Precision Repairs, Reliable Parts, Continuous Uptime",
    description:
      "Expert repair services and quality industrial parts supply. We ensure your equipment stays operational with precision repairs and genuine parts, minimizing downtime and maximizing productivity.",
    highlights: ["Board repair", "Genuine parts", "Minimal downtime"],
    image: images.services.industrial,
    imageAlt: "Industrial Parts",
  },
] as const;

export const servicesCta = {
  title: "Need a Tailored Solution?",
  description:
    "Tell us about your operations and we'll recommend the right mix of services for your goals.",
  primaryButton: { href: "/contact", label: "Talk to Our Team" },
  secondaryButton: { href: "/", label: "Back to Home" },
} as const;
