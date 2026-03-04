import Link from 'next/link';

type NavItem = {
  href: string;
  label: string;
};

type MobileBottomNavProps = {
  items: readonly NavItem[];
};

export function MobileBottomNav({ items }: MobileBottomNavProps) {
  return (
    <nav className="fixed bottom-0 left-0 right-0 z-30 border-t border-brand-200 bg-brand-50/96 backdrop-blur sm:hidden">
      <ul className="grid gap-0" style={{ gridTemplateColumns: `repeat(${Math.min(items.length, 5)}, 1fr)` }}>
        {items.slice(0, 5).map((item) => (
          <li key={item.href}>
            <Link
              href={item.href}
              className="flex min-h-[52px] flex-col items-center justify-center px-1 py-3 text-[10px] font-bold uppercase tracking-[0.1em] text-brand-700 hover:text-brand-900 hover:bg-brand-100 transition-colors"
            >
              {item.label}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
