import Link from "next/link";
import { navigationLinks } from "@/config/site";

export function DesktopNav() {
  return (
    <nav className="main-nav main-nav--desktop" aria-label="Main navigation">
      {navigationLinks.map((link) => (
        <Link key={link.href} href={link.href}>
          {link.label}
        </Link>
      ))}
    </nav>
  );
}
