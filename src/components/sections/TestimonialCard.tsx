import type { Testimonial } from '@/types';

export function TestimonialCard({ testimonial }: { testimonial: Testimonial }) {
  return (
    <article className="rounded-2xl border border-slate-200 bg-white p-6 shadow-elegant">
      <p className="text-sm leading-relaxed text-slate-700">“{testimonial.quote}”</p>
      <p className="mt-4 text-sm font-semibold text-brand-night">{testimonial.name}</p>
      <p className="text-xs uppercase tracking-wide text-slate-500">{testimonial.role}</p>
    </article>
  );
}
