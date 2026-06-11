import type { ReactNode } from "react";

type SectionProps = {
  id?: string;
  children: ReactNode;
  className?: string;
  ariaLabelledBy?: string;
};

export function Section({
  id,
  children,
  className = "",
  ariaLabelledBy,
}: SectionProps) {
  return (
    <section
      id={id}
      className={`section ${className}`.trim()}
      aria-labelledby={ariaLabelledBy}
    >
      <div className="container">{children}</div>
    </section>
  );
}
