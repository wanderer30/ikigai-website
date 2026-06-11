"use client";

import { Logo } from "@/components/layout/Logo";
import { DesktopNav } from "@/components/layout/DesktopNav";
import { MobileMenu } from "@/components/layout/MobileMenu";
import { MobileMenuButton } from "@/components/layout/MobileMenuButton";
import { useMobileMenu } from "@/hooks/useMobileMenu";

export function Header() {
  const { isOpen, toggle, close } = useMobileMenu();

  return (
    <header className="site-header">
      <div className="header-container">
        <Logo />
        <DesktopNav />
        <MobileMenuButton isOpen={isOpen} onClick={toggle} />
      </div>
      <MobileMenu isOpen={isOpen} onClose={close} />
    </header>
  );
}
