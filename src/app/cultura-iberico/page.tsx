import type { Metadata } from 'next';
import CulturaPage from '@/src/app/cultura-del-iberico/page';
import culturaIbericoContent from '@/src/content/es/cultura-iberico.json';
import { buildPageMetadata } from '@/src/lib/seo';

export const metadata: Metadata = buildPageMetadata({
  title: culturaIbericoContent.meta.title,
  description: culturaIbericoContent.meta.description,
  url: '/cultura-iberico/',
});

export default CulturaPage;
