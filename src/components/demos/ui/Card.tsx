'use client';

import { ReactNode } from 'react';
import styles from './Card.module.scss';
import classNames from 'classnames';

interface CardProps {
  children: ReactNode;
  className?: string;
  variant?: 'default' | 'outlined' | 'elevated';
  padding?: 's' | 'm' | 'l';
  onClick?: () => void;
  interactive?: boolean;
}

export function Card({ 
  children, 
  className, 
  variant = 'default',
  padding = 'm',
  onClick,
  interactive = false
}: CardProps) {
  return (
    <div 
      className={classNames(
        styles.card, 
        styles[variant],
        styles[`padding-${padding}`],
        interactive && styles.interactive,
        className
      )}
      onClick={onClick}
    >
      {children}
    </div>
  );
}

export function CardHeader({ children, className }: { children: ReactNode; className?: string }) {
  return <div className={classNames(styles.cardHeader, className)}>{children}</div>;
}

export function CardContent({ children, className }: { children: ReactNode; className?: string }) {
  return <div className={classNames(styles.cardContent, className)}>{children}</div>;
}

export function CardFooter({ children, className }: { children: ReactNode; className?: string }) {
  return <div className={classNames(styles.cardFooter, className)}>{children}</div>;
}
