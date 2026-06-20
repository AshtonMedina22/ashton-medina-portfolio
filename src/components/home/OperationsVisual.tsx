import styles from "./OperationsVisual.module.scss";

const metrics = [
  { phase: "Discovery", label: "Analysis", desc: "Requirements and constraints" },
  { phase: "Execution", label: "Process", desc: "Repeatable operating flow" },
  { phase: "Delivery", label: "Implementation", desc: "Tools, rollout, adoption" },
  { phase: "Management", label: "Visibility", desc: "KPIs and decision context" },
];

const workstreams = [
  { name: "Requirements discovery", status: "Mapped", layer: "Analysis", owner: "Stakeholders" },
  { name: "Process standardization", status: "Documented", layer: "Operations", owner: "Team leads" },
  { name: "Platform implementation", status: "Active", layer: "Systems", owner: "Implementation" },
  { name: "Reporting cadence", status: "Visible", layer: "Data", owner: "Leadership" },
  { name: "Training and adoption", status: "Embedded", layer: "People", owner: "Operators" },
];

export function OperationsVisual({ heroScaled = false }: { heroScaled?: boolean }) {
  return (
    <div className={styles.opsVisual} aria-label="Operating model workspace demo">
      <div className={styles.visualRail} aria-hidden>
        <span className={styles.logoMark}>A</span>
        <span className={styles.activeIcon}>Home</span>
      </div>

      <div className={styles.sceneViewport}>
        <div className={styles.sceneTrack}>
          {/* Scene 1: Metrics */}
          <div className={styles.scene}>
            <div className={styles.visualMain}>
              <div className={styles.visualTopbar}>
                <strong>Operating Model Workspace</strong>
                <span>Business systems view</span>
              </div>
              <div className={styles.visualMetrics}>
                {metrics.map((m) => (
                  <div key={m.label} className={styles.metricCard}>
                    <span>{m.phase}</span>
                    <strong>{m.label}</strong>
                    <em>{m.desc}</em>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Scene 2: Chart */}
          <div className={styles.scene}>
            <div className={styles.visualMain}>
              <div className={styles.visualTopbar}>
                <strong>Operating Model Workspace</strong>
                <span>Business systems view</span>
              </div>
              <section className={styles.workflowChart}>
                <div className={styles.panelHeader}>Operating improvement path</div>
                <div className={styles.chartFrame}>
                  <span style={{ width: "16%" }}></span>
                  <span style={{ width: "34%" }}></span>
                  <span style={{ width: "48%" }}></span>
                  <span style={{ width: "67%" }}></span>
                  <span style={{ width: "82%" }}></span>
                  <span style={{ width: "94%" }}></span>
                </div>
                <div className={styles.chartLabels}>
                  <span>Review</span>
                  <span>Design</span>
                  <span>Implement</span>
                  <span>Adopt</span>
                </div>
              </section>
            </div>
          </div>

          {/* Scene 3: Status */}
          <div className={styles.scene}>
            <div className={styles.visualMain}>
              <div className={styles.visualTopbar}>
                <strong>Operating Model Workspace</strong>
                <span>Business systems view</span>
              </div>
              <section className={styles.workflowStatus}>
                <div className={styles.panelHeader}>Workflow status</div>
                <div className={styles.statusDonut}></div>
                <div className={styles.statusLegend}>
                  <span>
                    <i className={styles.completeDot}></i>
                    <em>Standardized</em>
                    <strong>Ready</strong>
                  </span>
                  <span>
                    <i className={styles.activeDot}></i>
                    <em>In progress</em>
                    <strong>Active</strong>
                  </span>
                  <span>
                    <i className={styles.waitingDot}></i>
                    <em>Review path</em>
                    <strong>Open</strong>
                  </span>
                  <span>
                    <i className={styles.blockedDot}></i>
                    <em>Exception handling</em>
                    <strong>Flagged</strong>
                  </span>
                </div>
              </section>
            </div>
          </div>

          {/* Scene 4: Table */}
          <div className={styles.scene}>
            <div className={styles.visualMain}>
              <div className={styles.visualTopbar}>
                <strong>Operating Model Workspace</strong>
                <span>Business systems view</span>
              </div>
              <section className={styles.workflowTable}>
                <div className={styles.panelHeader}>Operating model workstreams</div>
                <div className={styles.tableHead}>
                  <span>Workstream</span>
                  <span>Status</span>
                  <span>Layer</span>
                  <span>Owner</span>
                </div>
                {workstreams.map((ws) => (
                  <div key={ws.name}>
                    <span>{ws.name}</span>
                    <strong>{ws.status}</strong>
                    <em>{ws.layer}</em>
                    <em>{ws.owner}</em>
                  </div>
                ))}
              </section>
            </div>
          </div>
        </div>
      </div>

      <div className={styles.sceneDots} aria-hidden>
        <span className={styles.dot}></span>
        <span className={styles.dot}></span>
        <span className={styles.dot}></span>
        <span className={styles.dot}></span>
      </div>
    </div>
  );
}
