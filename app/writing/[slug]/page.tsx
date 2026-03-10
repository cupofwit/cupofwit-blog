import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import Link from 'next/link';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import { getPostBySlug, getPublishedPostSlugs } from '@/lib/notion';
import siteConfig from '@/site.config';

interface PageProps {
  params: { slug: string };
}

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
    description: siteConfig.description,
    openGraph: {
      title: post.title,
      description: siteConfig.description,
      type: 'article',
      publishedTime: post.publishDate ?? undefined,
      authors: [siteConfig.name],
      siteName: siteConfig.name,
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

function readingTime(markdown: string): string {
  const words = markdown.trim().split(/\s+/).length;
  const minutes = Math.max(1, Math.round(words / 200));
  return `${minutes} min read`;
}

export default async function PostPage({ params }: PageProps) {
  const post = await getPostBySlug(params.slug);

  if (!post) notFound();

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: post.title,
    author: { '@type': 'Person', name: siteConfig.name },
    datePublished: post.publishDate ?? undefined,
    url: `${siteConfig.url}/writing/${post.slug}`,
  };

  return (
    <article className="max-w-2xl mx-auto px-6 py-16">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Link
        href="/writing"
        className="inline-flex items-center gap-1.5 text-sm text-gray-400 hover:text-gray-700 transition-colors mb-10"
      >
        <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
          <path
            d="M10 7H4M6 4L3 7l3 3"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
        Writing
      </Link>

      <header className="pb-8 mb-10 border-b border-gray-100">
        <h1 className="text-3xl font-semibold tracking-tight text-gray-900 leading-tight mb-4 font-serif">
          {post.title}
        </h1>
        <div className="flex items-center gap-3 text-sm text-gray-400">
          {post.publishDate && (
            <>
              <time dateTime={post.publishDate}>
                {formatDate(post.publishDate)}
              </time>
              <span aria-hidden="true">·</span>
            </>
          )}
          <span>{readingTime(post.markdown)}</span>
        </div>
      </header>

      <div className="prose prose-gray max-w-none">
        <ReactMarkdown remarkPlugins={[remarkGfm]}>
          {post.markdown}
        </ReactMarkdown>
      </div>
    </article>
  );
}
