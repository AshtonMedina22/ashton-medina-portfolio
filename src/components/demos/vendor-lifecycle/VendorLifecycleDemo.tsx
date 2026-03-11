"use client";

import { InternalVendorRecord } from "./InternalVendorRecord";
import { VendorPortalView } from "./VendorPortalView";
import styles from "./vendor-lifecycle-demo.module.scss";

export function VendorLifecycleDemo() {
  return (
    <div className={styles.shell}>
      <div className={styles.shellTopBar}>
        <div className={styles.windowDots} aria-hidden>
          <span />
          <span />
          <span />
        </div>
        <span className={styles.shellTitle}>Vendor Management & Portal</span>
      </div>
      <div className={styles.demoContent}>
        <div className={styles.demo}>
          <div className={styles.sectionDividerRow}>
            <span className={styles.sectionDividerLabel}>Internal View</span>
            <span className={styles.sectionDividerLabel}>Vendor Portal View</span>
          </div>
          <div className={styles.mainGrid}>
            <InternalVendorRecord />
            <VendorPortalView />
          </div>
        </div>
      </div>
    </div>
  );
}
