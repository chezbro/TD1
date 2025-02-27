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
import "./contact.css";

export function generateMetadata(): Metadata {
  return {
    title: contact.title,
    description: contact.description,
    openGraph: {
      title: contact.title,
      description: contact.description,
    }
  };
}

export default function ContactPage() {
  return (
    <Column gap="xl" className="contact-page">
      <Column gap="l">
        <Heading variant="display-strong-xl">{contact.title}</Heading>
        {contact.intro.display && (
          <Column gap="m">
            <Heading variant="display-strong-l">{contact.intro.title}</Heading>
            <Text variant="body-default-l">{contact.intro.description}</Text>
          </Column>
        )}
      </Column>

      <Grid columns={2} mobileColumns={1} gap="l">
        {/* Contact Form */}
        <Card padding="l" shadow="m" border="neutral-medium" radius="m">
          <Column gap="l">
            <Heading variant="display-strong-m">Send Us a Message</Heading>
            <Column gap="m">
              <Input
                id="name"
                label="Name"
                placeholder={contact.form?.namePlaceholder || ""}
                required
              />
              <Input
                id="email"
                label="Email"
                type="email"
                placeholder={contact.form?.emailPlaceholder || ""}
                required
              />
              <Input
                id="subject"
                label="Subject"
                placeholder={contact.form?.subjectPlaceholder || ""}
                required
              />
              <Textarea
                id="message"
                label="Message"
                placeholder={contact.form?.messagePlaceholder || ""}
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
            <Column gap="l">
              <Column gap="s">
                <Text variant="heading-strong-s" color="brand-strong">Email</Text>
                <Text variant="body-default-m">
                  <a 
                    href={`mailto:${contact.contactInfo.email}`} 
                    className="contact-link"
                    style={{ textDecoration: 'none', color: 'inherit' }}
                  >
                    {contact.contactInfo.email}
                  </a>
                </Text>
              </Column>

              <Column gap="s">
                <Text variant="heading-strong-s" color="brand-strong">Phone</Text>
                <Text variant="body-default-m">
                  <a 
                    href={`tel:${contact.contactInfo.phone}`} 
                    className="contact-link"
                    style={{ textDecoration: 'none', color: 'inherit' }}
                  >
                    {contact.contactInfo.phone}
                  </a>
                </Text>
              </Column>

              <Column gap="s">
                <Text variant="heading-strong-s" color="brand-strong">Address</Text>
                <Text variant="body-default-m">{contact.contactInfo.address}</Text>
              </Column>

              <Column gap="s">
                <Text variant="heading-strong-s" color="brand-strong">Business Hours</Text>
                <Text variant="body-default-m">{contact.contactInfo.hours}</Text>
              </Column>
            </Column>

            <Line />

            <Column gap="m">
              <Heading variant="heading-strong-s">Connect With Us</Heading>
              <Flex gap="m" className="social-links-container">
                <a href="#" className="social-link" style={{ textDecoration: 'none' }}>
                  <Flex 
                    radius="m" 
                    background="brand-weak" 
                    padding="m" 
                    horizontal="center" 
                    vertical="center"
                    shadow="s"
                  >
                    <Icon name="linkedin" size="m" onBackground="brand-weak" />
                  </Flex>
                </a>
                <a href="#" className="social-link" style={{ textDecoration: 'none' }}>
                  <Flex 
                    radius="m" 
                    background="brand-weak" 
                    padding="m" 
                    horizontal="center" 
                    vertical="center"
                    shadow="s"
                  >
                    <Icon name="github" size="m" onBackground="brand-weak" />
                  </Flex>
                </a>
                <a href="#" className="social-link" style={{ textDecoration: 'none' }}>
                  <Flex 
                    radius="m" 
                    background="brand-weak" 
                    padding="m" 
                    horizontal="center" 
                    vertical="center"
                    shadow="s"
                  >
                    <Icon name="x" size="m" onBackground="brand-weak" />
                  </Flex>
                </a>
              </Flex>
            </Column>
          </Column>
        </Card>
      </Grid>
    </Column>
  );
} 