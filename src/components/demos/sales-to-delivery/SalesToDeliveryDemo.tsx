"use client";

import { SalesOrderPanel } from "./SalesOrderPanel";
import { ProjectPanel } from "./ProjectPanel";
import styles from "./sales-to-delivery-demo.module.scss";

export function SalesToDeliveryDemo() {
  return (
    <div className={styles.demo}>
      {/* ERP-style header bar */}
      <header className={styles.header}>
        <div>
          <h1 className={styles.headerTitle}>Sales Order → Project</h1>
          <p className={styles.headerMeta}>
            Confirmed sales order with auto-generated execution project
          </p>
        </div>
      </header>

      {/* Split layout with flow indicator */}
      <div className={styles.splitLayout}>
        <SalesOrderPanel />
        <div className={styles.flowConnector} aria-hidden>
          <span className={styles.flowArrow}>→</span>
          <span className={styles.flowLabel}>creates</span>
        </div>
        <ProjectPanel />
      </div>
    </div>
  );
}
