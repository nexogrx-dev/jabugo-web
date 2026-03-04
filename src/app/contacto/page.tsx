import type { Metadata } from 'next';
import { PageFrame } from '@/components/PageFrame';
import { Section } from '@/components/Section';
import { TextBlock } from '@/components/TextBlock';
import { esContent } from '@/content/es/site';
import { buildPageMetadata } from '@/src/lib/seo';

export const metadata: Metadata = buildPageMetadata({
  title: `Contacto | ${esContent.siteName}`,
  description: esContent.contacto.body,
  url: '/contacto/',
});

export default function ContactoPage() {
  return (
    <PageFrame navItems={esContent.nav} langToggle={{ href: '/en/contact/', label: 'EN' }}>
      <Section title={esContent.contacto.title}>
        <div className="space-y-4">
          <TextBlock title="Canales de contacto" body={esContent.contacto.body} />
          <p className="text-sm text-brand-700">{esContent.contacto.phonePlaceholder}</p>
          <p className="text-sm text-brand-700">{esContent.contacto.hoursPlaceholder}</p>
        </div>
      </Section>
    </PageFrame>
  );
}
