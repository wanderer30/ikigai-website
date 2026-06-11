import type { Metadata } from "next";
import { Lato } from "next/font/google";
import { DarkModeProvider } from "@/components/layout/DarkModeProvider";
import { Footer } from "@/components/layout/Footer";
import { Header } from "@/components/layout/Header";
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
    <html lang="en">
      <body className={lato.className}>
        <DarkModeProvider>
          <Header />
          <main>{children}</main>
          <Footer />
        </DarkModeProvider>
      </body>
    </html>
  );
}
