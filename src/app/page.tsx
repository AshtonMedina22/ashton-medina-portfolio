import { TechStackMarquee } from "@/components/home/TechStackMarquee";
import { about, baseURL, home, person, techStack } from "@/resources";
import { getProjectAccent, getProjectCategory, type ProjectAccent } from "@/resources/projects";
import { getPosts } from "@/utils/utils";
import { Column, Meta, Schema, SmartLink } from "@once-ui-system/core";
import {
  HiOutlineArrowRight,
  HiOutlineChartBar,
  HiOutlineClipboardList,
  HiOutlineCog,
  HiOutlineShieldCheck,
} from "react-icons/hi";
import styles from "./page.module.scss";

const proofStrip = [
  "Business Analysis",
  "Process Improvement",
  "Systems Implementation",
  "Operations Leadership",
  "Reporting & Analytics",
] as const;

const capabilities = [
  {
    icon: HiOutlineClipboardList,
    title: "Operations & Process Improvement",
    text: "Analyze how work moves through teams, identify gaps, and turn informal operating habits into repeatable processes.",
  },
  {
    icon: HiOutlineCog,
    title: "Systems Implementation",
    text: "Support platform selection, configuration, testing, documentation, rollout, and adoption across business functions.",
  },
  {
    icon: HiOutlineChartBar,
    title: "Visibility & Reporting",
    text: "Develop KPI structures, dashboards, operating reports, and leadership views that turn activity into usable context.",
  },
  {
    icon: HiOutlineShieldCheck,
    title: "Controls, Adoption & Scale",
    text: "Establish ownership, approval paths, SOPs, training materials, and governance practices that support sustained execution.",
  },
] as const;

type HomeProjectPreview = {
  title: string;
  description: string;
  href: string;
  category: string;
  accent: ProjectAccent;
};

const projectPreviewRows: Record<
  ProjectAccent,
  {
    header: string;
    status: string;
    rows: [string, string][];
    footer: string[];
  }
> = {
  sales: {
    header: "Order to project flow",
    status: "Project generated",
    rows: [
      ["CRM sync", "65+ fields"],
      ["Project workspace", "Created"],
      ["Task generation", "27 tasks"],
      ["Vendor scope", "Assigned"],
    ],
    footer: ["Zero re-entry", "CRM linked"],
  },
  cyan: {
    header: "Project finance control",
    status: "Closeout gate",
    rows: [
      ["Customer invoice", "Paid"],
      ["Vendor bills", "Matched"],
      ["Margin variance", "-$400 favorable"],
      ["Payout approval", "Eligible"],
    ],
    footer: ["Invoice paid", "Margin protected"],
  },
  teal: {
    header: "Vendor compliance record",
    status: "Portal enabled",
    rows: [
      ["Onboarding state", "Active"],
      ["Insurance document", "Valid"],
      ["RFQ response", "Open"],
      ["Assignment scope", "Sent"],
    ],
    footer: ["Token access", "Docs scoped"],
  },
  indigo: {
    header: "Operations reporting view",
    status: "Leadership packet",
    rows: [
      ["Active projects", "14"],
      ["Overdue tasks", "3 flagged"],
      ["Expected revenue", "$84.2K"],
      ["Report export", "Ready"],
    ],
    footer: ["CRM rollup", "Task visibility"],
  },
};

function getHomeProjects(): HomeProjectPreview[] {
  return getPosts(["src", "app", "work", "projects"])
    .sort(
      (a, b) =>
        new Date(b.metadata.publishedAt).getTime() - new Date(a.metadata.publishedAt).getTime(),
    )
    .map((post) => ({
      title: post.metadata.title,
      description: post.metadata.summary,
      href: `/work/${post.slug}`,
      category: getProjectCategory(post.slug),
      accent: getProjectAccent(post.slug),
    }));
}

export async function generateMetadata() {
  return Meta.generate({
    title: home.title,
    description: home.description,
    baseURL: baseURL,
    path: home.path,
    image: home.image,
  });
}

