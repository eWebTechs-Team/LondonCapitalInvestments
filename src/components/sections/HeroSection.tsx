import { Button } from '@/components/ui/Button';
import { Container } from '@/components/ui/Container';

export function HeroSection() {
  return (
    <section className="bg-brand-night py-24 text-white sm:py-28">
      <Container>
        <p className="text-sm uppercase tracking-[0.24em] text-brand-gold">London Capital Investments</p>
        <h1 className="mt-5 max-w-4xl text-4xl font-semibold leading-tight sm:text-6xl">
          Premium property, recruitment and fashion advisory for modern London ambitions.
        </h1>
        <p className="mt-6 max-w-2xl text-base leading-relaxed text-slate-300 sm:text-lg">
          We partner with private clients and growth-focused businesses to deliver decisive outcomes with discretion,
          clarity and trusted execution.
        </p>
        <div className="mt-10 flex flex-wrap gap-4">
          <Button href="/book-consultation">Book a Consultation</Button>
          <Button href="/properties" variant="secondary">
            Explore Featured Properties
          </Button>
        </div>
      </Container>
    </section>
  );
}
