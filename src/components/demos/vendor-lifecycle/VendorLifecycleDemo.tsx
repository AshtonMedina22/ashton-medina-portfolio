"use client";

import Image from "next/image";
import styles from "./vendor-lifecycle-demo.module.scss";

const MOCKUPS = [
  {
    src: "/images/projects/project-02/cover-01.svg",
    title: "Vendor Application Portal",
    description: "Public intake form for vendor onboarding with document upload",
  },
  {
    src: "/images/projects/project-02/cover-02.svg",
    title: "Vendor Dashboard",
    description: "Self-service portal showing pending assignments and compliance status",
  },
  {
    src: "/images/projects/project-02/cover-03.svg",
    title: "Work Order Lifecycle & RFQ Engine",
    description: "6-state workflow from pending to completed with quote management",
  },
  {
    src: "/images/projects/project-02/cover-04.svg",
    title: "Compliance Tracking",
    description: "Document expiry monitoring and performance ratings per vendor",
  },
];

export function VendorLifecycleDemo() {
  return (
    <div className={styles.demo}>
      <header className={styles.demoHeader}>
        <h1>Vendor Management & Portal Platform</h1>
        <p>Controlled onboarding, tokenized access, and full lifecycle visibility</p>
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
