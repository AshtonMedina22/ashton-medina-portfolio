"use client";

import React from "react";
import styles from "./ProblemSolutionColumns.module.scss";

interface ProblemSolutionColumnsProps {
  children: React.ReactNode;
}

/**
 * Renders two columns for Problem | Solution on project pages.
 * In MDX, pass two children: first = Problem content, second = Solution (Outcome) content.
 */
export function ProblemSolutionColumns({ children }: ProblemSolutionColumnsProps) {
  const arr = React.Children.toArray(children);
  const left = arr[0];
  const right = arr[1];

  return (
    <div className={styles.root} role="region" aria-label="Problem and Solution">
      <div className={styles.columnProblem}>{left}</div>
      <div className={styles.columnSolution}>{right}</div>
    </div>
  );
}
