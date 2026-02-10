"use client";

import { Row, Tag } from "@once-ui-system/core";

interface TechStackProps {
  technologies: Array<{ name: string; icon: string | null }>;
  size?: "s" | "m" | "l";
}

export function TechStack({ technologies, size = "m" }: TechStackProps) {
  if (!technologies || technologies.length === 0) return null;

  return (
    <Row wrap gap="8" paddingTop="8">
      {technologies.map((tech, index) => (
        <Tag
          key={`${tech.name}-${index}`}
          size={size}
          prefixIcon={tech.icon || undefined}
        >
          {tech.name}
        </Tag>
      ))}
    </Row>
  );
}
