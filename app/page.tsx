import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Home',
};

export default function HomePage() {
  return (
    <div className="max-w-2xl mx-auto px-6 py-24 sm:py-32">
      <div className="mb-12">
        <h1 className="text-3xl font-semibold tracking-tight text-gray-900 mb-5 font-serif">
          Your Name
        </h1>
        <p className="text-gray-600 leading-relaxed text-lg max-w-lg">
          A few sentences about who you are, what you think about, and why you
          write. Keep it honest and personal.
        </p>
      </div>

      <Link
        href="/writing"
        className="inline-flex items-center gap-2 text-sm font-medium text-gray-900 border border-gray-200 rounded-full px-5 py-2.5 hover:border-gray-400 hover:bg-white transition-all"
      >
        Read my writing
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
    </div>
  );
}
