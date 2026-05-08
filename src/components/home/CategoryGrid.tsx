'use client';

import { useRef, useState } from 'react';
import Link from 'next/link';

const PRODUCTS = [
  {
    title: 'Beverage Premixes',
    desc: 'Milk & fruit bubble tea, ice tea, coffee premixes — 40+ flavors ready to blend.',
    badge: '40+ Flavors',
    href: '/collections/boba-bubble-tea',
    img: 'https://cdn.sintra.ai/img/3h24VGOU4ujzwNwSW6qLUBzo1YcA9_1ux0xthOiZB60/g:ce/rs:fill:0:0:0/czM6Ly9zaW50cmEtYnJhaW5haS1tZWRpYS8zNTRkNTI3OS1lNDYxLTQzYzUtYTUxZS0wNjhkZjQ2MmZhNmIvZjY2MDQwMGYtMzBjZi00NDQyLTg1NmUtYjQ4ZDJjOGFkMzI5LWhvbWVfaW5kaWFfZmlyc3RfYnViYmxlX3RlYS5qcGc.jpg',
    featured: true,
  },
  {
    title: 'Tea Concentrate',
    desc: '30 ML = 150–200 ML decoction. QSR speed, 99% consistency, 2–3 hour training.',
    badge: '5 Variants',
    href: '/collections/tea-coffee',
    img: 'https://cdn.sintra.ai/img/ecxdReYBlSoJhaEf5YhcLZC98p3_syBAltlKGGS4ey0/g:ce/rs:fill:0:0:0/czM6Ly9zaW50cmEtYnJhaW5haS1tZWRpYS9rbm93bGVkZ2UtcHJvZmlsZXMvMzU0ZDUyNzktZTQ2MS00M2M1LWE1MWUtMDY4ZGY0NjJmYTZiL2Fzc2V0cy9lZGRhNWNhOC00NzZjLTRlOTktOTIyNS0zZjVjMmYyMDg2NWIvQmV2YXJhZ2VfX0NvbmNlbnRyYXRlX1RlYV9fLUZyb250LmpwZw.jpg',
  },
  {
    title: 'Syrups & Bases',
    desc: 'Brown sugar, caramel, fruit syrups, tea concentrates & decoctions.',
    badge: '15+ Varieties',
    href: '/collections/beverage-mixes',
    img: 'https://cdn.sintra.ai/img/jmt5Os-jGYQpkdGzqUgkydRxgxzhdcKMqU_8ysUgWRo/g:ce/rs:fill:0:0:0/czM6Ly9zaW50cmEtYnJhaW5haS1tZWRpYS8zNTRkNTI3OS1lNDYxLTQzYzUtYTUxZS0wNjhkZjQ2MmZhNmIvOGE4OTA4ZDUtMDVjMi00ZTUxLTliMmEtNTUyYTE1ZGM0OTM3LVRoYWlNaWxrQm9iYS5wbmc.jpg',
  },
  {
    title: 'Boba Desserts',
    desc: 'Sponge cake base mixes & frost swirls whip — taro cakes, matcha jar cakes, Swiss rolls & more.',
    badge: '19+ Products',
    href: '/collections/boba-desserts',
    img: 'https://cdn.sintra.ai/img/-QLzwRJKuZEOkIlH6q2s1SFzM95kxB162mSRRQwSgjQ/g:ce/rs:fill:0:0:0/czM6Ly9zaW50cmEtYnJhaW5haS1tZWRpYS9rbm93bGVkZ2UtcHJvZmlsZXMvMzU0ZDUyNzktZTQ2MS00M2M1LWE1MWUtMDY4ZGY0NjJmYTZiL2Fzc2V0cy8yY2Y5OTBkZS0wNzEwLTRlYjctYTVjYi1lYTg1MjEzOGM4ODkvTWF0Y2hhX0NBS0VfRkxBR1NISVBfUFJFTUlVTV9jdXRfb3Blbi5wbmc.jpg',
  },
  {
    title: 'Popping Boba',
    desc: '10+ flavors — mango, strawberry, blueberry, passion fruit, lychee & more.',
    badge: '10+ Flavors',
    href: '/collections/toppings',
    img: 'https://cdn.sintra.ai/img/I8MCSBFnpi2BbtOTe8Lt7Z5xsZnXNBdCAA3Zq71NLQo/g:ce/rs:fill:0:0:0/czM6Ly9zaW50cmEtYnJhaW5haS1tZWRpYS8zNTRkNTI3OS1lNDYxLTQzYzUtYTUxZS0wNjhkZjQ2MmZhNmIvNTYzMWY3NjctMTFjYy00OTE3LWFlMDgtNGNjNGM5OTZiMTNhLWhvbWVfcG9wcGluZ19ib2JhX2NvbGxlY3Rpb24uanBn.jpg',
  },
  {
    title: 'Tapioca Pearls',
    desc: 'Classic black pearls, mini pearls & specialty tapioca — chewy perfection.',
    badge: '5+ Varieties',
    href: '/collections/toppings',
    img: 'https://cdn.sintra.ai/img/Ae2t0hBmSyiO8WDwseTC_lRUd-7AQ4OMpw2Au9UtrCQ/g:ce/rs:fill:0:0:0/czM6Ly9zaW50cmEtYnJhaW5haS1tZWRpYS8zNTRkNTI3OS1lNDYxLTQzYzUtYTUxZS0wNjhkZjQ2MmZhNmIvZjRjMjA1YzktMWJlMS00MzkwLWFmODctZTNiMDc5MGExN2MwLTIwMjUwNzE1XzIwMDdfTnV0dHlfVGFyb19Cb2JhX0RlbGlnaHRfc2ltcGxlX2NvbXBvc2VfMDFrMDc4OGtmbWYweHZoeDB2cHpwZmtxcnIucG5n.jpg',
  },
  {
    title: 'Milkshake & Lassi Mixes',
    desc: 'Cookies & cream, mango, strawberry, butterscotch — thick, creamy bases.',
    badge: '12+ Flavors',
    href: '/collections/beverage-mixes',
    img: 'https://cdn.sintra.ai/img/na26-03IOcoll_XTSZp6A_HCrgIx3oN9GqYNMB8Gg20/g:ce/rs:fill:0:0:0/czM6Ly9zaW50cmEtYnJhaW5haS1tZWRpYS8zNTRkNTI3OS1lNDYxLTQzYzUtYTUxZS0wNjhkZjQ2MmZhNmIvNjQ4YTI1YzUtNjZiZi00YWUzLWI4MGUtNGUyNGUwNjRkYzViLURTQ180MzE1LUVkaXQuanBn.jpg',
  },
  {
    title: 'Mocktail & Lemonade Mixes',
    desc: 'Vibrant fruit mocktails, fresh lemonades & refreshing coolers.',
    badge: '15+ Flavors',
    href: '/collections/beverage-mixes',
    img: 'https://cdn.sintra.ai/img/91uNgEf8X8Xl35wOB44oNA0OSzCqTJ1fnGQcsVkIEIQ/g:ce/rs:fill:0:0:0/czM6Ly9zaW50cmEtYnJhaW5haS1tZWRpYS8zNTRkNTI3OS1lNDYxLTQzYzUtYTUxZS0wNjhkZjQ2MmZhNmIvNDVjZjI4ZGEtOGFlOS00M2M2LWI4NzEtYjg5MzU5MzY4YWE2LUhlYWRlcl9zcGVjaWFsaXR5X21pbGtzaGFrZS5qcGc.jpg',
  },
  {
    title: 'Industrial Ingredients',
    desc: 'Bulk-grade Popping Boba, Konjac Pearls, Nata de Coco & Tapioca Pearls. 20 KG buckets.',
    badge: '4 Products',
    href: '/collections/industrial',
    img: 'https://cdn.sintra.ai/img/I8MCSBFnpi2BbtOTe8Lt7Z5xsZnXNBdCAA3Zq71NLQo/g:ce/rs:fill:0:0:0/czM6Ly9zaW50cmEtYnJhaW5haS1tZWRpYS8zNTRkNTI3OS1lNDYxLTQzYzUtYTUxZS0wNjhkZjQ2MmZhNmIvNTYzMWY3NjctMTFjYy00OTE3LWFlMDgtNGNjNGM5OTZiMTNhLWhvbWVfcG9wcGluZ19ib2JhX2NvbGxlY3Rpb24uanBn.jpg',
  },
];

