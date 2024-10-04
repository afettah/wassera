import type { MetadataRoute } from 'next';

const staticPages = ['/', '/about', '/contact', '/services'];
const locales = ['en', 'ar'];
const baseUrl = 'http://waseera.sa';

export default function sitemap(): MetadataRoute.Sitemap {
  return staticPages
    .map((page) => 
      locales.map((locale) => ({
        url: `${baseUrl}/${locale}${page === '/' ? '' : page}`,
        lastModified: new Date(),
        changeFrequency: 'daily' as const,
        priority: 0.8,
      }))
    )
    .flat();
}
