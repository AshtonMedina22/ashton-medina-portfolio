'use client';

import { ReactNode } from 'react';
import styles from './DemoLayout.module.scss';
import classNames from 'classnames';

interface DemoLayoutProps {
  children: ReactNode;
  title: string;
  subtitle?: string;
  className?: string;
}

export function DemoLayout({ children, title, subtitle, className }: DemoLayoutProps) {
  return (
    <div className={classNames(styles.demoLayout, className)}>
      <header className={styles.header}>
        <div className={styles.headerContent}>
          <h1 className={styles.title}>{title}</h1>
          {subtitle && <p className={styles.subtitle}>{subtitle}</p>}
        </div>
        <div className={styles.badge}>
          <span className={styles.liveDot} />
          Interactive Demo
        </div>
      </header>
      <main className={styles.main}>
        {children}
      </main>
    </div>
  );
}
