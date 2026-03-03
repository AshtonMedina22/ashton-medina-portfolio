import { Button, Column, Heading, Text } from "@once-ui-system/core";

export default function NotFound() {
  return (
    <Column as="section" fill center paddingBottom="160" gap="l">
      <Text marginBottom="s" variant="display-strong-xl">
        404
      </Text>
      <Heading marginBottom="l" variant="display-default-xs">
        Page Not Found
      </Heading>
      <Text onBackground="neutral-weak">The page you are looking for does not exist.</Text>
      <Button href="/" variant="primary" size="m" style={{ marginTop: "var(--static-space-16)" }}>
        Back to home
      </Button>
    </Column>
  );
}
