// src/theme/components/modules/About.jsx
import {
  ModuleFields,
  TextField,
  FieldGroup,
  ImageField,
} from "@hubspot/cms-components/fields";
import styles from "../../styles/about.module.css";
import waterMission from "../../assets/squeeze.jpg";
import storyImage from "../../assets/hands.jpg";

export function Component({ fieldValues }) {
  const {
    heading,
    story,
    missionTitle,
    missionText,
    valuesText,
  } = fieldValues;

  const whatsNotIn = [
    "Sugar Free",
    "Gluten Free",
    "No Artificial Flavors",
    "No Artificial Coloring",
  ];

  const analysisResults = [
    ["pH Value", "6–8"],
    ["Total Dissolved Solids", "< 50"],
    ["Total Alkalinity (CaCO3)", "< 5"],
    ["Chlorine (Cl)", "2"],
    ["Sulphuric (SO4)", "2"],
    ["Fluoride (F)", "< 0.3"],
    ["Nitrate (N)", "< 10"],
    ["Sodium (Na)", "1"],
    ["Potassium (K)", "< 0.5"],
    ["Calcium (Ca)", "< 1"],
    ["Magnesium (Mg)", "< 1"],
    ["Aluminium (Al)", "< 0.01"],
    ["Iron (Fe)", "< 0.025"],
  ];

  return (
    <section className={styles.aboutSection}>

      {/* ================= HEADER BANNER ================= */}
      <div className={styles.topHeadingWrapper}>
        <h2 className={styles.heading}>{heading}</h2>
      </div>

      {/* ================= OUR STORY ================= */}
      <div className={styles.ourStoryBlock}>
        <h3>Our Story</h3>
         <h5>From Source to Sip: The BaubAqua Journey</h5>
        <div className={styles.divider}>
        <img
          src={storyImage}
          alt="Our Story"
          className={styles.storyImage}
        />
        <p>{story}</p>
        </div>

      </div>

      {/* ================= QUALITY SECTIONS ================= */}
      <div className={styles.qualityGrid}>

        <div className={styles.qualityCard}>
          <h4>Purely Balanced pH</h4>
          <p>
            pH levels greatly affect water’s taste and health benefits.
            At BaubAqua, we carefully balance our water’s pH between 6–8
            through advanced purification and mineralisation processes.
            This ensures a clean, refreshing taste that’s gentle on your body.
          </p>
        </div>

        <div className={styles.qualityCard}>
          <h4>Essential Electrolytes</h4>
          <p>
            Our water contains carefully selected electrolytes such as
            potassium, calcium and magnesium to enhance hydration.
            This mineral balance gives BaubAqua its crisp taste and
            supports everyday wellness.
          </p>
        </div>

        <div className={styles.qualityCard}>
          <h4>What’s Not In Our Water</h4>
          <ul>
            {whatsNotIn.map((item, i) => (
              <li key={i}>{item}</li>
            ))}
          </ul>
        </div>

      </div>

      {/* ================= ANALYSIS RESULTS ================= */}
      <div className={styles.analysisSection}>
        <h3>Analysis Results (mg/l)</h3>
        <div className={styles.analysisTable}>
          {analysisResults.map(([label, value], i) => (
            <div key={i} className={styles.analysisRow}>
              <span>{label}</span>
              <strong>{value}</strong>
            </div>
          ))}
        </div>
      </div>

      {/* ================= MISSION ================= */}
      <div className={styles.missionSection}>
        <div className={styles.missionLeft}>
          <img src={waterMission} alt="Our Mission" />
        
        </div>

        <div className={styles.missionRight}>
          <h3>{missionTitle}</h3>
          <p>{missionText}</p>
            <p>
            Clean water is essential to life. Our mission is to deliver
            pure, safe and affordable water to homes, businesses and
            events while protecting our environment.
          </p>
        </div>
      </div>

      {/* ================= VALUES ================= */}
      <div className={styles.valuesWrapper}>
        <h3>Our Values</h3>
        <p className={styles.valuesText}>{valuesText}</p>
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

/* ================= HUBSPOT FIELDS ================= */

export const fields = (
  <ModuleFields>
    <TextField
      name="heading"
      label="Header Heading"
      default="About BaubAqua"
    />

    <TextField
      name="story"
      label="Our Story"
      default="BaubAqua was founded with one simple belief: everyone deserves access to clean, refreshing water. Locally produced and carefully purified, our water is designed to meet the highest quality standards while supporting our community and environment."
      multiple
    />

    <TextField
      name="missionTitle"
      label="Mission Title"
      default="Our Mission & Commitment"
    />

    <TextField
      name="missionText"
      label="Mission Text"
      default="We are committed to sustainable water sourcing, advanced purification, and reliable delivery. Every bottle reflects our promise of quality, safety, and care — from our source to your doorstep."
      multiple
    />

    <TextField
      name="valuesText"
      label="Values Text"
      default="Integrity, quality and community guide everything we do. We use sustainable practices, support local jobs and treat every customer like family. Our water is more than a product — it’s our responsibility."
      multiple
    />
  </ModuleFields>
);

export const meta = {
  label: "About – Water Company",
  icon: "info-circle",
};

export default Component;
