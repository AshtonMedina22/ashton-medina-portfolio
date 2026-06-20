import type { CSSProperties } from "react";
import styles from "./OperationsVisual.module.scss";

type Accent = "violet" | "cyan" | "green" | "amber";

type WorkflowScene = {
  title: string;
  eyebrow: string;
  item: string;
  summary: string;
  activeStep: number;
  chips: Array<{ label: string; accent: Accent }>;
  cards: Array<{ label: string; title: string; meta: string; accent: Accent }>;
  report: Array<{ label: string; value: string; accent: Accent }>;
};

const flowSteps = [
  "New Inquiry",
  "Assigned to Owner",
  "Tasks Created",
  "Follow-Up Scheduled",
  "Status Updated",
  "Report Generated",
] as const;

const scenes: WorkflowScene[] = [
  {
    title: "Inquiry Capture",
    eyebrow: "Messy request captured",
    item: "Customer follow-up request",
    summary:
      "A new inquiry is logged, labeled, and made visible before it gets lost in email or chat.",
    activeStep: 0,
    chips: [
      { label: "New Inquiry", accent: "violet" },
      { label: "Needs Follow-Up", accent: "amber" },
      { label: "Assigned", accent: "green" },
    ],
    cards: [
      {
        label: "Source",
        title: "Website form",
        meta: "Captured today",
        accent: "cyan",
      },
      {
        label: "Priority",
        title: "Needs follow-up",
        meta: "Owner required",
        accent: "amber",
      },
    ],
    report: [
      { label: "New", value: "12", accent: "violet" },
      { label: "Unassigned", value: "3", accent: "amber" },
      { label: "Visible", value: "100%", accent: "green" },
    ],
  },
  {
    title: "Task Routing",
    eyebrow: "Work gets assigned",
    item: "Implementation checklist",
    summary: "The inquiry becomes assigned tasks with a clear owner, due date, and next action.",
    activeStep: 2,
    chips: [
      { label: "Owner Assigned", accent: "green" },
      { label: "Tasks Created", accent: "violet" },
      { label: "Due Date Set", accent: "cyan" },
    ],
    cards: [
      {
        label: "Owner",
        title: "Operations lead",
        meta: "Accountable person set",
        accent: "green",
      },
      {
        label: "Next step",
        title: "Prepare follow-up",
        meta: "Due tomorrow",
        accent: "violet",
      },
    ],
    report: [
      { label: "Tasks", value: "8", accent: "violet" },
      { label: "Owners", value: "4", accent: "green" },
      { label: "Due", value: "2", accent: "cyan" },
    ],
  },
  {
    title: "Work Tracking",
    eyebrow: "Status stays clear",
    item: "Open customer tasks",
    summary:
      "Tasks move through a simple status board so waiting items and ready work are easy to see.",
    activeStep: 4,
    chips: [
      { label: "In Progress", accent: "cyan" },
      { label: "Waiting", accent: "amber" },
      { label: "Ready", accent: "violet" },
      { label: "Complete", accent: "green" },
    ],
    cards: [
      {
        label: "In Progress",
        title: "Confirm requirements",
        meta: "Owner active",
        accent: "cyan",
      },
      {
        label: "Waiting",
        title: "Approval needed",
        meta: "Reminder scheduled",
        accent: "amber",
      },
    ],
    report: [
      { label: "In Progress", value: "9", accent: "cyan" },
      { label: "Waiting", value: "4", accent: "amber" },
      { label: "Complete", value: "18", accent: "green" },
    ],
  },
  {
    title: "Reporting Visibility",
    eyebrow: "Leadership can see status",
    item: "Weekly status summary",
    summary:
      "Completed work, open items, and follow-ups roll into a readable report without manual rebuilding.",
    activeStep: 5,
    chips: [
      { label: "Report Generated", accent: "green" },
      { label: "Open Items", accent: "amber" },
      { label: "Follow-Ups", accent: "cyan" },
      { label: "Completed Work", accent: "violet" },
    ],
    cards: [
      {
        label: "Summary",
        title: "Weekly report generated",
        meta: "Ready for leadership",
        accent: "green",
      },
      {
        label: "Focus",
        title: "Follow-ups due",
        meta: "Prioritized by owner",
        accent: "cyan",
      },
    ],
    report: [
      { label: "Open Items", value: "14", accent: "amber" },
      { label: "Follow-Ups", value: "7", accent: "cyan" },
      { label: "Completed Work", value: "28", accent: "green" },
    ],
  },
];

const accentClass: Record<Accent, string> = {
  violet: styles.violet,
  cyan: styles.cyan,
  green: styles.green,
  amber: styles.amber,
};

export function OperationsVisual({ heroScaled = false }: { heroScaled?: boolean }) {
  return (
    <div
      className={styles.workflowVisual}
      data-hero-scaled={heroScaled ? "" : undefined}
      aria-label="Animated business workflow solutions loop"
    >
      <div className={styles.visualGlow} aria-hidden />
      <div className={styles.workflowShell}>
        <header className={styles.shellHeader}>
          <div>
            <span>Business Workflow Solutions Loop</span>
            <strong>Organize the work before it gets missed.</strong>
          </div>
          <em>Live status</em>
        </header>

        <div className={styles.sceneViewport}>
          <div className={styles.sceneTrack}>
            {scenes.map((scene) => (
              <section className={styles.scene} key={scene.title} aria-label={scene.title}>
                <div className={styles.sceneIntro}>
                  <span>{scene.eyebrow}</span>
                  <h3>{scene.title}</h3>
                  <p>{scene.summary}</p>
                </div>

                <div className={styles.flowRow} aria-label="Workflow from inquiry to report">
                  {flowSteps.map((step, index) => (
                    <div
                      className={`${styles.flowStep} ${index <= scene.activeStep ? styles.flowStepActive : ""}`}
                      key={`${scene.title}-${step}`}
                    >
                      <span>{index + 1}</span>
                      <strong>{step}</strong>
                    </div>
                  ))}
                </div>

                <div className={styles.contentGrid}>
                  <article className={styles.inquiryCard}>
                    <span>Business item</span>
                    <strong>{scene.item}</strong>
                    <div className={styles.chipRow}>
                      {scene.chips.map((chip) => (
                        <em
                          className={accentClass[chip.accent]}
                          key={`${scene.title}-${chip.label}`}
                        >
                          {chip.label}
                        </em>
                      ))}
                    </div>
                  </article>

                  <div className={styles.taskStack}>
                    {scene.cards.map((card) => (
                      <article
                        className={`${styles.taskCard} ${accentClass[card.accent]}`}
                        key={`${scene.title}-${card.title}`}
                      >
                        <span>{card.label}</span>
                        <strong>{card.title}</strong>
                        <p>{card.meta}</p>
                      </article>
                    ))}
                  </div>

                  <article className={styles.reportCard}>
                    <span>Report snapshot</span>
                    <div className={styles.reportMetrics}>
                      {scene.report.map((metric) => (
                        <div key={`${scene.title}-${metric.label}`}>
                          <strong className={accentClass[metric.accent]}>{metric.value}</strong>
                          <em>{metric.label}</em>
                        </div>
                      ))}
                    </div>
                    <p>Status updated and ready to share.</p>
                  </article>
                </div>
              </section>
            ))}
          </div>
        </div>
      </div>

      <div className={styles.sceneDots} aria-hidden>
        {scenes.map((scene, index) => (
          <span key={scene.title} style={{ "--dot-index": index } as CSSProperties} />
        ))}
      </div>
    </div>
  );
}
