import Link from 'next/link';

export default function Header() {
  return (
    <header className="border-b border-gray-100">
      <div className="max-w-2xl mx-auto px-6 py-5 flex items-center justify-between">
        <Link
          href="/"
          className="text-sm font-medium text-gray-900 tracking-tight hover:text-gray-600 transition-colors"
        >
          Your Name
        </Link>
        <nav className="flex items-center gap-6">
          <Link
            href="/writing"
            className="text-sm text-gray-500 hover:text-gray-900 transition-colors"
          >
            Writing
          </Link>
        </nav>
      </div>
    </header>
  );
}
