import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import { getPostBySlug, getPublishedPostSlugs } from '@/lib/notion';

interface PageProps {
  params: { slug: string };
}

// Pre-render all published posts at build time; revalidate every 60s.
export const revalidate = 60;

export async function generateStaticParams() {
  const slugs = await getPublishedPostSlugs();
  return slugs.map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const post = await getPostBySlug(params.slug);
  if (!post) return {};
  return {
    title: post.title,
    openGraph: {
      title: post.title,
      type: 'article',
      publishedTime: post.publishDate ?? undefined,
    },
  };
}

function formatDate(dateStr: string | null): string {
  if (!dateStr) return '';
  return new Date(dateStr).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    timeZone: 'UTC',
  });
}

export default async function PostPage({ params }: PageProps) {
  const post = await getPostBySlug(params.slug);

  if (!post) notFound();

  return (
    <article className="max-w-2xl mx-auto px-6 py-16">
      {/* Post header */}
      <header className="mb-12">
        <h1 className="text-2xl font-semibold tracking-tight text-gray-900 leading-snug mb-3">
          {post.title}
        </h1>
        {post.publishDate && (
          <time
            dateTime={post.publishDate}
            className="text-sm text-gray-400"
          >
            {formatDate(post.publishDate)}
          </time>
        )}
      </header>

      {/* Post body */}
      <div className="prose prose-gray prose-sm sm:prose-base">
        <ReactMarkdown remarkPlugins={[remarkGfm]}>
          {post.markdown}
        </ReactMarkdown>
      </div>
    </article>
  );
}
