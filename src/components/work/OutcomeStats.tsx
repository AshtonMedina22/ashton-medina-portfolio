import styles from "./OutcomeStats.module.scss";

interface Stat {
  value: string;
  label: string;
}

interface OutcomeStatsProps {
  stats?: Stat[];
}

export function OutcomeStats({ stats }: OutcomeStatsProps) {
  if (!stats || !Array.isArray(stats) || stats.length === 0) {
    return null;
  }

  return (
    <div className={styles.statsContainer}>
      {stats.map((stat: Stat, index: number) => (
        <div key={index} className={styles.statBlock}>
          <div className={styles.statValue}>{stat.value}</div>
          <div className={styles.statLabel}>{stat.label}</div>
        </div>
      ))}
    </div>
  );
}
