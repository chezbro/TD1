'use client';

import {
  Avatar,
  Button,
  Column,
  Flex,
  Heading,
  Icon,
  IconButton,
  SmartImage,
  Tag,
  Text,
} from "@/once-ui/components";
import { baseURL } from "@/app/resources";
import TableOfContents from "@/components/about/TableOfContents";
import styles from "@/components/about/about.module.scss";
import { person, about, social, home } from "@/app/resources/content";
import React, { useState } from "react";
import Image from "next/image";
import { MobileStyles } from "@/components/MobileStyles";

export default function About() {
  const [activeCategory, setActiveCategory] = useState("All");
  
  // Filter engineers based on active category
  const filteredEngineers = React.useMemo(() => {
    if (activeCategory === "All") {
      return home.resourceAugmentation?.engineers || [];
    }
    return (home.resourceAugmentation?.engineers || []).filter(
      (engineer) => engineer.expertise === activeCategory
    );
  }, [activeCategory]);
  
  const structure = [
    {
      title: about.intro.title,
      display: about.intro.display,
      items: [],
    },
    {
      title: about.work.title,
      display: about.work.display,
      items: about.work.experiences.map((experience) => experience.company),
    },
    {
      title: about.studies.title,
      display: about.studies.display,
      items: about.studies.institutions.map((institution) => institution.name),
    },
    {
      title: about.technical.title,
      display: about.technical.display,
      items: about.technical.skills.map((skill) => skill.title),
    },
    {
      title: home.teamMembers?.title || "Team Members",
      display: home.teamMembers?.display || false,
      items: [],
    },
    {
      title: home.resourceAugmentation?.title || "Resource Augmentation",
      display: home.resourceAugmentation?.display || false,
      items: [],
    },
  ];
  return (
    <Column maxWidth="m">
      <script
        type="application/ld+json"
        suppressHydrationWarning
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Person",
            name: person.name,
            jobTitle: person.role,
            description: about.intro.description,
            url: `https://${baseURL}/about`,
            image: `${baseURL}/images/${person.avatar}`,
            sameAs: social
              .filter((item) => item.link && !item.link.startsWith("mailto:")) // Filter out empty links and email links
              .map((item) => item.link),
            worksFor: {
              "@type": "Organization",
              name: about.work.experiences[0].company || "",
            },
          }),
        }}
      />
      {about.tableOfContent.display && (
        <Column
          left="0"
          style={{ top: "50%", transform: "translateY(-50%)" }}
          position="fixed"
          paddingLeft="24"
          gap="32"
          hide="s"
        >
          <TableOfContents structure={structure} about={about} />
        </Column>
      )}
      <Flex fillWidth mobileDirection="column" horizontal="center">
        {about.avatar.display && (
          <Column
            className={styles.avatar}
            minWidth="160"
            paddingX="l"
            paddingBottom="xl"
            gap="m"
            flex={3}
            horizontal="center"
          >
            <Avatar src={person.avatar} size="xl" />
            <Text className="s-text-center">{person.location}</Text>
            {person.languages.length > 0 && (
              <Flex wrap gap="8" horizontal="center">
                {person.languages.map((language, index) => (
                  <Tag key={index} size="l">
                    {language}
                  </Tag>
                ))}
              </Flex>
            )}
          </Column>
        )}
        <Column className={styles.blockAlign} flex={9} maxWidth={40}>
          <Column
            id={about.intro.title}
            fillWidth
            minHeight="160"
            vertical="center"
            marginBottom="32"
            className="s-padding-x-m"
          >
            {about.calendar.display && (
              <Flex
                fitWidth
                border="brand-alpha-medium"
                className={styles.blockAlign}
                style={{
                  backdropFilter: "blur(var(--static-space-1))",
                }}
                background="brand-alpha-weak"
                radius="full"
                padding="4"
                gap="8"
                marginBottom="m"
                vertical="center"
              >
                <Icon paddingLeft="12" name="calendar" onBackground="brand-weak" />
                <Flex paddingX="8">Schedule a call</Flex>
                <IconButton
                  href={about.calendar.link}
                  data-border="rounded"
                  variant="secondary"
                  icon="chevronRight"
                />
              </Flex>
            )}
            <Heading className={`${styles.textAlign} s-text-size-m`} variant="display-strong-xl">
              {person.name}
            </Heading>
            <Text
              className={`${styles.textAlign} s-text-size-xs`}
              variant="display-default-xs"
              onBackground="neutral-weak"
            >
              {person.role}
            </Text>
            {social.length > 0 && (
              <Flex className={styles.blockAlign} paddingTop="20" paddingBottom="8" gap="8" wrap horizontal="center" fitWidth>
                {social.map(
                  (item) =>
                    item.link && (
                        <>
                            <Button
                                className="s-flex-hide"
                                key={item.name}
                                href={item.link}
                                prefixIcon={item.icon}
                                label={item.name}
                                size="s"
                                variant="secondary"
                            />
                            <IconButton
                                className="s-flex-show"
                                size="l"
                                key={`${item.name}-icon`}
                                href={item.link}
                                icon={item.icon}
                                variant="secondary"
                            />
                        </>
                    ),
                )}
              </Flex>
            )}
          </Column>

          {about.intro.display && (
            <Column textVariant="body-default-l" fillWidth gap="m" marginBottom="xl" className="s-padding-x-m s-text-size-s">
              {about.intro.description}
            </Column>
          )}

          {about.work.display && (
            <>
              <Heading as="h2" id={about.work.title} variant="display-strong-s" marginBottom="m" className="s-padding-x-m">
                {about.work.title}
              </Heading>
              <Column fillWidth gap="l" marginBottom="40" className="s-padding-x-m">
                {about.work.experiences.map((experience, index) => (
                  <Column key={`${experience.company}-${experience.role}-${index}`} fillWidth>
                    <Flex fillWidth horizontal="space-between" vertical="end" marginBottom="4">
                      <Text id={experience.company} variant="heading-strong-l">
                        {experience.company}
                      </Text>
                      <Text variant="heading-default-xs" onBackground="neutral-weak">
                        {experience.timeframe}
                      </Text>
                    </Flex>
                    <Text variant="body-default-s" onBackground="brand-weak" marginBottom="m">
                      {experience.role}
                    </Text>
                    <Column as="ul" gap="16">
                      {experience.achievements.map((achievement: JSX.Element, index: number) => (
                        <Text
                          as="li"
                          variant="body-default-m"
                          key={`${experience.company}-${index}`}
                        >
                          {achievement}
                        </Text>
                      ))}
                    </Column>
                    {experience.images.length > 0 && (
                      <Flex fillWidth paddingTop="m" paddingLeft="40" wrap>
                        {experience.images.map((image, index) => (
                          <Flex
                            key={index}
                            border="neutral-medium"
                            radius="m"
                            //@ts-ignore
                            minWidth={image.width}
                            //@ts-ignore
                            height={image.height}
                          >
                            <SmartImage
                              enlarge
                              radius="m"
                              //@ts-ignore
                              sizes={image.width.toString()}
                              //@ts-ignore
                              alt={image.alt}
                              //@ts-ignore
                              src={image.src}
                            />
                          </Flex>
                        ))}
                      </Flex>
                    )}
                  </Column>
                ))}
              </Column>
            </>
          )}

          {about.studies.display && (
            <>
              <Heading as="h2" id={about.studies.title} variant="display-strong-s" marginBottom="m">
                {about.studies.title}
              </Heading>
              <Column fillWidth gap="l" marginBottom="40">
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
            </>
          )}

          {about.technical.display && (
            <>
              <Heading
                as="h2"
                id={about.technical.title}
                variant="display-strong-s"
                marginBottom="40"
              >
                {about.technical.title}
              </Heading>
              <Column fillWidth gap="l">
                {about.technical.skills.map((skill, index) => (
                  <Column key={`${skill}-${index}`} fillWidth gap="4">
                    <Text variant="heading-strong-l">{skill.title}</Text>
                    <Text variant="body-default-m" onBackground="neutral-weak">
                      {skill.description}
                    </Text>
                    {skill.images && skill.images.length > 0 && (
                      <Flex fillWidth paddingTop="m" gap="12" wrap>
                        {skill.images.map((image, index) => (
                          <Flex
                            key={index}
                            border="neutral-medium"
                            radius="m"
                            //@ts-ignore
                            minWidth={image.width}
                            //@ts-ignore
                            height={image.height}
                          >
                            <SmartImage
                              enlarge
                              radius="m"
                              //@ts-ignore
                              sizes={image.width.toString()}
                              //@ts-ignore
                              alt={image.alt}
                              //@ts-ignore
                              src={image.src}
                            />
                          </Flex>
                        ))}
                      </Flex>
                    )}
                  </Column>
                ))}
              </Column>
            </>
          )}
        </Column>
      </Flex>
      
      {/* Team Members Section */}
      {home.teamMembers?.display && (
        <Column gap="l" paddingY="m">
          <Column maxWidth="s" gap="m" paddingBottom="m">
            <Heading as="h2" id={home.teamMembers.title} variant="display-strong-m" wrap="balance">
              {home.teamMembers.title}
            </Heading>
            <Text variant="body-default-l" wrap="balance" onBackground="neutral-weak">
              {home.teamMembers.description}
            </Text>
          </Column>
          
          <div className="team-grid">
            {home.teamMembers.members.map((member, index) => (
              <div key={`team-${index}`} className="team-card">
                <div className="team-image-container">
                  <Image
                    src={member.image}
                    alt={member.name}
                    width={300}
                    height={300}
                    className="team-image"
                    quality={90}
                  />
                </div>
                <div className="team-content">
                  <Heading as="h3" variant="heading-strong-l">
                    {member.name}
                  </Heading>
                  <Text variant="body-strong-m" onBackground="neutral-weak">
                    {member.title}
                  </Text>
                  <Text variant="body-default-m" onBackground="neutral-weak">
                    {member.bio}
                  </Text>
                </div>
              </div>
            ))}
          </div>
        </Column>
      )}

      {/* Resource Augmentation Section */}
      {home.resourceAugmentation?.display && (
        <Column gap="l" paddingY="m">
          <Column maxWidth="s" gap="m" paddingBottom="m">
            <Heading as="h2" id={home.resourceAugmentation.title} variant="display-strong-m" wrap="balance">
              {home.resourceAugmentation.title}
            </Heading>
            <Text variant="body-default-l" wrap="balance" onBackground="neutral-weak">
              {home.resourceAugmentation.description}
            </Text>
          </Column>
          
          {/* Filter Buttons */}
          <div className="filter-buttons">
            {home.resourceAugmentation.categories.map((category, index) => (
              <button
                key={`category-${index}`}
                className={`filter-button ${activeCategory === category ? 'active' : ''}`}
                onClick={() => setActiveCategory(category)}
              >
                {category}
              </button>
            ))}
          </div>
          
          {/* Engineers Grid */}
          <div className="resource-grid">
            {filteredEngineers.map((engineer, index) => (
              <div key={`engineer-${index}`} className="resource-card">
                <div className="resource-image-container">
                  <Image
                    src={engineer.image}
                    alt={engineer.name}
                    width={300}
                    height={300}
                    className="resource-image"
                    quality={90}
                  />
                </div>
                <div className="resource-content">
                  <div>
                    <span className="resource-expertise">{engineer.expertise}</span>
                    <Heading as="h3" variant="heading-strong-l">
                      {engineer.name}
                    </Heading>
                  </div>
                  <div>
                    <Text variant="body-default-s" onBackground="neutral-weak">
                      Skills:
                    </Text>
                    <div className="resource-skills">
                      {engineer.skills.map((skill, skillIndex) => (
                        <span key={`skill-${skillIndex}`} className="resource-skill">
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div className="resource-experience">
                    Experience: {engineer.experience}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </Column>
      )}
      <MobileStyles />
    </Column>
  );
}
