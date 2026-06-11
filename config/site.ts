export const siteConfig = {
  name: "IKIGAI",
  tagline: "Integrated Technology Solutions",
  description:
    "Multi-disciplinary technology solutions across software development, data engineering, automation, civil works, renewable energy, and industrial parts supply.",
  copyright: "© 2026 IKIGAI. All rights reserved.",
} as const;

export const contactConfig = {
  email: "sales@ikigaiisystems.com",
  phone: "+63 928 239 2092",
  phoneHref: "tel:+639282392092",
  address: {
    line1: "B1 L21 Greentown Villas 1 Extension",
    line2: "Mambog III, Bacoor City, Cavite, Philippines",
  },
} as const;

export const navigationLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/services", label: "Services" },
  { href: "/contact", label: "Contact" },
] as const;
