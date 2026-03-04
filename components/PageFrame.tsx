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
      <header className="sticky top-0 z-20 border-b border-brand-200 bg-brand-50/96 backdrop-blur">
        <div className="mx-auto flex w-full max-w-[375px] items-center justify-between px-4 py-4">
          <Link href="/" className="font-serif text-sm font-black uppercase tracking-[0.18em] text-brand-900">
            Jabugo Bodega
          </Link>
          <div className="flex items-center gap-4">
            <nav className="hidden gap-5 sm:flex">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="text-xs font-semibold uppercase tracking-[0.1em] text-brand-700 hover:text-brand-900"
                >
                  {item.label}
                </Link>
              ))}
            </nav>
            <Link
              href={langToggle.href}
              className="text-[11px] font-bold uppercase tracking-[0.2em] text-brand-500 border border-brand-200 px-2 py-1 hover:bg-brand-100 transition-colors"
            >
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
