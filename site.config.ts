/**
 * Site-wide configuration.
 * Edit the values below to customise the blog — no code changes needed.
 */
const siteConfig = {
  name: 'Your Name',
  tagline: 'A few sentences about who you are, what you think about, and why you write. Keep it honest and personal.',
  description: 'Essays and articles.',
  url: 'https://yourdomain.com',
  social: {
    twitter: null as string | null,
    github: null as string | null,
    linkedin: null as string | null,
    email: null as string | null,
  },
  copyrightName: null as string | null,
} as const;

export default siteConfig;
