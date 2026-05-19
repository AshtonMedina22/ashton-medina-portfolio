"use client";

import {
  CLIENT_NAME,
  SALES_ORDER_ID,
  CLIENT_REVENUE_FORMATTED,
  ESTIMATED_COST_FORMATTED,
  ACTUAL_COST_FORMATTED,
  COST_VARIANCE_FORMATTED,
  MARGIN_FORMATTED,
  MARGIN_PCT_FORMATTED,
  VENDOR_BREAKDOWN,
  ATTRIBUTION_SPLITS,
} from "../projectData";
import styles from "./revenue-financial-demo.module.scss";

const VENDOR_ROWS = VENDOR_BREAKDOWN.map((row) => {
  const variance = row.actual - row.est;
  return {
    vendor: row.vendor,
    service: row.service,
    est: `$${row.est.toLocaleString()}`,
    actual: `$${row.actual.toLocaleString()}`,
    variance: variance >= 0 ? `+$${variance.toLocaleString()}` : `-$${Math.abs(variance).toLocaleString()}`,
    varianceColor: variance <= 0 ? "green" as const : "red" as const,
    status: row.vendor === "Vendor C" ? "In Progress" as const : "Completed" as const,
  };
});

// Compensation: attribution drives share; margin tier drives rate. Tier 5 = current project margin band.
const COMPENSATION_ROWS = ATTRIBUTION_SPLITS.map((row, i) => ({
  ...row,
  tier: i === 0 ? 5 : i === 1 ? 4 : 3,
  payout: i === 0 ? 744 : i === 1 ? 310 : 186,
}));

