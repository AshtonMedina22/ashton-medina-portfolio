'use client';

import { LucideIcon } from 'lucide-react';
import styles from './KPICard.module.scss';
import classNames from 'classnames';
import { TrendingUp, TrendingDown } from 'lucide-react';

interface KPICardProps {
  title: string;
  value: string;
  change: number;
  icon: LucideIcon;
  onClick?: () => void;
}

export function KPICard({ title, value, change, icon: Icon, onClick }: KPICardProps) {
  const isPositive = change >= 0;

  return (
    <div className={styles.kpiCard} onClick={onClick}>
      <div className={styles.iconWrapper}>
        <Icon className={styles.icon} />
      </div>
      <div className={styles.content}>
        <span className={styles.title}>{title}</span>
        <div className={styles.valueRow}>
          <span className={styles.value}>{value}</span>
          <span className={classNames(styles.change, isPositive ? styles.positive : styles.negative)}>
            {isPositive ? <TrendingUp size={12} /> : <TrendingDown size={12} />}
            {isPositive ? '+' : ''}{change}%
          </span>
        </div>
      </div>
      <div className={styles.drilldownHint}>
        Click to drill down →
      </div>
    </div>
  );
}
