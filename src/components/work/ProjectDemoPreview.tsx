"use client";

import styles from "./ProjectDemoPreview.module.scss";

function slugFromHref(href: string) {
  return href.replace(/^\/work\//, "").replace(/\/$/, "");
}

function SalesExecutionThumbnail() {
  return (
    <div className={styles.thumbnailStage}>
      <div className={styles.thumbnailGlow} />
      <section className={styles.thumbnailCard} aria-label="Sales to execution thumbnail">
        <div className={styles.thumbnailHeader}>
          <span className={styles.thumbnailBadge}>Sales</span>
          <strong>Order to Execution</strong>
        </div>
        <div className={styles.thumbnailFlow}>
          <span>Signed</span>
          <i />
          <span>Scoped</span>
          <i />
          <span>Assigned</span>
        </div>
        <div className={styles.thumbnailFooter}>
          <div>
            <small>handoff status</small>
            <strong>Ready</strong>
          </div>
          <div className={styles.miniProgress}>
            <span />
            <span />
            <span />
          </div>
        </div>
      </section>
    </div>
  );
}

function VendorManagementThumbnail() {
  return (
    <div className={styles.thumbnailStage}>
      <div className={styles.thumbnailGlow} />
      <section className={styles.thumbnailCard} aria-label="Vendor management thumbnail">
        <div className={styles.thumbnailHeader}>
          <span className={styles.thumbnailBadge}>Vendor</span>
          <strong>Profile Control</strong>
        </div>
        <div className={styles.vendorSnapshot}>
          <div className={styles.vendorMark}>VM</div>
          <div>
            <span>Active partner</span>
            <small>Compliance verified</small>
          </div>
        </div>
        <div className={styles.thumbnailFooter}>
          <div>
            <small>risk state</small>
            <strong>Clear</strong>
          </div>
          <div className={styles.miniProgress}>
            <span />
            <span />
            <span />
          </div>
        </div>
      </section>
    </div>
  );
}

export function ProjectDemoPreview({ href }: { href: string }) {
  const slug = slugFromHref(href);

  if (slug === "sales-to-delivery-automation-platform") {
    return <SalesExecutionThumbnail />;
  }

  if (slug === "vendor-lifecycle-compliance-platform") {
    return <VendorManagementThumbnail />;
  }

  return null;
}
