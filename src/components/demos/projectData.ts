/**
 * Shared project data: same client, IDs, and financials across all project mockups.
 *
 * HIERARCHY (do not invert):
 * - Top level = Project / Sales Order (one deal, one engagement). One project has one sales order.
 * - Under the project = multiple vendor work orders (vendor assignments). Each assignment is one work order.
 * - Work orders never appear as the top-level context of a screen; they are rows under a project.
 */

export const CLIENT_NAME = "Meridian Group";

/** Sales order = the deal/project at top level. One project is tied to one sales order. */
export const SALES_ORDER_ID = "SO-0842";

/** Ref for a single vendor assignment (e.g. in vendor portal). Use only when showing one assignment, not as page/screen title. */
export const ASSIGNMENT_REF = "0842";

/** Client revenue = quoted amount from sales order */
export const CLIENT_REVENUE = 12_400;
export const CLIENT_REVENUE_FORMATTED = "$12,400";

export const ESTIMATED_COST = 6_200;
export const ESTIMATED_COST_FORMATTED = "$6,200";

export const ACTUAL_COST = 5_800;
export const ACTUAL_COST_FORMATTED = "$5,800";

/** Margin = Client Revenue - Actual Cost */
export const MARGIN = CLIENT_REVENUE - ACTUAL_COST; // 6,600
export const MARGIN_FORMATTED = "$6,600";

export const MARGIN_PCT = ((MARGIN / CLIENT_REVENUE) * 100).toFixed(1);
export const MARGIN_PCT_FORMATTED = `${MARGIN_PCT}%`;

/** Cost variance = Actual - Estimated */
export const COST_VARIANCE = ACTUAL_COST - ESTIMATED_COST; // -400
export const COST_VARIANCE_FORMATTED = COST_VARIANCE >= 0 ? `+$${COST_VARIANCE.toLocaleString()}` : `-$${Math.abs(COST_VARIANCE).toLocaleString()}`;

/** Vendor breakdown (est / actual); must sum to ESTIMATED_COST and ACTUAL_COST */
export const VENDOR_BREAKDOWN = [
  { vendor: "Vendor A", service: "Service Type A", est: 3_000, actual: 2_800 },
  { vendor: "Vendor B", service: "Service Type B", est: 2_000, actual: 2_100 },
  { vendor: "Vendor C", service: "Service Type C", est: 1_200, actual: 900 },
] as const;

/** Attribution splits for compensation: primary, secondary, referral (declining referral by year) */
export const ATTRIBUTION_SPLITS = [
  { role: "Primary Rep", name: "Sarah M.", splitPct: 60, revenue: 7_440 },
  { role: "Secondary Rep", name: "James K.", splitPct: 25, revenue: 3_100 },
  { role: "Referral Partner", name: "Outside Vendor Co.", splitPct: 15, revenue: 1_860 },
] as const;
