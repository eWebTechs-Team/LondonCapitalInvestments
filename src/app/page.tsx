import { BlogCard } from '@/components/sections/BlogCard';
import { CTASection } from '@/components/sections/CTASection';
import { HeroSection } from '@/components/sections/HeroSection';
import { PropertyCard } from '@/components/sections/PropertyCard';
import { SectionHeading } from '@/components/sections/SectionHeading';
import { ServiceCard } from '@/components/sections/ServiceCard';
import { TestimonialCard } from '@/components/sections/TestimonialCard';
import { Button } from '@/components/ui/Button';
import { Container } from '@/components/ui/Container';
import {
  getBlogPosts,
  getFeaturedProperties,
  getServices,
  getTestimonials
} from '@/lib/api/services';

export default async function HomePage() {
  const [services, featuredProperties, testimonials, posts] = await Promise.all([
    getServices(),
    getFeaturedProperties(),
    getTestimonials(),
    getBlogPosts()
  ]);

  return (
    <>
      <HeroSection />

      <section className="py-16 sm:py-20">
        <Container>
          <SectionHeading
            eyebrow="About us"
            title="Trusted advisory for London’s premium markets"
            description="We combine strategic insight with practical delivery across property, hiring and fashion sectors, helping our clients make high-stakes decisions with confidence."
          />
        </Container>
      </section>

      <section className="py-16 sm:py-20">
        <Container>
          <SectionHeading
            eyebrow="Services"
            title="Three specialist services, one integrated standard"
            description="Our teams operate with consistent quality across every brief, giving clients a joined-up experience from first conversation to final outcome."
          />
          <div className="grid gap-6 md:grid-cols-3">
            {services.map((service) => (
              <ServiceCard key={service.id} service={service} />
            ))}
          </div>
        </Container>
      </section>

      <section className="py-16 sm:py-20">
        <Container>
          <SectionHeading eyebrow="Featured properties" title="Prime opportunities in sought-after London postcodes" />
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {featuredProperties.map((property) => (
              <PropertyCard key={property.id} property={property} />
            ))}
          </div>
        </Container>
      </section>

      <section className="bg-white py-16 sm:py-20">
        <Container>
          <SectionHeading
            eyebrow="Why choose us"
            title="Discreet execution, measurable outcomes"
            description="Clients choose us for our network quality, commercial judgement and attention to detail at every stage."
          />
          <ul className="grid gap-4 text-sm text-slate-700 md:grid-cols-3">
            <li className="rounded-2xl border border-slate-200 bg-brand-mist p-5">Dedicated senior advisory on every mandate</li>
            <li className="rounded-2xl border border-slate-200 bg-brand-mist p-5">Cross-sector perspective connecting property, people and brand growth</li>
            <li className="rounded-2xl border border-slate-200 bg-brand-mist p-5">Transparent process with clear milestones and communication</li>
          </ul>
        </Container>
      </section>

      <section className="py-16 sm:py-20">
        <Container>
          <SectionHeading eyebrow="Client testimonials" title="Trusted by investors, operators and founders" />
          <div className="grid gap-6 md:grid-cols-3">
            {testimonials.map((testimonial) => (
              <TestimonialCard key={testimonial.id} testimonial={testimonial} />
            ))}
          </div>
        </Container>
      </section>

      <CTASection />

      <section className="py-16 sm:py-20">
        <Container>
          <SectionHeading eyebrow="Latest insights" title="Market thinking from our specialist teams" />
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {posts.slice(0, 4).map((post) => (
              <BlogCard key={post.id} post={post} />
            ))}
          </div>
        </Container>
      </section>

      <section className="pb-20">
        <Container className="rounded-3xl bg-white p-8 shadow-elegant sm:p-12">
          <h2 className="text-3xl font-semibold">Discuss your next move with confidence</h2>
          <p className="mt-4 max-w-2xl text-slate-600">
            Whether you are acquiring an asset, building a team, or scaling a fashion proposition, we can help you move decisively.
          </p>
          <div className="mt-6">
            <Button href="/contact">Contact Our Team</Button>
          </div>
        </Container>
      </section>
    </>
  );
}
