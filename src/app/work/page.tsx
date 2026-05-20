import { Meta, Schema, SmartLink } from "@once-ui-system/core";
import {
  HiOutlineArrowRight,
  HiOutlineChartBar,
  HiOutlineCube,
  HiOutlineExternalLink,
  HiOutlineLightningBolt,
  HiOutlineShieldCheck,
  HiOutlineShare,
} from "react-icons/hi";
import { baseURL, about, person, work } from "@/resources";
import { getPosts } from "@/utils/utils";
import styles from "./WorkPage.module.scss";

type ProjectPost = ReturnType<typeof getPosts>[number];

const categoryMap: Record<string, string> = {
  "sales-to-delivery-automation-platform": "Workflow automation platform",
  "revenue-financial-control-engine": "Financial control system",
  "vendor-lifecycle-compliance-platform": "Vendor lifecycle platform",
  "operational-intelligence-platform": "Operational reporting platform",
};

const visualMap: Record<string, string> = {
  "sales-to-delivery-automation-platform": "salesVisual",
  "revenue-financial-control-engine": "revenueVisual",
  "vendor-lifecycle-compliance-platform": "vendorVisual",
  "operational-intelligence-platform": "opsVisual",
};

const accentIconMap: Record<string, typeof HiOutlineCube> = {
  "sales-to-delivery-automation-platform": HiOutlineShare,
  "revenue-financial-control-engine": HiOutlineChartBar,
  "vendor-lifecycle-compliance-platform": HiOutlineShieldCheck,
  "operational-intelligence-platform": HiOutlineLightningBolt,
};

const featuredStats = [
  { value: "Zero", label: "Manual re-entry" },
  { value: "65+", label: "Synced fields" },
  { value: "CRM-to-project", label: "Automation" },
  { value: "Vendor workflow", label: "Coordination" },
] as const;

const visualContent: Record<
  string,
  {
    title: string;
    status: string;
    record: string;
    related: Array<[string, string]>;
    states: string[];
    rows: Array<[string, string, string]>;
    side: Array<[string, string]>;
  }
> = {
  "sales-to-delivery-automation-platform": {
    title: "Confirmed order automation",
    status: "Project generated",
    record: "SO-0842 - Meridian Group delivery workspace",
    related: [
      ["CRM", "65+ fields"],
      ["Project", "Created"],
      ["Vendors", "Scoped"],
    ],
    states: ["Order confirmed", "CRM synced", "Project generated", "Closeout governed"],
    rows: [
      ["CRM field sync", "Account, contacts, quote terms, billing rules", "Complete"],
      ["Project workspace", "Milestones, task owners, source order link", "Created"],
      ["Vendor coordination", "Assignment packet with scoped portal access", "In review"],
      ["Closeout controls", "Invoice, bill, payment, and margin checks", "Enforced"],
    ],
    side: [
      ["Synced fields", "65+"],
      ["Generated tasks", "27"],
      ["Manual re-entry", "0"],
    ],
  },
  "revenue-financial-control-engine": {
    title: "Project financial closeout",
    status: "Approval gate active",
    record: "SO-0842 - finance-controlled project closeout",
    related: [
      ["Invoice", "Paid"],
      ["Bills", "Matched"],
      ["Margin", "53.2%"],
    ],
    states: ["Invoice paid", "Bills matched", "Margin reviewed", "Payout released"],
    rows: [
      ["Customer invoice", "INV-1048 tied to SO-0842", "Paid"],
      ["Vendor bill match", "Three vendor costs reconciled to project", "Matched"],
      ["Margin threshold", "$6,600 margin retained after actual cost", "Passed"],
      ["Compensation release", "Payout blocked until closeout checks pass", "Eligible"],
    ],
    side: [
      ["Margin", "53.2%"],
      ["Variance", "-$400"],
      ["Payout", "Eligible"],
    ],
  },
  "vendor-lifecycle-compliance-platform": {
    title: "Vendor compliance and portal scope",
    status: "Portal active",
    record: "Elite Sound Productions - assignment packet",
    related: [
      ["Vendor", "Active"],
      ["Docs", "7 valid"],
      ["RFQ", "Open"],
    ],
    states: ["Onboarded", "Docs verified", "RFQ opened", "Assignment sent"],
    rows: [
      ["W-9 / tax form", "Internal compliance record", "Received"],
      ["Insurance certificate", "Expiration tracked before assignment", "Valid"],
      ["RFQ response", "Vendor submits quote through portal", "Open"],
      ["Assignment acceptance", "Vendor sees scope, date, docs, and messaging", "Pending"],
    ],
    side: [
      ["Access routes", "15"],
      ["Docs", "8"],
      ["Needs review", "1"],
    ],
  },
  "operational-intelligence-platform": {
    title: "Operational reporting rollup",
    status: "Live records aggregated",
    record: "Delivery pipeline - executive operations view",
    related: [
      ["Projects", "14 live"],
      ["Tasks", "3 overdue"],
      ["Reports", "Queued"],
    ],
    states: ["CRM aggregated", "Tasks surfaced", "Revenue rolled up", "Report exported"],
    rows: [
      ["SO-0842", "Meridian Group delivery, owner Sarah M.", "Confirmed"],
      ["SO-0887", "Acme Inc proposal, owner James K.", "Follow-up"],
      ["SO-0882", "Acme Corp contract, owner Sarah M.", "Contract sent"],
      ["Overdue delivery tasks", "Three task records need manager review", "Flagged"],
    ],
    side: [
      ["Health", "86%"],
      ["Active", "14"],
      ["Overdue", "3"],
    ],
  },
};

