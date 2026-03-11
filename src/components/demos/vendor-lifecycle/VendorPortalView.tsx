"use client";

import { HiOutlineClipboardList, HiOutlineBriefcase, HiOutlineCalendar, HiOutlineDocumentText } from "react-icons/hi";
import styles from "./vendor-lifecycle-demo.module.scss";

const SUMMARY_CARDS = [
  { label: "2 Pending Assignments", icon: HiOutlineClipboardList, color: "#fbbf24" },
  { label: "1 Active Work Order", icon: HiOutlineBriefcase, color: "#10b981" },
  { label: "3 Upcoming Engagements", icon: HiOutlineCalendar, color: "#a78bfa" },
  { label: "1 Open Quote Request", icon: HiOutlineDocumentText, color: "#7c3aed" },
];

export function VendorPortalView() {
  return (
    <div className={styles.portalPanel}>
      <div style={{ marginBottom: "1.5rem" }}>
        <h2 className={styles.panelTitle}>Elite Sound Productions</h2>
        <p className={styles.panelSubtitle}>My Dashboard</p>
      </div>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(160px, 1fr))",
          gap: "1rem",
          marginBottom: "1.5rem",
        }}
      >
        {SUMMARY_CARDS.map(({ label, icon: Icon, color }) => (
          <div
            key={label}
            className={styles.summaryCard}
            style={{
              backgroundColor: `${color}15`,
              borderColor: `${color}40`,
            }}
          >
            <Icon size={20} style={{ color, flexShrink: 0, marginTop: "0.1rem" }} />
            <div style={{ fontSize: "0.9375rem", fontWeight: 600, color: "#f5f3ff" }}>{label}</div>
          </div>
        ))}
      </div>

      <div className={styles.workOrderCard}>
        <h3 style={{ fontSize: "1rem", fontWeight: 600, color: "#f5f3ff", margin: "0 0 1rem 0" }}>
          ENG-2024-0842 · TechCorp Q4 Delivery
        </h3>
        <div style={{ display: "flex", flexDirection: "column", gap: "0.5rem", marginBottom: "1rem", fontSize: "0.9375rem" }}>
          <div><span className={styles.detailLabel}>Date: </span><span className={styles.detailValue}>Dec 10, 2024</span></div>
          <div><span className={styles.detailLabel}>Venue: </span><span className={styles.detailValue}>Site A, Primary Location</span></div>
          <div><span className={styles.detailLabel}>Arrival: </span><span className={styles.detailValue}>2:00 PM</span></div>
          <div><span className={styles.detailLabel}>Service: </span><span className={styles.detailValue}>Service Type A, Service Type B · Full Scope</span></div>
        </div>
        <div style={{ display: "flex", gap: "0.75rem", marginBottom: "1rem" }}>
          <span className={styles.btnPrimary}>Accept & Sign</span>
          <span className={styles.btnGhost}>Decline</span>
        </div>
        <div className={styles.signatureLine}>
          Signature: ___________________________________________ Date: ___________
        </div>
      </div>
    </div>
  );
}
