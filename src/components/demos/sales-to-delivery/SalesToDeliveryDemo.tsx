"use client";

import Image from "next/image";
import styles from "./sales-to-delivery-demo.module.scss";

const MOCKUPS = [
  {
    src: "/images/projects/project-01/cover-01.svg",
    title: "Sales Order Entry & Automation Preview",
    description: "Order confirmation form showing what happens automatically on submission",
  },
  {
    src: "/images/projects/project-01/cover-02.svg",
    title: "Project Auto-Generation",
    description: "Dashboard showing auto-generated project with 27 tasks across 5 modules",
  },
  {
    src: "/images/projects/project-01/cover-03.svg",
    title: "Data Synchronization Engine",
    description: "Real-time bidirectional sync of 65+ fields across CRM, Projects, and Contacts",
  },
  {
    src: "/images/projects/project-01/cover-04.svg",
    title: "Pipeline Analytics & Timeline",
    description: "Automated handoff tracking from quote to delivery completion",
  },
];

export function SalesToDeliveryDemo() {
  return (
    <div className={styles.demo}>
      <header className={styles.demoHeader}>
        <h1>Sales-to-Delivery Automation Platform</h1>
        <p>Automated order-to-project conversion with zero manual handoffs</p>
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
