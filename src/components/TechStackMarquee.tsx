"use client";

import { Row, Tag } from "@once-ui-system/core";
import { iconLibrary } from "@/resources/icons";
import styles from "./TechStackMarquee.module.scss";

interface TechStackMarqueeProps {
  technologies: Array<{ name: string; icon: string | null }>;
}

export function TechStackMarquee({ technologies }: TechStackMarqueeProps) {
  // Filter out technologies without icons for the marquee
  const techWithIcons = technologies.filter((tech) => tech.icon && iconLibrary[tech.icon]);

  // Duplicate the array for seamless infinite scroll
  const duplicatedTech = [...techWithIcons, ...techWithIcons];

  return (
    <Row
      fillWidth
      overflow="hidden"
      paddingY="m"
      className={styles.marqueeContainer}
    >
      <Row
        gap="m"
        className={styles.marquee}
      >
        {duplicatedTech.map((tech, index) => (
          <Tag
            key={`${tech.name}-${index}`}
            size="l"
            prefixIcon={tech.icon || undefined}
            background="brand-alpha-weak"
            onBackground="neutral-strong"
            paddingX="20"
            paddingY="12"
            style={{
              flexShrink: 0,
              fontSize: "1.125rem",
              padding: "var(--static-space-12) var(--static-space-20)",
            }}
            className={styles.techTag}
          >
            {tech.name}
          </Tag>
        ))}
      </Row>
    </Row>
  );
}
