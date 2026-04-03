import Link from 'next/link';
import { Button } from '@/components/ui/Button';
import { Container } from '@/components/ui/Container';

const navItems = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About' },
  { href: '/property-services', label: 'Property' },
  { href: '/recruitment-services', label: 'Recruitment' },
  { href: '/fashion-services', label: 'Fashion' },
  { href: '/properties', label: 'Properties' },
  { href: '/insights', label: 'Insights' },
  { href: '/contact', label: 'Contact' }
];

export function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-slate-200 bg-white/95 backdrop-blur">
      <Container className="flex items-center justify-between py-4">
        <Link href="/" className="text-sm font-semibold uppercase tracking-[0.18em] text-brand-night">
          London Capital Investments
        </Link>
        <nav aria-label="Main navigation" className="hidden items-center gap-5 lg:flex">
          {navItems.map((item) => (
            <Link key={item.href} href={item.href} className="text-sm text-slate-700 transition hover:text-brand-night">
              {item.label}
            </Link>
          ))}
        </nav>
        <Button href="/book-consultation" className="hidden sm:inline-flex">
          Book Consultation
        </Button>
      </Container>
    </header>
  );
}
