import type { Metadata } from 'next';
import { SectionHeading } from '@/components/sections/SectionHeading';
import { Container } from '@/components/ui/Container';

export const metadata: Metadata = {
  title: 'Property Services',
  description: 'Prime London property services for acquisition, letting and strategic portfolio growth.'
};

export default function PropertyServicesPage() {
  return (
    <section className="py-16 sm:py-20"><Container>
      <SectionHeading eyebrow="Property services" title="Prime London property advisory" description="Acquisition support, lettings strategy and portfolio advisory tailored to investors and homeowners." />
      <ul className="grid gap-4 md:grid-cols-2 text-slate-700">
        <li className="rounded-2xl bg-white p-5 shadow-elegant">Buy-side search and negotiation</li>
        <li className="rounded-2xl bg-white p-5 shadow-elegant">Rental strategy and tenant positioning</li>
        <li className="rounded-2xl bg-white p-5 shadow-elegant">Portfolio review and yield optimisation</li>
        <li className="rounded-2xl bg-white p-5 shadow-elegant">Landlord advisory and compliance coordination</li>
      </ul>
    </Container></section>
  );
}
