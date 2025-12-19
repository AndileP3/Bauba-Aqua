// src/theme/components/modules/FounderModule.jsx
import { ModuleFields, TextField, ImageField } from "@hubspot/cms-components/fields";
import styles from "../../styles/brand.module.css";
import founderImage from "../../assets/brand.png";

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

      <div className={styles.valuesWrapper1}>
              <h3>Ready To Drink? Order Yours Now</h3>
              <p className={styles.valuesText1}>For more information on how we can help assist you with your bottled water requirements and support your promotions or events.</p>
              <a href="/contact-us" className={styles.button1}>
                Order Now
              </a>
            </div>
    </section>
  );
}

export const fields = (
  <ModuleFields>
    <TextField name="heading" label="Heading" default="YOUR OWN PREMIUM BRAND BOTTLE WATER." />
    <TextField
      name="description"
      label="Description"
      default="Customise your bottled water with a personalized label. We put your brand on our high quality, purified, remineralised, ozonated bottled still or sparkling water. We specialize in customized water bottles for your promotions, events, office and more."
    />
    {/* Remove the default prop - it was causing the validation error */}
    <ImageField name="image" label="Founder Image" />
    <TextField name="buttonText" label="Button Text" default="More Services" />
  </ModuleFields>
);

export const meta = {
  label: "Founder Section",
  icon: "user",
};

export default Component;