export type Service = {
  id: string;
  title: string;
  slug: string;
  summary: string;
  description: string;
  icon: string;
};

export type Property = {
  id: string;
  slug: string;
  title: string;
  price: string;
  location: string;
  bedrooms: number;
  bathrooms: number;
  shortDescription: string;
  longDescription: string;
  image: string;
  featured: boolean;
};

export type BlogPost = {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  publishedAt: string;
  author: string;
  coverImage: string;
  category: string;
};

export type Testimonial = {
  id: string;
  name: string;
  role: string;
  quote: string;
};

export type ContactFormInput = {
  fullName: string;
  email: string;
  enquiryType: string;
  message: string;
};

export type ConsultationFormInput = {
  fullName: string;
  email: string;
  phone: string;
  serviceInterest: string;
  preferredDate: string;
  notes: string;
};
