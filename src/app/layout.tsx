import type { Metadata } from 'next';
import { Footer } from '@/components/layout/Footer';
import { Header } from '@/components/layout/Header';
import { BUSINESS, CONTACT } from '@/config/site';
import './globals.css';


const localBusinessSchema = {
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  name: BUSINESS.name,
  telephone: CONTACT.phoneSchema,
  address: {
    '@type': 'PostalAddress',
    streetAddress: CONTACT.addressLine1,
    addressLocality: CONTACT.city,
    postalCode: CONTACT.postcode,
    addressCountry: BUSINESS.addressCountry
  }
};

export const metadata: Metadata = {
  title: {
    default: 'London Capital Investments | Premium London Advisory',
    template: '%s | London Capital Investments'
  },
  description:
    'London Capital Investments provides premium property, recruitment and fashion services across London for private clients and ambitious businesses.',
  openGraph: {
    title: 'London Capital Investments',
    description: 'Premium London advisory in property, recruitment and fashion services.',
    type: 'website'
  },
  robots: {
    index: true,
    follow: true
  }
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
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
