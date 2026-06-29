import styles from "@/components/about/about.module.scss";
import { about, baseURL, person, social } from "@/resources";
import { Meta, Schema, SmartLink } from "@once-ui-system/core";
import {
  HiOutlineArrowRight,
  HiOutlineChartBar,
  HiOutlineClipboardList,
  HiOutlineCog,
  HiOutlineOfficeBuilding,
  HiOutlineShieldCheck,
  HiOutlineUserGroup,
} from "react-icons/hi";
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

const problemsSolved = [
  {
    icon: HiOutlineClipboardList,
    title: "Requests stop getting lost",
    text: "Forms, emails, approvals, and follow-ups move into a clear intake and ownership process.",
  },
  {
    icon: HiOutlineUserGroup,
    title: "Owners know what to do",
    text: "Responsibilities, checklists, due dates, and escalation paths become clear across the team.",
  },
  {
    icon: HiOutlineCog,
    title: "Manual work gets reduced",
    text: "Recurring tasks, reminders, status updates, and handoffs are standardized or automated where it makes sense.",
  },
  {
    icon: HiOutlineChartBar,
    title: "Leadership gets visibility",
    text: "Dashboards and operating reports show what is open, stuck, completed, trending, or ready for decision.",
  },
] as const;

const serviceAreas = [
  {
    title: "Operations & Process Improvement",
    text: "Workflow analysis, process mapping, SOP development, handoff cleanup, accountability structures, and operating routines.",
  },
  {
    title: "Business Systems Implementation",
    text: "Requirements gathering, ERP/CRM configuration, user acceptance testing, rollout planning, training, adoption, and documentation.",
  },
  {
    title: "Workflow Automation & Reporting",
    text: "Task routing, reminders, status tracking, executive dashboards, KPI frameworks, operational reporting, and data cleanup.",
  },
  {
    title: "Operational Controls & Compliance",
    text: "Approval paths, vendor management, audit readiness, financial controls, role-based access, and repeatable governance.",
  },
] as const;

const proofMetrics = [
  {
    value: "15+",
    label: "Years across operations, systems, and implementation",
  },
  {
    value: "25+",
    label: "Disconnected tools consolidated into one operating platform",
  },
  {
    value: "600+ to 1,500+",
    label: "Annual event capacity planned without added headcount",
  },
  {
    value: "5,500+",
    label: "Enterprise user accounts supported across national programs",
  },
  {
    value: "3,000+",
    label: "SaaS customer organizations supported through implementation",
  },
  {
    value: "100%",
    label: "Audit readiness maintained across recurring inspections",
  },
] as const;

const operatingMethod = [
  {
    title: "Understand the operating reality",
    text: "Map how work actually moves through teams, tools, approvals, handoffs, exceptions, and reporting gaps.",
  },
  {
    title: "Translate work into system requirements",
    text: "Turn messy workflows into requirements, process maps, data fields, user roles, controls, and acceptance criteria.",
  },
  {
    title: "Build or configure the operating system",
    text: "Implement ERP, CRM, reporting, automation, support, and work-management layers that match the business process.",
  },
  {
    title: "Make adoption repeatable",
    text: "Document SOPs, train users, create dashboards, and reinforce governance so the process does not depend on memory.",
  },
] as const;

const keywordGroups = [
  {
    title: "Business Operations",
    terms: [
      "Operations Management",
      "Process Improvement",
      "Business Analysis",
      "SOP Development",
      "Multi-Site Operations",
      "Change Management",
    ],
  },
  {
    title: "Systems Implementation",
    terms: [
      "ERP Implementation",
      "CRM Administration",
      "Requirements Gathering",
      "UAT Testing",
      "Platform Rollout",
      "User Adoption",
    ],
  },
  {
    title: "Automation & Reporting",
    terms: [
      "Workflow Automation",
      "KPI Dashboards",
      "Executive Reporting",
      "Data Analysis",
      "API Integrations",
      "Operational Controls",
    ],
  },
] as const;

