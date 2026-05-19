"use client";

import {
  CLIENT_NAME,
  SALES_ORDER_ID,
  CLIENT_REVENUE_FORMATTED,
  ESTIMATED_COST_FORMATTED,
  MARGIN_FORMATTED,
} from "../projectData";
import styles from "./sales-to-delivery-demo.module.scss";

const orderLines = [
  { service: "Service A - Premier", qty: 1, subtotal: "$4,000" },
  { service: "Service B - Classic", qty: 1, subtotal: "$4,200" },
  { service: "Service C - Essentials", qty: 1, subtotal: "$4,200" },
];

const generatedTasks = [
  { title: "Implementation kickoff", detail: "12 generated tasks", state: "Ready" },
  { title: "Data migration", detail: "8 generated tasks", state: "Queued" },
  { title: "Training plan", detail: "7 generated tasks", state: "Ready" },
];

const syncFields = [
  { label: "Client revenue", value: CLIENT_REVENUE_FORMATTED },
  { label: "Estimated cost", value: ESTIMATED_COST_FORMATTED },
  { label: "Projected margin", value: MARGIN_FORMATTED },
];

export function SalesToDeliveryDemo() {
  return (
    <div className={styles.shellWrap}>
      <div className={styles.salesDemoShell}>
        <div className={styles.shellTopBar}>
          <div className={styles.windowDots} aria-hidden>
            <span />
            <span />
            <span />
          </div>
          <span className={styles.shellTitle}>Sales Order to Project</span>
        </div>

        <div className={styles.salesStatusStrip}>
          <span>{SALES_ORDER_ID}</span>
          <span>{CLIENT_NAME}</span>
          <strong>Confirmed</strong>
          <strong>Project auto-generated</strong>
        </div>

        <div className={styles.salesComposition}>
          <section className={styles.salesHeroModule} aria-label="Confirmed order to generated project">
            <div className={styles.salesHeroHeader}>
              <div>
                <p>Order-to-project automation</p>
                <h2>Confirmed sale became a delivery-ready project</h2>
              </div>
              <span>0 manual re-entry</span>
            </div>

            <div className={styles.salesTransformGrid}>
              <div className={styles.salesOrderPreview}>
                <div className={styles.moduleEyebrow}>Confirmed sales order</div>
                <h3>{CLIENT_NAME}</h3>
                <div className={styles.recordMeta}>
                  <span>Order #{SALES_ORDER_ID}</span>
                  <span>Signed Dec 6, 2026</span>
                  <span>Booked</span>
                </div>

                <div className={styles.orderLinePreview}>
                  {orderLines.map((line) => (
                    <div key={line.service}>
                      <span>{line.service}</span>
                      <small>Qty {line.qty}</small>
                      <strong>{line.subtotal}</strong>
                    </div>
                  ))}
                </div>

                <div className={styles.orderTotal}>
                  <span>Total contracted value</span>
                  <strong>{CLIENT_REVENUE_FORMATTED}</strong>
                </div>
              </div>

              <div className={styles.salesFlowIndicator} aria-hidden>
                <span />
                <strong>creates</strong>
                <span />
              </div>

              <div className={styles.salesProjectPreview}>
                <div className={styles.moduleEyebrow}>Auto-generated project</div>
                <h3>Project from {SALES_ORDER_ID}</h3>
                <div className={styles.recordMeta}>
                  <span>Client linked</span>
                  <span>Task tree copied</span>
                  <span>Owners assigned</span>
                </div>

                <div className={styles.projectStagePreview}>
                  <div>
                    <span>To do</span>
                    <strong>2</strong>
                  </div>
                  <div>
                    <span>In progress</span>
                    <strong>1</strong>
                  </div>
                  <div>
                    <span>Waiting</span>
                    <strong>1</strong>
                  </div>
                  <div>
                    <span>Done</span>
                    <strong>1</strong>
                  </div>
                </div>

                <div className={styles.projectTrace}>
                  Sales order, opportunity, project, assignments, and financial records share the same source ID.
                </div>
              </div>
            </div>
          </section>

          <aside className={styles.salesSupportRail} aria-label="Generated task and sync summary">
            <section className={styles.supportModule}>
              <div className={styles.moduleEyebrow}>Generated task preview</div>
              <div className={styles.taskPreviewList}>
                {generatedTasks.map((task) => (
                  <div key={task.title}>
                    <span>{task.title}</span>
                    <small>{task.detail}</small>
                    <strong>{task.state}</strong>
                  </div>
                ))}
              </div>
            </section>

            <section className={styles.supportModule}>
              <div className={styles.moduleEyebrow}>Synced metadata</div>
              <div className={styles.syncFieldGrid}>
                {syncFields.map((field) => (
                  <div key={field.label}>
                    <span>{field.label}</span>
                    <strong>{field.value}</strong>
                  </div>
                ))}
              </div>
            </section>
          </aside>
        </div>
      </div>
    </div>
  );
}
