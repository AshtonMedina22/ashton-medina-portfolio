import {
  Column,
  Meta,
  Schema,
  SmartLink,
} from "@once-ui-system/core";
import {
  HiOutlineArrowRight,
  HiOutlineCube,
  HiOutlineDatabase,
  HiOutlineLightningBolt,
  HiOutlineShieldCheck,
  HiOutlineViewGrid,
} from "react-icons/hi";
import { home, about, person, baseURL, techStack } from "@/resources";
import { TechStackMarquee } from "@/components/home/TechStackMarquee";
import styles from "./page.module.scss";

const featuredProjects = [
  {
    title: "Sales-to-Delivery Automation Platform",
    description: "Converts confirmed sales orders into delivery-ready projects with governed handoff logic.",
    href: "/work/sales-to-delivery-automation-platform",
    accent: "indigo",
  },
  {
    title: "Revenue Financial Control Engine",
    description: "Protects margin, approval states, vendor variance, and payout readiness across delivery records.",
    href: "/work/revenue-financial-control-engine",
    accent: "cyan",
  },
  {
    title: "Vendor Lifecycle Compliance Platform",
    description: "Coordinates onboarding, compliance status, portal access, and assignment acceptance.",
    href: "/work/vendor-lifecycle-compliance-platform",
    accent: "teal",
  },
] as const;

const capabilities = [
  {
    icon: HiOutlineCube,
    title: "System Architecture",
    text: "Designing scalable, secure, and maintainable enterprise systems.",
  },
  {
    icon: HiOutlineViewGrid,
    title: "Workflow Automation",
    text: "Building governed workflows that remove manual operational friction.",
  },
  {
    icon: HiOutlineDatabase,
    title: "Data Integration",
    text: "Unifying records across sales, finance, delivery, vendors, and reporting.",
  },
  {
    icon: HiOutlineShieldCheck,
    title: "Governance & Compliance",
    text: "Enforcing access, approval states, audit logic, and lifecycle controls.",
  },
  {
    icon: HiOutlineLightningBolt,
    title: "Operational Intelligence",
    text: "Turning live system activity into executive visibility and action.",
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

function OperationsVisual() {
  return (
    <div className={styles.opsVisual} aria-label="Operational intelligence platform visual">
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
          <strong>Operational Intelligence Platform</strong>
          <span>Live system view</span>
        </div>
        <div className={styles.metricGrid}>
          <div>
            <span>Active workflows</span>
            <strong>128</strong>
          </div>
          <div>
            <span>Exceptions</span>
            <strong>24</strong>
          </div>
          <div>
            <span>Pending approvals</span>
            <strong>17</strong>
          </div>
          <div>
            <span>System health</span>
            <strong>98%</strong>
          </div>
        </div>
        <div className={styles.visualGrid}>
          <div className={styles.lineChart}>
            <div className={styles.panelHeader}>Workflow activity</div>
            <svg viewBox="0 0 360 150" role="img" aria-label="Workflow activity trend">
              <polyline
                points="0,110 38,86 75,94 112,64 148,88 184,56 220,72 256,47 292,58 330,22 360,8"
                fill="none"
                stroke="currentColor"
                strokeWidth="5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
          <div className={styles.statusChart}>
            <div className={styles.panelHeader}>Workflow status</div>
            <div className={styles.donut} aria-hidden />
            <ul>
              <li><span /> Completed <strong>72%</strong></li>
              <li><span /> In progress <strong>18%</strong></li>
              <li><span /> Exceptions <strong>10%</strong></li>
            </ul>
          </div>
        </div>
        <div className={styles.executionTable}>
          <div className={styles.panelHeader}>Recent workflow executions</div>
          {[
            ["Vendor onboarding", "Completed", "Low"],
            ["Contract compliance check", "Completed", "Low"],
            ["Invoice validation", "Exception", "High"],
            ["Payment authorization", "In progress", "Medium"],
          ].map(([workflow, status, impact]) => (
            <div key={workflow}>
              <span>{workflow}</span>
              <strong>{status}</strong>
              <em>{impact}</em>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function ProjectPreview({ project }: { project: (typeof featuredProjects)[number] }) {
  return (
    <SmartLink href={project.href} className={styles.projectCard}>
      <div className={`${styles.projectVisual} ${styles[project.accent]}`} aria-hidden>
        <span />
        <div>
          <i />
          <i />
          <i />
        </div>
      </div>
      <div className={styles.projectCardBody}>
        <h3>{project.title}</h3>
        <p>{project.description}</p>
        <span>
          View case study
          <HiOutlineArrowRight />
        </span>
      </div>
    </SmartLink>
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
              I build operational systems that drive <span>enterprise outcomes.</span>
            </h1>
            <p>
              Architecting end-to-end platforms that unify data, enforce governance,
              and automate mission-critical workflows across modern operations.
            </p>
            <div className={styles.heroActions}>
              <SmartLink href="/work" className={styles.primaryCta}>
                Explore my work
                <HiOutlineArrowRight />
              </SmartLink>
              <SmartLink href="/about" className={styles.secondaryCta}>
                View architecture
              </SmartLink>
            </div>
            <div className={styles.heroStats}>
              <div>
                <strong>4</strong>
                <span>Enterprise systems showcased</span>
              </div>
              <div>
                <strong>40+</strong>
                <span>Mission-critical workflows modeled</span>
              </div>
              <div>
                <strong>Full-stack</strong>
                <span>Architecture through implementation</span>
              </div>
            </div>
          </div>
          <OperationsVisual />
        </section>

        {techStack.length > 0 && (
          <section className={styles.techBanner} aria-label="Technology stack">
            <span>Technology stack behind the systems</span>
            <TechStackMarquee />
          </section>
        )}

        <section className={styles.featuredSection}>
          <div className={styles.sectionIntro}>
            <div>
              <span className={styles.sectionEyebrow}>Featured work</span>
              <h2>
                Platforms built for complexity. Designed for <span>impact.</span>
              </h2>
            </div>
            <div>
              <p>
                End-to-end systems that unify operations, enforce governance,
                and deliver measurable business value.
              </p>
              <SmartLink href="/work">
                View all projects
                <HiOutlineArrowRight />
              </SmartLink>
            </div>
          </div>
          <div className={styles.projectGrid}>
            {featuredProjects.map((project) => (
              <ProjectPreview key={project.href} project={project} />
            ))}
          </div>
        </section>

        <section className={styles.capabilitiesSection}>
          <div className={styles.capabilityLead}>
            <span className={styles.sectionEyebrow}>Capabilities</span>
            <h2>
              From architecture to execution. <span>I build it all.</span>
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
      </div>
    </Column>
  );
}
