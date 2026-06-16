"use client";

import {
  HiOutlineCheckCircle,
  HiOutlineClock,
  HiOutlineCode,
  HiOutlineDatabase,
  HiOutlineDocumentText,
  HiOutlineKey,
  HiOutlineLockClosed,
  HiOutlineMail,
  HiOutlinePencilAlt,
  HiOutlineShieldCheck,
  HiOutlineSparkles,
  HiOutlineTable,
} from "react-icons/hi";
import styles from "./secure-ai-gateway-demo.module.scss";

const sources = [
  { icon: HiOutlineDatabase, label: "Supabase permit event", detail: "AHJ review age crossed threshold", state: "Review" },
  { icon: HiOutlineTable, label: "Sheet row update", detail: "Calendar reminder requested", state: "Queued" },
  { icon: HiOutlineShieldCheck, label: "Vendor compliance row", detail: "COI expires in 7 days", state: "Draft" },
] as const;

const safeguards = [
  { icon: HiOutlineKey, label: "Server-only keys" },
  { icon: HiOutlineLockClosed, label: "OAuth mailbox boundary" },
  { icon: HiOutlineCode, label: "Typed prompt payload" },
  { icon: HiOutlineCheckCircle, label: "Human approval required" },
] as const;

const auditSteps = [
  "Database event captured",
  "Context normalized",
  "AI draft generated",
  "Gmail draft created",
  "Operator approval pending",
] as const;

export function SecureAiGatewayDemo() {
  return (
    <div className={styles.shell}>
      <header className={styles.header}>
        <div>
          <p>Event-driven automation and secure AI gateway</p>
          <h2>Database events become controlled Gmail drafts inside a human review desk</h2>
        </div>
        <span>
          <HiOutlineShieldCheck />
          Credentials isolated
        </span>
      </header>

      <section className={styles.workspace}>
        <aside className={styles.sourcePanel}>
          <div className={styles.panelTitle}>
            <HiOutlineDatabase />
            <span>Trigger sources</span>
          </div>
          <div className={styles.sourceList}>
            {sources.map(({ icon: Icon, label, detail, state }, index) => (
              <div className={index === 0 ? styles.selectedSource : undefined} key={label}>
                <Icon />
                <span>
                  <strong>{label}</strong>
                  <small>{detail}</small>
                </span>
                <em>{state}</em>
              </div>
            ))}
          </div>
        </aside>

        <main className={styles.reviewPanel}>
          <div className={styles.panelTitle}>
            <HiOutlineMail />
            <span>Human-reviewed Gmail draft</span>
          </div>
          <div className={styles.emailChrome}>
            <div className={styles.emailMeta}>
              <span>To</span>
              <strong>permits@city.gov</strong>
              <span>Subject</span>
              <strong>Status request for AHJ-2407 review window</strong>
            </div>
            <div className={styles.emailBody}>
              <p>Hello,</p>
              <p>
                Please confirm the current review status for project AHJ-2407. Our records show
                the packet was submitted on May 28, 2026 and is now outside the expected review
                window.
              </p>
              <p>Thank you,</p>
            </div>
          </div>
          <div className={styles.actions}>
            <button type="button"><HiOutlinePencilAlt /> Revise</button>
            <button type="button"><HiOutlineCheckCircle /> Approve draft</button>
          </div>
        </main>

        <aside className={styles.guardrailPanel}>
          <div className={styles.panelTitle}>
            <HiOutlineSparkles />
            <span>Prompt contract</span>
          </div>
          <pre>{`{
  "source": "database_event",
  "projectId": "AHJ-2407",
  "submittedAt": "2026-05-28",
  "allowedAction": "draft_only",
  "sendBlocked": true
}`}</pre>
          <div className={styles.safeguards}>
            {safeguards.map(({ icon: Icon, label }) => (
              <span key={label}>
                <Icon />
                {label}
              </span>
            ))}
          </div>
        </aside>
      </section>

      <footer className={styles.auditRail}>
        {auditSteps.map((step, index) => (
          <div className={index === auditSteps.length - 1 ? styles.currentStep : undefined} key={step}>
            <HiOutlineClock />
            <span>{step}</span>
            {index < auditSteps.length - 1 && <i />}
          </div>
        ))}
      </footer>
    </div>
  );
}

