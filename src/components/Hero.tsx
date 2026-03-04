import { CTAButton } from './CTAButton';
import { BodegaDivider } from './BodegaDivider';

type CTA = {
  href: string;
  label: string;
};

type HeroProps = {
  eyebrow?: string;
  title: string;
  subtitle: string;
  location?: string;
  quote?: string;
  cta?: CTA;
  ctas?: readonly CTA[];
};

export function Hero({ eyebrow, title, subtitle, location, quote, cta, ctas }: HeroProps) {
  // Normalise to array; cap at 3 for the 2-primary + 1-text-link pattern
  const buttons = ctas ?? (cta ? [cta] : []);
  const [primary, secondary, textLink] = buttons;

  return (
    <section className="bg-grain-gradient min-h-[70vh] flex flex-col justify-between">
      {/* Top stamp bar */}
      <div className="mx-auto w-full max-w-[375px] px-4 pt-12">
        <p className="stamp-label">{eyebrow ?? 'Bodega · Granada'}</p>
      </div>

      {/* Main type stack */}
      <div className="mx-auto w-full max-w-[375px] px-4 py-10">
        <h1 className="font-serif text-[3rem] sm:text-[3.25rem] font-black leading-[1.05] tracking-[-0.01em] text-brand-900">
          {title}
        </h1>
        <div className="mt-3 space-y-1 leading-tight">
          <p className="text-base font-semibold text-brand-700 tracking-wide">{subtitle}</p>
          {location && (
            <p className="text-[13px] text-brand-500 tracking-[0.08em]">{location}</p>
          )}
        </div>
        {quote && (
          <blockquote className="mt-6 border-l border-brand-200 pl-4">
            <p className="text-sm italic text-brand-700 leading-6">&ldquo;{quote}&rdquo;</p>
            <p className="mt-1 text-[12px] text-brand-500">— Nicolás</p>
          </blockquote>
        )}

        {/* CTAs — 2 buttons + 1 text link */}
        <div className="mt-8 flex flex-col gap-3">
          {primary && <CTAButton href={primary.href} variant="primary">{primary.label}</CTAButton>}
          {secondary && <CTAButton href={secondary.href} variant="ghost">{secondary.label}</CTAButton>}
          {textLink && <CTAButton href={textLink.href} variant="text">{textLink.label}</CTAButton>}
        </div>
      </div>

      {/* Signature divider at bottom */}
      <BodegaDivider />
    </section>
  );
}
