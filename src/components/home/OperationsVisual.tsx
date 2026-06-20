import type { CSSProperties } from "react";
import styles from "./OperationsVisual.module.scss";

type PillTone = "violet" | "cyan" | "green" | "amber" | "rose";

type ProductScene = {
  kicker: string;
  title: string;
  nav: string[];
  metrics: Array<{ label: string; value: string; tone: PillTone }>;
  activity: Array<{ title: string; detail: string; status: string; tone: PillTone }>;
  chart: number[];
  feature: {
    label: string;
    title: string;
    body: string;
    tone: PillTone;
  };
  mobile: {
    title: string;
    value: string;
    label: string;
  };
};

const scenes: ProductScene[] = [
  {
    kicker: "SaaS Command Center",
    title: "Live product dashboard for delivery, reporting, and integrations.",
    nav: ["Dashboard", "Projects", "Automation", "Reports", "Integrations"],
    metrics: [
      { label: "Projects", value: "24", tone: "violet" },
      { label: "Automation", value: "18", tone: "cyan" },
      { label: "Reports", value: "42", tone: "green" },
    ],
    activity: [
      {
        title: "Data synced 2m ago",
        detail: "CRM, tasks, and analytics connected",
        status: "Live",
        tone: "green",
      },
      {
        title: "Integration check",
        detail: "Webhook queue processed",
        status: "Synced",
        tone: "cyan",
      },
      {
        title: "Dashboard refresh",
        detail: "Weekly product KPIs updated",
        status: "Ready",
        tone: "violet",
      },
    ],
    chart: [38, 52, 45, 68, 74, 88],
    feature: {
      label: "Command Center",
      title: "One interface for projects, workflows, and reports.",
      body: "Readable product UI for business systems, delivery tracking, and analytics.",
      tone: "violet",
    },
    mobile: {
      title: "Analytics",
      value: "92%",
      label: "Adoption",
    },
  },
  {
    kicker: "Workflow Automation",
    title: "Requests move from intake to launch with automated routing.",
    nav: ["Intake", "Review", "Build", "Launch", "Tasks"],
    metrics: [
      { label: "Intake", value: "12", tone: "cyan" },
      { label: "Review", value: "7", tone: "amber" },
      { label: "Launch", value: "5", tone: "green" },
    ],
    activity: [
      {
        title: "Auto-route request",
        detail: "New workflow assigned by rules",
        status: "Active",
        tone: "cyan",
      },
      {
        title: "Build handoff",
        detail: "Tasks generated for delivery",
        status: "Ready",
        tone: "green",
      },
      {
        title: "QA reminder",
        detail: "Review owner notified",
        status: "Synced",
        tone: "violet",
      },
    ],
    chart: [22, 34, 48, 62, 76, 90],
    feature: {
      label: "Automation Trigger",
      title: "If request is approved, create tasks and notify owners.",
      body: "Connector lines, status chips, and routing logic stay visible to users.",
      tone: "cyan",
    },
    mobile: {
      title: "Workflow",
      value: "Active",
      label: "Auto-route request",
    },
  },
  {
    kicker: "Implementation Tracker",
    title: "Discovery, configuration, testing, and rollout in one build view.",
    nav: ["Discovery", "Configuration", "Testing", "Rollout", "Deployments"],
    metrics: [
      { label: "Discovery", value: "Done", tone: "green" },
      { label: "Testing", value: "9", tone: "violet" },
      { label: "Rollout", value: "82%", tone: "cyan" },
    ],
    activity: [
      {
        title: "Launch readiness 82%",
        detail: "Configuration and testing on track",
        status: "Ready",
        tone: "green",
      },
      {
        title: "Blocker resolved",
        detail: "CRM field mapping approved",
        status: "Synced",
        tone: "cyan",
      },
      {
        title: "Rollout checklist",
        detail: "Training notes prepared",
        status: "Active",
        tone: "violet",
      },
    ],
    chart: [18, 42, 58, 64, 82, 82],
    feature: {
      label: "Implementation",
      title: "Launch readiness 82% with clear blockers and owners.",
      body: "A compact tracker keeps discovery, testing, rollout, and adoption aligned.",
      tone: "green",
    },
    mobile: {
      title: "Rollout",
      value: "82%",
      label: "Launch readiness",
    },
  },
  {
    kicker: "Reporting & Analytics",
    title: "Weekly analytics translate activity into decision-ready reporting.",
    nav: ["Analytics", "Reports", "CRM", "Tasks", "Dashboard"],
    metrics: [
      { label: "Cycle Time", value: "-31%", tone: "green" },
      { label: "Adoption", value: "92%", tone: "cyan" },
      { label: "Open Items", value: "14", tone: "amber" },
    ],
    activity: [
      {
        title: "Weekly report generated",
        detail: "Leadership summary ready",
        status: "Ready",
        tone: "green",
      },
      {
        title: "Analytics refresh",
        detail: "Cycle Time and Adoption updated",
        status: "Live",
        tone: "cyan",
      },
      {
        title: "Open Items review",
        detail: "Priority tasks grouped by owner",
        status: "Active",
        tone: "amber",
      },
    ],
    chart: [34, 46, 62, 58, 78, 94],
    feature: {
      label: "Report Summary",
      title: "Weekly report generated from live workflow data.",
      body: "Clean analytics panels make project health and adoption easy to scan.",
      tone: "cyan",
    },
    mobile: {
      title: "Reports",
      value: "Live",
      label: "Weekly report generated",
    },
  },
];

