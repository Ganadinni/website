'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, MessageCircle, ChevronLeft, ChevronRight } from 'lucide-react';
import { SIGNATURE_DRINKS } from '@/lib/mock-data';

const WA_NUMBER = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER ?? '918886277713';

function DrinkCard({ drink, featured = false }: { drink: typeof SIGNATURE_DRINKS.fusion[0]; featured?: boolean }) {
  return (
    <div className={`relative rounded-xl overflow-hidden group ${ featured ? 'md:row-span-2' : '' }`}>
      <div className={`relative ${ featured ? 'h-[480px]' : 'h-64 md:h-72' }`}>
        <Image
          src={drink.image}
          alt={drink.title}
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-500"
          sizes={featured ? '40vw' : '30vw'}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-transparent" />
      </div>
      <div className="absolute bottom-0 left-0 right-0 p-5 md:p-6">
        <h3 className={`font-display font-bold text-white mb-2 ${ featured ? 'text-2xl' : 'text-lg' }`}>{drink.title}</h3>
        <p className="text-white/70 text-sm leading-relaxed mb-4 line-clamp-2">{drink.desc}</p>
        <Link
          href={`/recipes/${drink.recipe}`}
          className="inline-flex items-center gap-1.5 text-brand-amber text-sm font-semibold hover:gap-3 transition-all"
        >
          View Recipe <ArrowRight size={13} />
        </Link>
      </div>
    </div>
  );
}

function TabCarousel({ drinks }: { drinks: typeof SIGNATURE_DRINKS.fusion }) {
  const [idx, setIdx] = useState(0);
  const total = drinks.length;
  const prev = () => setIdx((i) => (i - 1 + total) % total);
  const next = () => setIdx((i) => (i + 1) % total);
  const visible = [
    drinks[idx % total],
    drinks[(idx + 1) % total],
    drinks[(idx + 2) % total],
  ];

  return (
    <div className="relative">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
        {visible.map((drink, i) => (
          <div
            key={`${drink.title}-${i}`}
            className={`relative rounded-xl overflow-hidden group transition-all duration-300 ${
              i === 1 ? 'md:scale-[1.03] md:z-10' : 'opacity-90'
            }`}
          >
            <div className="relative h-72 md:h-80">
              <Image src={drink.image} alt={drink.title} fill
                className="object-cover group-hover:scale-105 transition-transform duration-500" sizes="33vw" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent" />
            </div>
            <div className="absolute bottom-0 left-0 right-0 p-5">
              <h3 className="font-display text-lg font-bold text-white mb-1">{drink.title}</h3>
              <p className="text-white/70 text-sm line-clamp-2 mb-3">{drink.desc}</p>
              <Link href={`/recipes/${drink.recipe}`}
                className="inline-flex items-center gap-1.5 text-brand-amber text-sm font-semibold hover:gap-3 transition-all">
                View Recipe <ArrowRight size={13} />
              </Link>
            </div>
          </div>
        ))}
      </div>
      <button onClick={prev}
        className="absolute -left-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-white rounded-full shadow-elevated flex items-center justify-center hover:bg-brand-pale transition-colors z-20"
        aria-label="Previous">
        <ChevronLeft size={18} className="text-brand-green" />
      </button>
      <button onClick={next}
        className="absolute -right-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-white rounded-full shadow-elevated flex items-center justify-center hover:bg-brand-pale transition-colors z-20"
        aria-label="Next">
        <ChevronRight size={18} className="text-brand-green" />
      </button>
      <div className="flex justify-center gap-2 mt-6">
        {drinks.map((_, i) => (
          <button key={i} onClick={() => setIdx(i)}
            className={`h-2 rounded-full transition-all ${ i === idx % total ? 'bg-brand-amber w-5' : 'bg-white/30 w-2' }`}
            aria-label={`Slide ${i + 1}`} />
        ))}
      </div>
    </div>
  );
}

