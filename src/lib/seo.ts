import type { Metadata } from 'next';

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

export function getRestaurantJsonLd(baseUrl: string) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Restaurant',
    name: 'Jabugo Bodega',
    url: baseUrl,
    image: `${baseUrl}/images/hero/og-placeholder.jpg`,
    telephone: 'PENDING',
    servesCuisine: 'Iberico',
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'PENDING',
      addressLocality: 'PENDING',
      postalCode: 'PENDING',
      addressCountry: 'ES',
    },
    openingHours: 'PENDING',
    priceRange: 'PENDING',
  };
}
