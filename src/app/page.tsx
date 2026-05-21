import { Column, Meta, Schema, SmartLink } from "@once-ui-system/core";
import {
  HiOutlineArrowRight,
  HiOutlineBriefcase,
  HiOutlineCalendar,
  HiOutlineChartBar,
  HiOutlineClipboardList,
  HiOutlineCurrencyDollar,
  HiOutlineDocumentText,
  HiOutlineLink,
  HiOutlineShieldCheck,
  HiOutlineShare,
  HiOutlineUsers,
} from "react-icons/hi";
import { home, about, person, baseURL, techStack } from "@/resources";
import { TechStackMarquee } from "@/components/home/TechStackMarquee";
import styles from "./page.module.scss";

const proofMetrics = [
  { value: "4", label: "Enterprise systems" },
  { value: "65+", label: "Synced fields" },
  { value: "Vendor portal access controls", label: "" },
  { value: "Project-level financial controls", label: "" },
] as const;

const proofStrip = [
  "ERP Workflow Automation",
  "Financial Governance",
  "Vendor Lifecycle Systems",
  "Operational Intelligence",
  "Platform Engineering",
] as const;

const capabilities = [
  {
    icon: HiOutlineShare,
    title: "Workflow Automation",
    text: "Convert operational handoffs into governed system flows across sales, delivery, vendors, and internal teams.",
  },
  {
    icon: HiOutlineShieldCheck,
    title: "Financial Governance",
    text: "Embed approval states, margin controls, access rules, and payout readiness directly into transaction records.",
  },
  {
    icon: HiOutlineChartBar,
    title: "Operational Intelligence",
    text: "Turn live ERP activity into readable executive views with KPIs, variance signals, and drill-down context.",
  },
] as const;

const selectedProjects = [
  {
    title: "Revenue Financial Control Engine",
    description: "Margin protection, approval checkpoints, vendor variance, and compensation governance.",
    href: "/work/revenue-financial-control-engine",
    category: "Financial governance",
    accent: "cyan",
  },
  {
    title: "Vendor Lifecycle Compliance Platform",
    description: "Controlled onboarding, compliance state, tokenized portal access, and assignment acceptance.",
    href: "/work/vendor-lifecycle-compliance-platform",
    category: "Vendor lifecycle",
    accent: "teal",
  },
  {
    title: "Operational Intelligence Platform",
    description: "Executive operational visibility across KPIs, reporting, engagement records, and exports.",
    href: "/work/operational-intelligence-platform",
    category: "Operational intelligence",
    accent: "indigo",
  },
] as const;

