import type { Metadata } from 'next';

export function getSiteUrl() {
  return process.env.NEXT_PUBLIC_SITE_URL || 'https://jabugo-web.pages.dev';
}

export function buildPageMetadata({
  title,
  description,
  url,
}: {
  title: string;
  description: string;
  url: string;
}): Metadata {
  return {
    title,
    description,
    openGraph: {
      title,
      description,
      url,
      siteName: 'Jabugo Bodega',
      locale: 'es_ES',
      type: 'website',
      images: [
        {
          url: '/images/hero/og-placeholder.jpg',
          width: 1200,
          height: 630,
          alt: 'Jabugo Bodega',
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: ['/images/hero/og-placeholder.jpg'],
    },
  };
}

export function getLocalBusinessJsonLd(baseUrl: string) {
  return {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    name: 'Jabugo Bodega',
    url: baseUrl,
    image: `${baseUrl}/images/hero/og-placeholder.jpg`,
    description:
      'Bodega especializada en ibericos de alta gama en Calle Socrates 13, Granada.',
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'Calle Socrates 13',
      addressLocality: 'Granada',
      postalCode: '18002',
      addressCountry: 'ES',
    },
  };
}

export function getWebSiteJsonLd(baseUrl: string) {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: 'Jabugo Bodega',
    url: baseUrl,
    inLanguage: 'es-ES',
  };
}
