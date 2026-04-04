import type { Metadata } from 'next';
import { Footer } from '@/components/layout/Footer';
import { Header } from '@/components/layout/Header';
import './globals.css';

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
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
