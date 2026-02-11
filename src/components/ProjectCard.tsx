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
    <Column fillWidth gap="m">
      <SmartLink href={href} style={{ textDecoration: "none" }}>
        <Column
          fillWidth
          style={{
            aspectRatio: "16 / 9",
            overflow: "hidden",
            borderRadius: "var(--radius-l)",
            cursor: "pointer",
          }}
        >
          <Carousel
            sizes="(max-width: 960px) 100vw, 640px"
            items={images.map((image) => ({
              slide: image,
              alt: title,
            }))}
          />
        </Column>
      </SmartLink>
      <Column fillWidth gap="m">
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
        {techStack && techStack.length > 0 && (
          <TechStack technologies={techStack} size="s" />
        )}
        <Flex gap="m" wrap>
          {content?.trim() && (
            <SmartLink
              suffixIcon="arrowRight"
              style={{ margin: "0", width: "fit-content" }}
              href={href}
            >
              <Text variant="body-default-m">View Work</Text>
            </SmartLink>
          )}
          {link && (
            <SmartLink
              suffixIcon="arrowUpRightFromSquare"
              style={{ margin: "0", width: "fit-content" }}
              href={link}
            >
              <Text variant="body-default-m">View project</Text>
            </SmartLink>
          )}
        </Flex>
      </Column>
    </Column>
  );
};
