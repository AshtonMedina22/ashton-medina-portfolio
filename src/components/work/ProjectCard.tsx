"use client";

import {
  AvatarGroup,
  Column,
  Heading,
  SmartLink,
  Text,
} from "@once-ui-system/core";
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
  images = [],
  title,
  content,
  description,
  avatars,
  link,
  techStack,
}) => {
  return (
    <SmartLink href={href} className={styles.cardContainer}>
      <Column fillWidth className={styles.imageContainer}>
        <ProjectDemoPreview href={href} />
      </Column>
      <Column
        fillWidth
        paddingX="m"
        paddingTop="m"
        paddingBottom="m"
        gap="l"
        className={styles.cardContent}
      >
        {title && (
          <Heading as="h2" wrap="balance" variant="heading-strong-xl">
            {title}
          </Heading>
        )}
        <Column gap="m" fillWidth className={styles.cardBody}>
          {avatars?.length > 0 && <AvatarGroup avatars={avatars} size="m" reverse />}
          {description?.trim() && (
            <Text wrap="balance" variant="body-default-m" onBackground="neutral-weak">
              {description}
            </Text>
          )}
          {techStack && techStack.length > 0 && (
            <ProjectCardTechStack technologies={techStack} />
          )}
          <Text variant="body-default-m" className={styles.ctaLink}>
            View Project
          </Text>
        </Column>
      </Column>
    </SmartLink>
  );
};
