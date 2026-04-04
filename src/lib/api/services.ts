import { blogPosts } from '@/data/posts';
import { properties } from '@/data/properties';
import { services } from '@/data/services';
import { testimonials } from '@/data/testimonials';
import type { BlogPost, ConsultationFormInput, ContactFormInput, Property, Service, Testimonial } from '@/types';

const delay = async (ms = 120) => new Promise((resolve) => setTimeout(resolve, ms));

export async function getServices(): Promise<Service[]> {
  await delay();
  return services;
}

export async function getProperties(): Promise<Property[]> {
  await delay();
  return properties;
}

export async function getFeaturedProperties(): Promise<Property[]> {
  await delay();
  return properties.filter((property) => property.featured);
}

export async function getPropertyBySlug(slug: string): Promise<Property | undefined> {
  await delay();
  return properties.find((property) => property.slug === slug);
}

export async function getBlogPosts(): Promise<BlogPost[]> {
  await delay();
  return blogPosts;
}

export async function getBlogPostBySlug(slug: string): Promise<BlogPost | undefined> {
  await delay();
  return blogPosts.find((post) => post.slug === slug);
}

export async function getTestimonials(): Promise<Testimonial[]> {
  await delay();
  return testimonials;
}

export async function submitContactForm(payload: ContactFormInput): Promise<{ success: boolean; message: string }> {
  await delay();
  console.log('Contact enquiry received (mock):', payload);
  return { success: true, message: 'Thank you. Our team will reply shortly.' };
}

export async function submitConsultationForm(
  payload: ConsultationFormInput
): Promise<{ success: boolean; message: string }> {
  await delay();
  console.log('Consultation booking received (mock):', payload);
  return { success: true, message: 'Consultation request received. We will confirm shortly.' };
}
