import { CTAButton } from '@/components/CTAButton';
import { Hero } from '@/components/Hero';
import { PageFrame } from '@/components/PageFrame';
import { TextBlock } from '@/components/TextBlock';
import { enContent } from '@/content/en/site';
import homeContent from '@/src/content/en/home.json';
import historiaContent from '@/src/content/en/historia.json';
import culturaContent from '@/src/content/en/cultura-iberico.json';
import contactoContent from '@/src/content/en/contacto.json';

const Divider = () => (
  <div className="bodega-divider" aria-hidden="true">
    <span className="text-[10px] text-brand-500 leading-none select-none">◆</span>
  </div>
);

const mobileNavItems = [
  { href: '/en/', label: 'Home' },
  { href: '/en/carta/', label: 'Menu' },
  { href: homeContent.hero.ctas[0].href, label: 'Book' },
  { href: homeContent.hero.ctas[2].href, label: 'Location' },
  { href: homeContent.hero.ctas[1].href, label: 'Call' },
] as const;

const heroCtas = [
  homeContent.hero.ctas[0],
  homeContent.hero.ctas[2],
  homeContent.hero.ctas[1],
] as const;

export default function HomeEnPage() {
  const bodega = homeContent.sections[0];
  const productoSection = homeContent.sections[1];

  return (
    <PageFrame
      navItems={enContent.nav}
      mobileNavItems={mobileNavItems}
      langToggle={{ href: '/', label: 'ES' }}
    >
      <Hero
        title={homeContent.hero.title}
        subtitle={homeContent.hero.subtitle}
        location={homeContent.hero.location}
        ctas={heroCtas}
      />

      <section className="mx-auto w-full max-w-[375px] px-4 py-12">
        <p className="stamp-label mb-3">{bodega.id.replace(/-/g, ' ')}</p>
        <TextBlock title={bodega.title} paragraphs={bodega.paragraphs} quote={bodega.quote} />
        {bodega.cta?.href && (
          <div className="mt-8">
            <CTAButton href={bodega.cta.href} variant="primary">{bodega.cta.label}</CTAButton>
          </div>
        )}
      </section>

      <Divider />

      <section className="mx-auto w-full max-w-[375px] px-4 py-10">
        <p className="stamp-label mb-3">Iberian culture</p>
        <h2 className="font-serif text-2xl font-black text-brand-900 mb-5">{productoSection.title}</h2>
        <ul className="space-y-3 mb-6">
          {culturaContent.sections.map((s) => (
            <li key={s.id} className="flex items-start gap-3 text-sm text-brand-700">
              <span className="mt-[5px] shrink-0 text-brand-500 text-[10px]">◆</span>
              <span>{s.title}</span>
            </li>
          ))}
        </ul>
        {productoSection.cta?.href && (
          <CTAButton href={productoSection.cta.href} variant="ghost">{productoSection.cta.label}</CTAButton>
        )}
      </section>

      <Divider />

      <section className="mx-auto w-full max-w-[375px] px-4 py-10">
        <p className="stamp-label mb-3">History</p>
        <h2 className="font-serif text-2xl font-black text-brand-900 mb-4">{historiaContent.sections[0].title}</h2>
        <p className="text-sm leading-7 text-brand-700">{historiaContent.sections[0].paragraphs[0]}</p>
        {historiaContent.sections[0].quote && (
          <blockquote className="pull-quote mt-5">
            <p>&ldquo;{historiaContent.sections[0].quote.text}&rdquo;</p>
            <cite>— {historiaContent.sections[0].quote.author}</cite>
          </blockquote>
        )}
        <div className="mt-8">
          <CTAButton href={historiaContent.sections[0].cta.href} variant="primary">
            {historiaContent.sections[0].cta.label}
          </CTAButton>
        </div>
      </section>

      <Divider />

      <section className="mx-auto w-full max-w-[375px] px-4 py-10 bg-brand-100">
        <p className="stamp-label mb-3">{contactoContent.sections[0].title}</p>
        <p className="text-[13px] text-brand-700 mb-6 leading-6">{contactoContent.sections[0].paragraphs[0]}</p>
        <div className="flex flex-col gap-3">
          {contactoContent.hero.ctas.map((cta) => (
            <CTAButton key={cta.label} href={cta.href} variant="primary">{cta.label}</CTAButton>
          ))}
        </div>
      </section>
    </PageFrame>
  );
}
