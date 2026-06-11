import Link from "next/link";
import { contactConfig, navigationLinks, siteConfig } from "@/config/site";

export function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-container">
        <div className="footer-grid">
          <div className="footer-brand">
            <strong>{siteConfig.name}</strong>
            <p className="footer-description">{siteConfig.footerDescription}</p>
          </div>
          <div className="footer-contact">
            <strong>Contact</strong>
            <p>
              <a href={`mailto:${contactConfig.email}`}>{contactConfig.email}</a>
            </p>
            <p className="footer-contact-note">{siteConfig.footerContactNote}</p>
          </div>
          <nav className="footer-nav" aria-label="Footer navigation">
            <strong>Navigation</strong>
            <ul className="footer-nav__list">
              {navigationLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href}>{link.label}</Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>
        <div className="footer-bottom">{siteConfig.copyright}</div>
      </div>
    </footer>
  );
}
