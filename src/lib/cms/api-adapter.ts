import type { CmsAdapter } from '@/lib/cms/adapter';
import { loadSiteContentFromEnv } from '@/lib/site-content';
import type { SiteContent } from '@/types/site';

export class ApiCmsAdapter implements CmsAdapter {
  async loadSiteContent(): Promise<SiteContent> {
    const apiUrl = process.env.SITE_CONTENT_API_URL;

    if (!apiUrl) {
      return loadSiteContentFromEnv();
    }

    try {
      const response = await fetch(apiUrl, {
        headers: {
          Accept: 'application/json',
          ...(process.env.SITE_CONTENT_API_TOKEN
            ? { Authorization: `Bearer ${process.env.SITE_CONTENT_API_TOKEN}` }
            : {})
        },
        cache: 'no-store'
      });

      if (!response.ok) {
        return loadSiteContentFromEnv();
      }

      const payload = (await response.json()) as Partial<SiteContent>;
      const fallback = await loadSiteContentFromEnv();

      return {
        business: { ...fallback.business, ...payload.business },
        contact: { ...fallback.contact, ...payload.contact },
        seo: { ...fallback.seo, ...payload.seo },
        hero: { ...fallback.hero, ...payload.hero },
        header: { ...fallback.header, ...payload.header },
        footer: { ...fallback.footer, ...payload.footer }
      };
    } catch {
      return loadSiteContentFromEnv();
    }
  }
}
