"use client";

import styles from "./vendor-lifecycle-demo.module.scss";

const DOCUMENTS = [
  { type: "General Liability Insurance", status: "Compliant", statusColor: "green", expiry: "2026-03-15" },
  { type: "W-9", status: "Compliant", statusColor: "green", expiry: "N/A" },
  { type: "Business License", status: "Expiring Soon", statusColor: "yellow", expiry: "2025-03-01" },
  { type: "Workers Comp", status: "Missing Required", statusColor: "red", expiry: "N/A" },
];

const RATE_CARDS = [
  { service: "Service Type A", tier: "Premier", rate: "$185/hr", notes: "4hr minimum" },
  { service: "Service Type B", tier: "Classic", rate: "$95/hr", notes: "Standard package" },
  { service: "Service Type C", tier: "Essentials", rate: "$150/hr", notes: "2hr minimum" },
];

export function InternalVendorRecord() {
  return (
    <div className={styles.internalPanel}>
      <div className={styles.panelHeaderRow}>
        <h2 className={styles.panelTitle}>Elite Sound Productions</h2>
        <span className={styles.badgeSuccess}>Active</span>
        <span className={styles.badgeSuccess}>Compliant</span>
      </div>

      <div className={styles.panelCountRow}>
        {["12 Assignments", "8 Documents", "3 Open RFQs"].map((label) => (
          <span key={label} className={styles.pillBtn}>
            {label}
          </span>
        ))}
        <span className={styles.badgeSuccess}>Portal Access: Enabled</span>
      </div>

      <div className={styles.internalGrid}>
        <div>
          <div className={styles.sectionHeadingRow}>
            <h3 className={styles.sectionHeading}>Vendor Details</h3>
            <span className={`${styles.tag} ${styles.tagPrimary}`}>Premier</span>
          </div>
          <div className={styles.vendorDetailsList}>
            <div><span className={styles.detailLabel}>Contact: </span><span className={styles.detailValue}>Maria Chen</span></div>
            <div><span className={styles.detailLabel}>Phone: </span><span className={styles.detailValue}>(214) 555-0123</span></div>
            <div><span className={styles.detailLabel}>Email: </span><span className={styles.detailValue}>maria@elitesoundpro.com</span></div>
            <div className={styles.serviceTypeTags}>
              {["Service Type A", "Service Type B", "Service Type C"].map((tag) => (
                <span key={tag} className={styles.tag}>{tag}</span>
              ))}
            </div>
            <div><span className={styles.detailLabel}>Zip radius: </span><span className={styles.detailValue}>75 mi</span></div>
          </div>
        </div>

        <div>
          <h3 className={styles.sectionHeading}>Document Compliance</h3>
          <table className={styles.table}>
            <thead>
              <tr>
                <th>Document Type</th>
                <th>Status</th>
                <th className={styles.textRight}>Expiry</th>
              </tr>
            </thead>
            <tbody>
              {DOCUMENTS.map((doc) => (
                <tr key={doc.type}>
                  <td>{doc.type}</td>
                  <td>
                    <span className={`${styles.statusPill} ${doc.statusColor === "green" ? styles.statusGreen : doc.statusColor === "yellow" ? styles.statusYellow : styles.statusRed}`}>
                      {doc.status}
                    </span>
                  </td>
                  <td className={styles.textRight} style={{ color: "#a1a1aa" }}>{doc.expiry}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      <div>
        <h3 className={styles.sectionHeading}>Service Rate Cards</h3>
        <table className={styles.table}>
          <thead>
            <tr>
              <th>Service</th>
              <th>Tier</th>
              <th className={styles.textRight}>Rate</th>
              <th>Notes</th>
            </tr>
          </thead>
          <tbody>
            {RATE_CARDS.map((r) => (
              <tr key={r.service}>
                <td>{r.service}</td>
                <td>{r.tier}</td>
                <td className={styles.textRight}>{r.rate}</td>
                <td style={{ color: "#a1a1aa" }}>{r.notes}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
