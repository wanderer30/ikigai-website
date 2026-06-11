"use client";

import { DesktopNav } from "@/components/layout/DesktopNav";
import { Logo } from "@/components/layout/Logo";
import { MobileMenu } from "@/components/layout/MobileMenu";
import { MobileMenuButton } from "@/components/layout/MobileMenuButton";
import { ThemeToggle } from "@/components/layout/ThemeToggle";
import { useMobileMenu } from "@/hooks/useMobileMenu";

export function Header() {
  const { isOpen, toggle, close } = useMobileMenu();

  return (
    <header className="site-header">
      <div className="header-container">
        <Logo />
        <div className="header-actions">
          <DesktopNav />
          <ThemeToggle className="theme-toggle--desktop" />
          <MobileMenuButton isOpen={isOpen} onClick={toggle} />
        </div>
      </div>
      <MobileMenu isOpen={isOpen} onClose={close} />
    </header>
  );
}
