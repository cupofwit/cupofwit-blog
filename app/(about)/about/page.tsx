import type { Metadata } from 'next';
import ReactMarkdown from 'react-markdown';
import siteConfig from '@/site.config';

export const metadata: Metadata = {
  title: 'About',
  description: `About ${siteConfig.name}`,
};

export default function AboutPage() {
  return (
    <div className="max-w-2xl mx-auto px-6 py-16">
      <h1 className="text-2xl font-semibold tracking-tight text-gray-900 mb-10 font-serif">
        About
      </h1>

      {siteConfig.about ? (
        <div className="prose prose-gray max-w-none">
          {siteConfig.about.split('\n\n').map((para, i) => (
            <p key={i} className="text-gray-600 leading-relaxed mb-4 last:mb-0">
              <ReactMarkdown
                components={{
                  p: ({ children }) => <>{children}</>,
                  a: ({ href, children }) => (
                    <a href={href} target="_blank" rel="noopener noreferrer" className="text-amber-700 hover:text-amber-900 transition-colors">
                      {children}
                    </a>
                  ),
                }}
              >
                {para}
              </ReactMarkdown>
            </p>
          ))}
        </div>
      ) : (
        <p className="text-gray-400 text-sm">Nothing here yet.</p>
      )}
    </div>
  );
}
