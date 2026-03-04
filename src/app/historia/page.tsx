import type { Metadata } from 'next';
import { ImageBlock } from '@/components/ImageBlock';
import { PageFrame } from '@/components/PageFrame';
import { Section } from '@/components/Section';
import { TextBlock } from '@/components/TextBlock';
import { esContent } from '@/content/es/site';
import historiaContent from '@/src/content/es/historia.json';
import { buildPageMetadata } from '@/src/lib/seo';

export const metadata: Metadata = buildPageMetadata({
  title: historiaContent.meta.title,
  description: historiaContent.meta.description,
  url: '/historia/',
});

export default function HistoriaPage() {
  return (
    <PageFrame navItems={esContent.nav} langToggle={{ href: '/en/historia/', label: 'EN' }}>
      <Section title={esContent.historia.title}>
        <div className="grid gap-6 sm:grid-cols-2">
          <TextBlock title="Relato de marca" body={esContent.historia.body} />
          <ImageBlock src="/images/bodega/history-placeholder.jpg" alt="Archivo historico" caption="Sustituir por imagen historica oficial." />
        </div>
      </Section>
    </PageFrame>
  );
}
