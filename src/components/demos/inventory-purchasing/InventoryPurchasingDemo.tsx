"use client";

import {
  HiOutlineCheckCircle,
  HiOutlineClipboardList,
  HiOutlineCube,
  HiOutlineDatabase,
  HiOutlineShoppingCart,
  HiOutlineTruck,
} from "react-icons/hi";
import styles from "./inventory-purchasing-demo.module.scss";

const lines = [
  ["Controller kit", "12 req", "8 stock", "Buy 4"],
  ["Mounting rail", "36 req", "42 stock", "Reserve"],
  ["Cable set", "18 req", "0 stock", "Vendor quote"],
  ["Gateway module", "6 req", "3 stock", "Buy 3"],
] as const;

const vendors = [
  ["Vendor A", "$4,280", "5 days", "Best value"],
  ["Vendor B", "$4,110", "12 days", "Slow"],
  ["Vendor C", "$4,460", "2 days", "Fastest"],
] as const;

export function InventoryPurchasingDemo() {
  return (
    <div className={styles.shell}>
      <header className={styles.header}>
        <div>
          <p>Inventory and purchasing allocation</p>
          <h2>Match project requirements against stock, vendors, and purchasing rules</h2>
        </div>
        <span><HiOutlineCheckCircle /> Allocation ready</span>
      </header>

      <section className={styles.kpis}>
        <article><HiOutlineClipboardList /><span>BOM rows</span><strong>42</strong></article>
        <article><HiOutlineCube /><span>Stock matched</span><strong>68%</strong></article>
        <article><HiOutlineShoppingCart /><span>Purchase gap</span><strong>$4.3K</strong></article>
        <article><HiOutlineTruck /><span>Lead time</span><strong>5d</strong></article>
      </section>

      <section className={styles.grid}>
        <article className={styles.panel}>
          <div className={styles.panelTitle}><HiOutlineDatabase /> Allocation plan</div>
          <div className={styles.table}>
            {lines.map(([item, required, stock, action]) => (
              <div key={item}>
                <strong>{item}</strong>
                <span>{required}</span>
                <span>{stock}</span>
                <em>{action}</em>
              </div>
            ))}
          </div>
        </article>

        <article className={styles.panel}>
          <div className={styles.panelTitle}><HiOutlineTruck /> Vendor comparison</div>
          <div className={styles.table}>
            {vendors.map(([vendor, price, lead, note]) => (
              <div key={vendor}>
                <strong>{vendor}</strong>
                <span>{price}</span>
                <span>{lead}</span>
                <em>{note}</em>
              </div>
            ))}
          </div>
        </article>

        <aside className={styles.decisionPanel}>
          <div className={styles.panelTitle}>Recommended decisions</div>
          {["Reserve available stock", "Purchase shortage from Vendor A", "Flag cable set as lead-time risk", "Require manager approval above budget"].map((item) => (
            <span key={item}><HiOutlineCheckCircle /> {item}</span>
          ))}
        </aside>
      </section>
    </div>
  );
}

