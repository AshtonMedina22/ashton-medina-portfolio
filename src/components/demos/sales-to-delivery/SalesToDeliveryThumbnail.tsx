"use client";

import styles from "./sales-to-delivery-thumbnail.module.scss";

export function SalesToDeliveryThumbnail() {
  return (
    <div className={styles.thumbnailShell}>
      <div className={styles.header}>
        <div className={styles.title}>Sales Orders → Projects</div>
        <div className={styles.dots}>
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>

      <div className={styles.content}>
        <div className={styles.column}>
          <div className={styles.label}>Sales Input</div>
          <div className={styles.item}>
            <div className={styles.icon}></div>
            <div className={styles.text}>Client Details</div>
          </div>
          <div className={styles.item}>
            <div className={styles.icon}></div>
            <div className={styles.text}>Scope & Budget</div>
          </div>
          <div className={styles.item}>
            <div className={styles.icon}></div>
            <div className={styles.text}>Timeline</div>
          </div>
        </div>

        <div className={styles.arrow}>→</div>

        <div className={styles.column}>
          <div className={styles.label}>Auto-Generated</div>
          <div className={styles.item}>
            <div className={styles.iconCheck}></div>
            <div className={styles.text}>Project Created</div>
          </div>
          <div className={styles.item}>
            <div className={styles.iconCheck}></div>
            <div className={styles.text}>Tasks Assigned</div>
          </div>
          <div className={styles.item}>
            <div className={styles.iconCheck}></div>
            <div className={styles.text}>Vendors Notified</div>
          </div>
        </div>
      </div>

      <div className={styles.footer}>
        <div className={styles.stat}>
          <div className={styles.number}>1,675+</div>
          <div className={styles.label}>Lines of Code</div>
        </div>
        <div className={styles.stat}>
          <div className={styles.number}>65+</div>
          <div className={styles.label}>Synced Fields</div>
        </div>
      </div>
    </div>
  );
}
