import type { Config } from 'tailwindcss';
import typography from '@tailwindcss/typography';

const config: Config = {
  darkMode: 'class',
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        parchment: {
          50: '#FDFBF7',
          100: '#F9F6F0',
          200: '#F0EBE0',
          300: '#E5DDD0',
        },
        ink: {
          DEFAULT: '#2D3748',
          light: '#4A5568',
          lighter: '#718096',
        },
        burgundy: {
          DEFAULT: '#7A1B1E',
          dark: '#5C1416',
          light: '#9B2C30',
        },
        navy: {
          DEFAULT: '#1E3A8A',
          dark: '#1E2A5E',
          light: '#2B4FC7',
        },
        gold: {
          DEFAULT: '#D4AF37',
          dark: '#B8941E',
          light: '#E5C75E',
        },
      },
      fontFamily: {
        heading: ['var(--font-heading)', 'serif'],
        body: ['var(--font-lora)', 'serif'],
      },
      typography: ({ theme }: { theme: (path: string) => string }) => ({
        ignatian: {
          css: {
            '--tw-prose-body': theme('colors.ink.DEFAULT'),
            '--tw-prose-headings': theme('colors.burgundy.DEFAULT'),
            '--tw-prose-lead': theme('colors.ink.light'),
            '--tw-prose-links': theme('colors.burgundy.DEFAULT'),
            '--tw-prose-bold': theme('colors.ink.DEFAULT'),
            '--tw-prose-counters': theme('colors.burgundy.DEFAULT'),
            '--tw-prose-bullets': theme('colors.gold.DEFAULT'),
            '--tw-prose-hr': theme('colors.parchment.300'),
            '--tw-prose-quotes': theme('colors.ink.DEFAULT'),
            '--tw-prose-quote-borders': theme('colors.burgundy.DEFAULT'),
            '--tw-prose-captions': theme('colors.ink.lighter'),
            '--tw-prose-th-borders': theme('colors.ink.DEFAULT'),
            '--tw-prose-td-borders': theme('colors.parchment.300'),
            color: theme('colors.ink.DEFAULT'),
            fontFamily: 'var(--font-lora), serif',
            fontSize: '1.125rem',
            lineHeight: '1.85',
            maxWidth: 'none',
            'h1, h2, h3, h4': {
              fontFamily: 'var(--font-heading), serif',
              color: theme('colors.burgundy.DEFAULT'),
              fontWeight: '700',
            },
            h2: {
              fontSize: '1.75rem',
              marginTop: '3rem',
              marginBottom: '1.25rem',
              paddingBottom: '0.5rem',
              borderBottom: `2px solid ${theme('colors.gold.DEFAULT')}`,
            },
            h3: {
              fontSize: '1.35rem',
              marginTop: '2rem',
              marginBottom: '0.75rem',
              color: theme('colors.navy.DEFAULT'),
            },
            p: {
              marginTop: '1.25rem',
              marginBottom: '1.25rem',
              textAlign: 'justify',
            },
            a: {
              color: theme('colors.burgundy.DEFAULT'),
              textDecoration: 'underline',
              textUnderlineOffset: '3px',
              '&:hover': {
                color: theme('colors.gold.DEFAULT'),
              },
            },
            blockquote: {
              fontStyle: 'italic',
              borderLeftWidth: '4px',
              borderLeftColor: theme('colors.burgundy.DEFAULT'),
              backgroundColor: 'rgba(122, 27, 30, 0.04)',
              paddingTop: '1rem',
              paddingBottom: '1rem',
              paddingLeft: '1.5rem',
              paddingRight: '1.5rem',
              borderRadius: '0 0.5rem 0.5rem 0',
              marginTop: '2rem',
              marginBottom: '2rem',
            },
            'blockquote p:first-of-type::before': {
              content: 'none',
            },
            'blockquote p:last-of-type::after': {
              content: 'none',
            },
            table: {
              fontSize: '0.95rem',
              borderCollapse: 'collapse',
              width: '100%',
            },
            thead: {
              borderTopWidth: '2px',
              borderTopColor: theme('colors.ink.DEFAULT'),
              borderBottomWidth: '2px',
              borderBottomColor: theme('colors.ink.DEFAULT'),
            },
            'thead th': {
              fontFamily: 'var(--font-heading), serif',
              fontWeight: '600',
              fontSize: '0.85rem',
              letterSpacing: '0.05em',
              textTransform: 'uppercase',
              padding: '0.75rem 1rem',
              verticalAlign: 'bottom',
            },
            'tbody td': {
              padding: '0.75rem 1rem',
              borderBottomWidth: '1px',
              borderBottomColor: theme('colors.parchment.300'),
            },
            'tbody tr:last-child': {
              borderBottomWidth: '2px',
              borderBottomColor: theme('colors.ink.DEFAULT'),
            },
            'tbody tr:last-child td': {
              borderBottom: 'none',
            },
            hr: {
              borderColor: theme('colors.parchment.300'),
              marginTop: '3rem',
              marginBottom: '3rem',
            },
            'ol > li': {
              paddingLeft: '0.5rem',
            },
            'ul > li': {
              paddingLeft: '0.5rem',
            },
            'ul > li::marker': {
              color: theme('colors.gold.DEFAULT'),
            },
            'ol > li::marker': {
              color: theme('colors.burgundy.DEFAULT'),
              fontWeight: '600',
            },
            strong: {
              fontWeight: '700',
            },
          },
        },
        'ignatian-dark': {
          css: {
            '--tw-prose-body': '#E2E8F0',
            '--tw-prose-headings': '#F3D377',
            '--tw-prose-lead': '#CBD5E1',
            '--tw-prose-links': '#F3D377',
            '--tw-prose-bold': '#FFFFFF',
            '--tw-prose-counters': '#F3D377',
            '--tw-prose-bullets': '#D4AF37',
            '--tw-prose-hr': 'rgba(212, 175, 55, 0.2)',
            '--tw-prose-quotes': '#F1ECE1',
            '--tw-prose-quote-borders': '#D4AF37',
            '--tw-prose-captions': '#94A3B8',
            '--tw-prose-th-borders': 'rgba(212, 175, 55, 0.35)',
            '--tw-prose-td-borders': 'rgba(255, 255, 255, 0.08)',
            color: '#E2E8F0',
            fontFamily: 'var(--font-lora), serif',
            fontSize: '1.125rem',
            lineHeight: '1.85',
            maxWidth: 'none',
            'h1, h2, h3, h4': {
              fontFamily: 'var(--font-heading), serif',
              color: '#F3D377',
              fontWeight: '700',
            },
            h2: {
              fontSize: '1.75rem',
              marginTop: '3rem',
              marginBottom: '1.25rem',
              paddingBottom: '0.5rem',
              borderBottom: '2px solid rgba(212, 175, 55, 0.45)',
              color: '#F3D377',
            },
            h3: {
              fontSize: '1.35rem',
              marginTop: '2rem',
              marginBottom: '0.75rem',
              color: '#93C5FD',
            },
            p: {
              marginTop: '1.25rem',
              marginBottom: '1.25rem',
              textAlign: 'justify',
              color: '#E2E8F0',
            },
            a: {
              color: '#F3D377',
              textDecoration: 'underline',
              textUnderlineOffset: '3px',
              '&:hover': {
                color: '#FDE047',
              },
            },
            blockquote: {
              fontStyle: 'italic',
              borderLeftWidth: '4px',
              borderLeftColor: '#D4AF37',
              backgroundColor: 'rgba(212, 175, 55, 0.08)',
              color: '#F1ECE1',
              paddingTop: '1rem',
              paddingBottom: '1rem',
              paddingLeft: '1.5rem',
              paddingRight: '1.5rem',
              borderRadius: '0 0.5rem 0.5rem 0',
              marginTop: '2rem',
              marginBottom: '2rem',
            },
            'blockquote p:first-of-type::before': {
              content: 'none',
            },
            'blockquote p:last-of-type::after': {
              content: 'none',
            },
            table: {
              fontSize: '0.95rem',
              borderCollapse: 'collapse',
              width: '100%',
              color: '#E2E8F0',
            },
            thead: {
              borderTopWidth: '2px',
              borderTopColor: 'rgba(212, 175, 55, 0.4)',
              borderBottomWidth: '2px',
              borderBottomColor: 'rgba(212, 175, 55, 0.4)',
            },
            'thead th': {
              fontFamily: 'var(--font-heading), serif',
              fontWeight: '600',
              fontSize: '0.85rem',
              letterSpacing: '0.05em',
              textTransform: 'uppercase',
              padding: '0.75rem 1rem',
              verticalAlign: 'bottom',
              color: '#F3D377',
            },
            'tbody td': {
              padding: '0.75rem 1rem',
              borderBottomWidth: '1px',
              borderBottomColor: 'rgba(255, 255, 255, 0.08)',
            },
            'tbody tr:last-child': {
              borderBottomWidth: '2px',
              borderBottomColor: 'rgba(212, 175, 55, 0.4)',
            },
            'tbody tr:last-child td': {
              borderBottom: 'none',
            },
            hr: {
              borderColor: 'rgba(212, 175, 55, 0.2)',
              marginTop: '3rem',
              marginBottom: '3rem',
            },
            'ol > li': {
              paddingLeft: '0.5rem',
              color: '#E2E8F0',
            },
            'ul > li': {
              paddingLeft: '0.5rem',
              color: '#E2E8F0',
            },
            'ul > li::marker': {
              color: '#D4AF37',
            },
            'ol > li::marker': {
              color: '#F3D377',
              fontWeight: '600',
            },
            strong: {
              fontWeight: '700',
              color: '#FFFFFF',
            },
          },
        },
      }),
    },
  },
  plugins: [
    typography,
  ],
};

export default config;
