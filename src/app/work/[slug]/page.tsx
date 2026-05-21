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
import {
  HiOutlineBriefcase,
  HiOutlineCheckCircle,
  HiOutlineClipboardList,
  HiOutlineCurrencyDollar,
  HiOutlineDocumentText,
  HiOutlineFolder,
  HiOutlineGlobeAlt,
  HiOutlineLink,
  HiOutlineLockClosed,
  HiOutlineLocationMarker,
  HiOutlineOfficeBuilding,
  HiOutlinePencilAlt,
  HiOutlineShieldCheck,
  HiOutlineTrendingUp,
  HiOutlineUsers,
} from "react-icons/hi";
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

function SalesHeroPanel() {
  const workflowRows = [
    ["CRM source", "Linked"],
    ["Project record", "Generated"],
    ["Task tree", "27 tasks"],
    ["Vendor packet", "Scoped"],
  ] as const;

  return (
    <aside className={`${styles.heroPanel} ${styles.salesHeroPanel}`} aria-label="Sales-to-delivery system summary">
      <div className={styles.salesPanelTopbar}>
        <strong>Sales Order to Project</strong>
        <span>SO-0842</span>
      </div>

      <div className={styles.salesHeroGrid}>
        <section className={styles.salesOrderCard}>
          <div className={styles.moduleEyebrow}>Confirmed sales order</div>
          <div className={styles.salesRecordTitle}>
            <h2>SO-0842</h2>
            <span>Confirmed</span>
          </div>
          <div className={styles.salesRecordMeta}>
            <div><HiOutlineUsers /><strong>Atlas Group</strong><span>Account</span></div>
            <div><HiOutlineCurrencyDollar /><strong>$12,400</strong><span>Order value</span></div>
            <div><HiOutlineDocumentText /><strong>65+ fields</strong><span>CRM sync</span></div>
          </div>
        </section>

        <section className={styles.salesProjectCard}>
          <div className={styles.moduleEyebrow}>Generated project</div>
          <div className={styles.projectWorkspacePreview}>
            <div>
              <HiOutlineBriefcase />
              <strong>Delivery Workspace</strong>
              <span>PRJ-0187</span>
            </div>
            <div>
              <span>Milestones copied</span>
              <span>Tasks generated</span>
              <span>Owners assigned</span>
            </div>
          </div>
          <div className={styles.salesProjectStats}>
            <span><strong>5</strong> Milestones</span>
            <span><strong>27</strong> Tasks</span>
            <span><strong>3</strong> Vendors</span>
          </div>
        </section>
      </div>

      <div className={styles.salesWorkflowRows}>
        {workflowRows.map(([label, state]) => (
          <div key={label}>
            <span>{label}</span>
            <strong>{state}</strong>
          </div>
        ))}
      </div>

      <div className={styles.salesOutcomeStrip}>
        <span><HiOutlineLink />CRM linked</span>
        <span><HiOutlineClipboardList />Tasks created</span>
        <span><HiOutlineShieldCheck />Controls inherited</span>
      </div>
    </aside>
  );
}

function RevenueHeroPanel() {
  return (
    <aside className={`${styles.heroPanel} ${styles.revenueHeroPanel}`} aria-label="Revenue financial control system summary">
      <div className={styles.revenuePanelTopbar}>
        <strong>Revenue Financial Control</strong>
        <span>Closeout view</span>
      </div>

      <section className={styles.revenueMarginPreview}>
        <div>
          <span>Protected margin</span>
          <strong>53.2%</strong>
          <em>$6,600 retained after vendor bill reconciliation</em>
        </div>
        <div className={styles.revenueTrend} aria-hidden>
          <i style={{ inlineSize: "18%" }} />
          <i style={{ inlineSize: "35%" }} />
          <i style={{ inlineSize: "31%" }} />
          <i style={{ inlineSize: "52%" }} />
          <i style={{ inlineSize: "49%" }} />
          <i style={{ inlineSize: "72%" }} />
        </div>
      </section>

      <div className={styles.revenueMetricGrid}>
        <div><span>Revenue</span><strong>$12,400</strong></div>
        <div><span>Actual cost</span><strong>$5,800</strong></div>
        <div><span>Variance</span><strong>-$400</strong></div>
      </div>

      <div className={styles.revenueControlRows}>
        <div><HiOutlineDocumentText /><span>Invoice paid</span><strong>INV-2301</strong></div>
        <div><HiOutlineOfficeBuilding /><span>Vendor bills matched</span><strong>3 of 3</strong></div>
        <div><HiOutlineTrendingUp /><span>Margin threshold met</span><strong>Passed</strong></div>
        <div><HiOutlineLockClosed /><span>Closeout approval</span><strong>Eligible</strong></div>
      </div>

      <div className={styles.revenueOutcomeStrip}>
        <span><HiOutlineShieldCheck />Margin protected</span>
        <span><HiOutlineCurrencyDollar />Payout gated</span>
      </div>
    </aside>
  );
}

