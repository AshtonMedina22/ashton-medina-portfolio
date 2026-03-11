"use client";

import {
  HiOutlineCalendar,
  HiOutlineExclamation,
  HiOutlineFolder,
  HiOutlineCurrencyDollar,
  HiOutlineRefresh,
  HiOutlineDownload,
} from "react-icons/hi";
import styles from "./operational-intelligence-demo.module.scss";

const TABS = ["My Tasks", "Team", "Engagements", "Pipeline", "Vendors", "Revenue", "Custom"];

const KPI_CARDS = [
  { label: "Engagements This Week", value: "8", variant: "Purple" as const, icon: HiOutlineCalendar },
  { label: "Overdue Tasks", value: "3", variant: "Red" as const, icon: HiOutlineExclamation },
  { label: "Active Projects", value: "14", variant: "Green" as const, icon: HiOutlineFolder },
  { label: "Expected Revenue", value: "$84,200", variant: "Cyan" as const, icon: HiOutlineCurrencyDollar },
];

const LEGEND_DOT_CLASSES = ["colorDotToDo", "colorDotInProgress", "colorDotWaiting", "colorDotDone"] as const;

const TASKS_BY_STAGE = [
  { label: "To Do", value: 12, color: "#a78bfa" },
  { label: "In Progress", value: 8, color: "#fbbf24" },
  { label: "Waiting", value: 5, color: "#52525b" },
  { label: "Done", value: 22, color: "#10b981" },
];

const ENGAGEMENTS = [
  { id: "WO-0891", client: "TechCorp", type: "Type A", date: "Dec 10, 2026", status: "Confirmed", statusColor: "green", rep: "Sarah M.", revenue: "$12,400" },
  { id: "WO-0887", client: "Acme Inc", type: "Type B", date: "Dec 14, 2026", status: "Proposal Sent", statusColor: "blue", rep: "James K.", revenue: "$8,200" },
  { id: "WO-0882", client: "Acme Corp", type: "Type A", date: "Dec 18, 2026", status: "Contract Sent", statusColor: "yellow", rep: "Sarah M.", revenue: "$15,000" },
  { id: "WO-0879", client: "Rivera Co", type: "Type B", date: "Dec 22, 2026", status: "Confirmed", statusColor: "green", rep: "James K.", revenue: "$6,500" },
  { id: "WO-0875", client: "Winter Foundation", type: "Type A", date: "Dec 28, 2026", status: "Proposal Sent", statusColor: "blue", rep: "Sarah M.", revenue: "$22,000" },
];

const CALENDAR_EVENTS: Record<number, { label?: string; type: "pipeline" | "confirmed" }> = {
  5: { label: "WO-0875", type: "pipeline" },
  10: { label: "WO-0891 - TechCorp", type: "confirmed" },
  14: { label: "WO-0887 - Acme", type: "pipeline" },
  18: { label: "WO-0882", type: "confirmed" },
  22: { label: "WO-0879", type: "confirmed" },
  26: { type: "pipeline" },
  28: { type: "confirmed" },
};

