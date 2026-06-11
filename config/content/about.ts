export const aboutSections = {
  hero: "about-overview",
  whoWeAre: "who-we-are",
  visionMission: "vision-mission",
  values: "core-values",
  cta: "work-with-us",
} as const;

export const aboutHero = {
  title: "About IKIGAI",
  subtitle:
    "Engineering expertise, digital innovation, and hands‑on execution for real‑world results.",
  primaryAction: { href: "/services", label: "Our Services" },
  secondaryAction: { href: "/contact", label: "Contact Us" },
} as const;

export const aboutWhoWeAre = {
  title: "Who We Are",
  paragraphs: [
    "IKIGAI is a Philippine‑based technology solutions provider built to support industries that demand reliability, accountability, and measurable results.",
    "We combine engineering expertise, digital innovation, and hands‑on execution to deliver solutions that work beyond theory—solutions proven in live industrial, commercial, and operational environments.",
    "Our multidisciplinary approach allows us to act as a single partner across technology, infrastructure, and operations—reducing complexity, minimizing risk, and accelerating outcomes for our clients.",
  ],
} as const;

export const aboutVision = {
  title: "Our Vision",
  description:
    "To be a trusted integrated technology solutions partner delivering reliable, innovative, and future‑ready services that empower industries to grow and transform.",
} as const;

export const aboutMission = {
  title: "Our Mission",
  description:
    "To provide high‑quality IT solutions, civil works, automation services, and industrial components with a strong commitment to performance, customer value, and long‑term partnership success.",
} as const;

export const aboutCoreValues = {
  title: "Our Core Values",
  subtitle: "The principles that guide how we work with every client and project.",
  values: [
    { name: "Integrity", description: "We deliver what we commit." },
    {
      name: "Innovation",
      description: "We continuously improve through technology and engineering.",
    },
    {
      name: "Excellence",
      description: "We uphold high standards in execution and delivery.",
    },
    {
      name: "Collaboration",
      description: "We work closely with clients and partners.",
    },
    {
      name: "Reliability",
      description: "We design solutions that perform in real operations.",
    },
  ],
} as const;

export const aboutCta = {
  title: "Partner With IKIGAI",
  description:
    "Let's build reliable solutions together — from strategy and implementation to long-term support.",
  primaryButton: { href: "/contact", label: "Get in Touch" },
  secondaryButton: { href: "/services", label: "Explore Services" },
} as const;
