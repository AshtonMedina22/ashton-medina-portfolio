"use client";

import {
  HiOutlineBell,
  HiOutlineChartBar,
  HiOutlineCheckCircle,
  HiOutlineClipboardCheck,
  HiOutlineCloudUpload,
  HiOutlineCube,
  HiOutlineDatabase,
  HiOutlineExclamation,
  HiOutlineLightningBolt,
  HiOutlineOfficeBuilding,
  HiOutlineRefresh,
  HiOutlineSearch,
  HiOutlineShieldCheck,
  HiOutlineUsers,
} from "react-icons/hi";
import styles from "./admin-operations-demo.module.scss";

const navItems = [
  "Command",
  "Accounts",
  "Orders",
  "Workflows",
  "Compliance",
  "Schedule",
  "Systems",
] as const;

const kpis = [
  { icon: HiOutlineChartBar, label: "Revenue pipeline", value: "$642K", meta: "CRM + Supabase cache", tone: "indigo" },
  { icon: HiOutlineLightningBolt, label: "Workflow throughput", value: "3.4K", meta: "Event API stream", tone: "amber" },
  { icon: HiOutlineUsers, label: "Account activity", value: "94", meta: "Webhook operations queue", tone: "teal" },
  { icon: HiOutlineShieldCheck, label: "Review risk", value: "4 flags", meta: "Policy renewal workflow", tone: "rose" },
] as const;

const eventRows = [
  { icon: HiOutlineCloudUpload, source: "Order webhook", detail: "Transaction #9401 validated, deduped, and routed to the fulfillment queue.", state: "Processed" },
  { icon: HiOutlineLightningBolt, source: "Workflow event worker", detail: "SLA signal normalized into the operations stream with exception guards.", state: "Live" },
  { icon: HiOutlineDatabase, source: "Supabase sync", detail: "Account ledger cache refreshed from PostgreSQL materialized view.", state: "Cached" },
  { icon: HiOutlineClipboardCheck, source: "Compliance cron", detail: "Expiring policy record isolated and renewal draft queued.", state: "Review" },
] as const;

const telemetryRows = [
  ["Enterprise", "CRM", "$642K", "Pipeline sync", "Healthy"],
  ["Operations", "SLA queue", "3.4K", "Event stream", "Watch"],
  ["Support", "Ticket desk", "94 open", "Review queue", "Queued"],
] as const;

const architecture = ["REST webhooks", "Edge/API workers", "Supabase cache", "PostgreSQL records", "Typed UI rows"] as const;

export function AdminOperationsDemo() {
  return (
    <div className={styles.shell}>
      <aside className={styles.sidebar}>
        <div className={styles.brand}>
          <HiOutlineOfficeBuilding />
          <span>Ops Command</span>
        </div>
        <nav>
          {navItems.map((item, index) => (
            <span className={index === 0 ? styles.activeNav : undefined} key={item}>
              {item}
            </span>
          ))}
        </nav>
        <div className={styles.sidebarFooter}>
          <HiOutlineShieldCheck />
          <span>Tenant isolation active</span>
        </div>
      </aside>

      <main className={styles.workspace}>
        <header className={styles.topbar}>
          <div className={styles.search}>
            <HiOutlineSearch />
            <span>Search accounts, tickets, orders, workflows</span>
          </div>
          <div className={styles.topbarActions}>
            <span><HiOutlineRefresh /> Synced 2m ago</span>
            <span><HiOutlineBell /> 7 alerts</span>
          </div>
        </header>

        <section className={styles.hero}>
          <div>
            <p>Multi-tenant enterprise operations hub</p>
            <h2>One command surface for account workspaces, webhooks, workflows, and operational records</h2>
          </div>
          <div className={styles.heroBadges}>
            <span>CRM</span>
            <span>ERP</span>
            <span>OPS</span>
          </div>
        </section>

        <section className={styles.kpiGrid}>
          {kpis.map(({ icon: Icon, label, value, meta, tone }) => (
            <article className={`${styles.kpiCard} ${styles[tone]}`} key={label}>
              <Icon />
              <span>{label}</span>
              <strong>{value}</strong>
              <small>{meta}</small>
            </article>
          ))}
        </section>

        <section className={styles.mainGrid}>
          <article className={styles.streamPanel}>
            <div className={styles.panelHeader}>
              <span>Global operations stream</span>
              <strong>Live event bus</strong>
            </div>
            <div className={styles.streamList}>
              {eventRows.map(({ icon: Icon, source, detail, state }) => (
                <div key={source}>
                  <Icon />
                  <span>
                    <strong>{source}</strong>
                    <small>{detail}</small>
                  </span>
                  <em>{state}</em>
                </div>
              ))}
            </div>
          </article>

          <article className={styles.telemetryPanel}>
            <div className={styles.panelHeader}>
              <span>Workflow and account matrix</span>
              <HiOutlineCube />
            </div>
            <div className={styles.telemetryTable}>
              <div>
                <span>Group</span>
                <span>System</span>
                <span>Signal</span>
                <span>Mode</span>
                <span>Status</span>
              </div>
              {telemetryRows.map(([site, asset, signal, mode, status]) => (
                <div key={site}>
                  <strong>{site}</strong>
                  <span>{asset}</span>
                  <span>{signal}</span>
                  <span>{mode}</span>
                  <em>{status}</em>
                </div>
              ))}
            </div>
          </article>

          <aside className={styles.archPanel}>
            <div className={styles.panelHeader}>
              <span>Production data path</span>
              <HiOutlineDatabase />
            </div>
            <div className={styles.archStack}>
              {architecture.map((item, index) => (
                <div key={item}>
                  <span>{item}</span>
                  {index < architecture.length - 1 && <i />}
                </div>
              ))}
            </div>
            <div className={styles.warning}>
              <HiOutlineExclamation />
              Provider errors fall back to cached rows with visible sync warnings.
            </div>
          </aside>
        </section>
      </main>
    </div>
  );
}
