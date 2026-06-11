import type { ReactNode } from "react";

type GlassSurfaceProps = {
  children: ReactNode;
  className?: string;
  as?: "div" | "section" | "article";
};

/** CSS glass panel for DOM content (backdrop-filter). */
export function GlassSurface({
  children,
  className = "",
  as: Tag = "div",
}: GlassSurfaceProps) {
  return (
    <Tag className={`glass-surface ${className}`.trim()}>{children}</Tag>
  );
}
