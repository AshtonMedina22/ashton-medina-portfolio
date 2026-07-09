"use client";

import {
  HiOutlineChartBar,
  HiOutlineCheckCircle,
  HiOutlineClipboardList,
  HiOutlineClock,
  HiOutlineCube,
  HiOutlineDatabase,
  HiOutlineExclamationCircle,
  HiOutlineRefresh,
  HiOutlineShoppingCart,
  HiOutlineSparkles,
  HiOutlineTruck,
} from "react-icons/hi";
import styles from "./inventory-purchasing-demo.module.scss";

const materialLines = [
  { item: "Controller kit", need: 12, stock: 8, gap: 4, state: "Buy 4", lane: "Manager review" },
  { item: "Mounting rail", need: 36, stock: 42, gap: 0, state: "Reserve", lane: "Ready" },
  { item: "Cable set", need: 18, stock: 0, gap: 18, state: "Quote", lane: "Lead-time risk" },
  { item: "Gateway module", need: 6, stock: 3, gap: 3, state: "Buy 3", lane: "Budget check" },
] as const;

const stockZones = [
  { name: "Main warehouse", available: "68%", detail: "Rails and kits available", tone: "good" },
  { name: "Field stock", available: "21%", detail: "Reserved for active jobs", tone: "watch" },
  { name: "Inbound POs", available: "11%", detail: "Cable sets not yet landed", tone: "risk" },
] as const;

const procurementCards = [
  { vendor: "Northline Supply", cost: "$4,280", lead: "5 days", decision: "Recommended" },
  { vendor: "Metro Components", cost: "$4,110", lead: "12 days", decision: "Price only" },
  { vendor: "Rush Industrial", cost: "$4,460", lead: "2 days", decision: "Expedite backup" },
] as const;

const kpis = [
  [HiOutlineClipboardList, "Required lines", "40+"],
  [HiOutlineCube, "Fill from stock", "68%"],
  [HiOutlineShoppingCart, "Purchase gap", "$4.3K"],
  [HiOutlineClock, "Fastest complete", "5d"],
] as const;

const approvalSteps = [
  [HiOutlineCheckCircle, "Reserve stock for available quantities"],
  [HiOutlineShoppingCart, "Create purchase request for shortages"],
  [HiOutlineExclamationCircle, "Escalate cable lead-time risk"],
  [HiOutlineChartBar, "Confirm budget variance before release"],
  [HiOutlineRefresh, "Write allocation decision to audit trail"],
] as const;

export function InventoryPurchasingDemo() {
  return (
    <div className={styles.shell}>
      <header className={styles.header}>
        <div className={styles.headerCopy}>
          <span className={styles.eyebrow}>
            <HiOutlineSparkles />
            Allocation workspace
          </span>
          <div>
            <p>Inventory and purchasing allocation</p>
            <h2>Match project requirements against stock, vendors, and purchasing rules</h2>
          </div>
        </div>
        <span className={styles.readyBadge}><HiOutlineCheckCircle /> Plan ready for review</span>
      </header>

      <section className={styles.metricStrip}>
        {kpis.map(([Icon, label, value]) => (
          <article key={label}>
            <Icon />
            <span>{label}</span>
            <strong>{value}</strong>
          </article>
        ))}
      </section>

      <main className={styles.board}>
        <section className={styles.requirementsPanel}>
          <div className={styles.panelTitle}>
            <HiOutlineDatabase />
            <span>Material demand board</span>
          </div>
          <div className={styles.materialList}>
            {materialLines.map((line) => (
              <article key={line.item}>
                <div>
                  <strong>{line.item}</strong>
                  <small>{line.lane}</small>
                </div>
                <div className={styles.quantityBar} aria-label={`${line.stock} of ${line.need} in stock`}>
                  <i style={{ width: `${Math.min(100, Math.round((line.stock / line.need) * 100))}%` }} />
                </div>
                <dl>
                  <div>
                    <dt>Need</dt>
                    <dd>{line.need}</dd>
                  </div>
                  <div>
                    <dt>Stock</dt>
                    <dd>{line.stock}</dd>
                  </div>
                  <div>
                    <dt>Gap</dt>
                    <dd>{line.gap}</dd>
                  </div>
                </dl>
                <em>{line.state}</em>
              </article>
            ))}
          </div>
        </section>

        <section className={styles.stockPanel}>
          <div className={styles.panelTitle}>
            <HiOutlineCube />
            <span>Availability map</span>
          </div>
          <div className={styles.stockMap}>
            {stockZones.map((zone) => (
              <article className={styles[zone.tone]} key={zone.name}>
                <span>{zone.name}</span>
                <strong>{zone.available}</strong>
                <small>{zone.detail}</small>
              </article>
            ))}
          </div>
          <div className={styles.allocationFlow}>
            <span>BOM</span>
            <i />
            <span>Stock check</span>
            <i />
            <span>Purchase gap</span>
            <i />
            <span>Approval</span>
          </div>
        </section>

        <section className={styles.procurementPanel}>
          <div className={styles.panelTitle}>
            <HiOutlineTruck />
            <span>Procurement options</span>
          </div>
          <div className={styles.procurementCards}>
            {procurementCards.map((card, index) => (
              <article className={index === 0 ? styles.recommended : undefined} key={card.vendor}>
                <div>
                  <strong>{card.vendor}</strong>
                  <small>{card.decision}</small>
                </div>
                <span>{card.cost}</span>
                <em>{card.lead}</em>
              </article>
            ))}
          </div>
        </section>

        <aside className={styles.approvalPanel}>
          <div className={styles.panelTitle}>
            <HiOutlineCheckCircle />
            <span>Approval lane</span>
          </div>
          {approvalSteps.map(([Icon, item]) => (
            <span key={item}><Icon /> {item}</span>
          ))}
        </aside>
      </main>
    </div>
  );
}
