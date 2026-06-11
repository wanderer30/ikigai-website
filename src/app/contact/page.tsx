import type { Metadata } from "next";
import { ContactInfo } from "@/components/contact/ContactInfo";
import { Hero } from "@/components/sections/Hero";
import { contactHero } from "@/config/content/contact";

export const metadata: Metadata = {
  title: "Contact Us",
};

export default function ContactPage() {
  return (
    <>
      <Hero title={contactHero.title} subtitle={contactHero.subtitle} />
      <ContactInfo />
    </>
  );
}
