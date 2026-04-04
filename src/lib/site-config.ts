import { cache } from 'react';
import type { CmsAdapter } from '@/lib/cms/adapter';
import { ApiCmsAdapter } from '@/lib/cms/api-adapter';
import { EnvCmsAdapter } from '@/lib/cms/env-adapter';
import type { SiteContent } from '@/types/site';

function resolveAdapter(): CmsAdapter {
  const provider = process.env.SITE_CONTENT_PROVIDER;

  if (provider === 'api') {
    return new ApiCmsAdapter();
  }

  return new EnvCmsAdapter();
}

export const loadSiteContent = cache(async (): Promise<SiteContent> => {
  const adapter = resolveAdapter();
  return adapter.loadSiteContent();
});
