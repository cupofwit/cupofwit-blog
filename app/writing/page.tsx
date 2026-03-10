import type { Metadata } from 'next';
import { getPublishedPosts } from '@/lib/notion';
import PostCard from '@/components/PostCard';
import type { Post } from '@/lib/types';

export const metadata: Metadata = {
  title: 'Writing',
  description: 'All published essays and articles.',
};

export const revalidate = 60;

function groupByYear(posts: Post[]): [string, Post[]][] {
  const map: Record<string, Post[]> = {};
  for (const post of posts) {
    const year = post.publishDate
      ? new Date(post.publishDate).getUTCFullYear().toString()
      : 'Undated';
    if (!map[year]) map[year] = [];
    map[year].push(post);
  }
  return Object.entries(map).sort(([a], [b]) => b.localeCompare(a));
}

export default async function WritingPage() {
  const posts = await getPublishedPosts();
  const grouped = groupByYear(posts);

  return (
    <div className="max-w-2xl mx-auto px-6 py-16">
      <h1 className="text-3xl sm:text-4xl font-semibold tracking-tight text-gray-900 mb-12 font-serif">
        Writing
      </h1>

      {posts.length === 0 ? (
        <p className="text-gray-400 text-sm">Nothing published yet.</p>
      ) : (
        <div className="space-y-10">
          {grouped.map(([year, yearPosts]) => (
            <section key={year}>
              <h2 className="text-xs font-semibold tracking-widest text-gray-400 uppercase mb-3">
                {year}
              </h2>
              <div>
                {yearPosts.map((post) => (
                  <PostCard key={post.id} post={post} />
                ))}
              </div>
            </section>
          ))}
        </div>
      )}
    </div>
  );
}
