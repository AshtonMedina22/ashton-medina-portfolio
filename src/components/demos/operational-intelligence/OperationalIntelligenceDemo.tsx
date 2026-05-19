"use client";

import { CLIENT_NAME, SALES_ORDER_ID, CLIENT_REVENUE_FORMATTED } from "../projectData";
import styles from "./operational-intelligence-demo.module.scss";

const KPI_CARDS = [
  ["Engagements", "8"],
  ["Active projects", "14"],
  ["Expected revenue", "$84.2K"],
  ["Overdue tasks", "3"],
];

const ENGAGEMENTS = [
  [SALES_ORDER_ID, CLIENT_NAME, "Confirmed", CLIENT_REVENUE_FORMATTED],
  ["SO-0887", "Acme Inc", "Proposal", "$8,200"],
  ["SO-0875", "Winter Foundation", "Proposal", "$22,000"],
];

export function OperationalIntelligenceDemo() {
  return (
    <div className={styles.shell}>
      <div className={styles.chrome}>
        <span>Operational Intelligence</span>
        <span>Executive operations preview</span>
      </div>

      <div className={styles.statusStrip}>
        <span>Live operations</span>
        <span>This month</span>
        <strong>Auto-report enabled</strong>
        <span>Export ready</span>
      </div>

      <div className={styles.layout}>
        <section className={styles.hero} aria-label="Executive operational insight">
          <div>
            <span className={styles.eyebrow}>Executive snapshot</span>
            <h2>Live delivery pipeline</h2>
            <p>Leadership sees revenue, engagement load, and delivery risk from one current operational view.</p>
          </div>

          <div className={styles.chartPanel}>
            <div className={styles.chartGrid} aria-hidden>
              <span />
              <span />
              <span />
              <span />
              <span />
            </div>
            <div className={styles.chartCallout}>
              <strong>$84.2K</strong>
              <span>expected revenue this month</span>
            </div>
          </div>
        </section>

        <aside className={styles.supportStack}>
          <section className={styles.kpiStack}>
            {KPI_CARDS.map(([label, value]) => (
              <div key={label} className={styles.kpiCard}>
                <span>{label}</span>
                <strong>{value}</strong>
              </div>
            ))}
          </section>

          <section className={styles.supportCard}>
            <div className={styles.cardHeader}>
              <span>Engagement preview</span>
              <strong>3 rows</strong>
            </div>
            <div className={styles.previewRows}>
              {ENGAGEMENTS.map(([id, client, status, revenue]) => (
                <div key={id} className={styles.previewRow}>
                  <span>{id}</span>
                  <span>{client}</span>
                  <strong>{status}</strong>
                  <span>{revenue}</span>
                </div>
              ))}
            </div>
          </section>
        </aside>
      </div>
    </div>
  );
}
