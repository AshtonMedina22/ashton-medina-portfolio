"use client";

import {
  HiOutlineCalendar,
  HiOutlineCheckCircle,
  HiOutlineDocumentText,
  HiOutlineFolder,
  HiOutlineMail,
  HiOutlineRefresh,
  HiOutlineTable,
} from "react-icons/hi";
import styles from "./calendar-document-demo.module.scss";

const queue = [
  ["Kickoff meeting", "Calendar event", "Synced"],
  ["Agreement packet", "Document PDF", "Generated"],
  ["Missing approval", "Follow-up draft", "Review"],
] as const;

export function CalendarDocumentDemo() {
  return (
    <div className={styles.shell}>
      <header className={styles.header}>
        <div>
          <p>Calendar, document and follow-up automation</p>
          <h2>Rows become scheduled events, generated files, and reviewable reminders</h2>
        </div>
        <span><HiOutlineRefresh /> Source rows synced</span>
      </header>

      <section className={styles.pipeline}>
        {[
          [HiOutlineTable, "Source row"],
          [HiOutlineCalendar, "Calendar event"],
          [HiOutlineDocumentText, "Document PDF"],
          [HiOutlineFolder, "Drive folder"],
          [HiOutlineMail, "Draft reminder"],
        ].map(([Icon, label]) => (
          <article key={label as string}>
            <Icon />
            <span>{label as string}</span>
          </article>
        ))}
      </section>

      <section className={styles.grid}>
        <article className={styles.panel}>
          <div className={styles.panelTitle}>Automation queue</div>
          {queue.map(([name, type, status]) => (
            <div className={styles.queueRow} key={name}>
              <strong>{name}</strong>
              <span>{type}</span>
              <em>{status}</em>
            </div>
          ))}
        </article>

        <article className={styles.documentPreview}>
          <div className={styles.panelTitle}>Generated document package</div>
          <div className={styles.page}>
            <span>CLIENT WORKFLOW PACKET</span>
            <strong>Project Summary</strong>
            <p>Dates, owners, requirements, action items, and approval checkpoints merged from the source row.</p>
            <small>PDF compiled and routed to the correct Drive folder.</small>
          </div>
        </article>

        <aside className={styles.statusPanel}>
          <div className={styles.panelTitle}>Traceability</div>
          {["Calendar ID written back", "Drive link stored", "Draft blocked for review", "Errors visible on source row"].map((item) => (
            <span key={item}><HiOutlineCheckCircle /> {item}</span>
          ))}
        </aside>
      </section>
    </div>
  );
}

