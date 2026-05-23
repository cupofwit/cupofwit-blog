/**
 * Site-wide configuration.
 * Edit the values below to customise the blog — no code changes needed.
 */
const siteConfig = {
  name: 'Cup of Wit',
  tagline: 'AI strategy for leaders who hate buzzwords',
  description: 'Practical AI strategy for senior leaders and business architects. No hype. No jargon. Written by Raman.',
  url: 'https://cupofwit.com',
  social: {
    twitter: null as string | null,
    github: null as string | null,
    linkedin: null as string | null,
    email: null as string | null,
  },
  copyrightName: 'Raman' as string | null,
  about: `I'm Raman — a Business Architect and Strategy consultant with 16+ years inside financial services and enterprise transformation.\n\nMy day job sits at the intersection of strategy, operating model design, and AI enablement inside a large financial institution. Before that, I spent years across global consulting firms — working on transformation programmes that had to actually deliver, not just look good in a deck.\n\nI write Cup of Wit because most AI content is written by people outside the enterprise — consultants selling frameworks, technologists explaining tools, or futurists painting visions. Very few people write from inside a large organisation, navigating the real constraints: governance, legacy systems, stakeholder alignment, and the gap between what AI promises and what operations can absorb.\n\nThat's what I write about.\n\nIf you're a leader, architect, or operator trying to think clearly about AI — without the hype — this is for you.\n\n[Read on Substack →](https://cupofwit.substack.com)` as string | null,
} as const;

export default siteConfig;
