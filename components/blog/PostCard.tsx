import Link from 'next/link';
import type { Post } from '@/lib/types';

interface PostCardProps {
  post: Post;
}

function formatDate(dateStr: string | null): string {
  if (!dateStr) return '';
  return new Date(dateStr).toLocaleDateString('en-US', {
    month: 'short',
    day: 'numeric',
    timeZone: 'UTC',
  });
}

export default function PostCard({ post }: PostCardProps) {
  return (
    <Link
      href={`/writing/${post.slug}`}
      className="group block py-3.5 border-b border-gray-100 last:border-0"
    >
      <div className="flex items-baseline justify-between gap-4">
        <span className="text-gray-800 group-hover:underline underline-offset-[3px] decoration-gray-300 text-[15px] leading-snug">
          {post.title}
        </span>
        {post.publishDate && (
          <time dateTime={post.publishDate} className="text-sm text-gray-400 shrink-0 tabular-nums">
            {formatDate(post.publishDate)}
          </time>
        )}
      </div>
      {post.subtitle && (
        <p className="text-sm text-gray-400 mt-0.5 leading-snug font-normal">{post.subtitle}</p>
      )}
      {post.excerpt && (
        <p className="text-sm text-gray-400 mt-0.5 leading-snug">{post.excerpt}</p>
      )}
    </Link>
  );
}
