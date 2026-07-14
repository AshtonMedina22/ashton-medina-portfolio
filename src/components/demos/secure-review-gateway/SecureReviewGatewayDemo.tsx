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
  HiOutlineTable,
} from "react-icons/hi";
import styles from "./secure-review-gateway-demo.module.scss";

const sources = [
  { icon: HiOutlineDatabase, label: "Supabase approval event", detail: "Permit or account review age crossed threshold", state: "Review" },
  { icon: HiOutlineTable, label: "Sheet row update", detail: "Account follow-up reminder requested", state: "Queued" },
  { icon: HiOutlineShieldCheck, label: "Vendor compliance row", detail: "COI or policy document expires in 7 days", state: "AI draft" },
] as const;

const safeguards = [
  { icon: HiOutlineKey, label: "Server-only AI keys" },
  { icon: HiOutlineLockClosed, label: "OAuth mailbox boundary" },
  { icon: HiOutlineCode, label: "Typed field payload" },
  { icon: HiOutlineCheckCircle, label: "HITL approval required" },
] as const;

const auditSteps = [
  "Database event captured",
  "Context normalized",
  "AI draft packet prepared",
  "Email draft created server-side",
  "HITL approval pending",
] as const;

export function SecureReviewGatewayDemo() {
  return (
    <div className={styles.shell}>
      <header className={styles.header}>
        <div>
          <p>Event-driven AI-assisted communications with a secure review gateway</p>
          <h2>Operational events become AI-assisted, human-reviewed email drafts</h2>
        </div>
        <span>
          <HiOutlineShieldCheck />
          AgentOps guardrails
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
            <span>AI-assisted draft (review required)</span>
          </div>
          <div className={styles.emailChrome}>
            <div className={styles.emailMeta}>
              <span>To</span>
              <strong>operations-review@example.com</strong>
              <span>Subject</span>
              <strong>Status request for REVIEW-2407 response window</strong>
            </div>
            <div className={styles.emailBody}>
              <p>Hello,</p>
              <p>
                Please confirm the current response status for review item REVIEW-2407. Our records show
                the request was submitted on May 28, 2026 and is now outside the expected review
                window.
              </p>
              <p>Thank you,</p>
            </div>
          </div>
          <div className={styles.actions}>
            <button type="button"><HiOutlinePencilAlt /> Revise</button>
            <button type="button"><HiOutlineCheckCircle /> Approve AI draft</button>
          </div>
        </main>

        <aside className={styles.guardrailPanel}>
          <div className={styles.panelTitle}>
            <HiOutlineCode />
            <span>Typed draft contract</span>
          </div>
          <pre>{`{
  "source": "database_event",
  "reviewId": "REVIEW-2407",
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
