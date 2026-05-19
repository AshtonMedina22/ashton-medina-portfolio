"use client";

import {
  CLIENT_NAME,
  SALES_ORDER_ID,
  CLIENT_REVENUE_FORMATTED,
  MARGIN_FORMATTED,
} from "../projectData";
import styles from "./sales-to-delivery-demo.module.scss";

const TASKS = [
  ["Service A setup", "Ready"],
  ["Service B configuration", "Queued"],
  ["Pre-delivery checklist", "Complete"],
];

const SYNCED_FIELDS = [
  ["Client", CLIENT_NAME],
  ["Revenue", CLIENT_REVENUE_FORMATTED],
  ["Margin", MARGIN_FORMATTED],
];

export function SalesToDeliveryDemo() {
  return (
    <div className={styles.shell}>
      <div className={styles.chrome}>
        <span>Sales-to-Delivery Automation</span>
        <span>Enterprise workflow preview</span>
      </div>

      <div className={styles.statusStrip}>
        <span>{SALES_ORDER_ID}</span>
        <span>{CLIENT_NAME}</span>
        <strong>Confirmed</strong>
        <strong>Project auto-generated</strong>
      </div>

      <div className={styles.layout}>
        <section className={styles.hero} aria-label="Confirmed order creates generated project">
          <div className={styles.heroPanel}>
            <span className={styles.eyebrow}>Confirmed sales order</span>
            <h2>{SALES_ORDER_ID}</h2>
            <p>{CLIENT_NAME}</p>
            <div className={styles.compactMeta}>
              <span>3 service lines</span>
              <span>{CLIENT_REVENUE_FORMATTED}</span>
              <span>Booked</span>
            </div>
          </div>

          <div className={styles.connector} aria-hidden>
            <span>→</span>
            <small>creates</small>
          </div>

          <div className={styles.heroPanelStrong}>
            <span className={styles.eyebrow}>Generated project</span>
            <h2>Delivery ready</h2>
            <p>Tasks, client context, and financial metadata inherit from the sale.</p>
            <div className={styles.successLine}>No manual re-entry required</div>
          </div>
        </section>

        <aside className={styles.supportStack}>
          <section className={styles.supportCard}>
            <div className={styles.cardHeader}>
              <span>Generated tasks</span>
              <strong>3 preview</strong>
            </div>
            <div className={styles.previewRows}>
              {TASKS.map(([task, state]) => (
                <div key={task} className={styles.previewRow}>
                  <span>{task}</span>
                  <strong>{state}</strong>
                </div>
              ))}
            </div>
          </section>

          <section className={styles.supportCard}>
            <div className={styles.cardHeader}>
              <span>Synced metadata</span>
              <strong>Live link</strong>
            </div>
            <div className={styles.metaGrid}>
              {SYNCED_FIELDS.map(([label, value]) => (
                <div key={label}>
                  <span>{label}</span>
                  <strong>{value}</strong>
                </div>
              ))}
            </div>
          </section>
        </aside>
      </div>
    </div>
  );
}
