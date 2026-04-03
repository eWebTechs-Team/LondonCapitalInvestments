import type { Metadata } from 'next';
import { SectionHeading } from '@/components/sections/SectionHeading';
import { Container } from '@/components/ui/Container';

export const metadata: Metadata = {
  title: 'About',
  description: 'Learn about London Capital Investments and our premium advisory approach.'
};

export default function AboutPage() {
  return (
    <section className="py-16 sm:py-20">
      <Container>
        <SectionHeading
          eyebrow="About London Capital Investments"
          title="A premium advisory partner built around trust and execution"
          description="We are a London-based firm supporting private clients and businesses through property, recruitment and fashion advisory services."
        />
        <div className="max-w-3xl space-y-4 text-slate-700">
          <p>
            Our firm was established to deliver high-quality, relationship-led advisory across sectors where judgement and trust are critical.
          </p>
          <p>
            We combine market intelligence with practical execution, helping clients secure opportunities, reduce risk and maintain momentum.
          </p>
        </div>
      </Container>
    </section>
  );
}
