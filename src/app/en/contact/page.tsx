import type { Metadata } from 'next';
import { PageFrame } from '@/components/PageFrame';
import { Section } from '@/components/Section';
import { TextBlock } from '@/components/TextBlock';
import { enContent } from '@/content/en/site';
import { buildPageMetadata } from '@/src/lib/seo';

export const metadata: Metadata = buildPageMetadata({
  title: `Contact | ${enContent.siteName}`,
  description: enContent.contacto.body,
  url: '/en/contact/',
});

export default function ContactEnPage() {
  return (
    <PageFrame navItems={enContent.nav} langToggle={{ href: '/contacto/', label: 'ES' }}>
      <Section title={enContent.contacto.title}>
        <div className="space-y-4">
          <TextBlock title="Contact channels" body={enContent.contacto.body} />
          <p className="text-sm text-brand-700">{enContent.contacto.phonePlaceholder}</p>
          <p className="text-sm text-brand-700">{enContent.contacto.hoursPlaceholder}</p>
        </div>
      </Section>
    </PageFrame>
  );
}
