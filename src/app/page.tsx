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
import { Mailchimp, TechStackMarquee } from "@/components";
import { getPosts } from "@/utils/utils";

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
  // Get all unique tech stack items from all projects
  const allProjects = getPosts(["src", "app", "work", "projects"]);
  const allTechStack = allProjects.flatMap((project) => project.metadata.techStack || []);
  
  // Get unique tech stack items (by name)
  const uniqueTechStack = Array.from(
    new Map(allTechStack.map((tech) => [tech.name, tech])).values()
  );

  return (
    <Column maxWidth="m" gap="xl" paddingY="12" horizontal="center">
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
      <Column fillWidth horizontal="center" gap="m">
        <Column maxWidth="s" horizontal="center" align="center">
          {home.featured.display && (
            <RevealFx
              fillWidth
              horizontal="center"
              paddingTop="16"
              paddingBottom="32"
              paddingLeft="12"
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
          <RevealFx translateY="4" fillWidth horizontal="center" paddingBottom="16">
            <Heading wrap="balance" variant="display-strong-l">
              {home.headline}
            </Heading>
          </RevealFx>
          <RevealFx translateY="8" delay={0.2} fillWidth horizontal="center" paddingBottom="32">
            <Text wrap="balance" onBackground="neutral-weak" variant="heading-default-xl">
              {home.subline}
            </Text>
          </RevealFx>
          <RevealFx paddingTop="12" delay={0.4} horizontal="center" paddingLeft="12">
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
                  <Avatar
                    marginRight="8"
                    style={{ marginLeft: "-0.75rem" }}
                    src={person.avatar}
                    size="m"
                  />
                )}
                {about.title}
              </Row>
            </Button>
          </RevealFx>
          {uniqueTechStack.length > 0 && (
            <RevealFx translateY="8" delay={0.6} fillWidth paddingTop="xl">
              <Column fillWidth gap="s">
                <Text variant="label-default-s" align="center" onBackground="neutral-weak">
                  Technologies I Work With
                </Text>
                <TechStackMarquee technologies={uniqueTechStack} />
              </Column>
            </RevealFx>
          )}
          <RevealFx translateY="12" delay={0.8} fillWidth paddingTop="32">
            <Column maxWidth="s" fillWidth gap="m" align="center">
              <Text wrap="balance" variant="body-default-l" align="center" onBackground="neutral-weak">
                Most operational systems fail at scale because processes are inconsistent, access is uncontrolled, and execution depends on individual knowledge. I build structured platforms that enforce workflow standards, automate execution paths, and maintain data integrity as organizations grow. My work connects customer experience, operations, vendors, and delivery into governed systems that remain stable under change.
              </Text>
            </Column>
          </RevealFx>
          {allProjects.length > 0 && (
            <RevealFx translateY="16" delay={1.0} fillWidth paddingTop="32">
              <Column fillWidth gap="s" align="center">
                <Text variant="label-default-s" align="center" onBackground="neutral-weak">
                  Featured Work
                </Text>
                <Row wrap gap="m" horizontal="center" paddingX="l">
                  {allProjects
                    .sort((a, b) => new Date(b.metadata.publishedAt).getTime() - new Date(a.metadata.publishedAt).getTime())
                    .map((project) => (
                      <Badge
                        key={project.slug}
                        href={`/work/${project.slug}`}
                        background="brand-alpha-weak"
                        paddingX="12"
                        paddingY="4"
                        onBackground="neutral-strong"
                        textVariant="label-default-s"
                        arrow={false}
                      >
                        {project.metadata.title}
                      </Badge>
                    ))}
                </Row>
              </Column>
            </RevealFx>
          )}
        </Column>
      </Column>
      <RevealFx translateY="16" delay={0.8} horizontal="center">
        <Button
          href="/work"
          variant="primary"
          size="m"
          weight="default"
          arrowIcon
        >
          View My Work
        </Button>
      </RevealFx>
      <Mailchimp />
    </Column>
  );
}
