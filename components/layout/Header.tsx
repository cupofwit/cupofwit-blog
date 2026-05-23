'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import siteConfig from '@/site.config';

export default function Header() {
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 bg-[#faf9f7]/90 backdrop-blur-sm border-b border-gray-100">
      <div className="max-w-2xl mx-auto px-6 py-4 flex items-center justify-between">
        <Link href="/" className="text-sm font-semibold text-gray-900 tracking-tight hover:text-gray-500 transition-colors">
          {siteConfig.name}
        </Link>
        <nav className="flex items-center gap-6">
          <Link
            href="/start-here"
            className={`text-sm transition-colors ${
              pathname === '/start-here' ? 'text-gray-900 font-medium' : 'text-gray-500 hover:text-gray-900'
            }`}
          >
            Start Here
          </Link>
          <Link
            href="/writing"
            className={`text-sm transition-colors ${
              pathname?.startsWith('/writing') ? 'text-gray-900 font-medium' : 'text-gray-500 hover:text-gray-900'
            }`}
          >
            Writing
          </Link>
          <Link
            href="/about"
            className={`text-sm transition-colors ${
              pathname === '/about' ? 'text-gray-900 font-medium' : 'text-gray-500 hover:text-gray-900'
            }`}
          >
            About
          </Link>
        </nav>
      </div>
    </header>
  );
}
