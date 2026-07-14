"use client";

import {
  HiOutlineBriefcase,
  HiOutlineCheckCircle,
  HiOutlineClipboardList,
  HiOutlineClock,
  HiOutlineDocumentText,
  HiOutlineFolder,
  HiOutlineGlobeAlt,
  HiOutlineLockClosed,
  HiOutlineLocationMarker,
  HiOutlinePaperAirplane,
  HiOutlinePencilAlt,
  HiOutlineQuestionMarkCircle,
  HiOutlineUser,
  HiOutlineXCircle,
} from "react-icons/hi";
import { ASSIGNMENT_REF, CLIENT_NAME } from "../projectData";
import styles from "./vendor-lifecycle-demo.module.scss";

const statusCards = [
  { icon: HiOutlineBriefcase, label: "Elite Sound Productions", tone: "neutral" },
  { icon: HiOutlineCheckCircle, label: "Active", tone: "blue" },
  { icon: HiOutlineCheckCircle, label: "AI-ready data", tone: "green" },
  { icon: HiOutlineGlobeAlt, label: "Governed portal", tone: "green" },
] as const;

const vendorOverview = [
  {
    icon: HiOutlineUser,
    label: "Primary contact",
    value: "Maria Chen",
    detail: "maria@elitesound.com",
  },
  {
    icon: HiOutlineLocationMarker,
    label: "Service coverage",
    value: "75 mi radius",
    detail: "Los Angeles, CA",
  },
  {
    icon: HiOutlineQuestionMarkCircle,
    label: "Open RFQs",
    value: "3 awaiting response",
    detail: "View all RFQs",
  },
] as const;

const complianceRows = [
  {
    icon: HiOutlineDocumentText,
    item: "General liability insurance",
    detail: "Expires Aug 15, 2026",
    state: "Valid",
  },
  {
    icon: HiOutlineDocumentText,
    item: "W-9 tax form",
    detail: "On file",
    state: "Valid",
  },
  {
    icon: HiOutlineDocumentText,
    item: "Business license",
    detail: "Renewal needed before next assignment",
    state: "Review",
  },
] as const;

const assignmentMeta = [
  { icon: HiOutlineClipboardList, label: "May 28, 2026" },
  { icon: HiOutlineClock, label: "2:00 PM arrival" },
  { icon: HiOutlineClipboardList, label: "Implementation + training support" },
] as const;

const complianceSummary = [
  { icon: HiOutlineDocumentText, value: "8", label: "Total documents" },
  { icon: HiOutlineCheckCircle, value: "7", label: "Valid" },
  { icon: HiOutlineClock, value: "1", label: "Needs review" },
] as const;

const assignmentTimeline = [
  { icon: HiOutlinePaperAirplane, label: "Assignment sent", detail: "May 26, 2026", state: "done" },
  { icon: HiOutlineFolder, label: "Documents shared", detail: "7 documents", state: "done" },
  { icon: HiOutlinePencilAlt, label: "Vendor acceptance", detail: "Pending", state: "active" },
  { icon: HiOutlineLockClosed, label: "Governed assignment", detail: "On acceptance", state: "locked" },
] as const;

export function VendorLifecycleDemo() {
  return (
    <div className={styles.vendorShell}>
      <div className={styles.vendorStatusStrip} aria-label="Vendor lifecycle status">
        {statusCards.map(({ icon: Icon, label, tone }) => (
          <span className={styles[`statusTone${tone[0].toUpperCase()}${tone.slice(1)}`]} key={label}>
            <Icon />
            {label}
          </span>
        ))}
      </div>

      <div className={styles.vendorComposition}>
        <section className={styles.vendorHero}>
          <div className={styles.internalPane}>
            <div className={styles.paneHeader}>
              <div>
                <p>Internal vendor record (AI-governed)</p>
                <h2>Elite Sound Productions</h2>
              </div>
              <span>Premier vendor</span>
            </div>

            <div className={styles.vendorStateRow}>
              <span><HiOutlineCheckCircle />Active vendor</span>
              <span><HiOutlineFolder />AI-ready compliance</span>
              <span><HiOutlineGlobeAlt />Portal enabled</span>
            </div>

            <div className={styles.vendorControlGrid}>
              <div className={styles.vendorOverviewGrid}>
                <div className={styles.moduleEyebrow}>Vendor overview</div>
                {vendorOverview.map(({ icon: Icon, label, value, detail }) => (
                  <article className={styles.vendorInfoCard} key={label}>
                    <Icon />
                    <div>
                      <span>{label}</span>
                      <strong>{value}</strong>
                      <small>{detail}</small>
                    </div>
                  </article>
                ))}
              </div>

              <div className={styles.documentComplianceCard}>
                <div className={styles.moduleEyebrow}>AI-ready document compliance</div>
                {complianceRows.map(({ icon: Icon, item, detail, state }) => (
                  <article className={styles.documentRow} key={item}>
                    <Icon />
                    <div>
                      <strong>{item}</strong>
                      <small>{detail}</small>
                    </div>
                    <span className={state === "Review" ? styles.stateReview : styles.stateValid}>{state}</span>
                  </article>
                ))}
              </div>
            </div>
          </div>

          <div className={styles.portalPane}>
            <div className={styles.paneHeader}>
              <div>
                <p>Vendor portal preview (governed access)</p>
                <h2>Assignment #{ASSIGNMENT_REF}</h2>
              </div>
              <span><HiOutlineLockClosed />Secure token</span>
            </div>

            <div className={styles.portalAssignmentCard}>
              <div className={styles.moduleEyebrow}>AI-orchestrated workflow</div>
              <h3>{CLIENT_NAME} delivery scope</h3>
              <div className={styles.assignmentDetailRows}>
                {assignmentMeta.map(({ icon: Icon, label }) => (
                  <span key={label}><Icon />{label}</span>
                ))}
              </div>
              <div className={styles.portalButtons}>
                <strong><HiOutlineCheckCircle />Accept & sign</strong>
                <span><HiOutlineXCircle />Decline with reason</span>
              </div>
            </div>

            <div className={styles.portalVisibilityNote}>
              Portal exposes assigned scope, required documents, quote requests, signature, and messaging.
              Customer pricing and margin stay internal under strict AI governance controls.
            </div>
          </div>
        </section>

        <section className={styles.vendorSupportRow}>
          <div className={styles.supportCard}>
            <div className={styles.moduleEyebrow}>AI compliance summary</div>
            <div className={styles.supportMetricGrid}>
              {complianceSummary.map(({ icon: Icon, value, label }) => (
                <div key={label}>
                  <Icon />
                  <strong>{value}</strong>
                  <span>{label}</span>
                </div>
              ))}
            </div>
          </div>

          <div className={styles.supportCard}>
            <div className={styles.moduleEyebrow}>MLOps workflow traceability</div>
            <div className={styles.assignmentTimeline}>
              {assignmentTimeline.map(({ icon: Icon, label, detail, state }, index) => (
                <article className={styles[`timelineState${state[0].toUpperCase()}${state.slice(1)}`]} key={label}>
                  <Icon />
                  <strong>{label}</strong>
                  <span>{detail}</span>
                  <i>{index + 1}</i>
                </article>
              ))}
            </div>
            <p className={styles.assignmentSummaryText}>
              Vendor can accept, decline, upload documents, sign, and message inside auditable governance controls without staff handoff.
            </p>
          </div>
        </section>
      </div>
    </div>
  );
}
