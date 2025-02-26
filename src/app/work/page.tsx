import { getPosts } from "@/app/utils/utils";
import { Column, Flex, Heading, Text, Card } from "@/once-ui/components";
import { Projects } from "@/components/work/Projects";
import { baseURL } from "@/app/resources";
import { person, work } from "@/app/resources/content";

export async function generateMetadata() {
  const title = work.title;
  const description = work.description;
  const ogImage = `https://${baseURL}/og?title=${encodeURIComponent(title)}`;

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      type: "website",
      url: `https://${baseURL}/work/`,
      images: [
        {
          url: ogImage,
          alt: title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [ogImage],
    },
  };
}

export default function Work() {
  let allProjects = getPosts(["src", "app", "work", "projects"]);

  return (
    <Column maxWidth="m">
      <script
        type="application/ld+json"
        suppressHydrationWarning
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "CollectionPage",
            headline: work.title,
            description: work.description,
            url: `https://${baseURL}/projects`,
            image: `${baseURL}/og?title=Design%20Projects`,
            author: {
              "@type": "Person",
              name: person.name,
            },
            hasPart: allProjects.map((project) => ({
              "@type": "CreativeWork",
              headline: project.metadata.title,
              description: project.metadata.summary,
              url: `https://${baseURL}/projects/${project.slug}`,
              image: `${baseURL}/${project.metadata.image}`,
            })),
          }),
        }}
      />
      
      {/* Introduction Section */}
      {work.intro && work.intro.display && (
        <Column fillWidth gap="l" marginBottom="40" paddingX="l">
          <Heading as="h1" variant="heading-strong-xl">
            {work.intro.title}
          </Heading>
          <Text variant="body-default-l" onBackground="neutral-weak">
            {work.intro.description}
          </Text>
        </Column>
      )}
      
      {/* Expertise Areas */}
      {work.expertise && (
        <Column fillWidth gap="xl" marginBottom="40" paddingX="l">
          <Heading as="h2" variant="heading-strong-xl">
            Our Areas of Expertise
          </Heading>
          <Flex gap="l" wrap horizontal="space-between">
            {work.expertise.map((area, index) => (
              <div key={index} style={{ flex: '1 1 300px', minWidth: '300px', maxWidth: '400px' }}>
                <Card>
                  <Column gap="m" padding="l">
                    <Heading as="h3" variant="heading-strong-l">
                      {area.title}
                    </Heading>
                    <Text variant="body-default-m" onBackground="neutral-weak">
                      {area.description}
                    </Text>
                    {area.areas && (
                      <Column gap="xs">
                        {area.areas.map((item, idx) => (
                          <Text key={idx} variant="body-default-s">• {item}</Text>
                        ))}
                      </Column>
                    )}
                  </Column>
                </Card>
              </div>
            ))}
          </Flex>
        </Column>
      )}
      
      {/* Featured Projects Section */}
      <Column fillWidth gap="l" marginBottom="20" paddingX="l">
        <Heading as="h2" variant="heading-strong-xl">
          Featured Projects
        </Heading>
        <Text variant="body-default-l" onBackground="neutral-weak">
          Explore our portfolio of successful projects that showcase our capabilities and expertise.
        </Text>
      </Column>
      
      <Projects />
    </Column>
  );
}
