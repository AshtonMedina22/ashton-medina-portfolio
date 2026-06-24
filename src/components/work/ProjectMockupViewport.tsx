"use client";

import React, { useEffect, useRef, useState } from "react";
import styles from "./ProjectMockupViewport.module.scss";

const MOCKUP_WIDTH = 1280;
const MOBILE_BREAKPOINT = 720;
const MOBILE_SCALE = 0.72;
const MOBILE_MAX_HEIGHT = 560;

export function ProjectMockupViewport({ children }: { children: React.ReactNode }) {
  const viewportRef = useRef<HTMLDivElement>(null);
  const mockupRef = useRef<HTMLDivElement>(null);
  const [frame, setFrame] = useState({ scale: 1, height: 0, mobile: false });

  useEffect(() => {
    const viewport = viewportRef.current;
    const mockup = mockupRef.current;

    if (!viewport || !mockup) {
      return;
    }

    const updateFrame = () => {
      const width = viewport.clientWidth;
      const mobile = width <= MOBILE_BREAKPOINT;
      const scale = mobile ? MOBILE_SCALE : Math.min(width / MOCKUP_WIDTH, 1);
      const scaledHeight = Math.ceil(mockup.offsetHeight * scale);

      setFrame({
        scale,
        mobile,
        height: mobile ? Math.min(scaledHeight, MOBILE_MAX_HEIGHT) : scaledHeight,
      });
    };

    updateFrame();

    const observer = new ResizeObserver(updateFrame);
    observer.observe(viewport);
    observer.observe(mockup);
    window.addEventListener("resize", updateFrame);

    return () => {
      observer.disconnect();
      window.removeEventListener("resize", updateFrame);
    };
  }, []);

  return (
    <div className={styles.shell} data-mobile={frame.mobile || undefined}>
      <div className={styles.mobileSummary} aria-hidden={!frame.mobile}>
        <span>Workflow</span>
        <span>Controls</span>
        <span>Outcome</span>
      </div>
      <div
        ref={viewportRef}
        className={styles.viewport}
        style={frame.height ? { minHeight: frame.height, maxHeight: frame.mobile ? frame.height : undefined } : undefined}
      >
        <div
          ref={mockupRef}
          className={styles.mockup}
          style={{ filter: "contrast(1.14) saturate(1.12)", transform: `scale(${frame.scale})` }}
        >
          {children}
        </div>
      </div>
      <p className={styles.mobileHint}>Swipe horizontally to inspect the full system view.</p>
    </div>
  );
}
