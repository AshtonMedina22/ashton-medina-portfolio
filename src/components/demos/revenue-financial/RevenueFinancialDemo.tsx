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

const varianceRows = VENDOR_BREAKDOWN.map((row) => {
  const variance = row.actual - row.est;
  return {
    vendor: row.vendor,
    service: row.service,
    actual: `$${row.actual.toLocaleString()}`,
    variance: variance >= 0 ? `+$${variance.toLocaleString()}` : `-$${Math.abs(variance).toLocaleString()}`,
    favorable: variance <= 0,
  };
});

const eligibilityItems = [
  "Delivery status confirmed",
  "Customer invoice paid",
  "Vendor bills matched",
  "Margin threshold passed",
];

export function RevenueFinancialDemo() {
  return (
    <div className={styles.financeShell}>
      <div className={styles.shellTopBar}>
        <div className={styles.windowDots} aria-hidden>
          <span />
          <span />
          <span />
        </div>
        <span className={styles.shellTitle}>Revenue Financial Control Engine</span>
      </div>

      <div className={styles.financeStatusStrip}>
        <span>{SALES_ORDER_ID}</span>
        <strong>Paid</strong>
        <span>Closeout view</span>
        <strong>Margin protected</strong>
      </div>

      <div className={styles.financeComposition}>
        <section className={styles.marginHero} aria-label="Live margin governance">
          <div className={styles.marginHeroHeader}>
            <div>
              <p>Project-level financial governance</p>
              <h2>Closeout is gated by invoice, bill, payment, and margin logic</h2>
            </div>
            <span>Finance controlled</span>
          </div>

          <div className={styles.marginHeroGrid}>
            <div className={styles.marginPrimaryPanel}>
              <span>Protected margin</span>
              <strong>{MARGIN_PCT_FORMATTED}</strong>
              <small>{MARGIN_FORMATTED} retained after vendor bills are reconciled</small>
            </div>

            <div className={styles.financeMetricGrid}>
              <div>
                <span>Revenue</span>
                <strong>{CLIENT_REVENUE_FORMATTED}</strong>
              </div>
              <div>
                <span>Actual cost</span>
                <strong>{ACTUAL_COST_FORMATTED}</strong>
              </div>
              <div>
                <span>Cost variance</span>
                <strong>{COST_VARIANCE_FORMATTED}</strong>
              </div>
            </div>

            <div className={styles.budgetActualChain}>
              <div>
                <span>Pipeline value</span>
                <strong>$15,000</strong>
              </div>
              <i aria-hidden />
              <div>
                <span>Contracted</span>
                <strong>{CLIENT_REVENUE_FORMATTED}</strong>
              </div>
              <i aria-hidden />
              <div>
                <span>Actual cost</span>
                <strong>{ACTUAL_COST_FORMATTED}</strong>
              </div>
              <i aria-hidden />
              <div>
                <span>Margin</span>
                <strong>{MARGIN_FORMATTED}</strong>
              </div>
            </div>
          </div>
        </section>

        <aside className={styles.financeSupportRail} aria-label="Variance and payout controls">
          <section className={styles.supportModule}>
            <div className={styles.moduleEyebrow}>Vendor cost reconciliation</div>
            <div className={styles.variancePreviewList}>
              {varianceRows.map((row) => (
                <div key={row.vendor}>
                  <span>{row.vendor}</span>
                  <small>{row.service} · actual {row.actual}</small>
                  <strong className={row.favorable ? styles.varianceGood : styles.varianceRisk}>
                    {row.variance}
                  </strong>
                </div>
              ))}
            </div>
          </section>

          <section className={styles.supportModule}>
            <div className={styles.moduleEyebrow}>Closeout approval logic</div>
            <div className={styles.payoutState}>Eligible</div>
            <ul className={styles.eligibilityPreviewList}>
              {eligibilityItems.map((item) => (
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
