import type { ReactNode } from "react";
import {
  Button,
  Card,
  Column,
  Heading,
  Line,
  Media,
  Tag,
  Text,
  Meta,
  Schema,
  Row,
} from "@once-ui-system/core";
import { baseURL, about, person } from "@/resources";
import { ThemeAwareAvatar } from "@/components";
import styles from "@/components/about/about.module.scss";

export async function generateMetadata() {
  return Meta.generate({
    title: about.title,
    description: about.description,
    baseURL: baseURL,
    image: `/api/og/generate?title=${encodeURIComponent(about.title)}`,
    path: about.path,
  });
}

export default function About() {
  return (
    <Column 
      fillWidth 
      paddingY="104"
      paddingX="l" 
      gap="64"
      horizontal="center"
      s={{ paddingX: "m", paddingY: "64" }}
    >
      <Schema
        as="webPage"
        baseURL={baseURL}
        title={about.title}
        description={about.description}
        path={about.path}
        image={`/api/og/generate?title=${encodeURIComponent(about.title)}`}
        author={{
          name: person.name,
          url: `${baseURL}${about.path}`,
          image: `${baseURL}${person.avatar}`,
        }}
      />
      
      {/* Hero Section - Avatar on left, Info on right */}
      {about.avatar.display && (
        <Row
          fillWidth
          maxWidth="m"
          gap="48"
          vertical="center"
          s={{ direction: "column", gap: "32", horizontal: "center" }}
        >
          <ThemeAwareAvatar size="xl" style={{ width: "160px", height: "160px", flexShrink: 0 }} />
          <Column gap="16" style={{ flex: 1 }} s={{ horizontal: "center", align: "center" }}>
            <Heading variant="display-strong-xl">
              {person.name}
            </Heading>
            <Text variant="heading-default-l" onBackground="neutral-weak">
              {person.role}
            </Text>
            <Button
              href={`mailto:${person.email}`}
              prefixIcon="email"
              label={person.email}
              size="m"
              variant="secondary"
              style={{ marginTop: "8px" }}
            />
          </Column>
        </Row>
      )}

      <Line fillWidth maxWidth="m" />

      {/* Main Content Area */}
      <Column fillWidth maxWidth="m" gap="48">

          {about.intro.display && (
            <Card
              fillWidth
              padding="32"
              radius="l"
              border="neutral-alpha-weak"
              background="surface"
            >
              <Column fillWidth gap="24">
                <Heading as="h2" id={about.intro.title} variant="display-strong-s">
                  {about.intro.title}
                </Heading>
                <Text variant="body-default-l" onBackground="neutral-weak" style={{ lineHeight: "1.7" }}>
                  {about.intro.description}
                </Text>
              </Column>
            </Card>
          )}

          {about.work.display && (
            <Column fillWidth gap="l">
              <Heading as="h2" id={about.work.title} variant="display-strong-m">
                {about.work.title}
              </Heading>
              <Column fillWidth gap="l">
                {about.work.experiences.map((experience, index) => (
                  <Column key={`${experience.company}-${experience.role}-${index}`} fillWidth>
                    <Row fillWidth horizontal="between" vertical="end" marginBottom="4">
                      <Text id={experience.company} variant="heading-strong-l">
                        {experience.company}
                      </Text>
                      <Text variant="heading-default-xs" onBackground="neutral-weak">
                        {experience.timeframe}
                      </Text>
                    </Row>
                    <Text variant="body-default-s" onBackground="brand-weak" marginBottom="m">
                      {experience.role}
                    </Text>
                    <Column as="ul" gap="16">
                      {experience.achievements.map(
                        (achievement: ReactNode, index: number) => (
                          <Text
                            as="li"
                            variant="body-default-m"
                            key={`${experience.company}-${index}`}
                          >
                            {achievement}
                          </Text>
                        ),
                      )}
                    </Column>
                    {experience.images && experience.images.length > 0 && (
                      <Row fillWidth paddingTop="m" paddingLeft="40" gap="12" wrap>
                        {experience.images.map((image, index) => (
                          <Row
                            key={index}
                            border="neutral-medium"
                            radius="m"
                            minWidth={image.width}
                            height={image.height}
                          >
                            <Media
                              enlarge
                              radius="m"
                              sizes={image.width.toString()}
                              alt={image.alt}
                              src={image.src}
                            />
                          </Row>
                        ))}
                      </Row>
                    )}
                  </Column>
                ))}
              </Column>
            </Column>
          )}

          {about.studies.display && (
            <Column fillWidth gap="l">
              <Heading as="h2" id={about.studies.title} variant="display-strong-m">
                {about.studies.title}
              </Heading>
              <Column fillWidth gap="l">
                {about.studies.institutions.map((institution, index) => (
                  <Column key={`${institution.name}-${index}`} fillWidth gap="4">
                    <Text id={institution.name} variant="heading-strong-l">
                      {institution.name}
                    </Text>
                    <Text variant="heading-default-xs" onBackground="neutral-weak">
                      {institution.description}
                    </Text>
                  </Column>
                ))}
              </Column>
            </Column>
          )}

          {about.technical.display && (
            <Column fillWidth gap="24">
              <Heading as="h2" id={about.technical.title} variant="display-strong-s">
                {about.technical.title}
              </Heading>
              {about.technical.skills.map((skill, index) => (
                <Card
                  key={`${skill}-${index}`}
                  fillWidth
                  padding="32"
                  radius="l"
                  border="neutral-alpha-weak"
                  background="surface"
                  gap="20"
                  className={styles.skillCard}
                >
                  <Text 
                    id={skill.title} 
                    variant="heading-strong-l"
                  >
                    {skill.title}
                  </Text>
                  <Column fillWidth gap="12">
                    {skill.description}
                  </Column>
                  {skill.tags && skill.tags.length > 0 && (
                    <Row wrap gap="m" paddingTop="s">
                      {skill.tags.map((tag, tagIndex) => (
                        <Tag key={`${skill.title}-${tagIndex}`} size="l" prefixIcon={tag.icon}>
                          {tag.name}
                        </Tag>
                      ))}
                    </Row>
                  )}
                  {skill.images && skill.images.length > 0 && (
                    <Row fillWidth paddingTop="m" gap="12" wrap>
                      {skill.images.map((image, index) => (
                        <Row
                          key={index}
                          border="neutral-medium"
                          radius="m"
                          minWidth={image.width}
                          height={image.height}
                        >
                          <Media
                            enlarge
                            radius="m"
                            sizes={image.width.toString()}
                            alt={image.alt}
                            src={image.src}
                          />
                        </Row>
                      ))}
                    </Row>
                  )}
                </Card>
              ))}
            </Column>
          )}
      </Column>
    </Column>
  );
}