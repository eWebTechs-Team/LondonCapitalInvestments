import type { MetadataRoute } from 'next';
import { blogPosts } from '@/data/posts';
import { properties } from '@/data/properties';
import { loadSiteContent } from '@/lib/site-config';

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const site = await loadSiteContent();

  const staticPages = ['', '/about', '/property-services', '/recruitment-services', '/fashion-services', '/properties', '/insights', '/contact', '/book-consultation'];

  const staticEntries = staticPages.map((path) => ({
    url: `${site.seo.siteUrl}${path}`,
    lastModified: new Date()
  }));

  const propertyEntries = properties.map((property) => ({
    url: `${site.seo.siteUrl}/properties/${property.slug}`,
    lastModified: new Date()
  }));

  const insightEntries = blogPosts.map((post) => ({
    url: `${site.seo.siteUrl}/insights/${post.slug}`,
    lastModified: new Date(post.publishedAt)
  }));

  return [...staticEntries, ...propertyEntries, ...insightEntries];
}
