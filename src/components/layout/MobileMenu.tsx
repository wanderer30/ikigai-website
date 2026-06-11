"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import { mobileMenuConfig } from "@/config/navigation";
import { navigationLinks } from "@/config/site";

type MobileMenuProps = {
  isOpen: boolean;
  onClose: () => void;
};

export function MobileMenu({ isOpen, onClose }: MobileMenuProps) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return createPortal(
    <nav
      id={mobileMenuConfig.menuId}
      className={`mobile-menu${isOpen ? " mobile-menu--open" : ""}`}
      aria-label="Mobile navigation"
      aria-hidden={!isOpen}
      {...(!isOpen ? { inert: true } : {})}
    >
      <div className="mobile-menu__inner">
        <div className="mobile-menu__header">
          <span className="mobile-menu__title">Menu</span>
          <button
            type="button"
            className="mobile-menu__close"
            aria-label={mobileMenuConfig.closeLabel}
            onClick={onClose}
          >
            ×
          </button>
        </div>
        <ul className="mobile-menu__links">
          {navigationLinks.map((link) => (
            <li key={link.href}>
              <Link href={link.href} className="mobile-menu__link" onClick={onClose}>
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>,
    document.body,
  );
}
