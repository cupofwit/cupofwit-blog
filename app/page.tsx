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
  const [featuredPost, ...remainingPosts] = recentPosts;

  return (
    <div className="max-w-2xl mx-auto px-6 py-20 sm:py-32">
      <section className="mb-20 pb-16 border-b border-gray-100">
        <h1 className="text-4xl sm:text-5xl font-semibold tracking-tight text-gray-900 mb-6 font-serif leading-tight">
          {siteConfig.name}
        </h1>
        <p className="text-gray-500 leading-relaxed text-lg max-w-md">
          {siteConfig.tagline}
        </p>
      </section>

      <section>
        <h2 className="text-xs font-semibold tracking-widest text-gray-400 uppercase mb-8">
          Recent Writing
        </h2>

        {recentPosts.length === 0 ? (
          <p className="text-gray-400 text-sm">Nothing published yet.</p>
        ) : (
          <>
            <Link
              href={`/writing/${featuredPost.slug}`}
              className="group block mb-8 pb-8 border-b border-gray-100"
            >
              <p className="text-[11px] font-semibold tracking-widest text-amber-600/80 uppercase mb-2.5">
                Latest
              </p>
              <h3 className="text-xl font-semibold font-serif text-gray-900 leading-snug mb-2 group-hover:underline underline-offset-[3px] decoration-gray-300">
                {featuredPost.title}
              </h3>
              {featuredPost.excerpt && (
                <p className="text-sm text-gray-500 mb-2 leading-relaxed">{featuredPost.excerpt}</p>
              )}
              {featuredPost.publishDate && (
                <time dateTime={featuredPost.publishDate} className="text-sm text-gray-400">
                  {formatDate(featuredPost.publishDate)}
                </time>
              )}
            </Link>

            {remainingPosts.length > 0 && (
              <div className="mb-8">
                {remainingPosts.map((post) => (
                  <Link
                    key={post.id}
                    href={`/writing/${post.slug}`}
                    className="group flex items-baseline justify-between gap-4 py-3.5 border-b border-gray-100 last:border-0"
                  >
                    <span className="text-gray-800 group-hover:underline underline-offset-[3px] decoration-gray-300 text-[15px] leading-snug">
                      {post.title}
                    </span>
                    {post.publishDate && (
                      <time dateTime={post.publishDate} className="text-sm text-gray-400 shrink-0 tabular-nums">
                        {formatDate(post.publishDate)}
                      </time>
                    )}
                  </Link>
                ))}
              </div>
            )}

            {allPosts.length > 4 && (
              <Link href="/writing" className="inline-flex items-center gap-1.5 text-sm text-gray-500 hover:text-gray-900 transition-colors">
                View all writing
                <svg width="12" height="12" viewBox="0 0 12 12" fill="none" aria-hidden="true">
                  <path d="M2 6h8M6 2l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </Link>
            )}
          </>
        )}
      </section>
    </div>
  );
}
