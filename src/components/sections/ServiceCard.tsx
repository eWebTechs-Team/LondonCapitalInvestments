import Link from 'next/link';
import type { Service } from '@/types';

export function ServiceCard({ service }: { service: Service }) {
  return (
    <article className="rounded-2xl border border-slate-200 bg-white p-6 shadow-elegant">
      <div className="text-3xl" aria-hidden>
        {service.icon}
      </div>
      <h3 className="mt-4 text-xl font-semibold text-brand-night">{service.title}</h3>
      <p className="mt-3 text-sm leading-relaxed text-slate-600">{service.summary}</p>
      <Link
        href={`/${service.slug}`}
        className="mt-5 inline-flex text-sm font-medium text-brand-night underline decoration-brand-gold underline-offset-4"
      >
        Learn more
      </Link>
    </article>
  );
}
