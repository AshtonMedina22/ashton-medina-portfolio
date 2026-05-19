import {
  Meta,
  Schema,
  SmartLink,
} from "@once-ui-system/core";
import {
  HiOutlineArrowRight,
  HiOutlineBriefcase,
  HiOutlineChip,
  HiOutlineCollection,
  HiOutlineCube,
  HiOutlineDatabase,
  HiOutlineLightningBolt,
  HiOutlineLocationMarker,
  HiOutlineShieldCheck,
  HiOutlineShare,
} from "react-icons/hi";
import { baseURL, about, person, social } from "@/resources";
import styles from "@/components/about/about.module.scss";

export async function generateMetadata() {
  return Meta.generate({
    title: about.title,
    description: about.description,
    baseURL: baseURL,
    image: `/api/og/generate?title=${encodeURIComponent(about.title)}`,
    path: about.path,
  });
}

const credentialCards = [
  {
    icon: HiOutlineBriefcase,
    label: "Systems & Platform",
    value: "Engineer",
    detail: person.role,
  },
  {
    icon: HiOutlineCollection,
    label: "Portfolio",
    value: "4 systems",
    detail: "Enterprise platforms showcased",
  },
  {
    icon: HiOutlineShare,
    label: "Workflow logic",
    value: "40+ modeled",
    detail: "Operational paths across core functions",
  },
  {
    icon: HiOutlineLocationMarker,
    label: "Based in",
    value: person.locationLabel ?? "United States",
    detail: "Available for opportunities",
  },
] as const;

const proofStats = [
  {
    icon: HiOutlineCube,
    value: "Architecture",
    label: "Systems thinking",
    detail: "Structure-first platform design",
  },
  {
    icon: HiOutlineCollection,
    value: "4",
    label: "Project systems",
    detail: "ERP, delivery, finance, vendor, and ops",
  },
  {
    icon: HiOutlineShare,
    value: "40+",
    label: "Workflow paths",
    detail: "Automated across core business functions",
  },
  {
    icon: HiOutlineShieldCheck,
    value: "Enterprise",
    label: "Focus",
    detail: "Scale, security, governance, compliance",
  },
] as const;

const capabilityIcons = [
  HiOutlineCube,
  HiOutlineShare,
  HiOutlineDatabase,
  HiOutlineShieldCheck,
  HiOutlineLightningBolt,
] as const;

const systemChips = [
  "ERP & Financial Systems",
  "Workflow Automation Engines",
  "Operational Intelligence",
  "Compliance & Governance Systems",
  "Vendor & Contract Lifecycle",
  "Custom Business Platforms",
] as const;

const journey = [
  {
    title: "Systems Foundation",
    detail: "Learning how complex workflows break when structure, ownership, and data models are unclear.",
  },
  {
    title: "First Builds",
    detail: "Building applications and automation systems through practical implementation.",
  },
  {
    title: "Platform Growth",
    detail: "Engineering systems that connect business rules, users, records, and reporting.",
  },
  {
    title: "Systems Architect",
    detail: "Architecting ERP, automation, and operational intelligence platforms for durable execution.",
  },
  {
    title: "What's Next",
    detail: "Continuing to build systems that drive outcomes and create operational clarity.",
  },
] as const;

function getContactHref() {
  return `mailto:${person.email}`;
}

export default function About() {
  const linkedIn = social.find((item) => item.icon === "linkedin");
  const focusCards = about.focusAreas?.display ? about.focusAreas.areas.slice(0, 5) : [];

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

      <section className={styles.heroSection}>
        <div className={styles.heroCopy}>
          <span className={styles.eyebrow}>About me</span>
          <h1>
            I build systems that organize complexity and <span>drive outcomes.</span>
          </h1>
          <p>
            I&apos;m {person.name}, a systems and platform engineer specializing in ERP platforms,
            workflow automation, and operational intelligence systems for enterprise environments.
          </p>
          <div className={styles.focusStrip}>
            <HiOutlineShieldCheck />
            <span>Focused on structure. Driven by outcomes. Built for scale.</span>
          </div>
        </div>

        <div className={styles.heroPortraitWrap}>
          <div className={styles.portraitCard}>
            <img src="/images/avatar.jpg" alt={person.name} />
          </div>
          <aside className={styles.profilePanel} aria-label="Profile highlights">
            {credentialCards.map((card) => {
              const Icon = card.icon;
              return (
                <div key={card.label}>
                  <Icon />
                  <div>
                    <strong>{card.value}</strong>
                    <span>{card.detail}</span>
                  </div>
                </div>
              );
            })}
          </aside>
        </div>
      </section>

      <section className={styles.proofStrip} aria-label="Professional focus">
        {proofStats.map((stat) => {
          const Icon = stat.icon;
          return (
            <article key={stat.label}>
              <Icon />
              <div>
                <strong>{stat.value}</strong>
                <span>{stat.label}</span>
                <p>{stat.detail}</p>
              </div>
            </article>
          );
        })}
      </section>

      <section className={styles.capabilitiesSection}>
        <div className={styles.sectionIntro}>
          <span className={styles.sectionEyebrow}>What I do</span>
          <h2>I design, build, and optimize systems that run the business.</h2>
        </div>
        <p className={styles.sectionLead}>
          {about.intro.display ? about.intro.description : "I partner with organizations to solve complex operational challenges through custom-built platforms, automation, and data-driven intelligence."}
        </p>
        <div className={styles.capabilityGrid}>
          {focusCards.map((area, index) => {
            const Icon = capabilityIcons[index] ?? HiOutlineChip;
            return (
              <article key={area.title}>
                <Icon />
                <h3>{area.title}</h3>
                <p>{area.description}</p>
              </article>
            );
          })}
        </div>
      </section>

      <section className={styles.systemsSection}>
        <div className={styles.sectionIntro}>
          <span className={styles.sectionEyebrow}>Systems I build</span>
          <h2>Platforms that power mission-critical operations.</h2>
        </div>
        <div className={styles.systemChips}>
          {systemChips.map((chip, index) => (
            <span key={chip}>
              {index % 3 === 0 ? <HiOutlineCube /> : index % 3 === 1 ? <HiOutlineShare /> : <HiOutlineShieldCheck />}
              {chip}
            </span>
          ))}
        </div>
      </section>

      <section className={styles.journeySection}>
        <div className={styles.journeyHeader}>
          <div className={styles.sectionIntro}>
            <span className={styles.sectionEyebrow}>My journey</span>
            <h2>Built on curiosity. Driven by problem solving.</h2>
          </div>
          <p>
            From a practical problem solver to a systems architect, my work has been about
            building, learning, and creating real operational impact.
          </p>
        </div>
        <div className={styles.timeline}>
          {journey.map((item, index) => (
            <article key={item.title} className={index === 2 ? styles.activeJourney : undefined}>
              <span />
              <h3>{item.title}</h3>
              <p>{item.detail}</p>
            </article>
          ))}
        </div>
      </section>

      <section className={styles.ctaSection}>
        <div>
          <HiOutlineShare />
          <p>I believe great systems don&apos;t just solve problems. They create clarity, drive outcomes, and scale impact.</p>
        </div>
        <div className={styles.ctaActions}>
          <SmartLink href={getContactHref()} className={styles.primaryCta}>
            Let&apos;s build something impactful
            <HiOutlineArrowRight />
          </SmartLink>
          {linkedIn && (
            <SmartLink href={linkedIn.link} target="_blank" rel="noopener noreferrer" className={styles.secondaryCta}>
              LinkedIn
            </SmartLink>
          )}
        </div>
      </section>
    </main>
  );
}
