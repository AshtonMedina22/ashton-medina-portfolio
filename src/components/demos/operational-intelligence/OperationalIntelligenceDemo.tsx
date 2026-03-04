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
  { label: "Engagements This Week", value: "8", color: "#a78bfa", icon: HiOutlineCalendar },
  { label: "Overdue Tasks", value: "3", color: "#dc2626", icon: HiOutlineExclamation },
  { label: "Active Projects", value: "14", color: "#10b981", icon: HiOutlineFolder },
  { label: "Expected Revenue", value: "$84,200", color: "#22d3ee", icon: HiOutlineCurrencyDollar },
];

const TASKS_BY_STAGE = [
  { label: "To Do", value: 12, color: "#a78bfa" },
  { label: "In Progress", value: 8, color: "#fbbf24" },
  { label: "Waiting", value: 5, color: "#52525b" },
  { label: "Done", value: 22, color: "#10b981" },
];

const ENGAGEMENTS = [
  { id: "ENG-2024-0891", client: "TechCorp", type: "Type A", date: "Dec 10, 2024", status: "Confirmed", statusColor: "green", rep: "Sarah M.", revenue: "$12,400" },
  { id: "ENG-2024-0887", client: "Acme Inc", type: "Type B", date: "Dec 14, 2024", status: "Proposal Sent", statusColor: "blue", rep: "James K.", revenue: "$8,200" },
  { id: "ENG-2024-0882", client: "Acme Corp", type: "Type A", date: "Dec 18, 2024", status: "Contract Sent", statusColor: "yellow", rep: "Sarah M.", revenue: "$15,000" },
  { id: "ENG-2024-0879", client: "Rivera Co", type: "Type B", date: "Dec 22, 2024", status: "Confirmed", statusColor: "green", rep: "James K.", revenue: "$6,500" },
  { id: "ENG-2024-0875", client: "Winter Foundation", type: "Type A", date: "Dec 28, 2024", status: "Proposal Sent", statusColor: "blue", rep: "Sarah M.", revenue: "$22,000" },
];

