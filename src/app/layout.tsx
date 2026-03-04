import type { Metadata } from 'next';
import Script from 'next/script';
import { esContent } from '@/content/es/site';
import { getLocalBusinessJsonLd, getSiteUrl, getWebSiteJsonLd } from '@/src/lib/seo';
import '@/styles/globals.css';

const siteUrl = getSiteUrl();

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
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
          id="jsonld-localbusiness"
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(getLocalBusinessJsonLd(siteUrl)),
          }}
        />
        <Script
          id="jsonld-website"
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(getWebSiteJsonLd(siteUrl)),
          }}
        />
        {children}
      </body>
    </html>
  );
}
