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
        /* ── Functional colors — matched to live site ── */
        background:    '#faf8f5',
        surface:       '#FFFFFF',
        textPrimary:   '#1a1412',
        textSecondary: '#6b6560',
        borderLight:   '#e5e0da',

        /* ── Brand palette — matched to live site ── */
        brand: {
          green:  '#1a5c38',   /* primary green */
          dark:   '#0f3a22',   /* dark section backgrounds */
          mid:    '#14472b',   /* hover / gradient end */
          light:  '#e8f5ee',   /* pale hover bg */
          pale:   '#e8f5ee',   /* same as light */
          cream:  '#faf8f5',   /* warm off-white */
          gold:   '#d4a24e',   /* amber/gold accent */
          amber:  '#d4a24e',   /* same as gold */
          brown:  '#6b6560',   /* warm gray text */
        },
      },
      fontFamily: {
        sans:    ['var(--font-inter)', 'system-ui', 'sans-serif'],
        display: ['var(--font-archivo)', 'system-ui', 'sans-serif'],
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