export function RevenueFinancialDemo() {
  return (
    <div className={styles.shell}>
      <div className={styles.shellTopBar}>
        <div className={styles.windowDots} aria-hidden>
          <span />
          <span />
          <span />
        </div>
        <span className={styles.shellTitle}>Financial Control & Governance</span>
      </div>
      <div className={styles.content}>
        {/* Top level = Sales Order (the project/deal). Vendor work orders are the table rows under it. */}
        <div className={styles.projectOverviewPanel}>
          <div className={styles.panelHeaderRow}>
            <div>
              <h1 className={styles.panelHeaderTitle}>Sales Order {SALES_ORDER_ID} - {CLIENT_NAME}</h1>
              <div className={styles.panelHeaderMeta}>
                Project financials
                <span className={styles.viewingAs}>Viewing as: Finance (full)</span>
              </div>
            </div>
            <div className={styles.recordStateBar}>
              <span className={styles.recordStateLabel}>Record state:</span>
              <span className={styles.recordStateValue}>Paid</span>
            </div>
          </div>
          <div className={styles.relatedButtons}>
            {[`Sales order (${CLIENT_REVENUE_FORMATTED})`, "Pipeline opportunity", "Vendor work orders (3)", `Invoices (${CLIENT_REVENUE_FORMATTED})`].map((label, i) => (
              <button
                key={label}
                type="button"
                className={i === 0 ? `${styles.relatedBtn} ${styles.relatedBtnActive}` : styles.relatedBtn}
              >
                {label}
              </button>
            ))}
          </div>
        </div>

        <div className={styles.mainGrid}>
          {/* Live margin: the numbers are the feature; no explanatory card title */}
          <div className={styles.sectionCard}>
            <div className={styles.marginStripHeader}>
              <span className={styles.marginStripTitle}>Margin</span>
              <span className={styles.liveBadge}>Live</span>
            </div>
            <div className={styles.metricGrid}>
              <div className={`${styles.metricCard} ${styles.metricRevenue}`}>
                <div className={styles.metricLabel}>Client Revenue</div>
                <div className={styles.metricValue}>{CLIENT_REVENUE_FORMATTED}</div>
              </div>
              <div className={`${styles.metricCard} ${styles.metricCost}`}>
                <div className={styles.metricLabel}>Estimated Cost</div>
                <div className={styles.metricValue}>{ESTIMATED_COST_FORMATTED}</div>
              </div>
              <div className={`${styles.metricCard} ${styles.metricCost}`}>
                <div className={styles.metricLabel}>Actual Cost</div>
                <div className={styles.metricValue}>{ACTUAL_COST_FORMATTED}</div>
              </div>
              <div className={`${styles.metricCard} ${styles.metricCost}`}>
                <div className={styles.metricLabel}>Cost Variance</div>
                <div className={styles.metricValue}>{COST_VARIANCE_FORMATTED}</div>
              </div>
              <div className={`${styles.metricCard} ${styles.metricCost}`}>
                <div className={styles.metricLabel}>Margin</div>
                <div className={styles.metricValue}>{MARGIN_FORMATTED}</div>
              </div>
              <div className={`${styles.metricCard} ${styles.metricCost}`}>
                <div className={styles.metricLabel}>Margin %</div>
                <div className={styles.metricValue}>{MARGIN_PCT_FORMATTED}</div>
              </div>
            </div>
          </div>

          {/* Vendor work orders under this sales order; overruns surface here and in margin above */}
          <div className={styles.sectionCard}>
            <h3 className={styles.sectionCardTitle}>Vendor work orders (this project)</h3>
            <table className={styles.table}>
              <thead>
                <tr>
                  <th>Vendor</th>
                  <th>Service</th>
                  <th className={styles.textRight}>Est.</th>
                  <th className={styles.textRight}>Actual</th>
                  <th className={styles.textRight}>Variance</th>
                  <th>Status</th>
                </tr>
              </thead>
              <tbody>
                {VENDOR_ROWS.map((row) => (
                  <tr key={row.vendor}>
                    <td>{row.vendor}</td>
                    <td>{row.service}</td>
                    <td className={styles.textRight}>{row.est}</td>
                    <td className={styles.textRight}>{row.actual}</td>
                    <td className={`${styles.textRight} ${row.varianceColor === "green" ? styles.varianceGreen : styles.varianceRed}`}>
                      {row.variance}
                    </td>
                    <td>
                      <span className={`${styles.statusPill} ${row.status === "Completed" ? styles.statusCompleted : styles.statusInProgress}`}>
                        {row.status}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Budget chain: pipeline -> quoted -> actual -> margin (connected records) */}
          <div className={styles.sectionCard}>
            <h3 className={styles.sectionCardTitle}>Budget to actual</h3>
            <div className={styles.budgetFlow}>
              <div className={styles.budgetChainBox}>
                <span className={styles.budgetValue}>$15,000</span>
                <span className={styles.budgetLabel}>Pipeline</span>
                <div className={styles.budgetMeta}>CRM</div>
              </div>
              <span className={styles.flowArrow} aria-hidden>{"->"}</span>
              <div className={styles.budgetChainBox}>
                <span className={styles.budgetValue}>{CLIENT_REVENUE_FORMATTED}</span>
                <span className={styles.budgetLabel}>Quoted</span>
                <div className={styles.budgetMeta}>Sales order</div>
              </div>
              <span className={styles.flowArrow} aria-hidden>{"->"}</span>
              <div className={styles.budgetChainBox}>
                <span className={styles.budgetValue}>{ACTUAL_COST_FORMATTED}</span>
                <span className={styles.budgetLabel}>Delivery cost</span>
                <div className={styles.budgetMeta}>Project actuals</div>
              </div>
              <span className={styles.flowArrow} aria-hidden>{"->"}</span>
              <div className={styles.budgetChainBox}>
                <span className={styles.budgetValue}>{MARGIN_FORMATTED}</span>
                <span className={styles.budgetLabel}>Margin</span>
                <div className={styles.budgetMeta}>{MARGIN_PCT_FORMATTED}</div>
              </div>
            </div>
          </div>

          {/* Payout gate: system status for this project, not a feature explanation */}
          <div className={styles.sectionCard}>
            <h3 className={styles.sectionCardTitle}>Payout</h3>
            <div className={styles.payoutStatus}>
              <span className={styles.payoutStatusValue}>Eligible</span>
            </div>
            <ul className={styles.eligibilityList}>
              <li><span className={styles.eligibilityCheck} aria-hidden>✓</span> Delivery confirmed</li>
              <li><span className={styles.eligibilityCheck} aria-hidden>✓</span> Customer invoices paid</li>
              <li><span className={styles.eligibilityCheck} aria-hidden>✓</span> Vendor bills paid</li>
              <li><span className={styles.eligibilityCheck} aria-hidden>✓</span> Margin threshold met</li>
            </ul>
          </div>

          {/* Pricing guardrails: config that would apply to quotes/lines */}
          <div className={styles.sectionCard}>
            <h3 className={styles.sectionCardTitle}>Guardrails</h3>
            <div className={styles.pricingGuardrailPanel}>
              <div className={styles.pricingDetail}>
                <div className={styles.pricingHeading}>Service Type A</div>
                <div className={styles.pricingValues}>
                  <span className={styles.pricingLabel}>Min</span>
                  <span className={styles.pricingValue}>$150/hr</span>
                  <span className={styles.pricingSeparator}>-</span>
                  <span className={styles.pricingLabel}>Max</span>
                  <span className={styles.pricingValue}>$250/hr</span>
                  <span className={styles.pricingStatusBadge}>In range</span>
                </div>
              </div>
              <div className={styles.pricingDetail}>
                <div className={styles.pricingHeading}>Line floor</div>
                <div className={styles.pricingFloorValue}>$200 min per line</div>
              </div>
            </div>
          </div>

          {/* Compensation: one table = attribution + tier rate = payout; draft POs monthly */}
          <div className={`${styles.sectionCard} ${styles.sectionCardFull}`}>
            <div className={styles.compensationHeader}>
              <h3 className={styles.sectionCardTitle}>Stakeholder payouts</h3>
              <span className={styles.draftPOBadge}>Draft PO: Dec 2026</span>
            </div>
            <table className={styles.table}>
              <thead>
                <tr>
                  <th>Role</th>
                  <th>Name</th>
                  <th className={styles.textRight}>Attribution %</th>
                  <th className={styles.textRight}>Tier</th>
                  <th className={styles.textRight}>Payout</th>
                </tr>
              </thead>
              <tbody>
                {COMPENSATION_ROWS.map((row) => (
                  <tr key={row.role}>
                    <td>{row.role}</td>
                    <td>{row.name}</td>
                    <td className={styles.textRight}>{row.splitPct}%</td>
                    <td className={styles.textRight}>{row.tier}</td>
                    <td className={styles.textRight}>${row.payout.toLocaleString()}</td>
                  </tr>
                ))}
              </tbody>
            </table>
            <p className={styles.tableFooterNote}>Rate by margin tier (7 tiers). Referral % declines by relationship start.</p>
          </div>
        </div>
      </div>
    </div>
  );
}
