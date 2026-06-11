export const gradientVertexShader = /* glsl */ `
  varying vec2 vUv;

  void main() {
    vUv = uv;
    gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
  }
`;

export const gradientFragmentShader = /* glsl */ `
  uniform float uTime;
  uniform vec3 uDark;
  uniform vec3 uMid;
  uniform vec3 uBright;
  uniform vec3 uAccent;
  uniform float uMixMid;
  uniform float uMixBright;
  uniform float uMixAccent;
  varying vec2 vUv;

  void main() {
    vec2 p = vUv * 2.0 - 1.0;
    float t = uTime;

    float wave1 = sin(p.x * 2.2 + t * 0.35) * cos(p.y * 1.6 + t * 0.28);
    float wave2 = sin(p.x * 3.1 - t * 0.22 + p.y * 2.4);
    float wave3 = cos(length(p + vec2(sin(t * 0.15), cos(t * 0.12))) * 2.8 - t * 0.4);

    vec3 col = mix(uDark, uMid, smoothstep(-1.0, 0.25, wave1) * uMixMid);
    col = mix(col, uBright, smoothstep(0.0, 0.85, wave2) * uMixBright);
    col = mix(col, uAccent, smoothstep(0.2, 1.0, wave3) * uMixAccent);

    gl_FragColor = vec4(col, 1.0);
  }
`;

export function hexToVec3(hex: string): [number, number, number] {
  const normalized = hex.replace("#", "");
  return [
    parseInt(normalized.slice(0, 2), 16) / 255,
    parseInt(normalized.slice(2, 4), 16) / 255,
    parseInt(normalized.slice(4, 6), 16) / 255,
  ];
}
