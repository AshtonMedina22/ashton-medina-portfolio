"use client";

import { Row, Column } from "@once-ui-system/core";
import { iconLibrary } from "@/resources/icons";
import { techStackLanguages, techStackPlatforms } from "@/resources";
import styles from "./TechStackMarquee.module.scss";

export function TechStackMarquee() {
  const techIconColors: Record<string, string> = {
    javascript: "#F7DF1E",
    typescript: "#3178C6",
    python: "#3776AB",
    html: "#E34F26",
    css: "#1572B6",
    scss: "#CC6699",
    sql: "#4479A1",
    json: "#E2E8F0",
    react: "#61DAFB",
    nextjs: "#E5E7EB",
    nodejs: "#339933",
    postgresql: "#4169E1",
    supabase: "#3ECF8E",
    redis: "#DC382D",
    restapi: "#85EA2D",
    api: "#85EA2D",
    swagger: "#85EA2D",
    middleware: "#B0B7C3",
    express: "#B0B7C3",
    docker: "#2496ED",
    nginx: "#009639",
    git: "#F05032",
  };

  // Duplicate arrays for seamless infinite scroll
  const duplicatedLanguages = [...techStackLanguages, ...techStackLanguages];
  const duplicatedPlatforms = [...techStackPlatforms, ...techStackPlatforms];

  const IconComponent = ({ tech, index, className }: { tech: { name: string; icon: string | null }, index: number, className: string }) => {
    const Icon = tech.icon && iconLibrary[tech.icon] ? iconLibrary[tech.icon] : null;
    const iconColor = tech.icon ? techIconColors[tech.icon] : undefined;

    return (
      <div
        key={`${tech.name}-${index}`}
        className={className}
      >
        {Icon && <Icon className={styles.techIcon} style={iconColor ? { color: iconColor } : undefined} />}
        <span className={styles.techLabel}>{tech.name}</span>
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
