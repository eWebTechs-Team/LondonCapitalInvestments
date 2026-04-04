import Link from 'next/link';
import { Container } from '@/components/ui/Container';
import { CONTACT } from '@/config/site';

export function Footer() {
  return (
    <footer className="bg-brand-night py-14 text-slate-300">
      <Container>
        <div className="grid gap-10 md:grid-cols-4">
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-white">London Capital Investments</h3>
            <p className="mt-4 text-sm">Premium advisory across property, recruitment and fashion.</p>
          </div>
          <div>
            <h4 className="text-sm font-semibold text-white">Quick Links</h4>
            <ul className="mt-4 space-y-2 text-sm">
              <li><Link href="/about">About</Link></li>
              <li><Link href="/properties">Properties</Link></li>
              <li><Link href="/insights">Insights</Link></li>
              <li><Link href="/contact">Contact</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="text-sm font-semibold text-white">Services</h4>
            <ul className="mt-4 space-y-2 text-sm">
              <li><Link href="/property-services">Property Services</Link></li>
              <li><Link href="/recruitment-services">Recruitment Services</Link></li>
              <li><Link href="/fashion-services">Fashion Services</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="text-sm font-semibold text-white">Contact</h4>
            <p className="mt-4 text-sm">{CONTACT.fullAddress}</p>
            <p className="text-sm">
              <a href={CONTACT.phoneHref} className="hover:text-white">
                {CONTACT.phoneDisplay}
              </a>
            </p>
            <p className="text-sm">londoncapitalinvestments@gmail.com</p>
            <p className="mt-4 text-xs text-slate-400">Social links: LinkedIn · Instagram · X</p>
          </div>
        </div>
        <p className="mt-10 border-t border-white/10 pt-5 text-xs text-slate-400">
          © {new Date().getFullYear()} London Capital Investments. All rights reserved.
        </p>
      </Container>
    </footer>
  );
}
