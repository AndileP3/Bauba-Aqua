// src/theme/components/modules/FounderModule.jsx
import { ModuleFields, TextField, ImageField } from "@hubspot/cms-components/fields";
import styles from "../../styles/homeAbout.module.css";
import founderImage from "../../assets/2bottles.png";

export function Component({ fieldValues }) {
  const { heading, description, image, buttonText } = fieldValues;
  // Use the same pattern as header: image?.src || fallbackImage
  const imgSrc = image?.src || founderImage;
  
  return (
    <section className={styles.founderSection}>
      <div className={styles.container}>
        <div className={styles.imageWrapper}>
          {/* Always show the image wrapper, but use conditional src */}
          <img src={imgSrc} alt={heading} className={styles.founderImage} />
        </div>
        <div className={styles.textWrapper}>
          {heading && <h2 className={styles.heading}>{heading}</h2>}
          {description && <p className={styles.description}>{description}</p>}
          {buttonText && (
            <a href="/about-us" className={styles.button}>
              {buttonText}
            </a>
          )}
        </div>
      </div>
    </section>
  );
}

export const fields = (
  <ModuleFields>
    <TextField name="heading" label="Heading" default="BaubAqua" />
    <TextField
      name="description"
      label="Description"
      default="Your trusted source for pure and refreshing water in Boksburg. Our mission is to provide high-quality water that meets the highest standards of taste and purity. Using state-of-the-art purification technology, we ensure every bottle delivers crisp, clean hydration. Currently serving the Boksburg area with free delivery on orders of 50 bottles or more, we're committed to making premium water accessible to everyone."
    />
    {/* Remove the default prop - it was causing the validation error */}
    <ImageField name="image" label="Founder Image" />
    <TextField name="buttonText" label="Button Text" default="More About us" />
  </ModuleFields>
);

export const meta = {
  label: "Founder Section",
  icon: "user",
};

export default Component;