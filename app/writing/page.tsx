import type { Metadata } from 'next';
import { getPublishedPosts } from '@/lib/notion';
import PostCard from '@/components/PostCard';

export const metadata: Metadata = {
  title: 'Writing',
  description: 'All published essays and articles.',
};

// Revalidate this page every 60 seconds (ISR) so new Notion posts appear
// without a full redeploy.
export const revalidate = 60;

export default async function WritingPage() {
  const posts = await getPublishedPosts();

  return (
    <div className="max-w-2xl mx-auto px-6 py-16">
      <h1 className="text-xl font-semibold tracking-tight text-gray-900 mb-10">
        Writing
      </h1>

      {posts.length === 0 ? (
        <p className="text-gray-400 text-sm">Nothing published yet.</p>
      ) : (
        <div>
          {posts.map((post) => (
            <PostCard key={post.id} post={post} />
          ))}
        </div>
      )}
    </div>
  );
}
