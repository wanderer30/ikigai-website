"use client";

import { useEffect, useState } from "react";

const DARK_MODE_CLASS = "dark-mode";

export function useDarkMode() {
  const [isDark, setIsDark] = useState(true);

  useEffect(() => {
    document.body.classList.add(DARK_MODE_CLASS);
    setIsDark(true);
  }, []);

  return { isDark };
}
