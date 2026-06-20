import type { ReactNode } from "react";
import {
  HiOutlineCalendar,
  HiOutlineChartBar,
  HiOutlineCheckCircle,
  HiOutlineClipboardList,
  HiOutlineDocumentText,
  HiOutlineSparkles,
  HiOutlineUserGroup,
} from "react-icons/hi";
import styles from "./OperationsVisual.module.scss";

type Slide = {
  label: string;
  title: string;
  nav: string[];
  rows: Array<{ title: string; meta: string; status: string }>;
  popouts: Array<{ className: string; label: string; title: string; detail: string; icon: ReactNode }>;
  stats: Array<{ label: string; value: string }>;
};

const slides: Slide[] = [
  {
    label: "Intake System",
    title: "Client Requests",
    nav: ["Inbox", "Vendors", "Tasks"],
    rows: [
      { title: "Customer Inquiry", meta: "New request", status: "Assign" },
      { title: "Vendor Update", meta: "Docs received", status: "Review" },
      { title: "Internal Request", meta: "Ops queue", status: "Route" },
    ],
    popouts: [
      { className: styles.popoutPrimary, label: "Captured", title: "Customer Inquiry", detail: "Auto-tagged and routed", icon: <HiOutlineDocumentText /> },
      { className: styles.popoutSecondary, label: "Owner", title: "Assigned", detail: "Follow-up due today", icon: <HiOutlineUserGroup /> },
      { className: styles.popoutTertiary, label: "Status", title: "Ready for reply", detail: "No manual sorting", icon: <HiOutlineCheckCircle /> },
    ],
    stats: [
      { label: "Open", value: "14" },
      { label: "Assigned", value: "9" },
    ],
  },
  {
    label: "Workflow Board",
    title: "Operations Pipeline",
    nav: ["Board", "Rules", "Calendar"],
    rows: [
      { title: "Requirements", meta: "Completed", status: "Done" },
      { title: "Configuration", meta: "Owner active", status: "Live" },
      { title: "Implementation", meta: "Due Jun 15", status: "Next" },
    ],
    popouts: [
      { className: styles.popoutPrimary, label: "Rule fired", title: "Task Created", detail: "Checklist attached", icon: <HiOutlineClipboardList /> },
      { className: styles.popoutSecondary, label: "Schedule", title: "Due Date Set", detail: "Calendar synced", icon: <HiOutlineCalendar /> },
      { className: styles.popoutTertiary, label: "Automation", title: "No handoff gap", detail: "Status pushed forward", icon: <HiOutlineSparkles /> },
    ],
    stats: [
      { label: "Active", value: "8" },
      { label: "On track", value: "92%" },
    ],
  },
  {
    label: "Reporting View",
    title: "Weekly Summary",
    nav: ["Reports", "Health", "Archive"],
    rows: [
      { title: "Open Items", meta: "Needs attention", status: "14" },
      { title: "Follow-Ups", meta: "Scheduled", status: "7" },
      { title: "Completed Work", meta: "This week", status: "28" },
    ],
    popouts: [
      { className: styles.popoutPrimary, label: "Generated", title: "Weekly Summary", detail: "Metrics refreshed", icon: <HiOutlineChartBar /> },
      { className: styles.popoutSecondary, label: "Health", title: "94% clear", detail: "Exceptions surfaced", icon: <HiOutlineCheckCircle /> },
      { className: styles.popoutTertiary, label: "Export", title: "Ready to send", detail: "Leadership view", icon: <HiOutlineDocumentText /> },
    ],
    stats: [
      { label: "Closed", value: "28" },
      { label: "Blocked", value: "2" },
    ],
  },
];

function AppChrome({ slide }: { slide: Slide }) {
  return (
    <div className={styles.appWindow}>
      <div className={styles.windowBar}>
        <span />
        <span />
        <span />
        <strong>Workspace</strong>
      </div>
      <div className={styles.workspaceShell}>
        <aside className={styles.sidebar}>
          <strong>AM</strong>
          {slide.nav.map((item) => (
            <span key={item}>{item}</span>
          ))}
        </aside>
        <main className={styles.workspaceMain}>
          <div className={styles.panelHeader}>
            <div>
              <span>{slide.label}</span>
              <h3>{slide.title}</h3>
            </div>
            <em>Live</em>
          </div>

          <div className={styles.databaseRows}>
            {slide.rows.map((row, index) => (
              <div className={index === 0 ? styles.rowActive : ""} key={row.title}>
                <span>{row.title}</span>
                <small>{row.meta}</small>
                <strong>{row.status}</strong>
              </div>
            ))}
          </div>

          <div className={styles.metricStrip}>
            {slide.stats.map((stat) => (
              <div key={stat.label}>
                <span>{stat.label}</span>
                <strong>{stat.value}</strong>
              </div>
            ))}
          </div>
        </main>
      </div>
    </div>
  );
}

function PopoutCard({ card }: { card: Slide["popouts"][number] }) {
  return (
    <article className={`${styles.popoutCard} ${card.className}`}>
      <div>{card.icon}</div>
      <span>{card.label}</span>
      <strong>{card.title}</strong>
      <p>{card.detail}</p>
    </article>
  );
}

export function OperationsVisual({ heroScaled = false }: { heroScaled?: boolean }) {
  return (
    <div
      className={styles.heroMockup}
      data-hero-scaled={heroScaled ? "" : undefined}
      aria-label="Animated Notion-style operations dashboard slider"
    >
      <div className={styles.glowField} aria-hidden />
      <div className={styles.sliderViewport}>
        <div className={styles.sliderTrack}>
          {slides.map((slide) => (
            <section className={styles.slide} key={slide.title}>
              <AppChrome slide={slide} />
              <div className={styles.popoutLayer}>
                {slide.popouts.map((card) => (
                  <PopoutCard card={card} key={`${slide.title}-${card.title}`} />
                ))}
              </div>
            </section>
          ))}
        </div>
      </div>
      <div className={styles.sceneDots} aria-hidden>
        <span />
        <span />
        <span />
      </div>
    </div>
  );
}
