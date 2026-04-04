export type SiteContact = {
  email: string;
  phoneDisplay: string;
  phoneHref: string;
  phoneSchema: string;
  addressLine1: string;
  city: string;
  postcode: string;
  fullAddress: string;
  officeLabel: string;
  officeHours: string;
};

export type SiteBusiness = {
  name: string;
  legalName: string;
  addressCountry: string;
};

export type SiteSeo = {
  siteUrl: string;
  defaultTitle: string;
  titleTemplate: string;
  defaultDescription: string;
  ogTitle: string;
  ogDescription: string;
};

export type SiteHero = {
  eyebrow: string;
  title: string;
  description: string;
  primaryCtaLabel: string;
  secondaryCtaLabel: string;
};

export type SiteFooter = {
  summary: string;
  socialText: string;
  copyrightSuffix: string;
};

export type SiteHeader = {
  consultationCtaLabel: string;
};

export type SiteContent = {
  business: SiteBusiness;
  contact: SiteContact;
  seo: SiteSeo;
  hero: SiteHero;
  header: SiteHeader;
  footer: SiteFooter;
};
