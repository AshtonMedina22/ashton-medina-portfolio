import { about, baseURL, person, work } from "@/resources";
import { Meta, Schema } from "@once-ui-system/core";
import { Projects } from "@/components/work/Projects";
import styles from "./WorkPage.module.scss";

export async function generateMetadata() {
  return Meta.generate({
    title: work.title,
    description: work.description,
    baseURL: baseURL,
    image: `/api/og/generate?title=${encodeURIComponent(work.title)}`,
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
        image={`/api/og/generate?title=${encodeURIComponent(work.title)}`}
        author={{
          name: person.name,
          url: `${baseURL}${about.path}`,
          image: `${baseURL}${person.avatar}`,
        }}
      />

      <section className={styles.workHero}>
        <div className={styles.heroLead}>
          <span className={styles.eyebrow}>My work</span>
          <h1>
            Operational
            <br />
            systems <span className="headingAccent">portfolio.</span>
          </h1>
        </div>
        <div className={styles.heroAside}>
          <p>
            Four ERP, workflow, vendor, finance, and reporting systems built around business
            operations, controls, and execution visibility.
          </p>
        </div>
      </section>

      <section className={styles.projectsSection}>
        <Projects />
      </section>
    </main>
  );
}
