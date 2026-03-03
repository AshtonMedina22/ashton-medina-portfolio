import { Column, Row, Tag, Text } from "@once-ui-system/core";

interface SkillsSectionProps {
  title?: string;
  technologies: Array<{ name: string; icon: string | null }>;
  tagSize?: "s" | "m" | "l";
  /** Use h2 + className for same weight as "Approach" / "Focus Areas" */
  titleLevel?: "label" | "section";
  titleClassName?: string;
  align?: "left" | "center";
}

export function SkillsSection({
  title = "Skills & Technologies",
  technologies,
  tagSize = "m",
  titleLevel = "label",
  titleClassName,
  align = "center",
}: SkillsSectionProps) {
  if (!technologies || technologies.length === 0) return null;

  const isSection = titleLevel === "section";
  const isLeft = align === "left";

  return (
    <Column fillWidth gap="m" style={{ alignItems: isLeft ? "flex-start" : "center" }}>
      {isSection && titleClassName ? (
        <h2 className={titleClassName}>{title}</h2>
      ) : (
        <Text variant="label-strong-m" align={align} onBackground="neutral-weak">
          {title}
        </Text>
      )}
      <Row wrap gap="s" horizontal={isLeft ? "start" : "center"} fillWidth>
        {technologies.map((tech, index) => (
          <Tag key={`${tech.name}-${index}`} size={tagSize}>
            {tech.name}
          </Tag>
        ))}
      </Row>
    </Column>
  );
}
