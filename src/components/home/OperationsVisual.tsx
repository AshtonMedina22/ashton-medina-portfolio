import styles from "./OperationsVisual.module.scss";

const inboxRows = ["Customer Question", "Event Request", "Vendor Update", "Internal Follow-Up"];
const boardColumns = ["To Do", "In Progress", "Ready", "Complete"];
const timelineItems = ["Follow-Up Scheduled", "Approval Needed", "Waiting on Review", "Handoff Ready"];
const reportRows = ["Open Items", "Follow-Ups", "Completed Work"];

export function OperationsVisual({ heroScaled = false }: { heroScaled?: boolean }) {
  return (
    <div
      className={styles.demoFrame}
      data-hero-scaled={heroScaled ? "" : undefined}
      aria-label="Animated business workflow product demo"
    >
      <div className={styles.backgroundGlow} aria-hidden />
      <div className={styles.subtleGrid} aria-hidden />

      <div className={styles.sceneViewport}>
        <div className={styles.sceneTrack}>
          <section className={`${styles.scene} ${styles.sceneInquiry}`} aria-label="Inquiry Capture">
            <div className={styles.basePanel}>
              <div className={styles.panelHeader}>
                <span>Inquiry Capture</span>
                <strong>Intake Inbox</strong>
              </div>
              <div className={styles.inboxList}>
                {inboxRows.map((row) => (
                  <div
                    className={`${styles.inboxRow} ${row === "Customer Question" ? styles.sourceHighlight : ""}`}
                    key={row}
                  >
                    <span>{row}</span>
                    <em>{row === "Customer Question" ? "New Inquiry" : "Open"}</em>
                  </div>
                ))}
              </div>
            </div>
            <span className={`${styles.connectorLine} ${styles.connectorInquiry}`} aria-hidden />
            <article className={`${styles.popoutCard} ${styles.popoutInquiry}`}>
              <span>New Inquiry</span>
              <strong>Customer Question</strong>
              <p>Needs Follow-Up</p>
            </article>
            <div className={`${styles.statusChip} ${styles.assignmentChip}`}>Assigned</div>
            <div className={styles.statusToast}>Assigned</div>
          </section>

          <section className={`${styles.scene} ${styles.sceneRouting}`} aria-label="Task Routing">
            <div className={styles.basePanel}>
              <div className={styles.panelHeader}>
                <span>Task Routing</span>
                <strong>Workflow Board</strong>
              </div>
              <div className={styles.kanbanBoard}>
                {boardColumns.map((column) => (
                  <div className={styles.kanbanColumn} key={column}>
                    <span>{column}</span>
                    <div className={column === "To Do" ? styles.sourceHighlight : ""}>
                      {column === "To Do" ? "Tasks Created" : column === "In Progress" ? "Owner Assigned" : ""}
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <span className={`${styles.movingTaskCard} ${styles.sourceHighlight}`}>Tasks Created</span>
            <span className={`${styles.connectorLine} ${styles.connectorRouting}`} aria-hidden />
            <article className={`${styles.popoutCard} ${styles.popoutRouting}`}>
              <span>Routing Rule</span>
              <strong>Owner Assigned</strong>
              <p>Due Date Set</p>
            </article>
            <div className={styles.statusToast}>Owner Assigned</div>
          </section>

          <section className={`${styles.scene} ${styles.sceneApprovals}`} aria-label="Follow-Up and Approvals">
            <div className={styles.basePanel}>
              <div className={styles.panelHeader}>
                <span>Follow-Up & Approvals</span>
                <strong>Timeline</strong>
              </div>
              <div className={styles.timelinePanel}>
                {timelineItems.map((item) => (
                  <div
                    className={`${styles.timelineRow} ${item === "Follow-Up Scheduled" ? styles.sourceHighlight : ""}`}
                    key={item}
                  >
                    <em />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>
            <span className={`${styles.connectorLine} ${styles.connectorApproval}`} aria-hidden />
            <article className={`${styles.popoutCard} ${styles.popoutReminder}`}>
              <span>Reminder Sent</span>
              <strong>Follow-Up Scheduled</strong>
              <p>Waiting on Review</p>
            </article>
            <article className={`${styles.popoutCard} ${styles.popoutApproval}`}>
              <span>Approval Needed</span>
              <strong>Handoff Ready</strong>
              <p>Checklist attached</p>
            </article>
            <div className={styles.statusChip}>Handoff Ready</div>
          </section>

          <section className={`${styles.scene} ${styles.sceneReporting}`} aria-label="Reporting Visibility">
            <div className={styles.basePanel}>
              <div className={styles.panelHeader}>
                <span>Reporting Visibility</span>
                <strong>Weekly Summary</strong>
              </div>
              <div className={styles.reportingGrid}>
                <div className={`${styles.chartPanel} ${styles.sourceHighlight}`}>
                  <span style={{ height: "42%" }} />
                  <span style={{ height: "68%" }} />
                  <span style={{ height: "54%" }} />
                  <span style={{ height: "82%" }} />
                </div>
                <div className={styles.statusRows}>
                  {reportRows.map((row) => (
                    <div key={row}>
                      <span>{row}</span>
                      <em>{row === "Completed Work" ? "28" : row === "Follow-Ups" ? "7" : "14"}</em>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            <span className={`${styles.connectorLine} ${styles.connectorReport}`} aria-hidden />
            <article className={`${styles.popoutCard} ${styles.popoutReport}`}>
              <span>Report Generated</span>
              <strong>Weekly Summary</strong>
              <p>Status Updated</p>
            </article>
            <article className={`${styles.kpiCard} ${styles.popoutCard}`}>
              <span>Completed Work</span>
              <strong>28</strong>
            </article>
            <div className={styles.statusToast}>Status Updated</div>
          </section>
        </div>
      </div>

      <div className={styles.sceneDots} aria-hidden>
        <span />
        <span />
        <span />
        <span />
      </div>
    </div>
  );
}
