/**
 * Site-wide configuration.
 * Edit the values below to customise the blog — no code changes needed.
 */
const siteConfig = {
  /** Displayed in the header, footer, hero, and page metadata */
  name: 'Your Name',

  /** Short tagline shown under your name on the homepage */
  tagline: 'A few sentences about who you are, what you think about, and why you write. Keep it honest and personal.',

  /** Used in <meta name="description"> and OG tags */
  description: 'Essays and articles.',

  /** Base URL of the deployed site (no trailing slash) */
  url: 'https://yourdomain.com',

  /** Social links — set to null to hide */
  social: {
    twitter: null as string | null,   // e.g. 'https://twitter.com/yourhandle'
    github: null as string | null,    // e.g. 'https://github.com/yourhandle'
    linkedin: null as string | null,  // e.g. 'https://linkedin.com/in/yourhandle'
    email: null as string | null,     // e.g. 'hello@yourdomain.com'
  },

  /** Copyright name in the footer — defaults to `name` if not set */
  copyrightName: null as string | null,
} as const;

export default siteConfig;
