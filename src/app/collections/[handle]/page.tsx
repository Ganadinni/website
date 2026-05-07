import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { ChevronRight, ShoppingCart, MessageCircle, Filter } from 'lucide-react';
import { MOCK_COLLECTIONS, MOCK_PRODUCTS } from '@/lib/mock-data';
import BulkEnquiryCTA from '@/components/shared/BulkEnquiryCTA';

const COLLECTION_META: Record<string, { description: string; education: string; relatedCollections: string[] }> = {
  'boba-innovations': {
    description:
      'Complete boba ingredient range crafted for professional beverage businesses. From tapioca pearls to popping boba, silky mix bases and toppings — everything you need to run a profitable boba menu.',
    education:
      'Boba (Bubble Tea) beverages have 70%+ gross margin at the cup level. Our Boba Innovations range is engineered for consistency, speed of service, and cost control. Average cost-per-cup: ₹18–30.',
    relatedCollections: ['syrups-flavours', 'kits'],
  },
  'syrups-flavours': {
    description:
      'Professional-grade flavour syrups for beverages, desserts, and baking. 25+ flavours in stock. Heat stable, consistent, and cost-effective.',
    education:
      'The right syrup adds ₹8–15 to your selling price while costing ₹3–5 per serving. Our syrups are heat-stable to 100°C and maintain colour and flavour integrity in both hot and cold applications.',
    relatedCollections: ['boba-innovations', 'silky-mix'],
  },
  'tea-premixes': {
    description:
      'CTC, Orthodox, Masala Chai & specialty tea premixes for cafes, QSRs and institutional supply. Consistent cup quality every time.',
    education:
      'Premix teas eliminate barista skill dependency. Every cup is identical — critical for QSR and multi-outlet formats. Our premixes are FSSC 22000 certified with 18-month shelf life.',
    relatedCollections: ['silky-mix', 'kits'],
  },
  'silky-mix': {
    description:
      'All-in-one hot & cold beverage bases. One SKU, unlimited recipes. Designed to reduce your ingredient count and simplify your bar operations.',
    education:
      'Silky Mix bases replace 3–4 separate ingredients: milk powder, creamer, flavouring, and sweetener. Simplify your bar, reduce training time, and maintain consistency across shifts.',
    relatedCollections: ['boba-innovations', 'toppings'],
  },
  'toppings': {
    description:
      'Premium drink toppings: nata de coco, konjac jelly, sago, popping boba and more. Upsell by ₹30–50 per cup with the right topping.',
    education:
      'Toppings are high-margin upsell items. Adding a topping costs ₹6–15 but adds ₹30–60 to the selling price. Train your staff to suggest toppings on every boba order.',
    relatedCollections: ['boba-innovations'],
  },
  'kits': {
    description:
      'Ready-to-launch beverage starter kits curated for different business formats. Everything you need to open your boba bar in 7 days.',
    education:
      'Our kits are designed to eliminate the guesswork of stocking a boba bar for the first time. Each kit includes ingredient quantities for 300–500 cups so you can trial, validate, and scale.',
    relatedCollections: ['boba-innovations', 'syrups-flavours'],
  },
};

export async function generateStaticParams() {
  return MOCK_COLLECTIONS.map((c) => ({ handle: c.handle }));
}

export async function generateMetadata({ params }: { params: Promise<{ handle: string }> }) {
  const { handle } = await params;
  const col = MOCK_COLLECTIONS.find((c) => c.handle === handle);
  return col ? { title: col.title, description: col.description } : {};
}

