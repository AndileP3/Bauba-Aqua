// src/theme/components/header.jsx
import { ModuleFields, TextField, ImageField, FieldGroup } from "@hubspot/cms-components/fields";
import { Island } from "@hubspot/cms-components";
import HeaderIsland from "../islands/HeaderIsland?island";
import styles from "../../styles/header.module.css";

export function Component({ fieldValues }) {
  return (
    <div className={styles.headerWrapper}>
      <Island module={HeaderIsland} fieldValues={fieldValues} />
    </div>
  );
}

export const fields = (
  <ModuleFields>
    <ImageField name="logoImage" label="Logo Image" />
    <TextField
      name="logoText"
      label="Fallback Logo Text"
      default="IntegriCloud"
    />
    <FieldGroup name="navLinks" label="Navigation Links" repeating={true}>
      <TextField name="text" label="Link Text" />
      <TextField name="href" label="Link URL" default="#" />
      <TextField name="isButton" label="Is Button?" default="false" />
    </FieldGroup>
  </ModuleFields>
);

export const meta = {
  label: 'Header Module',
  icon: 'navigation'
};

export default Component;