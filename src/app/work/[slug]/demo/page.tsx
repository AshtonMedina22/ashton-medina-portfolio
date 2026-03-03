import { notFound } from "next/navigation";
import { getPosts } from "@/utils/utils";

export async function generateStaticParams() {
  return [
    { slug: "sales-to-delivery-automation-platform" },
    { slug: "vendor-lifecycle-compliance-platform" },
    { slug: "revenue-financial-control-engine" },
    { slug: "operational-intelligence-platform" },
  ];
}
import { SalesToDeliveryDemo } from "@/components/demos/sales-to-delivery/SalesToDeliveryDemo";
import { VendorLifecycleDemo } from "@/components/demos/vendor-lifecycle/VendorLifecycleDemo";
import { RevenueFinancialDemo } from "@/components/demos/revenue-financial/RevenueFinancialDemo";
import { OperationalIntelligenceDemo } from "@/components/demos/operational-intelligence/OperationalIntelligenceDemo";
import { SmartLink, Text } from "@once-ui-system/core";
import styles from "./demo.module.scss";

const DEMO_SLUGS = [
  "sales-to-delivery-automation-platform",
  "vendor-lifecycle-compliance-platform",
  "revenue-financial-control-engine",
  "operational-intelligence-platform",
] as const;

function getProjectTitle(slug: string): string {
  const posts = getPosts(["src", "app", "work", "projects"]);
  const post = posts.find((p) => p.slug === slug);
  return post?.metadata?.title ?? "Project";
}

export default async function Demo({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  if (!DEMO_SLUGS.includes(slug as (typeof DEMO_SLUGS)[number])) {
    notFound();
  }

  const projectTitle = getProjectTitle(slug);

  return (
    <div className={styles.demoWrapper}>
      <div className={styles.demoBar}>
        <SmartLink href={`/work/${slug}`} className={styles.backLink}>
          ← Back to {projectTitle}
        </SmartLink>
      </div>
      <div className={styles.demoContent}>
        {slug === "sales-to-delivery-automation-platform" && (
          <SalesToDeliveryDemo />
        )}
        {slug === "vendor-lifecycle-compliance-platform" && (
          <VendorLifecycleDemo />
        )}
        {slug === "revenue-financial-control-engine" && (
          <RevenueFinancialDemo />
        )}
        {slug === "operational-intelligence-platform" && (
          <OperationalIntelligenceDemo />
        )}
      </div>
    </div>
  );
}
