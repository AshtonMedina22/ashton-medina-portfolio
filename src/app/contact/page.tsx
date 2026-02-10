import {
  Column,
  Heading,
  Text,
  Button,
  Row,
  Meta,
  Schema,
  Icon,
  IconButton,
} from "@once-ui-system/core";
import { baseURL, contact, person, social } from "@/resources";
import React from "react";

export async function generateMetadata() {
  return Meta.generate({
    title: contact.title,
    description: contact.description,
    baseURL: baseURL,
    image: `/api/og/generate?title=${encodeURIComponent(contact.title)}`,
    path: contact.path,
  });
}

export default function Contact() {
  return (
    <Column maxWidth="m" gap="xl" paddingY="12" horizontal="center">
      <Schema
        as="webPage"
        baseURL={baseURL}
        path={contact.path}
        title={contact.title}
        description={contact.description}
        image={`/api/og/generate?title=${encodeURIComponent(contact.title)}`}
        author={{
          name: person.name,
          url: `${baseURL}${contact.path}`,
          image: `${baseURL}${person.avatar}`,
        }}
      />
      <Column maxWidth="s" horizontal="center" align="center" gap="m">
        <Heading wrap="balance" variant="display-strong-xl">
          Get in Touch
        </Heading>
        <Text wrap="balance" onBackground="neutral-weak" variant="heading-default-l" align="center">
          I'm always open to discussing new projects, creative ideas, or opportunities to be part of
          your vision.
        </Text>
      </Column>

      <Column fillWidth maxWidth="s" gap="l" paddingTop="xl">
        <Column gap="m">
          <Row gap="8" vertical="center">
            <Icon name="email" onBackground="brand-weak" />
            <Text variant="heading-strong-m">Email</Text>
          </Row>
          <Button
            href={`mailto:${person.email}`}
            variant="secondary"
            size="m"
            prefixIcon="email"
            label={person.email}
          />
        </Column>

        {social.length > 0 && (
          <Column gap="m">
            <Row gap="8" vertical="center">
              <Icon name="globe" onBackground="brand-weak" />
              <Text variant="heading-strong-m">Connect</Text>
            </Row>
            <Row wrap gap="8">
              {social.map(
                (item) =>
                  item.link && (
                    <Button
                      key={item.name}
                      href={item.link}
                      prefixIcon={item.icon}
                      label={item.name}
                      size="m"
                      variant="secondary"
                    />
                  ),
              )}
            </Row>
          </Column>
        )}
      </Column>
    </Column>
  );
}
