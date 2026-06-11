import { gradientColors } from "@/config/gradients";

const { dark, mid, bright, accent } = gradientColors;

export const gradientVertexShader = /* glsl */ `
  varying vec2 vUv;

  void main() {
    vUv = uv;
    gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
  }
`;

export const gradientFragmentShader = /* glsl */ `
  uniform float uTime;
  varying vec2 vUv;

  void main() {
    vec2 p = vUv * 2.0 - 1.0;
    float t = uTime;

    float wave1 = sin(p.x * 2.2 + t * 0.35) * cos(p.y * 1.6 + t * 0.28);
    float wave2 = sin(p.x * 3.1 - t * 0.22 + p.y * 2.4);
    float wave3 = cos(length(p + vec2(sin(t * 0.15), cos(t * 0.12))) * 2.8 - t * 0.4);

    vec3 dark = vec3(${hexToVec3(dark)});
    vec3 midColor = vec3(${hexToVec3(mid)});
    vec3 brightColor = vec3(${hexToVec3(bright)});
    vec3 accentColor = vec3(${hexToVec3(accent)});

    vec3 col = mix(dark, midColor, smoothstep(-1.0, 0.25, wave1) * 0.7);
    col = mix(col, brightColor, smoothstep(0.0, 0.85, wave2) * 0.28);
    col = mix(col, accentColor, smoothstep(0.2, 1.0, wave3) * 0.15);

    gl_FragColor = vec4(col, 1.0);
  }
`;

function hexToVec3(hex: string): string {
  const normalized = hex.replace("#", "");
  const r = parseInt(normalized.slice(0, 2), 16) / 255;
  const g = parseInt(normalized.slice(2, 4), 16) / 255;
  const b = parseInt(normalized.slice(4, 6), 16) / 255;
  return `${r.toFixed(4)}, ${g.toFixed(4)}, ${b.toFixed(4)}`;
}
