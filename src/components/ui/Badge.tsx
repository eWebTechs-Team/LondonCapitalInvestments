import type { ReactNode } from 'react';

export function Badge({ children }: { children: ReactNode }) {
  return (
    <span className="inline-block rounded-full border border-brand-gold/35 bg-brand-gold/10 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-brand-gold">
      {children}
    </span>
  );
}
