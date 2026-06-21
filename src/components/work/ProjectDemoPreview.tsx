"use client";

import styles from "./ProjectDemoPreview.module.scss";

function slugFromHref(href: string) {
  return href.replace(/^\/work\//, "").replace(/\/$/, "");
}

function SalesExecutionThumbnail() {
  return (
    <div className={styles.thumbnailStage}>
      <div className={styles.orbPrimary} />
      <div className={styles.orbAccent} />
      <section className={`${styles.thumbnailWindow} ${styles.salesWindow}`}>
        <div className={styles.windowBar}>
          <span />
          <span />
          <span />
          <p>Sales to Execution</p>
        </div>
        <div className={styles.salesLayout}>
          <div className={styles.pipelinePanel}>
            <div className={styles.panelHeader}>
              <span>Confirmed order</span>
              <strong>$18.4K</strong>
            </div>
            <div className={styles.pipelineTrack}>
              <i />
              <i />
              <i />
            </div>
            <div className={styles.orderRows}>
              <span />
              <span />
              <span />
            </div>
          </div>
          <div className={styles.executionPanel}>
            <div className={styles.statusPill}>Ready</div>
            <h3>Project handoff</h3>
            <div className={styles.taskStack}>
              <span>Scope synced</span>
              <span>Team assigned</span>
              <span>Vendor tasks routed</span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

function VendorManagementThumbnail() {
  return (
    <div className={styles.thumbnailStage}>
      <div className={styles.orbPrimary} />
      <div className={styles.orbAccent} />
      <section className={`${styles.thumbnailWindow} ${styles.vendorWindow}`}>
        <div className={styles.windowBar}>
          <span />
          <span />
          <span />
          <p>Vendor Management</p>
        </div>
        <div className={styles.vendorLayout}>
          <div className={styles.vendorProfile}>
            <div className={styles.vendorAvatar}>VM</div>
            <div>
              <strong>Premier vendor</strong>
              <span>Compliant · Active</span>
            </div>
          </div>
          <div className={styles.complianceGrid}>
            <article>
              <small>COI</small>
              <strong>Valid</strong>
            </article>
            <article>
              <small>RFQs</small>
              <strong>12</strong>
            </article>
            <article>
              <small>Rating</small>
              <strong>4.8</strong>
            </article>
          </div>
          <div className={styles.vendorTimeline}>
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
