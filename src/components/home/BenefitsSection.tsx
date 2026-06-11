import { homeBenefits } from "@/config/content/home";

export function BenefitsSection() {
  return (
    <section className="section">
      <div className="container">
        <h2>{homeBenefits.title}</h2>
        <p className="section-subtitle">{homeBenefits.subtitle}</p>
        <div className="benefits-grid">
          {homeBenefits.items.map((item) => (
            <div key={item.title} className="benefit-item">
              <h3>{item.title}</h3>
              <p>{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
