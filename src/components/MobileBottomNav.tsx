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
    <nav className="fixed bottom-0 left-0 right-0 z-30 border-t border-brand-100 bg-white/95 p-2 backdrop-blur sm:hidden">
      <ul className="grid grid-cols-3 gap-1">
        {items.slice(0, 6).map((item) => (
          <li key={item.href}>
            <Link href={item.href} className="block rounded-lg px-2 py-3 text-center text-xs font-medium text-brand-700 hover:bg-brand-50">
              {item.label}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