const toneClass: Record<PillTone, string> = {
  violet: styles.toneViolet,
  cyan: styles.toneCyan,
  green: styles.toneGreen,
  amber: styles.toneAmber,
  rose: styles.toneRose,
};

export function OperationsVisual({ heroScaled = false }: { heroScaled?: boolean }) {
  return (
    <div
      className={styles.productVisual}
      data-hero-scaled={heroScaled ? "" : undefined}
      aria-label="Animated SaaS product demo preview"
    >
      <div className={styles.frameGlow} aria-hidden />
      <div className={styles.productShell}>
        <div className={styles.windowBar} aria-hidden>
          <span />
          <span />
          <span />
        </div>

        <div className={styles.sceneViewport}>
          <div className={styles.sceneTrack}>
            {scenes.map((scene) => (
              <section className={styles.scene} key={scene.kicker} aria-label={scene.kicker}>
                <aside className={styles.miniRail} aria-label={`${scene.kicker} navigation`}>
                  <div className={styles.railMark}>AM</div>
                  {scene.nav.map((item, index) => (
                    <span key={item} className={index === 0 ? styles.activeNavItem : undefined}>
                      {item}
                    </span>
                  ))}
                </aside>

                <div className={styles.appCanvas}>
                  <header className={styles.appHeader}>
                    <div>
                      <span className={styles.sceneKicker}>{scene.kicker}</span>
                      <h3>{scene.title}</h3>
                    </div>
                    <span className={styles.liveBadge}>Live</span>
                  </header>

                  <div className={styles.metricGrid}>
                    {scene.metrics.map((metric) => (
                      <div className={styles.metricCard} key={`${scene.kicker}-${metric.label}`}>
                        <span>{metric.label}</span>
                        <strong className={toneClass[metric.tone]}>{metric.value}</strong>
                      </div>
                    ))}
                  </div>

                  <div className={styles.workspaceGrid}>
                    <div className={styles.activityPanel}>
                      <div className={styles.panelTitle}>Activity</div>
                      {scene.activity.map((item) => (
                        <div className={styles.activityRow} key={`${scene.kicker}-${item.title}`}>
                          <div>
                            <strong>{item.title}</strong>
                            <span>{item.detail}</span>
                          </div>
                          <em className={toneClass[item.tone]}>{item.status}</em>
                        </div>
                      ))}
                    </div>

                    <div className={styles.chartPanel}>
                      <div className={styles.panelTitle}>Trend</div>
                      <div className={styles.chartBars} aria-hidden>
                        {scene.chart.map((height, index) => (
                          <span
                            key={`${scene.kicker}-bar-${index}`}
                            style={{ "--bar-height": `${height}%` } as CSSProperties}
                          />
                        ))}
                      </div>
                    </div>
                  </div>

                  <div className={`${styles.featureCard} ${toneClass[scene.feature.tone]}`}>
                    <span>{scene.feature.label}</span>
                    <strong>{scene.feature.title}</strong>
                    <p>{scene.feature.body}</p>
                  </div>

                  <div className={styles.mobileCard}>
                    <span>{scene.mobile.title}</span>
                    <strong>{scene.mobile.value}</strong>
                    <em>{scene.mobile.label}</em>
                  </div>

                  <div className={styles.connectorLayer} aria-hidden>
                    <span className={styles.connectorOne} />
                    <span className={styles.connectorTwo} />
                    <span className={styles.connectorDot} />
                  </div>
                </div>
              </section>
            ))}
          </div>
        </div>
      </div>

      <div className={styles.sceneDots} aria-hidden>
        {scenes.map((scene, index) => (
          <span key={scene.kicker} style={{ "--dot-index": index } as CSSProperties} />
        ))}
      </div>
    </div>
  );
}