function OperationsVisual() {
  const workflowRows = [
    ["Requirements discovery", "Mapped", "Analysis", "Stakeholders"],
    ["Process standardization", "Documented", "Operations", "Team leads"],
    ["Platform implementation", "Active", "Systems", "Implementation"],
    ["Reporting cadence", "Visible", "Data", "Leadership"],
    ["Training and adoption", "Embedded", "People", "Operators"],
  ] as const;

  return (
    <div className={styles.opsVisual} aria-label="Operational command-center product preview">
      <div className={styles.visualRail} aria-hidden>
        <span className={styles.logoMark}>A</span>
        <span className={styles.activeIcon}>Home</span>
        <span>Strategy</span>
        <span>Process</span>
        <span>Systems</span>
        <span>Reporting</span>
      </div>
      <div className={styles.visualMain}>
        <div className={styles.visualTopbar}>
          <strong>Operating Model Workspace</strong>
          <span>Business systems view</span>
        </div>
        <div className={styles.visualMetrics}>
          <div>
            <span>Discovery</span>
            <strong>Analysis</strong>
            <em>Requirements and constraints</em>
          </div>
          <div>
            <span>Execution</span>
            <strong>Process</strong>
            <em>Repeatable operating flow</em>
          </div>
          <div>
            <span>Delivery</span>
            <strong>Implementation</strong>
            <em>Tools, rollout, adoption</em>
          </div>
          <div>
            <span>Management</span>
            <strong>Visibility</strong>
            <em>KPIs and decision context</em>
          </div>
        </div>

        <div className={styles.visualDashboardGrid}>
          <section className={styles.workflowChart}>
            <div className={styles.panelHeader}>Operating improvement path</div>
            <div className={styles.chartFrame} aria-hidden>
              <span style={{ inlineSize: "16%" }} />
              <span style={{ inlineSize: "34%" }} />
              <span style={{ inlineSize: "48%" }} />
              <span style={{ inlineSize: "67%" }} />
              <span style={{ inlineSize: "82%" }} />
              <span style={{ inlineSize: "94%" }} />
            </div>
            <div className={styles.chartLabels}>
              <span>Review</span>
              <span>Design</span>
              <span>Implement</span>
              <span>Adopt</span>
            </div>
          </section>

          <section className={styles.workflowStatus}>
            <div className={styles.panelHeader}>Workflow status</div>
            <div className={styles.statusDonut} aria-hidden />
            <div className={styles.statusLegend}>
              <span>
                <i className={styles.completeDot} />
                Standardized <strong>Ready</strong>
              </span>
              <span>
                <i className={styles.activeDot} />
                In progress <strong>Active</strong>
              </span>
              <span>
                <i className={styles.waitingDot} />
                Review path <strong>Open</strong>
              </span>
              <span>
                <i className={styles.blockedDot} />
                Exception handling <strong>Flagged</strong>
              </span>
            </div>
          </section>
        </div>

        <section className={styles.workflowTable}>
          <div className={styles.panelHeader}>Operating model workstreams</div>
          <div className={styles.tableHead}>
            <span>Workstream</span>
            <span>Status</span>
            <span>Layer</span>
            <span>Owner</span>
          </div>
          {workflowRows.map(([workflow, status, record, owner]) => (
            <div key={workflow}>
              <span>{workflow}</span>
              <strong data-state={status}>{status}</strong>
              <em>{record}</em>
              <em>{owner}</em>
            </div>
          ))}
        </section>
      </div>
    </div>
  );
}

function SalesPlatformVisual() {
  const workflowColumns = [
    {
      title: "Sales Intake",
      items: ["Opportunity context", "Customer terms", "Service requirements"],
    },
    {
      title: "Delivery Planning",
      items: ["Project workspace", "Milestone structure", "Internal ownership"],
    },
    {
      title: "Vendor Coordination",
      items: ["Scope packets", "Portal acceptance", "Compliance state"],
    },
    {
      title: "Financial Controls",
      items: ["Margin rules", "Invoice readiness", "Closeout approval"],
    },
  ] as const;

  const controlRows = [
    ["CRM to delivery handoff", "Shared source of truth", "Sales + Operations"],
    ["Vendor assignment flow", "Scoped access and acceptance", "Operations + Vendor"],
    ["Financial governance", "Approval and margin checkpoints", "Finance + Leadership"],
  ] as const;

  const systemLayers = [
    "Workflow states",
    "Role-based ownership",
    "Reporting visibility",
    "Approval controls",
  ] as const;

  return (
    <div className={styles.salesPlatformVisual} aria-label="Sales-to-delivery platform preview">
      <div className={styles.platformTopbar}>
        <strong>Featured project mockup</strong>
        <span>Sales-to-Delivery Platform</span>
      </div>

      <div className={styles.projectMockupShell}>
        <aside className={styles.projectMockupSidebar}>
          <div>
            <strong>Sales-to-Delivery</strong>
            <span>Operational systems workspace</span>
          </div>
          <nav aria-label="Mock platform modules">
            <span>Intake</span>
            <span>Delivery</span>
            <span>Vendors</span>
            <span>Finance</span>
            <span>Reporting</span>
          </nav>
        </aside>

        <section className={styles.projectMockupMain}>
          <div className={styles.mockupHeader}>
            <div>
              <span>Business process architecture</span>
              <h3>Sales-to-Delivery Automation Platform</h3>
            </div>
            <strong>Structured workflow system</strong>
          </div>

          <div className={styles.workflowCanvas}>
            {workflowColumns.map((column) => (
              <article key={column.title}>
                <h4>{column.title}</h4>
                {column.items.map((item) => (
                  <span key={item}>{item}</span>
                ))}
              </article>
            ))}
          </div>

          <div className={styles.mockupLowerGrid}>
            <section className={styles.controlTable}>
              <div className={styles.controlTableHead}>
                <span>Process layer</span>
                <span>System behavior</span>
                <span>Ownership</span>
              </div>
              {controlRows.map(([layer, behavior, ownership]) => (
                <div key={layer}>
                  <strong>{layer}</strong>
                  <span>{behavior}</span>
                  <em>{ownership}</em>
                </div>
              ))}
            </section>

            <aside className={styles.systemLayerPanel}>
              <span>Governance layer</span>
              <div>
                {systemLayers.map((layer) => (
                  <strong key={layer}>{layer}</strong>
                ))}
              </div>
            </aside>
          </div>
        </section>
      </div>
    </div>
  );
}