const projectPreviewRows = {
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
} as const;

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
    ["Sales order to project", "Complete", "SO-0842", "Automation"],
    ["Project planning", "Complete", "PRJ-0187", "Operations"],
    ["Vendor assignment packet", "In review", "ASN-0842", "Portal"],
    ["Invoice control check", "Ready", "INV-2301", "Finance"],
    ["Closeout gate", "Blocked", "PRJ-0187", "Finance"],
  ] as const;

  return (
    <div className={styles.opsVisual} aria-label="Operational command-center product preview">
      <div className={styles.visualRail} aria-hidden>
        <span className={styles.logoMark}>A</span>
        <span className={styles.activeIcon}>Home</span>
        <span>CRM</span>
        <span>Projects</span>
        <span>Vendors</span>
        <span>Reports</span>
      </div>
      <div className={styles.visualMain}>
        <div className={styles.visualTopbar}>
          <strong>Odoo 19 Operations Workspace</strong>
          <span>ERP workflow view</span>
        </div>
        <div className={styles.visualMetrics}>
          <div>
            <span>Synced fields</span>
            <strong>65+</strong>
            <em>CRM to project</em>
          </div>
          <div>
            <span>Tasks generated</span>
            <strong>27</strong>
            <em>From templates</em>
          </div>
          <div>
            <span>Vendors scoped</span>
            <strong>3</strong>
            <em>Portal access</em>
          </div>
          <div>
            <span>Controls</span>
            <strong>Ready</strong>
            <em>Invoice + margin</em>
          </div>
        </div>

        <div className={styles.visualDashboardGrid}>
          <section className={styles.workflowChart}>
            <div className={styles.panelHeader}>Order-to-delivery progress</div>
            <div className={styles.chartFrame} aria-hidden>
              <span style={{ inlineSize: "16%" }} />
              <span style={{ inlineSize: "34%" }} />
              <span style={{ inlineSize: "48%" }} />
              <span style={{ inlineSize: "67%" }} />
              <span style={{ inlineSize: "82%" }} />
              <span style={{ inlineSize: "94%" }} />
            </div>
            <div className={styles.chartLabels}>
              <span>Confirmed</span>
              <span>Project</span>
              <span>Vendor</span>
              <span>Closeout</span>
            </div>
          </section>

          <section className={styles.workflowStatus}>
            <div className={styles.panelHeader}>Workflow status</div>
            <div className={styles.statusDonut} aria-hidden />
            <div className={styles.statusLegend}>
              <span><i className={styles.completeDot} />Complete <strong>52%</strong></span>
              <span><i className={styles.activeDot} />In progress <strong>28%</strong></span>
              <span><i className={styles.waitingDot} />Waiting <strong>12%</strong></span>
              <span><i className={styles.blockedDot} />Blocked <strong>8%</strong></span>
            </div>
          </section>
        </div>

        <section className={styles.workflowTable}>
          <div className={styles.panelHeader}>Recent workflow executions</div>
          <div className={styles.tableHead}>
            <span>Workflow</span>
            <span>Status</span>
            <span>Record</span>
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
  const executionSteps = [
    [HiOutlineBriefcase, "Vendor packet scoped", "Scope and requirements shared"],
    [HiOutlineClipboardList, "Delivery tasks queued", "Tasks generated and assigned"],
    [HiOutlineDocumentText, "Invoice controls active", "Billing and approvals enforced"],
    [HiOutlineShieldCheck, "Closeout gate enforced", "Delivery and finance completion"],
  ] as const;

  const outcomeItems = [
    [HiOutlineLink, "CRM linked", "Source ID and records connected"],
    [HiOutlineDocumentText, "Project + tasks generated", "Workspace, milestones, and tasks created"],
    [HiOutlineShieldCheck, "Financial controls inherited", "Revenue, cost, margin, and approvals applied"],
  ] as const;

  return (
    <div className={styles.salesPlatformVisual} aria-label="Sales-to-delivery platform preview">
      <div className={styles.platformTopbar}>
        <strong>Sales Order to Project</strong>
        <span>SO-0842</span>
      </div>
      <div className={styles.platformCanvas}>
        <section className={styles.orderPane}>
          <span>Confirmed sales order</span>
          <h3>SO-0842</h3>
          <div className={styles.orderMeta}>
            <i><HiOutlineUsers />Atlas Group<span>Account</span></i>
            <i><HiOutlineCurrencyDollar />$12,400<span>Order value</span></i>
            <i><HiOutlineCalendar />May 21, 2026<span>Order date</span></i>
          </div>
          <div className={styles.platformRows}>
            <em><b>CRM source</b><span>Opportunity, contacts, terms</span></em>
            <em><b>Order lines</b><span>3 services create delivery scope</span></em>
            <em><b>Finance rules</b><span>Revenue, cost, margin copied</span></em>
          </div>
        </section>
        <div className={styles.platformArrow} aria-hidden />
        <section className={styles.projectPane}>
          <span>Generated project</span>
          <h3>Delivery workspace</h3>
          <div className={styles.projectScreenshot}>
            <div className={styles.projectScreenshotTop}>
              <strong>PRJ-0187 / Delivery Workspace</strong>
              <span>Active</span>
            </div>
            <div className={styles.projectScreenshotBody}>
              <div>
                <em>Project overview</em>
                <strong>PRJ-0187</strong>
                <span>Operations Team</span>
              </div>
              <div>
                <em>Milestones</em>
                <span>Scope finalized</span>
                <span>Tasks generated</span>
                <span>Vendor packet scoped</span>
              </div>
            </div>
          </div>
          <div className={styles.projectStats}>
            <i>5<span>Milestones copied</span></i>
            <i>27<span>Tasks generated</span></i>
            <i>3<span>Vendors engaged</span></i>
          </div>
        </section>
        <div className={styles.platformArrow} aria-hidden />
        <section className={styles.executionPane}>
          <span>Execution flow</span>
          <div className={styles.executionChecklist}>
            {executionSteps.map(([Icon, title, text]) => (
              <i key={title}>
                <Icon />
                <strong>{title}</strong>
                <span>{text}</span>
              </i>
            ))}
          </div>
        </section>
      </div>
      <div className={styles.platformStatus}>
        {outcomeItems.map(([Icon, title, text]) => (
          <span key={title}>
            <Icon />
            <strong>{title}</strong>
            <em>{text}</em>
          </span>
        ))}
      </div>
    </div>
  );
}

