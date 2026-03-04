import type { Metadata } from 'next';
import { PageFrame } from '@/components/PageFrame';
import { Section } from '@/components/Section';
import { TextBlock } from '@/components/TextBlock';
import { enContent } from '@/content/en/site';
import { buildPageMetadata } from '@/src/lib/seo';

export const metadata: Metadata = buildPageMetadata({
  title: `Legal | ${enContent.siteName}`,
  description: enContent.legal.body,
  url: '/en/legal/',
});

export default function LegalEnPage() {
  return (
    <PageFrame navItems={enContent.nav} langToggle={{ href: '/legal/', label: 'ES' }}>
      <Section title={enContent.legal.title}>
        <TextBlock title="Legal documentation" body={enContent.legal.body} />
      </Section>
    </PageFrame>
  );
}
