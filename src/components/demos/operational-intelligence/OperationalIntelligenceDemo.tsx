"use client";

import Image from "next/image";
import styles from "./operational-intelligence-demo.module.scss";

const MOCKUPS = [
  {
    src: "/images/projects/project-04/cover-01.svg",
    title: "KPI Dashboard",
    description: "Real-time operational metrics with key performance indicators",
  },
  {
    src: "/images/projects/project-04/cover-02.svg",
    title: "Available Chart Types",
    description: "7+ interactive chart types for flexible data visualization",
  },
  {
    src: "/images/projects/project-04/cover-03.svg",
    title: "Drag-and-Drop Dashboard Customization",
    description: "GridStack.js powered widget layout with per-user configuration",
  },
  {
    src: "/images/projects/project-04/cover-04.svg",
    title: "Multi-Format Export & Scheduled Reporting",
    description: "One-click PDF/Excel export and automated email delivery",
  },
];

export function OperationalIntelligenceDemo() {
  return (
    <div className={styles.demo}>
      <header className={styles.demoHeader}>
        <h1>Operational Intelligence Platform</h1>
        <p>Configurable analytics with drag-and-drop widgets and real-time KPIs</p>
      </header>

      <div className={styles.mockupGallery}>
        {MOCKUPS.map((mockup, idx) => (
          <div key={idx} className={styles.mockupCard}>
            <div className={styles.mockupImageContainer}>
              <Image
                src={mockup.src}
                alt={mockup.title}
                width={1200}
                height={600}
                priority={idx === 0}
                className={styles.mockupImage}
              />
            </div>
            <div className={styles.mockupInfo}>
              <h3>{mockup.title}</h3>
              <p>{mockup.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
