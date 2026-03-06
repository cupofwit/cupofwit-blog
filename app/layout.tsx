import type { Metadata } from 'next';
import './globals.css';
import Header from '@/components/Header';

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
    <html lang="en">
      <body className="bg-white text-gray-900 font-sans min-h-screen">
        <Header />
        <main>{children}</main>
      </body>
    </html>
  );
}
