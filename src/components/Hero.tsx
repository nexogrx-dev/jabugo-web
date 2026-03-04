import Image from 'next/image';
import { CTAButton } from './CTAButton';

type CTA = {
  href: string;
  label: string;
};

type HeroProps = {
  title: string;
  subtitle: string;
  location?: string;
  cta?: CTA;
  ctas?: readonly CTA[];
  imageSrc?: string;
  imageAlt?: string;
};

export function Hero({ title, subtitle, location, cta, ctas, imageSrc, imageAlt }: HeroProps) {
  const buttons = ctas ?? (cta ? [cta] : []);

  return (
    <section className="relative overflow-hidden bg-grain-gradient" style={{ minHeight: '70vh' }}>
      {imageSrc && (
        <Image
          src={imageSrc}
          alt={imageAlt ?? ''}
          fill
          className="object-cover opacity-40"
          priority
        />
      )}
      <div className="relative mx-auto flex min-h-[70vh] max-w-[375px] flex-col justify-end px-4 pb-14 pt-20">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-brand-700">Jabugo Bodega</p>
        <h1 className="mt-4 text-4xl font-black leading-tight text-brand-900">{title}</h1>
        <p className="mt-4 text-sm leading-7 text-brand-700">{subtitle}</p>
        {location && <p className="mt-2 text-xs text-brand-500">{location}</p>}
        {buttons.length > 0 && (
          <div className="mt-8 flex flex-col gap-3">
            {buttons.map((btn) => (
              <CTAButton key={btn.label} href={btn.href}>{btn.label}</CTAButton>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
