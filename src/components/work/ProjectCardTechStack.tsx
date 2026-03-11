"use client";

import styles from "./ProjectCardTechStack.module.scss";

interface TechStackProps {
  technologies: Array<{ name: string; icon: string | null }>;
}

export function ProjectCardTechStack({ technologies }: TechStackProps) {
  if (!technologies || technologies.length === 0) return null;

  return (
    <div className={styles.techContainer}>
      {technologies.map((tech, index) => (
        <div key={`${tech.name}-${index}`} className={styles.techItem}>
          {tech.name}
        </div>
      ))}
    </div>
  );
}
