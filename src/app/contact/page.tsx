import { Metadata } from "next";
import {
  Card,
  Column,
  Flex,
  Grid,
  Heading,
  Icon,
  Line,
  Text,
  Button,
  Textarea,
  Input,
} from "@/once-ui/components";

import { contact, person } from "@/app/resources/content";

export const metadata: Metadata = {
  title: contact.title,
  description: contact.description,
};

export default function ContactPage() {
  return (
    <Column gap="xl">
      <Column gap="l">
        <Heading variant="display-strong-xl">{contact.title}</Heading>
        {contact.intro.display && (
          <Column gap="m">
            <Heading variant="display-strong-l">{contact.intro.title}</Heading>
            <Text variant="body-default-l">{contact.intro.description}</Text>
          </Column>
        )}
      </Column>

      <Grid columns={2} gap="l">
        {/* Contact Form */}
        <Card padding="l" shadow="m" border="neutral-medium" radius="m">
          <Column gap="l">
            <Heading variant="display-strong-m">Send Us a Message</Heading>
            <Column gap="m">
              <Input
                id="name"
                label="Name"
                placeholder="Your name"
                required
              />
              <Input
                id="email"
                label="Email"
                type="email"
                placeholder="your.email@example.com"
                required
              />
              <Input
                id="subject"
                label="Subject"
                placeholder="What's this about?"
                required
              />
              <Textarea
                id="message"
                label="Message"
                placeholder="Tell us about your project, question, or request..."
                rows={6}
                required
              />
              <Flex horizontal="start">
                <Button variant="primary" size="m">
                  Send Message
                </Button>
              </Flex>
            </Column>
          </Column>
        </Card>

        {/* Contact Information */}
        <Card padding="l" shadow="m" border="neutral-medium" radius="m">
          <Column gap="l">
            <Heading variant="display-strong-m">Contact Information</Heading>
            <Column gap="m">
              <Flex gap="m" vertical="center">
                <Flex 
                  radius="full" 
                  background="brand-weak" 
                  padding="m" 
                  horizontal="center" 
                  vertical="center"
                >
                  <Icon name="email" size="m" onBackground="brand-weak" />
                </Flex>
                <Column>
                  <Text variant="label-default-s">Email</Text>
                  <Text variant="body-default-m">
                    <a href={`mailto:${contact.contactInfo.email}`} style={{ textDecoration: 'none', color: 'inherit' }}>
                      {contact.contactInfo.email}
                    </a>
                  </Text>
                </Column>
              </Flex>

              <Flex gap="m" vertical="center">
                <Flex 
                  radius="full" 
                  background="brand-weak" 
                  padding="m" 
                  horizontal="center" 
                  vertical="center"
                >
                  <Icon name="phone" size="m" onBackground="brand-weak" />
                </Flex>
                <Column>
                  <Text variant="label-default-s">Phone</Text>
                  <Text variant="body-default-m">
                    <a href={`tel:${contact.contactInfo.phone}`} style={{ textDecoration: 'none', color: 'inherit' }}>
                      {contact.contactInfo.phone}
                    </a>
                  </Text>
                </Column>
              </Flex>

              <Flex gap="m" vertical="center">
                <Flex 
                  radius="full" 
                  background="brand-weak" 
                  padding="m" 
                  horizontal="center" 
                  vertical="center"
                >
                  <Icon name="location" size="m" onBackground="brand-weak" />
                </Flex>
                <Column>
                  <Text variant="label-default-s">Address</Text>
                  <Text variant="body-default-m">{contact.contactInfo.address}</Text>
                </Column>
              </Flex>

              <Flex gap="m" vertical="center">
                <Flex 
                  radius="full" 
                  background="brand-weak" 
                  padding="m" 
                  horizontal="center" 
                  vertical="center"
                >
                  <Icon name="clock" size="m" onBackground="brand-weak" />
                </Flex>
                <Column>
                  <Text variant="label-default-s">Business Hours</Text>
                  <Text variant="body-default-m">{contact.contactInfo.hours}</Text>
                </Column>
              </Flex>
            </Column>

            <Line />

            <Column gap="m">
              <Heading variant="heading-strong-s">Connect With Us</Heading>
              <Flex gap="m">
                <a href="#" style={{ textDecoration: 'none' }}>
                  <Flex 
                    radius="full" 
                    background="brand-weak" 
                    padding="m" 
                    horizontal="center" 
                    vertical="center"
                  >
                    <Icon name="linkedin" size="m" onBackground="brand-weak" />
                  </Flex>
                </a>
                <a href="#" style={{ textDecoration: 'none' }}>
                  <Flex 
                    radius="full" 
                    background="brand-weak" 
                    padding="m" 
                    horizontal="center" 
                    vertical="center"
                  >
                    <Icon name="github" size="m" onBackground="brand-weak" />
                  </Flex>
                </a>
                <a href="#" style={{ textDecoration: 'none' }}>
                  <Flex 
                    radius="full" 
                    background="brand-weak" 
                    padding="m" 
                    horizontal="center" 
                    vertical="center"
                  >
                    <Icon name="x" size="m" onBackground="brand-weak" />
                  </Flex>
                </a>
              </Flex>
            </Column>
          </Column>
        </Card>
      </Grid>

      <Card padding="l" shadow="m" border="neutral-medium" radius="m">
        <Column gap="l">
          <Heading variant="display-strong-m">Our Location</Heading>
          <div style={{ 
            width: '100%', 
            height: '400px', 
            backgroundColor: '#f5f5f5', 
            borderRadius: '8px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center'
          }}>
            <Text variant="body-default-m">Map placeholder - Replace with your preferred map component</Text>
          </div>
        </Column>
      </Card>
    </Column>
  );
} 