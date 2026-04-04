import type { Metadata } from 'next';
import { SectionHeading } from '@/components/sections/SectionHeading';
import { Button } from '@/components/ui/Button';
import { Container } from '@/components/ui/Container';

export const metadata: Metadata = {
  title: 'Fashion advisory for brands and private clients',
  description: 'Premium fashion advisory for brands and private clients with strategic direction, styling and positioning.'
};

const services = [
  'Brand positioning and creative direction',
  'Campaign planning and styling',
  'Personal shopping and wardrobe advisory',
  'Product and collection consultation',
  'Influencer and collaboration strategy'
];

const audiences = [
  'Emerging and established fashion brands',
  'Entrepreneurs and public-facing professionals',
  'Private clients seeking a refined personal image'
];

export default function FashionServicesPage() {
  return (
    <section className="py-16 sm:py-20"><Container>
      <SectionHeading
        eyebrow="Fashion services"
        title="Fashion advisory for brands and private clients"
        description="We support premium brands and individuals with strategic direction, styling and positioning."
      />
      <div className="space-y-8 text-slate-700">
        <div className="space-y-4 max-w-3xl">
          <Button href="/contact">Work With Us</Button>
          <p>Our approach to fashion is commercially driven and detail-focused.</p>
          <p>We work with brands and private clients to refine identity, elevate presentation and deliver results across campaigns, collections and personal styling.</p>
        </div>

        <div>
          <h3 className="text-xl font-semibold text-brand-night">Services</h3>
          <ul className="mt-4 grid gap-4 md:grid-cols-2">
            {services.map((service) => (
              <li key={service} className="rounded-2xl bg-white p-5 shadow-elegant">{service}</li>
            ))}
          </ul>
        </div>

        <div className="max-w-3xl">
          <h3 className="text-xl font-semibold text-brand-night">Approach</h3>
          <p className="mt-4">We prioritise clarity, consistency and execution.</p>
          <p className="mt-3">Every project is handled with discretion and a clear understanding of both brand image and commercial outcome.</p>
        </div>

        <div>
          <h3 className="text-xl font-semibold text-brand-night">We work with</h3>
          <ul className="mt-4 space-y-2 list-disc pl-5">
            {audiences.map((audience) => (
              <li key={audience}>{audience}</li>
            ))}
          </ul>
        </div>

        <div className="rounded-2xl bg-white p-6 shadow-elegant">
          <h3 className="text-xl font-semibold text-brand-night">Elevate your brand or personal image.</h3>
          <p className="mt-3">Get in touch to discuss your requirements.</p>
          <Button href="/contact" className="mt-5">Work With Us</Button>
        </div>
      </div>
    </Container></section>
  );
}
