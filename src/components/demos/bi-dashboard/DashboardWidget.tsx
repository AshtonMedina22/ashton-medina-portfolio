'use client';

import { ReactNode } from 'react';
import styles from './DashboardWidget.module.scss';
import classNames from 'classnames';
import { GripVertical, Maximize2, MoreVertical, ExternalLink } from 'lucide-react';

interface DashboardWidgetProps {
  title: string;
  children: ReactNode;
  size?: 'small' | 'medium' | 'large';
  onDrillDown?: () => void;
  className?: string;
}

export function DashboardWidget({
  title,
  children,
  size = 'medium',
  onDrillDown,
  className,
}: DashboardWidgetProps) {
  return (
    <div className={classNames(styles.widget, styles[size], className)}>
      <div className={styles.widgetHeader}>
        <div className={styles.dragHandle}>
          <GripVertical size={14} />
        </div>
        <span className={styles.widgetTitle}>{title}</span>
        <div className={styles.widgetActions}>
          {onDrillDown && (
            <button className={styles.iconButton} onClick={onDrillDown} title="Drill down">
              <ExternalLink size={14} />
            </button>
          )}
          <button className={styles.iconButton} title="Expand">
            <Maximize2 size={14} />
          </button>
          <button className={styles.iconButton} title="More options">
            <MoreVertical size={14} />
          </button>
        </div>
      </div>
      <div className={styles.widgetContent}>{children}</div>
    </div>
  );
}
