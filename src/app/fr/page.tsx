import { CTAButton } from '@/components/CTAButton';
import { Hero } from '@/components/Hero';
import { ImageBlock } from '@/components/ImageBlock';
import { PageFrame } from '@/components/PageFrame';
import { Section } from '@/components/Section';
import { TextBlock } from '@/components/TextBlock';
import { enContent } from '@/content/en/site';
import homeContent from '@/src/content/fr/home.json';
import contactoContent from '@/src/content/fr/contacto.json';

const frNav = [
  { href: '/fr/', label: enContent.nav[0].label },
  { href: '/fr/historia/', label: enContent.nav[2].label },
  { href: '/fr/culture-of-iberico/', label: enContent.nav[3].label },
  { href: '/fr/contact/', label: enContent.nav[4].label },
] as const;

export default function HomeFrPage() {
  return (
    <PageFrame navItems={frNav} langToggle={{ href: '/', label: 'ES' }}>
      <Hero
        title={homeContent.hero.title}
        subtitle={homeContent.hero.subtitle}
        location={homeContent.hero.location}
        ctas={homeContent.hero.ctas}
      />
      {homeContent.sections.map((section) => (
        <Section key={section.id} id={section.id} title={section.title}>
          <div className="flex flex-col gap-6">
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
      <Section id="contact" title={contactoContent.sections[0]?.title ?? ''}>
        <div className="flex flex-col gap-3">
          {contactoContent.hero.ctas.map((cta) => (
            <CTAButton key={cta.label} href={cta.href}>{cta.label}</CTAButton>
          ))}
        </div>
      </Section>
    </PageFrame>
  );
}
