"use client";

import { Row, Column } from "@once-ui-system/core";
import { iconLibrary } from "@/resources/icons";
import { techStackLanguages, techStackPlatforms } from "@/resources";
import styles from "./TechStackMarquee.module.scss";

export function TechStackMarquee() {
  // Duplicate arrays for seamless infinite scroll
  const duplicatedLanguages = [...techStackLanguages, ...techStackLanguages];
  const duplicatedPlatforms = [...techStackPlatforms, ...techStackPlatforms];

  const IconComponent = ({ tech, index, className }: { tech: { name: string; icon: string | null }, index: number, className: string }) => {
    const Icon = tech.icon && iconLibrary[tech.icon] ? iconLibrary[tech.icon] : null;
    
    return (
      <div
        key={`${tech.name}-${index}`}
        className={className}
        style={{
          flexShrink: 0,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          gap: "0.75rem",
        }}
      >
        {Icon && <Icon style={{ width: "2.5rem", height: "2.5rem" }} />}
        <span style={{ fontSize: "1.25rem", fontWeight: 500 }}>{tech.name}</span>
      </div>
    );
  };

  return (
    <Column fillWidth gap="m">
      {/* Languages Row - Scroll Left */}
      <Row
        fillWidth
        overflow="hidden"
        className={styles.marqueeContainer}
      >
        <Row
          gap="xl"
          className={`${styles.marquee} ${styles.marqueeLeft}`}
        >
          {duplicatedLanguages.map((tech, index) => (
            <IconComponent key={`lang-${tech.name}-${index}`} tech={tech} index={index} className={styles.techItem} />
          ))}
        </Row>
      </Row>
      
      {/* Platforms Row - Scroll Right */}
      <Row
        fillWidth
        overflow="hidden"
        className={styles.marqueeContainer}
      >
        <Row
          gap="xl"
          className={`${styles.marquee} ${styles.marqueeRight}`}
        >
          {duplicatedPlatforms.map((tech, index) => (
            <IconComponent key={`platform-${tech.name}-${index}`} tech={tech} index={index} className={styles.techItem} />
          ))}
        </Row>
      </Row>
    </Column>
  );
}
