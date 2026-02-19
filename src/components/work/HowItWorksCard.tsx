import { ReactNode } from "react";
import styles from "./HowItWorksCard.module.scss";

interface HowItWorksCardProps {
  title?: string;
  children?: ReactNode;
}

export function HowItWorksCard({ title, children }: HowItWorksCardProps) {
  if (!title) return null;

  return (
    <div className={styles.card}>
      <h4 className={styles.cardTitle}>{title}</h4>
      {children && <p className={styles.cardContent}>{children}</p>}
    </div>
  );
}

interface HowItWorksGridProps {
  children?: ReactNode;
}

export function HowItWorksGrid({ children }: HowItWorksGridProps) {
  if (!children) return null;
  return <div className={styles.grid}>{children}</div>;
}
