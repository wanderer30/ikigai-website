export const theme = {
  colors: {
    bgBase: "#050505",
    bgElevated: "rgba(255, 255, 255, 0.04)",
    bgElevatedHover: "rgba(255, 255, 255, 0.07)",
    borderGlass: "rgba(255, 255, 255, 0.08)",
    borderGlassStrong: "rgba(255, 255, 255, 0.14)",
    textPrimary: "#f5f5f5",
    textSecondary: "#a3a3a3",
    textMuted: "#737373",
    accent: "#ffffff",
  },
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
