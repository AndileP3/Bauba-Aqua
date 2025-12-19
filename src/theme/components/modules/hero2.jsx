// src/theme/components/modules/Hero.jsx
import { ModuleFields, TextField, ImageField } from "@hubspot/cms-components/fields";
import { Island } from "@hubspot/cms-components";
import CTAIsland from "../islands/CTAIsland?island";
// import heroVideo from "../../assets/waterfall.mp4";


import styles from "../../styles/hero2.module.css";
import fallbackImage from "../../assets/1bottle.png";
import backgroundImage from "../../assets/back.png";

export function Component({ fieldValues = {} }) {
  const {
    title,
    subtitle,
     heroSideImage,
    ctaPrimary,
    ctaPrimaryLink,
  } = fieldValues;

  const sideImage = heroSideImage?.src || fallbackImage;

  return (
     <section className={styles.heroSection}>
      {/* VIDEO BACKGROUND */}
      {/* <div className={styles.heroBackground}>
        <video autoPlay muted loop playsInline className={styles.heroVideo}>
          <source src={heroVideo} type="video/mp4" />
        </video>
      </div> */}

      {/* OVERLAY */}
      <div className={styles.heroOverlay}>
        <div className={styles.heroGrid}>
          
          {/* LEFT CONTENT */}
          <div className={styles.heroLeft}>
            <h1 className={styles.heroTitle}>{title}</h1>
            <p className={styles.heroSubtitle}>{subtitle}</p>

            <Island
              module={CTAIsland}
              fieldValues={{ ctaPrimary, ctaPrimaryLink }}
            />
          </div>

          {/* RIGHT IMAGE */}
      <div
  className={styles.heroRight}
  style={{ backgroundImage: `url(${backgroundImage})` }}
>
  <img
    src={sideImage}
    alt="Hero visual"
    className={styles.heroImage}
  />
</div>


        </div>
      </div>

      <div className={styles.waveLayer}></div>
    </section>
  );
}

export const fields = (
  <ModuleFields>
    <TextField
      name="title"
      label="Hero Title"
      default="Pure Water Solutions That Power Healthier Living"
    />
    <TextField
      name="subtitle"
      label="Hero Subtitle"
      default="We help homes and businesses access fresh, purified water. On time, every time."
    />

     
   <ImageField
      name="heroSideImage"
      label="Right Side Image"
      helpText="Image displayed on the right side of the hero"
    />


    <TextField name="ctaPrimary" label="Primary CTA Text" default="Place an Order" />
    <TextField name="ctaPrimaryLink" label="Primary CTA Link" default="#" />
  </ModuleFields>
);

export const meta = {
  label: "Consulting Hero Section",
  icon: "image-text",
};

export default Component;
