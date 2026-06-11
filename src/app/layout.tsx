import type { Metadata } from "next";
import { Lato } from "next/font/google";
import { SiteShell } from "@/components/layout/SiteShell";
import { images } from "@/config/images";
import { siteConfig } from "@/config/site";
import "./globals.css";

const lato = Lato({
  subsets: ["latin"],
  weight: ["100", "300", "400", "700", "900"],
  style: ["normal", "italic"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: `${siteConfig.name} | ${siteConfig.tagline}`,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  icons: {
    icon: images.logo.icon,
    apple: images.logo.icon,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark-mode">
      <body className={`${lato.className} dark-mode`}>
        <SiteShell>{children}</SiteShell>
      </body>
    </html>
  );
}
