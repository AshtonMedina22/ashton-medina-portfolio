"use client";

import { CLIENT_NAME, SALES_ORDER_ID, CLIENT_REVENUE_FORMATTED } from "../projectData";
import styles from "./operational-intelligence-demo.module.scss";

const ENGAGEMENT_ROWS = [
  {
    id: SALES_ORDER_ID,
    client: CLIENT_NAME,
    owner: "Sarah M.",
    status: "Confirmed",
    revenue: CLIENT_REVENUE_FORMATTED,
  },
  {
    id: "SO-0887",
    client: "Acme Inc",
    owner: "James K.",
    status: "Proposal sent",
    revenue: "$8,200",
  },
  {
    id: "SO-0882",
    client: "Acme Corp",
    owner: "Sarah M.",
    status: "Contract sent",
    revenue: "$15,000",
  },
] as const;

const WORKLOAD_ROWS = [
  { area: "Delivery workload", source: "Projects + Tasks", state: "3 overdue tasks surfaced" },
  { area: "Sales pipeline", source: "CRM + Sales Orders", state: "Confirmed and proposal records grouped" },
  { area: "Financial visibility", source: "Invoices + Payments", state: "Billing status available for review" },
  { area: "Engagement activity", source: "Calendar + Events", state: "Upcoming client activity attached" },
] as const;

const REPORT_ITEMS = [
  { item: "Leadership report", source: "Project, revenue, and task records", state: "Queued" },
  { item: "Revenue rollup", source: "Sales orders and invoices", state: "Reconciled" },
  { item: "At-risk work", source: "Overdue tasks and stalled projects", state: "Surfaced" },
] as const;

export function OperationalIntelligenceDemo() {
  return (
    <div className={styles.opsShell}>
      <div className={styles.shellTopBar}>
        <div className={styles.windowDots} aria-hidden>
          <span />
          <span />
          <span />
        </div>
        <span className={styles.shellTitle}>Operational Intelligence</span>
      </div>

      <div className={styles.opsStatusStrip}>
        <strong>Operations workspace</strong>
        <span>CRM, sales, projects, invoices</span>
        <strong>Auto-report enabled</strong>
        <span>Export package ready</span>
      </div>

      <div className={styles.opsComposition}>
        <section className={styles.executiveHero} aria-label="Executive operational insight">
          <div className={styles.heroHeader}>
            <div>
              <p>Executive operational insight</p>
              <h2>Operational records are grouped into a single reporting view for leadership review</h2>
            </div>
            <span>Operations view</span>
          </div>

          <div className={styles.heroBody}>
            <div className={styles.operationalSummaryPanel}>
              <span>Reporting context</span>
              <strong>{CLIENT_NAME}</strong>
              <small>
                Sales order {SALES_ORDER_ID}, project activity, invoice status, task ownership,
                and event history are shown from one operational record set.
              </small>
            </div>

            <div className={styles.workloadPanel}>
              <div className={styles.panelTitleRow}>
                <span>Aggregated operational sources</span>
                <strong>Current view</strong>
              </div>
              <div className={styles.workloadList}>
                {WORKLOAD_ROWS.map((row) => (
                  <div key={row.area}>
                    <span>{row.area}</span>
                    <small>{row.source}</small>
                    <strong>{row.state}</strong>
                  </div>
                ))}
              </div>
            </div>

            <div className={styles.engagementPreview}>
              <div className={styles.panelTitleRow}>
                <span>Priority engagement records</span>
                <strong>3 shown</strong>
              </div>
              <table>
                <thead>
                  <tr>
                    <th>ID</th>
                    <th>Client</th>
                    <th>Owner</th>
                    <th>Status</th>
                    <th>Revenue</th>
                  </tr>
                </thead>
                <tbody>
                  {ENGAGEMENT_ROWS.map((row) => (
                    <tr key={row.id}>
                      <td>{row.id}</td>
                      <td>{row.client}</td>
                      <td>{row.owner}</td>
                      <td>
                        <span>{row.status}</span>
                      </td>
                      <td>{row.revenue}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>

        <aside className={styles.opsSupportRail} aria-label="Operational support metrics">
          <section className={styles.aggregationModule}>
            <p className={styles.moduleEyebrow}>KPI aggregation</p>
            <div className={styles.aggregationList}>
              <div>
                <span>Revenue KPI</span>
                <strong>Sales order + invoice records</strong>
              </div>
              <div>
                <span>Workload KPI</span>
                <strong>Project tasks + event ownership</strong>
              </div>
              <div>
                <span>Risk KPI</span>
                <strong>Overdue tasks + stalled activity</strong>
              </div>
            </div>
          </section>

          <section className={styles.reportModule}>
            <p className={styles.moduleEyebrow}>Report readiness</p>
            <strong>Weekly ops packet</strong>
            <div className={styles.reportList}>
              {REPORT_ITEMS.map((item) => (
                <span key={item.item}>
                  <strong>{item.item}</strong>
                  <small>{item.source}</small>
                  <em>{item.state}</em>
                </span>
              ))}
            </div>
          </section>
        </aside>
      </div>
    </div>
  );
}
