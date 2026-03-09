import type { Metadata } from 'next';
import { Inter, Lora } from 'next/font/google';
import './globals.css';
import Header from '@/components/Header';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-sans',
  display: 'swap',
});

const lora = Lora({
  subsets: ['latin'],
  variable: '--font-serif',
  display: 'swap',
});

export const metadata: Metadata = {
  title: {
    default: 'Writing',
    template: '%s | Writing',
  },
  description: 'Essays and articles.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} ${lora.variable}`}>
      <body className="bg-[#faf9f7] text-gray-900 font-sans min-h-screen flex flex-col">
        <Header />
        <main className="flex-1">{children}</main>
        <footer className="border-t border-gray-100 mt-auto">
          <div className="max-w-2xl mx-auto px-6 py-8 flex items-center justify-between text-sm text-gray-400">
            <span>Your Name</span>
            <span>© 2025</span>
          </div>
        </footer>
      </body>
    </html>
  );
}
