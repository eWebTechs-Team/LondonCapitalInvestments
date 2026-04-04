import type { Metadata } from 'next';
import Image from 'next/image';
import { notFound } from 'next/navigation';
import { Container } from '@/components/ui/Container';
import { getBlogPostBySlug, getBlogPosts } from '@/lib/api/services';
import { formatDate } from '@/lib/utils';

export async function generateStaticParams() {
  const posts = await getBlogPosts();
  return posts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const post = await getBlogPostBySlug(slug);
  if (!post) return { title: 'Insight not found' };
  return { title: post.title, description: post.excerpt };
}

export default async function SinglePostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = await getBlogPostBySlug(slug);

  if (!post) notFound();

  return (
    <article className="py-16 sm:py-20">
      <Container className="max-w-4xl">
        <div className="relative h-80 overflow-hidden rounded-2xl">
          <Image src={post.coverImage} alt={post.title} fill className="object-cover" />
        </div>
        <p className="mt-8 text-xs uppercase tracking-wide text-slate-500">
          {post.category} · {formatDate(post.publishedAt)} · {post.author}
        </p>
        <h1 className="mt-3 text-4xl font-semibold">{post.title}</h1>
        <p className="mt-6 text-lg leading-relaxed text-slate-700">{post.content}</p>
      </Container>
    </article>
  );
}
