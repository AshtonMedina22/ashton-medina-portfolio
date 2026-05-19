"use client";

import { CLIENT_NAME, ASSIGNMENT_REF } from "../projectData";
import styles from "./vendor-lifecycle-demo.module.scss";

const COMPLIANCE = [
  ["General Liability", "Compliant"],
  ["Business License", "Expiring soon"],
  ["Workers Comp", "Missing"],
];

export function VendorLifecycleDemo() {
  return (
    <div className={styles.shell}>
      <div className={styles.chrome}>
        <span>Vendor Management & Portal</span>
        <span>Internal control + self-service access</span>
      </div>

      <div className={styles.statusStrip}>
        <span>Elite Sound Productions</span>
        <strong>Active</strong>
        <strong>Compliant</strong>
        <span>Portal enabled</span>
      </div>

      <div className={styles.layout}>
        <section className={styles.hero} aria-label="Internal and vendor portal lifecycle preview">
          <div className={styles.internalPane}>
            <span className={styles.eyebrow}>Internal control</span>
            <h2>Vendor lifecycle</h2>
            <p>Operations can see vendor standing, assignment status, and compliance risk before work is released.</p>
            <div className={styles.internalStats}>
              <span>12 assignments</span>
              <span>8 documents</span>
              <span>3 RFQs</span>
            </div>
          </div>

          <div className={styles.portalPane}>
            <span className={styles.eyebrow}>Vendor portal</span>
            <h3>Assignment #{ASSIGNMENT_REF}</h3>
            <p>{CLIENT_NAME} Q4 delivery</p>
            <div className={styles.assignmentMeta}>
              <span>Dec 10, 2026</span>
              <span>Service Type A</span>
            </div>
            <div className={styles.actionLine}>Accept & sign</div>
          </div>
        </section>

        <div className={styles.supportRow}>
          <section className={styles.supportCard}>
            <div className={styles.cardHeader}>
              <span>Compliance summary</span>
              <strong>3 preview</strong>
            </div>
            <div className={styles.previewRows}>
              {COMPLIANCE.map(([doc, state]) => (
                <div key={doc} className={styles.previewRow}>
                  <span>{doc}</span>
                  <strong>{state}</strong>
                </div>
              ))}
            </div>
          </section>

          <section className={styles.supportCard}>
            <div className={styles.cardHeader}>
              <span>Assignment action</span>
              <strong>Secure portal</strong>
            </div>
            <div className={styles.actionSummary}>
              <strong>Vendor can accept, decline, or sign from a scoped portal view.</strong>
              <span>Internal pricing, margin, and other vendors remain isolated.</span>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
