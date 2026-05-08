import Link from 'next/link';
import { WA_LINK } from '@/lib/config';

// Real hero image from live site (cdn.sintra.ai)
const HERO_BG = 'https://cdn.sintra.ai/img/3h24VGOU4ujzwNwSW6qLUBzo1YcA9_1ux0xthOiZB60/g:ce/rs:fill:0:0:0/czM6Ly9zaW50cmEtYnJhaW5haS1tZWRpYS8zNTRkNTI3OS1lNDYxLTQzYzUtYTUxZS0wNjhkZjQ2MmZhNmIvZjY2MDQwMGYtMzBjZi00NDQyLTg1NmUtYjQ4ZDJjOGFkMzI5LWhvbWVfaW5kaWFfZmlyc3RfYnViYmxlX3RlYS5qcGc.jpg';

const TRUST = [
  'FSSC 22000 Certified',
  '200+ Recipes',
  '100+ Partners',
  'Made in India',
];

export default function HeroSection() {
  return (
    <section id="top" className="relative overflow-hidden bg-[#0f3a22]">
      {/* background image */}
      <div className="absolute inset-0">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={HERO_BG}
          alt=""
          className="h-full w-full object-cover opacity-35"
          loading="eager"
          decoding="async"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0f3a22] via-[#0f3a22]/85 to-transparent" />
      </div>

      {/* content */}
      <div className="relative mx-auto flex min-h-[520px] max-w-7xl items-center px-6 py-20 lg:min-h-[720px] lg:px-8">
        <div className="max-w-2xl">
          {/* badge */}
          <div className="mb-5 inline-flex items-center gap-2.5 rounded-full bg-white/10 px-4 py-2 text-[12px] font-semibold tracking-wide text-white/80 backdrop-blur-sm sm:px-5 sm:text-[13px]">
            <span className="h-2 w-2 rounded-full bg-[#d4a24e] animate-pulse" />
            India&apos;s First Bubble Tea Manufacturer
          </div>

          {/* headline */}
          <h1
            className="text-[1.85rem] font-extrabold leading-[1.1] tracking-tight text-white sm:text-[2.5rem] lg:text-[3.5rem]"
            style={{ fontFamily: 'var(--font-archivo)' }}
          >
            Bulk Ingredients &amp; Boba Solutions at Scale
          </h1>

          {/* subtext */}
          <p className="mt-4 max-w-lg text-[0.95rem] leading-[1.7] text-white/65 sm:text-[1.05rem]">
            India&apos;s first bubble tea manufacturer. FSSC 22000 certified facility in
            Hyderabad. Direct from factory pricing.
          </p>

          {/* CTAs */}
          <div className="mt-8 flex flex-wrap gap-3">
            <Link
              href="/collections/all"
              className="rounded-full bg-[#d4a24e] px-6 py-3.5 text-[14px] font-bold text-[#1a1412] transition hover:bg-[#c4922e] hover:scale-[1.03] sm:px-8 sm:py-4 sm:text-[15px]"
            >
              View Catalog
            </Link>
            <a
              href={WA_LINK('Hi Tea Planet! I want to launch a beverage business. Can you help?')}
              target="_blank"
              rel="noreferrer"
              className="rounded-full border border-white/25 px-6 py-3.5 text-[14px] font-semibold text-white transition hover:bg-white/10 sm:px-8 sm:py-4 sm:text-[15px]"
            >
              Talk to Our Team
            </a>
          </div>

          {/* trust badges */}
          <div className="mt-10 flex flex-wrap gap-x-5 gap-y-2">
            {TRUST.map((t) => (
              <span
                key={t}
                className="flex items-center gap-2 text-[12px] font-medium text-white/45 sm:text-[13px]"
              >
                <svg
                  className="h-4 w-4 text-[#d4a24e]"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2.5}
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                {t}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* slide indicator dots */}
      <div className="absolute bottom-6 left-1/2 flex -translate-x-1/2 gap-2.5">
        <span className="h-2 w-2.5 rounded-full bg-white/25" />
        <span className="h-2 w-2.5 rounded-full bg-white/25" />
        <span className="h-2 w-9 rounded-full bg-[#d4a24e]" />
      </div>
    </section>
  );
}
