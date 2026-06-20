"use client";

import styles from "./vendor-lifecycle-thumbnail.module.scss";

export function VendorLifecycleThumbnail() {
  return (
    <div className={styles.thumbnailShell}>
      <div className={styles.header}>
        <div className={styles.title}>Vendor Lifecycle Platform</div>
        <div className={styles.badge}>Active</div>
      </div>

      <div className={styles.content}>
        <div className={styles.stage}>
          <div className={styles.stageNumber}>1</div>
          <div className={styles.stageLabel}>Onboard</div>
          <div className={styles.stageSub}>Application</div>
        </div>

        <div className={styles.connector}></div>

        <div className={styles.stage}>
          <div className={styles.stageNumber}>2</div>
          <div className={styles.stageLabel}>Qualify</div>
          <div className={styles.stageSub}>RFQ & Docs</div>
        </div>

        <div className={styles.connector}></div>

        <div className={styles.stage}>
          <div className={styles.stageNumber}>3</div>
          <div className={styles.stageLabel}>Engage</div>
          <div className={styles.stageSub}>Portal Access</div>
        </div>

        <div className={styles.connector}></div>

        <div className={styles.stage}>
          <div className={styles.stageNumber}>4</div>
          <div className={styles.stageLabel}>Monitor</div>
          <div className={styles.stageSub}>Compliance</div>
        </div>
      </div>

      <div className={styles.footer}>
        <div className={styles.metric}>
          <div className={styles.value}>15</div>
          <div className={styles.label}>Portal Routes</div>
        </div>
        <div className={styles.metric}>
          <div className={styles.value}>100%</div>
          <div className={styles.label}>Auditable</div>
        </div>
        <div className={styles.metric}>
          <div className={styles.value}>Real-Time</div>
          <div className={styles.label}>Tracking</div>
        </div>
      </div>
    </div>
  );
}
