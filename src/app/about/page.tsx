import type { Metadata } from 'next';
import { SectionHeading } from '@/components/sections/SectionHeading';
import { Container } from '@/components/ui/Container';
import { loadSiteContent } from '@/lib/site-config';

export async function generateMetadata(): Promise<Metadata> {
  const site = await loadSiteContent();

  return {
    title: 'About',
    description: `Learn about ${site.business.name} and our premium advisory approach.`
  };
}

export default async function AboutPage() {
  const site = await loadSiteContent();

  return (
    <section className="py-16 sm:py-20">
      <Container>
        <SectionHeading
          eyebrow={`About ${site.business.name}`}
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
