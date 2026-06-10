import styles from "./OperationsVisual.module.scss";

const workflowRows = [
  ["Requirements discovery", "Mapped", "Analysis", "Stakeholders"],
  ["Process standardization", "Documented", "Operations", "Team leads"],
  ["Platform implementation", "Active", "Systems", "Implementation"],
  ["Reporting cadence", "Visible", "Data", "Leadership"],
  ["Training and adoption", "Embedded", "People", "Operators"],
] as const;

export function OperationsVisual({ heroScaled = false }: { heroScaled?: boolean }) {
  return (
    <div
      className={styles.opsVisual}
      data-hero-scaled={heroScaled ? "" : undefined}
      aria-label="Operational command-center product preview"
    >
      <div className={styles.visualRail} aria-hidden>
        <span className={styles.logoMark}>A</span>
        <span className={styles.activeIcon}>Home</span>
        <span>Strategy</span>
        <span>Process</span>
        <span>Systems</span>
        <span>Reporting</span>
      </div>
      <div className={styles.visualMain}>
        <div className={styles.visualTopbar}>
          <strong>Operating Model Workspace</strong>
          <span>Business systems view</span>
        </div>
        <div className={styles.visualMetrics}>
          <div>
            <span>Discovery</span>
            <strong>Analysis</strong>
            <em>Requirements and constraints</em>
          </div>
          <div>
            <span>Execution</span>
            <strong>Process</strong>
            <em>Repeatable operating flow</em>
          </div>
          <div>
            <span>Delivery</span>
            <strong>Implementation</strong>
            <em>Tools, rollout, adoption</em>
          </div>
          <div>
            <span>Management</span>
            <strong>Visibility</strong>
            <em>KPIs and decision context</em>
          </div>
        </div>

        <div className={styles.visualDashboardGrid}>
          <section className={styles.workflowChart}>
            <div className={styles.panelHeader}>Operating improvement path</div>
            <div className={styles.chartFrame} aria-hidden>
              <span style={{ inlineSize: "16%" }} />
              <span style={{ inlineSize: "34%" }} />
              <span style={{ inlineSize: "48%" }} />
              <span style={{ inlineSize: "67%" }} />
              <span style={{ inlineSize: "82%" }} />
              <span style={{ inlineSize: "94%" }} />
            </div>
            <div className={styles.chartLabels}>
              <span>Review</span>
              <span>Design</span>
              <span>Implement</span>
              <span>Adopt</span>
            </div>
          </section>

          <section className={styles.workflowStatus}>
            <div className={styles.panelHeader}>Workflow status</div>
            <div className={styles.statusDonut} aria-hidden />
            <div className={styles.statusLegend}>
              <span>
                <i className={styles.completeDot} />
                Standardized <strong>Ready</strong>
              </span>
              <span>
                <i className={styles.activeDot} />
                In progress <strong>Active</strong>
              </span>
              <span>
                <i className={styles.waitingDot} />
                Review path <strong>Open</strong>
              </span>
              <span>
                <i className={styles.blockedDot} />
                Exception handling <strong>Flagged</strong>
              </span>
            </div>
          </section>
        </div>

        <section className={styles.workflowTable}>
          <div className={styles.panelHeader}>Operating model workstreams</div>
          <div className={styles.tableHead}>
            <span>Workstream</span>
            <span>Status</span>
            <span>Layer</span>
            <span>Owner</span>
          </div>
          {workflowRows.map(([workflow, status, record, owner]) => (
            <div key={workflow}>
              <span>{workflow}</span>
              <strong data-state={status}>{status}</strong>
              <em>{record}</em>
              <em>{owner}</em>
            </div>
          ))}
        </section>
      </div>
    </div>
  );
}
