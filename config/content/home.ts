export const homeSections = {
  hero: "overview",
  intro: "about-preview",
  services: "capabilities",
  benefits: "why-ikigai",
  cta: "get-started",
} as const;

export const homeHero = {
  title: "Integrated Technology Solutions for Real-World Operations",
  subtitle: "Engineering Digital Excellence. Powering Sustainable Growth.",
  primaryAction: { href: "/services", label: "Explore Services" },
  secondaryAction: { href: "/contact", label: "Contact Us" },
} as const;

export const homeIntro = {
  title: "Multi-Disciplinary Technology Solutions",
  paragraphs: [
    "IKIGAI is a multi‑disciplinary technology solutions company delivering integrated services across software development, data engineering, automation, civil works, renewable energy, and industrial parts supply.",
    "We help organizations build reliable systems, optimize operations, and prepare for the future through engineered solutions designed for real‑world environments.",
    "From planning and implementation to after‑sales support, IKIGAI is your trusted partner in driving performance, efficiency, and long‑term business value.",
  ],
} as const;

export const homeServicesPreview = {
  title: "Our Capabilities",
  subtitle:
    "End-to-end solutions across software, data, infrastructure, and industrial operations.",
  viewAll: { href: "/services", label: "View all services" },
  highlightedTitles: [
    "Software Applications",
    "Data Engineering & Analytics",
    "Renewable Energy",
  ] as const,
} as const;

export const homeBenefits = {
  title: "Why Choose IKIGAI",
  subtitle: "Discover what makes us your ideal technology solutions partner.",
  items: [
    {
      title: "End‑to‑End Accountability",
      description:
        "We deliver integrated solutions across software, data analytics, civil works, renewable energy, and industrial services—reducing vendor complexity, project risk, and total cost.",
    },
    {
      title: "Faster, Smarter Execution",
      description:
        "Our data‑driven approach and hands‑on engineering expertise enable quicker decisions, smoother implementation, and measurable operational improvements.",
    },
    {
      title: "Built for Real‑World Operations",
      description:
        "We design and execute solutions that work in actual industrial and commercial environments—ensuring reliability, scalability, and long‑term value.",
    },
    {
      title: "Long‑Term Partnership Focus",
      description:
        "We go beyond project delivery. Our goal is to build lasting partnerships that support continuous improvement and business growth.",
    },
  ],
} as const;

export const homeCta = {
  title: "Ready to Transform Your Operations?",
  description:
    "Let's discuss how IKIGAI can help you achieve your business goals with integrated technology solutions.",
  primaryButton: { href: "/services", label: "Explore Our Services" },
  secondaryButton: { href: "/contact", label: "Get in Touch" },
} as const;
