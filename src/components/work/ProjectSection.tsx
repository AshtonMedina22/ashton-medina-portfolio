import { ReactNode } from "react";
import styles from "./ProjectSection.module.scss";

interface ProjectSectionProps {
  title: string;
  children: ReactNode;
}

export function ProjectSection({ title, children }: ProjectSectionProps) {
  return (
    <section className={styles.projectSection}>
      <h2 className={styles.sectionTitle}>{title}</h2>
      <div className={styles.sectionContent}>
        {children}
      </div>
    </section>
  );
}
