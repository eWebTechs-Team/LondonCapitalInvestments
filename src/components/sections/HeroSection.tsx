import { Button } from '@/components/ui/Button';
import { Container } from '@/components/ui/Container';
import { loadSiteContent } from '@/lib/site-config';

export async function HeroSection() {
  const site = await loadSiteContent();

  return (
    <section className="bg-brand-night py-24 text-white sm:py-28">
      <Container>
        <p className="text-sm uppercase tracking-[0.24em] text-brand-gold">{site.hero.eyebrow}</p>
        <h1 className="mt-5 max-w-4xl text-4xl font-semibold leading-tight sm:text-6xl">{site.hero.title}</h1>
        <p className="mt-6 max-w-2xl text-base leading-relaxed text-slate-300 sm:text-lg">{site.hero.description}</p>
        <div className="mt-10 flex flex-wrap gap-4">
          <Button href="/book-consultation">{site.hero.primaryCtaLabel}</Button>
          <Button href="/properties" variant="secondary">
            {site.hero.secondaryCtaLabel}
          </Button>
        </div>
      </Container>
    </section>
  );
}
