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
    company: "Event Operations & Rental Services Company",
    period: "2025 - Present",
    location: "Allen, TX",
    bullets: [
      "Architected and built a custom ERP/CRM operating platform with Python, JavaScript, and PostgreSQL, consolidating 25+ disconnected tools and creating a foundation for AI-enabled insights.",
      "Designed a 450-step AI-ready workflow engine with 14 SOP templates and 338 automated tasks for dynamic operational timeline generation after sales confirmation.",
      "Implemented KPI dashboards, automated vendor compliance, financial controls, payment infrastructure, and production training materials to support adoption.",
      "Expanded operating capacity from 600+ annual events toward a 1,500+ event ceiling without added headcount through automation and system optimization.",
    ],
  },
  {
    title: "Senior Systems Integration & TechOps Engineer",
    company: "Automotive Technology & Telematics Company",
    period: "2023 - 2025",
    location: "Dallas-Fort Worth, TX",
    bullets: [
      "Supported national automotive technology programs across 443+ client entities and 5,500+ enterprise user accounts.",
      "Integrated telematics, dealership software, toll networks, CRM, support, payment, and internal operating systems into unified data and workflow paths.",
      "Architected ClickUp as a central operating system with automated workflows and AgentOps-style task orchestration across CRM, sales, onboarding, support, OKRs, and capacity planning.",
      "Designed automated conversational triage workflows in Intercom, reducing customer time-to-value by 40% and inbound ticket volume by 35%.",
    ],
  },
  {
    title: "Senior Implementation & Data Migration Engineer",
    company: "Enterprise SaaS / Childcare Technology Platform",
    period: "2019 - 2023",
    location: "Remote",
    bullets: [
      "Supported implementation and onboarding across a shared global portfolio of 3,000+ SaaS customer organizations.",
      "Led high-stakes multi-tenant database migrations, schema mapping, environment configuration, onboarding workflows, usage dashboards, and permission setup.",
      "Improved data quality and readiness for downstream analytics through structured migrations, validation routines, and reusable configuration playbooks.",
      "Built lifecycle automation and usage telemetry dashboards for rosters, relationship structures, and multi-state enrollment requirements, reducing implementation cycles by 30%.",
    ],
  },
  {
    title: "Director of Digital Operations",
    company: "Multi-Site Education & Childcare Organization",
    period: "2009 - 2023",
    location: "Dallas-Fort Worth, TX",
    bullets: [
      "Directed digital operations across 4 locations over a 14-year tenure, supporting 500+ active families annually and a workforce of 100+ employees.",
      "Owned P&L, staffing, scheduling, compliance, vendor procurement, billing, payroll, facilities, and operational reporting.",
      "Centralized enrollment, administration, reporting, and compliance workflows to improve scale, operating visibility, and documentation quality.",
      "Maintained 100% audit readiness across recurring state inspections through safety, licensing, documentation, and care-profile controls.",
    ],
  },
] as const;

const skillGroups = [
  {
    title: "AI / Automation / AgentOps",
    terms: [
      "LLM Prompt Engineering",
      "AI-Assisted Workflows",
      "Automated Triage & Routing",
      "Human-in-the-Loop Review",
      "Telemetry",
      "Observability",
    ],
  },
  {
    title: "MLOps / Platform Engineering",
    terms: [
      "CI/CD",
      "Git/GitHub",
      "Workflow Orchestration",
      "Data Pipelines & ETL",
      "Multi-Tenant Architecture",
      "RBAC / OAuth",
      "API-First Design",
      "Runbooks",
    ],
  },
  {
    title: "Cloud / Integrations / Data",
    terms: [
      "REST APIs",
      "JSON-RPC",
      "Webhooks",
      "OAuth 2.0",
      "PostgreSQL",
      "Data Quality",
      "KPI Dashboards",
      "Executive Reporting",
    ],
  },
  {
    title: "Languages & Leadership",
    terms: [
      "Python",
      "JavaScript",
      "TypeScript",
      "SQL",
      "Odoo",
      "Node.js",
      "ClickUp",
      "Documentation",
      "Cross-Functional Rollouts",
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
              <h2 className={styles.sectionTitle}>Architecting and operationalizing intelligent systems.</h2>
            </div>
            <div className={styles.experienceList}>
              {experience.map((role) => (
                <article key={`${role.company}-${role.title}`} className={styles.experienceItem}>
                  <div className={styles.experienceMeta}>
                    <span>{role.period}</span>
                    <em>{role.location}</em>
                  </div>
                  <div className={styles.experienceBody}>
                    <h3>{role.title}</h3>
                    <strong>{role.company}</strong>
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

          <section className={styles.resumeSection}>
            <div className={styles.sectionHeaderCompact}>
              <span className={styles.sectionEyebrow}>Tools & Skills</span>
              <h2 className={styles.sectionTitle}>AI and automation core stack.</h2>
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
