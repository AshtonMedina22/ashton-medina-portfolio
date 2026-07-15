import styles from "@/components/about/about.module.scss";
import { about, baseURL, person, social } from "@/resources";
import { Meta, Schema, SmartLink } from "@once-ui-system/core";
import { FaLinkedin } from "react-icons/fa6";

export async function generateMetadata() {
  return Meta.generate({
    title: about.title,
    description: about.description,
    baseURL: baseURL,
    image: `/api/og/generate?title=${encodeURIComponent(about.title)}&subtitle=${encodeURIComponent(about.description)}`,
    path: about.path,
  });
}

const linkedIn = social.find((item) => item.icon === "linkedin");

const summaryBullets = [
  "AI solutions and automation architect with 15+ years designing, building, and operationalizing production-grade business platforms, intelligent workflows, and data-driven operating systems.",
  "I turn complex operational challenges, disconnected tools, and scattered data into secure, observable, AI-ready systems with clear ownership, controls, and human-in-the-loop review paths.",
  "My work connects business strategy with practical implementation across workflow orchestration, data pipelines, ERP/CRM integration, telemetry, governance, documentation, and adoption.",
] as const;

const competencies = [
  "AI Solutions Architecture",
  "MLOps & AgentOps Orchestration",
  "Production System Design",
  "AI Data Pipelines & ETL",
  "Intelligent Automation",
  "ERP / CRM Integration",
  "Observability & Telemetry",
  "Human-in-the-Loop Design",
  "Compliance & Governance",
  "SOPs & AI Adoption",
  "Business Strategy",
  "Operational Controls",
] as const;

const impactMetrics = [
  {
    value: "15+",
    label: "years architecting production operations, system platforms, and intelligent automation",
  },
  {
    value: "25+",
    label: "disconnected tools unified into central platforms for AI-ready workflows",
  },
  {
    value: "5,500+",
    label: "enterprise user accounts supported across automated national technology programs",
  },
  {
    value: "3,000+",
    label: "SaaS customer organizations supported through data migrations and scalable onboarding",
  },
] as const;

const experience = [
  {
    title: "Senior AI & Automation Engineer",
    bullets: [
      "Sole architect and developer of a custom ERP on Odoo (Python/JS/PostgreSQL) unifying CRM, sales, payroll, and projects.",
      "Designed a 450-step workflow engine and template-driven automation layer powering end-to-end event execution.",
      "Built vendor portals, compliance checks, and real-time executive dashboards on a CI/CD deployment pipeline.",
    ],
  },
  {
    title: "Senior Systems Integration & TechOps Engineer",
    bullets: [
      "Led technical operations and SaaS rollout for a fleet platform across 443+ locations and 5,500+ enterprise accounts.",
      "Designed integration architectures connecting telematics, toll systems, and dealership CRMs into a unified stack.",
      "Implemented automated conversational triage in Intercom, cutting inbound support tickets by 35%.",
    ],
  },
  {
    title: "Senior Implementation & Data Migration Engineer",
    bullets: [
      "Owned technical onboarding and data integrations for 3,000+ global SaaS customers.",
      "Designed multi-tenant database migration pipelines and reusable mapping models, reducing timelines by 30%.",
      "Built lifecycle automation and telemetry dashboards to monitor adoption and surface operational issues.",
    ],
  },
  {
    title: "Director of Digital Operations",
    bullets: [
      "Directed digital operations and P&L across 4 locations serving 500+ families and 100+ staff.",
      "Led multi-site digital transformation of enrollment and admin workflows into unified software systems.",
      "Maintained a 100% compliance pass rate via centralized documentation and financial control workflows.",
    ],
  },
] as const;

const skillGroups = [
  {
    title: "AI / Automation / AgentOps",
    terms: [
      "LLM prompt engineering",
      "AI-assisted workflows & agents",
      "Automated triage & routing",
      "Human-in-the-loop review flows",
    ],
  },
  {
    title: "MLOps / Platform Engineering",
    terms: [
      "CI/CD pipelines (Odoo.sh, Git/GitHub)",
      "Workflow orchestration (450-step pipelines)",
      "Data pipelines & ETL (PostgreSQL)",
      "Runbooks, SRE practices & observability",
    ],
  },
  {
    title: "Cloud, Integrations & Data",
    terms: [
      "REST APIs, JSON-RPC, Webhooks, OAuth 2.0",
      "PostgreSQL schema design & multi-tenant isolation",
      "Third-party SaaS integrations (Salesforce, HubSpot, Zoho, QuickBooks, Intercom)",
      "KPI dashboards, telemetry & executive reporting",
    ],
  },
  {
    title: "Languages, Tools & Leadership",
    terms: [
      "Python, JavaScript (ES6+), TypeScript, SQL, XML",
      "Odoo custom modules, OWL, Google Apps Script",
      "Jira, ClickUp, Notion, Git/GitHub",
      "Technical strategy, onboarding frameworks, documentation",
    ],
  },
] as const;

const educationCertifications = [
  "Master of Business Administration (MBA) - Haroun Education Ventures",
  "Advanced Python Development and Web Development - SheCodes",
  "Intercom Certified - Conversational Support Framework Design",
  "Business Operational & System Design - ProcessDriven Foundations",
  "ClickUp Verified Power User - Top 10% of users globally",
] as const;

