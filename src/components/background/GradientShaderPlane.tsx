"use client";

import { useFrame } from "@react-three/fiber";
import { useEffect, useMemo, useRef } from "react";
import * as THREE from "three";
import {
  gradientFragmentShader,
  gradientVertexShader,
  hexToVec3,
} from "@/components/background/shaders/gradientShader";
import { gradientPalettes, type GradientPaletteKey } from "@/config/gradients";

type GradientShaderPlaneProps = {
  paletteKey: GradientPaletteKey;
};

export function GradientShaderPlane({ paletteKey }: GradientShaderPlaneProps) {
  const materialRef = useRef<THREE.ShaderMaterial>(null);
  const elapsedRef = useRef(0);
  const palette = gradientPalettes[paletteKey];

  const uniforms = useMemo(
    () => ({
      uTime: { value: 0 },
      uDark: { value: new THREE.Vector3(...hexToVec3(palette.dark)) },
      uMid: { value: new THREE.Vector3(...hexToVec3(palette.mid)) },
      uBright: { value: new THREE.Vector3(...hexToVec3(palette.bright)) },
      uAccent: { value: new THREE.Vector3(...hexToVec3(palette.accent)) },
      uMixMid: { value: palette.mix.mid },
      uMixBright: { value: palette.mix.bright },
      uMixAccent: { value: palette.mix.accent },
    }),
    [palette],
  );

  useEffect(() => {
    if (!materialRef.current) return;

    materialRef.current.uniforms.uDark.value.set(...hexToVec3(palette.dark));
    materialRef.current.uniforms.uMid.value.set(...hexToVec3(palette.mid));
    materialRef.current.uniforms.uBright.value.set(...hexToVec3(palette.bright));
    materialRef.current.uniforms.uAccent.value.set(...hexToVec3(palette.accent));
    materialRef.current.uniforms.uMixMid.value = palette.mix.mid;
    materialRef.current.uniforms.uMixBright.value = palette.mix.bright;
    materialRef.current.uniforms.uMixAccent.value = palette.mix.accent;
  }, [palette]);

  useFrame((_, delta) => {
    elapsedRef.current += delta;
    if (materialRef.current) {
      materialRef.current.uniforms.uTime.value = elapsedRef.current;
    }
  });

  return (
    <mesh position={[0, 0, -2]} scale={[12, 8, 1]}>
      <planeGeometry args={[1, 1, 1, 1]} />
      <shaderMaterial
        ref={materialRef}
        uniforms={uniforms}
        vertexShader={gradientVertexShader}
        fragmentShader={gradientFragmentShader}
      />
    </mesh>
  );
}