const experience = [
  {
    title: "Business Systems Architect",
    company: "Event Operations & Rental Services Company",
    period: "2025 - Present",
    location: "Allen, TX",
    bullets: [
      "Designed and built a custom ERP/CRM operating platform that consolidated 25+ disconnected tools across CRM, sales, accounting, payroll, recruitment, procurement, marketing, and project operations.",
      "Mapped 450+ workflow steps, 14 SOP templates, and 338 automated tasks that generate operational timelines after sales confirmation.",
      "Expanded operating capacity from 600+ annual events toward a 1,500+ event ceiling without adding headcount.",
      "Built KPI dashboards, financial controls, vendor compliance workflows, payment infrastructure, and training materials to support adoption across the business.",
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
      "Designed Intercom support workflows that reduced customer time-to-value by 40% and inbound ticket volume by 35%.",
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
      "Built reusable configuration playbooks across rosters, relationship structures, and multi-state enrollment requirements, reducing implementation cycles by 30%.",
      "Created lifecycle communication flows and account-health reporting to improve adoption, retention, and recurring revenue visibility.",
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
      "Standardized playbooks, checklists, logistics procedures, enrollment pipelines, and tour-conversion systems across all locations.",
      "Maintained 100% audit readiness across 8+ annual state inspections through rigorous safety, licensing, and care-profile tracking.",
    ],
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
          <div className={styles.profileInfo}>
            <span className={styles.profileEyebrow}>Professional Profile</span>
            <h1>{person.name}</h1>
            <p className={styles.profileRole}>{person.role}</p>
            {person.locationLabel && <p className={styles.profileLocation}>{person.locationLabel}</p>}
            {linkedIn && (
              <div className={styles.profileActions}>
                <SmartLink
                  href={linkedIn.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.profileLinkBtn}
                >
                  <FaLinkedin />
                  LinkedIn
                </SmartLink>
              </div>
            )}
          </div>
          <div className={styles.profileAvatar}>
            <img src={person.avatar} alt={person.name} />
          </div>
        </header>

        <div className={styles.resumeContent}>
          <section className={styles.resumeHero}>
            <div className={styles.summaryGrid}>
              <div className={styles.summaryPrimary}>
                <span className={styles.sectionEyebrow}>Overview</span>
                <h2 className={styles.sectionTitle}>
                  Operations, systems, and workflows that make businesses easier to run.
                </h2>
                <p className={styles.summaryLead}>
                  I work across operations, business analysis, systems implementation, workflow
                  automation, and reporting. My background is useful because I have both run the
                  operations and built the systems that support them.
                </p>
              </div>
              <div className={styles.summaryAside}>
                <p className={styles.summaryText}>
                  I translate messy work into clear requirements, process maps, automations, user
                  roles, dashboards, SOPs, and controls so teams can execute consistently across
                  industries and tool stacks.
                </p>
                <div className={styles.heroActions}>
                  <SmartLink href="/work" className={styles.primaryCta}>
                    View Work
                    <HiOutlineArrowRight />
                  </SmartLink>
                  {linkedIn && (
                    <SmartLink
                      href={linkedIn.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={styles.secondaryCta}
                    >
                      LinkedIn
                    </SmartLink>
                  )}
                </div>
              </div>
            </div>
          </section>

          <section className={styles.resumeSection}>
            <div className={styles.sectionHeader}>
              <HiOutlineChartBar />
              <div>
                <span className={styles.sectionEyebrow}>Proof of Scale</span>
                <h2 className={styles.sectionTitle}>Operating scale across industries.</h2>
              </div>
            </div>
            <div className={styles.proofGrid}>
              {proofMetrics.map((metric) => (
                <article key={metric.label} className={styles.proofCard}>
                  <strong>{metric.value}</strong>
                  <p>{metric.label}</p>
                </article>
              ))}
            </div>
          </section>

          <section className={styles.resumeSection}>
            <div className={styles.sectionHeader}>
              <HiOutlineShieldCheck />
              <div>
                <span className={styles.sectionEyebrow}>Business Problems</span>
                <h2 className={styles.sectionTitle}>What I help fix.</h2>
              </div>
            </div>
            <div className={styles.problemGrid}>
              {problemsSolved.map((item) => {
                const Icon = item.icon;
                return (
                  <article key={item.title} className={styles.problemCard}>
                    <Icon />
                    <h3>{item.title}</h3>
                    <p>{item.text}</p>
                  </article>
                );
              })}
            </div>
          </section>

          <section className={styles.resumeSection}>
            <div className={styles.sectionHeader}>
              <HiOutlineCog />
              <div>
                <span className={styles.sectionEyebrow}>How I Work</span>
                <h2 className={styles.sectionTitle}>One method across different industries.</h2>
              </div>
            </div>
            <div className={styles.methodGrid}>
              {operatingMethod.map((step) => (
                <article key={step.title} className={styles.methodCard}>
                  <h3>{step.title}</h3>
                  <p>{step.text}</p>
                </article>
              ))}
            </div>
          </section>

          <section className={styles.resumeSection}>
            <div className={styles.sectionHeader}>
              <HiOutlineCog />
              <div>
                <span className={styles.sectionEyebrow}>Services</span>
                <h2 className={styles.sectionTitle}>Where I add value.</h2>
              </div>
            </div>
            <div className={styles.serviceGrid}>
              {serviceAreas.map((area) => (
                <article key={area.title} className={styles.serviceCard}>
                  <h3>{area.title}</h3>
                  <p>{area.text}</p>
                </article>
              ))}
            </div>
          </section>

          <section className={styles.resumeSection}>
            <div className={styles.sectionHeader}>
              <HiOutlineChartBar />
              <div>
                <span className={styles.sectionEyebrow}>Search Keywords</span>
                <h2 className={styles.sectionTitle}>Relevant skills, grouped clearly.</h2>
              </div>
            </div>
            <div className={styles.keywordGroups}>
              {keywordGroups.map((group) => (
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

          <section className={`${styles.resumeSection} ${styles.experienceSection}`}>
            <div className={styles.sectionHeader}>
              <HiOutlineOfficeBuilding />
              <div>
                <span className={styles.sectionEyebrow}>Experience</span>
                <h2 className={styles.sectionTitle}>Professional experience.</h2>
              </div>
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
            <div className={styles.sectionHeader}>
              <HiOutlineClipboardList />
              <div>
                <span className={styles.sectionEyebrow}>Education & Certifications</span>
                <h2 className={styles.sectionTitle}>Business, systems, automation, and support training.</h2>
              </div>
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
