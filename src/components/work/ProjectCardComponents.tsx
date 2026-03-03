import { Column, Icon, Row, Text } from "@once-ui-system/core";
import React, { ReactNode } from "react";
import styles from "./ProjectDetails.module.scss";

interface SectionCardProps {
  children: ReactNode;
}

interface StepCardProps {
  number: number;
  title: string;
  subtitle?: string;
  children: ReactNode;
}

interface MetricCardProps {
  title: string;
  children: ReactNode;
}

export function ProofPointsBlock({ children }: { children: ReactNode }) {
  return <div className={styles.proofPointsBlock}>{children}</div>;
}

export function ProofPoint({ title, children }: { title: string; children: ReactNode }) {
  return (
    <div className={styles.proofPoint}>
      <span className={styles.proofPointTitle}>{title}</span>
      <div className={styles.proofPointContent}>{children}</div>
    </div>
  );
}

export function SectionCard({ children }: SectionCardProps) {
  return (
    <div className={styles.sectionCard}>
      {children}
    </div>
  );
}

export function StepCard({ number, title, subtitle, children }: StepCardProps) {
  return (
    <div className={styles.stepCard}>
      <div className={styles.stepHeader}>
        <span className={styles.stepNumber}>{number}</span>
        <h4 className={styles.stepTitle}>{title}</h4>
      </div>
      {subtitle && <p className={styles.stepSubtitle}>{subtitle}</p>}
      <div className={styles.stepContent}>
        {children}
      </div>
    </div>
  );
}

export function MetricCard({ title, children }: MetricCardProps) {
  return (
    <div className={styles.metricCard}>
      <h4 className={styles.metricTitle}>{title}</h4>
      <div className={styles.metricContent}>
        {children}
      </div>
    </div>
  );
}

export function ProcessGrid({ children }: { children: ReactNode }) {
  return (
    <div className={styles.processGrid}>
      {children}
    </div>
  );
}

export function MetricsGrid({ children }: { children: ReactNode }) {
  return (
    <div className={styles.metricsGrid}>
      {children}
    </div>
  );
}

interface CalloutBoxProps {
  children: ReactNode;
}

export function CalloutBox({ children }: CalloutBoxProps) {
  return (
    <div className={styles.calloutBox}>
      {children}
    </div>
  );
}

interface AccentColumnProps {
  accent: "red" | "cyan";
  icon?: string;
  children: ReactNode;
}

export function AccentColumn({ accent, icon, children }: AccentColumnProps) {
  return (
    <div className={`${styles.accentColumn} ${styles[`accent-${accent}`]}`}>
      {icon && (
        <div className={styles.accentIcon}>
          <Icon name={icon as any} size="m" onBackground="neutral-strong" />
        </div>
      )}
      {children}
    </div>
  );
}

interface ArchitectureBlockProps {
  title: string;
  description: string;
  children: ReactNode;
}

export function ArchitectureBlock({ title, description, children }: ArchitectureBlockProps) {
  return (
    <div className={styles.architectureBlock}>
      <h4 className={styles.blockTitle}>{title}</h4>
      <p className={styles.blockDescription}>{description}</p>
      <div className={styles.blockContent}>
        {children}
      </div>
    </div>
  );
}

export function ArchitectureGrid({ children }: { children: ReactNode }) {
  return (
    <div className={styles.architectureGrid}>
      {children}
    </div>
  );
}

export function WorkflowDiagram() {
  const steps = [
    "Confirmed Sale",
    "Server Hook Trigger",
    "Duplicate Check",
    "Project Record",
    "Task Template",
    "Task Tree",
    "Owner Assignment",
    "Lifecycle Init"
  ];

  return (
    <div className={styles.workflowDiagram}>
      <div className={styles.flowContainer}>
        {steps.map((step, index) => (
          <React.Fragment key={index}>
            <div className={styles.flowStep}>
              <div className={styles.stepBox}>{step}</div>
            </div>
            {index < steps.length - 1 && (
              <div className={styles.flowArrow}>→</div>
            )}
          </React.Fragment>
        ))}
      </div>
    </div>
  );
}
