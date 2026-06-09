"use client";

import { SalesToDeliveryDemo } from "@/components/demos/sales-to-delivery/SalesToDeliveryDemo";
import { VendorLifecycleDemo } from "@/components/demos/vendor-lifecycle/VendorLifecycleDemo";
import { RevenueFinancialDemo } from "@/components/demos/revenue-financial/RevenueFinancialDemo";
import { OperationalIntelligenceDemo } from "@/components/demos/operational-intelligence/OperationalIntelligenceDemo";
import styles from "./ProjectDemoPreview.module.scss";

function renderDemo(slug: string) {
  if (slug === "sales-to-delivery-automation-platform") return <SalesToDeliveryDemo />;
  if (slug === "vendor-lifecycle-compliance-platform") return <VendorLifecycleDemo />;
  if (slug === "revenue-financial-control-engine") return <RevenueFinancialDemo />;
  if (slug === "operational-intelligence-platform") return <OperationalIntelligenceDemo />;
  return null;
}

function slugFromHref(href: string) {
  return href.replace(/^\/work\//, "").replace(/\/$/, "");
}

export function ProjectDemoPreview({ href }: { href: string }) {
  const slug = slugFromHref(href);
  const demo = renderDemo(slug);

  if (!demo) {
    return null;
  }

  return (
    <div className={styles.previewViewport} aria-hidden>
      <div className={styles.previewScaler}>{demo}</div>
    </div>
  );
}
