"use client";

import styles from "./vendor-lifecycle-demo.module.scss";

const DOCUMENTS = [
  { type: "General Liability Insurance", status: "Compliant", statusColor: "green", expiry: "2026-03-15" },
  { type: "W-9", status: "Compliant", statusColor: "green", expiry: "—" },
  { type: "Business License", status: "Expiring Soon", statusColor: "yellow", expiry: "2025-03-01" },
  { type: "Workers Comp", status: "Missing Required", statusColor: "red", expiry: "—" },
];

const RATE_CARDS = [
  { service: "Service Type A", tier: "Premier", rate: "$185/hr", notes: "4hr minimum" },
  { service: "Service Type B", tier: "Classic", rate: "$95/hr", notes: "Standard package" },
  { service: "Service Type C", tier: "Essentials", rate: "$150/hr", notes: "2hr minimum" },
];

export function InternalVendorRecord() {
  return (
    <div className={styles.internalPanel}>
      <div style={{ display: "flex", alignItems: "center", flexWrap: "wrap", gap: "0.75rem", marginBottom: "1rem" }}>
        <h2 className={styles.panelTitle}>Elite Sound Productions</h2>
        <span className={styles.badgeSuccess}>Active</span>
        <span className={styles.badgeSuccess}>Compliant</span>
      </div>

      <div style={{ display: "flex", flexWrap: "wrap", alignItems: "center", gap: "0.5rem", marginBottom: "1.25rem" }}>
        {["12 Assignments", "8 Documents", "3 Open RFQs"].map((label) => (
          <span key={label} className={styles.pillBtn}>
            {label}
          </span>
        ))}
        <span className={styles.badgeSuccess}>Portal Access: Enabled</span>
      </div>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "minmax(200px, 1fr) minmax(260px, 1.2fr)",
          gap: "1.5rem",
          marginBottom: "1.25rem",
        }}
      >
        <div>
          <h3 className={styles.sectionHeading}>Vendor Details</h3>
          <div style={{ display: "flex", flexDirection: "column", gap: "0.5rem", fontSize: "0.875rem" }}>
            <span className={`${styles.tag} ${styles.tagPrimary}`}>Premier</span>
            <div><span className={styles.detailLabel}>Contact: </span><span className={styles.detailValue}>Maria Chen</span></div>
            <div><span className={styles.detailLabel}>Phone: </span><span className={styles.detailValue}>(214) 555-0123</span></div>
            <div><span className={styles.detailLabel}>Email: </span><span className={styles.detailValue}>maria@elitesoundpro.com</span></div>
            <div style={{ display: "flex", flexWrap: "wrap", gap: "0.35rem", marginTop: "0.25rem" }}>
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
                <th>Expiry</th>
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
                  <td style={{ color: "#a1a1aa" }}>{doc.expiry}</td>
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
              <th>Rate</th>
              <th>Notes</th>
            </tr>
          </thead>
          <tbody>
            {RATE_CARDS.map((r) => (
              <tr key={r.service}>
                <td>{r.service}</td>
                <td>{r.tier}</td>
                <td>{r.rate}</td>
                <td style={{ color: "#a1a1aa" }}>{r.notes}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
