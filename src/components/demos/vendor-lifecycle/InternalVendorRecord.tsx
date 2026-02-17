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

const STATUS_STYLES: Record<string, { bg: string; color: string }> = {
  green: { bg: "#d1fae5", color: "#059669" },
  yellow: { bg: "#fef3c7", color: "#d97706" },
  red: { bg: "#fee2e2", color: "#dc2626" },
};

export function InternalVendorRecord() {
  return (
    <div className={styles.internalPanel}>
      {/* Header */}
      <div style={{ display: "flex", alignItems: "center", flexWrap: "wrap", gap: "0.75rem", marginBottom: "1rem" }}>
        <h2 style={{ fontSize: "1.25rem", fontWeight: 700, color: "#111827", margin: 0 }}>
          Elite Sound Productions
        </h2>
        <span
          style={{
            padding: "0.25rem 0.5rem",
            borderRadius: "0.25rem",
            fontSize: "0.75rem",
            fontWeight: 600,
            backgroundColor: "#d1fae5",
            color: "#059669",
          }}
        >
          Active
        </span>
        <span
          style={{
            padding: "0.25rem 0.5rem",
            borderRadius: "0.25rem",
            fontSize: "0.75rem",
            fontWeight: 600,
            backgroundColor: "#d1fae5",
            color: "#059669",
          }}
        >
          Compliant
        </span>
      </div>

      {/* Smart button row — Assignments/Docs/RFQs as buttons, Portal as status badge */}
      <div style={{ display: "flex", flexWrap: "wrap", alignItems: "center", gap: "0.5rem", marginBottom: "1.25rem" }}>
        {["12 Assignments", "8 Documents", "3 Open RFQs"].map((label) => (
          <button
            key={label}
            type="button"
            style={{
              padding: "0.4rem 0.75rem",
              fontSize: "0.8125rem",
              fontWeight: 500,
              color: "#2563eb",
              backgroundColor: "#eff6ff",
              border: "1px solid #bfdbfe",
              borderRadius: "0.375rem",
              cursor: "pointer",
            }}
          >
            {label}
          </button>
        ))}
        <span
          style={{
            padding: "0.35rem 0.625rem",
            fontSize: "0.75rem",
            fontWeight: 600,
            color: "#059669",
            backgroundColor: "#d1fae5",
            border: "1px solid #a7f3d0",
            borderRadius: "0.25rem",
          }}
        >
          Portal Access: Enabled
        </span>
      </div>

      {/* Two columns */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "minmax(200px, 1fr) minmax(280px, 1.2fr)",
          gap: "1.5rem",
          marginBottom: "1.25rem",
        }}
      >
        {/* Left - Vendor Details */}
        <div>
          <h3 style={{ fontSize: "0.875rem", fontWeight: 600, color: "#374151", marginBottom: "0.75rem" }}>
            Vendor Details
          </h3>
          <div style={{ display: "flex", flexDirection: "column", gap: "0.5rem", fontSize: "0.875rem" }}>
            <span
              style={{
                display: "inline-block",
                padding: "0.2rem 0.5rem",
                borderRadius: "0.25rem",
                backgroundColor: "#dbeafe",
                color: "#2563eb",
                fontWeight: 500,
                width: "fit-content",
              }}
            >
              Premier
            </span>
            <div>
              <span style={{ color: "#6b7280" }}>Contact: </span>Maria Chen
            </div>
            <div>
              <span style={{ color: "#6b7280" }}>Phone: </span>(214) 555-0123
            </div>
            <div>
              <span style={{ color: "#6b7280" }}>Email: </span>maria@elitesoundpro.com
            </div>
            <div style={{ display: "flex", flexWrap: "wrap", gap: "0.35rem", marginTop: "0.25rem" }}>
              {["Service Type A", "Service Type B", "Service Type C"].map((tag) => (
                <span
                  key={tag}
                  style={{
                    padding: "0.2rem 0.5rem",
                    borderRadius: "0.25rem",
                    backgroundColor: "#f3f4f6",
                    color: "#374151",
                    fontSize: "0.75rem",
                  }}
                >
                  {tag}
                </span>
              ))}
            </div>
            <div>
              <span style={{ color: "#6b7280" }}>Zip radius: </span><span>75 mi</span>
            </div>
          </div>
        </div>

        {/* Right - Document Compliance Table */}
        <div>
          <h3 style={{ fontSize: "0.875rem", fontWeight: 600, color: "#374151", marginBottom: "0.75rem" }}>
            Document Compliance
          </h3>
          <table style={{ width: "100%", borderCollapse: "collapse", fontSize: "0.8125rem" }}>
            <thead>
              <tr style={{ borderBottom: "1px solid #e5e7eb" }}>
                <th style={{ textAlign: "left", padding: "0.5rem 0", fontWeight: 600 }}>Document Type</th>
                <th style={{ textAlign: "left", padding: "0.5rem 0", fontWeight: 600 }}>Status</th>
                <th style={{ textAlign: "left", padding: "0.5rem 0", fontWeight: 600 }}>Expiry Date</th>
              </tr>
            </thead>
            <tbody>
              {DOCUMENTS.map((doc) => {
                const s = STATUS_STYLES[doc.statusColor];
                return (
                  <tr key={doc.type} style={{ borderBottom: "1px solid #f3f4f6" }}>
                    <td style={{ padding: "0.5rem 0" }}>{doc.type}</td>
                    <td style={{ padding: "0.5rem 0" }}>
                      <span
                        style={{
                          padding: "0.2rem 0.5rem",
                          borderRadius: "0.25rem",
                          fontSize: "0.75rem",
                          fontWeight: 500,
                          backgroundColor: s.bg,
                          color: s.color,
                        }}
                      >
                        {doc.status}
                      </span>
                    </td>
                    <td style={{ padding: "0.5rem 0", color: "#6b7280" }}>{doc.expiry}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>

      {/* Service Rate Cards */}
      <div>
        <h3 style={{ fontSize: "0.875rem", fontWeight: 600, color: "#374151", marginBottom: "0.5rem" }}>
          Service Rate Cards
        </h3>
        <table style={{ width: "100%", borderCollapse: "collapse", fontSize: "0.8125rem" }}>
          <thead>
            <tr style={{ borderBottom: "1px solid #e5e7eb" }}>
              <th style={{ textAlign: "left", padding: "0.4rem 0", fontWeight: 600 }}>Service</th>
              <th style={{ textAlign: "left", padding: "0.4rem 0", fontWeight: 600 }}>Tier</th>
              <th style={{ textAlign: "left", padding: "0.4rem 0", fontWeight: 600 }}>Rate</th>
              <th style={{ textAlign: "left", padding: "0.4rem 0", fontWeight: 600 }}>Notes</th>
            </tr>
          </thead>
          <tbody>
            {RATE_CARDS.map((r) => (
              <tr key={r.service} style={{ borderBottom: "1px solid #f3f4f6" }}>
                <td style={{ padding: "0.4rem 0" }}>{r.service}</td>
                <td style={{ padding: "0.4rem 0" }}>{r.tier}</td>
                <td style={{ padding: "0.4rem 0" }}>{r.rate}</td>
                <td style={{ padding: "0.4rem 0", color: "#6b7280" }}>{r.notes}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