export default function SignatureDrinksPage() {
  const [tab, setTab] = useState<'fusion' | 'coolers'>('fusion');
  const waUrl = `https://wa.me/${WA_NUMBER}?text=${encodeURIComponent('Hi Tea Planet! I want to add Signature Drinks to my menu. Please share the full menu plan.')}`;

  return (
    <div className="bg-white">
      {/* ── Hero ──────────────────────────────────────────────────────────── */}
      <section className="bg-[#1A1A1A] py-20">
        <div className="container-site text-center">
          <p className="text-brand-amber text-sm font-semibold uppercase tracking-widest mb-3">Menu Inspiration</p>
          <h1 className="font-display text-4xl md:text-5xl font-bold text-white leading-[1.1] mb-5">
            Signature Drinks That
            <br /><span className="text-brand-amber">Drive Revenue</span>
          </h1>
          <p className="text-white/60 text-lg max-w-2xl mx-auto mb-8">
            8 proven drinks tested across our partner cafés. Each recipe comes with full ingredient list, step-by-step method, costing sheet and selling price recommendations.
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            <a href={waUrl} target="_blank" rel="noreferrer" className="btn-whatsapp">
              <MessageCircle size={16} /> Get Full Menu Plan
            </a>
            <Link href="/recipes" className="btn-outline-white">
              All Recipes <ArrowRight size={15} />
            </Link>
          </div>
        </div>
      </section>

      {/* ── Stats strip ───────────────────────────────────────────────────── */}
      <div className="bg-brand-green">
        <div className="container-site py-4 flex flex-wrap justify-center gap-8 text-sm text-white">
          {['8 Signature Drinks','₹19–20 cost per cup','75–85% gross margin','Zero cooking — some drinks','7-day launch-ready kits'].map((t) => (
            <span key={t} className="font-medium">{t}</span>
          ))}
        </div>
      </div>

      {/* ── Featured — Fusions grid (static) ─────────────────────────────── */}
      <section className="bg-[#1A1A1A] py-16">
        <div className="container-site">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-4">
            <div>
              <p className="text-brand-amber text-sm font-semibold uppercase tracking-widest mb-2">All 8 Drinks</p>
              <h2 className="font-display text-3xl font-bold text-white">Browse & Filter</h2>
            </div>
            <div className="flex rounded-[8px] overflow-hidden border border-white/20 self-start md:self-auto">
              {([['fusion','Signature Fusions'],['coolers','Fruit Coolers']] as const).map(([key, label]) => (
                <button key={key} onClick={() => setTab(key)}
                  className={`px-4 py-2.5 text-sm font-medium transition-colors ${
                    tab === key ? 'bg-brand-gold text-white' : 'text-white/60 hover:text-white'
                  }`}>
                  {label}
                </button>
              ))}
            </div>
          </div>
          <TabCarousel drinks={tab === 'fusion' ? SIGNATURE_DRINKS.fusion : SIGNATURE_DRINKS.coolers} />
        </div>
      </section>

      {/* ── All drinks static grid ─────────────────────────────────────── */}
      <section className="bg-[#111] py-16">
        <div className="container-site">
          <h2 className="font-display text-2xl font-bold text-white mb-2">Signature Fusions</h2>
          <p className="text-white/50 text-sm mb-8">Milk tea bases with premium toppings. High repeat rate. Proven bestsellers.</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-16">
            {SIGNATURE_DRINKS.fusion.map((drink) => (
              <DrinkCard key={drink.title} drink={drink} />
            ))}
          </div>
          <h2 className="font-display text-2xl font-bold text-white mb-2">Fruit Coolers</h2>
          <p className="text-white/50 text-sm mb-8">Refreshing, zero-milk teas with tropical ingredients. Strong summer performers.</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {SIGNATURE_DRINKS.coolers.map((drink) => (
              <DrinkCard key={drink.title} drink={drink} />
            ))}
          </div>
        </div>
      </section>

      {/* ── Costing callout ───────────────────────────────────────────────── */}
      <section className="bg-brand-pale py-14">
        <div className="container-site">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            {[
              { label:'Cost per cup', value:'₹19–20', sub:'Using Tea Planet ingredients' },
              { label:'Selling price', value:'₹120–220', sub:'Recommended range' },
              { label:'Gross margin', value:'75–85%', sub:'At cup level' },
            ].map((stat) => (
              <div key={stat.label} className="card p-6 text-center">
                <div className="font-display text-3xl font-bold text-brand-green mb-1">{stat.value}</div>
                <div className="font-medium text-textPrimary mb-1">{stat.label}</div>
                <div className="text-textSecondary text-xs">{stat.sub}</div>
              </div>
            ))}
          </div>
          <div className="text-center">
            <h2 className="font-display text-2xl font-bold text-brand-green mb-3">Ready to Add These to Your Menu?</h2>
            <p className="text-textSecondary mb-6 max-w-lg mx-auto">
              Get the full ingredient list, costing sheet and training materials for all 8 drinks via WhatsApp.
            </p>
            <div className="flex flex-wrap justify-center gap-3">
              <a href={waUrl} target="_blank" rel="noreferrer" className="btn-whatsapp">
                <MessageCircle size={16} /> Get Free Menu Plan
              </a>
              <Link href="/operator-program" className="btn-secondary">
                Branded Operator Program <ArrowRight size={14} />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
