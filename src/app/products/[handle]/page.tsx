import Link from 'next/link';
import { notFound } from 'next/navigation';
import { ChevronRight } from 'lucide-react';
import { MOCK_PRODUCTS, MOCK_RECIPES } from '@/lib/mock-data';
import { WA_LINK } from '@/lib/config';
import { cupsFromPack, priceForPack } from '@/lib/product-utils';
import ProductImageGallery from '@/components/product/ProductImageGallery';
import BuyBox from '@/components/product/BuyBox';

export async function generateStaticParams() {
  return MOCK_PRODUCTS.map((p) => ({ handle: p.handle }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ handle: string }>;
}) {
  const { handle } = await params;
  const product = MOCK_PRODUCTS.find((p) => p.handle === handle);
  if (!product) return {};
  return {
    title: product.title,
    description: product.description,
  };
}

export default async function ProductPage({
  params,
}: {
  params: Promise<{ handle: string }>;
}) {
  const { handle } = await params;
  const product = MOCK_PRODUCTS.find((p) => p.handle === handle);
  if (!product) notFound();

  const relatedRecipes = MOCK_RECIPES.filter((r) =>
    product.relatedRecipes.includes(r.slug)
  );
  const crossSellProducts = MOCK_PRODUCTS.filter((p) =>
    product.crossSell.includes(p.handle)
  );
  const isPremix = Boolean(product.pricingTiers);

  // Pre-compute pack size guide for all sizes (shown in spec sidebar)
  const packGuide = isPremix && product.dosagePerCup
    ? product.packSizes.map((size) => ({
        size,
        cups: cupsFromPack(size, product.dosagePerCup!),
        price: priceForPack(product, size),
        cupCost: Math.round(
          priceForPack(product, size) / cupsFromPack(size, product.dosagePerCup!)
        ),
      }))
    : [];

  const bulkWaUrl = WA_LINK(
    `Hi Tea Planet! I'm interested in bulk supply of ${product.title} (SKU: ${product.sku}). Please share B2B pricing.`
  );

  return (
    /* pb-20 lg:pb-0 reserves space so the mobile sticky bar doesn't cover content */
    <div className="bg-white pb-20 lg:pb-0">
      {/* ── Breadcrumb ──────────────────────────────────────────────── */}
      <div className="container-site py-4">
        <nav className="flex items-center gap-1.5 overflow-hidden text-xs text-[#6b6560]">
          <Link href="/" className="shrink-0 hover:text-[#1a5c38]">Home</Link>
          <ChevronRight size={12} className="shrink-0" />
          <Link
            href={`/collections/${product.categoryHandle}`}
            className="shrink-0 hover:text-[#1a5c38] hidden sm:inline"
          >
            {product.category}
          </Link>
          <ChevronRight size={12} className="shrink-0 hidden sm:block" />
          <span className="truncate font-medium text-[#1a5c38]">
            {product.title}
          </span>
        </nav>
      </div>

      {/* ── HERO: gallery + buy box ──────────────────────────────────── */}
      <section className="pb-12 pt-2">
        <div className="container-site">
          <div className="grid grid-cols-1 items-start gap-10 lg:grid-cols-2 lg:gap-16">
            {/* Left: image gallery */}
            <ProductImageGallery
              images={[product.image]}
              title={product.title}
              badge={product.badge}
            />

            {/* Right: buy box — sticky on desktop */}
            <div className="lg:sticky lg:top-8">
              <BuyBox product={product} />
            </div>
          </div>
        </div>
      </section>

      {/* ── PRODUCT DETAILS ──────────────────────────────────────────── */}
      <section className="border-t border-[#e5e0da] bg-[#faf8f5] py-16 lg:py-20">
        <div className="container-site">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-3 lg:gap-16">

            {/* ── Main content (2 / 3) ───────────────────────────────── */}
            <div className="space-y-12 lg:col-span-2">

              {/* Description */}
              <div>
                <h2
                  className="font-display mb-4 text-2xl font-extrabold text-[#1a1412]"
                >
                  About This Product
                </h2>
                <p className="text-base leading-relaxed text-[#6b6560]">
                  {product.description}
                </p>
              </div>

              {/* Benefits */}
              <div>
                <h2
                  className="font-display mb-5 text-2xl font-extrabold text-[#1a1412]"
                >
                  Key Benefits
                </h2>
                <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
                  {product.benefits.map((b) => (
                    <div
                      key={b}
                      className="flex items-start gap-3 rounded-xl border border-[#e5e0da] bg-white p-4"
                    >
                      <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#1a5c38] mt-0.5">
                        <svg
                          className="h-3.5 w-3.5 text-white"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          strokeWidth={3}
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M5 13l4 4L19 7"
                          />
                        </svg>
                      </span>
                      <p className="text-sm font-medium leading-snug text-[#1a1412]">
                        {b}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              {/* How to Prepare */}
              {(product.usageDosage.hot || product.usageDosage.cold || product.usageDosage.notes) && (
                <div>
                  <h2
                    className="font-display mb-5 text-2xl font-extrabold text-[#1a1412]"
                  >
                    How to Prepare
                  </h2>
                  <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                    {product.usageDosage.hot && (
                      <div className="rounded-xl border border-[#e5e0da] bg-white p-5">
                        <div className="mb-3 flex items-center gap-2">
                          <span className="flex h-8 w-8 items-center justify-center rounded-full bg-[#fef3e2] text-lg">
                            ☕
                          </span>
                          <span className="font-bold text-[#1a1412]">Hot Preparation</span>
                        </div>
                        <p className="text-sm leading-relaxed text-[#6b6560]">
                          {product.usageDosage.hot}
                        </p>
                      </div>
                    )}
                    {product.usageDosage.cold && (
                      <div className="rounded-xl border border-[#e5e0da] bg-white p-5">
                        <div className="mb-3 flex items-center gap-2">
                          <span className="flex h-8 w-8 items-center justify-center rounded-full bg-[#e8f5ee] text-lg">
                            🧊
                          </span>
                          <span className="font-bold text-[#1a1412]">Cold Preparation</span>
                        </div>
                        <p className="text-sm leading-relaxed text-[#6b6560]">
                          {product.usageDosage.cold}
                        </p>
                      </div>
                    )}
                  </div>
                  {product.usageDosage.notes && (
                    <p className="mt-4 rounded-xl border border-[#d4a24e]/20 bg-[#fef9f0] px-4 py-3 text-sm text-[#6b6560]">
                      💡 {product.usageDosage.notes}
                    </p>
                  )}
                </div>
              )}

              {/* FAQ */}
              {product.faq.length > 0 && (
                <div>
                  <h2
                    className="font-display mb-5 text-2xl font-extrabold text-[#1a1412]"
                  >
                    Frequently Asked Questions
                  </h2>
                  <div className="space-y-3">
                    {product.faq.map((item) => (
                      <details
                        key={item.q}
                        className="group rounded-xl border border-[#e5e0da] bg-white"
                      >
                        <summary className="flex cursor-pointer list-none items-center justify-between px-5 py-4">
                          <span className="font-semibold text-[#1a1412]">
                            {item.q}
                          </span>
                          <span className="ml-4 shrink-0 text-xl font-light text-[#1a5c38] transition-transform group-open:rotate-45">
                            +
                          </span>
                        </summary>
                        <p className="border-t border-[#e5e0da] px-5 py-4 text-sm leading-relaxed text-[#6b6560]">
                          {item.a}
                        </p>
                      </details>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* ── Spec sidebar (1 / 3) ───────────────────────────────── */}
            <div className="space-y-8">

              {/* Specifications table */}
              <div className="rounded-2xl border border-[#e5e0da] bg-white overflow-hidden">
                <div className="bg-[#1a5c38] px-4 py-3">
                  <h3
                    className="font-display text-sm font-extrabold uppercase tracking-widest text-white"
                  >
                    Specifications
                  </h3>
                </div>
                <table className="w-full text-sm">
                  <tbody className="divide-y divide-[#e5e0da]">
                    <tr>
                      <td className="py-3 pl-4 pr-2 font-semibold text-[#6b6560]">
                        Shelf Life
                      </td>
                      <td className="py-3 pl-2 pr-4 text-[#1a1412]">18 months</td>
                    </tr>
                    <tr className="bg-[#faf8f5]">
                      <td className="py-3 pl-4 pr-2 font-semibold text-[#6b6560]">
                        Storage
                      </td>
                      <td className="py-3 pl-2 pr-4 text-[#1a1412]">
                        Cool &amp; dry · refrigerate after opening
                      </td>
                    </tr>
                    {product.dosagePerCup && (
                      <tr>
                        <td className="py-3 pl-4 pr-2 font-semibold text-[#6b6560]">
                          Serving
                        </td>
                        <td className="py-3 pl-2 pr-4 text-[#1a1412]">
                          {product.dosagePerCup}g per cup
                        </td>
                      </tr>
                    )}
                    <tr className="bg-[#faf8f5]">
                      <td className="py-3 pl-4 pr-2 font-semibold text-[#6b6560]">
                        Prep Time
                      </td>
                      <td className="py-3 pl-2 pr-4 text-[#1a1412]">~2 minutes</td>
                    </tr>
                    <tr>
                      <td className="py-3 pl-4 pr-2 font-semibold text-[#6b6560]">
                        SKU
                      </td>
                      <td className="py-3 pl-2 pr-4 font-mono text-xs text-[#1a1412]">
                        {product.sku}
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>

              {/* Pack size yield guide (premix only) */}
              {packGuide.length > 1 && (
                <div className="rounded-2xl border border-[#e5e0da] bg-white overflow-hidden">
                  <div className="bg-[#0f3a22] px-4 py-3">
                    <h3
                      className="font-display text-sm font-extrabold uppercase tracking-widest text-white"
                    >
                      Pack Size Guide
                    </h3>
                  </div>
                  <div className="divide-y divide-[#e5e0da]">
                    {packGuide.map((g, i) => (
                      <div
                        key={g.size}
                        className={`flex items-center justify-between px-4 py-3 ${
                          i % 2 === 1 ? 'bg-[#faf8f5]' : 'bg-white'
                        }`}
                      >
                        <span className="font-semibold text-[#1a1412]">{g.size}</span>
                        <div className="text-right">
                          <span className="text-sm font-bold text-[#1a5c38]">
                            {g.cups} cups
                          </span>
                          <span className="ml-2 text-xs text-[#6b6560]">
                            @ ₹{g.cupCost}/cup
                          </span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Perfect for */}
              <div>
                <h3
                  className="font-display mb-3 text-sm font-extrabold uppercase tracking-widest text-[#1a1412]"
                >
                  Perfect For
                </h3>
                <div className="flex flex-wrap gap-2">
                  {product.applications.map((app) => (
                    <span
                      key={app}
                      className="rounded-full border border-[#1a5c38]/20 bg-[#e8f5ee] px-3.5 py-1.5 text-xs font-semibold text-[#1a5c38]"
                    >
                      {app}
                    </span>
                  ))}
                </div>
              </div>

              {/* Compact CTA in sidebar */}
              <a
                href={bulkWaUrl}
                target="_blank"
                rel="noreferrer"
                className="flex items-center justify-center gap-2 rounded-xl bg-[#0f3a22] px-4 py-4 text-sm font-bold text-white transition hover:bg-[#143d24]"
              >
                <svg className="h-4 w-4 fill-current" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
                WhatsApp Bulk Enquiry
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ── RECIPES ──────────────────────────────────────────────────── */}
      {relatedRecipes.length > 0 && (
        <section className="border-t border-[#e5e0da] bg-white py-16">
          <div className="container-site">
            <div className="mb-8">
              <p className="text-[11px] font-bold uppercase tracking-[0.3em] text-[#d4a24e]">
                Made With This Product
              </p>
              <h2
                className="font-display mt-2 text-2xl font-extrabold text-[#1a1412] lg:text-3xl"
              >
                Tested Recipes for Your Menu
              </h2>
              <p className="mt-2 text-sm text-[#6b6560]">
                Ready-to-use formulas with costing included.
              </p>
            </div>
            <div className="grid grid-cols-1 gap-5 md:grid-cols-3">
              {relatedRecipes.map((recipe) => (
                <Link
                  key={recipe.slug}
                  href={`/recipes/${recipe.slug}`}
                  className="group overflow-hidden rounded-2xl border border-[#e5e0da] bg-white transition hover:shadow-lg"
                >
                  <div className="relative h-44 overflow-hidden bg-[#f5f1eb]">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={recipe.image}
                      alt={recipe.title}
                      className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <span className="absolute left-3 top-3 rounded-full bg-white/90 px-2.5 py-1 text-[11px] font-bold text-[#1a5c38] backdrop-blur">
                      {recipe.difficulty}
                    </span>
                  </div>
                  <div className="p-5">
                    <p className="text-xs font-semibold uppercase tracking-wider text-[#d4a24e]">
                      {recipe.category}
                    </p>
                    <h3 className="mt-1 font-bold text-[#1a1412]">{recipe.title}</h3>
                    <p className="mt-1 text-xs text-[#6b6560]">
                      {recipe.prepTime} · {recipe.servingSize}
                    </p>
                    <p className="mt-3 text-xs font-semibold text-[#1a5c38]">
                      {recipe.sellingNotes.split('.')[0]}.
                    </p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ── CROSS-SELL ────────────────────────────────────────────────── */}
      {crossSellProducts.length > 0 && (
        <section className="border-t border-[#e5e0da] bg-[#faf8f5] py-16">
          <div className="container-site">
            <div className="mb-8">
              <p className="text-[11px] font-bold uppercase tracking-[0.3em] text-[#d4a24e]">
                Complete Your Menu
              </p>
              <h2
                className="font-display mt-2 text-2xl font-extrabold text-[#1a1412] lg:text-3xl"
              >
                Pairs Well With
              </h2>
            </div>
            <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
              {crossSellProducts.map((p) => (
                <Link
                  key={p.id}
                  href={`/products/${p.handle}`}
                  className="group overflow-hidden rounded-2xl border border-[#e5e0da] bg-white transition hover:border-[#1a5c38]/30 hover:shadow-md"
                >
                  <div className="relative aspect-square overflow-hidden bg-[#f5f1eb]">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={p.image}
                      alt={p.title}
                      className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                    {p.badge && (
                      <span className="absolute left-2 top-2 rounded-full bg-[#d4a24e] px-2 py-0.5 text-[10px] font-bold text-white">
                        {p.badge}
                      </span>
                    )}
                  </div>
                  <div className="p-4">
                    <p className="text-[11px] font-semibold uppercase tracking-wider text-[#d4a24e]">
                      {p.category}
                    </p>
                    <p className="mt-1 text-sm font-bold leading-snug text-[#1a1412]">
                      {p.title}
                    </p>
                    <p className="mt-1.5 text-sm font-bold text-[#1a5c38]">
                      ₹{p.price.toLocaleString('en-IN')}{' '}
                      <span className="text-xs font-normal text-[#6b6560]">
                        {p.unit}
                      </span>
                    </p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ── CTA BAR ───────────────────────────────────────────────────── */}
      <section className="bg-[#0f3a22] py-14">
        <div className="container-site flex flex-col items-center justify-between gap-6 md:flex-row">
          <div>
            <p className="text-[11px] font-bold uppercase tracking-[0.3em] text-[#d4a24e]">
              Ready to Scale?
            </p>
            <h2
              className="font-display mt-2 text-2xl font-extrabold text-white lg:text-3xl"
            >
              Order in Bulk — Direct from the Factory
            </h2>
            <p className="mt-2 text-sm text-white/55">
              Factory-direct pricing · FSSC 22000 certified · 48-hour dispatch
            </p>
          </div>
          <div className="flex shrink-0 flex-col gap-3 sm:flex-row">
            <a
              href={WA_LINK(
                `Hi Tea Planet! I'd like to place a bulk order for ${product.title}. Please share pricing.`
              )}
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-2 rounded-full bg-[#25D366] px-7 py-3.5 text-sm font-bold text-white transition hover:bg-[#1ebe5d]"
            >
              <svg className="h-4 w-4 fill-current" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
              </svg>
              WhatsApp Our Team
            </a>
            <Link
              href="/collections/all"
              className="flex items-center gap-2 rounded-full border border-white/25 px-7 py-3.5 text-sm font-semibold text-white transition hover:bg-white/10"
            >
              View Full Catalog
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