const CALENDAR_EVENTS: Record<number, { label?: string; type: "pipeline" | "confirmed" }> = {
  5: { label: "ENG-2024-0875", type: "pipeline" },
  10: { label: "ENG-2024-0891 - TechCorp", type: "confirmed" },
  14: { label: "ENG-2024-0887 - Acme", type: "pipeline" },
  18: { label: "ENG-2024-0882", type: "confirmed" },
  22: { label: "ENG-2024-0879", type: "confirmed" },
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
    <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
      <div
        style={{
          width: 140,
          height: 140,
          borderRadius: "50%",
          background: `conic-gradient(${conicParts})`,
          position: "relative",
          marginBottom: "1rem",
        }}
      >
        <div
          style={{
            position: "absolute",
            inset: "50%",
            transform: "translate(-50%, -50%)",
            width: 70,
            height: 70,
            borderRadius: "50%",
            backgroundColor: "#1a1625",
            border: "2px solid #2e1064",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            fontSize: "0.875rem",
            fontWeight: 700,
            color: "#f5f3ff",
          }}
        >
          {total} Tasks
        </div>
      </div>
      <div style={{ display: "flex", flexDirection: "column", gap: "0.5rem", width: "100%" }}>
        {TASKS_BY_STAGE.map((t) => (
          <div key={t.label} style={{ display: "flex", alignItems: "center", gap: "0.5rem", fontSize: "0.8125rem" }}>
            <span style={{ width: 12, height: 12, borderRadius: 3, backgroundColor: t.color, flexShrink: 0 }} />
            <span style={{ fontWeight: 500, color: "#f5f3ff" }}>{t.label}</span>
            <span style={{ color: "#a1a1aa", marginLeft: "auto" }}>{t.value}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

function EngagementCalendar() {
  const year = 2024;
  const month = 12;
  const daysInMonth = 31;
  const firstDay = 0; // Sunday

  const weekdays = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
  const blanks = Array(firstDay).fill(null);
  const days = Array.from({ length: daysInMonth }, (_, i) => i + 1);
  const allDays = [...blanks, ...days];

  return (
    <div>
      <div style={{ fontSize: "0.875rem", fontWeight: 600, color: "#f5f3ff", marginBottom: "0.75rem" }}>
        December 2024
      </div>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(7, 1fr)", gap: "2px", fontSize: "0.75rem" }}>
        {weekdays.map((d) => (
          <div key={d} style={{ padding: "0.35rem", fontWeight: 600, color: "#a1a1aa", textAlign: "center" }}>
            {d}
          </div>
        ))}
        {allDays.map((d, i) => {
          if (d === null) return <div key={`blank-${i}`} />;
          const evt = CALENDAR_EVENTS[d];
          return (
            <div
              key={d}
              style={{
                padding: "0.5rem",
                minHeight: 48,
                backgroundColor: "#27272a",
                border: "1px solid #3f3f46",
                borderRadius: 4,
              }}
            >
              <div style={{ fontWeight: 500, color: "#f5f3ff", marginBottom: evt ? "0.25rem" : 0 }}>{d}</div>
              {evt && (
                <div style={{ display: "flex", flexDirection: "column", gap: "0.2rem", marginTop: "0.2rem" }}>
                  <div
                    style={{
                      width: 6,
                      height: 6,
                      borderRadius: "50%",
                      backgroundColor: evt.type === "pipeline" ? "#a78bfa" : "#10b981",
                    }}
                  />
                  {evt.label && (
                    <div style={{ fontSize: "0.75rem", color: "#a1a1aa", lineHeight: 1.2 }}>{evt.label}</div>
                  )}
                </div>
              )}
            </div>
          );
        })}
      </div>
      <div style={{ display: "flex", gap: "1rem", marginTop: "0.75rem", fontSize: "0.75rem", color: "#a1a1aa" }}>
        <span style={{ display: "flex", alignItems: "center", gap: "0.35rem" }}>
          <span style={{ width: 8, height: 8, borderRadius: "50%", backgroundColor: "#a78bfa" }} /> Pipeline
        </span>
        <span style={{ display: "flex", alignItems: "center", gap: "0.35rem" }}>
          <span style={{ width: 8, height: 8, borderRadius: "50%", backgroundColor: "#10b981" }} /> Confirmed
        </span>
      </div>
    </div>
  );
}

export function OperationalIntelligenceDemo() {
  return (
    <div className={styles.demo}>
      {/* Top Bar */}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          flexWrap: "wrap",
          gap: "1rem",
          paddingBottom: "1rem",
          borderBottom: "1px solid #2e1064",
        }}
      >
        <h1 style={{ fontSize: "1.25rem", fontWeight: 700, color: "#f5f3ff", margin: 0 }}>
          Operations Dashboard
        </h1>
        <div style={{ display: "flex", flexWrap: "wrap", gap: "0.25rem" }}>
          {TABS.map((tab) => (
            <button
              key={tab}
              type="button"
              style={{
                padding: "0.5rem 0.875rem",
                fontSize: "0.8125rem",
                fontWeight: tab === "Engagements" ? 700 : 600,
                color: tab === "Engagements" ? "#09090b" : "#a1a1aa",
                backgroundColor: tab === "Engagements" ? "#a78bfa" : "#27272a",
                border: tab === "Engagements" ? "none" : "1px solid #3f3f46",
                borderRadius: "0.375rem",
                cursor: "pointer",
              }}
            >
              {tab}
            </button>
          ))}
        </div>
        <div style={{ marginLeft: "auto", display: "flex", alignItems: "center", gap: "0.5rem" }}>
          <select
            style={{
              padding: "0.4rem 0.75rem",
              fontSize: "0.8125rem",
              border: "1px solid #3f3f46",
              borderRadius: "0.25rem",
              backgroundColor: "#27272a",
              color: "#fafafa",
            }}
          >
            <option>This Month</option>
          </select>
          <select
            style={{
              padding: "0.4rem 0.75rem",
              fontSize: "0.8125rem",
              border: "1px solid #3f3f46",
              borderRadius: "0.25rem",
              backgroundColor: "#27272a",
              color: "#fafafa",
            }}
          >
            <option>All Projects</option>
            <option>Q4 Active Engagements</option>
            <option>My Team Only</option>
            <option>High Value ($20k+)</option>
          </select>
          <button
            type="button"
            style={{
              padding: "0.4rem",
              border: "1px solid #3f3f46",
              borderRadius: "0.25rem",
              backgroundColor: "#27272a",
              cursor: "pointer",
              color: "#a1a1aa",
            }}
          >
            <HiOutlineRefresh size={18} />
          </button>
          <button
            type="button"
            style={{
              padding: "0.4rem 0.75rem",
              fontSize: "0.8125rem",
              border: "1px solid #3f3f46",
              borderRadius: "0.25rem",
              backgroundColor: "#27272a",
              cursor: "pointer",
              display: "flex",
              alignItems: "center",
              gap: "0.35rem",
              color: "#a1a1aa",
            }}
          >
            <HiOutlineDownload size={16} /> Export
          </button>
          <span
            style={{
              padding: "0.35rem 0.625rem",
              fontSize: "0.75rem",
              fontWeight: 600,
              color: "#10b981",
              backgroundColor: "#10b98115",
              border: "1px solid #10b98130",
              borderRadius: "0.25rem",
            }}
          >
            Auto-email: Weekly → leadership@company.com
          </span>
        </div>
      </div>

      {/* Row 1 - KPI Cards */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(4, 1fr)",
          gap: "1rem",
        }}
      >
        {KPI_CARDS.map((kpi) => (
          <div
            key={kpi.label}
            style={{
              padding: "1.25rem",
              backgroundColor: kpi.color + "15",
              border: `1px solid ${kpi.color}30`,
              color: "#f5f3ff",
              borderRadius: "0.5rem",
              boxShadow: "0 1px 3px rgba(0,0,0,0.08)",
              cursor: "pointer",
              transition: "transform 0.15s ease",
            }}
            onMouseOver={(e) => {
              e.currentTarget.style.transform = "translateY(-2px)";
            }}
            onMouseOut={(e) => {
              e.currentTarget.style.transform = "translateY(0)";
            }}
          >
            <div style={{ display: "flex", alignItems: "flex-start", justifyContent: "space-between" }}>
              <div>
                <div style={{ fontSize: "0.75rem", opacity: 0.9, marginBottom: "0.25rem", color: "#a1a1aa" }}>{kpi.label}</div>
                <div style={{ fontSize: "1.5rem", fontWeight: 700, color: kpi.color }}>{kpi.value}</div>
              </div>
              <kpi.icon size={24} style={{ opacity: 0.8, color: kpi.color }} />
            </div>
          </div>
        ))}
      </div>

      {/* Row 2 - Calendar + Doughnut */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "1.5fr 1fr",
          gap: "1.5rem",
        }}
      >
        <div
          style={{
            padding: "1.25rem",
            backgroundColor: "#1a1625",
            border: "1px solid #2e1064",
            borderRadius: "0.5rem",
            boxShadow: "0 1px 3px rgba(0,0,0,0.06)",
          }}
        >
          <EngagementCalendar />
        </div>
        <div
          style={{
            padding: "1.25rem",
            backgroundColor: "#1a1625",
            border: "1px solid #2e1064",
            borderRadius: "0.5rem",
            boxShadow: "0 1px 3px rgba(0,0,0,0.06)",
          }}
        >
          <div style={{ fontSize: "0.875rem", fontWeight: 600, color: "#f5f3ff", marginBottom: "1rem" }}>
            Tasks by Stage
          </div>
          <TasksDoughnut />
        </div>
      </div>

      {/* Row 3 - Table */}
      <div
        style={{
          padding: "1.25rem",
          backgroundColor: "#1a1625",
          border: "1px solid #2e1064",
          borderRadius: "0.5rem",
          boxShadow: "0 1px 3px rgba(0,0,0,0.06)",
        }}
      >
        <h3 style={{ fontSize: "1rem", fontWeight: 600, color: "#f5f3ff", margin: "0 0 1rem 0" }}>
          Upcoming Engagements
        </h3>
        <table style={{ width: "100%", borderCollapse: "collapse", fontSize: "0.875rem" }}>
          <thead>
            <tr style={{ borderBottom: "1px solid #2e1064" }}>
              <th style={{ textAlign: "left", padding: "0.5rem 0.75rem", fontWeight: 600, color: "#71717a", fontSize: "0.6875rem", textTransform: "uppercase", letterSpacing: "0.06em" }}>Engagement ID</th>
              <th style={{ textAlign: "left", padding: "0.5rem 0.75rem", fontWeight: 600, color: "#71717a", fontSize: "0.6875rem", textTransform: "uppercase", letterSpacing: "0.06em" }}>Client</th>
              <th style={{ textAlign: "left", padding: "0.5rem 0.75rem", fontWeight: 600, color: "#71717a", fontSize: "0.6875rem", textTransform: "uppercase", letterSpacing: "0.06em" }}>Type</th>
              <th style={{ textAlign: "left", padding: "0.5rem 0.75rem", fontWeight: 600, color: "#71717a", fontSize: "0.6875rem", textTransform: "uppercase", letterSpacing: "0.06em" }}>Date</th>
              <th style={{ textAlign: "left", padding: "0.5rem 0.75rem", fontWeight: 600, color: "#71717a", fontSize: "0.6875rem", textTransform: "uppercase", letterSpacing: "0.06em" }}>Status</th>
              <th style={{ textAlign: "left", padding: "0.5rem 0.75rem", fontWeight: 600, color: "#71717a", fontSize: "0.6875rem", textTransform: "uppercase", letterSpacing: "0.06em" }}>Rep</th>
              <th style={{ textAlign: "right", padding: "0.5rem 0.75rem", fontWeight: 600, color: "#71717a", fontSize: "0.6875rem", textTransform: "uppercase", letterSpacing: "0.06em" }}>Revenue</th>
            </tr>
          </thead>
          <tbody>
            {ENGAGEMENTS.map((row) => (
              <tr
                key={row.id}
                style={{
                  borderBottom: "1px solid #27272a",
                  cursor: "pointer",
                }}
              >
                <td style={{ padding: "0.5rem 0.75rem", color: "#fafafa" }}>{row.id}</td>
                <td style={{ padding: "0.5rem 0.75rem", color: "#fafafa" }}>{row.client}</td>
                <td style={{ padding: "0.5rem 0.75rem", color: "#fafafa" }}>{row.type}</td>
                <td style={{ padding: "0.5rem 0.75rem", color: "#fafafa" }}>{row.date}</td>
                <td style={{ padding: "0.5rem 0.75rem" }}>
                  <span
                    style={{
                      padding: "0.2rem 0.5rem",
                      borderRadius: "0.25rem",
                      fontSize: "0.75rem",
                      fontWeight: 500,
                      backgroundColor:
                        row.statusColor === "green"
                          ? "#10b98115"
                          : row.statusColor === "blue"
                            ? "#a78bfa15"
                            : "#fbbf2415",
                      color:
                        row.statusColor === "green"
                          ? "#10b981"
                          : row.statusColor === "blue"
                            ? "#a78bfa"
                            : "#fbbf24",
                    }}
                  >
                    {row.status}
                  </span>
                </td>
                <td style={{ padding: "0.5rem 0.75rem", color: "#fafafa" }}>{row.rep}</td>
                <td style={{ padding: "0.5rem 0.75rem", textAlign: "right", fontWeight: 500, color: "#fafafa" }}>{row.revenue}</td>
              </tr>
            ))}
          </tbody>
        </table>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            marginTop: "1rem",
            paddingTop: "0.75rem",
            borderTop: "1px solid #2e1064",
            fontSize: "0.8125rem",
            color: "#a1a1aa",
          }}
        >
          <span>Showing 1-5 of 23</span>
          <div style={{ display: "flex", gap: "0.5rem" }}>
            <button
              type="button"
              style={{
                padding: "0.25rem 0.5rem",
                border: "1px solid #3f3f46",
                borderRadius: "0.25rem",
                backgroundColor: "#27272a",
                cursor: "pointer",
                color: "#a1a1aa",
              }}
            >
              ←
            </button>
            <button
              type="button"
              style={{
                padding: "0.25rem 0.5rem",
                border: "1px solid #3f3f46",
                borderRadius: "0.25rem",
                backgroundColor: "#27272a",
                cursor: "pointer",
                color: "#a1a1aa",
              }}
            >
              →
            </button>
          </div>
        </div>
      </div>

    </div>
  );
}
