import type { Metadata } from 'next';
import { SectionHeading } from '@/components/sections/SectionHeading';
import { Container } from '@/components/ui/Container';

export const metadata: Metadata = {
  title: 'Fashion Services',
  description: 'Fashion advisory for premium UK brands, founders and growth-stage teams.'
};

export default function FashionServicesPage() {
  return (
    <section className="py-16 sm:py-20"><Container>
      <SectionHeading eyebrow="Fashion services" title="Strategic support for premium fashion growth" description="We support founders and brand leaders with market positioning, partnerships and commercial planning." />
      <p className="max-w-3xl text-slate-700">From range architecture to channel strategy, we help fashion businesses strengthen brand equity while protecting margin performance.</p>
    </Container></section>
  );
}
