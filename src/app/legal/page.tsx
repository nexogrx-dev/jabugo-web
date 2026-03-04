import type { Metadata } from 'next';
import { PageFrame } from '@/components/PageFrame';
import { Section } from '@/components/Section';
import { TextBlock } from '@/components/TextBlock';
import { esContent } from '@/content/es/site';
import { buildPageMetadata } from '@/src/lib/seo';

export const metadata: Metadata = buildPageMetadata({
  title: `Legal | ${esContent.siteName}`,
  description: esContent.legal.body,
  url: '/legal/',
});

export default function LegalPage() {
  return (
    <PageFrame navItems={esContent.nav} langToggle={{ href: '/en/legal/', label: 'EN' }}>
      <Section title={esContent.legal.title}>
        <TextBlock title="Documentacion legal" body={esContent.legal.body} />
      </Section>
    </PageFrame>
  );
}
