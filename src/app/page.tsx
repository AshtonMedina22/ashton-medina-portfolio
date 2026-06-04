import { TechStackMarquee } from "@/components/home/TechStackMarquee";
import { about, baseURL, home, person, techStack } from "@/resources";
import { Column, Meta, Schema, SmartLink } from "@once-ui-system/core";
import {
  HiOutlineArrowRight,
  HiOutlineChartBar,
  HiOutlineClipboardList,
  HiOutlineDocumentText,
  HiOutlineLink,
  HiOutlineShare,
  HiOutlineShieldCheck,
} from "react-icons/hi";
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
    description:
      "Margin protection, approval checkpoints, vendor variance, and compensation governance.",
    href: "/work/revenue-financial-control-engine",
    category: "Financial governance",
    accent: "cyan",
  },
  {
    title: "Vendor Lifecycle Compliance Platform",
    description:
      "Controlled onboarding, compliance state, tokenized portal access, and assignment acceptance.",
    href: "/work/vendor-lifecycle-compliance-platform",
    category: "Vendor lifecycle",
    accent: "teal",
  },
  {
    title: "Operational Intelligence Platform",
    description:
      "Executive operational visibility across KPIs, reporting, engagement records, and exports.",
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
          <strong>Operations Workspace</strong>
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
              <span>
                <i className={styles.completeDot} />
                Complete <strong>52%</strong>
              </span>
              <span>
                <i className={styles.activeDot} />
                In progress <strong>28%</strong>
              </span>
              <span>
                <i className={styles.waitingDot} />
                Waiting <strong>12%</strong>
              </span>
              <span>
                <i className={styles.blockedDot} />
                Blocked <strong>8%</strong>
              </span>
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
  const pipelineStages = [
    "Order confirmed",
    "Workspace built",
    "Tasks queued",
    "Controls ready",
  ] as const;

  const activityRows = [
    ["CRM record linked", "Complete"],
    ["27 delivery tasks generated", "Ready"],
    ["Vendor scope packet created", "Scoped"],
    ["Invoice approval gate applied", "Active"],
  ] as const;

  const summaryCards = [
    [HiOutlineLink, "65+", "fields synced"],
    [HiOutlineClipboardList, "27", "tasks created"],
    [HiOutlineShieldCheck, "0", "manual re-entry"],
  ] as const;

  return (
    <div className={styles.salesPlatformVisual} aria-label="Sales-to-delivery platform preview">
      <div className={styles.platformTopbar}>
        <strong>Sales-to-delivery automation</strong>
        <span>SO-0842 synced</span>
      </div>
      <div className={styles.platformHeroPanel}>
        <section className={styles.platformRecord}>
          <div className={styles.platformRecordHeader}>
            <div>
              <span>Confirmed sales order</span>
              <h3>SO-0842</h3>
            </div>
            <strong>$12.4K</strong>
          </div>

          <div className={styles.pipelineTrack} aria-label="Automation pipeline">
            {pipelineStages.map((stage) => (
              <span key={stage}>{stage}</span>
            ))}
          </div>

          <div className={styles.generatedWorkspace}>
            <div className={styles.workspaceChrome}>
              <strong>PRJ-0187 Delivery Workspace</strong>
              <span>Active</span>
            </div>
            <div className={styles.workspaceBoard}>
              <div>
                <em>Project owner</em>
                <strong>Operations Team</strong>
              </div>
              <div>
                <em>Milestones</em>
                <strong>5 copied</strong>
              </div>
              <div>
                <em>Vendor packet</em>
                <strong>Scoped</strong>
              </div>
              <div>
                <em>Finance gate</em>
                <strong>Ready</strong>
              </div>
            </div>
          </div>
        </section>

        <aside className={styles.automationQueue}>
          <span>Automation queue</span>
          <div>
            {activityRows.map(([label, state]) => (
              <i key={label}>
                <HiOutlineDocumentText />
                <strong>{label}</strong>
                <em>{state}</em>
              </i>
            ))}
          </div>
        </aside>
      </div>

      <div className={styles.platformSummary}>
        {summaryCards.map(([Icon, value, label]) => (
          <span key={label}>
            <Icon />
            <strong>{value}</strong>
            <em>{label}</em>
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
              I build the systems, processes, and operational frameworks that help{" "}
              <span>organizations scale.</span>
            </h1>
            <p>
              My work spans ERP platforms, business systems architecture, workflow automation,
              reporting, operational controls, and process improvement initiatives that increase
              visibility, accountability, and execution across the organization.
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
              <span>65+ synced fields</span>
              <span>CRM-to-project automation</span>
              <span>Zero manual re-entry</span>
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

        <section className={styles.capabilitiesSection}>
          <div className={styles.sectionIntro}>
            <span className={styles.sectionEyebrow}>Capabilities</span>
            <h2>Operational systems capability.</h2>
            <p>
              The work is centered on ERP automation, governed workflows, financial controls, and
              reporting views that make day-to-day execution easier to manage.
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
