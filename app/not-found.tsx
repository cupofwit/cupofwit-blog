import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Page Not Found',
};

export default function NotFound() {
  return (
    <div className="max-w-2xl mx-auto px-6 py-32 text-center">
      <p className="text-xs font-semibold tracking-widest text-gray-400 uppercase mb-4">404</p>
      <h1 className="text-2xl font-semibold tracking-tight text-gray-900 mb-3 font-serif">
        Page not found
      </h1>
      <p className="text-gray-500 mb-8">
        The page you&rsquo;re looking for doesn&rsquo;t exist or has been moved.
      </p>
      <Link
        href="/"
        className="inline-flex items-center gap-1.5 text-sm text-gray-500 hover:text-gray-900 transition-colors"
      >
        <svg width="12" height="12" viewBox="0 0 12 12" fill="none" aria-hidden="true">
          <path
            d="M10 6H2M5 2L1 6l4 4"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
        Back home
      </Link>
    </div>
  );
}
