import Link from 'next/link';
import type { Metadata } from 'next';
import siteConfig from '@/site.config';

export const metadata: Metadata = {
  title: { absolute: siteConfig.name },
  description: siteConfig.description,
  openGraph: {
    title: siteConfig.name,
    description: siteConfig.description,
  },
};

const pillars = [
  {
    title: 'Strategy & Operating Models',
    description: 'AI that fits your org, not just the demo',
  },
  {
    title: 'Prompting & Context',
    description: 'Getting better outputs without the guesswork',
  },
  {
    title: 'Build Logs',
    description: 'Honest accounts of building with AI',
  },
];

const featuredArticles = [
  {
    title: "AI Does Not Replace Human Judgment — It Reveals Its Absence",
    subtitle: "For leaders who believe their organizations are ready for AI — and haven't asked what they're actually ready for.",
    date: '2026-04-02',
    displayDate: 'Apr 2, 2026',
    href: 'https://open.substack.com/pub/cupofwit/p/ai-does-not-replace-human-judgment',
  },
  {
    title: "How to Talk to AI Like a Manager, Not a Search Engine",
    subtitle: "Most people treat AI like a search engine. Managers assign. That mental shift changes everything about your outputs.",
    date: '2026-04-07',
    displayDate: 'Apr 7, 2026',
    href: 'https://cupofwit.substack.com/p/stop-searching-ai-start-managing',
  },
  {
    title: "The AI Agent Promised to Do Your Work. Here's Why It Didn't.",
    subtitle: "The four conditions that have to be true before you trust an agent with anything that counts.",
    date: '2026-04-28',
    displayDate: 'Apr 28, 2026',
    href: 'https://open.substack.com/pub/cupofwit/p/the-ai-agent-promised-to-do-your',
  },
];

export default function HomePage() {
  return (
    <div className="max-w-2xl mx-auto px-6 py-20 sm:py-32">

      {/* Section 1 — Hero */}
      <section className="mb-12 pb-12 border-b border-gray-100">
        <h1 className="text-4xl sm:text-5xl font-semibold tracking-tight text-gray-900 mb-6 font-serif leading-tight">
          {siteConfig.name}
        </h1>
        <p className="text-gray-500 leading-relaxed text-lg max-w-md">
          {siteConfig.tagline}
        </p>
        <p className="text-sm text-gray-400 mt-6 mb-3">Published weekly. Free to read.</p>
        <a
          href="https://cupofwit.substack.com"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block text-sm font-semibold text-amber-700 hover:text-amber-900 transition-colors"
        >
          Subscribe on Substack →
        </a>
      </section>

      {/* Section 2 — Positioning statement */}
      <section className="mb-12">
        <p className="text-gray-500 leading-relaxed mb-2">
          Most AI content is written by people selling something.
        </p>
        <p className="text-gray-500 leading-relaxed">
          This is written from inside a large organisation — where AI has to survive governance, budgets, and real constraints.
        </p>
      </section>

      {/* Section 3 — Three content pillars */}
      <section className="mb-16">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          {pillars.map((pillar) => (
            <div
              key={pillar.title}
              className="border border-gray-100 rounded-lg px-4 py-5 bg-white/50"
            >
              <p className="text-sm font-semibold text-gray-800 mb-1 leading-snug">{pillar.title}</p>
              <p className="text-sm text-gray-400 leading-snug">{pillar.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Section 4 — Featured Writing */}
      <section className="mb-16">
        <h2 className="text-xs font-semibold tracking-widest text-gray-400 uppercase mb-6">
          Featured Writing
        </h2>
        <div>
          {featuredArticles.map((article) => (
            <a
              key={article.href}
              href={article.href}
              target="_blank"
              rel="noopener noreferrer"
              className="group block py-3.5 border-b border-gray-100 last:border-0"
            >
              <div className="flex items-baseline justify-between gap-4">
                <span className="text-gray-800 group-hover:underline underline-offset-[3px] decoration-gray-300 text-[15px] leading-snug">
                  {article.title}
                </span>
                <time dateTime={article.date} className="text-sm text-gray-400 shrink-0 tabular-nums">
                  {article.displayDate}
                </time>
              </div>
              <p className="text-sm text-gray-400 mt-0.5 leading-snug font-normal">{article.subtitle}</p>
            </a>
          ))}
        </div>
        <div className="mt-6">
          <Link
            href="/writing"
            className="inline-flex items-center gap-1.5 text-sm text-gray-500 hover:text-gray-900 transition-colors"
          >
            View all writing
            <svg width="12" height="12" viewBox="0 0 12 12" fill="none" aria-hidden="true">
              <path d="M2 6h8M6 2l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </Link>
        </div>
      </section>

      {/* Section 5 — Newsletter capture */}
      <section className="pt-10 border-t border-gray-100">
        <p className="text-sm text-gray-400 mb-3">Every week, one article. No noise.</p>
        <a
          href="https://cupofwit.substack.com"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block text-sm font-semibold text-amber-700 hover:text-amber-900 transition-colors"
        >
          Subscribe on Substack →
        </a>
      </section>

    </div>
  );
}
