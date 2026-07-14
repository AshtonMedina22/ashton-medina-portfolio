import { about, baseURL, person, work } from "@/resources";
import { Meta, Schema } from "@once-ui-system/core";
import { Projects } from "@/components/work/Projects";
import styles from "./WorkPage.module.scss";

const primaryFocusAreas = [
  {
    title: "AgentOps + Human Review",
    text: "Secure agent-style drafting, approval queues, responsible automation, and human-in-the-loop controls.",
  },
  {
    title: "MLOps Data Pipelines",
    text: "Validated data movement, workflow orchestration, system synchronization, and AI-ready operating records.",
  },
  {
    title: "AI Governance",
    text: "Auditable workflows, compliance automation, access controls, telemetry, and production operating guardrails.",
  },
] as const;

export async function generateMetadata() {
  return Meta.generate({
    title: work.title,
    description: work.description,
    baseURL: baseURL,
    image: `/api/og/generate?title=${encodeURIComponent(work.title)}&subtitle=${encodeURIComponent(work.description)}`,
    path: work.path,
  });
}

export default function Work() {
  return (
    <main className={styles.workPage}>
      <Schema
        as="webPage"
        baseURL={baseURL}
        path={work.path}
        title={work.title}
        description={work.description}
        image={`/api/og/generate?title=${encodeURIComponent(work.title)}&subtitle=${encodeURIComponent(work.description)}`}
        author={{
          name: person.name,
          url: `${baseURL}${about.path}`,
          image: `${baseURL}${person.avatar}`,
        }}
      />

      <section className={styles.workShell} aria-labelledby="selected-work-title">
        <div className={styles.sectionIntro}>
          <span className={styles.eyebrow}>AI Solutions & Automation Portfolio</span>
          <h1 id="selected-work-title">Selected MLOps, AgentOps & Intelligent Automation Projects</h1>
          <p>
            A curated collection of AI-ready systems, orchestration layers, intelligent automation
            frameworks, governance platforms, and operational data products architected for
            production use.
          </p>
        </div>

        <div className={styles.focusStrip} aria-label="Primary portfolio focus areas">
          {primaryFocusAreas.map((area) => (
            <article key={area.title}>
              <h2>{area.title}</h2>
              <p>{area.text}</p>
            </article>
          ))}
        </div>

        <Projects />
      </section>
    </main>
  );
}
