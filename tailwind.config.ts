import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        /* ── Functional colors (migration doc) ── */
        background: '#F9F9F9',
        surface:    '#FFFFFF',
        textPrimary:   '#1A1A1A',
        textSecondary: '#666666',
        borderLight:   '#E0E0E0',

        /* ── Brand palette ── */
        brand: {
          green:  '#1B4332',
          mid:    '#2D6A4F',
          light:  '#52B788',
          pale:   '#D8F3DC',
          cream:  '#F9F9F9',
          gold:   '#D4A017',
          amber:  '#E9C46A',
          brown:  '#6B3A2A',
        },
      },
      fontFamily: {
        sans:    ['var(--font-poppins)', 'system-ui', 'sans-serif'],
        display: ['var(--font-playfair)', 'Georgia', 'serif'],
      },
      fontSize: {
        'h1': ['3rem',    { lineHeight: '1.15', fontWeight: '700' }],
        'h2': ['2.25rem', { lineHeight: '1.2',  fontWeight: '600' }],
        'h3': ['1.5rem',  { lineHeight: '1.3',  fontWeight: '600' }],
        'body': ['1rem',  { lineHeight: '1.6',  fontWeight: '400' }],
        'sm':   ['0.875rem', { lineHeight: '1.5', fontWeight: '400' }],
        'btn':  ['1rem',  { lineHeight: '1',    fontWeight: '600' }],
      },
      borderRadius: {
        card:   '8px',
        btn:    '8px',
        pill:   '9999px',
      },
      boxShadow: {
        subtle:   '0 2px 8px rgba(0,0,0,0.08)',
        elevated: '0 8px 24px rgba(0,0,0,0.12)',
        card:     '0 2px 8px rgba(0,0,0,0.08)',
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-in-out',
        'slide-up': 'slideUp 0.4s ease-out',
      },
      keyframes: {
        fadeIn:  { '0%': { opacity: '0' },                              '100%': { opacity: '1' } },
        slideUp: { '0%': { transform: 'translateY(20px)', opacity: '0' }, '100%': { transform: 'translateY(0)', opacity: '1' } },
      },
    },
  },
  plugins: [],
};

export default config;
