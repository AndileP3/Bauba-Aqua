// src/theme/components/modules/Contact.jsx
import {
  ModuleFields,
  TextField,
} from "@hubspot/cms-components/fields";
import styles from "../../styles/contact.module.css";
import bottleImg from "../../assets/squeeze.jpg";

export function Component({ fieldValues }) {
  const {
    heading,
    introText,
    address,
    phone,
    email,
  } = fieldValues;

  return (
    <section className={styles.contactSection}>

      {/* ================= HEADER BANNER ================= */}
      <div className={styles.topHeadingWrapper}>
        <h2 className={styles.heading}>{heading}</h2>
      </div>

      {/* ================= INTRO ================= */}
      <div className={styles.introBlock}>
        <h3>We’d Love To Hear From You</h3>
        <p>{introText}</p>
      </div>

      {/* ================= CONTACT GRID ================= */}
      <div className={styles.contactGrid}>

        {/* CONTACT DETAILS */}
        <div className={styles.contactCard}>
         <div className={styles.ctaContent}>
          <h3>Clean Water Starts With A Conversation</h3>
          <p>
            Whether you’re placing a bulk order, planning an event,
            or just want to know more about BaubAqua —
            we’re ready to help.
          </p>
            <p>{address || "Shop 4, Romania Court"}</p>
          <p>
           {phone || "(+27) 71 535 9277"}
          </p>
          <p>
           {email || "Edwin.leshata@gmail.com"}
          </p>
          <a href="/our-services" className={styles.buttonPrimary}>
            View Our Products
          </a>
        </div>
        </div>

        {/* CONTACT FORM */}
      <div className={styles.formCard}>
  <h4>Send Us a Message</h4>

  <form
    className={styles.contactForm}
    action="https://formspree.io/f/mqayzdob" // <-- replace with your Formspree URL
    method="POST"
  >
    <input type="text" name="name" placeholder="Full Name" required />
    <input type="email" name="email" placeholder="Email Address" required />
    <input type="text" name="phone" placeholder="Phone Number" />
    <textarea name="message" placeholder="Your Message" required></textarea>

    <button type="submit">Send Message</button>
  </form>
</div>


      </div>

      {/* ================= CTA ================= */}
      {/* <div className={styles.ctaSection}>
        <div className={styles.ctaContent}>
          <h3>Clean Water Starts With A Conversation</h3>
          <p>
            Whether you’re placing a bulk order, planning an event,
            or just want to know more about BaubAqua —
            we’re ready to help.
          </p>
          <a href="/products" className={styles.buttonPrimary}>
            View Our Products
          </a>
        </div>

        <div className={styles.ctaImage}>
          <img src={bottleImg} alt="BaubAqua Bottle" />
        </div>
      </div> */}

    </section>
  );
}

/* ================= HUBSPOT FIELDS ================= */

export const fields = (
  <ModuleFields>
    <TextField
      name="heading"
      label="Header Heading"
      default="Contact Us"
    />

    <TextField
      name="introText"
      label="Intro Text"
      default="Have questions about our products, pricing, or delivery? Reach out to us and our team will get back to you as soon as possible."
      multiple
    />

   
  </ModuleFields>
);

export const meta = {
  label: "Contact – Water Company",
  icon: "phone",
};

export default Component;