function ProjectPreview({ project }: { project: HomeProjectPreview }) {
  const preview = projectPreviewRows[project.accent];

  return (
    <article className={styles.projectCard}>
      <div className={`${styles.projectVisual} ${styles[project.accent]}`} aria-hidden>
        <div className={styles.previewChrome}>
          <strong>{preview.header}</strong>
          <span>{preview.status}</span>
        </div>
        <div className={styles.previewTable}>
          {preview.rows.map(([label, state]) => (
            <div key={label}>
              <span>{label}</span>
              <strong>{state}</strong>
            </div>
          ))}
        </div>
        <div className={styles.previewFooter}>
          {preview.footer.map((item) => (
            <span key={item}>{item}</span>
          ))}
        </div>
      </div>
      <div className={styles.projectCardBody}>
        <p>{project.category}</p>
        <h3>{project.title}</h3>
        <span>{project.description}</span>
        <SmartLink href={project.href}>
          View case study
          <HiOutlineArrowRight />
        </SmartLink>
      </div>
    </article>
  );
}

export default function Home() {
  const projects = getHomeProjects();

  return (
    <Column as="main" fillWidth horizontal="center">
      <Schema
        as="webPage"
        baseURL={baseURL}
        path={home.path}
        title={home.title}
        description={home.description}
        image={`/api/og/generate?title=${encodeURIComponent(home.title)}`}
        author={{
          name: person.name,
          url: `${baseURL}${about.path}`,
          image: `${baseURL}${person.avatar}`,
        }}
      />

      <div className={styles.homePage}>
        <section className={styles.heroSection}>
          <div className={styles.heroContent}>
            <span className={styles.eyebrow}>Systems. Workflows. Outcomes.</span>
            <h1>
              Building operational frameworks that help <span>organizations scale.</span>
            </h1>
            <p>
              My work spans operations leadership, business analysis, process improvement,
              platform implementation, workflow automation, reporting, integrations, training, and
              change management across growing organizations.
            </p>
            <div className={styles.heroActions}>
              <SmartLink href="/work" className={styles.primaryCta}>
                Explore Work
                <HiOutlineArrowRight />
              </SmartLink>
              <SmartLink
                href="/work/sales-to-delivery-automation-platform"
                className={styles.secondaryCta}
              >
                View Architecture
              </SmartLink>
            </div>
          </div>
          <OperationsVisual />
        </section>

        <section className={styles.proofStrip} aria-label="Operational system capabilities">
          {proofStrip.map((item) => (
            <span key={item}>{item}</span>
          ))}
        </section>

        <section className={styles.capabilitiesSection}>
          <div className={styles.sectionIntro}>
            <span className={styles.sectionEyebrow}>Capabilities</span>
            <h2>Systems capability across the full operating model.</h2>
            <p>
              My background is not tied to one platform. It covers operational analysis, process
              standardization, software implementation, data visibility, documentation, training,
              and the controls needed to manage growth.
            </p>
          </div>
          <div className={styles.capabilityGrid}>
            {capabilities.map((capability) => {
              const Icon = capability.icon;
              return (
                <article key={capability.title}>
                  <Icon />
                  <h3>{capability.title}</h3>
                  <p>{capability.text}</p>
                </article>
              );
            })}
          </div>
        </section>

        <section className={styles.featuredPlatform}>
          <SalesPlatformVisual />
          <div className={styles.featuredCopy}>
            <span className={styles.sectionEyebrow}>Featured platform</span>
            <h2>Sales-to-Delivery Automation Platform</h2>
            <p>
              A business systems initiative that transformed disconnected sales, delivery, vendor,
              and financial workflows into a structured operational process with shared visibility,
              standardized controls, and automated execution.
            </p>
            <div className={styles.featuredOutcomes}>
              <span>Shared operational visibility</span>
              <span>Standardized workflow controls</span>
              <span>Automated execution handoffs</span>
            </div>
            <SmartLink
              href="/work/sales-to-delivery-automation-platform"
              className={styles.primaryCta}
            >
              View Project
              <HiOutlineArrowRight />
            </SmartLink>
          </div>
        </section>

        <section className={styles.workPreview}>
          <div className={styles.sectionIntro}>
            <span className={styles.sectionEyebrow}>Selected work</span>
            <h2>Selected operational systems.</h2>
            <SmartLink href="/work">
              View all projects
              <HiOutlineArrowRight />
            </SmartLink>
          </div>
          <div className={styles.projectGrid}>
            {projects.map((project) => (
              <ProjectPreview key={project.href} project={project} />
            ))}
          </div>
        </section>

        {techStack.length > 0 && (
          <section className={styles.techBanner} aria-label="Technology stack">
            <span>Tools and platforms used across business systems work</span>
            <TechStackMarquee />
          </section>
        )}
      </div>
    </Column>
  );
}
