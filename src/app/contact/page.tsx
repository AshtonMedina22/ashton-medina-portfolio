import { Column, Meta } from "@once-ui-system/core";
import { baseURL, person } from "@/resources";
import { ContactSection } from "@/components";

const title = `Contact - ${person.name}`;
const description = `Get in touch with ${person.name}`;

export async function generateMetadata() {
  return Meta.generate({
    title,
    description,
    baseURL,
    path: "/contact",
    image: `/api/og/generate?title=${encodeURIComponent(title)}`,
  });
}

export default function ContactPage() {
  return (
    <Column fillWidth paddingY="104" paddingX="l" horizontal="center" s={{ paddingX: "m", paddingY: "64" }}>
      <ContactSection />
    </Column>
  );
}
