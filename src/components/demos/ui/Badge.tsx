'use client';

import { ReactNode } from 'react';
import styles from './Badge.module.scss';
import classNames from 'classnames';

interface BadgeProps {
  children: ReactNode;
  variant?: 'default' | 'success' | 'warning' | 'danger' | 'info' | 'neutral';
  size?: 'sm' | 'md';
  className?: string;
}

export function Badge({ 
  children, 
  variant = 'default', 
  size = 'sm',
  className 
}: BadgeProps) {
  return (
    <span className={classNames(styles.badge, styles[variant], styles[size], className)}>
      {children}
    </span>
  );
}
