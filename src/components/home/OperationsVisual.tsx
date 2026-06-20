import styles from "./OperationsVisual.module.scss";

const sourceChannels = ["Customer Inquiry", "Vendor Update", "Internal Request"];
const inquiryRows = ["Customer Inquiry", "Vendor Update", "Internal Request", "Needs Follow-Up"];
const boardColumns = ["To Do", "In Progress", "Ready", "Complete"];
const timelineRows = ["Follow-Up Scheduled", "Approval Needed", "Waiting on Review", "Handoff Ready"];
const reportRows = ["Open Items", "Follow-Ups", "Completed Work"];

function BasePanel({ children, label, title }: { children: React.ReactNode; label: string; title: string }) {
  return (
    <div className={styles.basePanel}>
      <div className={styles.panelHeader}>
        <span>{label}</span>
        <strong>{title}</strong>
      </div>
      {children}
    </div>
  );
}

function PopoutCard({ className = "", label, title, detail }: { className?: string; label: string; title: string; detail?: string }) {
  return (
    <article className={`${styles.popoutCard} ${className}`}>
      <span>{label}</span>
      <strong>{title}</strong>
      {detail && <p>{detail}</p>}
    </article>
  );
}

function ConnectorLine({ className }: { className: string }) {
  return <span className={`${styles.connectorLine} ${className}`} aria-hidden />;
}

function StatusChip({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  return <div className={`${styles.statusChip} ${className}`}>{children}</div>;
}

function InquiryScene() {
  return (
    <section className={`${styles.scene} ${styles.sceneInquiry}`} aria-label="Inquiry Capture">
      <BasePanel label="Inquiry Capture" title="Intake Inbox">
        <div className={styles.inquiryLayout}>
          <aside className={styles.sourceChannels}>
            {sourceChannels.map((channel) => (
              <span key={channel}>{channel}</span>
            ))}
          </aside>
          <div className={styles.inquiryList}>
            {inquiryRows.map((row) => (
              <div className={`${styles.inquiryRow} ${row === "Customer Inquiry" ? styles.sourceHighlight : ""}`} key={row}>
                <strong>{row}</strong>
                <em>{row === "Customer Inquiry" ? "Needs Follow-Up" : "Open"}</em>
              </div>
            ))}
          </div>
          <div className={styles.inquiryDetail}>
            <span>Selected</span>
            <strong>Customer Inquiry</strong>
            <em>Assigned</em>
          </div>
        </div>
      </BasePanel>
      <ConnectorLine className={styles.connectorInquiry} />
      <PopoutCard className={styles.popoutInquiry} label="Customer Inquiry" title="Needs Follow-Up" detail="Assigned" />
      <StatusChip className={styles.assignmentChip}>Assigned</StatusChip>
      <div className={styles.statusToast}>Assigned</div>
    </section>
  );
}

function RoutingScene() {
  return (
    <section className={`${styles.scene} ${styles.sceneRouting}`} aria-label="Task Routing">
      <BasePanel label="Task Routing" title="Work Board">
        <div className={styles.kanbanBoard}>
          {boardColumns.map((column) => (
            <div className={styles.kanbanColumn} key={column}>
              <span>{column}</span>
              <div className={column === "To Do" ? styles.sourceHighlight : ""}>
                {column === "To Do" ? "Tasks Created" : column === "In Progress" ? "Owner Assigned" : column === "Ready" ? "Ready" : "Complete"}
              </div>
            </div>
          ))}
        </div>
      </BasePanel>
      <span className={`${styles.movingTaskCard} ${styles.sourceHighlight}`}>Tasks Created</span>
      <ConnectorLine className={styles.connectorRouting} />
      <PopoutCard className={styles.popoutRouting} label="Routing Rule" title="Owner Assigned" detail="Due Date Set" />
      <StatusChip className={styles.dueDateChip}>Due Date Set</StatusChip>
    </section>
  );
}

function ApprovalScene() {
  return (
    <section className={`${styles.scene} ${styles.sceneApprovals}`} aria-label="Follow-Up and Approvals">
      <BasePanel label="Follow-Up & Approvals" title="Timeline">
        <div className={styles.timelinePanel}>
          {timelineRows.map((row) => (
            <div className={`${styles.timelineRow} ${row === "Follow-Up Scheduled" ? styles.sourceHighlight : ""}`} key={row}>
              <em />
              <span>{row}</span>
            </div>
          ))}
        </div>
      </BasePanel>
      <ConnectorLine className={styles.connectorApproval} />
      <PopoutCard className={styles.popoutReminder} label="Reminder Sent" title="Follow-Up Scheduled" detail="Waiting on Review" />
      <PopoutCard className={styles.popoutApproval} label="Approval Needed" title="Handoff Ready" detail="Review complete" />
      <StatusChip className={styles.handoffChip}>Handoff Ready</StatusChip>
    </section>
  );
}

function ReportingScene() {
  return (
    <section className={`${styles.scene} ${styles.sceneReporting}`} aria-label="Reporting Visibility">
      <BasePanel label="Reporting Visibility" title="Weekly Summary">
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
      </BasePanel>
      <ConnectorLine className={styles.connectorReport} />
      <PopoutCard className={styles.popoutReport} label="Report Generated" title="Weekly Summary" detail="Status Updated" />
      <article className={`${styles.kpiCard} ${styles.popoutCard}`}>
        <span>Completed Work</span>
        <strong>28</strong>
      </article>
      <div className={styles.statusToast}>Report Generated</div>
    </section>
  );
}

export function OperationsVisual({ heroScaled = false }: { heroScaled?: boolean }) {
  return (
    <div
      className={styles.demoShell}
      data-hero-scaled={heroScaled ? "" : undefined}
      aria-label="Animated business workflow product demo"
    >
      <div className={styles.backgroundGlow} aria-hidden />
      <div className={styles.subtleGrid} aria-hidden />
      <InquiryScene />
      <RoutingScene />
      <ApprovalScene />
      <ReportingScene />
      <div className={styles.sceneDots} aria-hidden>
        <span />
        <span />
        <span />
        <span />
      </div>
    </div>
  );
}
