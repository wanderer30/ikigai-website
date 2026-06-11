"use client";

import { gradientColors } from "@/config/gradients";
import { GradientShaderPlane } from "@/components/background/GradientShaderPlane";

export function GradientScene() {
  return (
    <>
      <color attach="background" args={[gradientColors.dark]} />
      <GradientShaderPlane />
    </>
  );
}
