"use client";

import { usePathname } from "next/navigation";
import { useCallback, useEffect, useState } from "react";

const BODY_LOCK_CLASS = "mobile-menu-open";

export function useMobileMenu() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  const close = useCallback(() => setIsOpen(false), []);
  const open = useCallback(() => setIsOpen(true), []);
  const toggle = useCallback(() => setIsOpen((prev) => !prev), []);

  useEffect(() => {
    close();
  }, [pathname, close]);

  useEffect(() => {
    document.body.classList.toggle(BODY_LOCK_CLASS, isOpen);
    return () => document.body.classList.remove(BODY_LOCK_CLASS);
  }, [isOpen]);

  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") close();
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, close]);

  return { isOpen, open, close, toggle };
}
