import type { Metadata } from 'next';
import { SectionHeading } from '@/components/sections/SectionHeading';
import { Container } from '@/components/ui/Container';

export const metadata: Metadata = {
  title: 'Recruitment Services',
  description: 'Executive and specialist recruitment for premium and growth-focused sectors.'
};

export default function RecruitmentServicesPage() {
  return (
    <section className="py-16 sm:py-20"><Container>
      <SectionHeading eyebrow="Recruitment services" title="High-trust recruitment for growth mandates" description="We source high-calibre candidates across property, investment and premium retail sectors." />
      <p className="max-w-3xl text-slate-700">Our process combines clear brief design, targeted outreach, and transparent shortlisting so leadership teams can hire with confidence and speed.</p>
    </Container></section>
  );
}
