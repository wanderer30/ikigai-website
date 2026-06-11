export const gradientPalettes = {
  dark: {
    dark: "#010204",
    mid: "#061228",
    bright: "#12327a",
    accent: "#1e4a9e",
    glow: "#2563eb",
    canvas: "#010204",
    overlay: "rgba(1, 2, 4, 0.45)",
    fallback: "#010204",
    orbA: "#12327a",
    orbB: "#1e4a9e",
    mix: { mid: 0.7, bright: 0.28, accent: 0.15 },
  },
} as const;

export type GradientPaletteKey = keyof typeof gradientPalettes;

export const gradientAnimation = {
  speed: 0.2,
} as const;

/** @deprecated Use gradientPalettes.dark */
export const gradientColors = gradientPalettes.dark;
