"use client";

import { CLIENT_NAME, SALES_ORDER_ID, CLIENT_REVENUE_FORMATTED } from "../projectData";
import styles from "./operational-intelligence-demo.module.scss";

const KPI_CARDS = [
  { label: "Engagements reviewed", value: "8", tone: "violet" },
  { label: "Active delivery projects", value: "14", tone: "green" },
  { label: "Overdue tasks", value: "3", tone: "red" },
  { label: "Expected revenue", value: "$84.2K", tone: "blue" },
] as const;

const STAGE_ROWS = [
  { label: "Confirmed delivery", value: 72, color: "green" },
  { label: "Proposal follow-up", value: 18, color: "violet" },
  { label: "At-risk operations", value: 10, color: "red" },
] as const;

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

const REPORT_ITEMS = [
  "Leadership report queued",
  "Revenue rollup reconciled",
  "Overdue project tasks surfaced",
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
        <strong>ERP records live</strong>
        <span>May 2026</span>
        <strong>Auto-report queued</strong>
        <span>Export ready</span>
      </div>

      <div className={styles.opsComposition}>
        <section className={styles.executiveHero} aria-label="Executive operational insight">
          <div className={styles.heroHeader}>
            <div>
              <p>Executive operational insight</p>
              <h2>Delivery pipeline is healthy, with 3 overdue tasks requiring manager review</h2>
            </div>
            <span>Operations view</span>
          </div>

          <div className={styles.heroBody}>
            <div className={styles.healthPanel}>
              <span>Operational health</span>
              <strong>86%</strong>
              <small>Calculated from CRM, project, task, invoice, and event records</small>
            </div>

            <div className={styles.pipelinePanel}>
              <div className={styles.panelTitleRow}>
                <span>Pipeline workload mix</span>
                <strong>100%</strong>
              </div>
              <div className={styles.stageBars}>
                {STAGE_ROWS.map((row) => (
                  <div key={row.label} className={styles.stageRow}>
                    <div className={styles.stageLabel}>
                      <span>{row.label}</span>
                      <strong>{row.value}%</strong>
                    </div>
                    <div className={styles.stageTrack}>
                      <i
                        className={styles[row.color]}
                        style={{ inlineSize: `${row.value}%` }}
                        aria-hidden
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className={styles.engagementPreview}>
              <div className={styles.panelTitleRow}>
                <span>Priority operational records</span>
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
          <section className={styles.kpiModule}>
            <p className={styles.moduleEyebrow}>KPI stack</p>
            <div className={styles.kpiStack}>
              {KPI_CARDS.map((kpi) => (
                <div key={kpi.label} className={`${styles.kpiCard} ${styles[kpi.tone]}`}>
                  <span>{kpi.label}</span>
                  <strong>{kpi.value}</strong>
                </div>
              ))}
            </div>
          </section>

          <section className={styles.reportModule}>
            <p className={styles.moduleEyebrow}>Report readiness</p>
            <strong>Weekly ops packet</strong>
            <div className={styles.reportList}>
              {REPORT_ITEMS.map((item) => (
                <span key={item}>{item}</span>
              ))}
            </div>
          </section>
        </aside>
      </div>
    </div>
  );
}
