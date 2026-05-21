"use client";

import {
  HiOutlineCheck,
  HiOutlineClipboardCheck,
  HiOutlineCurrencyDollar,
  HiOutlineDocumentText,
  HiOutlineLockClosed,
  HiOutlineOfficeBuilding,
  HiOutlineShieldCheck,
  HiOutlineTrendingUp,
} from "react-icons/hi";
import {
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

const financialSummary = [
  ["Pipeline value", "$15,000"],
  ["Contracted value", CLIENT_REVENUE_FORMATTED],
  ["Actual cost", ACTUAL_COST_FORMATTED],
  ["Margin", MARGIN_FORMATTED],
  ["Margin %", MARGIN_PCT_FORMATTED],
] as const;

const approvalItems = [
  "Delivery status confirmed",
  "Customer invoice paid",
  "Vendor bills matched",
  "Margin threshold passed",
] as const;

const closeoutSteps = [
  [HiOutlineDocumentText, "Invoice paid", "INV-2301", "Paid"],
  [HiOutlineClipboardCheck, "Vendor bills matched", "3 of 3", "Matched"],
  [HiOutlineTrendingUp, "Margin threshold met", MARGIN_PCT_FORMATTED, "Passed"],
  [HiOutlineCheck, "Closeout eligible", "Ready for approval", "Current"],
  [HiOutlineLockClosed, "Closeout approved", "Awaiting authorization", "Locked"],
] as const;

export function RevenueFinancialDemo() {
  return (
    <div className={styles.financeShell}>
      <div className={styles.financeStatusStrip}>
        <span>{SALES_ORDER_ID}</span>
        <strong>Paid</strong>
        <strong>Closeout view</strong>
        <strong>Margin protected</strong>
      </div>

      <div className={styles.financeLayout}>
        <section className={styles.financeMainPanel} aria-label="Project-level financial governance">
          <div className={styles.financeHeader}>
            <div>
              <p>Project-level financial governance</p>
              <h2>Closeout is gated by invoice, bill, payment, and margin logic</h2>
            </div>
            <span>Finance controlled <HiOutlineLockClosed /></span>
          </div>

          <div className={styles.financeMainGrid}>
            <div className={styles.marginCard}>
              <span>Protected margin</span>
              <strong>{MARGIN_PCT_FORMATTED}</strong>
              <div className={styles.marginTrend} aria-hidden>
                <i style={{ inlineSize: "12%" }} />
                <i style={{ inlineSize: "26%" }} />
                <i style={{ inlineSize: "38%" }} />
                <i style={{ inlineSize: "34%" }} />
                <i style={{ inlineSize: "51%" }} />
                <i style={{ inlineSize: "48%" }} />
                <i style={{ inlineSize: "63%" }} />
                <i style={{ inlineSize: "78%" }} />
              </div>
              <small>{MARGIN_FORMATTED} retained after vendor bills are reconciled</small>
              <em><HiOutlineShieldCheck />Margin threshold enforced | Closeout approval required</em>
            </div>

            <div className={styles.financeMetricCards}>
              <div><span>Revenue</span><strong>{CLIENT_REVENUE_FORMATTED}</strong></div>
              <div><span>Actual cost</span><strong>{ACTUAL_COST_FORMATTED}</strong></div>
              <div><span>Cost variance</span><strong>{COST_VARIANCE_FORMATTED}</strong></div>
            </div>

            <div className={styles.financialSummaryTable}>
              <div className={styles.summaryHead}>
                <span>Financial summary</span>
                <span>Amount</span>
              </div>
              {financialSummary.map(([label, value]) => (
                <div key={label}>
                  <span>{label}</span>
                  <strong>{value}</strong>
                </div>
              ))}
            </div>
          </div>
        </section>

        <aside className={styles.financeSideRail}>
          <section className={styles.reconciliationPanel}>
            <div className={styles.sideHeader}>
              <HiOutlineOfficeBuilding />
              <span>Vendor cost reconciliation</span>
            </div>
            {varianceRows.map((row) => (
              <div className={styles.vendorVarianceRow} key={row.vendor}>
                <HiOutlineOfficeBuilding />
                <span>
                  <strong>{row.vendor}</strong>
                  <em>{row.service} - actual {row.actual}</em>
                </span>
                <b className={row.favorable ? styles.varianceGood : styles.varianceRisk}>
                  {row.variance}
                </b>
              </div>
            ))}
          </section>

          <section className={styles.approvalPanel}>
            <div className={styles.sideHeader}>
              <HiOutlineShieldCheck />
              <span>Closeout approval logic</span>
            </div>
            <div className={styles.eligibleState}>
              <strong>Eligible</strong>
              <HiOutlineCheck />
            </div>
            <ul>
              {approvalItems.map((item) => (
                <li key={item}>
                  <HiOutlineCheck />
                  {item}
                </li>
              ))}
            </ul>
          </section>
        </aside>
      </div>

      <div className={styles.closeoutFlow}>
        {closeoutSteps.map(([Icon, title, detail, state], index) => (
          <div key={title} className={state === "Current" ? styles.currentStep : state === "Locked" ? styles.lockedStep : undefined}>
            <Icon />
            <span>
              <strong>{title}</strong>
              <em>{detail}</em>
            </span>
            <b>{state}</b>
            {index < closeoutSteps.length - 1 && <i aria-hidden />}
          </div>
        ))}
      </div>
    </div>
  );
}
