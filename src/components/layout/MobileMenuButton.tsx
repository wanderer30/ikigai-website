"use client";

import { mobileMenuConfig } from "@/config/navigation";

type MobileMenuButtonProps = {
  isOpen: boolean;
  onClick: () => void;
};

export function MobileMenuButton({ isOpen, onClick }: MobileMenuButtonProps) {
  return (
    <button
      type="button"
      id={mobileMenuConfig.buttonId}
      className={`mobile-menu-button${isOpen ? " mobile-menu-button--open" : ""}`}
      aria-expanded={isOpen}
      aria-controls={mobileMenuConfig.menuId}
      aria-label={isOpen ? mobileMenuConfig.closeLabel : mobileMenuConfig.openLabel}
      onClick={onClick}
    >
      <span className="mobile-menu-button__bar" />
      <span className="mobile-menu-button__bar" />
      <span className="mobile-menu-button__bar" />
    </button>
  );
}
