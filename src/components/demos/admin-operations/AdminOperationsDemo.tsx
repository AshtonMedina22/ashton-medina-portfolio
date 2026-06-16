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
  HiOutlineTruck,
  HiOutlineUsers,
} from "react-icons/hi";
import styles from "./admin-operations-demo.module.scss";

const navItems = [
  "Command",
  "Enterprise",
  "Retail",
  "Vendor Ops",
  "Permitting",
  "Schedule",
  "Systems",
] as const;

const kpis = [
  { icon: HiOutlineChartBar, label: "B2B pipeline", value: "$642K", meta: "OpenSolar + Supabase cache", tone: "indigo" },
  { icon: HiOutlineLightningBolt, label: "Fleet yield", value: "3.4 MW", meta: "SolarEdge / SCADA stream", tone: "amber" },
  { icon: HiOutlineTruck, label: "Retail volume", value: "9 units", meta: "Webhook order queue", tone: "teal" },
  { icon: HiOutlineShieldCheck, label: "Vendor risk", value: "4 flags", meta: "COI renewal workflow", tone: "rose" },
] as const;

const eventRows = [
  { icon: HiOutlineCloudUpload, source: "WooCommerce webhook", detail: "Order #9401 validated, deduped, and routed to warehouse pull.", state: "Processed" },
  { icon: HiOutlineLightningBolt, source: "SolarEdge polling worker", detail: "Inverter sample normalized into SCADA payload with fault guard.", state: "Live" },
  { icon: HiOutlineDatabase, source: "Supabase sync", detail: "Partner ledger cache refreshed from PostgreSQL materialized view.", state: "Cached" },
  { icon: HiOutlineClipboardCheck, source: "Compliance cron", detail: "Expired COI isolated and vendor renewal draft queued.", state: "Review" },
] as const;

const telemetryRows = [
  ["Hunt County", "SE66.6K", "1.8 MW", "Export limited", "Healthy"],
  ["North Texas", "SE100K", "1.6 MW", "Battery support", "Watch"],
  ["Retail Hub", "Gateway", "9 orders", "Freight queue", "Queued"],
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
            <span>Search entities, permits, vendors, orders</span>
          </div>
          <div className={styles.topbarActions}>
            <span><HiOutlineRefresh /> Synced 2m ago</span>
            <span><HiOutlineBell /> 7 alerts</span>
          </div>
        </header>

        <section className={styles.hero}>
          <div>
            <p>Multi-tenant enterprise operations hub</p>
            <h2>One command surface for company workspaces, webhooks, telemetry, and partner ledgers</h2>
          </div>
          <div className={styles.heroBadges}>
            <span>YSP</span>
            <span>2SK</span>
            <span>3SK</span>
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
              <span>Telemetry and fulfillment matrix</span>
              <HiOutlineCube />
            </div>
            <div className={styles.telemetryTable}>
              <div>
                <span>Site</span>
                <span>Asset</span>
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

