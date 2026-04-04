import type { Service } from '@/types';

export const services: Service[] = [
  {
    id: 'property',
    title: 'Property Services',
    slug: 'property-services',
    summary: 'Prime London acquisitions, lettings and portfolio strategy with discreet execution.',
    description:
      'From prime residential acquisitions to landlord support and rental strategy, we deliver end-to-end property expertise tailored to ambitious investors and discerning homeowners.',
    icon: '🏙️'
  },
  {
    id: 'recruitment',
    title: 'Recruitment Services',
    slug: 'recruitment-services',
    summary: 'High-calibre talent sourcing across property, finance and luxury retail sectors.',
    description:
      'We identify and place exceptional candidates through a relationship-led process trusted by founders, family offices and established London firms.',
    icon: '🤝'
  },
  {
    id: 'fashion',
    title: 'Fashion Services',
    slug: 'fashion-services',
    summary: 'Strategic fashion advisory for premium brands, buyers and private clients.',
    description:
      'Our fashion advisory supports brand positioning, capsule planning and commercial partnerships for clients seeking credibility and long-term growth in competitive markets.',
    icon: '🕊️'
  }
];
