"use client";

import { ASSIGNMENT_REF, CLIENT_NAME } from "../projectData";
import styles from "./vendor-lifecycle-demo.module.scss";

const complianceRows = [
  { item: "General liability", state: "Valid", detail: "Expires Mar 15, 2026" },
  { item: "W-9", state: "Valid", detail: "On file" },
  { item: "Business license", state: "Review", detail: "30-day renewal window" },
];

const statusPills = ["Active", "Compliant", "Portal enabled"];

export function VendorLifecycleDemo() {
  return (
    <div className={styles.vendorShell}>
      <div className={styles.shellTopBar}>
        <div className={styles.windowDots} aria-hidden>
          <span />
          <span />
          <span />
        </div>
        <span className={styles.shellTitle}>Vendor Lifecycle Control</span>
      </div>

      <div className={styles.vendorStatusStrip}>
        <span>Elite Sound Productions</span>
        <strong>Active</strong>
        <strong>Compliant</strong>
        <strong>Portal enabled</strong>
      </div>

      <div className={styles.vendorComposition}>
        <section className={styles.vendorHero} aria-label="Internal vendor control and portal preview">
          <div className={styles.internalPane}>
            <div className={styles.paneHeader}>
              <div>
                <p>Internal vendor record</p>
                <h2>Elite Sound Productions</h2>
              </div>
              <span>Premier vendor</span>
            </div>

            <div className={styles.vendorStateRow}>
              {statusPills.map((pill) => (
                <span key={pill}>{pill}</span>
              ))}
            </div>

            <div className={styles.vendorControlGrid}>
              <div className={styles.vendorProfileBlock}>
                <div>
                  <span>Primary contact</span>
                  <strong>Maria Chen</strong>
                </div>
                <div>
                  <span>Service coverage</span>
                  <strong>75 mi radius</strong>
                </div>
                <div>
                  <span>Open RFQs</span>
                  <strong>3 active</strong>
                </div>
              </div>

              <div className={styles.compliancePreview}>
                <div className={styles.moduleEyebrow}>Document compliance</div>
                {complianceRows.map((row) => (
                  <div key={row.item}>
                    <span>{row.item}</span>
                    <small>{row.detail}</small>
                    <strong className={row.state === "Review" ? styles.reviewState : undefined}>
                      {row.state}
                    </strong>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className={styles.portalPane}>
            <div className={styles.paneHeader}>
              <div>
                <p>Vendor portal preview</p>
                <h2>Assignment #{ASSIGNMENT_REF}</h2>
              </div>
              <span>Secure token</span>
            </div>

            <div className={styles.assignmentCard}>
              <div className={styles.moduleEyebrow}>Awaiting vendor acceptance</div>
              <h3>{CLIENT_NAME} Q4 Delivery</h3>
              <div className={styles.assignmentMeta}>
                <span>Dec 10, 2026</span>
                <span>2:00 PM arrival</span>
                <span>Service Type A/B</span>
              </div>
              <div className={styles.portalActionRow}>
                <strong>Accept & sign</strong>
                <span>Decline with reason</span>
              </div>
            </div>

            <div className={styles.portalVisibilityNote}>
              Portal exposes only assigned scope, documents, quote requests, and messaging. Customer pricing and margin stay internal.
            </div>
          </div>
        </section>

        <section className={styles.vendorSupportRow} aria-label="Vendor compliance and assignment summary">
          <div className={styles.supportCard}>
            <div className={styles.moduleEyebrow}>Compliance summary</div>
            <div className={styles.supportMetricGrid}>
              <div><span>Documents</span><strong>8</strong></div>
              <div><span>Valid</span><strong>7</strong></div>
              <div><span>Needs review</span><strong>1</strong></div>
            </div>
          </div>

          <div className={styles.supportCard}>
            <div className={styles.moduleEyebrow}>Assignment action summary</div>
            <div className={styles.assignmentSummary}>
              <span>Assignment #{ASSIGNMENT_REF}</span>
              <strong>Sent to portal</strong>
              <small>Vendor can accept, decline, sign, and message without staff handoff.</small>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
