import type { CmsAdapter } from '@/lib/cms/adapter';
import { loadSiteContentFromEnv } from '@/lib/site-content';
import type { SiteContent } from '@/types/site';

export class EnvCmsAdapter implements CmsAdapter {
  async loadSiteContent(): Promise<SiteContent> {
    return loadSiteContentFromEnv();
  }
}
