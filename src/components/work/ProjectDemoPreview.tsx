"use client";

import { SalesToDeliveryThumbnail } from "@/components/demos/sales-to-delivery/SalesToDeliveryThumbnail";
import { VendorLifecycleThumbnail } from "@/components/demos/vendor-lifecycle/VendorLifecycleThumbnail";
import { SalesToDeliveryDemo } from "@/components/demos/sales-to-delivery/SalesToDeliveryDemo";
import { VendorLifecycleDemo } from "@/components/demos/vendor-lifecycle/VendorLifecycleDemo";
import { RevenueFinancialDemo } from "@/components/demos/revenue-financial/RevenueFinancialDemo";
import { OperationalIntelligenceDemo } from "@/components/demos/operational-intelligence/OperationalIntelligenceDemo";
import { AdminOperationsDemo } from "@/components/demos/admin-operations/AdminOperationsDemo";
import { SecureAiGatewayDemo } from "@/components/demos/secure-ai-gateway/SecureAiGatewayDemo";
import { BusinessAccessDemo } from "@/components/demos/business-access/BusinessAccessDemo";
import { CalendarDocumentDemo } from "@/components/demos/calendar-document/CalendarDocumentDemo";
import { InventoryPurchasingDemo } from "@/components/demos/inventory-purchasing/InventoryPurchasingDemo";
import styles from "./ProjectDemoPreview.module.scss";

function renderDemo(slug: string) {
  if (slug === "sales-to-delivery-automation-platform") return <SalesToDeliveryThumbnail />;
  if (slug === "vendor-lifecycle-compliance-platform") return <VendorLifecycleThumbnail />;
  if (slug === "revenue-financial-control-engine") return <RevenueFinancialDemo />;
  if (slug === "operational-intelligence-platform") return <OperationalIntelligenceDemo />;
  if (slug === "multi-tenant-enterprise-operations-hub") return <AdminOperationsDemo />;
  if (slug === "event-driven-automation-secure-ai-gateway") return <SecureAiGatewayDemo />;
  if (slug === "business-access-software-cost-control-dashboard") return <BusinessAccessDemo />;
  if (slug === "calendar-document-follow-up-automation-system") return <CalendarDocumentDemo />;
  if (slug === "inventory-purchasing-allocation-system") return <InventoryPurchasingDemo />;
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
