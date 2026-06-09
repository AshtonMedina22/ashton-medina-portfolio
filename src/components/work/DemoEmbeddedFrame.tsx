"use client";

import type { ReactNode } from "react";
import "./demo-embedded-overrides.scss";
import styles from "./DemoEmbeddedFrame.module.scss";

export function DemoEmbeddedFrame({ children }: { children: ReactNode }) {
  return (
    <div className={styles.viewport} data-demo-embedded>
      <div className={styles.scaler}>{children}</div>
    </div>
  );
}
