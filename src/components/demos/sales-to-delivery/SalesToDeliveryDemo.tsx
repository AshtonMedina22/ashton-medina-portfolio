"use client";

import {
  HiOutlineBriefcase,
  HiOutlineChartBar,
  HiOutlineClipboardList,
  HiOutlineCog,
  HiOutlineCurrencyDollar,
  HiOutlineDatabase,
  HiOutlineDocumentText,
  HiOutlineExternalLink,
  HiOutlineHome,
  HiOutlineLightningBolt,
  HiOutlineShieldCheck,
  HiOutlineUsers,
} from "react-icons/hi";
import {
  CLIENT_NAME,
  SALES_ORDER_ID,
  CLIENT_REVENUE_FORMATTED,
  ESTIMATED_COST_FORMATTED,
  MARGIN_FORMATTED,
  MARGIN_PCT_FORMATTED,
} from "../projectData";
import styles from "./sales-to-delivery-demo.module.scss";

const navItems = [
  [HiOutlineHome, "Home"],
  [HiOutlineUsers, "CRM"],
  [HiOutlineDatabase, "Sales"],
  [HiOutlineBriefcase, "Projects"],
  [HiOutlineClipboardList, "Tasks"],
  [HiOutlineShieldCheck, "Vendors"],
  [HiOutlineCurrencyDollar, "Financials"],
  [HiOutlineChartBar, "Reports"],
  [HiOutlineCog, "Settings"],
] as const;

const workflowRows = [
  ["Sales Order Validated", "Data Gate", "Confirmed", "Jordan Reeves", "May 21, 2026 9:12 AM"],
  ["Project Workspace Provisioned", "Pipeline", "Active", "Operations Team", "May 21, 2026 9:13 AM"],
  ["Task Template Orchestrated", "Workflow", "Completed", "System", "May 21, 2026 9:14 AM"],
  ["Vendor Assignments Synced", "Workflow", "In Progress", "Procurement", "May 21, 2026 9:16 AM"],
  ["Financial Controls Inherited", "Governance", "Pending Approval", "Finance", "May 21, 2026 9:18 AM"],
] as const;

const generatedTasks = [
  ["Implementation milestone", "12 tasks from validated service line", "Ready"],
  ["Data migration milestone", "8 tasks with assigned owner", "Queued"],
  ["Training and closeout", "7 tasks plus governance gate", "Ready"],
] as const;

const syncedMetadata = [
  ["Client Revenue", CLIENT_REVENUE_FORMATTED],
  ["Estimated Cost", ESTIMATED_COST_FORMATTED],
  ["Projected Margin", `${MARGIN_FORMATTED} (${MARGIN_PCT_FORMATTED})`],
  ["Source Link", SALES_ORDER_ID],
  ["Linked Records", "17"],
] as const;

const outcomeItems = [
  "AI-ready data",
  "Full traceability",
  "Real-time visibility",
  "Validation controls inherited",
] as const;

function StatusBadge({ state }: { state: string }) {
  return <span className={styles[`state${state.replace(/\s+/g, "")}`]}>{state}</span>;
}

