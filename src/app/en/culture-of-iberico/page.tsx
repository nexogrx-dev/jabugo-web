import type { Metadata } from 'next';
import { PageFrame } from '@/components/PageFrame';
import { Section } from '@/components/Section';
import { TextBlock } from '@/components/TextBlock';
import { enContent } from '@/content/en/site';
import { buildPageMetadata } from '@/src/lib/seo';

export const metadata: Metadata = buildPageMetadata({
  title: `Iberico culture | ${enContent.siteName}`,
  description: enContent.cultura.body,
  url: '/en/culture-of-iberico/',
});

export default function CultureEnPage() {
  return (
    <PageFrame navItems={enContent.nav} langToggle={{ href: '/cultura-del-iberico/', label: 'ES' }}>
      <Section title={enContent.cultura.title}>
        <TextBlock title="Editorial content" body={enContent.cultura.body} />
      </Section>
    </PageFrame>
  );
}
