import Image from 'next/image';
import Link from 'next/link';
import type { BlogPost } from '@/types';
import { formatDate } from '@/lib/utils';

export function BlogCard({ post }: { post: BlogPost }) {
  return (
    <article className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-elegant">
      <div className="relative h-52">
        <Image src={post.coverImage} alt={post.title} fill className="object-cover" />
      </div>
      <div className="p-6">
        <p className="text-xs uppercase tracking-wide text-slate-500">
          {post.category} · {formatDate(post.publishedAt)}
        </p>
        <h3 className="mt-2 text-lg font-semibold text-brand-night">{post.title}</h3>
        <p className="mt-3 text-sm text-slate-600">{post.excerpt}</p>
        <Link href={`/insights/${post.slug}`} className="mt-4 inline-flex text-sm font-medium text-brand-night underline">
          Read insight
        </Link>
      </div>
    </article>
  );
}
