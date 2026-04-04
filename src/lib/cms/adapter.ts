import type { SiteContent } from '@/types/site';

export interface CmsAdapter {
  loadSiteContent(): Promise<SiteContent>;
}