function VendorHeroPanel() {
  const complianceRows = [
    ["General liability", "Valid"],
    ["W-9 tax form", "Valid"],
    ["Business license", "Review"],
  ] as const;

  return (
    <aside className={`${styles.heroPanel} ${styles.vendorHeroPanel}`} aria-label="Vendor lifecycle control system summary">
      <div className={styles.vendorPanelTopbar}>
        <strong>Vendor Lifecycle Control</strong>
        <span>Portal enabled</span>
      </div>

      <section className={styles.vendorRecordPreview}>
        <div className={styles.moduleEyebrow}>Internal vendor record</div>
        <div className={styles.vendorRecordHeader}>
          <h2>Elite Sound Productions</h2>
          <span>Premier vendor</span>
        </div>
        <div className={styles.vendorHeroBadges}>
          <span><HiOutlineCheckCircle />Active vendor</span>
          <span><HiOutlineFolder />7 docs valid</span>
          <span><HiOutlineGlobeAlt />Portal enabled</span>
        </div>
      </section>

      <div className={styles.vendorTitleGrid}>
        <section className={styles.vendorOverviewMini}>
          <div><HiOutlineUsers /><span>Primary contact</span><strong>Maria Chen</strong></div>
          <div><HiOutlineLocationMarker /><span>Service area</span><strong>Los Angeles, CA</strong></div>
          <div><HiOutlineClipboardList /><span>Open RFQs</span><strong>3 awaiting response</strong></div>
        </section>

        <section className={styles.vendorComplianceMini}>
          <div className={styles.moduleEyebrow}>Document compliance</div>
          {complianceRows.map(([item, state]) => (
            <div key={item}>
              <span>{item}</span>
              <strong>{state}</strong>
            </div>
          ))}
        </section>
      </div>

      <section className={styles.vendorPortalMini}>
        <div>
          <span>Vendor portal preview</span>
          <strong>Assignment #0842</strong>
        </div>
        <p>Atlas Group delivery scope, secure token, acceptance, and signature workflow.</p>
        <div className={styles.vendorPortalActions}>
          <span><HiOutlinePencilAlt />Awaiting acceptance</span>
          <strong><HiOutlineLockClosed />Internal pricing hidden</strong>
        </div>
      </section>

      <div className={styles.vendorOutcomeStrip}>
        <span><HiOutlineDocumentText />Documents scoped</span>
        <span><HiOutlineClipboardList />RFQ workflow</span>
        <span><HiOutlineShieldCheck />Portal access controlled</span>
      </div>
    </aside>
  );
}

function ProjectHeroPanel({
  slugPath,
  profile,
}: {
  slugPath: string;
  profile: {
    systemType: string;
    proof: { value: string; label: string }[];
    brief: string[];
  };
}) {
  if (slugPath === "sales-to-delivery-automation-platform") {
    return <SalesHeroPanel />;
  }
  if (slugPath === "revenue-financial-control-engine") {
    return <RevenueHeroPanel />;
  }
  if (slugPath === "vendor-lifecycle-compliance-platform") {
    return <VendorHeroPanel />;
  }

  return (
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
  );
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

        <ProjectHeroPanel slugPath={slugPath} profile={profile} />
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
