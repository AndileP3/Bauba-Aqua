import { ModuleFields, TextField, ImageField, UrlField, FieldGroup } from "@hubspot/cms-components/fields";
import styles from "../../styles/footer.module.css";
import defaultLogo from "../../assets/trans-logo.png";

export function Component({ fieldValues }) {
  const {
    logo,
    tagline,
    address,
    phone,
    email,
    hours,
    promoText,
    quickLinks,
    services,
    policies,
    copyright,
  } = fieldValues;

  const logoSrc = logo?.src || defaultLogo;

  const quickLinksArray =
    Array.isArray(quickLinks) && quickLinks.length > 0
      ? quickLinks
      : [
          { text: "Home", url: "/home-1" },
          { text: "About", url: "/about-us" },
          { text: "Services", url: "/our-services" },
         
          { text: "Contact", url: "/contact-us" },
        ];

  const servicesArray =
    Array.isArray(services) && services.length > 0
      ? services
      : [
          { text: "Premium Bottled Water" },
          { text: "Custom Branded Bottles" },
          { text: "Bulk Water Supply" },
          { text: "Reliable Delivery" },
          { text: "Event Hydration Solutions" },
        ];

  const policiesArray =
    Array.isArray(policies) && policies.length > 0
      ? policies
      : [
          { text: "Privacy Policy", url: "#" },
          { text: "Terms of Service", url: "#" },
          { text: "Delivery Policy", url: "#" },
        ];

  return (
    <footer className={styles.footerSection}>
      <div className={styles.container}>

        {/* BRAND */}
        <div className={styles.brand}>
          <img src={logoSrc} alt="BaubAqua Logo" className={styles.logo} />
          <p className={styles.tagline}>
            {tagline || "Pure Water. Pure Life."}
          </p>
        </div>

        {/* QUICK LINKS */}
        <div className={styles.column}>
          <h4>Quick Links</h4>
          <ul>
            {quickLinksArray.map((link, idx) => (
              <li key={idx}>
                <a href={link.url}>{link.text}</a>
              </li>
            ))}
          </ul>
        </div>

        {/* SERVICES */}
        <div className={styles.column}>
          <h4>Our Services</h4>
          <ul>
            {servicesArray.map((service, idx) => (
              <li key={idx}>{service.text}</li>
            ))}
          </ul>
        </div>

        {/* CONTACT */}
        <div className={styles.column}>
          <h4>Contact Info</h4>
          <p>{address || "Shop 4, Romania Court"}</p>
          <p>
           {phone || "(+27) 71 535 9277"}
          </p>
          <p>
           {email || "Edwin.leshata@gmail.com"}
          </p>
          <p>{hours || "Mon to Fri: 8am to 5pm"}</p>

          {promoText && <span className={styles.promo}>{promoText}</span>}
        </div>
      </div>

      {/* BOTTOM BAR */}
      <div className={styles.bottomBar}>
        <div className={styles.policies}>
          {policiesArray.map((policy, idx) => (
            <a key={idx} href={policy.url}>
              {policy.text}
            </a>
          ))}
        </div>

        <p className={styles.copy}>
          {copyright ||
            "© 2025 BaubAqua. All Rights Reserved. Developed by Andile"}
        </p>
      </div>
    </footer>
  );
}

export const fields = (
  <ModuleFields>
    <ImageField name="logo" label="Company Logo" />
    <TextField name="tagline" label="Tagline" default="Pure Water. Pure Life." />

    <TextField name="address" label="Address" default="Shop 4, Romania Court" />
    <TextField name="phone" label="Phone Number" default="(+27) 71 535 9277" />
    <TextField name="email" label="Email Address" default="Edwin.leshata@gmail.com" />
    <TextField name="hours" label="Working Hours" default="Mon–Fri: 8am–5pm" />
    <TextField name="promoText" label="Promo Text" default="Free delivery on 50+ bottles" />

    <FieldGroup name="quickLinks" label="Quick Links" repeating>
      <TextField name="text" label="Link Text" />
      <UrlField name="url" label="Link URL" />
    </FieldGroup>

    <FieldGroup name="services" label="Services" repeating>
      <TextField name="text" label="Service Name" />
    </FieldGroup>

    <FieldGroup name="policies" label="Policies" repeating>
      <TextField name="text" label="Policy Name" />
      <UrlField name="url" label="Policy URL" />
    </FieldGroup>

    <TextField
      name="copyright"
      label="Copyright Text"
      default="© 2025 BaubAqua. All Rights Reserved. Developed by Andile"
    />
  </ModuleFields>
);

export const meta = {
  label: "Modern Water Footer",
  icon: "footer",
};

export default Component;
