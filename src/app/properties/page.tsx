import type { Metadata } from 'next';
import { PropertyCard } from '@/components/sections/PropertyCard';
import { SectionHeading } from '@/components/sections/SectionHeading';
import { Container } from '@/components/ui/Container';
import { getProperties } from '@/lib/api/services';

export const metadata: Metadata = {
  title: 'Properties Listing',
  description: 'Browse premium London property opportunities listed by London Capital Investments.'
};

export default async function PropertiesPage() {
  const properties = await getProperties();

  return (
    <section className="py-16 sm:py-20">
      <Container>
        <SectionHeading eyebrow="Properties" title="Current London opportunities" />
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {properties.map((property) => (
            <PropertyCard key={property.id} property={property} />
          ))}
        </div>
      </Container>
    </section>
  );
}
