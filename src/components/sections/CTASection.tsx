import { Button } from '@/components/ui/Button';
import { Container } from '@/components/ui/Container';

export function CTASection() {
  return (
    <section className="py-16">
      <Container>
        <div className="rounded-3xl bg-brand-night px-6 py-12 text-white sm:px-12">
          <h2 className="text-3xl font-semibold tracking-tight">Ready to move with confidence?</h2>
          <p className="mt-4 max-w-2xl text-slate-300">
            Speak to our advisory team about acquisitions, hiring plans, or growth strategy. We will tailor a roadmap
            around your goals.
          </p>
          <div className="mt-8">
            <Button href="/book-consultation">Book Your Consultation</Button>
          </div>
        </div>
      </Container>
    </section>
  );
}
