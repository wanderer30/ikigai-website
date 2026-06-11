"use client";

import { themeConfig } from "@/config/theme";
import { useTheme } from "@/context/ThemeContext";

type ThemeToggleProps = {
  showLabel?: boolean;
  className?: string;
};

export function ThemeToggle({ showLabel = false, className = "" }: ThemeToggleProps) {
  const { isDark, toggleTheme } = useTheme();

  return (
    <button
      type="button"
      className={`theme-toggle ${className}`.trim()}
      onClick={toggleTheme}
      aria-label={isDark ? themeConfig.toggle.lightLabel : themeConfig.toggle.darkLabel}
    >
      <span className="theme-toggle__icon" aria-hidden="true">
        {isDark ? "☀️" : "🌙"}
      </span>
      {showLabel ? (
        <span className="theme-toggle__label">
          {isDark ? themeConfig.toggle.lightText : themeConfig.toggle.darkText}
        </span>
      ) : null}
    </button>
  );
}
