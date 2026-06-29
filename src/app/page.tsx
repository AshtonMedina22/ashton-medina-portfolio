import { OperationsVisual } from "@/components/home/OperationsVisual";
import { TechStackMarquee } from "@/components/home/TechStackMarquee";
import { about, baseURL, home, person, techStack } from "@/resources";
import { Column, Meta, Schema, SmartLink } from "@once-ui-system/core";
import {
  HiOutlineArrowRight,
  HiOutlineChartBar,
  HiOutlineClipboardList,
  HiOutlineCog,
  HiOutlineShieldCheck,
} from "react-icons/hi";
import styles from "./page.module.scss";

const proofStrip = [
  "15+ Years",
  "25+ Tools Consolidated",
  "5,500+ Users Supported",
  "3,000+ SaaS Customers",
  "100% Audit Readiness",
] as const;

const capabilities = [
  {
    icon: HiOutlineClipboardList,
    title: "Map the Work",
    text: "Understand requests, approvals, handoffs, exceptions, ownership gaps, and reporting needs before changing the system.",
  },
  {
    icon: HiOutlineCog,
    title: "Build the System",
    text: "Configure or create ERP, CRM, automation, support, and reporting workflows around the process teams actually use.",
  },
  {
    icon: HiOutlineChartBar,
    title: "Create Visibility",
    text: "Turn daily activity into dashboards, KPIs, status views, exception reports, and leadership-ready operating context.",
  },
  {
    icon: HiOutlineShieldCheck,
    title: "Make It Stick",
    text: "Document SOPs, train teams, define controls, and support adoption so the process keeps working after launch.",
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
            <span className={styles.eyebrow}>Systems. Workflows. Outcomes.</span>
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

        <section className={styles.capabilitiesSection}>
          <div className={styles.sectionIntro}>
            <span className={styles.sectionEyebrow}>Capabilities</span>
            <h2>
              One operating method
              {" "}
              <br />
              across different{" "}
              <span className="headingAccent">industries.</span>
            </h2>
            <p>
              My work starts with how the business actually runs, then turns that into
              requirements, workflows, system logic, reporting, documentation, and adoption plans
              that teams can keep using.
            </p>
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

        {techStack.length > 0 && (
          <section className={styles.techBanner} aria-label="Technology stack">
            <div className={styles.techBannerIntro}>
              <span className={styles.sectionEyebrow}>Technology</span>
              <h2>Tools used to build, connect, and manage business systems</h2>
              <p>
                The stack changes by company, but the work stays consistent: connect data,
                automate handoffs, improve visibility, and make processes easier to run.
              </p>
            </div>
            <TechStackMarquee />
          </section>
        )}
      </div>
    </Column>
  );
}
