import Link from 'next/link';

type CTAButtonProps = {
  href: string;
  children: React.ReactNode;
};

export function CTAButton({ href, children }: CTAButtonProps) {
  return (
    <Link
      href={href}
      className="inline-flex items-center justify-center rounded-full bg-brand-700 px-6 py-3 min-h-[48px] text-sm font-semibold text-white shadow-card hover:bg-brand-500"
    >
      {children}
    </Link>
  );
}
