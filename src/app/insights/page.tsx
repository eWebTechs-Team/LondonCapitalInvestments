import type { Metadata } from 'next';
import { BlogCard } from '@/components/sections/BlogCard';
import { SectionHeading } from '@/components/sections/SectionHeading';
import { Container } from '@/components/ui/Container';
import { getBlogPosts } from '@/lib/api/services';

export const metadata: Metadata = {
  title: 'Insights',
  description: 'Read the latest property, recruitment and fashion insights from our London specialists.'
};

export default async function InsightsPage() {
  const posts = await getBlogPosts();

  return (
    <section className="py-16 sm:py-20">
      <Container>
        <SectionHeading eyebrow="Insights" title="Latest perspectives from our advisory teams" />
        <div className="grid gap-6 md:grid-cols-2">
          {posts.map((post) => (
            <BlogCard key={post.id} post={post} />
          ))}
        </div>
      </Container>
    </section>
  );
}
