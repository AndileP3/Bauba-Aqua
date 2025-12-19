import { ModuleFields, TextField, ImageField, FieldGroup } from "@hubspot/cms-components/fields";
import styles from "../../styles/trust.module.css";
import fallbackLogo from "../../assets/trans-logo-detail.png"; // <-- import local logo

export function Component({ fieldValues }) {
  const { heading, logos } = fieldValues;

  // Fallback logos if none added in CMS
  const logosArray = Array.isArray(logos) && logos.length > 0 ? logos : [
    { image: { src: fallbackLogo, alt: "Company Logo" } },
  ];

  return (
    <section className={styles.logosSection}>
      {heading && <h2 className={styles.heading}>{heading}</h2>}

      <div className={styles.logosContainer}>
        {logosArray.map((item, index) => (
          <div key={index} className={styles.logoWrapper}>
            <img
              src={item.image?.src || fallbackLogo}
              alt={item.image?.alt || `Logo ${index + 1}`}
              className={styles.logoImage}
            />
          </div>
        ))}
      </div>
    </section>
  );
}

// HubSpot Module Fields
export const fields = (
  <ModuleFields>
    <TextField
      name="heading"
      label="Section Heading"
      default="You can trust us to deliver the purest water, every time."
    />

    <FieldGroup name="logos" label="Logos" repeating={true}>
      <ImageField name="image" label="Logo Image" />
    </FieldGroup>
  </ModuleFields>
);

export const meta = {
  label: "Logos Strip",
  icon: "image",
};

export default Component;
