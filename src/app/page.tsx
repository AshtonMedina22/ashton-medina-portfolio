import { Column, Meta, Schema, SmartLink } from "@once-ui-system/core";
import {
  HiOutlineArrowRight,
  HiOutlineChartBar,
  HiOutlineShieldCheck,
  HiOutlineShare,
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
    header: "Revenue control",
    status: "Margin review",
    rows: [
      ["Invoice", "Posted"],
      ["Vendor bill", "Matched"],
      ["Payment", "Pending"],
      ["Approval", "Required"],
    ],
    footer: ["Margin visible", "Closeout gated"],
  },
  teal: {
    header: "Vendor lifecycle",
    status: "Portal access",
    rows: [
      ["Onboarding", "Active"],
      ["Compliance docs", "Verified"],
      ["RFQ workflow", "Open"],
      ["Assignment", "Accepted"],
    ],
    footer: ["Docs current", "RFQ linked"],
  },
  indigo: {
    header: "Operations view",
    status: "Workload report",
    rows: [
      ["Projects", "In flight"],
      ["Tasks", "At risk"],
      ["Invoices", "Queued"],
      ["Events", "Scheduled"],
    ],
    footer: ["CRM linked", "Project rollup"],
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
  return (
    <div className={styles.opsVisual} aria-label="Operational command-center product preview">
      <div className={styles.visualRail} aria-hidden>
        <span className={styles.logoMark}>A</span>
        <i className={styles.activeIcon} />
        <i />
        <i />
        <i />
        <i />
      </div>
      <div className={styles.visualMain}>
        <div className={styles.visualTopbar}>
          <strong>Odoo 19 Operations Workspace</strong>
          <span>ERP workflow view</span>
        </div>
        <div className={styles.recordSummary}>
          <div>
            <span>Sales order</span>
            <strong>SO-0842 - Meridian Group</strong>
          </div>
          <div>
            <span>Linked project</span>
            <strong>Delivery workspace generated</strong>
          </div>
          <div>
            <span>Vendor workflow</span>
            <strong>Portal assignment pending</strong>
          </div>
        </div>
        <div className={styles.executionTable}>
          <div className={styles.panelHeader}>Operational handoff</div>
          {[
            ["Confirmed sales order", "Synced", "CRM"],
            ["Project workspace", "Generated", "Delivery"],
            ["Implementation tasks", "Queued", "Project"],
            ["Vendor assignment", "Review", "Portal"],
          ].map(([workflow, status, owner]) => (
            <div key={workflow}>
              <span>{workflow}</span>
              <strong>{status}</strong>
              <em>{owner}</em>
            </div>
          ))}
        </div>
        <div className={styles.controlPanel}>
          <div>
            <span>Financial control</span>
            <strong>Margin review required before closeout</strong>
          </div>
          <div>
            <span>Approval state</span>
            <strong>Operations manager review</strong>
          </div>
          <div>
            <span>Reporting view</span>
            <strong>Sales, project, invoice, and task records linked</strong>
          </div>
        </div>
      </div>
    </div>
  );
}

function SalesPlatformVisual() {
  return (
    <div className={styles.salesPlatformVisual} aria-label="Sales-to-delivery platform preview">
      <div className={styles.platformTopbar}>
        <strong>Sales Order to Project</strong>
        <span>SO-0842</span>
      </div>
      <div className={styles.platformCanvas}>
        <section className={styles.orderPane}>
          <span>Confirmed order</span>
          <h3>Meridian Group</h3>
          <div className={styles.orderMeta}>
            <i>3 svc</i>
            <i>$12.4K</i>
            <i>Set</i>
          </div>
          <div className={styles.platformRows}>
            <em><b>Deal</b><span>CRM linked</span></em>
            <em><b>CRM data</b><span>65+ fields synced</span></em>
            <em><b>Billing</b><span>Controls copied</span></em>
          </div>
        </section>
        <div className={styles.platformArrow} aria-hidden>
          -&gt;
        </div>
        <section className={styles.projectPane}>
          <span>Generated project</span>
          <h3>Delivery ready</h3>
          <div className={styles.taskStack}>
            <i>Implementation</i>
            <i>Data migration</i>
            <i>Training</i>
          </div>
        </section>
        <div className={styles.platformArrow} aria-hidden>
          -&gt;
        </div>
        <section className={styles.executionPane}>
          <span>Execution flow</span>
          <div className={styles.executionChecklist}>
            <i>Vendor assignment</i>
            <i>Task ownership</i>
            <i>Delivery readiness</i>
            <i>Closeout controls</i>
          </div>
        </section>
      </div>
      <div className={styles.platformStatus}>
        <span>CRM linked</span>
        <span>Task tree generated</span>
        <span>Zero re-entry</span>
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
            <h2>
              Enterprise systems, built around operational <span>control.</span>
            </h2>
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
            <h2>
              Enterprise systems built for operational <span>execution.</span>
            </h2>
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
