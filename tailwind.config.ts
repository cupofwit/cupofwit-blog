import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['var(--font-sans)', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        serif: ['var(--font-serif)', 'Georgia', 'serif'],
      },
      typography: {
        DEFAULT: {
          css: {
            maxWidth: '100%',
            color: '#1a1a1a',
            fontSize: '1.0625rem',
            lineHeight: '1.8',
            fontFamily: 'var(--font-serif), Georgia, serif',
            a: {
              color: '#1a1a1a',
              textDecorationColor: '#d1d5db',
              '&:hover': {
                textDecorationColor: '#1a1a1a',
              },
            },
            'h1, h2, h3, h4': {
              fontFamily: 'var(--font-serif), Georgia, serif',
              fontWeight: '600',
              letterSpacing: '-0.02em',
              color: '#111',
            },
            blockquote: {
              fontStyle: 'italic',
              borderLeftColor: '#e5e7eb',
              color: '#6b7280',
            },
            code: {
              fontWeight: '400',
              fontFamily: 'ui-monospace, monospace',
              backgroundColor: '#f3f4f6',
              padding: '0.1em 0.3em',
              borderRadius: '0.2em',
              fontSize: '0.875em',
              '&::before': { content: '""' },
              '&::after': { content: '""' },
            },
            pre: {
              backgroundColor: '#f8fafc',
              border: '1px solid #e5e7eb',
              fontFamily: 'ui-monospace, monospace',
            },
          },
        },
      },
    },
  },
  plugins: [require('@tailwindcss/typography')],
};

export default config;
