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
    label: "New Requests",
    title: "Everything lands in one place.",
    nav: ["Inbox", "Emails", "Forms"],
    flow: ["Request comes in", "Checked", "Assigned"],
    rows: [
      { title: "Website form", meta: "New customer question", status: "Check" },
      { title: "Email request", meta: "Needs a reply", status: "Open" },
      { title: "Staff note", meta: "Internal ask", status: "Queued" },
    ],
    popouts: [
      { className: styles.popoutPrimary, label: "New", title: "Request saved", detail: "No more scattered messages", icon: <HiOutlineDocumentText /> },
      { className: styles.popoutSecondary, label: "Check", title: "Needs a reply", detail: "Priority is clear", icon: <HiOutlineClipboardList /> },
      { className: styles.popoutTertiary, label: "Assigned", title: "Someone owns it", detail: "Nothing gets missed", icon: <HiOutlineUserGroup /> },
    ],
    stats: [
      { label: "New", value: "12" },
      { label: "Assigned", value: "9" },
    ],
  },
  {
    label: "Smart Sorting",
    title: "The right person gets the work.",
    nav: ["Rules", "People", "Tasks"],
    flow: ["Sort request", "Pick owner", "Make checklist"],
    rows: [
      { title: "Sort request", meta: "Matched by type", status: "Done" },
      { title: "Pick owner", meta: "Best person selected", status: "Assigned" },
      { title: "Make checklist", meta: "Steps added", status: "Ready" },
    ],
    popouts: [
      { className: styles.popoutPrimary, label: "Sorted", title: "Sent to the right person", detail: "Less manual follow-up", icon: <HiOutlineSparkles /> },
      { className: styles.popoutSecondary, label: "Owner", title: "Person notified", detail: "They know what to do", icon: <HiOutlineUserGroup /> },
      { className: styles.popoutTertiary, label: "Checklist", title: "Next steps added", detail: "The work is repeatable", icon: <HiOutlineClipboardList /> },
    ],
    stats: [
      { label: "Sorted", value: "18" },
      { label: "Matched", value: "96%" },
    ],
  },
  {
    label: "Work Tracker",
    title: "Everyone can see what is happening.",
    nav: ["Board", "Status", "Alerts"],
    flow: ["Working", "Waiting", "Stuck", "Done"],
    rows: [
      { title: "Working", meta: "Owner is active", status: "Active" },
      { title: "Waiting", meta: "Needs review", status: "Next" },
      { title: "Stuck", meta: "Needs approval", status: "Flag" },
      { title: "Done", meta: "Closed this week", status: "Done" },
    ],
    popouts: [
      { className: styles.popoutPrimary, label: "Status", title: "Updated automatically", detail: "No guessing where it stands", icon: <HiOutlineCheckCircle /> },
      { className: styles.popoutSecondary, label: "Reminder", title: "Follow-up sent", detail: "Owners stay on track", icon: <HiOutlineCalendar /> },
      { className: styles.popoutTertiary, label: "Stuck", title: "Problem flagged", detail: "Issues show up early", icon: <HiOutlineDocumentText /> },
    ],
    stats: [
      { label: "Active", value: "8" },
      { label: "Stuck", value: "2" },
    ],
  },
  {
    label: "Weekly Summary",
    title: "You know what needs attention.",
    nav: ["Summary", "Numbers", "History"],
    flow: ["Update status", "Make report", "Repeat next week"],
    rows: [
      { title: "Weekly summary", meta: "Ready to share", status: "Sent" },
      { title: "Open items", meta: "Needs attention", status: "14" },
      { title: "Team usage", meta: "People using it", status: "92%" },
      { title: "Time to finish", meta: "Average close", status: "3.2d" },
    ],
    popouts: [
      { className: styles.popoutPrimary, label: "Summary", title: "Weekly report ready", detail: "Clear view of the work", icon: <HiOutlineChartBar /> },
      { className: styles.popoutSecondary, label: "Attention", title: "Open items listed", detail: "Know what to fix first", icon: <HiOutlineDocumentText /> },
      { className: styles.popoutTertiary, label: "Repeat", title: "Same process next week", detail: "The system keeps working", icon: <HiOutlineSparkles /> },
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
        <strong>Work System</strong>
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
