import type { Metadata } from 'next';
import { ContactForm } from '@/components/forms/ContactForm';
import { SectionHeading } from '@/components/sections/SectionHeading';
import { Container } from '@/components/ui/Container';
import { loadSiteContent } from '@/lib/site-config';

export async function generateMetadata(): Promise<Metadata> {
  const site = await loadSiteContent();

  return {
    title: 'Contact',
    description: `Contact ${site.business.name} for general enquiries and service discussions.`
  };
}

export default async function ContactPage() {
  const site = await loadSiteContent();

  return (
    <section className="py-16 sm:py-20">
      <Container>
        <SectionHeading eyebrow="Contact us" title="Start a conversation with our team" />
        <div className="grid gap-8 lg:grid-cols-2">
          <ContactForm />
          <div className="rounded-2xl bg-brand-night p-8 text-slate-200">
            <h2 className="text-2xl font-semibold text-white">{site.contact.officeLabel}</h2>
            <p className="mt-4">{site.contact.fullAddress}</p>
            <p className="mt-2">
              <a href={site.contact.phoneHref} className="hover:text-white">
                {site.contact.phoneDisplay}
              </a>
            </p>
            <p className="mt-2">{site.contact.officeHours}</p>
            <p className="mt-2">{site.contact.email}</p>
          </div>
        </div>
      </Container>
    </section>
  );
}
