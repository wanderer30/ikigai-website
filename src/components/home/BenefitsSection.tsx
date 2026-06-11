import { homeBenefits } from "@/config/content/home";
import { GlassSurface } from "@/components/ui/GlassSurface";

export function BenefitsSection() {
  return (
    <section className="section">
      <div className="container">
        <h2>{homeBenefits.title}</h2>
        <p className="section-subtitle">{homeBenefits.subtitle}</p>
        <div className="benefits-grid">
          {homeBenefits.items.map((item) => (
            <GlassSurface key={item.title} className="benefit-item">
              <h3>{item.title}</h3>
              <p>{item.description}</p>
            </GlassSurface>
          ))}
        </div>
      </div>
    </section>
  );
}