export async function generateMetadata() {
  return Meta.generate({
    title: work.title,
    description: work.description,
    baseURL: baseURL,
    image: `/api/og/generate?title=${encodeURIComponent(work.title)}`,
    path: work.path,
  });
}

function sortProjects(projects: ProjectPost[]) {
  return [...projects].sort((a, b) => {
    return new Date(b.metadata.publishedAt).getTime() - new Date(a.metadata.publishedAt).getTime();
  });
}

function ProjectVisual({ slug, featured = false }: { slug: string; featured?: boolean }) {
  const visualClass = visualMap[slug] ?? "salesVisual";
  const visual = visualContent[slug] ?? visualContent["sales-to-delivery-automation-platform"];

  return (
    <div className={`${styles.projectVisual} ${styles[visualClass]} ${featured ? styles.featuredVisual : ""}`} aria-hidden>
      <div className={styles.visualRail}>
        <span />
        <i />
        <i />
        <i />
      </div>
      <div className={styles.visualCanvas}>
        <div className={styles.visualTopline}>
          <strong>{visual.title}</strong>
          <span>{visual.status}</span>
        </div>
        <div className={styles.visualRecordHeader}>
          <strong>{visual.record}</strong>
          <div>
            {visual.related.map(([label, value]) => (
              <span key={label}>
                <em>{label}</em>
                {value}
              </span>
            ))}
          </div>
        </div>
        <div className={styles.visualBody}>
          <div className={styles.visualTable}>
            <div className={styles.visualTableHead}>
              <span>Workflow item</span>
              <span>Record context</span>
              <span>Status</span>
            </div>
            {visual.rows.map(([item, context, status]) => (
              <div key={item}>
                <span>{item}</span>
                <span>{context}</span>
                <strong>{status}</strong>
              </div>
            ))}
          </div>
          <div className={styles.visualSidePanel}>
            {visual.side.map(([label, value]) => (
              <span key={label}>
                <em>{label}</em>
                <strong>{value}</strong>
              </span>
            ))}
          </div>
        </div>
        <div className={styles.visualStateTrack}>
          {visual.states.map((state) => (
            <span key={state}>{state}</span>
          ))}
        </div>
      </div>
    </div>
  );
}

function ProjectCard({ project }: { project: ProjectPost }) {
  const Icon = accentIconMap[project.slug] ?? HiOutlineCube;

  return (
    <article className={styles.projectCard}>
      <div className={styles.cardHeader}>
        <span className={styles.cardIcon}>
          <Icon />
        </span>
        <div>
          <h3>{project.metadata.title}</h3>
          <p>{categoryMap[project.slug] ?? "Enterprise platform"}</p>
        </div>
      </div>
      <ProjectVisual slug={project.slug} />
      <p className={styles.cardSummary}>{project.metadata.summary}</p>
      <SmartLink href={`/work/${project.slug}`} className={styles.textLink}>
        View project
        <HiOutlineArrowRight />
      </SmartLink>
    </article>
  );
}

export default function Work() {
  const projects = sortProjects(getPosts(["src", "app", "work", "projects"]));
  const featured = projects[0];
  const secondaryProjects = projects.slice(1);

  return (
    <main className={styles.workPage}>
      <Schema
        as="webPage"
        baseURL={baseURL}
        path={work.path}
        title={work.title}
        description={work.description}
        image={`/api/og/generate?title=${encodeURIComponent(work.title)}`}
        author={{
          name: person.name,
          url: `${baseURL}${about.path}`,
          image: `${baseURL}${person.avatar}`,
        }}
      />

      <section className={styles.workHero}>
        <div>
          <span className={styles.eyebrow}>My work</span>
          <h1>
            Operational systems <span>portfolio.</span>
          </h1>
        </div>
        <div className={styles.heroAside}>
          <p>
            Four ERP, workflow, vendor, finance, and reporting systems built around
            business operations, controls, and execution visibility.
          </p>
        </div>
      </section>

      {featured && (
        <section className={styles.featuredProject}>
          <div className={styles.featuredCopy}>
            <span className={styles.sectionLabel}>Featured project</span>
            <h2>{featured.metadata.title}</h2>
            <p className={styles.projectCategory}>{categoryMap[featured.slug]}</p>
            <p className={styles.featuredSummary}>{featured.metadata.summary}</p>
            <div className={styles.featuredStats}>
              {featuredStats.map((stat) => (
                <div key={stat.label}>
                  <strong>{stat.value}</strong>
                  <span>{stat.label}</span>
                </div>
              ))}
            </div>
            <div className={styles.featuredActions}>
              <SmartLink href={`/work/${featured.slug}`} className={styles.primaryCta}>
                View project
                <HiOutlineArrowRight />
              </SmartLink>
              {featured.metadata.demo && (
                <SmartLink href={`/work/${featured.slug}/demo`} className={styles.secondaryCta}>
                  Live demo
                  <HiOutlineExternalLink />
                </SmartLink>
              )}
            </div>
          </div>
          <ProjectVisual slug={featured.slug} featured />
        </section>
      )}

      <section className={styles.allProjectsSection}>
        <span className={styles.sectionLabel}>All projects</span>
        <div className={styles.projectGrid}>
          {secondaryProjects.map((project) => (
            <ProjectCard key={project.slug} project={project} />
          ))}
        </div>
        <SmartLink href="/work" className={styles.viewAllButton}>
          View all projects
          <HiOutlineArrowRight />
        </SmartLink>
      </section>
    </main>
  );
}
