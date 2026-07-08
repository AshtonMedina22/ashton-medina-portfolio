import { about, baseURL, person, work } from "@/resources";
import { Meta, Schema } from "@once-ui-system/core";
import { Projects } from "@/components/work/Projects";
import styles from "./WorkPage.module.scss";

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
          <span className={styles.eyebrow}>Portfolio</span>
          <h1 id="selected-work-title">Selected Work</h1>
          <p>
            A curated collection of systems, dashboards, automations, and workflow platforms
            built as professional portfolio case studies.
          </p>
        </div>

        <Projects />
      </section>
    </main>
  );
}