export function SalesToDeliveryDemo() {
  return (
    <div className={styles.shellWrap}>
      <div className={styles.erpShell}>
        <aside className={styles.erpSidebar} aria-label="ERP navigation">
          <div className={styles.erpLogo}>A</div>
          <nav>
            {navItems.map(([Icon, label]) => (
              <span key={label} className={label === "Projects" ? styles.activeNavItem : undefined}>
                <Icon />
                {label}
              </span>
            ))}
          </nav>
        </aside>

        <section className={styles.erpWorkspace}>
          <header className={styles.erpTopbar}>
            <div>
              <strong>Sales Order {SALES_ORDER_ID}</strong>
              <StatusBadge state="Confirmed" />
            </div>
            <div className={styles.erpTopbarActions}>
              <button type="button">
                View in CRM
                <HiOutlineExternalLink />
              </button>
              <button type="button">Actions</button>
            </div>
          </header>

          <div className={styles.erpTabs} aria-label="Sales order tabs">
            {["Overview", "Project", "Tasks", "Vendors", "Financials", "Activity", "Documents"].map((tab) => (
              <span key={tab} className={tab === "Overview" ? styles.activeTab : undefined}>
                {tab}
              </span>
            ))}
          </div>

          <div className={styles.erpGrid}>
            <section className={styles.orderRecordPanel}>
              <div className={styles.moduleEyebrow}>Confirmed sales order (data validated)</div>
              <div className={styles.recordTitleRow}>
                <h2>{SALES_ORDER_ID}</h2>
                <StatusBadge state="Confirmed" />
              </div>
              <dl className={styles.recordDetails}>
                <div><dt>Customer</dt><dd>{CLIENT_NAME}</dd></div>
                <div><dt>Order date</dt><dd>May 6, 2026</dd></div>
                <div><dt>Order value</dt><dd>{CLIENT_REVENUE_FORMATTED}</dd></div>
                <div><dt>Sales rep</dt><dd>Jordan Reeves</dd></div>
              </dl>
              <button type="button" className={styles.inlineAction}>
                View in CRM
                <HiOutlineExternalLink />
              </button>
            </section>

            <section className={styles.generatedProjectPanel}>
              <div className={styles.moduleEyebrow}>Auto-generated project (MLOps-orchestrated)</div>
              <div className={styles.projectHeader}>
                <div>
                  <HiOutlineBriefcase />
                  <h2>Delivery Workspace</h2>
                </div>
                <StatusBadge state="Active" />
              </div>
              <dl className={styles.projectDetails}>
                <div><dt>Project ID</dt><dd>PRJ-0187</dd></div>
                <div><dt>Workspace owner</dt><dd>Operations Team</dd></div>
                <div><dt>Created from</dt><dd>{SALES_ORDER_ID}</dd></div>
                <div><dt>Start date</dt><dd>May 6, 2026</dd></div>
                <div><dt>Target delivery</dt><dd>Jun 18, 2026</dd></div>
              </dl>
              <button type="button" className={styles.inlineAction}>Open workspace</button>
            </section>

            <aside className={styles.generatedTaskPanel}>
              <div className={styles.moduleEyebrow}>Generated task preview (dynamic workflow)</div>
              <div className={styles.generatedTaskList}>
                {generatedTasks.map(([title, detail, state]) => (
                  <div key={title}>
                    <HiOutlineClipboardList />
                    <span>
                      <strong>{title}</strong>
                      <em>{detail}</em>
                    </span>
                    <StatusBadge state={state} />
                  </div>
                ))}
              </div>
              <button type="button" className={styles.inlineAction}>View full task tree</button>
            </aside>

            <section className={styles.workflowActivityPanel}>
              <div className={styles.moduleEyebrow}>MLOps workflow traceability</div>
              <div className={styles.workflowActivityTable}>
                <div className={styles.workflowHead}>
                  <span>Item</span>
                  <span>Type</span>
                  <span>Status</span>
                  <span>Owner</span>
                  <span>Updated</span>
                </div>
                {workflowRows.map(([item, type, status, owner, updated]) => (
                  <div key={item}>
                    <span>{item}</span>
                    <em>{type}</em>
                    <StatusBadge state={status} />
                    <em>{owner}</em>
                    <em>{updated}</em>
                  </div>
                ))}
              </div>
              <button type="button" className={styles.inlineAction}>View all workflow activity</button>
            </section>

            <aside className={styles.syncedMetadataPanel}>
              <div className={styles.moduleEyebrow}>AI-ready synced metadata</div>
              <div className={styles.metadataRows}>
                {syncedMetadata.map(([label, value]) => (
                  <div key={label}>
                    <span>{label}</span>
                    <strong>{value}</strong>
                  </div>
                ))}
              </div>
              <button type="button" className={styles.inlineAction}>View synced fields</button>
            </aside>
          </div>
        </section>
      </div>

      <section className={styles.systemOutcomeBar}>
        <div>
          <HiOutlineLightningBolt />
          <span>System outcome: MLOps-ready project provisioning</span>
          <p>Confirmed order triggers a traceable data pipeline that provisions the project workspace, task tree, CRM linkage, and financial controls with AI-ready data integrity.</p>
        </div>
        <div>
          {outcomeItems.map((item) => (
            <span key={item}>
              <HiOutlineShieldCheck />
              {item}
            </span>
          ))}
        </div>
      </section>
    </div>
  );
}
