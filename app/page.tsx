import Link from 'next/link';
import type { Metadata } from 'next';
import { getPublishedPosts } from '@/lib/notion';
import siteConfig from '@/site.config';

export const metadata: Metadata = {
  title: { absolute: siteConfig.name },
  description: siteConfig.description,
  openGraph: {
    title: siteConfig.name,
    description: siteConfig.description,
  },
};

export const revalidate = 60;

function formatDate(dateStr: string | null): string {
  if (!dateStr) return '';
  return new Date(dateStr).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    timeZone: 'UTC',
  });
}

export default async function HomePage() {
  const allPosts = await getPublishedPosts();
  const recentPosts = allPosts.slice(0, 4);

  return (
    <div className="max-w-2xl mx-auto px-6 py-20 sm:py-28">

      {/* Hero */}
      <section className="mb-16 pb-16 border-b border-gray-100">
        <h1 className="text-3xl font-semibold tracking-tight text-gray-900 mb-4 font-serif">
          {siteConfig.name}
        </h1>
        <p className="text-gray-600 leading-relaxed text-lg max-w-lg">
          {siteConfig.tagline}
        </p>
      </section>

      {/* Recent writing */}
      <section>
        <h2 className="text-xs font-semibold tracking-widest text-gray-400 uppercase mb-6">
          Recent Writing
        </h2>

        {recentPosts.length === 0 ? (
          <p className="text-gray-400 text-sm">Nothing published yet.</p>
        ) : (
          <>
            <div className="mb-8">
              {recentPosts.map((post) => (
                <Link
                  key={post.id}
                  href={`/writing/${post.slug}`}
                  className="group flex items-baseline justify-between gap-4 py-4 border-b border-gray-100 last:border-0"
                >
                  <span className="text-gray-900 group-hover:text-gray-500 transition-colors text-[15px] leading-snug">
                    {post.title}
                  </span>
                  {post.publishDate && (
                    <time
                      dateTime={post.publishDate}
                      className="text-sm text-gray-400 shrink-0 tabular-nums"
                    >
                      {formatDate(post.publishDate)}
                    </time>
                  )}
                </Link>
              ))}
            </div>

            {allPosts.length > 4 && (
              <Link
                href="/writing"
                className="inline-flex items-center gap-1.5 text-sm text-gray-500 hover:text-gray-900 transition-colors"
              >
                View all writing
                <svg width="12" height="12" viewBox="0 0 12 12" fill="none" aria-hidden="true">
                  <path
                    d="M2 6h8M6 2l4 4-4 4"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </Link>
            )}
          </>
        )}
      </section>

    </div>
  );
}
