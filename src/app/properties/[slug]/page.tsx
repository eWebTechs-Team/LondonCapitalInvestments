import type { Metadata } from 'next';
import Image from 'next/image';
import { notFound } from 'next/navigation';
import { Container } from '@/components/ui/Container';
import { getPropertyBySlug, getProperties } from '@/lib/api/services';

export async function generateStaticParams() {
  const properties = await getProperties();
  return properties.map((property) => ({ slug: property.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const property = await getPropertyBySlug(slug);
  if (!property) return { title: 'Property not found' };
  return {
    title: property.title,
    description: property.shortDescription
  };
}

export default async function PropertyDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const property = await getPropertyBySlug(slug);

  if (!property) notFound();

  return (
    <section className="py-16 sm:py-20">
      <Container>
        <div className="relative h-80 overflow-hidden rounded-2xl sm:h-[420px]">
          <Image src={property.image} alt={property.title} fill className="object-cover" />
        </div>
        <p className="mt-8 text-sm uppercase tracking-wide text-slate-500">{property.location}</p>
        <h1 className="mt-2 text-4xl font-semibold text-brand-night">{property.title}</h1>
        <p className="mt-2 text-lg text-brand-gold">{property.price}</p>
        <p className="mt-5 max-w-3xl text-slate-700">{property.longDescription}</p>
      </Container>
    </section>
  );
}
