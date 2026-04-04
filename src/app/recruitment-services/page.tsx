import type { Metadata } from 'next';
import { SectionHeading } from '@/components/sections/SectionHeading';
import { Button } from '@/components/ui/Button';
import { Container } from '@/components/ui/Container';

export const metadata: Metadata = {
  title: 'Recruitment for high-performance teams',
  description: 'London recruitment advisory connecting ambitious businesses with commercially driven talent across property, finance and luxury sectors.'
};

const services = [
  'Executive and senior hires',
  'Lettings and property professionals',
  'Sales and business development roles',
  'Administrative and operational staff',
  'Discreet and confidential hiring'
];

const valuePoints = [
  'Access to a curated network of proven professionals',
  'Fast turnaround without compromising quality',
  'Strong understanding of property and investment markets',
  'Straightforward, no-nonsense communication'
];

const processSteps = [
  'Understand your requirements',
  'Shortlist qualified candidates',
  'Coordinate interviews',
  'Support through offer and placement'
];

export default function RecruitmentServicesPage() {
  return (
    <section className="py-16 sm:py-20"><Container>
      <SectionHeading
        eyebrow="Recruitment services"
        title="Recruitment for high-performance teams"
        description="We connect ambitious businesses with commercially driven talent across property, finance and luxury sectors."
      />
      <div className="space-y-8 text-slate-700">
        <div className="space-y-4 max-w-3xl">
          <Button href="/book-consultation">Book a Consultation</Button>
          <p>We specialise in sourcing high-quality candidates for businesses that value performance, professionalism and long-term growth.</p>
          <p>Our focus is not volume. It is precision. Every candidate is assessed not just on experience, but on commercial mindset, communication and cultural fit.</p>
        </div>

        <div>
          <h3 className="text-xl font-semibold text-brand-night">Services</h3>
          <ul className="mt-4 grid gap-4 md:grid-cols-2">
            {services.map((service) => (
              <li key={service} className="rounded-2xl bg-white p-5 shadow-elegant">{service}</li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="text-xl font-semibold text-brand-night">Why work with us</h3>
          <ul className="mt-4 space-y-2 list-disc pl-5">
            {valuePoints.map((point) => (
              <li key={point}>{point}</li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="text-xl font-semibold text-brand-night">Process</h3>
          <ol className="mt-4 space-y-2 list-decimal pl-5">
            {processSteps.map((step) => (
              <li key={step}>{step}</li>
            ))}
          </ol>
        </div>

        <div className="rounded-2xl bg-white p-6 shadow-elegant">
          <h3 className="text-xl font-semibold text-brand-night">Build your team with confidence.</h3>
          <p className="mt-3">Speak to us today to discuss your hiring requirements.</p>
          <Button href="/contact" className="mt-5">Book a Consultation</Button>
        </div>
      </div>
    </Container></section>
  );
}
