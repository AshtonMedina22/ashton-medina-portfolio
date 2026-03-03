"use client";

import { Button, Column, Row } from "@once-ui-system/core";
import { person, social } from "@/resources";
import styles from "./ContactSection.module.scss";

const AVAILABLE_FOR = ["Full Time", "Part Time", "Contract"] as const;
const LOCATION = "North DFW, Texas & Remote";

const MY_EXPERIENCE = [
  "Technical Leadership",
  "Engineering",
  "Implementation",
  "Operations",
  "Business Systems",
  "Project/Program Management",
  "UX/Product",
  "Custom Development",
] as const;

export function ContactSection() {
  const linkedIn = social.find((s) => s.icon === "linkedin");

  return (
    <Column
      fillWidth
      maxWidth="m"
      gap="l"
      horizontal="center"
      paddingY="xl"
      paddingX="l"
    >
      <div className={styles.boxGrid}>
        <section className={styles.infoBox}>
          <h2 className={styles.boxTitle}>Available For</h2>
          <p className={styles.boxRow}>
            {AVAILABLE_FOR.join(" · ")}
          </p>
          <p className={styles.boxMeta}>{LOCATION}</p>
          <div className={styles.actions}>
            <Button
              href={`mailto:${person.email}`}
              label="Email"
              size="m"
              variant="primary"
              prefixIcon="email"
            />
            {linkedIn && (
              <Button
                href={linkedIn.link}
                label="LinkedIn"
                size="m"
                variant="secondary"
                prefixIcon="linkedin"
                target="_blank"
                rel="noopener noreferrer"
              />
            )}
          </div>
        </section>

        <section className={styles.infoBox}>
          <h2 className={styles.boxTitle}>My Experience</h2>
          <ul className={styles.experienceList}>
            {MY_EXPERIENCE.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </section>
      </div>
    </Column>
  );
}
