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
    <div className={styles.demo}>
      {/* Project Header */}
      <div className={styles.section}>
        <div style={{ marginBottom: "0.75rem" }}>
          <h1 style={{ fontSize: "1.25rem", fontWeight: 700, color: "#f5f3ff", margin: "0 0 0.25rem 0" }}>
            ENG-2024-0842 — TechCorp
          </h1>
          <div style={{ fontSize: "0.875rem", color: "#a1a1aa" }}>
            Client: TechCorp
            <span
              style={{
                marginLeft: "0.75rem",
                padding: "0.2rem 0.5rem",
                borderRadius: "0.25rem",
                backgroundColor: "#a78bfa30",
                color: "#a78bfa",
                fontWeight: 500,
              }}
            >
              Type A
            </span>
          </div>
        </div>
        <div style={{ display: "flex", flexWrap: "wrap", gap: "0.5rem" }}>
          {["Sales Order ($12,400)", "Pipeline Opportunity", "4 Vendor Assignments", "2 Invoices ($12,400)"].map((label) => (
            <button
              key={label}
              type="button"
              style={{
                padding: "0.4rem 0.75rem",
                fontSize: "0.8125rem",
                fontWeight: 500,
                color: "#a78bfa",
                backgroundColor: "#a78bfa15",
                border: "1px solid #a78bfa30",
                borderRadius: "0.375rem",
                cursor: "pointer",
              }}
            >
              {label}
            </button>
          ))}
        </div>
      </div>

      {/* Section 1 - Financial Summary */}
      <div className={styles.section}>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(140px, 1fr))",
            gap: "1rem",
          }}
        >
          {METRIC_CARDS.map((card) => {
            const stylesByVariant: Record<string, { bg: string; border: string; color: string }> = {
              revenue: { bg: "#22d3ee15", border: "#22d3ee30", color: "#22d3ee" },
              cost: { bg: "#fbbf2415", border: "#fbbf2430", color: "#fbbf24" },
              green: { bg: "#10b98115", border: "#10b98130", color: "#10b981" },
              margin: { bg: "#10b98115", border: "#10b98130", color: "#10b981" },
              marginPct: { bg: "#10b98115", border: "#10b98130", color: "#10b981" },
              default: { bg: "#27272a", border: "#3f3f46", color: "#fafafa" },
            };
            const s = stylesByVariant[card.variant] ?? stylesByVariant.default;
            return (
              <div
                key={card.label}
                style={{
                  padding: "1rem",
                  backgroundColor: s.bg,
                  border: `1px solid ${s.border}`,
                  borderRadius: "0.375rem",
                }}
              >
                <div style={{ fontSize: "0.75rem", color: "#a1a1aa", marginBottom: "0.35rem" }}>
                  {card.label}
                </div>
                <div
                  style={{
                    fontSize: "1.125rem",
                    fontWeight: 700,
                    color: s.color,
                  }}
                >
                  {card.value}
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Section 2 - Vendor Assignment Cost Breakdown */}
      <div className={styles.section}>
        <h3 style={{ fontSize: "0.9375rem", fontWeight: 600, color: "#f5f3ff", margin: "0 0 1rem 0" }}>
          Vendor Assignment Cost Breakdown
        </h3>
        <table style={{ width: "100%", borderCollapse: "collapse", fontSize: "0.875rem" }}>
          <thead>
            <tr style={{ borderBottom: "1px solid #2e1064" }}>
              <th style={{ textAlign: "left", padding: "0.5rem 0.75rem", fontWeight: 600, color: "#71717a", fontSize: "0.6875rem", textTransform: "uppercase", letterSpacing: "0.06em" }}>Vendor</th>
              <th style={{ textAlign: "left", padding: "0.5rem 0.75rem", fontWeight: 600, color: "#71717a", fontSize: "0.6875rem", textTransform: "uppercase", letterSpacing: "0.06em" }}>Service</th>
              <th style={{ textAlign: "right", padding: "0.5rem 0.75rem", fontWeight: 600, color: "#71717a", fontSize: "0.6875rem", textTransform: "uppercase", letterSpacing: "0.06em" }}>Est. Cost</th>
              <th style={{ textAlign: "right", padding: "0.5rem 0.75rem", fontWeight: 600, color: "#71717a", fontSize: "0.6875rem", textTransform: "uppercase", letterSpacing: "0.06em" }}>Actual Cost</th>
              <th style={{ textAlign: "right", padding: "0.5rem 0.75rem", fontWeight: 600, color: "#71717a", fontSize: "0.6875rem", textTransform: "uppercase", letterSpacing: "0.06em" }}>Variance</th>
              <th style={{ textAlign: "left", padding: "0.5rem 0.75rem", fontWeight: 600, color: "#71717a", fontSize: "0.6875rem", textTransform: "uppercase", letterSpacing: "0.06em" }}>Status</th>
            </tr>
          </thead>
          <tbody>
            {VENDOR_ROWS.map((row) => (
              <tr key={row.vendor} style={{ borderBottom: "1px solid #27272a" }}>
                <td style={{ padding: "0.5rem 0.75rem", color: "#fafafa" }}>{row.vendor}</td>
                <td style={{ padding: "0.5rem 0.75rem", color: "#fafafa" }}>{row.service}</td>
                <td style={{ padding: "0.5rem 0.75rem", textAlign: "right", color: "#fafafa" }}>{row.est}</td>
                <td style={{ padding: "0.5rem 0.75rem", textAlign: "right", color: "#fafafa" }}>{row.actual}</td>
                <td
                  style={{
                    padding: "0.5rem 0.75rem",
                    textAlign: "right",
                    fontWeight: 600,
                    color: row.varianceColor === "green" ? "#10b981" : "#dc2626",
                  }}
                >
                  {row.variance}
                </td>
                <td style={{ padding: "0.5rem 0.75rem" }}>
                  <span
                    style={{
                      padding: "0.2rem 0.5rem",
                      borderRadius: "0.25rem",
                      fontSize: "0.75rem",
                      fontWeight: 500,
                      backgroundColor: row.status === "Completed" ? "#10b98115" : "#a78bfa15",
                      color: row.status === "Completed" ? "#10b981" : "#a78bfa",
                    }}
                  >
                    {row.status}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Section 3 - Budget-to-Actual Chain — prominent visual */}
      <div className={styles.section}>
        <h3 style={{ fontSize: "0.9375rem", fontWeight: 600, color: "#f5f3ff", margin: "0 0 1rem 0" }}>
          Budget-to-Actual Chain
        </h3>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            flexWrap: "wrap",
            gap: "1.25rem",
            marginBottom: "1rem",
          }}
        >
          <div
            style={{
              padding: "1.25rem 1.5rem",
              backgroundColor: "#a78bfa15",
              border: "2px solid #a78bfa30",
              borderRadius: "0.5rem",
              fontWeight: 700,
              color: "#a78bfa",
              fontSize: "1rem",
              minWidth: 160,
            }}
          >
            Pipeline Budget: $15,000
            <div style={{ fontSize: "0.75rem", fontWeight: 500, color: "#a78bfa", marginTop: "0.25rem" }}>from CRM</div>
          </div>
          <span style={{ fontSize: "1.5rem", color: "#a78bfa", fontWeight: 700 }}>→</span>
          <div
            style={{
              padding: "1.25rem 1.5rem",
              backgroundColor: "#fbbf2415",
              border: "2px solid #fbbf2430",
              borderRadius: "0.5rem",
              fontWeight: 700,
              color: "#fbbf24",
              fontSize: "1rem",
              minWidth: 160,
            }}
          >
            Quoted: $12,400
            <div style={{ fontSize: "0.75rem", fontWeight: 500, color: "#fbbf24", marginTop: "0.25rem" }}>from Sales Order</div>
          </div>
          <span style={{ fontSize: "1.5rem", color: "#a78bfa", fontWeight: 700 }}>→</span>
          <div
            style={{
              padding: "1.25rem 1.5rem",
              backgroundColor: "#10b98115",
              border: "2px solid #10b98130",
              borderRadius: "0.5rem",
              fontWeight: 700,
              color: "#10b981",
              fontSize: "1rem",
              minWidth: 160,
            }}
          >
            Delivery Cost: $5,800
            <div style={{ fontSize: "0.75rem", fontWeight: 500, color: "#10b981", marginTop: "0.25rem" }}>from Project Actuals</div>
          </div>
        </div>
        <div style={{ fontSize: "1rem", fontWeight: 700, color: "#10b981", padding: "0.75rem", backgroundColor: "#10b98115", border: "1px solid #10b98130", borderRadius: "0.375rem", display: "inline-block" }}>
          Margin Captured: $6,600 (53.2%)
        </div>
      </div>

      {/* Pricing guardrail — min/max bands */}
      <div className={styles.section}>
        <h3 style={{ fontSize: "0.9375rem", fontWeight: 600, color: "#f5f3ff", margin: "0 0 0.75rem 0" }}>
          Pricing Guardrails
        </h3>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "1rem",
            padding: "1rem",
            backgroundColor: "#10b98115",
            border: "1px solid #10b98130",
            borderRadius: "0.5rem",
            fontSize: "0.875rem",
          }}
        >
          <div style={{ flex: 1 }}>
            <div style={{ fontWeight: 600, color: "#10b981", marginBottom: "0.25rem" }}>Service Type A</div>
            <div style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
              <span style={{ color: "#a1a1aa" }}>Min:</span>
              <span style={{ fontWeight: 500, color: "#fafafa" }}>$150/hr</span>
              <span style={{ color: "#52525b" }}>–</span>
              <span style={{ color: "#a1a1aa" }}>Max:</span>
              <span style={{ fontWeight: 500, color: "#fafafa" }}>$250/hr</span>
              <span style={{ marginLeft: "0.5rem", padding: "0.1rem 0.35rem", backgroundColor: "#10b98130", color: "#10b981", borderRadius: "0.25rem", fontSize: "0.75rem", fontWeight: 600 }}>In range</span>
            </div>
          </div>
          <div style={{ flex: 1 }}>
            <div style={{ fontWeight: 600, color: "#10b981", marginBottom: "0.25rem" }}>Line Item Floor</div>
            <div style={{ color: "#a1a1aa" }}>Minimum $200 per line enforced</div>
          </div>
        </div>
      </div>

      {/* Section 4 - Revenue Attribution */}
      <div className={styles.section}>
        <h3 style={{ fontSize: "0.9375rem", fontWeight: 600, color: "#f5f3ff", margin: "0 0 1rem 0" }}>
          Revenue Attribution
        </h3>
        <table style={{ width: "100%", borderCollapse: "collapse", fontSize: "0.875rem" }}>
          <thead>
            <tr style={{ borderBottom: "1px solid #2e1064" }}>
              <th style={{ textAlign: "left", padding: "0.5rem 0.75rem", fontWeight: 600, color: "#71717a", fontSize: "0.6875rem", textTransform: "uppercase", letterSpacing: "0.06em" }}>Role</th>
              <th style={{ textAlign: "left", padding: "0.5rem 0.75rem", fontWeight: 600, color: "#71717a", fontSize: "0.6875rem", textTransform: "uppercase", letterSpacing: "0.06em" }}>Name</th>
              <th style={{ textAlign: "right", padding: "0.5rem 0.75rem", fontWeight: 600, color: "#71717a", fontSize: "0.6875rem", textTransform: "uppercase", letterSpacing: "0.06em" }}>Split %</th>
              <th style={{ textAlign: "right", padding: "0.5rem 0.75rem", fontWeight: 600, color: "#71717a", fontSize: "0.6875rem", textTransform: "uppercase", letterSpacing: "0.06em" }}>Attributed Revenue</th>
            </tr>
          </thead>
          <tbody>
            {REVENUE_ROWS.map((row) => (
              <tr key={row.role} style={{ borderBottom: "1px solid #27272a" }}>
                <td style={{ padding: "0.5rem 0.75rem", color: "#fafafa" }}>{row.role}</td>
                <td style={{ padding: "0.5rem 0.75rem", color: "#fafafa" }}>{row.name}</td>
                <td style={{ padding: "0.5rem 0.75rem", textAlign: "right", color: "#fafafa" }}>{row.split}</td>
                <td style={{ padding: "0.5rem 0.75rem", textAlign: "right", fontWeight: 500, color: "#fafafa" }}>{row.revenue}</td>
              </tr>
            ))}
          </tbody>
        </table>
        <p style={{ fontSize: "0.75rem", color: "#a1a1aa", margin: "0.75rem 0 0 0" }}>
          Referral tier: Year 1 (50% → 25% Year 2)
        </p>
      </div>
    </div>
  );
}
