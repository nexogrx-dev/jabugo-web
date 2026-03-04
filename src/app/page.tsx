import type { Metadata } from 'next';
import Link from 'next/link';
import { CTAButton } from '@/components/CTAButton';
import { Hero } from '@/components/Hero';
import { PageFrame } from '@/components/PageFrame';
import { Section } from '@/components/Section';
import { TextBlock } from '@/components/TextBlock';
import { esContent } from '@/content/es/site';
import homeContent from '@/src/content/es/home.json';
import historiaContent from '@/src/content/es/historia.json';
import culturaContent from '@/src/content/es/cultura-iberico.json';
import contactoContent from '@/src/content/es/contacto.json';
import { buildPageMetadata } from '@/src/lib/seo';

export const metadata: Metadata = buildPageMetadata({
  title: homeContent.meta.title,
  description: homeContent.meta.description,
  url: '/',
});

const mobileNavItems = [
  { href: '/', label: 'Inicio' },
  { href: '/carta/', label: 'Carta' },
  { href: homeContent.hero.ctas[0].href, label: 'Reservar' },
  { href: homeContent.hero.ctas[2].href, label: 'Ubicación' },
  { href: homeContent.hero.ctas[1].href, label: 'Llamar' },
] as const;

const heroCtas = [
  homeContent.hero.ctas[0],
  homeContent.hero.ctas[2],
  homeContent.hero.ctas[1],
] as const;

export default function HomePage() {
  const propuesta = homeContent.sections.find((section) => section.id === 'propuesta');
  const producto = homeContent.sections.find((section) => section.id === 'producto');
  const cultura = culturaContent.sections[0];
  const historia = historiaContent.sections[0];

  return (
    <PageFrame
      navItems={esContent.nav}
      mobileNavItems={mobileNavItems}
      langToggle={{ href: '/en/', label: 'EN' }}
    >
      {/* HERO */}
      <Hero
        eyebrow={homeContent.hero.eyebrow}
        title={homeContent.hero.title}
        subtitle={homeContent.hero.subtitle}
        location={homeContent.hero.meta}
        quote={homeContent.hero.quote}
        ctas={heroCtas}
      />

      {/* PROPUESTA — CENTERED EDITORIAL */}
      {propuesta && (
        <Section id={propuesta.id} title={propuesta.title}>
          <div className="mx-auto max-w-prose text-center">
            <TextBlock
              title={propuesta.title}
              paragraphs={propuesta.paragraphs}
              quote={propuesta.quote}
            />
          </div>
        </Section>
      )}

      {/* PRODUCTO — LISTA */}
      {producto && (
        <Section id={producto.id} title={producto.title} label={producto.eyebrow}>
          <div className="mx-auto max-w-prose space-y-6">
            <p>{producto.paragraphs?.[0] ?? ''}</p>
            {producto.points ? (
              <ul className="space-y-2 list-disc pl-5">
                {producto.points.map((point) => (
                  <li key={point}>{point}</li>
                ))}
              </ul>
            ) : null}
          </div>
        </Section>
      )}

      {/* CULTURA DEL IBÉRICO — LISTA + CTA TEXTO */}
      {cultura && (
        <Section id="cultura" title={cultura.title}>
          <div className="mx-auto max-w-prose space-y-6">
            {cultura.paragraphs ? (
              <ul className="space-y-2 list-disc pl-5">
                {cultura.paragraphs.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            ) : null}
            {cultura.cta?.href ? (
              <Link href={cultura.cta.href} className="text-sm font-semibold text-brand-700 underline">
                {cultura.cta.label}
              </Link>
            ) : null}
          </div>
        </Section>
      )}

      {/* HISTORIA — ENFOQUE EN CITA */}
      {historia && (
        <Section id="historia" title={historia.title}>
          <div className="mx-auto max-w-prose space-y-6">
            {historia.quote ? (
              <blockquote className="pull-quote">
                <p>&ldquo;{historia.quote.text}&rdquo;</p>
                <cite>— {historia.quote.author}</cite>
              </blockquote>
            ) : null}
            {historia.paragraphs?.[0] ? (
              <p>{historia.paragraphs[0]}</p>
            ) : null}
          </div>
        </Section>
      )}

      {/* CONTACTO — LOCALIZACION */}
      <Section id="contacto" title={contactoContent.sections[0]?.title ?? ''}>
        <div className="mx-auto max-w-prose space-y-6">
          <p>{contactoContent.sections[0]?.paragraphs?.[0] ?? ''}</p>
          <div className="flex flex-col gap-3">
            {contactoContent.hero.ctas.map((cta) => (
              <CTAButton key={cta.label} href={cta.href}>
                {cta.label}
              </CTAButton>
            ))}
          </div>
        </div>
      </Section>
    </PageFrame>
  );
}
