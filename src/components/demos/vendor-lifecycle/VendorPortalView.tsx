"use client";

import { HiOutlineClipboardList, HiOutlineBriefcase, HiOutlineCalendar, HiOutlineDocumentText } from "react-icons/hi";
import styles from "./vendor-lifecycle-demo.module.scss";

const SUMMARY_CARDS = [
  { label: "2 Pending Assignments", icon: HiOutlineClipboardList, color: "#d97706", bg: "#fef3c7" },
  { label: "1 Active Work Order", icon: HiOutlineBriefcase, color: "#059669", bg: "#d1fae5" },
  { label: "3 Upcoming Engagements", icon: HiOutlineCalendar, color: "#2563eb", bg: "#dbeafe" },
  { label: "1 Open Quote Request", icon: HiOutlineDocumentText, color: "#7c3aed", bg: "#ede9fe" },
];

export function VendorPortalView() {
  return (
    <div className={styles.portalPanel}>
      {/* Portal header */}
      <div style={{ marginBottom: "1.5rem" }}>
        <h2 style={{ fontSize: "1.5rem", fontWeight: 700, color: "#111827", margin: "0 0 0.25rem 0" }}>
          Elite Sound Productions
        </h2>
        <p style={{ fontSize: "1rem", color: "#6b7280", margin: 0 }}>My Dashboard</p>
      </div>

      {/* Summary cards — with icons and color */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))",
          gap: "1rem",
          marginBottom: "1.5rem",
        }}
      >
        {SUMMARY_CARDS.map(({ label, icon: Icon, color, bg }) => (
          <div
            key={label}
            style={{
              padding: "1rem",
              backgroundColor: bg,
              border: `1px solid ${color}40`,
              borderRadius: "0.5rem",
              display: "flex",
              alignItems: "flex-start",
              gap: "0.75rem",
            }}
          >
            <Icon size={20} style={{ color, flexShrink: 0, marginTop: "0.1rem" }} />
            <div style={{ fontSize: "0.9375rem", fontWeight: 600, color: "#111827" }}>{label}</div>
          </div>
        ))}
      </div>

      {/* Work order card */}
      <div
        style={{
          padding: "1.25rem",
          border: "1px solid #e5e7eb",
          borderRadius: "0.5rem",
          backgroundColor: "#ffffff",
        }}
      >
        <h3 style={{ fontSize: "1rem", fontWeight: 600, color: "#111827", margin: "0 0 1rem 0" }}>
          ENG-2024-0842 — TechCorp Q4 Delivery
        </h3>
        <div style={{ display: "flex", flexDirection: "column", gap: "0.5rem", marginBottom: "1rem", fontSize: "0.9375rem" }}>
          <div><span style={{ color: "#6b7280" }}>Date: </span>Dec 10, 2024</div>
          <div><span style={{ color: "#6b7280" }}>Venue: </span>Site A — Primary Location</div>
          <div><span style={{ color: "#6b7280" }}>Arrival: </span>2:00 PM</div>
          <div><span style={{ color: "#6b7280" }}>Service: </span>Service Type A, Service Type B — Full Scope</div>
        </div>
        <div style={{ display: "flex", gap: "0.75rem", marginBottom: "1rem" }}>
          <button
            type="button"
            style={{
              padding: "0.6rem 1rem",
              fontSize: "0.875rem",
              fontWeight: 600,
              color: "#fff",
              backgroundColor: "#059669",
              border: "none",
              borderRadius: "0.375rem",
              cursor: "pointer",
            }}
          >
            Accept & Sign
          </button>
          <button
            type="button"
            style={{
              padding: "0.6rem 1rem",
              fontSize: "0.875rem",
              fontWeight: 600,
              color: "#dc2626",
              backgroundColor: "transparent",
              border: "2px solid #dc2626",
              borderRadius: "0.375rem",
              cursor: "pointer",
            }}
          >
            Decline
          </button>
        </div>
        <div
          style={{
            borderTop: "1px dashed #d1d5db",
            paddingTop: "0.75rem",
            fontSize: "0.8125rem",
            color: "#9ca3af",
          }}
        >
          Signature: ___________________________________________ Date: ___________
        </div>
      </div>
    </div>
  );
}