export default async function CollectionPage({ params }: { params: Promise<{ handle: string }> }) {
  const { handle } = await params;
  const collection = MOCK_COLLECTIONS.find((c) => c.handle === handle);

  // Fall back to showing all products for unlisted collections
  const title = collection?.title ?? handle.replace(/-/g, ' ').replace(/\b\w/g, (c) => c.toUpperCase());
  const products = collection?.products ?? MOCK_PRODUCTS;
  const meta = COLLECTION_META[handle];
  const number = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER ?? '919876543210';

  return (
    <div className="bg-white">
      {/* Breadcrumb */}
      <div className="bg-brand-cream">
        <div className="container-site py-3">
          <nav className="flex items-center gap-2 text-xs text-gray-500">
            <Link href="/" className="hover:text-brand-green">Home</Link>
            <ChevronRight size={12} />
            <span className="text-brand-green font-medium">{title}</span>
          </nav>
        </div>
      </div>

      {/* Collection hero */}
      <div className="bg-brand-cream pb-10">
        <div className="container-site pt-8">
          <h1 className="section-heading mb-3">{title}</h1>
          {meta && <p className="text-gray-600 max-w-2xl leading-relaxed">{meta.description}</p>}
          <div className="flex flex-wrap gap-3 mt-5">
            <a
              href={`https://wa.me/${number}?text=${encodeURIComponent(`Hi! I'd like bulk pricing for the ${title} range.`)}`}
              target="_blank" rel="noreferrer"
              className="btn-whatsapp text-sm"
            >
              <MessageCircle size={14} /> Bulk Enquiry
            </a>
            <Link href="/contact#bulk-enquiry" className="btn-secondary text-sm">Download Price List</Link>
          </div>
        </div>
      </div>

      {/* Products grid */}
      <section className="container-site py-12">
        <div className="flex items-center justify-between mb-6">
          <p className="text-sm text-gray-500">{products.length} products</p>
          <button className="flex items-center gap-2 text-sm text-gray-600 border rounded-lg px-4 py-2 hover:border-brand-green transition-colors">
            <Filter size={14} /> Filter &amp; Sort
          </button>
        </div>

        {products.length === 0 ? (
          <div className="text-center py-20">
            <p className="text-gray-400 text-lg">Products coming soon.</p>
            <a
              href={`https://wa.me/${number}?text=${encodeURIComponent(`Hi! I'm looking for products in ${title}. Do you have stock?`)}`}
              target="_blank" rel="noreferrer"
              className="btn-whatsapp mt-4 inline-flex"
            >
              Ask on WhatsApp
            </a>
          </div>
        ) : (
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
            {products.map((product) => (
              <div key={product.id} className="card group">
                <Link href={`/products/${product.handle}`}>
                  <div className="relative aspect-square bg-gray-50 rounded-t-xl overflow-hidden">
                    <Image
                      src={product.image} alt={product.title} fill
                      className="object-cover group-hover:scale-105 transition-transform duration-300"
                      sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
                    />
                    {product.badge && (
                      <span className="absolute top-3 left-3 badge bg-brand-gold text-white">{product.badge}</span>
                    )}
                  </div>
                  <div className="p-4">
                    <h3 className="font-semibold text-sm text-brand-green leading-tight mb-1 line-clamp-2">{product.title}</h3>
                    <p className="text-xs text-gray-500 mb-2">{product.packSizes.join(' / ')}</p>
                    <div className="flex items-baseline gap-2">
                      <span className="font-bold text-brand-green">₹{product.price}</span>
                      {product.compareAtPrice && (
                        <span className="text-xs text-gray-400 line-through">₹{product.compareAtPrice}</span>
                      )}
                      <span className="text-xs text-gray-500">{product.unit}</span>
                    </div>
                  </div>
                </Link>
                <div className="px-4 pb-4 flex gap-2">
                  <Link href={`/products/${product.handle}`} className="flex-1 btn-primary text-xs py-2 justify-center">
                    <ShoppingCart size={13} /> Order
                  </Link>
                  <a
                    href={`https://wa.me/${number}?text=${encodeURIComponent(`Hi! I want bulk pricing for ${product.title} (SKU: ${product.sku}).`)}`}
                    target="_blank" rel="noreferrer"
                    className="p-2 rounded-md border-2 border-[#25D366] text-[#25D366] hover:bg-[#25D366] hover:text-white transition-colors"
                    title="WhatsApp Bulk Enquiry"
                  >
                    <MessageCircle size={14} />
                  </a>
                </div>
              </div>
            ))}
          </div>
        )}
      </section>

      {/* Education section */}
      {meta && (
        <section className="bg-brand-pale py-12">
          <div className="container-site max-w-3xl">
            <h2 className="font-display text-2xl font-bold text-brand-green mb-3">Why Choose Tea Planet {title}?</h2>
            <p className="text-gray-700 leading-relaxed mb-6">{meta.education}</p>
            <div className="flex gap-3">
              <Link href="/recipes" className="btn-primary text-sm">Browse Recipes</Link>
              <Link href="/contact#bulk-enquiry" className="btn-secondary text-sm">Bulk Enquiry</Link>
            </div>
          </div>
        </section>
      )}

      {/* Bulk CTA */}
      <div className="container-site py-10">
        <BulkEnquiryCTA variant="banner" />
      </div>

      {/* Related collections */}
      {meta?.relatedCollections && meta.relatedCollections.length > 0 && (
        <section className="bg-white pb-14">
          <div className="container-site">
            <h2 className="font-display text-xl font-bold text-brand-green mb-6">Related Categories</h2>
            <div className="flex flex-wrap gap-3">
              {meta.relatedCollections.map((rel) => (
                <Link
                  key={rel}
                  href={`/collections/${rel}`}
                  className="btn-secondary text-sm"
                >
                  {rel.replace(/-/g, ' ').replace(/\b\w/g, (c) => c.toUpperCase())}
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}
    </div>
  );
}
