import Link from "next/link";
import { contactConfig, navigationLinks, siteConfig } from "@/config/site";

export function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-container">
        <div className="footer-grid">
          <div>
            <strong>{siteConfig.name}</strong>
            <p>
              Building reliable software solutions for modern operations. We
              specialize in enterprise-grade systems designed for operational
              excellence.
            </p>
          </div>
          <div>
            <strong>Contact</strong>
            <p>
              Email:{" "}
              <a href={`mailto:${contactConfig.email}`}>{contactConfig.email}</a>
            </p>
            <p>We aim to respond to all inquiries promptly and professionally.</p>
          </div>
          <div>
            <strong>Navigation</strong>
            {navigationLinks.map((link) => (
              <p key={link.href}>
                <Link href={link.href}>{link.label}</Link>
              </p>
            ))}
          </div>
        </div>
        <div className="footer-bottom">{siteConfig.copyright}</div>
      </div>
    </footer>
  );
}