export default function About() {
  return (
    <main className={styles.aboutPage}>
      <Schema
        as="webPage"
        baseURL={baseURL}
        title={about.title}
        description={about.description}
        path={about.path}
        image={`/api/og/generate?title=${encodeURIComponent(about.title)}&subtitle=${encodeURIComponent(about.description)}`}
        author={{
          name: person.name,
          url: `${baseURL}${about.path}`,
          image: `${baseURL}${person.avatar}`,
        }}
      />

      <section className={styles.resumeShell}>
        <header className={styles.profileHeader}>
          <div className={styles.profileAvatar}>
            <img src={person.avatar} alt={person.name} />
          </div>
          <div className={styles.profileInfo}>
            <span className={styles.profileEyebrow}>Resume Profile</span>
            <h1>{person.name}</h1>
            <p className={styles.profileRole}>{person.role}</p>
            <p className={styles.profileSpecialty}>MLOps / AgentOps / Production Systems</p>
            <div className={styles.profileMeta}>
              {person.locationLabel && <span>{person.locationLabel}</span>}
              {linkedIn && (
                <SmartLink
                  href={linkedIn.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.profileTextLink}
                >
                  <FaLinkedin />
                  LinkedIn
                </SmartLink>
              )}
            </div>
          </div>
        </header>

        <div className={styles.resumeContent}>
          <section className={styles.resumeHero}>
            <div className={styles.sectionHeaderCompact}>
              <span className={styles.sectionEyebrow}>Professional Summary</span>
              <h2 className={styles.sectionTitle}>
                Architecting intelligent systems from concept to production.
              </h2>
            </div>
            <ul className={styles.summaryList}>
              {summaryBullets.map((bullet) => (
                <li key={bullet}>{bullet}</li>
              ))}
            </ul>
          </section>

          <section className={styles.resumeSection}>
            <div className={styles.sectionHeaderCompact}>
              <span className={styles.sectionEyebrow}>Core Competencies</span>
              <h2 className={styles.sectionTitle}>Architecting and operationalizing AI at scale.</h2>
            </div>
            <div className={styles.competencyGrid}>
              {competencies.map((competency) => (
                <span key={competency}>{competency}</span>
              ))}
            </div>
          </section>

          <section className={styles.resumeSection}>
            <div className={styles.sectionHeaderCompact}>
              <span className={styles.sectionEyebrow}>Selected Impact</span>
              <h2 className={styles.sectionTitle}>Scalable automation outcomes.</h2>
            </div>
            <div className={styles.proofGrid}>
              {impactMetrics.map((metric) => (
                <article key={metric.label} className={styles.proofCard}>
                  <strong>{metric.value}</strong>
                  <p>{metric.label}</p>
                </article>
              ))}
            </div>
          </section>

          <section className={`${styles.resumeSection} ${styles.experienceSection}`}>
            <div className={styles.sectionHeaderCompact}>
              <span className={styles.sectionEyebrow}>Experience</span>
              <h2 className={styles.sectionTitle}>
                Building automation, data, and AI platforms end-to-end
              </h2>
              <p className={styles.sectionLead}>
                15 years owning backend platforms, integrations, and workflow automation - now
                focused on AI solutions, MLOps, and AgentOps-style systems.
              </p>
            </div>
            <div className={styles.experienceList}>
              {experience.map((role) => (
                <article key={role.title} className={styles.experienceItem}>
                  <span className={styles.timelineMarker} aria-hidden />
                  <div className={styles.experienceBody}>
                    <h3>{role.title}</h3>
                    <ul>
                      {role.bullets.map((bullet) => (
                        <li key={bullet}>{bullet}</li>
                      ))}
                    </ul>
                  </div>
                </article>
              ))}
            </div>
          </section>

          <section className={`${styles.resumeSection} ${styles.skillsStackSection}`}>
            <div className={styles.sectionHeaderCompact}>
              <span className={styles.sectionEyebrow}>Skills stack</span>
              <h2 className={styles.sectionTitle}>From cloud architecture to agents in production</h2>
              <p className={styles.sectionLead}>
                A practical toolkit for designing, shipping, and operating AI systems end-to-end.
              </p>
            </div>
            <div className={styles.keywordGroups}>
              {skillGroups.map((group) => (
                <article key={group.title} className={styles.keywordGroup}>
                  <h3>{group.title}</h3>
                  <div>
                    {group.terms.map((term) => (
                      <span key={term}>{term}</span>
                    ))}
                  </div>
                </article>
              ))}
            </div>
          </section>

          <section className={styles.resumeSection}>
            <div className={styles.sectionHeaderCompact}>
              <span className={styles.sectionEyebrow}>Education & Certifications</span>
              <h2 className={styles.sectionTitle}>Business, systems, automation, and technical training.</h2>
            </div>
            <div className={styles.certGrid}>
              {educationCertifications.map((credential) => (
                <span key={credential}>{credential}</span>
              ))}
            </div>
          </section>
        </div>
      </section>
    </main>
  );
}
