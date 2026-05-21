"use client";

import {
  HiOutlineCalendar,
  HiOutlineCash,
  HiOutlineCheckCircle,
  HiOutlineClipboardList,
  HiOutlineDatabase,
  HiOutlineDotsVertical,
  HiOutlineDownload,
  HiOutlineExclamationCircle,
  HiOutlineExternalLink,
  HiOutlineFolder,
  HiOutlineOfficeBuilding,
  HiOutlineUsers,
} from "react-icons/hi";
import { CLIENT_NAME, SALES_ORDER_ID, CLIENT_REVENUE_FORMATTED } from "../projectData";
import styles from "./operational-intelligence-demo.module.scss";

const KPI_CARDS = [
  { icon: HiOutlineUsers, label: "Engagements reviewed", value: "8", tone: "violet" },
  { icon: HiOutlineFolder, label: "Active delivery projects", value: "14", tone: "blue" },
  { icon: HiOutlineExclamationCircle, label: "Overdue tasks", value: "3", tone: "red" },
  { icon: HiOutlineCash, label: "Expected revenue", value: "$84.2K", tone: "green" },
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
    updated: "May 6, 9:12 AM",
  },
  {
    id: "SO-0887",
    client: "Acme Inc",
    owner: "James K.",
    status: "Proposal sent",
    revenue: "$8,200",
    updated: "May 6, 9:08 AM",
  },
  {
    id: "SO-0882",
    client: "Acme Corp",
    owner: "Sarah M.",
    status: "Contract sent",
    revenue: "$15,000",
    updated: "May 6, 9:03 AM",
  },
] as const;

const REPORT_ITEMS = [
  { icon: HiOutlineClipboardList, label: "Leadership report queued" },
  { icon: HiOutlineDatabase, label: "Revenue rollup reconciled" },
  { icon: HiOutlineExclamationCircle, label: "Overdue project tasks surfaced" },
] as const;

const STATUS_FILTERS = [
  { icon: HiOutlineDatabase, label: "ERP records live", tone: "violet" },
  { icon: HiOutlineCalendar, label: "May 2026", tone: "blue" },
  { icon: HiOutlineCheckCircle, label: "Auto-report queued", tone: "green" },
  { icon: HiOutlineDownload, label: "Export ready", tone: "green" },
] as const;

export function OperationalIntelligenceDemo() {
  return (
    <div className={styles.opsShell}>
      <div className={styles.shellTopBar}>
        <HiOutlineClipboardList />
        <span className={styles.shellTitle}>Operational Intelligence</span>
      </div>

      <div className={styles.opsStatusStrip}>
        {STATUS_FILTERS.map(({ icon: Icon, label, tone }) => (
          <span className={styles[`status${tone[0].toUpperCase()}${tone.slice(1)}`]} key={label}>
            <Icon />
            {label}
            <i aria-hidden />
          </span>
        ))}
      </div>

      <div className={styles.opsComposition}>
        <section className={styles.executiveHero} aria-label="Executive operational insight">
          <div className={styles.heroHeader}>
            <div>
              <p>Executive operational insight</p>
              <h2>Delivery pipeline is healthy, with 3 overdue tasks requiring manager review</h2>
              <small>Real-time visibility across CRM, projects, tasks, invoices, and events.</small>
            </div>
            <span>Operations view <HiOutlineExternalLink /></span>
          </div>

          <div className={styles.heroBody}>
            <div className={styles.healthPanel}>
              <span>Operational health</span>
              <strong>86%</strong>
              <em>Healthy</em>
              <small>Calculated from CRM, project, task, invoice, and event records</small>
              <div className={styles.healthSparkline} aria-hidden>
                <i />
                <i />
                <i />
                <i />
                <i />
              </div>
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
                <a>View all records</a>
              </div>
              <table>
                <thead>
                  <tr>
                    <th>ID</th>
                    <th>Client</th>
                    <th>Owner</th>
                    <th>Status</th>
                    <th>Revenue</th>
                    <th>Updated</th>
                    <th />
                  </tr>
                </thead>
                <tbody>
                  {ENGAGEMENT_ROWS.map((row) => (
                    <tr key={row.id}>
                      <td>{row.id}</td>
                      <td><HiOutlineOfficeBuilding />{row.client}</td>
                      <td>{row.owner}</td>
                      <td>
                        <span>{row.status}</span>
                      </td>
                      <td>{row.revenue}</td>
                      <td>{row.updated}</td>
                      <td><HiOutlineDotsVertical /></td>
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
              {KPI_CARDS.map(({ icon: Icon, label, value, tone }) => (
                <div key={label} className={`${styles.kpiCard} ${styles[tone]}`}>
                  <Icon />
                  <span>{label}</span>
                  <strong>{value}</strong>
                </div>
              ))}
            </div>
          </section>

          <section className={styles.reportModule}>
            <p className={styles.moduleEyebrow}>Report readiness</p>
            <strong>Weekly ops packet</strong>
            <div className={styles.reportList}>
              {REPORT_ITEMS.map(({ icon: Icon, label }) => (
                <span key={label}>
                  <Icon />
                  {label}
                  <HiOutlineCheckCircle />
                </span>
              ))}
            </div>
            <a className={styles.reportPreview}>View report preview <HiOutlineExternalLink /></a>
          </section>
        </aside>
      </div>
    </div>
  );
}