const CARD_W = 320;
const CARD_GAP = 24;

export default function CategoryGrid() {
  const trackRef = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(0);

  function scrollTo(index: number) {
    const el = trackRef.current;
    if (!el) return;
    const target = index * (CARD_W + CARD_GAP);
    el.scrollTo({ left: target, behavior: 'smooth' });
    setActive(index);
  }

  function prev() { scrollTo(Math.max(0, active - 1)); }
  function next() { scrollTo(Math.min(PRODUCTS.length - 1, active + 1)); }

  return (
    <section id="products" className="py-24 lg:py-32 bg-white overflow-hidden">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* header */}
        <div className="text-center mb-14">
          <p className="text-[11px] font-bold uppercase tracking-[0.3em] text-[#d4a24e]">Our Products</p>
          <h2
            className="font-display mt-3 text-[2rem] font-extrabold tracking-tight text-[#1a1412] sm:text-[2.5rem] lg:text-[2.75rem]"
          >
            Premium Beverage Ingredients
          </h2>
          <p className="mx-auto mt-5 max-w-2xl text-base leading-relaxed text-[#6b6560]">
            Everything you need to craft high-margin drinks — manufactured in-house at our FSSC
            22000 certified facility in Hyderabad.
          </p>
        </div>

        {/* carousel */}
        <div className="relative">
          {/* prev arrow */}
          <button
            onClick={prev}
            aria-label="Previous"
            className="absolute left-0 top-1/2 z-10 hidden md:flex h-10 w-10 -translate-x-5 -translate-y-1/2 items-center justify-center rounded-full border border-[#1a5c38]/20 bg-white text-[#1a5c38] shadow-lg transition hover:border-[#1a5c38]/40 hover:bg-[#e8f5ee]"
          >
            <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
            </svg>
          </button>

          {/* next arrow */}
          <button
            onClick={next}
            aria-label="Next"
            className="absolute right-0 top-1/2 z-10 hidden md:flex h-10 w-10 translate-x-5 -translate-y-1/2 items-center justify-center rounded-full border border-[#1a5c38]/20 bg-white text-[#1a5c38] shadow-lg transition hover:border-[#1a5c38]/40 hover:bg-[#e8f5ee]"
          >
            <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
            </svg>
          </button>

          {/* scrollable track */}
          <div
            ref={trackRef}
            className="flex gap-6 overflow-x-auto scroll-smooth pb-4"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
            onScroll={(e) => {
              const el = e.currentTarget;
              const idx = Math.round(el.scrollLeft / (CARD_W + CARD_GAP));
              setActive(idx);
            }}
          >
            {PRODUCTS.map((p, i) => (
              <Link
                key={p.title}
                href={p.href}
                className={`group flex-shrink-0 overflow-hidden rounded-2xl border bg-white transition-all duration-300 hover:shadow-xl ${
                  i === 0
                    ? 'scale-[1.02] shadow-xl border-[#1a5c38]/30'
                    : 'opacity-85 hover:opacity-100 border-[#e5e0da]'
                }`}
                style={{ width: CARD_W }}
              >
                {/* image */}
                <div className="relative h-56 overflow-hidden">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={p.img}
                    alt={p.title}
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                    loading={i < 3 ? 'eager' : 'lazy'}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                  <span className="absolute bottom-4 right-4 rounded-full bg-white/20 px-3 py-1 text-xs font-bold text-white backdrop-blur">
                    {p.badge}
                  </span>
                </div>

                {/* text */}
                <div className="p-6">
                  <h3 className="text-lg font-bold text-[#1a1412]">{p.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-[#6b6560]">{p.desc}</p>
                  <span className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-[#1a5c38] transition group-hover:gap-2">
                    View Products →
                  </span>
                </div>
              </Link>
            ))}
          </div>

          {/* mobile counter */}
          <div className="mt-4 flex items-center justify-center gap-3 md:hidden">
            <button onClick={prev} aria-label="Previous" className="flex h-9 w-9 items-center justify-center rounded-full border border-[#1a5c38]/20 bg-white text-[#1a5c38] shadow transition hover:bg-[#e8f5ee]">
              <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}><path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" /></svg>
            </button>
            <span className="text-xs text-[#6b6560]">{active + 1} / {PRODUCTS.length}</span>
            <button onClick={next} aria-label="Next" className="flex h-9 w-9 items-center justify-center rounded-full border border-[#1a5c38]/20 bg-white text-[#1a5c38] shadow transition hover:bg-[#e8f5ee]">
              <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}><path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" /></svg>
            </button>
          </div>

          {/* desktop dots */}
          <div className="mt-6 hidden flex-col items-center gap-3 md:flex">
            <div className="flex items-center gap-2">
              {PRODUCTS.map((_, i) => (
                <button
                  key={i}
                  onClick={() => scrollTo(i)}
                  aria-label={`Go to card ${i + 1}`}
                  className={`rounded-full transition-all duration-300 h-2 ${
                    i === active ? 'w-7 bg-[#1a5c38]' : 'w-2 bg-[#1a5c38]/25 hover:bg-[#1a5c38]/50'
                  }`}
                />
              ))}
            </div>
            <p className="text-xs text-[#6b6560]/50">{active + 1} / {PRODUCTS.length} · Use arrows to navigate</p>
          </div>
        </div>
      </div>
    </section>
  );
}
