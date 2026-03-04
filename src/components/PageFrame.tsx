import Link from 'next/link';
import { MobileBottomNav } from './MobileBottomNav';

type NavItem = {
  href: string;
  label: string;
};

type PageFrameProps = {
  navItems: readonly NavItem[];
  mobileNavItems?: readonly NavItem[];
  langToggle: {
    href: string;
    label: string;
  };
  children: React.ReactNode;
};

export function PageFrame({ navItems, mobileNavItems, langToggle, children }: PageFrameProps) {
  return (
    <>
      <header className="sticky top-0 z-20 border-b border-brand-100 bg-brand-50/95 backdrop-blur">
        <div className="mx-auto flex w-full max-w-5xl items-center justify-between px-4 py-4 sm:px-6">
          <Link href="/" className="text-sm font-black uppercase tracking-[0.18em] text-brand-900">
            Jabugo Bodega
          </Link>
          <div className="flex items-center gap-4">
            <nav className="hidden gap-4 sm:flex">
              {navItems.map((item) => (
                <Link key={item.href} href={item.href} className="text-sm text-brand-700 hover:text-brand-900">
                  {item.label}
                </Link>
              ))}
            </nav>
            <Link href={langToggle.href} className="rounded-full border border-brand-300 px-3 py-1 text-xs font-semibold text-brand-700 hover:bg-brand-100">
              {langToggle.label}
            </Link>
          </div>
        </div>
      </header>
      <main className="pb-20 sm:pb-0">{children}</main>
      <MobileBottomNav items={mobileNavItems ?? navItems} />
    </>
  );
}
