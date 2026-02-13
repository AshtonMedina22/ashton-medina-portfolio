import {
  Heading,
  Text,
  Button,
  Avatar,
  RevealFx,
  Column,
  Badge,
  Row,
  Schema,
  Meta,
  Line,
} from "@once-ui-system/core";
import { home, about, person, baseURL, routes } from "@/resources";
import { TechStackMarquee, ThemeAwareAvatar } from "@/components";

export async function generateMetadata() {
  return Meta.generate({
    title: home.title,
    description: home.description,
    baseURL: baseURL,
    path: home.path,
    image: home.image,
  });
}

export default function Home() {

  return (
    <Column 
      maxWidth="m" 
      fillWidth
      fillHeight
      horizontal="center"
      vertical="center"
      style={{ 
        minHeight: "calc(100vh - 160px)",
        justifyContent: "center",
        gap: "48px"
      }}
    >
      <Schema
        as="webPage"
        baseURL={baseURL}
        path={home.path}
        title={home.title}
        description={home.description}
        image={`/api/og/generate?title=${encodeURIComponent(home.title)}`}
        author={{
          name: person.name,
          url: `${baseURL}${about.path}`,
          image: `${baseURL}${person.avatar}`,
        }}
      />
      <Column fillWidth horizontal="center" align="center" gap="24" style={{ flex: "0 1 auto" }}>
        <Column maxWidth="s" horizontal="center" align="center" gap="16">
          {home.featured.display && (
            <RevealFx
              fillWidth
              horizontal="center"
              paddingBottom="8"
            >
              <Badge
                background="brand-alpha-weak"
                paddingX="12"
                paddingY="4"
                onBackground="neutral-strong"
                textVariant="label-default-s"
                arrow={false}
                href={home.featured.href}
              >
                <Row paddingY="2">{home.featured.title}</Row>
              </Badge>
            </RevealFx>
          )}
          <RevealFx translateY="4" fillWidth horizontal="center" paddingBottom="12">
            <Heading wrap="balance" variant="display-strong-xl">
              {home.headline}
            </Heading>
          </RevealFx>
          <RevealFx translateY="8" delay={0.2} fillWidth horizontal="center" paddingBottom="24">
            <Text wrap="balance" onBackground="neutral-weak" variant="heading-default-l">
              {home.subline}
            </Text>
          </RevealFx>
          <RevealFx delay={0.4} horizontal="center">
            <Button
              id="about"
              data-border="rounded"
              href={about.path}
              variant="secondary"
              size="m"
              weight="default"
              arrowIcon
            >
              <Row gap="8" vertical="center" paddingRight="4">
                {about.avatar.display && (
                  <ThemeAwareAvatar
                    marginRight="8"
                    style={{ marginLeft: "-0.75rem" }}
                    size="m"
                  />
                )}
                {`About ${person.name}`}
              </Row>
            </Button>
          </RevealFx>
        </Column>
        <RevealFx delay={0.6} fillWidth paddingTop="32" paddingBottom="16" style={{ flex: "0 1 auto" }}>
          <Column fillWidth gap="16">
            <Text variant="body-default-m" align="center" onBackground="neutral-weak">
              Technologies I Work With
            </Text>
            <TechStackMarquee />
          </Column>
        </RevealFx>
      </Column>
    </Column>
  );
}
