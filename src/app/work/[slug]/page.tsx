import { notFound } from "next/navigation";
import { getPosts } from "@/utils/utils";
import { Meta, Schema, SmartLink } from "@once-ui-system/core";
import { baseURL, about, person, work } from "@/resources";
import { CustomMDX } from "@/components/shared/mdx";
import { ScrollToHash } from "@/components/shared/ScrollToHash";
import { TechStack } from "@/components/work/TechStack";
import { SalesToDeliveryDemo } from "@/components/demos/sales-to-delivery/SalesToDeliveryDemo";
import { VendorLifecycleDemo } from "@/components/demos/vendor-lifecycle/VendorLifecycleDemo";
import { RevenueFinancialDemo } from "@/components/demos/revenue-financial/RevenueFinancialDemo";
import { OperationalIntelligenceDemo } from "@/components/demos/operational-intelligence/OperationalIntelligenceDemo";
import { Metadata } from "next";
import styles from "./ProjectPage.module.scss";

const projectProfiles: Record<
  string,
  {
    eyebrow: string;
    systemType: string;
    proof: { value: string; label: string }[];
    brief: string[];
  }
> = {
  "sales-to-delivery-automation-platform": {
    eyebrow: "Sales-to-Delivery System",
    systemType: "ERP workflow automation",
    proof: [
      { value: "65+", label: "Synced fields" },
      { value: "4", label: "Business objects" },
      { value: "Zero", label: "Manual re-entry" },
      { value: "Live", label: "Project generation" },
    ],
    brief: ["Confirmed order", "Project record", "Task tree", "CRM linkage"],
  },
  "revenue-financial-control-engine": {
    eyebrow: "Financial Governance System",
    systemType: "Revenue control engine",
    proof: [
      { value: "7-Tier", label: "Compensation table" },
      { value: "5", label: "Financial states" },
      { value: "Real-time", label: "Margin logic" },
      { value: "Zero", label: "Unauthorized pricing" },
    ],
    brief: ["Margin guardrails", "Approval gates", "Variance tracking", "Payout logic"],
  },
  "vendor-lifecycle-compliance-platform": {
    eyebrow: "Vendor Lifecycle System",
    systemType: "Compliance and portal platform",
    proof: [
      { value: "15", label: "Secure portal routes" },
      { value: "6", label: "Work order states" },
      { value: "4", label: "Alert states" },
      { value: "Full", label: "Lifecycle auditability" },
    ],
    brief: ["Internal control", "Vendor portal", "Compliance alerts", "E-signature"],
  },
  "operational-intelligence-platform": {
    eyebrow: "Operational Intelligence System",
    systemType: "Operational reporting workspace",
    proof: [
      { value: "Live", label: "KPI visibility" },
      { value: "Auto", label: "Reporting workflow" },
      { value: "Export", label: "Operational records" },
      { value: "Drill-down", label: "Business context" },
    ],
    brief: ["Executive view", "Operational KPIs", "Record drill-down", "Report exports"],
  },
};

function renderDemo(slugPath: string) {
  if (slugPath === "sales-to-delivery-automation-platform") return <SalesToDeliveryDemo />;
  if (slugPath === "vendor-lifecycle-compliance-platform") return <VendorLifecycleDemo />;
  if (slugPath === "revenue-financial-control-engine") return <RevenueFinancialDemo />;
  if (slugPath === "operational-intelligence-platform") return <OperationalIntelligenceDemo />;
  return null;
}

export async function generateStaticParams(): Promise<{ slug: string }[]> {
  const posts = getPosts(["src", "app", "work", "projects"]);
  return posts.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string | string[] }>;
}): Promise<Metadata> {
  const routeParams = await params;
  const slugPath = Array.isArray(routeParams.slug)
    ? routeParams.slug.join("/")
    : routeParams.slug || "";

  const posts = getPosts(["src", "app", "work", "projects"]);
  const post = posts.find((post) => post.slug === slugPath);

  if (!post) return {};

  const base = Meta.generate({
    title: post.metadata.title,
    description: post.metadata.summary,
    baseURL: baseURL,
    image: post.metadata.image || `/api/og/generate?title=${post.metadata.title}`,
    path: `${work.path}/${post.slug}`,
  });
  return {
    ...base,
    title: post.metadata.title,
    openGraph: {
      ...(typeof base?.openGraph === "object" && base.openGraph),
      title: post.metadata.title,
    },
  };
}

