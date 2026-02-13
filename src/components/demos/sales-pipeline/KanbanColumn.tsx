'use client';

import { ReactNode } from 'react';
import { useDroppable } from '@dnd-kit/core';
import styles from './KanbanColumn.module.scss';
import { MoreHorizontal, Plus } from 'lucide-react';
import classNames from 'classnames';

interface KanbanColumnProps {
  id: string;
  title: string;
  color: string;
  count: number;
  totalValue: number;
  children: ReactNode;
}

export function KanbanColumn({ 
  id, 
  title, 
  color, 
  count, 
  totalValue, 
  children 
}: KanbanColumnProps) {
  const { isOver, setNodeRef } = useDroppable({
    id,
  });

  return (
    <div 
      className={classNames(styles.column, isOver && styles.isOver)}
      style={{ '--column-color': color } as React.CSSProperties}
    >
      <div className={styles.columnHeader}>
        <div className={styles.headerLeft}>
          <span className={styles.colorDot} />
          <span className={styles.title}>{title}</span>
          <span className={styles.count}>{count}</span>
        </div>
        <div className={styles.headerRight}>
          <span className={styles.value}>${(totalValue / 1000).toFixed(0)}K</span>
          <button className={styles.iconButton}>
            <Plus size={14} />
          </button>
          <button className={styles.iconButton}>
            <MoreHorizontal size={14} />
          </button>
        </div>
      </div>

      <div ref={setNodeRef} className={styles.columnContent}>
        {children}
      </div>
    </div>
  );
}
