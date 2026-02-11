"use client";

import { Row, Tag } from "@once-ui-system/core";
import { iconLibrary } from "@/resources/icons";
import styles from "./TechStackMarquee.module.scss";

interface TechStackMarqueeProps {
  technologies: Array<{ name: string; icon: string | null }>;
}

export function TechStackMarquee({ technologies }: TechStackMarqueeProps) {
  // Include all technologies, not just those with icons
  const allTech = technologies;

  // Duplicate the array for seamless infinite scroll
  const duplicatedTech = [...allTech, ...allTech];

  return (
    <Row
      fillWidth
      overflow="hidden"
      paddingY="xl"
      className={styles.marqueeContainer}
    >
      <Row
        gap="l"
        className={styles.marquee}
      >
        {duplicatedTech.map((tech, index) => (
          <Tag
            key={`${tech.name}-${index}`}
            size="l"
            prefixIcon={tech.icon && iconLibrary[tech.icon] ? tech.icon : undefined}
            background="brand-alpha-weak"
            onBackground="neutral-strong"
            paddingX="24"
            paddingY="16"
            style={{
              flexShrink: 0,
              fontSize: "1.5rem",
              minHeight: "3.5rem",
              display: "flex",
              alignItems: "center",
              gap: "0.75rem",
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
