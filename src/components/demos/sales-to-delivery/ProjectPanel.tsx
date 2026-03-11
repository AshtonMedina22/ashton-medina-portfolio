"use client";

import {
  CLIENT_NAME,
  SALES_ORDER_ID,
  CLIENT_REVENUE_FORMATTED,
  ESTIMATED_COST_FORMATTED,
  ACTUAL_COST_FORMATTED,
  MARGIN_FORMATTED,
  MARGIN_PCT_FORMATTED,
} from "../projectData";
import styles from "./sales-to-delivery-demo.module.scss";

const TASKS = [
  { title: "Service A Setup", subtasks: "3/4", due: "Dec 8, 2026", column: "todo" as const },
  { title: "Service B Configuration", subtasks: "2/3", due: "Dec 9, 2026", column: "todo" as const },
  { title: "Service C Coordination", subtasks: "1/3", due: "Dec 7, 2026", column: "progress" as const },
  { title: "Contract Confirmation & Payment Receipt", subtasks: "2/2", due: "Dec 6, 2026", column: "waiting" as const },
  { title: "Pre-delivery Checklist", subtasks: "3/3", due: "Dec 5, 2026", column: "done" as const },
];

const FINANCIAL_CARDS = [
  { label: "Client Revenue", value: CLIENT_REVENUE_FORMATTED },
  { label: "Estimated Cost", value: ESTIMATED_COST_FORMATTED },
  { label: "Actual Cost", value: ACTUAL_COST_FORMATTED },
  { label: "Margin", value: MARGIN_FORMATTED },
  { label: "Margin %", value: MARGIN_PCT_FORMATTED },
];

const KANBAN_COLUMNS = [
  { id: "todo", label: "To Do" },
  { id: "progress", label: "In Progress" },
  { id: "waiting", label: "Waiting" },
  { id: "done", label: "Done" },
] as const;

export function ProjectPanel() {
  return (
    <div className={`${styles.panel} ${styles.panelRight}`}>
      <h3 className={styles.panelLabel}>Auto-Generated Project</h3>
      {/* Project header */}
      <div>
        <h2 className={styles.projectTitle}>Project from {SALES_ORDER_ID} - {CLIENT_NAME}</h2>
      </div>

      {/* Smart buttons */}
      <div className={styles.smartButtons}>
        <button type="button" className={`${styles.smartBtn} ${styles.smartBtnActive}`}>
          Sales Order
        </button>
        <button type="button" className={styles.smartBtn}>
          Pipeline Opportunity
        </button>
        <button type="button" className={styles.smartBtn}>
          3 assignments
        </button>
      </div>

      {/* Financial cards — 5 cards, same style for all */}
      <div className={styles.financialGrid}>
        {FINANCIAL_CARDS.map((card) => (
          <div key={card.label} className={styles.financialCard}>
            <div className={styles.financialLabel}>{card.label}</div>
            <div className={styles.financialValue}>{card.value}</div>
          </div>
        ))}
      </div>

      {/* Kanban board — populated columns */}
      <div className={styles.kanbanGrid}>
        {KANBAN_COLUMNS.map((col) => (
          <div key={col.id} className={styles.kanbanColumn}>
            <div className={styles.kanbanColumnHeader}>{col.label}</div>
            <div className={styles.kanbanCards}>
              {TASKS.filter((t) => t.column === col.id).map((task) => (
                <div key={task.title} className={styles.kanbanCard}>
                  <div className={styles.kanbanCardTitle}>{task.title}</div>
                  <div className={styles.kanbanCardFooter}>
                    <span className={styles.subtaskCount}>{task.subtasks} subtasks</span>
                  </div>
                  <div className={styles.kanbanCardDue}>Due {task.due}</div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}


