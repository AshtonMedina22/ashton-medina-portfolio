"use client";

import { HiLockClosed } from "react-icons/hi";
import styles from "./sales-to-delivery-demo.module.scss";

const PIPELINE_STAGES = [
  "Intake",
  "Qualification",
  "Approval",
  "Proposal Sent",
  "Contract Sent",
  "Booked",
] as const;

const LINE_ITEMS = [
  { service: "Service A", tier: "Premier", qty: 1, hours: 8, unitPrice: 3200, subtotal: 3200, isTrigger: false },
  { service: "Service B", tier: "Classic", qty: 1, hours: 6, unitPrice: 2800, subtotal: 2800, isTrigger: false },
  { service: "Service C", tier: "Essentials", qty: 1, hours: 4, unitPrice: 3200, subtotal: 3200, isTrigger: false },
  { service: "Service D", tier: "Standard", qty: 1, hours: 2, unitPrice: 3200, subtotal: 3200, isTrigger: true },
];

export function SalesOrderPanel() {
  return (
    <div className={`${styles.panel} ${styles.panelLeft}`}>
      <h3 className={styles.panelLabel}>Confirmed Sales Order</h3>
      {/* Pipeline stages */}
      <div className={styles.pipelineRow}>
        {PIPELINE_STAGES.map((stage, i) => (
          <span key={stage}>
            <span className={`${styles.stagePill} ${stage === "Booked" ? styles.active : styles.inactive}`}>
              {stage}
            </span>
            {i < PIPELINE_STAGES.length - 1 && <span className={styles.stageArrow}> → </span>}
          </span>
        ))}
      </div>

      {/* Order header */}
      <div className={styles.orderHeader}>
        <div className={styles.orderClient}>TechCorp</div>
        <div className={styles.orderMeta}>
          <span>Order #SO-2024-0842</span>
          <span>Engagement ENG-2024-0842</span>
          <span className={styles.badge}>Type A</span>
          <span>Delivery: Dec 10, 2024</span>
          <span>Rep: Sarah M.</span>
        </div>
      </div>

      {/* Line items table */}
      <div className={styles.tableWrap}>
        <table className={styles.table}>
          <thead>
            <tr>
              <th>Service Name</th>
              <th>Tier</th>
              <th style={{ textAlign: "right" }}>Qty</th>
              <th style={{ textAlign: "right" }}>Hours</th>
              <th style={{ textAlign: "right" }}>Unit Price</th>
              <th style={{ textAlign: "right" }}>Subtotal</th>
            </tr>
          </thead>
          <tbody>
            {LINE_ITEMS.map((row) => (
              <tr key={`${row.service}-${row.tier}`}>
                <td>
                  <span style={{ display: "inline-flex", alignItems: "center", gap: "0.35rem" }}>
                    {row.service} — {row.tier}
                    {row.isTrigger && (
                      <span className={styles.triggerBadge} title="Required trigger product — project auto-generates on confirmation">
                        <HiLockClosed size={12} aria-hidden />
                        <span>Trigger</span>
                      </span>
                    )}
                  </span>
                </td>
                <td style={{ color: "#64748b" }}>{row.tier}</td>
                <td style={{ textAlign: "right" }}>{row.qty}</td>
                <td style={{ textAlign: "right" }}>{row.hours}</td>
                <td style={{ textAlign: "right" }}>${row.unitPrice.toLocaleString()}</td>
                <td style={{ textAlign: "right" }}>${row.subtotal.toLocaleString()}</td>
              </tr>
            ))}
            <tr className={styles.totalRow}>
              <td colSpan={5}>Total</td>
              <td className={styles.totalValue}>
                ${LINE_ITEMS.reduce((s, r) => s + r.subtotal, 0).toLocaleString()}
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      {/* System status — project created from this order */}
      <div className={styles.systemStatus}>
        <span className={styles.systemStatusIcon}>✓</span>
        <span className={styles.systemStatusText}>Project auto-generated on confirmation</span>
      </div>
    </div>
  );
}


