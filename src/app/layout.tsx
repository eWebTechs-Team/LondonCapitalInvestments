import type { Metadata } from 'next';
import { Footer } from '@/components/layout/Footer';
import { Header } from '@/components/layout/Header';
import { loadSiteContent } from '@/lib/site-config';
import './globals.css';

export const dynamic = 'force-dynamic';

export async function generateMetadata(): Promise<Metadata> {
  const site = await loadSiteContent();

  return {
    title: {
      default: site.seo.defaultTitle,
      template: site.seo.titleTemplate
    },
    description: site.seo.defaultDescription,
    openGraph: {
      title: site.seo.ogTitle,
      description: site.seo.ogDescription,
      type: 'website',
      url: site.seo.siteUrl
    },
    robots: {
      index: true,
      follow: true
    }
  };
}

export default async function RootLayout({ children }: { children: React.ReactNode }) {
  const site = await loadSiteContent();

  const localBusinessSchema = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    name: site.business.name,
    telephone: site.contact.phoneSchema,
    email: site.contact.email,
    address: {
      '@type': 'PostalAddress',
      streetAddress: site.contact.addressLine1,
      addressLocality: site.contact.city,
      postalCode: site.contact.postcode,
      addressCountry: site.business.addressCountry
    },
    url: site.seo.siteUrl
  };

  return (
    <html lang="en-GB">
      <body>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }} />
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
