export const themeStorageKey = "ikigai-theme";

export const themeModes = ["light", "dark"] as const;

export type ThemeMode = (typeof themeModes)[number];

export const themeConfig = {
  defaultMode: "dark" as ThemeMode,
  toggle: {
    lightLabel: "Switch to light mode",
    darkLabel: "Switch to dark mode",
    lightText: "Light",
    darkText: "Dark",
    mobileSectionLabel: "Appearance",
  },
} as const;

export const theme = {
  effects: {
    blur: "20px",
    blurSubtle: "12px",
    radius: "12px",
    radiusSm: "8px",
  },
  header: {
    paddingY: "10px",
    paddingX: "24px",
    logoHeight: "44px",
    logoHeightMobile: "38px",
  },
} as const;
