"use client";

import styles from "./revenue-financial-demo.module.scss";

const METRIC_CARDS = [
  { label: "Client Revenue", value: "$12,400", variant: "revenue" as const },
  { label: "Estimated Cost", value: "$6,200", variant: "cost" as const },
  { label: "Actual Cost", value: "$5,800", variant: "cost" as const },
  { label: "Cost Variance", value: "-$400", variant: "green" as const },
  { label: "Margin", value: "$6,600", variant: "margin" as const },
  { label: "Margin %", value: "53.2%", variant: "marginPct" as const },
];

const VENDOR_ROWS = [
  { vendor: "Vendor A", service: "Service Type A", est: "$3,000", actual: "$2,800", variance: "-$200", varianceColor: "green", status: "Completed" },
  { vendor: "Vendor B", service: "Service Type B", est: "$2,000", actual: "$2,100", variance: "+$100", varianceColor: "red", status: "Completed" },
  { vendor: "Vendor C", service: "Service Type C", est: "$1,200", actual: "$900", variance: "-$300", varianceColor: "green", status: "In Progress" },
];

const REVENUE_ROWS = [
  { role: "Primary Rep", name: "Sarah M.", split: "60%", revenue: "$7,440" },
  { role: "Secondary Rep", name: "James K.", split: "25%", revenue: "$3,100" },
  { role: "Referral Partner", name: "Outside Vendor Co.", split: "15%", revenue: "$1,860" },
];

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
      <div className={styles.demoContent}>
        {/* Project overview card */}
        <div className={styles.projectOverviewPanel}>
          <div className={styles.panelHeaderWrap}>
            <h1 className={styles.panelHeaderTitle}>ENG-2024-0842 — TechCorp</h1>
            <div className={styles.panelHeaderMeta}>
              Client: TechCorp
              <span className={styles.projectTypeBadge}>Type A</span>
            </div>
          </div>
          <div className={styles.relatedButtons}>
            {["Sales Order ($12,400)", "Pipeline Opportunity", "4 Vendor Assignments", "2 Invoices ($12,400)"].map((label) => (
              <button key={label} type="button" className={styles.relatedBtn}>
                {label}
              </button>
            ))}
          </div>
        </div>

        {/* Section 1 - Financial Summary */}
        <div className={styles.sectionCard}>
          <h3 className={styles.sectionCardTitle}>Financial Summary</h3>
          <div className={styles.metricGrid}>
            {METRIC_CARDS.map((card) => (
              <div key={card.label} className={`${styles.metricCard} ${(styles as Record<string, string>)[`metric${card.variant.charAt(0).toUpperCase() + card.variant.slice(1)}`]}`}>
                <div className={styles.metricLabel}>{card.label}</div>
                <div className={styles.metricValue}>{card.value}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Section 2 - Vendor Assignment Cost Breakdown */}
        <div className={styles.sectionCard}>
          <h3 className={styles.sectionCardTitle}>Vendor Assignment Cost Breakdown</h3>
          <table className={styles.table}>
            <thead>
              <tr>
                <th>Vendor</th>
                <th>Service</th>
                <th className={styles.textRight}>Est. Cost</th>
                <th className={styles.textRight}>Actual Cost</th>
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

        {/* Section 3 - Budget-to-Actual Chain */}
        <div className={styles.sectionCard}>
          <h3 className={styles.sectionCardTitle}>Budget-to-Actual Chain</h3>
          <div className={styles.budgetFlow}>
            <div className={styles.budgetPipeline}>
              Pipeline Budget: $15,000
              <div className={`${styles.budgetMeta} ${styles.budgetMetaBlue}`}>from CRM</div>
            </div>
            <span className={styles.flowArrow}>→</span>
            <div className={styles.budgetQuoted}>
              Quoted: $12,400
              <div className={`${styles.budgetMeta} ${styles.budgetMetaYellow}`}>from Sales Order</div>
            </div>
            <span className={styles.flowArrow}>→</span>
            <div className={styles.budgetActual}>
              Delivery Cost: $5,800
              <div className={`${styles.budgetMeta} ${styles.budgetMetaGreen}`}>from Project Actuals</div>
            </div>
          </div>
          <div className={styles.marginCapturedPill}>
            Margin Captured: $6,600 (53.2%)
          </div>
        </div>

        {/* Pricing guardrail */}
        <div className={styles.sectionCard}>
          <h3 className={styles.sectionCardTitle}>Pricing Guardrails</h3>
          <div className={styles.pricingGuardrailPanel}>
            <div className={styles.pricingDetail}>
              <div className={styles.pricingHeading}>Service Type A</div>
              <div className={styles.pricingValues}>
                <span className={styles.pricingLabel}>Min:</span>
                <span className={styles.pricingValue}>$150/hr</span>
                <span className={styles.pricingSeparator}>–</span>
                <span className={styles.pricingLabel}>Max:</span>
                <span className={styles.pricingValue}>$250/hr</span>
                <span className={styles.pricingStatusBadge}>In range</span>
              </div>
            </div>
            <div className={styles.pricingDetail}>
              <div className={styles.pricingHeading}>Line Item Floor</div>
              <div className={styles.pricingLabel}>Minimum $200 per line enforced</div>
            </div>
          </div>
        </div>

        {/* Section 4 - Revenue Attribution */}
        <div className={styles.sectionCard}>
          <h3 className={styles.sectionCardTitle}>Revenue Attribution</h3>
          <table className={styles.table}>
            <thead>
              <tr>
                <th>Role</th>
                <th>Name</th>
                <th className={styles.textRight}>Split %</th>
                <th className={styles.textRight}>Attributed Revenue</th>
              </tr>
            </thead>
            <tbody>
              {REVENUE_ROWS.map((row) => (
                <tr key={row.role}>
                  <td>{row.role}</td>
                  <td>{row.name}</td>
                  <td className={styles.textRight}>{row.split}</td>
                  <td className={styles.textRight}>{row.revenue}</td>
                </tr>
              ))}
            </tbody>
          </table>
          <p className={styles.tableFooterNote}>
            Referral tier: Year 1 (50% → 25% Year 2)
          </p>
        </div>
      </div>
    </div>
  );
}
