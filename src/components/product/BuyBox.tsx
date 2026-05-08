'use client';

import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import type { MockProduct } from '@/lib/types';
import { WA_LINK } from '@/lib/config';
import { cupsFromPack, priceForPack } from '@/lib/product-utils';

function WhatsAppIcon({ className }: { className?: string }) {
  return (
    <svg className={className} fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
    </svg>
  );
}

const CERTS = ['FSSC 22000', 'FSSAI', 'HALAL', 'Non-GMO'];

export default function BuyBox({ product }: { product: MockProduct }) {
  const [pack, setPack] = useState(product.packSizes[0]);
  const [stickyVisible, setStickyVisible] = useState(false);
  const buyBoxRef = useRef<HTMLDivElement>(null);

  // Show mobile sticky bar once buy box scrolls out of view
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => setStickyVisible(!entry.isIntersecting),
      { threshold: 0 }
    );
    if (buyBoxRef.current) observer.observe(buyBoxRef.current);
    return () => observer.disconnect();
  }, []);

  const isPremix = Boolean(product.pricingTiers);
  const dosage = product.dosagePerCup ?? 40;
  const cups = cupsFromPack(pack, dosage);
  const packCost = priceForPack(product, pack);
  const cupCost = cups > 0 ? Math.round(packCost / cups) : 0;
  const sellPrice = product.suggestedSellPrice ?? 150;
  const marginPerCup = sellPrice - cupCost;
  const marginPct = sellPrice > 0 ? Math.max(0, Math.round((marginPerCup / sellPrice) * 100)) : 0;

  const sampleMsg = `Hi Tea Planet! I'd like to request a free sample of ${product.title} (SKU: ${product.sku}). Please let me know how to proceed.`;
  const quoteMsg = `Hi! I'm interested in bulk pricing for ${product.title} (SKU: ${product.sku}). Please share your B2B price sheet.`;

  return (
    <>
      <div ref={buyBoxRef} className="space-y-5">
        {/* Category link */}
        <Link
          href={`/collections/${product.categoryHandle}`}
          className="inline-block text-xs font-bold uppercase tracking-widest text-[#1a5c38] hover:underline"
        >
          ← {product.category}
        </Link>

        {/* Title */}
        <div>
          <h1
            className="text-[1.75rem] font-extrabold leading-tight text-[#1a1412] sm:text-3xl lg:text-[2.2rem]"
            style={{ fontFamily: 'var(--font-archivo)' }}
          >
            {product.title}
          </h1>
          <p className="mt-2 text-base text-[#6b6560]">{product.subtitle}</p>
        </div>

        {/* Social proof */}
        <div className="flex flex-wrap items-center gap-2">
          <div className="flex">
            {[0, 1, 2, 3, 4].map((i) => (
              <svg key={i} className="h-4 w-4 fill-[#d4a24e]" viewBox="0 0 20 20">
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
            ))}
          </div>
          <span className="text-sm text-[#6b6560]">
            Trusted by{' '}
            <strong className="text-[#1a1412]">100+ cafes, QSRs & cloud kitchens</strong>
          </span>
        </div>

        {/* ── Pricing tiers (premix only) ─────────────── */}
        {isPremix && product.pricingTiers && (
          <div className="overflow-hidden rounded-xl border border-[#e5e0da]">
            <div className="bg-[#f5f1eb] px-4 py-2 text-[11px] font-extrabold uppercase tracking-[0.15em] text-[#6b6560]">
              Volume Pricing
            </div>
            {product.pricingTiers.map((tier, i) => (
              <div
                key={tier.qty}
                className={`flex items-center justify-between px-4 py-3.5 ${
                  i === 2 ? 'bg-[#0f3a22]' : i === 1 ? 'bg-[#e8f5ee]' : 'bg-white'
                } ${i < 2 ? 'border-b border-[#e5e0da]' : ''}`}
              >
                <span className={`text-sm font-semibold ${i === 2 ? 'text-white/80' : 'text-[#1a1412]'}`}>
                  {tier.qty}
                </span>
                <div className="flex items-center gap-2">
                  {tier.price > 0 ? (
                    <span className={`text-base font-extrabold ${i === 2 ? 'text-white' : 'text-[#1a5c38]'}`}>
                      ₹{tier.price.toLocaleString('en-IN')}
                    </span>
                  ) : (
                    <span className="text-sm font-bold text-[#d4a24e]">WhatsApp for Quote</span>
                  )}
                  {tier.badge && (
                    <span
                      className={`hidden rounded-full px-2.5 py-0.5 text-[10px] font-bold sm:inline ${
                        i === 2
                          ? 'bg-[#d4a24e] text-[#1a1412]'
                          : i === 1
                          ? 'bg-[#1a5c38] text-white'
                          : 'bg-[#e5e0da] text-[#6b6560]'
                      }`}
                    >
                      {tier.badge}
                    </span>
                  )}
                </div>
              </div>
            ))}
          </div>
        )}

        {/* ── Non-premix: single price ────────────────── */}
        {!isPremix && (
          <div className="flex flex-wrap items-baseline gap-3">
            <span className="text-3xl font-extrabold text-[#1a5c38]">
              ₹{product.price.toLocaleString('en-IN')}
            </span>
            {product.compareAtPrice && (
              <span className="text-lg text-[#6b6560] line-through">
                ₹{product.compareAtPrice.toLocaleString('en-IN')}
              </span>
            )}
            <span className="text-sm text-[#6b6560]">{product.unit}</span>
          </div>
        )}

        {/* ── Pack size selector ──────────────────────── */}
        {product.packSizes.length > 0 && (
          <div>
            <div className="mb-3 flex items-center justify-between">
              <p className="text-sm font-bold text-[#1a1412]">Pack Size</p>
              <p className="text-xs text-[#6b6560]">
                Selected: <span className="font-semibold text-[#1a5c38]">{pack}</span>
              </p>
            </div>
            {/* min-h-[44px] ensures 44px minimum touch target on mobile */}
            <div className="flex flex-wrap gap-2">
              {product.packSizes.map((size) => (
                <button
                  key={size}
                  onClick={() => setPack(size)}
                  className={`flex min-h-[44px] items-center rounded-full border px-5 text-sm font-semibold transition-all duration-150 ${
                    pack === size
                      ? 'border-[#1a5c38] bg-[#1a5c38] text-white shadow-sm'
                      : 'border-[#e5e0da] text-[#6b6560] hover:border-[#1a5c38] hover:text-[#1a5c38]'
                  }`}
                >
                  {size}
                </button>
              ))}
            </div>
          </div>
        )}

        {/* ── Cost-per-cup calculator (premix only) ───── */}
        {isPremix && (
          <div className="rounded-2xl bg-[#0f3a22] p-4 sm:p-5">
            <p className="mb-4 text-[11px] font-extrabold uppercase tracking-[0.18em] text-[#d4a24e]">
              Cost Per Cup — {pack}
            </p>
            <div className="grid grid-cols-3 gap-2 sm:gap-3 text-center">
              <div className="rounded-xl bg-white/[0.07] px-2 py-3 sm:px-3 sm:py-4">
                <div className="text-xl font-extrabold text-white sm:text-2xl">{cups}</div>
                <div className="mt-1 text-[10px] leading-tight text-white/50 sm:text-xs">
                  Cups / Pack
                </div>
              </div>
              <div className="rounded-xl bg-white/[0.07] px-2 py-3 sm:px-3 sm:py-4">
                <div className="text-xl font-extrabold text-white sm:text-2xl">₹{cupCost}</div>
                <div className="mt-1 text-[10px] leading-tight text-white/50 sm:text-xs">
                  Cost / Cup
                </div>
              </div>
              <div className="rounded-xl border border-[#d4a24e]/30 bg-[#d4a24e]/15 px-2 py-3 sm:px-3 sm:py-4">
                <div className="text-xl font-extrabold text-[#d4a24e] sm:text-2xl">{marginPct}%</div>
                <div className="mt-1 text-[10px] leading-tight text-white/50 sm:text-xs">
                  Margin
                </div>
              </div>
            </div>
            <p className="mt-3 text-xs leading-relaxed text-white/50">
              Sell at ₹{sellPrice}/cup → ₹{marginPerCup} margin/cup · {cups} cups from {pack}
            </p>
          </div>
        )}

        {/* ── CTAs ────────────────────────────────────── */}
        <div className="flex flex-col gap-3">
          <a
            href={WA_LINK(sampleMsg)}
            target="_blank"
            rel="noreferrer"
            className="flex min-h-[52px] items-center justify-center gap-2.5 rounded-full bg-[#25D366] px-6 text-[15px] font-bold text-white transition hover:bg-[#1ebe5d]"
          >
            <WhatsAppIcon className="h-5 w-5 shrink-0" />
            Request a Free Sample
          </a>
          <a
            href={WA_LINK(quoteMsg)}
            target="_blank"
            rel="noreferrer"
            className="flex min-h-[52px] items-center justify-center gap-2.5 rounded-full border-2 border-[#1a5c38] px-6 text-[15px] font-bold text-[#1a5c38] transition hover:bg-[#e8f5ee]"
          >
            Get Bulk Pricing
          </a>
        </div>

        {/* ── Trust chips ─────────────────────────────── */}
        <div className="grid grid-cols-3 gap-2">
          {[
            { icon: '🚚', text: 'Ships 2–3 days' },
            { icon: '📦', text: 'MOQ: 1 unit' },
            { icon: '🔄', text: 'Easy reorder' },
          ].map(({ icon, text }) => (
            <div
              key={text}
              className="flex flex-col items-center gap-1.5 rounded-xl bg-[#f5f1eb] px-1 py-3 text-center"
            >
              <span className="text-lg leading-none">{icon}</span>
              <span className="text-[11px] font-semibold leading-tight text-[#6b6560]">{text}</span>
            </div>
          ))}
        </div>

        {/* ── Certification badges ─────────────────────── */}
        <div className="flex flex-wrap items-center gap-2 pt-1">
          <span className="text-xs text-[#6b6560]/60">Certified:</span>
          {CERTS.map((cert) => (
            <span
              key={cert}
              className="rounded-lg border border-[#1a5c38]/20 bg-[#e8f5ee] px-3 py-1 text-[11px] font-bold text-[#1a5c38]"
            >
              {cert}
            </span>
          ))}
        </div>

        <p className="text-[11px] text-[#6b6560]/40">
          SKU: <span className="font-mono">{product.sku}</span>
        </p>
      </div>

      {/* ── Mobile sticky bottom bar ─────────────────── */}
      {/* Appears on mobile only once the buy box scrolls out of view */}
      <div
        className={`fixed bottom-0 left-0 right-0 z-50 border-t border-[#e5e0da] bg-white px-4 pb-safe pt-3 shadow-[0_-4px_24px_rgba(0,0,0,0.10)] transition-transform duration-300 lg:hidden ${
          stickyVisible ? 'translate-y-0' : 'translate-y-full'
        }`}
      >
        <div className="mb-2 flex items-center justify-between">
          <p className="max-w-[55%] truncate text-sm font-bold text-[#1a1412]">
            {product.title}
          </p>
          {isPremix && (
            <p className="text-xs text-[#6b6560]">
              ₹{cupCost}/cup · {marginPct}% margin
            </p>
          )}
        </div>
        <div className="flex gap-2 pb-2">
          <a
            href={WA_LINK(sampleMsg)}
            target="_blank"
            rel="noreferrer"
            className="flex flex-1 min-h-[48px] items-center justify-center gap-2 rounded-full bg-[#25D366] text-sm font-bold text-white"
          >
            <WhatsAppIcon className="h-4 w-4 shrink-0" />
            Free Sample
          </a>
          <a
            href={WA_LINK(quoteMsg)}
            target="_blank"
            rel="noreferrer"
            className="flex flex-1 min-h-[48px] items-center justify-center gap-2 rounded-full border-2 border-[#1a5c38] text-sm font-bold text-[#1a5c38]"
          >
            Get Quote
          </a>
        </div>
      </div>
    </>
  );
}
