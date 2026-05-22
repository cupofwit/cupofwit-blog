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
  about: `I'm Raman.\n\nI write Cup of Wit — a newsletter on AI strategy for people who work inside real organizations, not in research labs or startup pitches.\n\nMy lens is business architecture and product ownership. That means I care less about what AI can do in theory, and more about what breaks when you try to use it inside a team, a process, or a decision-making chain.\n\nMost AI content is written by people selling something — a tool, a course, a vision of the future. I'm not selling any of that. I'm a practitioner who builds AI-powered workflows, automates real processes, and writes honestly about what works and what doesn't.\n\nThe articles here are for senior leaders, consultants, and architects who want to think clearly about AI — without the buzzwords.\n\nRead more on Substack → https://cupofwit.substack.com` as string | null,
} as const;

export default siteConfig;
