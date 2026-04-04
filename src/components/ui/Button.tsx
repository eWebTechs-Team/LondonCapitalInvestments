import Link from 'next/link';
import type { ReactNode } from 'react';

type ButtonProps = {
  children: ReactNode;
  href?: string;
  variant?: 'primary' | 'secondary';
  className?: string;
  type?: 'button' | 'submit';
};

const baseStyles =
  'inline-flex items-center justify-center rounded-full px-6 py-3 text-sm font-medium transition focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2';

const variants = {
  primary: 'bg-brand-gold text-brand-night hover:bg-[#b28f5c] focus-visible:outline-brand-gold',
  secondary: 'border border-white/30 text-white hover:border-brand-gold hover:text-brand-gold focus-visible:outline-white'
};

export function Button({ children, href, variant = 'primary', className = '', type = 'button' }: ButtonProps) {
  if (href) {
    return (
      <Link href={href} className={`${baseStyles} ${variants[variant]} ${className}`}>
        {children}
      </Link>
    );
  }

  return (
    <button type={type} className={`${baseStyles} ${variants[variant]} ${className}`}>
      {children}
    </button>
  );
}
