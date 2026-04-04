import type { Metadata } from 'next';
import { ConsultationForm } from '@/components/forms/ConsultationForm';
import { SectionHeading } from '@/components/sections/SectionHeading';
import { Container } from '@/components/ui/Container';
import { loadSiteContent } from '@/lib/site-config';

export async function generateMetadata(): Promise<Metadata> {
  const site = await loadSiteContent();

  return {
    title: 'Book Consultation',
    description: `Book a consultation with ${site.business.name} for property, recruitment or fashion advice.`
  };
}

export default function BookConsultationPage() {
  return (
    <section className="py-16 sm:py-20">
      <Container className="max-w-4xl">
        <SectionHeading
          eyebrow="Book consultation"
          title="Schedule a strategy call with our advisory team"
          description="Share your goals and preferred timing. We will match you with the most relevant specialist."
        />
        <ConsultationForm />
      </Container>
    </section>
  );
}
