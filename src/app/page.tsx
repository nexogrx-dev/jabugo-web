import type { Metadata } from 'next';
import { Hero } from '@/components/Hero';
import { ImageBlock } from '@/components/ImageBlock';
import { CTAButton } from '@/components/CTAButton';
import { PageFrame } from '@/components/PageFrame';
import { Section } from '@/components/Section';
import { TextBlock } from '@/components/TextBlock';
import { esContent } from '@/content/es/site';
import homeContent from '@/src/content/es/home.json';
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

export default function HomePage() {
  return (
    <PageFrame
      navItems={esContent.nav}
      mobileNavItems={mobileNavItems}
      langToggle={{ href: '/en/', label: 'EN' }}
    >
      {/* SECTION 1 — HERO */}
      <Hero
        title={homeContent.hero.title}
        subtitle={homeContent.hero.subtitle}
        location={homeContent.hero.location}
        ctas={homeContent.hero.ctas}
      />

      {/* SECTION 2 — CONTENIDO HOME */}
      {homeContent.sections.map((section) => (
        <Section key={section.id} id={section.id} title={section.title}>
          <div className="flex flex-col gap-6">
            <TextBlock
              title={section.title}
              paragraphs={section.paragraphs}
              quote={section.quote}
            />
            {section.image?.src ? (
              <ImageBlock
                src={`/images/${section.image.src}`}
                alt={section.image.alt}
              />
            ) : null}
            {section.cta?.href ? (
              <CTAButton href={section.cta.href}>{section.cta.label}</CTAButton>
            ) : null}
          </div>
        </Section>
      ))}

      {/* SECTION 4 — CONTACT / RESERVAS CTA */}
      <Section id="contacto" title={contactoContent.sections[0].title}>
        <div className="flex flex-col gap-3">
          {contactoContent.hero.ctas.map((cta) => (
            <CTAButton key={cta.label} href={cta.href}>{cta.label}</CTAButton>
          ))}
        </div>
      </Section>
    </PageFrame>
  );
}
