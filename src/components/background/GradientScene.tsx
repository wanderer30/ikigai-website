"use client";

import { GradientShaderPlane } from "@/components/background/GradientShaderPlane";
import { gradientPalettes, type GradientPaletteKey } from "@/config/gradients";

type GradientSceneProps = {
  paletteKey: GradientPaletteKey;
};

export function GradientScene({ paletteKey }: GradientSceneProps) {
  const palette = gradientPalettes[paletteKey];

  return (
    <>
      <color attach="background" args={[palette.canvas]} />
      <GradientShaderPlane paletteKey={paletteKey} />
    </>
  );
}