function TasksDoughnut() {
  const total = TASKS_BY_STAGE.reduce((s, t) => s + t.value, 0);
  let offset = 0;
  const segments = TASKS_BY_STAGE.map((t) => {
    const pct = (t.value / total) * 100;
    const seg = { ...t, pct, offset };
    offset += pct;
    return seg;
  });

  const conicParts = segments.map((s) => `${s.color} ${s.offset}% ${s.offset + s.pct}%`).join(", ");

  return (
    <div className={styles.tasksDoughnutContainer}>
      <div
        className={styles.doughnutChart}
        style={{ background: `conic-gradient(${conicParts})` }}
      >
        <div className={styles.doughnutCenterText}>
          {total} Tasks
        </div>
      </div>
      <div className={styles.doughnutLegend}>
        {TASKS_BY_STAGE.map((t, i) => (
          <div key={t.label} className={styles.legendItem}>
            <span className={`${styles.colorDot} ${styles[LEGEND_DOT_CLASSES[i]]}`} />
            <span className={styles.legendLabel}>{t.label}</span>
            <span className={styles.legendValue}>{t.value}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

function EngagementCalendar() {
  const year = 2026;
  const month = 12;
  const daysInMonth = 31;
  const firstDay = 0; // Sunday

  const weekdays = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
  const blanks = Array(firstDay).fill(null);
  const days = Array.from({ length: daysInMonth }, (_, i) => i + 1);
  const allDays = [...blanks, ...days];

  return (
    <div>
      <div className={styles.calendarHeader}>December 2026</div>
      <div className={styles.calendarGrid}>
        {weekdays.map((d) => (
          <div key={d} className={styles.weekday}>{d}</div>
        ))}
        {allDays.map((d, i) => {
          if (d === null) return <div key={`blank-${i}`} />;
          const evt = CALENDAR_EVENTS[d];
          return (
            <div key={d} className={styles.dayCell}>
              <div className={styles.dayNumber}>{d}</div>
              {evt && (
                <div className={styles.eventIndicator}>
                  <div className={evt.type === "pipeline" ? styles.eventDotPipeline : styles.eventDotConfirmed} />
                  {evt.label && <div className={styles.eventLabel}>{evt.label}</div>}
                </div>
              )}
            </div>
          );
        })}
      </div>
      <div className={styles.calendarLegend}>
        <span className={styles.calendarLegendItem}>
          <span className={`${styles.eventDot} ${styles.eventDotPipeline}`} /> Pipeline
        </span>
        <span className={styles.calendarLegendItem}>
          <span className={`${styles.eventDot} ${styles.eventDotConfirmed}`} /> Confirmed
        </span>
      </div>
    </div>
  );
}

export function OperationalIntelligenceDemo() {
  return (
    <div className={styles.shell}>
      <div className={styles.shellTopBar}>
        <div className={styles.windowDots} aria-hidden>
          <span />
          <span />
          <span />
        </div>
        <span className={styles.shellTitle}>Operational Intelligence Dashboard</span>
      </div>
      <div className={styles.demoContent}>
    <div className={styles.demo}>
      {/* Controls bar */}
      <div className={styles.controlsBar}>
        <h1 className={styles.controlsBarTitle}>Operations Dashboard</h1>
        <div className={styles.tabsContainer}>
          {TABS.map((tab) => (
            <button
              key={tab}
              type="button"
              className={tab === "Engagements" ? `${styles.tabBtn} ${styles.tabActive}` : styles.tabBtn}
            >
              {tab}
            </button>
          ))}
        </div>
        <div className={styles.filterExportGroup}>
          <select className={styles.selectFilter}>
            <option>This Month</option>
          </select>
          <select className={styles.selectFilter}>
            <option>All Projects</option>
            <option>Q4 Active Engagements</option>
            <option>My Team Only</option>
            <option>High Value ($20k+)</option>
          </select>
          <button type="button" className={styles.iconBtn}>
            <HiOutlineRefresh size={18} />
          </button>
          <button type="button" className={styles.exportBtn}>
            <HiOutlineDownload size={16} /> Export
          </button>
          <span className={styles.autoEmailBadge}>
            Auto-email: Weekly → leadership@company.com
          </span>
        </div>
      </div>

      {/* Row 1 - KPI Cards */}
      <div className={styles.kpiGrid}>
        {KPI_CARDS.map((kpi) => (
          <div
            key={kpi.label}
            className={`${styles.kpiCard} ${(styles as Record<string, string>)[`kpiCard${kpi.variant}`]}`}
          >
            <div className={styles.kpiCardContent}>
              <div>
                <div className={styles.kpiLabel}>{kpi.label}</div>
                <div className={styles.kpiValue}>{kpi.value}</div>
              </div>
              <kpi.icon size={24} className={styles.kpiIcon} />
            </div>
          </div>
        ))}
      </div>

      {/* Row 2 - Calendar + Doughnut */}
      <div className={styles.chartGrid}>
        <div className={styles.chartPanel}>
          <EngagementCalendar />
        </div>
        <div className={styles.chartPanel}>
          <div className={styles.chartPanelTitle}>Tasks by Stage</div>
          <TasksDoughnut />
        </div>
      </div>

      {/* Row 3 - Table */}
      <div className={styles.tablePanel}>
        <h3 className={styles.tablePanelTitle}>Upcoming Engagements</h3>
        <table className={styles.table}>
          <thead>
            <tr>
              <th>Engagement ID</th>
              <th>Client</th>
              <th>Type</th>
              <th>Date</th>
              <th>Status</th>
              <th>Rep</th>
              <th className={styles.tableCellRight}>Revenue</th>
            </tr>
          </thead>
          <tbody>
            {ENGAGEMENTS.map((row) => (
              <tr key={row.id}>
                <td>{row.id}</td>
                <td>{row.client}</td>
                <td>{row.type}</td>
                <td>{row.date}</td>
                <td>
                  <span className={`${styles.statusPill} ${row.statusColor === "green" ? styles.statusGreen : row.statusColor === "blue" ? styles.statusBlue : styles.statusYellow}`}>
                    {row.status}
                  </span>
                </td>
                <td>{row.rep}</td>
                <td className={styles.tableCellRight}>{row.revenue}</td>
              </tr>
            ))}
          </tbody>
        </table>
        <div className={styles.tablePagination}>
          <span>Showing 1-5 of 23</span>
          <div className={styles.paginationControls}>
            <button type="button" className={styles.paginationBtn}>←</button>
            <button type="button" className={styles.paginationBtn}>→</button>
          </div>
        </div>
      </div>

    </div>
      </div>
    </div>
  );
}
