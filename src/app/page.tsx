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
  "AI-Ready Workflows",
  "25+ Tools Connected",
  "5,500+ Users Supported",
  "100% Audit Readiness",
] as const;

const capabilities = [
  {
    icon: HiOutlineClipboardList,
    title: "Strategize AI Solutions",
    text: "Map business goals, data sources, process gaps, risk points, and adoption needs before deciding what should be automated or AI-enabled.",
  },
  {
    icon: HiOutlineCog,
    title: "Orchestrate Workflows",
    text: "Build practical automation layers that connect tools, route tasks, prepare data, and keep humans in the loop where judgment or review matters.",
  },
  {
    icon: HiOutlineChartBar,
    title: "Create Observability",
    text: "Turn workflow activity, system events, and operating data into dashboards, alerts, exception reports, and leadership-ready context.",
  },
  {
    icon: HiOutlineShieldCheck,
    title: "Govern and Improve",
    text: "Document controls, train teams, define runbooks, and refine the system so AI-assisted work remains explainable, auditable, and useful.",
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
            <span className={styles.eyebrow}>AI Solutions. Automation. Outcomes.</span>
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
              One practical method
              {" "}
              <br />
              for AI-enabled{" "}
              <span className="headingAccent">operations.</span>
            </h2>
            <p>
              My work starts with how the business actually runs, then turns that operating reality
              into requirements, workflow logic, data readiness, visibility, controls, and adoption
              plans that make intelligent systems usable in production.
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
              <h2>Tools used to build, connect, and operate AI-ready systems</h2>
              <p>
                The stack changes by company, but the work stays consistent: connect data, automate
                handoffs, add human-in-the-loop controls, improve observability, and make processes
                easier to run.
              </p>
            </div>
            <TechStackMarquee />
          </section>
        )}
      </div>
    </Column>
  );
}
