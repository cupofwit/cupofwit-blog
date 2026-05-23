import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Start Here',
  description: 'New to Cup of Wit? Start here — a guide to the best of the blog.',
};

const articles = [
  {
    title: "The AI Agent Promised to Do Your Work. Here's Why It Didn't.",
    subtitle: "The four conditions that have to be true before you trust an agent with anything that counts.",
    href: "https://open.substack.com/pub/cupofwit/p/the-ai-agent-promised-to-do-your",
  },
  {
    title: "I Built an AI Research Agent. Here's the Unfiltered Account.",
    subtitle: "What the tutorials don't show you — including the part where the AI confidently led me in circles.",
    href: "https://cupofwit.substack.com/p/i-built-an-ai-research-agent-heres",
  },
  {
    title: "I Automated My Content Pipeline. Here's the Honest Account.",
    subtitle: "The build-in-public post I wish existed — including the ratio nobody talks about.",
    href: "https://cupofwit.substack.com/p/i-automated-my-content-pipeline-heres",
  },
  {
    title: "How to Talk to AI Like a Manager, Not a Search Engine",
    subtitle: "Most people treat AI like a search engine. Managers assign. That mental shift changes everything.",
    href: "https://cupofwit.substack.com/p/stop-searching-ai-start-managing",
  },
  {
    title: "AI Does Not Replace Human Judgment — It Reveals Its Absence",
    subtitle: "For leaders who believe their organizations are ready for AI — and haven't asked what they're actually ready for.",
    href: "https://open.substack.com/pub/cupofwit/p/ai-does-not-replace-human-judgment",
  },
];

export default function StartHerePage() {
  return (
    <div className="max-w-2xl mx-auto px-6 py-16">
      <h1 className="text-2xl font-semibold tracking-tight text-gray-900 mb-10 font-serif">
        Start Here
      </h1>

      <div className="prose prose-gray max-w-none">
        <p className="text-gray-600 leading-relaxed mb-4">
          If you&apos;ve landed here, you&apos;re probably a leader, consultant, or architect trying to think clearly about AI — without the hype, the vendor pitches, or the 47-step frameworks.
        </p>
        <p className="text-gray-600 leading-relaxed mb-4">
          You&apos;re in the right place.
        </p>
        <p className="text-gray-600 leading-relaxed mb-4">
          I&apos;m Raman. I work as a Business Architect inside a large financial institution, at the intersection of strategy, operating model design, and AI enablement. I&apos;ve spent 16+ years inside large organisations — the kind where AI has to survive governance, legacy systems, and competing stakeholder priorities to be useful.
        </p>
        <p className="text-gray-600 leading-relaxed mb-10">
          That&apos;s the lens I write from. Most AI content is written from the outside. I write from the inside.
        </p>
      </div>

      <hr className="border-gray-100 mb-10" />

      <h2 className="text-xs font-semibold tracking-widest text-gray-400 uppercase mb-6">
        Start with these
      </h2>

      <div className="mb-12">
        {articles.map((article, i) => (
          <a
            key={i}
            href={article.href}
            target="_blank"
            rel="noopener noreferrer"
            className="group block py-3.5 border-b border-gray-100 last:border-0"
          >
            <span className="text-gray-800 group-hover:underline underline-offset-[3px] decoration-gray-300 text-[15px] leading-snug block">
              {article.title}
            </span>
            <p className="text-sm text-gray-400 mt-0.5 leading-snug font-normal">{article.subtitle}</p>
          </a>
        ))}
      </div>

      <p className="text-sm text-gray-400 mb-3">Published weekly. Free to read.</p>
      <a
        href="https://cupofwit.substack.com"
        target="_blank"
        rel="noopener noreferrer"
        className="inline-block text-sm font-semibold text-amber-700 hover:text-amber-900 transition-colors"
      >
        Subscribe on Substack →
      </a>
    </div>
  );
}
