import type { Metadata } from 'next';
import { CTAButton } from '@/components/CTAButton';
import { PageFrame } from '@/components/PageFrame';
import { TextBlock } from '@/components/TextBlock';
import { esContent } from '@/content/es/site';
import culturaIbericoContent from '@/src/content/es/cultura-iberico.json';
import { buildPageMetadata } from '@/src/lib/seo';

export const metadata: Metadata = buildPageMetadata({
  title: culturaIbericoContent.meta.title,
  description: culturaIbericoContent.meta.description,
  url: '/cultura-iberico/',
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

export default function CulturaPage() {
  return (
    <PageFrame navItems={esContent.nav} langToggle={{ href: '/en/culture-of-iberico/', label: 'EN' }}>
      <PageHeader
        label="Guía del ibérico"
        title="Cultura del ibérico"
        description={culturaIbericoContent.meta.description}
      />

      {/* Index */}
      <nav className="mx-auto w-full max-w-[375px] px-4 pb-4" aria-label="Índice">
        <ol className="space-y-2">
          {culturaIbericoContent.sections.map((s, i) => (
            <li key={s.id}>
              <a
                href={`#${s.id}`}
                className="flex items-center gap-3 text-sm font-semibold text-brand-700 hover:text-brand-900 transition-colors"
              >
                <span className="stamp-label text-brand-500 w-5 shrink-0">{'0' + (i + 1)}</span>
                <span>{s.title}</span>
              </a>
            </li>
          ))}
        </ol>
      </nav>

      <Divider />

      {culturaIbericoContent.sections.map((section, idx) => (
        <div key={section.id}>
          <section id={section.id} className="mx-auto w-full max-w-[375px] px-4 py-10">
            <p className="stamp-label mb-3">{'0' + (idx + 1)}</p>
            <TextBlock
              title={section.title}
              paragraphs={section.paragraphs}
              quote={section.quote}
            />
            {section.cta?.href && (
              <div className="mt-8">
                <CTAButton href={section.cta.href} variant="ghost">
                  {section.cta.label}
                </CTAButton>
              </div>
            )}
          </section>
          {idx < culturaIbericoContent.sections.length - 1 && <Divider />}
        </div>
      ))}
    </PageFrame>
  );
}
