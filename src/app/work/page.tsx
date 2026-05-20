import { Meta, Schema, SmartLink } from "@once-ui-system/core";
import {
  HiOutlineArrowRight,
  HiOutlineChartBar,
  HiOutlineCube,
  HiOutlineExternalLink,
  HiOutlineLightningBolt,
  HiOutlineShieldCheck,
  HiOutlineShare,
} from "react-icons/hi";
import { baseURL, about, person, work } from "@/resources";
import { getPosts } from "@/utils/utils";
import styles from "./WorkPage.module.scss";

type ProjectPost = ReturnType<typeof getPosts>[number];

const categoryMap: Record<string, string> = {
  "sales-to-delivery-automation-platform": "Workflow automation platform",
  "revenue-financial-control-engine": "Financial control system",
  "vendor-lifecycle-compliance-platform": "Vendor lifecycle platform",
  "operational-intelligence-platform": "Operational reporting platform",
};

const visualMap: Record<string, string> = {
  "sales-to-delivery-automation-platform": "salesVisual",
  "revenue-financial-control-engine": "revenueVisual",
  "vendor-lifecycle-compliance-platform": "vendorVisual",
  "operational-intelligence-platform": "opsVisual",
};

const accentIconMap: Record<string, typeof HiOutlineCube> = {
  "sales-to-delivery-automation-platform": HiOutlineShare,
  "revenue-financial-control-engine": HiOutlineChartBar,
  "vendor-lifecycle-compliance-platform": HiOutlineShieldCheck,
  "operational-intelligence-platform": HiOutlineLightningBolt,
};

const featuredStats = [
  { value: "Zero", label: "Manual re-entry" },
  { value: "65+", label: "Synced fields" },
  { value: "CRM-to-project", label: "Automation" },
  { value: "Vendor workflow", label: "Coordination" },
] as const;

export async function generateMetadata() {
  return Meta.generate({
    title: work.title,
    description: work.description,
    baseURL: baseURL,
    image: `/api/og/generate?title=${encodeURIComponent(work.title)}`,
    path: work.path,
  });
}

function sortProjects(projects: ProjectPost[]) {
  return [...projects].sort((a, b) => {
    return new Date(b.metadata.publishedAt).getTime() - new Date(a.metadata.publishedAt).getTime();
  });
}

function ProjectVisual({ slug, featured = false }: { slug: string; featured?: boolean }) {
  const visualClass = visualMap[slug] ?? "salesVisual";

  return (
    <div className={`${styles.projectVisual} ${styles[visualClass]} ${featured ? styles.featuredVisual : ""}`} aria-hidden>
      <div className={styles.visualRail}>
        <span />
        <i />
        <i />
        <i />
      </div>
      <div className={styles.visualCanvas}>
        <div className={styles.visualTopline}>
          <strong>{featured ? "Executive overview" : "System preview"}</strong>
          <span>ERP records</span>
        </div>
        <div className={styles.visualMetricRow}>
          <i />
          <i />
          <i />
        </div>
        <div className={styles.visualBody}>
          <div className={styles.visualChart}>
            <span />
            <span />
            <span />
            <span />
          </div>
          <div className={styles.visualSignal}>
            <em />
            <em />
            <em />
          </div>
        </div>
      </div>
    </div>
  );
}

function ProjectCard({ project }: { project: ProjectPost }) {
  const Icon = accentIconMap[project.slug] ?? HiOutlineCube;

  return (
    <article className={styles.projectCard}>
      <div className={styles.cardHeader}>
        <span className={styles.cardIcon}>
          <Icon />
        </span>
        <div>
          <h3>{project.metadata.title}</h3>
          <p>{categoryMap[project.slug] ?? "Enterprise platform"}</p>
        </div>
      </div>
      <ProjectVisual slug={project.slug} />
      <p className={styles.cardSummary}>{project.metadata.summary}</p>
      <SmartLink href={`/work/${project.slug}`} className={styles.textLink}>
        View project
        <HiOutlineArrowRight />
      </SmartLink>
    </article>
  );
}

export default function Work() {
  const projects = sortProjects(getPosts(["src", "app", "work", "projects"]));
  const featured = projects[0];
  const secondaryProjects = projects.slice(1);

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
        <div>
          <span className={styles.eyebrow}>My work</span>
          <h1>
            Systems built for complexity. Designed for <span>impact.</span>
          </h1>
        </div>
        <div className={styles.heroAside}>
          <p>
            A selection of enterprise platforms and automation systems designed to solve
            real operational challenges and deliver measurable business outcomes.
          </p>
        </div>
      </section>

      {featured && (
        <section className={styles.featuredProject}>
          <div className={styles.featuredCopy}>
            <span className={styles.sectionLabel}>Featured project</span>
            <h2>{featured.metadata.title}</h2>
            <p className={styles.projectCategory}>{categoryMap[featured.slug]}</p>
            <p className={styles.featuredSummary}>{featured.metadata.summary}</p>
            <div className={styles.featuredStats}>
              {featuredStats.map((stat) => (
                <div key={stat.label}>
                  <strong>{stat.value}</strong>
                  <span>{stat.label}</span>
                </div>
              ))}
            </div>
            <div className={styles.featuredActions}>
              <SmartLink href={`/work/${featured.slug}`} className={styles.primaryCta}>
                View project
                <HiOutlineArrowRight />
              </SmartLink>
              {featured.metadata.demo && (
                <SmartLink href={`/work/${featured.slug}/demo`} className={styles.secondaryCta}>
                  Live demo
                  <HiOutlineExternalLink />
                </SmartLink>
              )}
            </div>
          </div>
          <ProjectVisual slug={featured.slug} featured />
        </section>
      )}

      <section className={styles.allProjectsSection}>
        <span className={styles.sectionLabel}>All projects</span>
        <div className={styles.projectGrid}>
          {secondaryProjects.map((project) => (
            <ProjectCard key={project.slug} project={project} />
          ))}
        </div>
        <SmartLink href="/work" className={styles.viewAllButton}>
          View all projects
          <HiOutlineArrowRight />
        </SmartLink>
      </section>
    </main>
  );
}
