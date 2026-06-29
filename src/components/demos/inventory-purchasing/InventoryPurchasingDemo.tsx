"use client";

import {
  HiOutlineChartBar,
  HiOutlineCheckCircle,
  HiOutlineClipboardList,
  HiOutlineClock,
  HiOutlineCube,
  HiOutlineDatabase,
  HiOutlineExclamationCircle,
  HiOutlineOfficeBuilding,
  HiOutlineRefresh,
  HiOutlineSearch,
  HiOutlineShoppingCart,
  HiOutlineTruck,
} from "react-icons/hi";
import styles from "./inventory-purchasing-demo.module.scss";

const lines = [
  ["Controller kit", "12", "8", "Buy 4", "Manager review"],
  ["Mounting rail", "36", "42", "Reserve", "Ready"],
  ["Cable set", "18", "0", "Quote", "Lead-time risk"],
  ["Gateway module", "6", "3", "Buy 3", "Budget check"],
] as const;

const vendors = [
  ["Vendor A", "$4,280", "5 days", "Best value"],
  ["Vendor B", "$4,110", "12 days", "Slow"],
  ["Vendor C", "$4,460", "2 days", "Fastest"],
] as const;

const statusFilters = [
  [HiOutlineDatabase, "BOM normalized"],
  [HiOutlineCube, "3 stock locations"],
  [HiOutlineTruck, "6 vendors compared"],
  [HiOutlineCheckCircle, "Plan ready for approval"],
] as const;

const kpis = [
  [HiOutlineClipboardList, "Material lines", "40+"],
  [HiOutlineCube, "Stock matched", "68%"],
  [HiOutlineShoppingCart, "Purchase gap", "$4.3K"],
  [HiOutlineClock, "Best lead time", "5d"],
] as const;

const decisions = [
  [HiOutlineCheckCircle, "Reserve available stock"],
  [HiOutlineShoppingCart, "Purchase shortage from Vendor A"],
  [HiOutlineExclamationCircle, "Flag cable set as lead-time risk"],
  [HiOutlineChartBar, "Confirm budget before approval"],
  [HiOutlineRefresh, "Log every buy, reserve, or substitute decision"],
] as const;

export function InventoryPurchasingDemo() {
  return (
    <div className={styles.shell}>
      <aside className={styles.sidebar}>
        <div className={styles.brand}><HiOutlineOfficeBuilding /> Supply Desk</div>
        {["Plan", "Stock", "Purchasing", "Vendors", "Approvals"].map((item, index) => (
          <span className={index === 0 ? styles.active : undefined} key={item}>{item}</span>
        ))}
      </aside>

      <main className={styles.workspace}>
        <header className={styles.header}>
          <div>
            <p>Inventory and purchasing allocation</p>
            <h2>Match project requirements against stock, vendors, and purchasing rules</h2>
          </div>
          <span><HiOutlineCheckCircle /> Allocation ready</span>
        </header>

        <section className={styles.statusStrip}>
          {statusFilters.map(([Icon, label]) => (
            <span key={label}><Icon />{label}<i aria-hidden /></span>
          ))}
        </section>

        <section className={styles.kpis}>
          {kpis.map(([Icon, label, value]) => (
            <article key={label}><Icon /><span>{label}</span><strong>{value}</strong></article>
          ))}
        </section>

        <section className={styles.grid}>
          <article className={styles.allocationPanel}>
            <div className={styles.panelTitle}><HiOutlineDatabase /> Allocation plan</div>
            <table>
              <thead>
                <tr>
                  <th>Item</th>
                  <th>Req</th>
                  <th>Stock</th>
                  <th>Decision</th>
                  <th>Review</th>
                </tr>
              </thead>
              <tbody>
                {lines.map(([item, required, stock, action, review]) => (
                  <tr key={item}>
                    <td>{item}</td>
                    <td>{required}</td>
                    <td>{stock}</td>
                    <td><span>{action}</span></td>
                    <td>{review}</td>
                  </tr>
                ))}
              </tbody>
            </table>
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
            <div className={styles.panelTitle}><HiOutlineSearch /> Review queue</div>
            {decisions.map(([Icon, item]) => (
              <span key={item}><Icon /> {item}</span>
            ))}
          </aside>
        </section>
      </main>
    </div>
  );
}
