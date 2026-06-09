import styles from "@/components/about/about.module.scss";
import { about, baseURL, person } from "@/resources";
import { Meta, Schema, SmartLink } from "@once-ui-system/core";
import {
  HiOutlineArrowRight,
  HiOutlineCog,
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

const experience = [
  {
    title: "Business Systems Architect II",
    company: "Event Operations & Rental Services Company",
    period: "2025 - Present",
    location: "Allen, TX",
    bullets: [
      "Serve as primary business systems owner for ERP systems supporting CRM, sales, vendor management, accounting, HR, reporting, and project management.",
      "Lead requirements gathering, workflow analysis, and process mapping with leadership, stakeholders, vendors, and implementation partners.",
      "Design and standardize workflows for vendor onboarding, compliance management, contract administration, and partner lifecycle management.",
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
      "Coordinated customer onboarding and operational readiness for national automotive OEMs and multi-location dealership organizations.",
      "Managed integrations involving telematics platforms, toll recovery systems, payment processors, and partner ecosystems.",
      "Built implementation playbooks, onboarding programs, process documentation, and training resources.",
    ],
  },
  {
    title: "Director of Operations",
    company: "Multi-Site Education & Childcare Organization",
    period: "2009 - 2023",
    location: "Dallas-Fort Worth, TX",
    bullets: [
      "Directed multi-site business operations across staffing, compliance, enrollment, administration, scheduling, and reporting.",
      "Led process improvement and standardization through operating procedures, documentation frameworks, and governance practices.",
      "Managed regulatory compliance, inspections, audits, and operational readiness in a highly regulated environment.",
      "Led recruitment, onboarding, workforce scheduling, and administrative support for teams of 30+ employees.",
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

function getContactHref() {
  return `mailto:${person.email}`;
}

export default function About() {
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
            <img src={person.avatar} alt={person.name} />
          </div>
          <div className={styles.identityBlock}>
            <span>Profile</span>
            <h1>
              {person.firstName} <span className="headingAccent">{person.lastName}</span>
            </h1>
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
        </aside>

        <div className={styles.resumeMain}>
          <section className={styles.resumeHero}>
            <span className={styles.sectionEyebrow}>Resume</span>
            <h2 className={styles.sectionTitle}>
              Professional <span className="headingAccent">summary.</span>
            </h2>
            <p className={styles.summaryText}>
              I&apos;m Ashton, a business systems architect with experience across operations
              leadership, process improvement, software implementation, workflow automation, reporting,
              and organizational execution.
            </p>
            <p className={styles.summaryText}>
              Business systems architect with 10+ years across multi-site operations leadership and
              full-cycle platform implementation. Currently own ERP architecture spanning CRM, vendor
              management, financial controls, and operational reporting.
            </p>
            <p className={styles.summaryText}>
              Work spans requirements gathering, workflow design, rollout, documentation, KPI
              development, and adoption — with prior experience directing regulated multi-site
              operations and executive technical coordination.
            </p>
            <div className={styles.heroActions}>
              <SmartLink href="/work" className={styles.primaryCta}>
                View Work
                <HiOutlineArrowRight />
              </SmartLink>
              <SmartLink href={getContactHref()} className={styles.secondaryCta}>
                Contact
              </SmartLink>
            </div>
          </section>

          <section className={styles.resumeSection}>
            <div className={styles.sectionHeader}>
              <HiOutlineOfficeBuilding />
              <div>
                <span className={styles.sectionEyebrow}>Experience</span>
                <h2 className={styles.sectionTitle}>
                  Professional <span className="headingAccent">experience.</span>
                </h2>
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
                <h2 className={styles.sectionTitle}>
                  Core <span className="headingAccent">competencies.</span>
                </h2>
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
                <h2 className={styles.sectionTitle}>
                  Systems <span className="headingAccent">& tools.</span>
                </h2>
              </div>
            </div>
            <div className={styles.competencyGrid}>
              {technicalSkills.map((skill) => (
                <span key={skill}>{skill}</span>
              ))}
            </div>
          </section>
        </div>
      </section>
    </main>
  );
}
