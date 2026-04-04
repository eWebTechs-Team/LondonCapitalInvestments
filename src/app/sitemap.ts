import type { MetadataRoute } from 'next';
import { blogPosts } from '@/data/posts';
import { properties } from '@/data/properties';

const baseUrl = 'https://www.londoncapitalinvestments.co.uk';

export default function sitemap(): MetadataRoute.Sitemap {
  const staticPages = ['', '/about', '/property-services', '/recruitment-services', '/fashion-services', '/properties', '/insights', '/contact', '/book-consultation'];

  const staticEntries = staticPages.map((path) => ({
    url: `${baseUrl}${path}`,
    lastModified: new Date()
  }));

  const propertyEntries = properties.map((property) => ({
    url: `${baseUrl}/properties/${property.slug}`,
    lastModified: new Date()
  }));

  const insightEntries = blogPosts.map((post) => ({
    url: `${baseUrl}/insights/${post.slug}`,
    lastModified: new Date(post.publishedAt)
  }));

  return [...staticEntries, ...propertyEntries, ...insightEntries];
}
