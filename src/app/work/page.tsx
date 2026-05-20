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
  }
> = {
  "sales-to-delivery-automation-platform": {
    title: "Sales order to delivery",
    status: "Delivery ready",
    record: "SO-0842 - Meridian Group",
    related: [
      ["Sales order", "Confirmed"],
      ["Project", "Generated"],
      ["Vendor", "Assignment pending"],
    ],
    states: ["Confirmed", "Project created", "Task tree generated", "Ready for execution"],
    rows: [
      ["CRM sync", "Account, contacts, order terms", "Complete"],
      ["Project setup", "Milestones and task tree", "Generated"],
      ["Vendor handoff", "Assignment package", "Pending review"],
      ["Delivery readiness", "Operations workspace", "Ready"],
    ],
  },
  "revenue-financial-control-engine": {
    title: "Revenue financial controls",
    status: "Approval required",
    record: "Project P-1847 - Closeout review",
    related: [
      ["Invoice", "Posted"],
      ["Vendor bill", "Matched"],
      ["Margin", "Review required"],
    ],
    states: ["Invoice issued", "Vendor cost matched", "Margin reviewed", "Payment approved"],
    rows: [
      ["Customer invoice", "INV-1048", "Issued"],
      ["Vendor bill", "BILL-771", "Matched"],
      ["Margin review", "Variance threshold", "Review"],
      ["Closeout approval", "Finance manager", "Waiting"],
    ],
  },
  "vendor-lifecycle-compliance-platform": {
    title: "Vendor lifecycle workspace",
    status: "Portal access active",
    record: "Vendor V-221 - Compliance packet",
    related: [
      ["Onboarding", "Active"],
      ["RFQ", "Response open"],
      ["Portal", "Access enabled"],
    ],
    states: ["Invited", "Portal opened", "Documents received", "Assignment pending"],
    rows: [
      ["W-9 / tax form", "Document upload", "Received"],
      ["Insurance certificate", "Compliance review", "Review"],
      ["RFQ response", "Portal submission", "Open"],
      ["Assignment acceptance", "External vendor action", "Pending"],
    ],
  },
  "operational-intelligence-platform": {
    title: "Operational reporting view",
    status: "Aggregated records",
    record: "Operations overview - Project activity",
    related: [
      ["Workload", "Grouped by owner"],
      ["Projects", "Status visible"],
      ["Events", "Attached"],
    ],
    states: ["Records synced", "Workload grouped", "Events attached", "Reports ready"],
    rows: [
      ["Project workload", "Tasks, milestones, owners", "Visible"],
      ["Sales context", "Account and order records", "Linked"],
      ["Invoice status", "Billing and payment state", "Tracked"],
      ["Event history", "Operational notes and activity", "Current"],
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
          <div className={styles.visualStateTrack}>
            {visual.states.map((state) => (
              <span key={state}>{state}</span>
            ))}
          </div>
        </div>
        {featured && (
          <div className={styles.visualRelationship}>
            <span>Sales order</span>
            <i />
            <span>Generated project</span>
            <i />
            <span>Delivery execution</span>
          </div>
        )}
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
            Systems built for complexity. Designed for <span>impact.</span>
          </h1>
        </div>
        <div className={styles.heroAside}>
          <p>
            A selection of enterprise platforms and automation systems designed to solve
            real operational challenges and deliver measurable business outcomes.
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
