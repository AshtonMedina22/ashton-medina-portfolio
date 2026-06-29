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
  "Operations and business systems leader with 15+ years across multi-site operations, SaaS implementation, process improvement, workflow automation, reporting, and controls.",
  "Experienced translating messy business workflows into clear requirements, system configuration, SOPs, dashboards, user roles, and adoption plans.",
  "Strong fit for roles spanning business operations, business analysis, systems implementation, operations technology, workflow automation, and reporting.",
] as const;

const competencies = [
  "Operations Management",
  "Business Analysis",
  "Process Improvement",
  "Systems Implementation",
  "Requirements Gathering",
  "Workflow Automation",
  "ERP / CRM Configuration",
  "KPI Reporting",
  "SOP Development",
  "User Training",
  "Vendor Management",
  "Operational Controls",
] as const;

const impactMetrics = [
  {
    value: "15+",
    label: "years across operations, systems, implementation, and process improvement",
  },
  {
    value: "25+",
    label: "tools consolidated into one operating platform across core business functions",
  },
  {
    value: "5,500+",
    label: "enterprise user accounts supported across national technology programs",
  },
  {
    value: "3,000+",
    label: "SaaS customer organizations supported through implementation and onboarding",
  },
] as const;

const experience = [
  {
    title: "Business Systems Architect",
    company: "Event Operations & Rental Services Company",
    period: "2025 - Present",
    location: "Allen, TX",
    bullets: [
      "Designed a custom ERP/CRM operating platform consolidating 25+ disconnected tools across sales, accounting, payroll, recruitment, procurement, marketing, and project operations.",
      "Mapped 450+ workflow steps, 14 SOP templates, and 338 automated tasks to generate operational timelines after sales confirmation.",
      "Built KPI dashboards, vendor compliance workflows, financial controls, payment infrastructure, and training materials to support adoption.",
      "Expanded operating capacity from 600+ annual events toward a 1,500+ event ceiling without adding headcount.",
    ],
  },
  {
    title: "Business Analyst & Technical Operations Partner",
    company: "Automotive Technology & Telematics Company",
    period: "2023 - 2025",
    location: "Dallas-Fort Worth, TX",
    bullets: [
      "Supported national automotive technology programs across 443+ client entities and 5,500+ enterprise user accounts.",
      "Connected telematics, dealership software, toll networks, CRM, support, payment, and internal operating systems to reduce fragmented work.",
      "Built ClickUp into a central operating system for CRM, sales, onboarding, support, customer lifecycle work, OKRs, and capacity planning.",
      "Designed support workflows that reduced customer time-to-value by 40% and inbound ticket volume by 35%.",
    ],
  },
  {
    title: "Implementation & Onboarding Specialist",
    company: "Enterprise SaaS / Childcare Technology Platform",
    period: "2019 - 2023",
    location: "Remote",
    bullets: [
      "Supported implementation and onboarding across a shared global portfolio of 3,000+ SaaS customer organizations.",
      "Led data migrations, schema mapping, environment configuration, onboarding workflows, usage dashboards, and permission setup.",
      "Built reusable configuration playbooks for rosters, relationship structures, and multi-state enrollment requirements, reducing implementation cycles by 30%.",
    ],
  },
  {
    title: "Director of Operations",
    company: "Multi-Site Education & Childcare Organization",
    period: "2009 - 2023",
    location: "Dallas-Fort Worth, TX",
    bullets: [
      "Directed 4 locations over a 14-year tenure, supporting 500+ active families annually and a workforce of 100+ employees.",
      "Owned P&L, staffing, scheduling, compliance, vendor procurement, billing, payroll, facilities, and operational reporting.",
      "Maintained 100% audit readiness across recurring state inspections through safety, licensing, documentation, and care-profile controls.",
    ],
  },
] as const;

const skillGroups = [
  {
    title: "Systems & Tools",
    terms: ["Odoo", "ClickUp", "Intercom", "HubSpot", "Salesforce", "Google Workspace", "Microsoft 365"],
  },
  {
    title: "Technical",
    terms: ["Python", "PostgreSQL", "SQL", "JavaScript", "TypeScript", "REST APIs", "JSON-RPC", "Google Apps Script"],
  },
  {
    title: "Business",
    terms: ["SOPs", "UAT", "Dashboards", "Data Migration", "Access Controls", "Vendor Compliance", "Financial Controls"],
  },
] as const;

const educationCertifications = [
  "Master of Business Administration (MBA) - Haroun Education Ventures",
  "Business Operational & System Design - ProcessDriven Foundations",
  "ClickUp Verified Power User - Top 10% of users globally",
  "Intercom Certified - Conversational Support Framework Design",
  "Complete Artificial Intelligence & ChatGPT Course - Haroun Education Ventures",
  "Advanced Python Development and Web Development - SheCodes",
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
              <h2 className={styles.sectionTitle}>Operations, systems, and workflow implementation.</h2>
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
              <h2 className={styles.sectionTitle}>Relevant strengths.</h2>
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
              <h2 className={styles.sectionTitle}>Scale and measurable outcomes.</h2>
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
              <h2 className={styles.sectionTitle}>Professional experience.</h2>
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
              <h2 className={styles.sectionTitle}>Systems, technical, and business skills.</h2>
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
              <h2 className={styles.sectionTitle}>Business, systems, automation, and support training.</h2>
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
