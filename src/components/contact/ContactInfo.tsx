import { contactConfig } from "@/config/site";

export function ContactInfo() {
  return (
    <section className="section">
      <div className="container">
        <div className="contact-info">
          <p>
            <strong>Email:</strong>{" "}
            <a href={`mailto:${contactConfig.email}`}>{contactConfig.email}</a>
          </p>
          <p>
            <strong>Phone:</strong>{" "}
            <a href={contactConfig.phoneHref}>{contactConfig.phone}</a>
          </p>
          <div className="address-block">
            <p>
              <strong>Office Address:</strong>
            </p>
            <p>
              {contactConfig.address.line1}
              <br />
              {contactConfig.address.line2}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
