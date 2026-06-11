"use client";

import { useFrame } from "@react-three/fiber";
import { useMemo, useRef } from "react";
import * as THREE from "three";
import {
  gradientFragmentShader,
  gradientVertexShader,
} from "@/components/background/shaders/gradientShader";

export function GradientShaderPlane() {
  const materialRef = useRef<THREE.ShaderMaterial>(null);
  const elapsedRef = useRef(0);

  const uniforms = useMemo(
    () => ({
      uTime: { value: 0 },
    }),
    [],
  );

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
