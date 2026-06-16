"use client";

import {
  HiOutlineBell,
  HiOutlineCheckCircle,
  HiOutlineCreditCard,
  HiOutlineGlobeAlt,
  HiOutlineKey,
  HiOutlineLockClosed,
  HiOutlineOfficeBuilding,
  HiOutlineShieldCheck,
  HiOutlineUserGroup,
} from "react-icons/hi";
import styles from "./business-access-demo.module.scss";

const spendRows = [
  ["CRM", "$480", "Sales", "Active"],
  ["Document signing", "$120", "Operations", "Review"],
  ["Automation platform", "$310", "Systems", "Active"],
  ["Cloud hosting", "$96", "Engineering", "Active"],
] as const;

const accessRows = [
  ["Admin", "4 users", "High", "Quarterly review"],
  ["Finance", "3 users", "Medium", "Invoice access"],
  ["Contractor", "6 users", "Limited", "Expires soon"],
] as const;

export function BusinessAccessDemo() {
  return (
    <div className={styles.shell}>
      <aside className={styles.sidebar}>
        <div className={styles.brand}><HiOutlineOfficeBuilding /> Control Desk</div>
        {["Overview", "Users", "Software", "Domains", "Security"].map((item, index) => (
          <span className={index === 0 ? styles.active : undefined} key={item}>{item}</span>
        ))}
      </aside>

      <main className={styles.workspace}>
        <header className={styles.header}>
          <div>
            <p>Business access and software cost control</p>
            <h2>Know who has access, what costs money, and what needs review</h2>
          </div>
          <span><HiOutlineShieldCheck /> Access review due</span>
        </header>

        <section className={styles.kpis}>
          <article><HiOutlineUserGroup /><span>Users tracked</span><strong>28</strong></article>
          <article><HiOutlineCreditCard /><span>Monthly software spend</span><strong>$3.8K</strong></article>
          <article><HiOutlineGlobeAlt /><span>Domains monitored</span><strong>7</strong></article>
          <article><HiOutlineBell /><span>Risks flagged</span><strong>5</strong></article>
        </section>

        <section className={styles.grid}>
          <article className={styles.panel}>
            <div className={styles.panelTitle}><HiOutlineCreditCard /> Software ledger</div>
            <div className={styles.table}>
              {spendRows.map(([tool, cost, owner, status]) => (
                <div key={tool}>
                  <strong>{tool}</strong>
                  <span>{cost}/mo</span>
                  <span>{owner}</span>
                  <em>{status}</em>
                </div>
              ))}
            </div>
          </article>

          <article className={styles.panel}>
            <div className={styles.panelTitle}><HiOutlineKey /> Permission matrix</div>
            <div className={styles.table}>
              {accessRows.map(([role, users, risk, note]) => (
                <div key={role}>
                  <strong>{role}</strong>
                  <span>{users}</span>
                  <span>{risk}</span>
                  <em>{note}</em>
                </div>
              ))}
            </div>
          </article>

          <aside className={styles.audit}>
            <div className={styles.panelTitle}><HiOutlineLockClosed /> Review queue</div>
            {["Remove stale contractor login", "Confirm finance tool owner", "Renew domain certificate"].map((item) => (
              <span key={item}><HiOutlineCheckCircle /> {item}</span>
            ))}
          </aside>
        </section>
      </main>
    </div>
  );
}

