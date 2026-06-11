type SectionHeaderProps = {
  id: string;
  title: string;
  subtitle?: string;
};

export function SectionHeader({ id, title, subtitle }: SectionHeaderProps) {
  return (
    <header className="section-header">
      <h2 id={id}>{title}</h2>
      {subtitle ? <p className="section-subtitle">{subtitle}</p> : null}
    </header>
  );
}
