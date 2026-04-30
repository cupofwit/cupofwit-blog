import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'About',
  description: 'About page coming soon.',
};

export default function AboutPage() {
  return (
    <div className="max-w-2xl mx-auto px-6 py-20 sm:py-32">
      <h1 className="text-4xl sm:text-5xl font-semibold tracking-tight text-gray-900 mb-6 font-serif leading-tight">
        About
      </h1>
      <p className="text-gray-500 leading-relaxed text-lg">Coming Soon</p>
    </div>
  );
}
