'use client';

import { Accordion, Container, Title } from '@mantine/core';
import SafeText, { toPlainText } from '../SafeText';

export default function FAQBlock({ block }) {
  const { heading, items } = block;

  if (!items || items.length === 0) {
    return null;
  }

  // Build FAQPage JSON-LD structured data for AEO / search engines
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: items.map((item) => ({
      '@type': 'Question',
      name: toPlainText(item.question),
      acceptedAnswer: {
        '@type': 'Answer',
        text: toPlainText(item.answer),
      },
    })).filter((q) => q.name && q.acceptedAnswer.text),
  };

  return (
    <Container size="md" py="lg">
      {heading && (
        <Title order={2} mb="lg" ta="center">
          <SafeText value={heading} />
        </Title>
      )}
      <Accordion variant="separated" radius="md">
        {items.map((item) => (
          <Accordion.Item key={item._key} value={item._key}>
            <Accordion.Control><SafeText value={item.question} /></Accordion.Control>
            <Accordion.Panel><SafeText value={item.answer} rich /></Accordion.Panel>
          </Accordion.Item>
        ))}
      </Accordion>
      {jsonLd.mainEntity.length > 0 && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      )}
    </Container>
  );
}
