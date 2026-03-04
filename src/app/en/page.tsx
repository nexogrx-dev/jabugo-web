import { Hero } from '@/components/Hero';
import { ImageBlock } from '@/components/ImageBlock';
import { PageFrame } from '@/components/PageFrame';
import { Section } from '@/components/Section';
import { TextBlock } from '@/components/TextBlock';
import { enContent } from '@/content/en/site';

export default function HomeEnPage() {
  return (
    <PageFrame navItems={enContent.nav} langToggle={{ href: '/', label: 'ES' }}>
      <Hero
        title={enContent.home.title}
        subtitle={enContent.home.subtitle}
        cta={{ href: '/en/carta/', label: enContent.home.cta }}
      />
      <Section title="Our cellar">
        <div className="grid gap-6 sm:grid-cols-2">
          <TextBlock
            eyebrow="Project"
            title="Production-ready website baseline"
            body="Mobile-first structure and language-separated content make editorial updates and technical SEO easy to maintain."
          />
          <ImageBlock src="/images/hero/hero-placeholder.jpg" alt="Cellar interior" caption="Replace with final hero image." />
        </div>
      </Section>
    </PageFrame>
  );
}
