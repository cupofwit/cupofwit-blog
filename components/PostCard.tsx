import Link from 'next/link';
import type { Post } from '@/lib/types';

interface PostCardProps {
  post: Post;
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

export default function PostCard({ post }: PostCardProps) {
  return (
    <Link
      href={`/writing/${post.slug}`}
      className="group flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-1 py-4 border-b border-gray-100 last:border-0"
    >
      <span className="text-gray-900 group-hover:text-gray-500 transition-colors text-[15px] leading-snug">
        {post.title}
      </span>
      {post.publishDate && (
        <time
          dateTime={post.publishDate}
          className="text-sm text-gray-400 shrink-0"
        >
          {formatDate(post.publishDate)}
        </time>
      )}
    </Link>
  );
}
