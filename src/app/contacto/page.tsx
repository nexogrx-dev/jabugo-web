import type { Metadata } from 'next';
import { CTAButton } from '@/components/CTAButton';
import { PageFrame } from '@/components/PageFrame';
import { TextBlock } from '@/components/TextBlock';
import { esContent } from '@/content/es/site';
import contactoContent from '@/src/content/es/contacto.json';
import { buildPageMetadata } from '@/src/lib/seo';

export const metadata: Metadata = buildPageMetadata({
  title: contactoContent.meta.title,
  description: contactoContent.meta.description,
  url: '/contacto/',
});

const Divider = () => (
  <div className="bodega-divider" aria-hidden="true">
    <span className="text-[10px] text-brand-500 leading-none select-none">◆</span>
  </div>
);

export default function ContactoPage() {
  return (
    <PageFrame navItems={esContent.nav} langToggle={{ href: '/en/contact/', label: 'EN' }}>
      {/* Address-block header */}
      <header className="mx-auto w-full max-w-[375px] px-4 pt-12 pb-2 bg-brand-100">
        <p className="stamp-label mb-2">Contacto</p>
        <p className="font-serif text-2xl font-black text-brand-900">Jabugo Bodega</p>
        <p className="mt-1 text-[13px] text-brand-500 tracking-[0.08em]">
          {contactoContent.hero.location}
        </p>
        <div className="mt-6 flex flex-col gap-3 pb-10">
          {contactoContent.hero.ctas.map((cta, idx) => (
            <CTAButton
              key={cta.label}
              href={cta.href}
              variant={idx === 0 ? 'primary' : 'ghost'}
            >
              {cta.label}
            </CTAButton>
          ))}
        </div>
        <Divider />
      </header>

      {contactoContent.sections.map((section, idx) => (
        <div key={section.id}>
          <section id={section.id} className="mx-auto w-full max-w-[375px] px-4 py-10">
            <TextBlock
              title={section.title}
              paragraphs={section.paragraphs}
              quote={section.quote}
            />
          </section>
          {idx < contactoContent.sections.length - 1 && <Divider />}
        </div>
      ))}
    </PageFrame>
  );
}
