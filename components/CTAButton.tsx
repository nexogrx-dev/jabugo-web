import Link from 'next/link';

type CTAButtonProps = {
  href: string;
  children: React.ReactNode;
  variant?: 'primary' | 'ghost' | 'text';
};

const styles = {
  primary:
    'inline-flex items-center justify-center min-h-[48px] bg-brand-500 px-6 py-3 text-sm font-bold uppercase tracking-[0.12em] text-brand-50 hover:bg-brand-900 transition-colors',
  ghost:
    'inline-flex items-center justify-center min-h-[48px] border border-brand-500 px-6 py-3 text-sm font-bold uppercase tracking-[0.12em] text-brand-500 hover:bg-brand-100 transition-colors',
  text:
    'inline-flex items-center gap-1 min-h-[48px] px-0 py-3 text-sm font-semibold text-brand-500 underline-offset-4 hover:underline hover:text-brand-900 transition-colors',
};

export function CTAButton({ href, children, variant = 'primary' }: CTAButtonProps) {
  return (
    <Link href={href} className={styles[variant]}>
      {children}
      {variant === 'text' && <span aria-hidden="true"> →</span>}
    </Link>
  );
}
