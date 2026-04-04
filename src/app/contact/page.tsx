import type { Metadata } from 'next';
import { ContactForm } from '@/components/forms/ContactForm';
import { SectionHeading } from '@/components/sections/SectionHeading';
import { Container } from '@/components/ui/Container';
import { CONTACT } from '@/config/site';

export const metadata: Metadata = {
  title: 'Contact',
  description: 'Contact London Capital Investments for general enquiries and service discussions.'
};

export default function ContactPage() {
  return (
    <section className="py-16 sm:py-20">
      <Container>
        <SectionHeading eyebrow="Contact us" title="Start a conversation with our team" />
        <div className="grid gap-8 lg:grid-cols-2">
          <ContactForm />
          <div className="rounded-2xl bg-brand-night p-8 text-slate-200">
            <h2 className="text-2xl font-semibold text-white">London Office</h2>
            <p className="mt-4">{CONTACT.fullAddress}</p>
            <p className="mt-2">
              <a href={CONTACT.phoneHref} className="hover:text-white">
                {CONTACT.phoneDisplay}
              </a>
            </p>
            <p className="mt-2">Monday to Friday, 09:00–18:00</p>
            <p className="mt-2">hello@londoncapitalinvestments.co.uk</p>
          </div>
        </div>
      </Container>
    </section>
  );
}
