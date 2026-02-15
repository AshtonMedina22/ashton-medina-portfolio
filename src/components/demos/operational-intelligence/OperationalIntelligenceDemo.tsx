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
  { label: "Engagements This Week", value: "8", color: "#2563eb", icon: HiOutlineCalendar },
  { label: "Overdue Tasks", value: "3", color: "#dc2626", icon: HiOutlineExclamation },
  { label: "Active Projects", value: "14", color: "#059669", icon: HiOutlineFolder },
  { label: "Expected Revenue", value: "$84,200", color: "#1e40af", icon: HiOutlineCurrencyDollar },
];

const TASKS_BY_STAGE = [
  { label: "To Do", value: 12, color: "#2563eb" },
  { label: "In Progress", value: 8, color: "#ca8a04" },
  { label: "Waiting", value: 5, color: "#6b7280" },
  { label: "Done", value: 22, color: "#059669" },
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
            backgroundColor: "#fff",
            border: "2px solid #e5e7eb",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            fontSize: "0.875rem",
            fontWeight: 700,
            color: "#111827",
          }}
        >
          {total} Tasks
        </div>
      </div>
      <div style={{ display: "flex", flexDirection: "column", gap: "0.5rem", width: "100%" }}>
        {TASKS_BY_STAGE.map((t) => (
          <div key={t.label} style={{ display: "flex", alignItems: "center", gap: "0.5rem", fontSize: "0.8125rem" }}>
            <span style={{ width: 12, height: 12, borderRadius: 3, backgroundColor: t.color, flexShrink: 0 }} />
            <span style={{ fontWeight: 500 }}>{t.label}</span>
            <span style={{ color: "#6b7280", marginLeft: "auto" }}>{t.value}</span>
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
      <div style={{ fontSize: "0.875rem", fontWeight: 600, color: "#374151", marginBottom: "0.75rem" }}>
        December 2024
      </div>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(7, 1fr)", gap: "2px", fontSize: "0.75rem" }}>
        {weekdays.map((d) => (
          <div key={d} style={{ padding: "0.35rem", fontWeight: 600, color: "#6b7280", textAlign: "center" }}>
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
                backgroundColor: "#fff",
                border: "1px solid #e5e7eb",
                borderRadius: 4,
              }}
            >
              <div style={{ fontWeight: 500, color: "#374151", marginBottom: evt ? "0.25rem" : 0 }}>{d}</div>
              {evt && (
                <div style={{ display: "flex", flexDirection: "column", gap: "0.2rem", marginTop: "0.2rem" }}>
                  <div
                    style={{
                      width: 6,
                      height: 6,
                      borderRadius: "50%",
                      backgroundColor: evt.type === "pipeline" ? "#2563eb" : "#059669",
                    }}
                  />
                  {evt.label && (
                    <div style={{ fontSize: "0.65rem", color: "#6b7280", lineHeight: 1.2 }}>{evt.label}</div>
                  )}
                </div>
              )}
            </div>
          );
        })}
      </div>
      <div style={{ display: "flex", gap: "1rem", marginTop: "0.75rem", fontSize: "0.75rem", color: "#6b7280" }}>
        <span style={{ display: "flex", alignItems: "center", gap: "0.35rem" }}>
          <span style={{ width: 8, height: 8, borderRadius: "50%", backgroundColor: "#2563eb" }} /> Pipeline
        </span>
        <span style={{ display: "flex", alignItems: "center", gap: "0.35rem" }}>
          <span style={{ width: 8, height: 8, borderRadius: "50%", backgroundColor: "#059669" }} /> Confirmed
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
          borderBottom: "1px solid #e5e7eb",
        }}
      >
        <h1 style={{ fontSize: "1.25rem", fontWeight: 700, color: "#111827", margin: 0 }}>
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
                color: tab === "Engagements" ? "#fff" : "#4b5563",
                backgroundColor: tab === "Engagements" ? "#2563eb" : "#f3f4f6",
                border: tab === "Engagements" ? "none" : "1px solid #e5e7eb",
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
              border: "1px solid #e5e7eb",
              borderRadius: "0.25rem",
              backgroundColor: "#fff",
            }}
          >
            <option>This Month</option>
          </select>
          <select
            style={{
              padding: "0.4rem 0.75rem",
              fontSize: "0.8125rem",
              border: "1px solid #e5e7eb",
              borderRadius: "0.25rem",
              backgroundColor: "#fff",
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
              border: "1px solid #e5e7eb",
              borderRadius: "0.25rem",
              backgroundColor: "#fff",
              cursor: "pointer",
            }}
          >
            <HiOutlineRefresh size={18} />
          </button>
          <button
            type="button"
            style={{
              padding: "0.4rem 0.75rem",
              fontSize: "0.8125rem",
              border: "1px solid #e5e7eb",
              borderRadius: "0.25rem",
              backgroundColor: "#fff",
              cursor: "pointer",
              display: "flex",
              alignItems: "center",
              gap: "0.35rem",
            }}
          >
            <HiOutlineDownload size={16} /> Export
          </button>
          <span
            style={{
              padding: "0.35rem 0.625rem",
              fontSize: "0.75rem",
              fontWeight: 600,
              color: "#059669",
              backgroundColor: "#d1fae5",
              border: "1px solid #86efac",
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
              backgroundColor: kpi.color,
              color: "#fff",
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
                <div style={{ fontSize: "0.75rem", opacity: 0.9, marginBottom: "0.25rem" }}>{kpi.label}</div>
                <div style={{ fontSize: "1.5rem", fontWeight: 700 }}>{kpi.value}</div>
              </div>
              <kpi.icon size={24} style={{ opacity: 0.8 }} />
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
            backgroundColor: "#fff",
            border: "1px solid #e5e7eb",
            borderRadius: "0.5rem",
            boxShadow: "0 1px 3px rgba(0,0,0,0.06)",
          }}
        >
          <EngagementCalendar />
        </div>
        <div
          style={{
            padding: "1.25rem",
            backgroundColor: "#fff",
            border: "1px solid #e5e7eb",
            borderRadius: "0.5rem",
            boxShadow: "0 1px 3px rgba(0,0,0,0.06)",
          }}
        >
          <div style={{ fontSize: "0.875rem", fontWeight: 600, color: "#374151", marginBottom: "1rem" }}>
            Tasks by Stage
          </div>
          <TasksDoughnut />
        </div>
      </div>

      {/* Row 3 - Table */}
      <div
        style={{
          padding: "1.25rem",
          backgroundColor: "#fff",
          border: "1px solid #e5e7eb",
          borderRadius: "0.5rem",
          boxShadow: "0 1px 3px rgba(0,0,0,0.06)",
        }}
      >
        <h3 style={{ fontSize: "1rem", fontWeight: 600, color: "#374151", margin: "0 0 1rem 0" }}>
          Upcoming Engagements
        </h3>
        <table style={{ width: "100%", borderCollapse: "collapse", fontSize: "0.875rem" }}>
          <thead>
            <tr style={{ borderBottom: "1px solid #e5e7eb" }}>
              <th style={{ textAlign: "left", padding: "0.5rem 0.75rem", fontWeight: 600 }}>Engagement ID</th>
              <th style={{ textAlign: "left", padding: "0.5rem 0.75rem", fontWeight: 600 }}>Client</th>
              <th style={{ textAlign: "left", padding: "0.5rem 0.75rem", fontWeight: 600 }}>Type</th>
              <th style={{ textAlign: "left", padding: "0.5rem 0.75rem", fontWeight: 600 }}>Date</th>
              <th style={{ textAlign: "left", padding: "0.5rem 0.75rem", fontWeight: 600 }}>Status</th>
              <th style={{ textAlign: "left", padding: "0.5rem 0.75rem", fontWeight: 600 }}>Assigned Rep</th>
              <th style={{ textAlign: "right", padding: "0.5rem 0.75rem", fontWeight: 600 }}>Revenue</th>
            </tr>
          </thead>
          <tbody>
            {ENGAGEMENTS.map((row) => (
              <tr
                key={row.id}
                style={{
                  borderBottom: "1px solid #f3f4f6",
                  cursor: "pointer",
                }}
              >
                <td style={{ padding: "0.5rem 0.75rem" }}>{row.id}</td>
                <td style={{ padding: "0.5rem 0.75rem" }}>{row.client}</td>
                <td style={{ padding: "0.5rem 0.75rem" }}>{row.type}</td>
                <td style={{ padding: "0.5rem 0.75rem" }}>{row.date}</td>
                <td style={{ padding: "0.5rem 0.75rem" }}>
                  <span
                    style={{
                      padding: "0.2rem 0.5rem",
                      borderRadius: "0.25rem",
                      fontSize: "0.75rem",
                      fontWeight: 500,
                      backgroundColor:
                        row.statusColor === "green"
                          ? "#d1fae5"
                          : row.statusColor === "blue"
                            ? "#dbeafe"
                            : "#fef3c7",
                      color:
                        row.statusColor === "green"
                          ? "#059669"
                          : row.statusColor === "blue"
                            ? "#2563eb"
                            : "#ca8a04",
                    }}
                  >
                    {row.status}
                  </span>
                </td>
                <td style={{ padding: "0.5rem 0.75rem" }}>{row.rep}</td>
                <td style={{ padding: "0.5rem 0.75rem", textAlign: "right", fontWeight: 500 }}>{row.revenue}</td>
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
            borderTop: "1px solid #e5e7eb",
            fontSize: "0.8125rem",
            color: "#6b7280",
          }}
        >
          <span>Showing 1-5 of 23</span>
          <div style={{ display: "flex", gap: "0.5rem" }}>
            <button
              type="button"
              style={{
                padding: "0.25rem 0.5rem",
                border: "1px solid #e5e7eb",
                borderRadius: "0.25rem",
                backgroundColor: "#fff",
                cursor: "pointer",
              }}
            >
              ←
            </button>
            <button
              type="button"
              style={{
                padding: "0.25rem 0.5rem",
                border: "1px solid #e5e7eb",
                borderRadius: "0.25rem",
                backgroundColor: "#fff",
                cursor: "pointer",
              }}
            >
              →
            </button>
          </div>
        </div>
      </div>

      {/* Tab preview — second view thumbnail */}
      <div
        style={{
          display: "flex",
          gap: "0.5rem",
          marginTop: "1rem",
          padding: "0.75rem",
          backgroundColor: "#f9fafb",
          border: "1px solid #e5e7eb",
          borderRadius: "0.375rem",
          fontSize: "0.75rem",
        }}
      >
        <span style={{ fontWeight: 600, color: "#6b7280" }}>Other views:</span>
        <span style={{ padding: "0.2rem 0.5rem", backgroundColor: "#dbeafe", color: "#2563eb", borderRadius: "0.25rem", fontWeight: 500 }}>Revenue</span>
        <span style={{ padding: "0.2rem 0.5rem", backgroundColor: "#f3f4f6", color: "#4b5563", borderRadius: "0.25rem" }}>Team</span>
        <span style={{ padding: "0.2rem 0.5rem", backgroundColor: "#f3f4f6", color: "#4b5563", borderRadius: "0.25rem" }}>Pipeline</span>
      </div>
    </div>
  );
}
