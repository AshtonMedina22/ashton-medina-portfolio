"use client";

import {
  CLIENT_NAME,
  SALES_ORDER_ID,
  CLIENT_REVENUE_FORMATTED,
  ACTUAL_COST_FORMATTED,
  COST_VARIANCE_FORMATTED,
  MARGIN_FORMATTED,
  MARGIN_PCT_FORMATTED,
  VENDOR_BREAKDOWN,
} from "../projectData";
import styles from "./revenue-financial-demo.module.scss";

const VARIANCE_ROWS = VENDOR_BREAKDOWN.map((row) => {
  const variance = row.actual - row.est;
  return {
    vendor: row.vendor,
    actual: `$${row.actual.toLocaleString()}`,
    variance: variance >= 0 ? `+$${variance.toLocaleString()}` : `-$${Math.abs(variance).toLocaleString()}`,
    positive: variance <= 0,
  };
});

const ELIGIBILITY = [
  "Delivery confirmed",
  "Customer invoices paid",
  "Vendor bills paid",
  "Margin threshold met",
];

export function RevenueFinancialDemo() {
  return (
    <div className={styles.shell}>
      <div className={styles.chrome}>
        <span>Financial Control & Governance</span>
        <span>Margin protection preview</span>
      </div>

      <div className={styles.statusStrip}>
        <span>{SALES_ORDER_ID}</span>
        <span>Paid</span>
        <span>Finance view</span>
        <strong>Margin protected</strong>
      </div>

      <div className={styles.layout}>
        <section className={styles.hero} aria-label="Live margin governance">
          <div>
            <span className={styles.eyebrow}>Live margin governance</span>
            <h2>{MARGIN_PCT_FORMATTED}</h2>
            <p>
              {CLIENT_NAME} is cleared through governed revenue, cost, variance, and payout checks before money moves.
            </p>
          </div>

          <div className={styles.metricGrid}>
            <div>
              <span>Revenue</span>
              <strong>{CLIENT_REVENUE_FORMATTED}</strong>
            </div>
            <div>
              <span>Actual cost</span>
              <strong>{ACTUAL_COST_FORMATTED}</strong>
            </div>
            <div>
              <span>Margin</span>
              <strong>{MARGIN_FORMATTED}</strong>
            </div>
            <div>
              <span>Variance</span>
              <strong>{COST_VARIANCE_FORMATTED}</strong>
            </div>
          </div>

          <div className={styles.chain}>
            <span>Pipeline $15K</span>
            <span>Quoted {CLIENT_REVENUE_FORMATTED}</span>
            <span>Actual {ACTUAL_COST_FORMATTED}</span>
            <strong>Protected {MARGIN_FORMATTED}</strong>
          </div>
        </section>

        <aside className={styles.supportStack}>
          <section className={styles.supportCard}>
            <div className={styles.cardHeader}>
              <span>Variance preview</span>
              <strong>3 vendors</strong>
            </div>
            <div className={styles.previewRows}>
              {VARIANCE_ROWS.map((row) => (
                <div key={row.vendor} className={styles.previewRow}>
                  <span>{row.vendor}</span>
                  <span>{row.actual}</span>
                  <strong className={row.positive ? styles.good : styles.risk}>{row.variance}</strong>
                </div>
              ))}
            </div>
          </section>

          <section className={styles.supportCard}>
            <div className={styles.cardHeader}>
              <span>Payout eligibility</span>
              <strong>Eligible</strong>
            </div>
            <ul className={styles.checkList}>
              {ELIGIBILITY.map((item) => (
                <li key={item}>
                  <span aria-hidden>✓</span>
                  {item}
                </li>
              ))}
            </ul>
          </section>
        </aside>
      </div>
    </div>
  );
}
