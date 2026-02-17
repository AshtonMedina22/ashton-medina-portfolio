"use client";

import {
  AvatarGroup,
  Carousel,
  Column,
  Flex,
  Heading,
  SmartLink,
  Text,
} from "@once-ui-system/core";
import { TechStack } from "./work/TechStack";
import styles from "./ProjectCard.module.scss";

interface ProjectCardProps {
  href: string;
  priority?: boolean;
  demoHref?: string;
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
  demoHref,
  images = [],
  title,
  content,
  description,
  avatars,
  link,
  techStack,
}) => {
  return (
    <Column fillWidth gap="m" className={styles.cardContainer}>
      <SmartLink
        href={demoHref ?? href}
        {...(demoHref ? { target: "_blank", rel: "noopener noreferrer" } : {})}
        className={styles.imageLink}
      >
        <Column fillWidth className={styles.imageContainer}>
          <Carousel
            sizes="(max-width: 960px) 100vw, 640px"
            items={images.map((image) => ({
              slide: image,
              alt: title,
            }))}
          />
        </Column>
      </SmartLink>
      <Column
        fillWidth
        paddingX="s"
        paddingTop="m"
        paddingBottom="m"
        gap="m"
        className={styles.cardContent}
      >
        {title && (
          <Heading as="h2" wrap="balance" variant="heading-strong-xl">
            {title}
          </Heading>
        )}
        <Column gap="m">
          {avatars?.length > 0 && <AvatarGroup avatars={avatars} size="m" reverse />}
          {description?.trim() && (
            <Text wrap="balance" variant="body-default-s" onBackground="neutral-weak">
              {description}
            </Text>
          )}
          {techStack && techStack.length > 0 && (
            <TechStack technologies={techStack} size="s" />
          )}
          <Flex gap="m" wrap className={styles.ctaContainer}>
            <SmartLink className={styles.ctaLink} href={href}>
              <Text variant="body-default-s">View Project</Text>
            </SmartLink>
          </Flex>
        </Column>
      </Column>
    </Column>
  );
};
