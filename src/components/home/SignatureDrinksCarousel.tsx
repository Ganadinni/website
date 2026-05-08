'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, ChevronLeft, ChevronRight } from 'lucide-react';
import { SIGNATURE_DRINKS } from '@/lib/mock-data';

export default function SignatureDrinksCarousel() {
  const [tab,  setTab]  = useState<'fusion' | 'coolers'>('fusion');
  const [idx,  setIdx]  = useState(0);

  const drinks = tab === 'fusion' ? SIGNATURE_DRINKS.fusion : SIGNATURE_DRINKS.coolers;
  const total  = drinks.length;

  const prev = () => setIdx((i) => (i - 1 + total) % total);
  const next = () => setIdx((i) => (i + 1)         % total);

  const visible = [
    drinks[idx % total],
    drinks[(idx + 1) % total],
    drinks[(idx + 2) % total],
  ];

  return (
    <section className="bg-[#0f3a22] py-16 md:py-24">
      <div className="container-site">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-4">
          <div>
            <p className="text-brand-amber text-sm font-semibold uppercase tracking-widest mb-2">Menu Inspiration</p>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-white leading-tight">
              Signature Drinks That
              <br />
              <span className="text-brand-amber">Drive Revenue</span>
            </h2>
            <p className="text-white/55 text-sm mt-3">Eight proven drinks. Tested across our partner cafés.</p>
          </div>

          {/* Tab switcher */}
          <div className="flex rounded-[8px] overflow-hidden border border-white/20 self-start md:self-auto">
            {[
              { key: 'fusion',  label: 'Signature Fusions' },
              { key: 'coolers', label: 'Fruit Coolers' },
            ].map(({ key, label }) => (
              <button
                key={key}
                onClick={() => { setTab(key as 'fusion' | 'coolers'); setIdx(0); }}
                className={`px-4 py-2 text-sm font-medium transition-colors ${
                  tab === key
                    ? 'bg-brand-gold text-white'
                    : 'text-white/60 hover:text-white'
                }`}
              >
                {label}
              </button>
            ))}
          </div>
        </div>

        {/* Carousel */}
        <div className="relative">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 overflow-hidden">
            {visible.map((drink, i) => (
              <div
                key={`${drink.title}-${i}`}
                className={`relative rounded-[8px] overflow-hidden ${
                  i === 1 ? 'md:scale-[1.03] md:z-10' : 'md:opacity-90'
                } transition-all duration-300`}
              >
                <div className="relative h-72 md:h-80">
                  <Image
                    src={drink.image}
                    alt={drink.title}
                    fill
                    className="object-cover"
                    sizes="33vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                </div>
                <div className="absolute bottom-0 left-0 right-0 p-5">
                  <h3 className="font-display text-lg font-bold text-white mb-1">{drink.title}</h3>
                  <p className="text-white/70 text-sm leading-relaxed line-clamp-2 mb-3">{drink.desc}</p>
                  <Link
                    href={`/recipes/${drink.recipe}`}
                    className="inline-flex items-center gap-1.5 text-brand-amber text-sm font-semibold hover:gap-3 transition-all"
                  >
                    Learn Recipe <ArrowRight size={13} />
                  </Link>
                </div>
              </div>
            ))}
          </div>

          {/* Nav arrows */}
          <button
            onClick={prev}
            className="absolute -left-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-white rounded-full shadow-elevated flex items-center justify-center hover:bg-brand-pale transition-colors z-20"
            aria-label="Previous"
          >
            <ChevronLeft size={18} className="text-brand-green" />
          </button>
          <button
            onClick={next}
            className="absolute -right-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-white rounded-full shadow-elevated flex items-center justify-center hover:bg-brand-pale transition-colors z-20"
            aria-label="Next"
          >
            <ChevronRight size={18} className="text-brand-green" />
          </button>
        </div>

        {/* Dots */}
        <div className="flex justify-center gap-2 mt-6">
          {drinks.map((_, i) => (
            <button
              key={i}
              onClick={() => setIdx(i)}
              className={`w-2 h-2 rounded-full transition-all ${
                i === idx % total ? 'bg-brand-amber w-5' : 'bg-white/30'
              }`}
              aria-label={`Go to slide ${i + 1}`}
            />
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-10">
          <Link href="/signature-drinks" className="btn-gold inline-flex">
            View All Signature Drinks <ArrowRight size={15} />
          </Link>
        </div>
      </div>
    </section>
  );
}
