import styles from "@/components/about/about.module.scss";
import { about, baseURL, person, social } from "@/resources";
import { Meta, Schema, SmartLink } from "@once-ui-system/core";
import {
  HiOutlineArrowRight,
  HiOutlineBriefcase,
  HiOutlineChartBar,
  HiOutlineClipboardCheck,
  HiOutlineCog,
  HiOutlineDocumentText,
  HiOutlineExternalLink,
  HiOutlineLocationMarker,
  HiOutlineMail,
  HiOutlineOfficeBuilding,
  HiOutlineShieldCheck,
} from "react-icons/hi";

export async function generateMetadata() {
  return Meta.generate({
    title: about.title,
    description: about.description,
    baseURL: baseURL,
    image: `/api/og/generate?title=${encodeURIComponent(about.title)}`,
    path: about.path,
  });
}

const contactItems = [
  {
    icon: HiOutlineLocationMarker,
    label: "Location",
    value: person.locationLabel ?? "United States",
    href: "",
  },
  { icon: HiOutlineMail, label: "Email", value: person.email, href: `mailto:${person.email}` },
  {
    icon: HiOutlineExternalLink,
    label: "LinkedIn",
    value: "linkedin.com/in/ashton-medina",
    href: "https://www.linkedin.com/in/ashton-medina",
  },
] as const;

const resumeHighlights = [
  "10+ years leading operations, process improvement, system implementation, and organizational execution across multi-site and technology-enabled environments.",
  "Experienced across operations, finance, HR, vendor management, CRM, ERP, reporting, onboarding, compliance, and customer-facing implementation workflows.",
  "Strong background in requirements gathering, process mapping, stakeholder management, KPI development, documentation, training, and adoption.",
] as const;

const experience = [
  {
    title: "Business Systems Architect II",
    company: "Event Operations & Rental Services Company",
    period: "2025 - Present",
    location: "Allen, TX",
    bullets: [
      "Serve as primary business systems owner for ERP systems supporting CRM, sales, vendor management, accounting, HR, reporting, project management, and business operations.",
      "Lead requirements gathering, workflow analysis, and process mapping with leadership, stakeholders, vendors, and implementation partners.",
      "Design and standardize workflows for vendor onboarding, compliance management, contract administration, approvals, documentation tracking, and partner lifecycle management.",
      "Manage ERP implementation work including process validation, configuration, phased planning, testing, documentation, training, and stakeholder coordination.",
      "Develop KPI reporting frameworks, executive dashboards, and operational reporting solutions that improve visibility and decision-making.",
    ],
  },
  {
    title: "TechOps Executive & Executive Assistant to CEO",
    company: "Automotive Technology & Operations Company",
    period: "2023 - 2025",
    location: "Dallas-Fort Worth, TX",
    bullets: [
      "Partnered with executive leadership on strategic initiatives, operational planning, process improvement, and business systems administration.",
      "Coordinated customer onboarding, implementation, and operational readiness for national automotive OEMs and multi-location dealership organizations.",
      "Managed integrations and operational processes involving telematics platforms, toll recovery systems, payment processors, dealership systems, and partner ecosystems.",
      "Built implementation playbooks, onboarding programs, knowledge base content, automated help desk/chatbot workflows, process documentation, and training resources.",
      "Created reporting structures and operational visibility tools used by leadership to monitor implementation progress, business performance, and customer satisfaction.",
    ],
  },
  {
    title: "Director of Operations",
    company: "Multi-Site Education & Childcare Organization",
    period: "2009 - 2023",
    location: "Dallas-Fort Worth, TX",
    bullets: [
      "Directed multi-site business operations across staffing, compliance, enrollment, administration, scheduling, reporting, and organizational management.",
      "Led process improvement and standardization through operating procedures, documentation frameworks, reporting controls, compliance programs, and governance practices.",
      "Managed regulatory compliance, inspections, audits, documentation standards, and operational readiness in a highly regulated environment.",
      "Oversaw billing, payroll coordination, contractor administration, vendor management, purchasing controls, and operational reporting.",
      "Led recruitment, onboarding, workforce scheduling, performance management, employee development, and administrative support for teams of 30+ employees.",
    ],
  },
] as const;

const competencies = [
  "Business Analysis",
  "Requirements Gathering",
  "Business Process Analysis",
  "Process Mapping",
  "SOP Development",
  "Workflow Design",
  "Gap Analysis",
  "Stakeholder Management",
  "Process Improvement",
  "Operational Analysis",
  "Operations Leadership",
  "KPI Development",
  "Executive Reporting",
  "Systems Implementation",
  "User Acceptance Testing",
  "Change Management",
  "Vendor Management",
  "Compliance Management",
  "Training & Adoption",
] as const;

const technicalSkills = [
  "Software Implementation",
  "Systems Integration",
  "Platform Administration",
  "CRM Platforms",
  "ERP Platforms",
  "Reporting & Analytics",
  "Dashboard Development",
  "API Integrations",
  "Workflow Automation",
  "Systems Architecture",
  "Software Development",
  "Python",
  "SQL",
  "TypeScript",
] as const;

const education = [
  {
    title: "Master of Business Administration (MBA)",
    institution: "Business administration graduate program",
  },
] as const;

const certifications = [
  "Project management platform certification",
  "Business process and system design certification",
  "CMS website design and deployment certification",
  "Web development certification",
] as const;

