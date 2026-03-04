import type { Metadata } from 'next';
import { ImageBlock } from '@/components/ImageBlock';
import { PageFrame } from '@/components/PageFrame';
import { Section } from '@/components/Section';
import { TextBlock } from '@/components/TextBlock';
import { enContent } from '@/content/en/site';
import { buildPageMetadata } from '@/src/lib/seo';

export const metadata: Metadata = buildPageMetadata({
  title: `History | ${enContent.siteName}`,
  description: enContent.historia.body,
  url: '/en/historia/',
});

export default function HistoriaEnPage() {
  return (
    <PageFrame navItems={enContent.nav} langToggle={{ href: '/historia/', label: 'ES' }}>
      <Section title={enContent.historia.title}>
        <div className="grid gap-6 sm:grid-cols-2">
          <TextBlock title="Brand narrative" body={enContent.historia.body} />
          <ImageBlock src="/images/bodega/history-placeholder.jpg" alt="Historic archive" caption="Replace with official historical image." />
        </div>
      </Section>
    </PageFrame>
  );
}
