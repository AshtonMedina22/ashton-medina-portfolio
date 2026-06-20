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
    label: "Request Intake",
    title: "Requests stop getting lost.",
    nav: ["Inbox", "Forms", "Requests"],
    flow: ["Request Received", "Needs Review", "Assigned"],
    rows: [
      { title: "New Request", meta: "Website form", status: "Needs Review" },
      { title: "Vendor Update", meta: "Email received", status: "Open" },
      { title: "Internal Request", meta: "Team note", status: "Queued" },
    ],
    popouts: [
      { className: styles.popoutPrimary, label: "New Request", title: "Request Received", detail: "Captured from intake", icon: <HiOutlineDocumentText /> },
      { className: styles.popoutSecondary, label: "Review", title: "Needs Review", detail: "Priority and owner needed", icon: <HiOutlineClipboardList /> },
      { className: styles.popoutTertiary, label: "Assigned", title: "Owner selected", detail: "Nothing falls through", icon: <HiOutlineUserGroup /> },
    ],
    stats: [
      { label: "New", value: "12" },
      { label: "Assigned", value: "9" },
    ],
  },
  {
    label: "Auto-Routing",
    title: "Work routes to the right owner.",
    nav: ["Rules", "Owners", "Tasks"],
    flow: ["Auto-Routed", "Owner Matched", "Tasks Created"],
    rows: [
      { title: "Auto-route request", meta: "Rule matched", status: "Live" },
      { title: "Owner matched", meta: "Ops lead", status: "Assigned" },
      { title: "Tasks created", meta: "Checklist added", status: "Ready" },
    ],
    popouts: [
      { className: styles.popoutPrimary, label: "Rule fired", title: "Auto-Routed", detail: "Manual sorting removed", icon: <HiOutlineSparkles /> },
      { className: styles.popoutSecondary, label: "Owner", title: "Owner Notified", detail: "Next step is clear", icon: <HiOutlineUserGroup /> },
      { className: styles.popoutTertiary, label: "Task", title: "Tasks Created", detail: "Checklist attached", icon: <HiOutlineClipboardList /> },
    ],
    stats: [
      { label: "Routed", value: "18" },
      { label: "Matched", value: "96%" },
    ],
  },
  {
    label: "Work Tracking",
    title: "Everyone can see status.",
    nav: ["Board", "Status", "Alerts"],
    flow: ["In Progress", "Ready", "Blocked", "Complete"],
    rows: [
      { title: "In Progress", meta: "Owner working", status: "Active" },
      { title: "Ready", meta: "Waiting on review", status: "Next" },
      { title: "Blocked", meta: "Needs approval", status: "Flagged" },
      { title: "Complete", meta: "Closed this week", status: "Done" },
    ],
    popouts: [
      { className: styles.popoutPrimary, label: "Tracker", title: "Status Updated", detail: "Live board, no guessing", icon: <HiOutlineCheckCircle /> },
      { className: styles.popoutSecondary, label: "Reminder", title: "Owner Notified", detail: "Follow-up sent", icon: <HiOutlineCalendar /> },
      { className: styles.popoutTertiary, label: "Blocked", title: "Approval Needed", detail: "Issue surfaced early", icon: <HiOutlineDocumentText /> },
    ],
    stats: [
      { label: "Active", value: "8" },
      { label: "Blocked", value: "2" },
    ],
  },
  {
    label: "Reporting Visibility",
    title: "Leadership gets usable reporting.",
    nav: ["Reports", "KPIs", "Archive"],
    flow: ["Status Updated", "Report Generated", "Repeatable Workflow"],
    rows: [
      { title: "Weekly report generated", meta: "Shared view", status: "Sent" },
      { title: "Open Items", meta: "Needs attention", status: "14" },
      { title: "Adoption", meta: "Team usage", status: "92%" },
      { title: "Cycle Time", meta: "Average close", status: "3.2d" },
    ],
    popouts: [
      { className: styles.popoutPrimary, label: "Report", title: "Report Generated", detail: "Clean leadership summary", icon: <HiOutlineChartBar /> },
      { className: styles.popoutSecondary, label: "Visibility", title: "Open Items", detail: "Risks are clear", icon: <HiOutlineDocumentText /> },
      { className: styles.popoutTertiary, label: "Loop", title: "Repeatable Workflow", detail: "The process can scale", icon: <HiOutlineSparkles /> },
    ],
    stats: [
      { label: "Adoption", value: "92%" },
      { label: "Cycle Time", value: "3.2d" },
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
        <strong>Workflow System</strong>
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
      aria-label="Animated Business Workflow Solutions Loop"
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
