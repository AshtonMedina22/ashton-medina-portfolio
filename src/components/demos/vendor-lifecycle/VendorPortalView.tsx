"use client";

import { HiOutlineClipboardList, HiOutlineBriefcase, HiOutlineCalendar, HiOutlineDocumentText } from "react-icons/hi";
import styles from "./vendor-lifecycle-demo.module.scss";

const SUMMARY_CARDS = [
  { label: "2 Pending Assignments", icon: HiOutlineClipboardList, variant: "warning" as const },
  { label: "1 Active Work Order", icon: HiOutlineBriefcase, variant: "success" as const },
  { label: "3 Upcoming Engagements", icon: HiOutlineCalendar, variant: "accent" as const },
  { label: "1 Open Quote Request", icon: HiOutlineDocumentText, variant: "accent" as const },
];

export function VendorPortalView() {
  return (
    <div className={styles.portalPanel}>
      <div className={styles.portalPanelHeader}>
        <h2 className={styles.panelTitle}>Elite Sound Productions</h2>
        <p className={styles.panelSubtitle}>My Dashboard</p>
      </div>

      <div className={styles.portalSummaryGrid}>
        {SUMMARY_CARDS.map(({ label, icon: Icon, variant }) => (
          <div
            key={label}
            className={`${styles.summaryCard} ${variant === "warning" ? styles.summaryCardWarning : variant === "success" ? styles.summaryCardSuccess : styles.summaryCardAccent}`}
          >
            <Icon size={20} className={styles.summaryCardIcon} aria-hidden />
            <div className={styles.summaryCardLabel}>{label}</div>
          </div>
        ))}
      </div>

      <div className={styles.workOrderCard}>
        <h3 className={styles.workOrderTitle}>
          WO-0842 · TechCorp Q4 Delivery
        </h3>
        <div className={styles.workOrderDetails}>
          <div><span className={styles.detailLabel}>Date: </span><span className={styles.detailValue}>Dec 10, 2026</span></div>
          <div><span className={styles.detailLabel}>Venue: </span><span className={styles.detailValue}>Site A, Primary Location</span></div>
          <div><span className={styles.detailLabel}>Arrival: </span><span className={styles.detailValue}>2:00 PM</span></div>
          <div><span className={styles.detailLabel}>Service: </span><span className={styles.detailValue}>Service Type A, Service Type B · Full Scope</span></div>
        </div>
        <div className={styles.actionRow}>
          <button type="button" className={styles.btnPrimary}>Accept & Sign</button>
          <button type="button" className={styles.btnGhost}>Decline</button>
        </div>
        <div className={styles.signatureLine}>
          <div className={styles.signatureRow}>
            <span className={styles.signatureLabel}>Signature:</span>
            <span className={styles.signatureBlock} aria-hidden />
          </div>
          <div className={styles.signatureRow}>
            <span className={styles.signatureLabel}>Date:</span>
            <span className={styles.signatureBlock} aria-hidden />
          </div>
        </div>
      </div>
    </div>
  );
}
