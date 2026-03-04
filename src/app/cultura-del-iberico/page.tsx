import type { Metadata } from 'next';
import { PageFrame } from '@/components/PageFrame';
import { Section } from '@/components/Section';
import { TextBlock } from '@/components/TextBlock';
import { esContent } from '@/content/es/site';
import { buildPageMetadata } from '@/src/lib/seo';

export const metadata: Metadata = buildPageMetadata({
  title: `Cultura del iberico | ${esContent.siteName}`,
  description: esContent.cultura.body,
  url: '/cultura-del-iberico/',
});

export default function CulturaPage() {
  return (
    <PageFrame navItems={esContent.nav} langToggle={{ href: '/en/culture-of-iberico/', label: 'EN' }}>
      <Section title={esContent.cultura.title}>
        <TextBlock title="Contenido editorial" body={esContent.cultura.body} />
      </Section>
    </PageFrame>
  );
}
