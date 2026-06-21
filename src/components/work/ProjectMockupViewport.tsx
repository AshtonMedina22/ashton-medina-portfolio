"use client";

import React, { useEffect, useRef, useState } from "react";
import styles from "./ProjectMockupViewport.module.scss";

const MOCKUP_WIDTH = 1280;

export function ProjectMockupViewport({ children }: { children: React.ReactNode }) {
  const viewportRef = useRef<HTMLDivElement>(null);
  const mockupRef = useRef<HTMLDivElement>(null);
  const [frame, setFrame] = useState({ scale: 1, height: 0 });

  useEffect(() => {
    const viewport = viewportRef.current;
    const mockup = mockupRef.current;

    if (!viewport || !mockup) {
      return;
    }

    const updateFrame = () => {
      const width = viewport.clientWidth;
      const scale = Math.min(width / MOCKUP_WIDTH, 1);
      setFrame({
        scale,
        height: Math.ceil(mockup.offsetHeight * scale),
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
    <div
      ref={viewportRef}
      className={styles.viewport}
      style={frame.height ? { minHeight: frame.height } : undefined}
    >
      <div
        ref={mockupRef}
        className={styles.mockup}
        style={{ transform: `scale(${frame.scale})` }}
      >
        {children}
      </div>
    </div>
  );
}
