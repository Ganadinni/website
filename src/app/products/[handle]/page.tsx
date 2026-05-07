import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { CheckCircle, ChevronRight, Clock, ShoppingCart, MessageCircle } from 'lucide-react';
import { MOCK_PRODUCTS, MOCK_RECIPES } from '@/lib/mock-data';
import BulkEnquiryCTA from '@/components/shared/BulkEnquiryCTA';

export async function generateStaticParams() {
  return MOCK_PRODUCTS.map((p) => ({ handle: p.handle }));
}

export async function generateMetadata({ params }: { params: Promise<{ handle: string }> }) {
  const { handle } = await params;
  const product = MOCK_PRODUCTS.find((p) => p.handle === handle);
  if (!product) return {};
  return {
    title: product.title,
    description: product.description,
  };
}

export default async function ProductPage({ params }: { params: Promise<{ handle: string }> }) {
  const { handle } = await params;
  const product = MOCK_PRODUCTS.find((p) => p.handle === handle);
  if (!product) notFound();

  const relatedRecipes = MOCK_RECIPES.filter((r) => product.relatedRecipes.includes(r.slug));
  const crossSellProducts = MOCK_PRODUCTS.filter((p) => product.crossSell.includes(p.handle));
  const number = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER ?? '919876543210';
  const waMsg = encodeURIComponent(`Hi! I'm interested in ${product.title} (SKU: ${product.sku}). Please share bulk pricing.`);

  return (
    <div className="bg-white">
      {/* Breadcrumb */}
      <div className="container-site py-4">
        <nav className="flex items-center gap-2 text-xs text-gray-500">
          <Link href="/" className="hover:text-brand-green">Home</Link>
          <ChevronRight size={12} />
          <Link href={`/collections/${product.categoryHandle}`} className="hover:text-brand-green">{product.category}</Link>
          <ChevronRight size={12} />
          <span className="text-brand-green font-medium truncate max-w-xs">{product.title}</span>
        </nav>
      </div>

      {/* ── Product Hero ─────────────────────────────────────────── */}
      <section className="container-site pb-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Images */}
          <div className="sticky top-20">
            <div className="relative aspect-square rounded-2xl overflow-hidden bg-gray-50">
              <Image
                src={product.image}
                alt={product.title}
                fill
                priority
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
              {product.badge && (
                <span className="absolute top-4 left-4 badge bg-brand-gold text-white text-sm px-4 py-1.5">
                  {product.badge}
                </span>
              )}
            </div>
          </div>

          {/* Info */}
          <div>
            <Link href={`/collections/${product.categoryHandle}`}
                  className="text-xs font-semibold text-brand-mid uppercase tracking-wider hover:underline">
              {product.category}
            </Link>
            <h1 className="font-display text-3xl md:text-4xl font-bold text-brand-green mt-2 mb-1">
              {product.title}
            </h1>
            <p className="text-gray-500 text-base mb-4">{product.subtitle}</p>

            {/* Price */}
            <div className="flex items-baseline gap-3 mb-2">
              <span className="font-display text-3xl font-bold text-brand-green">₹{product.price}</span>
              {product.compareAtPrice && (
                <span className="text-lg text-gray-400 line-through">₹{product.compareAtPrice}</span>
              )}
              <span className="text-gray-500 text-sm">{product.unit}</span>
            </div>

            {/* Pack size selector */}
            <div className="mb-6">
              <p className="text-sm font-semibold text-gray-700 mb-2">Pack Size</p>
              <div className="flex flex-wrap gap-2">
                {product.packSizes.map((size, i) => (
                  <button
                    key={size}
                    className={`px-4 py-2 rounded-lg border text-sm font-medium transition-colors ${
                      i === 0
                        ? 'border-brand-green bg-brand-pale text-brand-green'
                        : 'border-gray-200 text-gray-600 hover:border-brand-green'
                    }`}
                  >
                    {size}
                  </button>
                ))}
              </div>
            </div>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-3 mb-6">
              <button className="btn-primary flex-1 justify-center py-3.5">
                <ShoppingCart size={16} /> Add to Cart
              </button>
              <a
                href={`https://wa.me/${number}?text=${waMsg}`}
                target="_blank"
                rel="noreferrer"
                className="btn-whatsapp flex-1 justify-center py-3.5"
              >
                <MessageCircle size={16} /> Bulk Enquiry
              </a>
            </div>

            <p className="text-sm text-gray-600 mb-6">{product.description}</p>

            {/* SKU */}
            <p className="text-xs text-gray-400 mb-6">SKU: <span className="font-mono">{product.sku}</span></p>

            {/* ── Key Benefits ── */}
            <div className="bg-brand-pale rounded-xl p-5 mb-6">
              <h3 className="font-semibold text-brand-green mb-3">★ Key Benefits</h3>
              <ul className="space-y-2">
                {product.benefits.map((b) => (
                  <li key={b} className="flex items-start gap-2 text-sm text-gray-700">
                    <CheckCircle size={15} className="text-brand-mid mt-0.5 shrink-0" />
                    {b}
                  </li>
                ))}
              </ul>
            </div>

            {/* ── Usage & Dosage ── */}
            <div className="border rounded-xl p-5 mb-6">
              <h3 className="font-semibold text-brand-green mb-3">Usage &amp; Dosage</h3>
              <div className="space-y-2 text-sm text-gray-700">
                {product.usageDosage.hot && (
                  <p><span className="font-medium text-brand-green">☕ Hot:</span> {product.usageDosage.hot}</p>
                )}
                {product.usageDosage.cold && (
                  <p><span className="font-medium text-brand-green">🧊 Cold:</span> {product.usageDosage.cold}</p>
                )}
                {product.usageDosage.notes && (
                  <p className="text-gray-500 italic">{product.usageDosage.notes}</p>
                )}
              </div>
            </div>

            {/* ── Applications ── */}
            <div className="mb-6">
              <h3 className="font-semibold text-brand-green mb-3">Best For</h3>
              <div className="flex flex-wrap gap-2">
                {product.applications.map((app) => (
                  <span key={app} className="badge bg-gray-100 text-gray-700">{app}</span>
                ))}
              </div>
            </div>

            {/* Bulk CTA */}
            <BulkEnquiryCTA productName={product.title} sku={product.sku} variant="banner" />
          </div>
        </div>
      </section>

      {/* ── Recipes using this product ──────────────────────────── */}
      {relatedRecipes.length > 0 && (
        <section className="bg-brand-cream py-14">
          <div className="container-site">
            <h2 className="section-heading mb-2">Recipes Using This Product</h2>
            <p className="text-gray-500 text-sm mb-8">Tested formulas ready for your menu.</p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {relatedRecipes.map((recipe) => (
                <Link key={recipe.slug} href={`/recipes/${recipe.slug}`}
                      className="card overflow-hidden group">
                  <div className="relative h-44 bg-gray-100 overflow-hidden">
                    <Image src={recipe.image} alt={recipe.title} fill
                           className="object-cover group-hover:scale-105 transition-transform duration-300"
                           sizes="33vw" />
                  </div>
                  <div className="p-4">
                    <p className="text-xs text-brand-mid font-medium mb-1">{recipe.category}</p>
                    <h3 className="font-semibold text-brand-green mb-2">{recipe.title}</h3>
                    <div className="flex items-center gap-2 text-xs text-gray-500">
                      <Clock size={11} /> {recipe.prepTime} &nbsp;·&nbsp; {recipe.difficulty}
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ── Cross-sell ──────────────────────────────────────────── */}
      {crossSellProducts.length > 0 && (
        <section className="bg-white py-14">
          <div className="container-site">
            <h2 className="section-heading mb-2">Pairs Well With</h2>
            <p className="text-gray-500 text-sm mb-8">Complete your recipe with these products.</p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {crossSellProducts.map((p) => (
                <Link key={p.id} href={`/products/${p.handle}`} className="card group p-4 text-center">
                  <div className="relative aspect-square rounded-lg overflow-hidden bg-gray-50 mb-3">
                    <Image src={p.image} alt={p.title} fill
                           className="object-cover group-hover:scale-105 transition-transform"
                           sizes="25vw" />
                  </div>
                  <p className="text-xs text-brand-mid mb-1">{p.category}</p>
                  <p className="text-sm font-semibold text-brand-green leading-tight mb-1">{p.title}</p>
                  <p className="text-sm font-bold text-brand-green">₹{p.price} <span className="text-xs font-normal text-gray-400">{p.unit}</span></p>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ── FAQ ─────────────────────────────────────────────────── */}
      <section className="bg-brand-pale py-14">
        <div className="container-site max-w-3xl">
          <h2 className="section-heading mb-8">Frequently Asked Questions</h2>
          <div className="space-y-4">
            {product.faq.map((item) => (
              <details key={item.q} className="bg-white rounded-xl p-5 group">
                <summary className="font-semibold text-brand-green cursor-pointer list-none flex justify-between items-center">
                  {item.q}
                  <span className="text-xl text-brand-mid group-open:rotate-45 transition-transform">+</span>
                </summary>
                <p className="text-gray-600 text-sm mt-3 leading-relaxed">{item.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
