import { OperationsVisual } from "@/components/home/OperationsVisual";
import { about, baseURL, home, person } from "@/resources";
import { Column, Meta, Schema, SmartLink } from "@once-ui-system/core";
import { HiOutlineArrowRight } from "react-icons/hi";
import styles from "./page.module.scss";

const proofStrip = [
  "15+ Years",
  "AI-Ready Workflows",
  "25+ Tools Connected",
  "5,500+ Users Supported",
  "100% Audit Readiness",
] as const;

const openRoleItems = [
  "Owning end-to-end ERP and workflow platforms in production",
  "Designing data pipelines, integrations, and CI/CD for AI-enabled systems",
  "Operationalizing AI agents with human-in-the-loop safeguards",
] as const;

const featuredProjects = [
  {
    title: "Sales-to-Execution Data Pipeline",
    stackLabel: "Python · PostgreSQL · REST APIs",
    description:
      "Automated the translation of confirmed sales orders into active projects, synchronizing 65+ fields bidirectionally while blocking malformed records and enforcing data quality.",
    impact: "Eliminated manual re-entry and stabilized revenue-to-delivery handoffs.",
    stack: "Python, PostgreSQL, REST APIs, validation & logging",
    tags: ["Data pipelines", "Automation", "Systems integration"],
    href: "/work/sales-to-delivery-automation-platform",
  },
  {
    title: "Automated Vendor Governance System",
    stackLabel: "Python · PostgreSQL · JSON-RPC",
    description:
      "Created a cloud portal for vendor onboarding and compliance, with scheduled backend jobs to flag expiring contracts, enforce rate structures, and trigger alerts without manual tracking.",
    impact: "Reduced compliance risk and manual vendor management overhead.",
    stack: "Python, PostgreSQL, QWeb, JSON-RPC, cron-based automation",
    tags: ["Governance", "Automation", "Portals & APIs"],
    href: "/work/vendor-lifecycle-compliance-platform",
  },
  {
    title: "Asynchronous AI Review Desk",
    stackLabel: "Node.js · Google APIs · Prompt Engineering",
    description:
      "Programmed a secure server-side handler that uses webhooks and structured LLM prompts to draft context-specific emails, with a mandatory human validation interface before sending.",
    impact: "Accelerated response drafting while preserving human control and safety.",
    stack: "Node.js, Google APIs, OAuth 2.0, prompt engineering, logging",
    tags: ["AI-assisted workflows", "Human-in-the-loop", "Agent-style orchestration"],
    href: "/work/event-driven-automation-secure-review-gateway",
  },
] as const;

const skillsGroups = [
  {
    title: "AI / Automation / AgentOps",
    items: [
      "LLM prompt engineering",
      "AI-assisted workflows & agents",
      "Automated triage & routing",
      "Human-in-the-loop review flows",
    ],
  },
  {
    title: "MLOps / Platform Engineering",
    items: [
      "CI/CD pipelines (Odoo.sh, Git/GitHub)",
      "Workflow orchestration (450-step pipelines)",
      "Data pipelines & ETL (PostgreSQL)",
      "Runbooks, SRE practices & observability",
    ],
  },
  {
    title: "Cloud, Integrations & Data",
    items: [
      "REST APIs, JSON-RPC, Webhooks, OAuth 2.0",
      "PostgreSQL schema design & multi-tenant isolation",
      "Third-party SaaS integrations (Salesforce, HubSpot, Zoho, QuickBooks, Intercom)",
      "KPI dashboards, telemetry & executive reporting",
    ],
  },
  {
    title: "Languages, Tools & Leadership",
    items: [
      "Python, JavaScript (ES6+), TypeScript, SQL, XML",
      "Odoo custom modules, OWL, Google Apps Script",
      "Jira, ClickUp, Notion, Git/GitHub",
      "Technical strategy, onboarding frameworks, documentation",
    ],
  },
] as const;

export async function generateMetadata() {
  return Meta.generate({
    title: home.title,
    description: home.description,
    baseURL: baseURL,
    path: home.path,
    image: home.image,
  });
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
            <span className={styles.eyebrow}>AI Solutions &amp; Automation Architect · MLOps · AgentOps</span>
            <h1>{home.headline}</h1>
            <p>{home.subline}</p>
            <div className={styles.heroActions}>
              <SmartLink href="/work" className={styles.primaryCta}>
                Explore Work
                <HiOutlineArrowRight />
              </SmartLink>
              <SmartLink href={about.path} className={styles.secondaryCta}>
                About Me
              </SmartLink>
            </div>
          </div>
          <OperationsVisual heroScaled />
        </section>

        <section className={styles.proofStrip} aria-label="Operational system capabilities">
          {proofStrip.map((item) => (
            <span key={item}>{item}</span>
          ))}
        </section>

        <section className={styles.rolesProjectsSection}>
          <div className={styles.openRolesCard}>
            <span className={styles.openRolesLabel}>Open to roles</span>
            <h2>AI Solutions, MLOps &amp; Automation</h2>
            <ul>
              {openRoleItems.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
            <div className={styles.targetRolesBox}>
              <span>Target roles</span>
              <p>
                AI Solutions Architect · Senior MLOps / Platform Engineer · AgentOps / Automation
                Engineer
              </p>
            </div>
          </div>

          <div className={styles.featuredProjectsBlock}>
            <div className={styles.featuredHeader}>
              <h2>Flagship automation, data, and AI projects</h2>
              <p>
                A sample of systems where I owned architecture, implementation, and automation for
                production-grade platforms.
              </p>
            </div>

            <div className={styles.featuredGrid}>
              {featuredProjects.map((project) => (
                <SmartLink key={project.title} href={project.href} className={styles.projectCard}>
                  <article>
                    <h3>{project.title}</h3>
                    <p className={styles.projectStackLabel}>{project.stackLabel}</p>
                    <p className={styles.projectDescription}>{project.description}</p>
                    <dl className={styles.projectMeta}>
                      <div>
                        <dt>Impact</dt>
                        <dd>{project.impact}</dd>
                      </div>
                      <div>
                        <dt>Stack</dt>
                        <dd>{project.stack}</dd>
                      </div>
                    </dl>
                    <div className={styles.projectChips}>
                      {project.tags.map((tag) => (
                        <span key={tag}>{tag}</span>
                      ))}
                    </div>
                  </article>
                </SmartLink>
              ))}
            </div>
          </div>
        </section>

        <section className={styles.skillsSection} aria-label="Skills stack">
          <div className={styles.skillsHeader}>
            <span className={styles.sectionEyebrow}>Skills stack</span>
            <h2>From cloud architecture to agents in production</h2>
            <p>
              A practical toolkit for designing, shipping, and operating AI systems end-to-end.
            </p>
          </div>

          <div className={styles.skillsGrid}>
            {skillsGroups.map((group) => (
              <article key={group.title} className={styles.skillsCard}>
                <h3>{group.title}</h3>
                <ul>
                  {group.items.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </section>
      </div>
    </Column>
  );
}
