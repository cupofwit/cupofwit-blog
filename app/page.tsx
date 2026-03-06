import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Home',
};

export default function HomePage() {
  return (
    <div className="max-w-2xl mx-auto px-6 py-24">
      <h1 className="text-2xl font-semibold tracking-tight text-gray-900 mb-4">
        Your Name
      </h1>
      <p className="text-gray-500 leading-relaxed mb-8">
        A short line about who you are and what you write about.
      </p>
      <Link
        href="/writing"
        className="text-sm text-gray-900 underline underline-offset-2 decoration-gray-300 hover:decoration-gray-900 transition-colors"
      >
        Read my writing
      </Link>
    </div>
  );
}
