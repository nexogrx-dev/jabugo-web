import type { Metadata } from 'next';
import Script from 'next/script';
import { esContent } from '@/content/es/site';
import { getRestaurantJsonLd } from '@/src/lib/seo';
import '@/styles/globals.css';

export const metadata: Metadata = {
  metadataBase: new URL(esContent.baseUrl),
  title: esContent.defaultTitle,
  description: esContent.defaultDescription,
  openGraph: {
    title: esContent.defaultTitle,
    description: esContent.defaultDescription,
    url: esContent.baseUrl,
    siteName: esContent.siteName,
    locale: 'es_ES',
    type: 'website',
    images: [
      {
        url: '/images/hero/og-placeholder.jpg',
        width: 1200,
        height: 630,
        alt: esContent.siteName,
      },
    ],
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="es">
      <body>
        <Script
          id="jsonld-restaurant"
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(getRestaurantJsonLd(esContent.baseUrl)),
          }}
        />
        {children}
      </body>
    </html>
  );
}
