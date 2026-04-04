import Image from 'next/image';
import Link from 'next/link';
import type { Property } from '@/types';

export function PropertyCard({ property }: { property: Property }) {
  return (
    <article className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-elegant">
      <div className="relative h-60 w-full">
        <Image src={property.image} alt={property.title} fill className="object-cover" />
      </div>
      <div className="p-6">
        <p className="text-xs uppercase tracking-wide text-slate-500">{property.location}</p>
        <h3 className="mt-2 text-xl font-semibold text-brand-night">{property.title}</h3>
        <p className="mt-1 text-brand-gold">{property.price}</p>
        <p className="mt-3 text-sm text-slate-600">{property.shortDescription}</p>
        <p className="mt-3 text-xs text-slate-500">
          {property.bedrooms} bedrooms · {property.bathrooms} bathrooms
        </p>
        <Link
          href={`/properties/${property.slug}`}
          className="mt-4 inline-flex text-sm font-medium text-brand-night underline decoration-brand-gold underline-offset-4"
        >
          View property
        </Link>
      </div>
    </article>
  );
}
