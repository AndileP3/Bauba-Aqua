// src/theme/components/modules/WhyUs.jsx
import { ModuleFields, TextField, FieldGroup } from "@hubspot/cms-components/fields";
import { Island } from "@hubspot/cms-components";
import WhyUsIsland from "../islands/WhyUsIsland?island";
import styles from "../../styles/whyus.module.css";

export function Component({ fieldValues }) {
  return (
    <div className={styles.wrapper}>
      <Island module={WhyUsIsland} fieldValues={fieldValues} />
    </div>
  );
}

export const fields = (
  <ModuleFields>
    <TextField
      name="heading"
      label="Section Heading"
      default="Why Choose Our Water"
    />

    <FieldGroup name="valueProps" label="Value Propositions" repeating>
      <TextField name="title" label="Title" />
      <TextField name="description" label="Description" />
    </FieldGroup>
  </ModuleFields>
);

export const meta = {
  label: "Why Us – Water Scroller",
  icon: "droplet",
};

export default Component;
