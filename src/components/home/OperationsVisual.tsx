import styles from "./OperationsVisual.module.scss";
import {
  HiOutlineCheckCircle,
  HiOutlineClipboardList,
  HiOutlineUser,
  HiOutlineLocationMarker,
  HiOutlineDocumentText,
  HiOutlineLockClosed,
  HiOutlineChartBar,
  HiOutlineCog,
  HiOutlineShieldCheck,
} from "react-icons/hi";

export function OperationsVisual({ heroScaled = false }: { heroScaled?: boolean }) {
  return (
    <div className={styles.heroMockup} aria-label="Operating systems platform demo">
      <div className={styles.sceneViewport}>
        <div className={styles.sceneTrack}>
          {/* Scene 1: Vendor Management Dashboard */}
          <div className={styles.scene}>
            <div className={styles.basePanel}>
              <div className={styles.panelHeader}>
                <div>
                  <span>Vendor Record</span>
                  <strong>Elite Sound Productions</strong>
                </div>
                <span className={styles.badge}>Active</span>
              </div>

              <div className={styles.gridContent}>
                <div className={styles.columnLeft}>
                  <div className={styles.section}>
                    <p className={styles.sectionTitle}>Vendor Overview</p>
                    <div className={styles.infoItem}>
                      <HiOutlineUser />
                      <div>
                        <span>Primary contact</span>
                        <strong>Maria Chen</strong>
                      </div>
                    </div>
                    <div className={styles.infoItem}>
                      <HiOutlineLocationMarker />
                      <div>
                        <span>Service area</span>
                        <strong>75 mi radius</strong>
                      </div>
                    </div>
                  </div>
                </div>

                <div className={styles.columnRight}>
                  <div className={styles.section}>
                    <p className={styles.sectionTitle}>Document Compliance</p>
                    <div className={styles.complianceItem}>
                      <HiOutlineDocumentText />
                      <div>
                        <strong>General liability insurance</strong>
                        <span>Valid</span>
                      </div>
                    </div>
                    <div className={styles.complianceItem}>
                      <HiOutlineDocumentText />
                      <div>
                        <strong>W-9 tax form</strong>
                        <span>Valid</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Popout 1: Summary Cards */}
            <div className={styles.popoutGroup}>
              <div className={styles.popout} style={{ '--popout-index': 1 } as React.CSSProperties}>
                <div className={styles.summaryCard}>
                  <HiOutlineDocumentText />
                  <strong>8</strong>
                  <span>Total docs</span>
                </div>
              </div>

              <div className={styles.popout} style={{ '--popout-index': 2 } as React.CSSProperties}>
                <div className={styles.summaryCard}>
                  <HiOutlineCheckCircle />
                  <strong>7</strong>
                  <span>Valid</span>
                </div>
              </div>

              <div className={styles.popout} style={{ '--popout-index': 3 } as React.CSSProperties}>
                <div className={styles.statusCard}>
                  <HiOutlineLockClosed />
                  <span>Portal enabled</span>
                </div>
              </div>
            </div>
          </div>

          {/* Scene 2: Process Operations Dashboard */}
          <div className={styles.scene}>
            <div className={styles.basePanel}>
              <div className={styles.panelHeader}>
                <div>
                  <span>Operations Flow</span>
                  <strong>Workflow Status</strong>
                </div>
                <span className={styles.badge}>Live</span>
              </div>

              <div className={styles.gridContent}>
                <div className={styles.fullWidth}>
                  <div className={styles.section}>
                    <p className={styles.sectionTitle}>Process Stages</p>
                    <div className={styles.stageRow}>
                      <div className={styles.stage}>
                        <div className={styles.stageIcon} style={{ '--stage-color': '#22c55e' } as React.CSSProperties}>
                          <HiOutlineCheckCircle />
                        </div>
                        <span>Requirements</span>
                      </div>
                      <div className={styles.stage}>
                        <div className={styles.stageIcon} style={{ '--stage-color': '#1AC1B9' } as React.CSSProperties}>
                          <HiOutlineCog />
                        </div>
                        <span>Configuration</span>
                      </div>
                      <div className={styles.stage}>
                        <div className={styles.stageIcon} style={{ '--stage-color': '#7F95E4' } as React.CSSProperties}>
                          <HiOutlineChartBar />
                        </div>
                        <span>Implementation</span>
                      </div>
                      <div className={styles.stage}>
                        <div className={styles.stageIcon} style={{ '--stage-color': '#F9447F' } as React.CSSProperties}>
                          <HiOutlineShieldCheck />
                        </div>
                        <span>Deployment</span>
                      </div>
                    </div>
                  </div>

                  <div className={styles.section}>
                    <p className={styles.sectionTitle}>Active Tasks</p>
                    <div className={styles.taskItem}>
                      <HiOutlineClipboardList />
                      <span>Process standardization in progress</span>
                      <strong>8/12</strong>
                    </div>
                    <div className={styles.taskItem}>
                      <HiOutlineClipboardList />
                      <span>Documentation review pending</span>
                      <strong>3/8</strong>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Popout 2: Metrics */}
            <div className={styles.popoutGroup}>
              <div className={styles.popout} style={{ '--popout-index': 1 } as React.CSSProperties}>
                <div className={styles.metricCard}>
                  <span>Completion</span>
                  <strong>68%</strong>
                </div>
              </div>

              <div className={styles.popout} style={{ '--popout-index': 2 } as React.CSSProperties}>
                <div className={styles.metricCard}>
                  <span>On track</span>
                  <strong>Active</strong>
                </div>
              </div>

              <div className={styles.popout} style={{ '--popout-index': 3 } as React.CSSProperties}>
                <div className={styles.timelineCard}>
                  <span>Next milestone</span>
                  <strong>Jun 15</strong>
                </div>
              </div>
            </div>
          </div>

          {/* Scene 3: Data & Reporting Dashboard */}
          <div className={styles.scene}>
            <div className={styles.basePanel}>
              <div className={styles.panelHeader}>
                <div>
                  <span>Business Intelligence</span>
                  <strong>Real-time Reporting</strong>
                </div>
                <span className={styles.badge}>Updated</span>
              </div>

              <div className={styles.gridContent}>
                <div className={styles.columnLeft}>
                  <div className={styles.section}>
                    <p className={styles.sectionTitle}>KPI Overview</p>
                    <div className={styles.kpiItem}>
                      <div className={styles.kpiValue}>94%</div>
                      <span>System health</span>
                    </div>
                    <div className={styles.kpiItem}>
                      <div className={styles.kpiValue}>847</div>
                      <span>Active records</span>
                    </div>
                  </div>
                </div>

                <div className={styles.columnRight}>
                  <div className={styles.section}>
                    <p className={styles.sectionTitle}>Recent Updates</p>
                    <div className={styles.eventItem}>
                      <span className={styles.eventDot}></span>
                      <div>
                        <strong>Data sync completed</strong>
                        <small>2 minutes ago</small>
                      </div>
                    </div>
                    <div className={styles.eventItem}>
                      <span className={styles.eventDot}></span>
                      <div>
                        <strong>Reports generated</strong>
                        <small>15 minutes ago</small>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Popout 3: Analytics */}
            <div className={styles.popoutGroup}>
              <div className={styles.popout} style={{ '--popout-index': 1 } as React.CSSProperties}>
                <div className={styles.chartCard}>
                  <span>Daily volume</span>
                  <div className={styles.miniChart}></div>
                </div>
              </div>

              <div className={styles.popout} style={{ '--popout-index': 2 } as React.CSSProperties}>
                <div className={styles.alertCard}>
                  <span className={styles.alertBadge}>2</span>
                  <strong>Actions needed</strong>
                </div>
              </div>

              <div className={styles.popout} style={{ '--popout-index': 3 } as React.CSSProperties}>
                <div className={styles.statusBar}>
                  <span>Compliance</span>
                  <strong>100%</strong>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className={styles.sceneDots}>
        <span className={styles.dot}></span>
        <span className={styles.dot}></span>
        <span className={styles.dot}></span>
      </div>
    </div>
  );
}
