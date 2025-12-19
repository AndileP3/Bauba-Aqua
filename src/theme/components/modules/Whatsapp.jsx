import {
  ModuleFields,
  TextField,
} from "@hubspot/cms-components/fields";
import styles from "../../styles/floatingWhatsapp.module.css";

export function Component({ fieldValues }) {
  const { phoneNumber, message } = fieldValues;

  const whatsappLink = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
    message
  )}`;

  return (
    <a
      href={whatsappLink}
      className={styles.whatsappFloat}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat on WhatsApp"
    >
      {/* REAL WHATSAPP SVG */}
      <svg
        viewBox="0 0 32 32"
        width="30"
        height="30"
        fill="currentColor"
        aria-hidden="true"
      >
        <path d="M19.11 17.42c-.27-.14-1.6-.79-1.85-.88-.25-.09-.43-.14-.61.14-.18.27-.7.88-.86 1.06-.16.18-.32.2-.59.07-.27-.14-1.14-.42-2.17-1.34-.8-.72-1.34-1.61-1.5-1.88-.16-.27-.02-.42.12-.56.13-.13.27-.32.41-.48.14-.16.18-.27.27-.45.09-.18.05-.34-.02-.48-.07-.14-.61-1.47-.84-2.01-.22-.54-.45-.47-.61-.48h-.52c-.18 0-.48.07-.73.34-.25.27-.96.93-.96 2.27s.98 2.63 1.12 2.82c.14.18 1.93 2.95 4.69 4.13.66.28 1.17.45 1.57.57.66.21 1.27.18 1.75.11.53-.08 1.6-.65 1.83-1.27.23-.61.23-1.14.16-1.25-.07-.11-.25-.18-.52-.32zM16 3C8.83 3 3 8.83 3 16c0 2.52.75 4.86 2.03 6.83L3 29l6.35-2.04A12.9 12.9 0 0016 29c7.17 0 13-5.83 13-13S23.17 3 16 3z"/>
      </svg>

      <span className={styles.tooltip}>Chat on WhatsApp</span>
    </a>
  );
}

/* ================= HUBSPOT FIELDS ================= */
export const fields = (
  <ModuleFields>
    <TextField
      name="phoneNumber"
      label="WhatsApp Number (Country code required)"
      default="27715359277"
    />
    <TextField
      name="message"
      label="Default WhatsApp Message"
      default="Hi BaubAqua 👋 I would like to place an order."
    />
  </ModuleFields>
);

export const meta = {
  label: "Floating WhatsApp Button",
  icon: "chat",
};

export default Component;
