export const enContent = {
  locale: 'en',
  siteName: 'Jabugo Bodega',
  baseUrl: 'https://example.com',
  defaultTitle: 'Jabugo Bodega | Origin, craft and Iberian culture',
  defaultDescription:
    'Base website project for Jabugo Bodega. Structured content ready for official copy updates.',
  nav: [
    { href: '/en/', label: 'Home' },
    { href: '/en/carta/', label: 'Menu' },
    { href: '/en/historia/', label: 'History' },
    { href: '/en/culture-of-iberico/', label: 'Iberico culture' },
    { href: '/en/contact/', label: 'Contact' },
    { href: '/en/legal/', label: 'Legal' },
  ],
  home: {
    title: 'Jabugo Bodega',
    subtitle: 'Hospitality built around Iberico heritage, place and craft.',
    cta: 'View menu',
  },
  carta: {
    title: 'Menu',
    body: 'Content pending approval. Add official details once validated.',
  },
  historia: {
    title: 'History',
    body: 'Reserved area for the official Jabugo Bodega story.',
  },
  cultura: {
    title: 'Iberico culture',
    body: 'Editorial area to explain origin, curing and Iberico culture.',
  },
  contacto: {
    title: 'Contact',
    body: 'Contact details are pending. Do not publish phone or opening hours before approval.',
    phonePlaceholder: 'Phone: pending',
    hoursPlaceholder: 'Opening hours: pending',
  },
  legal: {
    title: 'Legal',
    body: 'Legal notice, privacy and cookies pending final legal text.',
  },
} as const;
