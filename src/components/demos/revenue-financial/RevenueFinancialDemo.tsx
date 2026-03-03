"use client";

import Image from "next/image";
import styles from "./revenue-financial-demo.module.scss";

const MOCKUPS = [
  {
    src: "/images/projects/project-03/cover-01.svg",
    title: "Real-Time Margin Dashboard",
    description: "Live margin computation with cost variance tracking across vendors",
  },
  {
    src: "/images/projects/project-03/cover-02.svg",
    title: "Pricing Enforcement Engine",
    description: "Price bands with approval workflows for discounts below minimum",
  },
  {
    src: "/images/projects/project-03/cover-03.svg",
    title: "7-Tier Compensation Engine",
    description: "Performance-based compensation scaled by margin tier achievement",
  },
  {
    src: "/images/projects/project-03/cover-04.svg",
    title: "Budget-to-Actual Analysis",
    description: "Unified view from pipeline budget through quote to delivery costs",
  },
];

export function RevenueFinancialDemo() {
  return (
    <div className={styles.demo}>
      <header className={styles.demoHeader}>
        <h1>Financial Control & Governance Engine</h1>
        <p>Margin protection, pricing enforcement, and compensation automation</p>
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
