import { ModuleFields, TextField, FieldGroup } from "@hubspot/cms-components/fields";
import styles from "../../styles/steps.module.css";

export function Component({ fieldValues }) {
  const { heading, steps } = fieldValues;

  const stepsArray =
    Array.isArray(steps) && steps.length > 0
      ? steps
      : [
          { title: "Place Your Order", description: "Select your water type, quantity, and delivery frequency." },
          { title: "Processing & Packaging", description: "We carefully filter and bottle your water for maximum purity." },
          { title: "Delivery to Your Door", description: "Our reliable team delivers fresh water right to your home or office." },
          { title: "Enjoy Fresh Water", description: "Stay hydrated with safe, refreshing water anytime." },
        ];

  return (
    <section className={styles.stepsSection}>
      {heading && <h2 className={styles.heading}>{heading}</h2>}

      <div className={styles.stepsContainer}>
        {stepsArray.map((step, index) => (
          <div key={index} className={styles.stepBubble}>
            <div className={styles.circleNumber}>{index + 1}</div>
            <div className={styles.stepContent}>
              <h3 className={styles.stepTitle}>{step.title}</h3>
              <p className={styles.stepDescription}>{step.description}</p>
            </div>
          </div>
        ))}
      </div>

      {/* CTA Button */}
      <div className={styles.ctaWrapper}>
        <a href="/contact-us" className={styles.ctaButton}>
          Place Your Order Now
        </a>
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
      default="How It Works"
    />

    <FieldGroup name="steps" label="Steps" repeating={true}>
      <TextField name="title" label="Step Title" />
      <TextField name="description" label="Step Description" />
    </FieldGroup>
  </ModuleFields>
);

export const meta = {
  label: "Water Steps / Process",
  icon: "exchange-alt",
};

export default Component;
