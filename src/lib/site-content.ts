import fallbackContent from '../../content/site.fallback.json';
import type { SiteContent } from '@/types/site';

type SiteEnvOverrides = {
  SITE_BUSINESS_NAME?: string;
  SITE_BUSINESS_LEGAL_NAME?: string;
  SITE_BUSINESS_ADDRESS_COUNTRY?: string;
  SITE_CONTACT_EMAIL?: string;
  SITE_CONTACT_PHONE_DISPLAY?: string;
  SITE_CONTACT_PHONE_HREF?: string;
  SITE_CONTACT_PHONE_SCHEMA?: string;
  SITE_CONTACT_ADDRESS_LINE1?: string;
  SITE_CONTACT_CITY?: string;
  SITE_CONTACT_POSTCODE?: string;
  SITE_CONTACT_FULL_ADDRESS?: string;
  SITE_CONTACT_OFFICE_LABEL?: string;
  SITE_CONTACT_OFFICE_HOURS?: string;
  SITE_SEO_SITE_URL?: string;
  SITE_SEO_DEFAULT_TITLE?: string;
  SITE_SEO_TITLE_TEMPLATE?: string;
  SITE_SEO_DEFAULT_DESCRIPTION?: string;
  SITE_SEO_OG_TITLE?: string;
  SITE_SEO_OG_DESCRIPTION?: string;
  SITE_HERO_EYEBROW?: string;
  SITE_HERO_TITLE?: string;
  SITE_HERO_DESCRIPTION?: string;
  SITE_HERO_PRIMARY_CTA_LABEL?: string;
  SITE_HERO_SECONDARY_CTA_LABEL?: string;
  SITE_HEADER_CONSULTATION_CTA_LABEL?: string;
  SITE_FOOTER_SUMMARY?: string;
  SITE_FOOTER_SOCIAL_TEXT?: string;
  SITE_FOOTER_COPYRIGHT_SUFFIX?: string;
};

function fromEnv(overrides: SiteEnvOverrides): Partial<SiteContent> {
  return {
    business: {
      name: overrides.SITE_BUSINESS_NAME ?? fallbackContent.business.name,
      legalName: overrides.SITE_BUSINESS_LEGAL_NAME ?? fallbackContent.business.legalName,
      addressCountry: overrides.SITE_BUSINESS_ADDRESS_COUNTRY ?? fallbackContent.business.addressCountry
    },
    contact: {
      email: overrides.SITE_CONTACT_EMAIL ?? fallbackContent.contact.email,
      phoneDisplay: overrides.SITE_CONTACT_PHONE_DISPLAY ?? fallbackContent.contact.phoneDisplay,
      phoneHref: overrides.SITE_CONTACT_PHONE_HREF ?? fallbackContent.contact.phoneHref,
      phoneSchema: overrides.SITE_CONTACT_PHONE_SCHEMA ?? fallbackContent.contact.phoneSchema,
      addressLine1: overrides.SITE_CONTACT_ADDRESS_LINE1 ?? fallbackContent.contact.addressLine1,
      city: overrides.SITE_CONTACT_CITY ?? fallbackContent.contact.city,
      postcode: overrides.SITE_CONTACT_POSTCODE ?? fallbackContent.contact.postcode,
      fullAddress: overrides.SITE_CONTACT_FULL_ADDRESS ?? fallbackContent.contact.fullAddress,
      officeLabel: overrides.SITE_CONTACT_OFFICE_LABEL ?? fallbackContent.contact.officeLabel,
      officeHours: overrides.SITE_CONTACT_OFFICE_HOURS ?? fallbackContent.contact.officeHours
    },
    seo: {
      siteUrl: overrides.SITE_SEO_SITE_URL ?? fallbackContent.seo.siteUrl,
      defaultTitle: overrides.SITE_SEO_DEFAULT_TITLE ?? fallbackContent.seo.defaultTitle,
      titleTemplate: overrides.SITE_SEO_TITLE_TEMPLATE ?? fallbackContent.seo.titleTemplate,
      defaultDescription: overrides.SITE_SEO_DEFAULT_DESCRIPTION ?? fallbackContent.seo.defaultDescription,
      ogTitle: overrides.SITE_SEO_OG_TITLE ?? fallbackContent.seo.ogTitle,
      ogDescription: overrides.SITE_SEO_OG_DESCRIPTION ?? fallbackContent.seo.ogDescription
    },
    hero: {
      eyebrow: overrides.SITE_HERO_EYEBROW ?? fallbackContent.hero.eyebrow,
      title: overrides.SITE_HERO_TITLE ?? fallbackContent.hero.title,
      description: overrides.SITE_HERO_DESCRIPTION ?? fallbackContent.hero.description,
      primaryCtaLabel: overrides.SITE_HERO_PRIMARY_CTA_LABEL ?? fallbackContent.hero.primaryCtaLabel,
      secondaryCtaLabel: overrides.SITE_HERO_SECONDARY_CTA_LABEL ?? fallbackContent.hero.secondaryCtaLabel
    },
    header: {
      consultationCtaLabel:
        overrides.SITE_HEADER_CONSULTATION_CTA_LABEL ?? fallbackContent.header.consultationCtaLabel
    },
    footer: {
      summary: overrides.SITE_FOOTER_SUMMARY ?? fallbackContent.footer.summary,
      socialText: overrides.SITE_FOOTER_SOCIAL_TEXT ?? fallbackContent.footer.socialText,
      copyrightSuffix: overrides.SITE_FOOTER_COPYRIGHT_SUFFIX ?? fallbackContent.footer.copyrightSuffix
    }
  };
}

export async function loadSiteContentFromEnv(): Promise<SiteContent> {
  const envContent = fromEnv(process.env as SiteEnvOverrides);

  return {
    business: envContent.business ?? fallbackContent.business,
    contact: envContent.contact ?? fallbackContent.contact,
    seo: envContent.seo ?? fallbackContent.seo,
    hero: envContent.hero ?? fallbackContent.hero,
    header: envContent.header ?? fallbackContent.header,
    footer: envContent.footer ?? fallbackContent.footer
  };
}
