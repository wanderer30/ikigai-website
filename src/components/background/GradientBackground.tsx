"use client";

import { Canvas } from "@react-three/fiber";
import { GradientScene } from "@/components/background/GradientScene";
import { useReducedMotion } from "@/hooks/useReducedMotion";

export function GradientBackground() {
  const reducedMotion = useReducedMotion();

  return (
    <div className="gradient-background" aria-hidden>
      {reducedMotion ? (
        <div className="gradient-background__fallback" />
      ) : (
        <Canvas
          className="gradient-background__canvas"
          camera={{ position: [0, 0, 5], fov: 50 }}
          dpr={[1, 1.5]}
          gl={{ antialias: true, alpha: false, powerPreference: "high-performance" }}
        >
          <GradientScene />
        </Canvas>
      )}
      <div className="gradient-background__overlay" />
    </div>
  );
}
