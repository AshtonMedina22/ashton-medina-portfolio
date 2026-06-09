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
  "Business Analysis",
  "Process Improvement",
  "Systems Implementation",
  "Operations Leadership",
  "Reporting & Analytics",
] as const;

const capabilities = [
  {
    icon: HiOutlineClipboardList,
    title: "Operations & Process Improvement",
    text: "Analyze how work moves through teams, identify gaps, and turn informal operating habits into repeatable processes.",
  },
  {
    icon: HiOutlineCog,
    title: "Systems Implementation",
    text: "Support platform selection, configuration, testing, documentation, rollout, and adoption across business functions.",
  },
  {
    icon: HiOutlineChartBar,
    title: "Visibility & Reporting",
    text: "Develop KPI structures, dashboards, operating reports, and leadership views that turn activity into usable context.",
  },
  {
    icon: HiOutlineShieldCheck,
    title: "Controls, Adoption & Scale",
    text: "Establish ownership, approval paths, SOPs, training materials, and governance practices that support sustained execution.",
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
          <OperationsVisual />
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
              Systems capability
              <br />
              across the full{" "}
              <span className="headingAccent">operating model.</span>
            </h2>
            <p>
              My background is not tied to one platform. It covers operational analysis, process
              standardization, software implementation, data visibility, documentation, training,
              and the controls needed to manage growth.
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
            <span>Tools and platforms used across business systems work</span>
            <TechStackMarquee />
          </section>
        )}
      </div>
    </Column>
  );
}
