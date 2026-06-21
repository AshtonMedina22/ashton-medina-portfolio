import { getPosts } from "@/utils/utils";
import { Column } from "@once-ui-system/core";
import { ProjectCard } from "./ProjectCard";
import styles from "./Projects.module.scss";

interface ProjectsProps {
  range?: [number, number?];
  exclude?: string[];
}

const workPageProjectOrder = [
  "sales-to-delivery-automation-platform",
  "vendor-lifecycle-compliance-platform",
  "multi-tenant-enterprise-operations-hub",
  "revenue-financial-control-engine",
  "operational-intelligence-platform",
  "business-access-software-cost-control-dashboard",
  "calendar-document-follow-up-automation-system",
  "event-driven-automation-secure-ai-gateway",
];

const featuredProjectSlugs = new Set(workPageProjectOrder.slice(0, 2));

export function Projects({ range, exclude }: ProjectsProps) {
  let allProjects = getPosts(["src", "app", "work", "projects"]);

  // Exclude by slug (exact match)
  if (exclude && exclude.length > 0) {
    allProjects = allProjects.filter((post) => !exclude.includes(post.slug));
  }

  const sortedProjects = allProjects
    .filter((post) => workPageProjectOrder.includes(post.slug))
    .sort((a, b) => workPageProjectOrder.indexOf(a.slug) - workPageProjectOrder.indexOf(b.slug));

  const displayedProjects = range
    ? sortedProjects.slice(range[0] - 1, range[1] ?? sortedProjects.length)
    : sortedProjects;

  return (
    <Column fillWidth marginBottom="xl">
      <div className={styles.projectsGrid}>
        {displayedProjects.map((post, index) => (
          <ProjectCard
            priority={index < 2}
            key={post.slug}
            href={`/work/${post.slug}`}
            images={post.metadata.images}
            title={post.metadata.title}
            description={post.metadata.summary}
            content={post.content}
            avatars={post.metadata.team?.map((member) => ({ src: member.avatar })) || []}
            link={post.metadata.link || ""}
            techStack={post.metadata.techStack}
            featured={featuredProjectSlugs.has(post.slug)}
          />
        ))}
      </div>
    </Column>
  );
}
