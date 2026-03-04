import type { Metadata } from 'next';
import { CTAButton } from '@/components/CTAButton';
import { ImageBlock } from '@/components/ImageBlock';
import { PageFrame } from '@/components/PageFrame';
import { Section } from '@/components/Section';
import { TextBlock } from '@/components/TextBlock';
import { enContent } from '@/content/en/site';
import historiaContent from '@/src/content/en/historia.json';
import { buildPageMetadata } from '@/src/lib/seo';

export const metadata: Metadata = buildPageMetadata({
  title: historiaContent.meta.title,
  description: historiaContent.meta.description,
  url: '/en/historia/',
});

export default function HistoriaEnPage() {
  return (
    <PageFrame navItems={enContent.nav} langToggle={{ href: '/historia/', label: 'ES' }}>
      {historiaContent.sections.map((section) => (
        <Section key={section.id} id={section.id} title={section.title}>
          <div className="flex flex-col gap-6 sm:grid sm:grid-cols-2">
            <TextBlock
              title={section.title}
              paragraphs={section.paragraphs}
              quote={section.quote}
            />
            {section.image?.src ? (
              <ImageBlock src={`/images/${section.image.src}`} alt={section.image.alt} />
            ) : null}
            {section.cta?.href ? (
              <CTAButton href={section.cta.href}>{section.cta.label}</CTAButton>
            ) : null}
          </div>
        </Section>
      ))}
    </PageFrame>
  );
}