function getContactHref() {
  return `mailto:${person.email}`;
}

export default function About() {
  const linkedIn = social.find((item) => item.icon === "linkedin");

  return (
    <main className={styles.aboutPage}>
      <Schema
        as="webPage"
        baseURL={baseURL}
        title={about.title}
        description={about.description}
        path={about.path}
        image={`/api/og/generate?title=${encodeURIComponent(about.title)}`}
        author={{
          name: person.name,
          url: `${baseURL}${about.path}`,
          image: `${baseURL}${person.avatar}`,
        }}
      />

      <section className={styles.resumeShell}>
        <aside className={styles.resumeSidebar}>
          <div className={styles.portraitCard}>
            <img src="/images/avatar.jpg" alt={person.name} />
          </div>
          <div className={styles.identityBlock}>
            <span>Resume Portfolio</span>
            <h1>{person.name}</h1>
            <p>Business Systems Architect</p>
          </div>

          <div className={styles.contactList}>
            {contactItems.map((item) => {
              const Icon = item.icon;
              const content = (
                <>
                  <Icon />
                  <span>
                    <em>{item.label}</em>
                    <strong>{item.value}</strong>
                  </span>
                </>
              );

              const isExternal = item.href.startsWith("http");

              return item.href ? (
                <SmartLink
                  key={item.label}
                  href={item.href}
                  target={isExternal ? "_blank" : undefined}
                  rel={isExternal ? "noopener noreferrer" : undefined}
                >
                  {content}
                </SmartLink>
              ) : (
                <div key={item.label}>{content}</div>
              );
            })}
          </div>

          <div className={styles.sidebarSection}>
            <h2>Core Skills</h2>
            <div className={styles.skillPills}>
              {competencies.slice(0, 8).map((skill) => (
                <span key={skill}>{skill}</span>
              ))}
            </div>
          </div>

          <div className={styles.sidebarSection}>
            <h2>Technical</h2>
            <div className={styles.skillPills}>
              {technicalSkills.slice(0, 8).map((skill) => (
                <span key={skill}>{skill}</span>
              ))}
            </div>
          </div>
        </aside>

        <div className={styles.resumeMain}>
          <section className={styles.resumeHero}>
            <span className={styles.sectionEyebrow}>Professional Summary</span>
            <h2>Operations and systems leader building scalable business infrastructure.</h2>
            <p>
              Operations leader with 10+ years of experience analyzing business processes,
              gathering requirements, improving workflows, implementing software, building
              reporting structures, documenting operating procedures, and driving organizational
              efficiency across multi-site and technology-enabled environments.
            </p>
            <div className={styles.heroActions}>
              <SmartLink href="/work" className={styles.primaryCta}>
                View Portfolio
                <HiOutlineArrowRight />
              </SmartLink>
              <SmartLink href={getContactHref()} className={styles.secondaryCta}>
                Contact
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
          </section>

          <section className={styles.highlightsGrid} aria-label="Resume highlights">
            {resumeHighlights.map((highlight, index) => {
              const Icon = [HiOutlineBriefcase, HiOutlineCog, HiOutlineChartBar][index];
              return (
                <article key={highlight}>
                  <Icon />
                  <p>{highlight}</p>
                </article>
              );
            })}
          </section>

          <section className={styles.resumeSection}>
            <div className={styles.sectionHeader}>
              <HiOutlineOfficeBuilding />
              <div>
                <span className={styles.sectionEyebrow}>Experience</span>
                <h2>Professional Experience</h2>
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
              <HiOutlineShieldCheck />
              <div>
                <span className={styles.sectionEyebrow}>Capabilities</span>
                <h2>Core Competencies</h2>
              </div>
            </div>
            <div className={styles.competencyGrid}>
              {competencies.map((skill) => (
                <span key={skill}>{skill}</span>
              ))}
            </div>
          </section>

          <section className={styles.resumeSection}>
            <div className={styles.sectionHeader}>
              <HiOutlineCog />
              <div>
                <span className={styles.sectionEyebrow}>Technical Skills</span>
                <h2>Systems & Tools</h2>
              </div>
            </div>
            <div className={styles.competencyGrid}>
              {technicalSkills.map((skill) => (
                <span key={skill}>{skill}</span>
              ))}
            </div>
          </section>

          <section className={styles.twoColumnSection}>
            <article className={styles.resumeSection}>
              <div className={styles.sectionHeader}>
                <HiOutlineDocumentText />
                <div>
                  <span className={styles.sectionEyebrow}>Education</span>
                  <h2>Education</h2>
                </div>
              </div>
              {education.map((item) => (
                <div key={item.title} className={styles.simpleEntry}>
                  <strong>{item.title}</strong>
                  <span>{item.institution}</span>
                </div>
              ))}
            </article>

            <article className={styles.resumeSection}>
              <div className={styles.sectionHeader}>
                <HiOutlineClipboardCheck />
                <div>
                  <span className={styles.sectionEyebrow}>Credentials</span>
                  <h2>Certifications</h2>
                </div>
              </div>
              <ul className={styles.certList}>
                {certifications.map((certification) => (
                  <li key={certification}>{certification}</li>
                ))}
              </ul>
            </article>
          </section>

        </div>
      </section>
    </main>
  );
}
