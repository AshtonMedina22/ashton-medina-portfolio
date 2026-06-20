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
    text: "Intake, approvals, follow-ups, and handoffs get organized into one clear operating flow.",
  },
  {
    icon: HiOutlineUserGroup,
    title: "Owners know what to do",
    text: "Roles, responsibilities, checklists, due dates, and escalation paths become visible to the team.",
  },
  {
    icon: HiOutlineCog,
    title: "Manual work gets reduced",
    text: "Repeatable tasks, status updates, reminders, and reporting routines are turned into structured workflows.",
  },
  {
    icon: HiOutlineChartBar,
    title: "Leadership gets visibility",
    text: "Dashboards, KPI reporting, and operating summaries show what is open, blocked, completed, or trending.",
  },
] as const;

const serviceAreas = [
  {
    title: "Operations & Process Improvement",
    text: "Workflow analysis, process mapping, SOPs, handoff cleanup, accountability structures, and operating routines.",
  },
  {
    title: "Business Systems Implementation",
    text: "Requirements gathering, platform configuration, ERP/CRM rollout support, UAT, training, adoption, and documentation.",
  },
  {
    title: "Workflow Automation & Reporting",
    text: "Task routing, reminders, status tracking, executive dashboards, KPI frameworks, and operational reporting.",
  },
  {
    title: "Operational Controls & Compliance",
    text: "Approval paths, vendor management, audit readiness, financial controls, role-based access, and repeatable governance.",
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
    title: "Business Systems Architect II",
    company: "Event Operations & Rental Services Company",
    period: "2025 - Present",
    location: "Allen, TX",
    bullets: [
      "Own ERP and business systems across CRM, sales, vendor management, accounting, HR, reporting, and project operations.",
      "Lead requirements gathering, workflow analysis, process mapping, stakeholder alignment, and implementation partner coordination.",
      "Standardize vendor onboarding, compliance tracking, contract administration, and partner lifecycle workflows.",
      "Develop KPI reporting frameworks, executive dashboards, and operational reports for better visibility and decision-making.",
    ],
  },
  {
    title: "TechOps Executive & Executive Assistant to CEO",
    company: "Automotive Technology & Operations Company",
    period: "2023 - 2025",
    location: "Dallas-Fort Worth, TX",
    bullets: [
      "Supported executive leadership on strategic initiatives, operational planning, process improvement, and systems administration.",
      "Coordinated onboarding and operational readiness for national automotive OEMs and multi-location dealership organizations.",
      "Managed integrations across telematics platforms, toll recovery systems, payment processors, and partner ecosystems.",
      "Built implementation playbooks, onboarding programs, process documentation, and training resources.",
    ],
  },
  {
    title: "Director of Operations",
    company: "Multi-Site Education & Childcare Organization",
    period: "2009 - 2023",
    location: "Dallas-Fort Worth, TX",
    bullets: [
      "Directed multi-site operations across staffing, compliance, enrollment, administration, scheduling, and reporting.",
      "Improved operating consistency through SOPs, documentation frameworks, recurring routines, and governance practices.",
      "Managed regulatory compliance, inspections, audits, and operational readiness in a highly regulated environment.",
      "Led recruitment, onboarding, workforce scheduling, training, and administrative support for teams of 30+ employees.",
    ],
  },
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
                  I help growing organizations clean up messy work: scattered requests, unclear
                  ownership, manual follow-ups, disconnected tools, weak reporting, and processes
                  that depend too much on one person remembering every step.
                </p>
              </div>
              <div className={styles.summaryAside}>
                <p className={styles.summaryText}>
                  My background combines business operations leadership with hands-on systems
                  implementation. I translate what teams actually need into better workflows,
                  clearer documentation, useful dashboards, and platforms people can adopt.
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

          <section className={styles.resumeSection}>
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
        </div>
      </section>
    </main>
  );
}
