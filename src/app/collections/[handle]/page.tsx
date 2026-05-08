import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { ChevronRight, ShoppingCart, MessageCircle, Filter } from 'lucide-react';
import { MOCK_COLLECTIONS, MOCK_PRODUCTS } from '@/lib/mock-data';
import BulkEnquiryCTA from '@/components/shared/BulkEnquiryCTA';
import { WA_LINK } from '@/lib/config';

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
      'Premium drink toppings: popping boba, nata de coco, tapioca pearls & konjac jelly. Upsell by ₹30–50 per cup with the right topping.',
    education:
      'Toppings are high-margin upsell items. Adding a topping costs ₹6–15 but adds ₹30–60 to the selling price. Train your staff to suggest toppings on every boba order.',
    relatedCollections: ['boba-bubble-tea', 'beverage-mixes'],
  },
  'kits': {
    description:
      'Ready-to-launch beverage starter kits curated for different business formats. Everything you need to open your boba bar in 7 days.',
    education:
      'Our kits are designed to eliminate the guesswork of stocking a boba bar for the first time. Each kit includes ingredient quantities for 300–500 cups so you can trial, validate, and scale.',
    relatedCollections: ['boba-innovations', 'syrups-flavours'],
  },
  // ── 8 mega-menu category pages ─────────────────────────────────────────────
  'boba-bubble-tea': {
    description:
      'Complete boba range — milk tea premixes, tapioca pearls, popping boba, nata de coco & konjac jelly. Everything for a profitable boba menu from ₹19 per cup.',
    education:
      'Boba beverages deliver 70%+ gross margin. A cup costs ₹19–28 to make and sells for ₹120–220. Our premixes are Halal, Vegan & Non-GMO certified — consistent quality across every shift.',
    relatedCollections: ['toppings', 'beverage-mixes', 'boba-desserts'],
  },
  'boba-desserts': {
    description:
      'Sponge cake base mixes & frost swirls whip premix — extend your boba menu into high-margin desserts. Five tea-infused flavours: Matcha, Chai, Jasmine, Earl Grey & Black Tea.',
    education:
      'A boba sponge cake slice costs ₹380–420 per cake (8 slices) and sells for ₹120–160 per slice. Adding a dessert line to your boba bar increases average ticket by 35–50%.',
    relatedCollections: ['boba-bubble-tea', 'toppings'],
  },
  'tea-coffee': {
    description:
      'Masala chai premixes, tea concentrates & coffee blends for cafes, QSRs and cloud kitchens. Consistent cup quality every time — no grinding or brewing expertise required.',
    education:
      'Our tea concentrates eliminate barista skill dependency. Every cup is identical — critical for QSR and multi-outlet chains. FSSC 22000 certified, 18-month shelf life.',
    relatedCollections: ['japanese-tea', 'beverage-mixes'],
  },
  'japanese-tea': {
    description:
      'Premium Japanese tea range: Sencha, Matcha, Hōjicha, Gyokuro & Japanese latte premixes. Authentic flavour profiles for fine dining, specialty cafes and high-end tea bars.',
    education:
      'Japanese tea commands 40–60% higher selling prices than standard chai and milk tea. Matcha and Hojicha lattes are among the fastest-growing beverage categories in India.',
    relatedCollections: ['tea-coffee', 'boba-bubble-tea'],
  },
  'beverage-mixes': {
    description:
      'Milkshake premixes, mocktail bases, lemonade concentrates & professional syrups. 25+ flavours in stock. Heat stable, consistent, cost-effective.',
    education:
      'The right syrup adds ₹8–15 to your selling price while costing only ₹3–5 per serving. Our syrups are heat-stable to 100°C — use in hot drinks, cold blends, baking and mocktails.',
    relatedCollections: ['tea-coffee', 'boba-bubble-tea'],
  },
  'diy-boba-cups': {
    description:
      'Single-serve DIY boba cups — just add hot water and your favourite toppings. Ready in under 3 minutes. Perfect for gifting, retail and events.',
    education:
      'DIY boba cups are a zero-cooking retail SKU. Customers add hot water, shake and add toppings. Strong impulse-buy and gifting potential at ₹80–150 retail price point.',
    relatedCollections: ['boba-bubble-tea', 'toppings'],
  },
  'rtd-beverages': {
    description:
      'Ready-to-drink (RTD) popping boba, nata de coco & iced tea beverages. No preparation needed — open, pour and serve. Ideal for retail, vending and on-the-go consumption.',
    education:
      'RTD beverages are the fastest growing segment in Indian F&B. Zero preparation means zero training cost. Strong retail and modern trade channel potential.',
    relatedCollections: ['boba-bubble-tea', 'beverage-mixes'],
  },
  'all': {
    description:
      'Browse the complete Tea Planet catalog — 39+ SKUs across Boba, Tea & Coffee, Japanese Tea, Beverage Mixes, Toppings and more. B2B wholesale pricing, FSSC 22000 certified.',
    education:
      'Tea Planet is India\'s leading B2B boba & specialty beverage supplier. FSSC 22000 certified Hyderabad facility, 48-hour dispatch, factory-direct pricing with no distributor margin.',
    relatedCollections: ['boba-bubble-tea', 'tea-coffee', 'toppings', 'beverage-mixes'],
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

  const title = collection?.title ?? handle.replace(/-/g, ' ').replace(/\b\w/g, (c) => c.toUpperCase());
  const products = collection?.products ?? MOCK_PRODUCTS;
  const meta = COLLECTION_META[handle];

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
              href={WA_LINK(`Hi! I'd like bulk pricing for the ${title} range.`)}
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
              href={WA_LINK(`Hi! I'm looking for products in ${title}. Do you have stock?`)}
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
                    href={WA_LINK(`Hi! I want bulk pricing for ${product.title} (SKU: ${product.sku}).`)}
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
