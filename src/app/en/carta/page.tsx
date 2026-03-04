import type { Metadata } from 'next';
import { PageFrame } from '@/components/PageFrame';
import { Section } from '@/components/Section';
import { TextBlock } from '@/components/TextBlock';
import { enContent } from '@/content/en/site';
import { buildPageMetadata } from '@/src/lib/seo';

export const metadata: Metadata = buildPageMetadata({
  title: `Menu | ${enContent.siteName}`,
  description: enContent.carta.body,
  url: '/en/carta/',
});

export default function CartaEnPage() {
  return (
    <PageFrame navItems={enContent.nav} langToggle={{ href: '/carta/', label: 'ES' }}>
      <Section title={enContent.carta.title}>
        <TextBlock title="Content in progress" body={enContent.carta.body} />
      </Section>
    </PageFrame>
  );
}
