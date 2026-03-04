import type { Metadata } from 'next';
import { CTAButton } from '@/components/CTAButton';
import { PageFrame } from '@/components/PageFrame';
import { TextBlock } from '@/components/TextBlock';
import { esContent } from '@/content/es/site';
import historiaContent from '@/src/content/es/historia.json';
import { buildPageMetadata } from '@/src/lib/seo';

export const metadata: Metadata = buildPageMetadata({
  title: historiaContent.meta.title,
  description: historiaContent.meta.description,
  url: '/historia/',
});

const Divider = () => (
  <div className="bodega-divider" aria-hidden="true">
    <span className="text-[10px] text-brand-500 leading-none select-none">◆</span>
  </div>
);

function PageHeader({ label, title, description }: { label: string; title: string; description?: string }) {
  return (
    <header className="mx-auto w-full max-w-[375px] px-4 pt-12 pb-2">
      <p className="stamp-label">{label}</p>
      <h1 className="mt-2 font-serif text-[2.25rem] font-black leading-[1.1] text-brand-900">
        {title}
      </h1>
      {description && (
        <p className="mt-3 text-sm leading-6 text-brand-700">{description}</p>
      )}
      <Divider />
    </header>
  );
}

export default function HistoriaPage() {
  return (
    <PageFrame navItems={esContent.nav} langToggle={{ href: '/en/historia/', label: 'EN' }}>
      <PageHeader
        label="Historia"
        title={historiaContent.sections[0].title}
        description={historiaContent.meta.description}
      />
      {historiaContent.sections.map((section, idx) => (
        <div key={section.id}>
          <section id={section.id} className="mx-auto w-full max-w-[375px] px-4 py-10">
            {idx > 0 && <p className="stamp-label mb-3">{'0' + (idx + 1)}</p>}
            <TextBlock
              title={idx > 0 ? section.title : undefined}
              paragraphs={section.paragraphs}
              quote={section.quote}
            />
            {section.cta?.href && (
              <div className="mt-8">
                <CTAButton href={section.cta.href} variant="primary">
                  {section.cta.label}
                </CTAButton>
              </div>
            )}
          </section>
          {idx < historiaContent.sections.length - 1 && <Divider />}
        </div>
      ))}
    </PageFrame>
  );
}
