import type { MetadataRoute } from 'next';
import { getSiteUrl } from '@/src/lib/seo';

export const dynamic = 'force-static';

export default function sitemap(): MetadataRoute.Sitemap {
  const siteUrl = getSiteUrl();

  return [
    { url: `${siteUrl}/`, changeFrequency: 'weekly', priority: 1 },
    { url: `${siteUrl}/historia/`, changeFrequency: 'weekly', priority: 0.8 },
    { url: `${siteUrl}/cultura-iberico/`, changeFrequency: 'weekly', priority: 0.8 },
    { url: `${siteUrl}/contacto/`, changeFrequency: 'weekly', priority: 0.8 },
  ];
}
