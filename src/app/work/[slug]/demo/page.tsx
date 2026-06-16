import { redirect } from "next/navigation";

export async function generateStaticParams() {
  return [
    { slug: "sales-to-delivery-automation-platform" },
    { slug: "vendor-lifecycle-compliance-platform" },
    { slug: "revenue-financial-control-engine" },
    { slug: "operational-intelligence-platform" },
    { slug: "multi-tenant-enterprise-operations-hub" },
    { slug: "event-driven-automation-secure-ai-gateway" },
  ];
}

export default async function Demo({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  redirect(`/work/${slug}`);
}
