import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="max-w-2xl mx-auto px-6 py-20 sm:py-32">
      <p className="text-xs font-semibold tracking-widest text-gray-400 uppercase mb-4">404</p>
      <h1 className="text-3xl font-semibold tracking-tight text-gray-900 mb-4 font-serif">
        Page not found
      </h1>
      <p className="text-gray-500 mb-8">
        This page doesn&apos;t exist or may have been removed.
      </p>
      <Link
        href="/"
        className="inline-flex items-center gap-1.5 text-sm text-gray-500 hover:text-gray-900 transition-colors"
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
        Back home
      </Link>
    </div>
  );
}