export default async function Project({
  params,
}: {
  params: Promise<{ slug: string | string[] }>;
}) {
  const routeParams = await params;
  const slugPath = Array.isArray(routeParams.slug)
    ? routeParams.slug.join("/")
    : routeParams.slug || "";

  const post = getPosts(["src", "app", "work", "projects"]).find((post) => post.slug === slugPath);

  if (!post) {
    notFound();
  }

  const profile = projectProfiles[slugPath] ?? {
    eyebrow: "Enterprise System",
    systemType: "Operational platform",
    proof: [
      { value: `${post.metadata.techStack?.length ?? 0}`, label: "Technologies" },
      { value: post.metadata.demo ? "Live" : "Written", label: "Case study" },
      { value: new Date(post.metadata.publishedAt).getFullYear().toString(), label: "Published" },
      { value: "ERP", label: "System focus" },
    ],
    brief: ["Architecture", "Workflow logic", "Automation", "Operational control"],
  };
  const demo = post.metadata.demo ? renderDemo(slugPath) : null;

  return (
    <main className={styles.pageWrap}>
      <Schema
        as="blogPosting"
        baseURL={baseURL}
        path={`${work.path}/${post.slug}`}
        title={post.metadata.title}
        description={post.metadata.summary}
        datePublished={post.metadata.publishedAt}
        dateModified={post.metadata.publishedAt}
        image={
          post.metadata.image || `/api/og/generate?title=${encodeURIComponent(post.metadata.title)}`
        }
        author={{
          name: person.name,
          url: `${baseURL}${about.path}`,
          image: `${baseURL}${person.avatar}`,
        }}
      />

      <section className={styles.hero}>
        <div className={styles.heroCopy}>
          <SmartLink href="/work" className={styles.heroBreadcrumb}>
            Work / Case Study
          </SmartLink>
          <span className={styles.eyebrow}>{profile.eyebrow}</span>
          <h1 className={styles.heroTitle}>{post.metadata.title}</h1>
          <p className={styles.heroTagline}>{post.metadata.summary}</p>
          {post.metadata.techStack && post.metadata.techStack.length > 0 && (
            <div className={styles.heroTech}>
              <TechStack technologies={post.metadata.techStack} size="s" />
            </div>
          )}
          <div className={styles.heroActions}>
            {demo && (
              <a href="#live-demo" className={styles.primaryCta}>
                View live demo
              </a>
            )}
            <SmartLink href="/work" className={styles.secondaryCta}>
              Back to work
            </SmartLink>
          </div>
        </div>

        <aside className={styles.heroPanel} aria-label="Project system summary">
          <div className={styles.panelTopline}>
            <span>{profile.systemType}</span>
            <span>Built by Ashton Medina</span>
          </div>
          <div className={styles.panelMetric}>
            <span>Primary system outcome</span>
            <strong>{profile.proof[0]?.value ?? "ERP"}</strong>
            <em>{profile.proof[0]?.label ?? "Operational control"}</em>
          </div>
          <div className={styles.panelFlow}>
            {profile.brief.map((item, index) => (
              <div className={styles.flowItem} key={item}>
                <span>{String(index + 1).padStart(2, "0")}</span>
                <strong>{item}</strong>
              </div>
            ))}
          </div>
        </aside>
      </section>

      <section className={styles.proofStrip} aria-label="Project proof points">
        {profile.proof.map((item) => (
          <div className={styles.proofItem} key={`${item.value}-${item.label}`}>
            <strong>{item.value}</strong>
            <span>{item.label}</span>
          </div>
        ))}
      </section>

      {demo && (
        <section id="live-demo" className={styles.mockupSection} aria-labelledby="live-demo-heading">
          <div className={styles.sectionHeading}>
            <span className={styles.eyebrow}>Live Demo</span>
            <h2 id="live-demo-heading">Curated Product Preview</h2>
            <p>
              A focused ERP mockup showing the core workflow, business logic, and operational
              structure without turning the page into a full admin screen.
            </p>
          </div>
          <div className={styles.demoSection}>
            <div className={styles.demoFrame}>{demo}</div>
          </div>
        </section>
      )}

      <section className={styles.articleSection} aria-labelledby="case-study-heading">
        <div className={styles.sectionHeading}>
          <span className={styles.eyebrow}>Case Study</span>
          <h2 id="case-study-heading">Architecture, Workflow Logic, and Technical Depth</h2>
        </div>
        <article className={styles.articleProse}>
          <CustomMDX source={post.content} />
        </article>
      </section>

      <ScrollToHash />
    </main>
  );
}
