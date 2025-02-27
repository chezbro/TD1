"use client";

import React, { useMemo } from "react";
import dynamic from "next/dynamic";
import { Heading, Flex, Text, Button, Avatar, RevealFx, Arrow, Column } from "@/once-ui/components";
import { baseURL, routes } from "@/app/resources";
import { home, about, person, newsletter } from "@/app/resources/content";
import { Mailchimp, VideoModal } from "@/components";

// Dynamically import server components with ssr: false to prevent them from being included in the client bundle
// Use React.memo to prevent unnecessary re-renders
const Projects = dynamic(
  () => import("@/components/work/Projects").then(mod => ({ 
    default: React.memo(mod.Projects) 
  })), 
  { ssr: false }
);

const Posts = dynamic(
  () => import("@/components/blog/Posts").then(mod => ({ 
    default: React.memo(mod.Posts) 
  })), 
  { ssr: false }
);

export function HomePage() {
  const [isVideoModalOpen, setIsVideoModalOpen] = React.useState(false);

  const openVideoModal = () => {
    setIsVideoModalOpen(true);
  };

  const closeVideoModal = () => {
    setIsVideoModalOpen(false);
  };

  // Use useMemo for props that don't change to prevent unnecessary re-renders
  const projectsRangeOne = useMemo(() => [1, 1] as [number, number], []);
  const projectsRangeTwo = useMemo(() => [2] as [number], []);
  const postsRange = useMemo(() => [1, 2] as [number, number], []);
  const postsColumns = useMemo(() => "2" as const, []);

  // Memoize the schema JSON to prevent re-renders
  const schemaJson = useMemo(() => {
    return JSON.stringify({
      "@context": "https://schema.org",
      "@type": "WebPage",
      name: home.title,
      description: home.description,
      url: `https://${baseURL}`,
      image: `${baseURL}/og?title=${encodeURIComponent(home.title)}`,
      publisher: {
        "@type": "Person",
        name: person.name,
        image: {
          "@type": "ImageObject",
          url: `${baseURL}${person.avatar}`,
        },
      },
    });
  }, []);

  return (
    <Column maxWidth="m" gap="xl" horizontal="center">
      <script
        type="application/ld+json"
        suppressHydrationWarning
        dangerouslySetInnerHTML={{
          __html: schemaJson
        }}
      />
      <Column fillWidth paddingY="l" gap="m">
        <Column maxWidth="s">
          <RevealFx translateY="4" fillWidth horizontal="start" paddingBottom="m">
            <Heading wrap="balance" variant="display-strong-l">
              {home.headline}
            </Heading>
          </RevealFx>
          <RevealFx translateY="8" delay={0.2} fillWidth horizontal="start" paddingBottom="m">
            <Text wrap="balance" onBackground="neutral-weak" variant="heading-default-xl">
              {home.subline}
            </Text>
          </RevealFx>
          <RevealFx translateY="12" delay={0.4} horizontal="start">
            <Button
              id="about"
              data-border="rounded"
              onClick={openVideoModal}
              variant="secondary"
              size="m"
              arrowIcon
            >
              <Flex gap="8" vertical="center">
                {about.avatar.display && (
                  <Avatar
                    style={{ marginLeft: "-0.75rem", marginRight: "0.25rem" }}
                    src={person.avatar}
                    size="m"
                  />
                )}
                <Flex gap="8" vertical="center">
                  <svg 
                    width="16" 
                    height="16" 
                    viewBox="0 0 24 24" 
                    fill="none" 
                    xmlns="http://www.w3.org/2000/svg"
                    style={{ marginRight: "0.25rem" }}
                  >
                    <path 
                      d="M8 5.14V19.14L19 12.14L8 5.14Z" 
                      fill="currentColor" 
                    />
                  </svg>
                  {about.title}
                </Flex>
              </Flex>
            </Button>
          </RevealFx>
        </Column>
      </Column>
      <RevealFx translateY="16" delay={0.6}>
        {routes["/work"] && <Projects range={projectsRangeOne} />}
      </RevealFx>
      {routes["/blog"] && (
        <Flex fillWidth gap="24" mobileDirection="column">
          <Flex flex={1} paddingLeft="l">
            <Heading as="h2" variant="display-strong-xs" wrap="balance">
              Latest from the blog
            </Heading>
          </Flex>
          <Flex flex={3} paddingX="20">
            <Posts range={postsRange} columns={postsColumns} />
          </Flex>
        </Flex>
      )}
      {routes["/work"] && <Projects range={projectsRangeTwo} />}
      {newsletter.display && <Mailchimp newsletter={newsletter} />}
      
      {/* Video Modal */}
      <VideoModal
        isOpen={isVideoModalOpen}
        onClose={closeVideoModal}
        videoUrl={about.video.url}
        title={about.video.title}
        description={about.video.description}
      />
    </Column>
  );
} 