function ProjectPreview({ project }: { project: (typeof selectedProjects)[number] }) {
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
              I build enterprise systems that automate and organize <span>business operations.</span>
            </h1>
            <p>
              I specialize in ERP platforms, workflow automation, vendor systems, financial
              controls, and operational dashboards built on Odoo 19.
            </p>
            <div className={styles.heroActions}>
              <SmartLink href="/work" className={styles.primaryCta}>
                Explore Work
                <HiOutlineArrowRight />
              </SmartLink>
              <SmartLink href="/work/sales-to-delivery-automation-platform" className={styles.secondaryCta}>
                View Architecture
              </SmartLink>
            </div>
            <div className={styles.heroStats}>
              {proofMetrics.map((metric) => (
                <div key={metric.value}>
                  <strong>{metric.value}</strong>
                  {metric.label && <span>{metric.label}</span>}
                </div>
              ))}
            </div>
          </div>
          <OperationsVisual />
        </section>

        <section className={styles.proofStrip} aria-label="Operational system capabilities">
          {proofStrip.map((item) => (
            <span key={item}>{item}</span>
          ))}
        </section>

        <section className={styles.featuredPlatform}>
          <div className={styles.featuredCopy}>
            <span className={styles.sectionEyebrow}>Featured platform</span>
            <h2>Sales-to-Delivery Automation Platform</h2>
            <p>
              An ERP automation platform that converts confirmed sales orders into delivery-ready
              projects with synchronized CRM, project, vendor, and execution workflows.
            </p>
            <div className={styles.featuredOutcomes}>
              <span>65+ synced fields</span>
              <span>CRM-to-project automation</span>
              <span>Zero manual re-entry</span>
            </div>
            <SmartLink href="/work/sales-to-delivery-automation-platform" className={styles.primaryCta}>
              View Project
              <HiOutlineArrowRight />
            </SmartLink>
          </div>
          <SalesPlatformVisual />
        </section>

        <section className={styles.capabilitiesSection}>
          <div className={styles.sectionIntro}>
            <span className={styles.sectionEyebrow}>Capabilities</span>
            <h2>Operational systems capability.</h2>
            <p>
              The work is centered on ERP automation, governed workflows, financial controls,
              and reporting views that make day-to-day execution easier to manage.
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
            {selectedProjects.map((project) => (
              <ProjectPreview key={project.href} project={project} />
            ))}
          </div>
        </section>

        {techStack.length > 0 && (
          <section className={styles.techBanner} aria-label="Technology stack">
            <span>Technology stack behind the systems</span>
            <TechStackMarquee />
          </section>
        )}
      </div>
    </Column>
  );
}
