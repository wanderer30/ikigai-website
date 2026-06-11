import Link from "next/link";
import { Logo } from "@/components/layout/Logo";
import { navigationLinks } from "@/config/site";

export function Header() {
  return (
    <header className="site-header">
      <div className="header-container">
        <Logo />
        <nav className="main-nav">
          {navigationLinks.map((link) => (
            <Link key={link.href} href={link.href}>
              {link.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
