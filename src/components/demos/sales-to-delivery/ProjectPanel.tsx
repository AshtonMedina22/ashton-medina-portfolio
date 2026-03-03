"use client";

import styles from "./sales-to-delivery-demo.module.scss";

const TASKS = [
  { title: "Service A Setup", subtasks: "3/4", assignee: "JM", due: "Dec 8, 2024", column: "todo" as const },
  { title: "Service B Configuration", subtasks: "2/3", assignee: "SK", due: "Dec 9, 2024", column: "todo" as const },
  { title: "Service C Coordination", subtasks: "1/3", assignee: "AB", due: "Dec 7, 2024", column: "progress" as const },
  { title: "Contract Confirmation & Payment Receipt", subtasks: "2/2", assignee: "SM", due: "Dec 6, 2024", column: "waiting" as const },
  { title: "Pre-delivery Checklist", subtasks: "3/3", assignee: "JM", due: "Dec 5, 2024", column: "done" as const },
];

const FINANCIAL_CARDS = [
  { label: "Client Revenue", value: "$12,400" },
  { label: "Estimated Cost", value: "$6,200" },
  { label: "Actual Cost", value: "$5,800" },
  { label: "Margin", value: "$6,600", highlight: true },
  { label: "Margin %", value: "53.2%", highlight: true },
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
        <h2 className={styles.projectTitle}>ENG-2024-0842 — TechCorp</h2>
      </div>

      {/* Smart buttons */}
      <div className={styles.smartButtons}>
        <button type="button" className={styles.smartBtn}>
          Sales Order
        </button>
        <button type="button" className={styles.smartBtn}>
          Pipeline Opportunity
        </button>
        <button type="button" className={styles.smartBtn}>
          3 Vendors
        </button>
      </div>

      {/* Financial cards — 5 cards, Margin split for readability */}
      <div className={styles.financialGrid}>
        {FINANCIAL_CARDS.map((card) => (
          <div key={card.label} className={styles.financialCard}>
            <div className={styles.financialLabel}>{card.label}</div>
            <div className={card.highlight ? styles.financialValueHighlight : styles.financialValue}>
              {card.value}
            </div>
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
                    <span className={styles.avatar}>{task.assignee}</span>
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


