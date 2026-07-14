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
  flow: string[];
  rows: Array<{ title: string; meta: string; status: string }>;
  popouts: Array<{ className: string; label: string; title: string; detail: string; icon: ReactNode }>;
  stats: Array<{ label: string; value: string }>;
};

const slides: Slide[] = [
  {
    label: "Intelligent Ingestion",
    title: "Data and requests land in one place.",
    nav: ["Inputs", "Email", "API"],
    flow: ["Capture input", "Classify context", "Prepare data"],
    rows: [
      { title: "AI prompt", meta: "User intent captured", status: "Check" },
      { title: "Email request", meta: "Semi-structured data", status: "Open" },
      { title: "Staff note", meta: "Knowledge captured", status: "Queued" },
    ],
    popouts: [
      { className: styles.popoutPrimary, label: "Ingested", title: "Input saved", detail: "Data starts clean", icon: <HiOutlineDocumentText /> },
      { className: styles.popoutSecondary, label: "Context", title: "Intent is clear", detail: "Ready for routing", icon: <HiOutlineClipboardList /> },
      { className: styles.popoutTertiary, label: "Unified", title: "Sources connected", detail: "No scattered inputs", icon: <HiOutlineUserGroup /> },
    ],
    stats: [
      { label: "New", value: "12" },
      { label: "Assigned", value: "9" },
    ],
  },
  {
    label: "Dynamic Orchestration",
    title: "The right agent or person gets the work.",
    nav: ["Rules", "Agents", "Tasks"],
    flow: ["Analyze context", "Route work", "Generate steps"],
    rows: [
      { title: "Analyze input", meta: "Matched by signal", status: "Done" },
      { title: "Pick owner", meta: "Agent or human selected", status: "Assigned" },
      { title: "Make checklist", meta: "Steps generated", status: "Ready" },
    ],
    popouts: [
      { className: styles.popoutPrimary, label: "Routed", title: "Sent to the right path", detail: "Less manual triage", icon: <HiOutlineSparkles /> },
      { className: styles.popoutSecondary, label: "Owner", title: "Human review set", detail: "Judgment stays clear", icon: <HiOutlineUserGroup /> },
      { className: styles.popoutTertiary, label: "Checklist", title: "Next steps generated", detail: "The workflow repeats", icon: <HiOutlineClipboardList /> },
    ],
    stats: [
      { label: "Sorted", value: "18" },
      { label: "Matched", value: "96%" },
    ],
  },
  {
    label: "Real-Time Observability",
    title: "System health stays visible.",
    nav: ["Board", "Status", "Alerts"],
    flow: ["Active", "Review", "Anomaly", "Resolved"],
    rows: [
      { title: "Model active", meta: "Workflow running", status: "Active" },
      { title: "Pending review", meta: "Human check needed", status: "Next" },
      { title: "Anomaly detected", meta: "Needs attention", status: "Flag" },
      { title: "Outcome achieved", meta: "Closed this week", status: "Done" },
    ],
    popouts: [
      { className: styles.popoutPrimary, label: "Status", title: "Updated automatically", detail: "No guessing", icon: <HiOutlineCheckCircle /> },
      { className: styles.popoutSecondary, label: "Alert", title: "Follow-up sent", detail: "Owners stay on track", icon: <HiOutlineCalendar /> },
      { className: styles.popoutTertiary, label: "Anomaly", title: "Issue flagged", detail: "Problems show early", icon: <HiOutlineDocumentText /> },
    ],
    stats: [
      { label: "Active", value: "8" },
      { label: "Stuck", value: "2" },
    ],
  },
  {
    label: "Operational Intelligence",
    title: "You know what to improve next.",
    nav: ["Summary", "Signals", "History"],
    flow: ["Analyze signals", "Report impact", "Improve loop"],
    rows: [
      { title: "Impact summary", meta: "Ready to share", status: "Sent" },
      { title: "Critical alerts", meta: "Needs attention", status: "14" },
      { title: "System adoption", meta: "People using it", status: "92%" },
      { title: "Time to resolution", meta: "Average close", status: "3.2d" },
    ],
    popouts: [
      { className: styles.popoutPrimary, label: "Summary", title: "Impact report ready", detail: "Clear operating view", icon: <HiOutlineChartBar /> },
      { className: styles.popoutSecondary, label: "Attention", title: "Alerts prioritized", detail: "Know what to fix first", icon: <HiOutlineDocumentText /> },
      { className: styles.popoutTertiary, label: "Improve", title: "Loop refined", detail: "The system gets better", icon: <HiOutlineSparkles /> },
    ],
    stats: [
      { label: "Team usage", value: "92%" },
      { label: "Avg. close", value: "3.2d" },
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
        <strong>AI Work System</strong>
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

          <div className={styles.flowRibbon}>
            {slide.flow.map((step) => (
              <span key={step}>{step}</span>
            ))}
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
      aria-label="Animated business work system loop"
    >
      <div className={styles.glowField} aria-hidden />
      <div className={styles.sliderViewport}>
        <div className={styles.sliderTrack}>
          {slides.map((slide) => (
            <section className={styles.slide} key={slide.label}>
              <AppChrome slide={slide} />
              <div className={styles.popoutLayer}>
                {slide.popouts.map((card) => (
                  <PopoutCard card={card} key={`${slide.label}-${card.title}`} />
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
        <span />
      </div>
    </div>
  );
}
