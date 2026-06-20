"use client";

import { Column, Heading, SmartLink, Text } from "@once-ui-system/core";
import { ProjectCardTechStack } from "./ProjectCardTechStack";
import { ProjectDemoPreview } from "./ProjectDemoPreview";
import styles from "./ProjectCard.module.scss";

interface ProjectCardProps {
  href: string;
  priority?: boolean;
  images: string[];
  title: string;
  content: string;
  description: string;
  avatars: { src: string }[];
  link: string;
  techStack?: Array<{ name: string; icon: string | null }>;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({
  href,
  title,
  description,
  techStack,
}) => {
  const visibleTech = techStack?.slice(0, 3);

  return (
    <SmartLink href={href} className={styles.cardContainer}>
      <Column fillWidth className={styles.imageContainer}>
        <ProjectDemoPreview href={href} />
      </Column>
      <Column fillWidth className={styles.cardContent}>
        {title && (
          <Heading as="h2" wrap="balance" variant="heading-strong-xl">
            {title}
          </Heading>
        )}
        {description?.trim() && (
          <Text wrap="balance" variant="body-default-m" onBackground="neutral-weak">
            {description}
          </Text>
        )}
        {visibleTech && visibleTech.length > 0 && (
          <ProjectCardTechStack technologies={visibleTech} />
        )}
      </Column>
    </SmartLink>
  );
};
