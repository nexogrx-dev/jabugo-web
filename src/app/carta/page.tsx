import type { Metadata } from 'next';
import { PageFrame } from '@/components/PageFrame';
import { Section } from '@/components/Section';
import { TextBlock } from '@/components/TextBlock';
import { esContent } from '@/content/es/site';
import { buildPageMetadata } from '@/src/lib/seo';

export const metadata: Metadata = buildPageMetadata({
  title: `Carta | ${esContent.siteName}`,
  description: esContent.carta.body,
  url: '/carta/',
});

export default function CartaPage() {
  return (
    <PageFrame navItems={esContent.nav} langToggle={{ href: '/en/carta/', label: 'EN' }}>
      <Section title={esContent.carta.title}>
        <TextBlock title="Contenido en preparacion" body={esContent.carta.body} />
      </Section>
    </PageFrame>
  );
}
