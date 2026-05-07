import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

const CATEGORIES = [
  { handle: 'silky-mix',           title: 'Silky Mix Bases',        icon: '✨',  desc: 'Hot & cold beverage bases. One SKU, unlimited recipes.',        badge: 'Best Seller', skus: '10+ Bases' },
  { handle: 'popping-boba',        title: 'Popping Boba',           icon: '🎇',  desc: 'Juice-filled bursting pearls. 6+ varieties. No cooking.',        badge: 'New',         skus: '6+ Flavours' },
  { handle: 'tapioca-pearls',      title: 'Tapioca Pearls',         icon: '⚫',   desc: 'Standard & instant. Consistent chew. Ready in 5 minutes.',       badge: null,          skus: '3 Variants' },
  { handle: 'syrups-concentrates', title: 'Syrups & Concentrates',  icon: '🍯',  desc: 'Fruit, floral & classic syrups for beverages & desserts.',        badge: null,          skus: '25+ Flavours' },
  { handle: 'milk-tea-premixes',   title: 'Tea Premixes',           icon: '🍵',  desc: 'Milk, Fruit & Ice Tea premixes. 15+ proven flavours.',            badge: 'Most Popular',skus: '15+ Flavours' },
  { handle: 'nata-de-coco',        title: 'Nata de Coco',           icon: '🧡',  desc: '8–10mm cubes. Premium topping. High upsell value.',               badge: null,          skus: 'In Stock' },
  { handle: 'konjac-pearls',       title: 'Konjac Pearls',          icon: '�️',  desc: 'Wire-cut & jelly-cut variants. Low calorie premium topping.',     badge: null,          skus: '2 Variants' },
  { handle: 'sponge-cake-mixes',   title: 'Sponge Cake Mixes',      icon: '🎂',  desc: '5 tea-infused flavours. ₹899 each. Extend into desserts.',        badge: 'New',         skus: '5 Flavours' },
  { handle: 'industrial',          title: 'Industrial Ingredients', icon: '🏧',  desc: 'Bulk 20kg buckets for high-volume production.',                   badge: null,          skus: 'Bulk Supply' },
];

const COLOR_MAP: Record<string, string> = {
  'silky-mix':           'from-brand-green to-brand-mid',
  'popping-boba':        'from-pink-600 to-rose-400',
  'tapioca-pearls':      'from-amber-700 to-amber-500',
  'syrups-concentrates': 'from-orange-600 to-amber-400',
  'milk-tea-premixes':   'from-teal-700 to-teal-500',
  'nata-de-coco':        'from-sky-600 to-cyan-400',
  'konjac-pearls':       'from-violet-700 to-purple-400',
  'sponge-cake-mixes':   'from-brand-brown to-amber-600',
  'industrial':          'from-gray-700 to-gray-500',
};

export default function CategoryGrid() {
  return (
    <section className="bg-background py-16 md:py-24">
      <div className="container-site">
        <div className="text-center mb-12">
          <p className="text-brand-mid text-sm font-semibold uppercase tracking-widest mb-2">Product Catalog</p>
          <h2 className="section-heading">Shop by Category</h2>
          <p className="section-subheading max-w-2xl mx-auto">
            Everything your beverage menu needs — sourced from one FSSC 22000 certified manufacturer.
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-3 gap-4 md:gap-5">
          {CATEGORIES.map((cat) => (
            <Link key={cat.handle} href={`/collections/${cat.handle}`} className="group card overflow-hidden">
              <div className={`bg-gradient-to-br ${COLOR_MAP[cat.handle] ?? 'from-gray-600 to-gray-400'} p-5 relative`}>
                <span className="text-3xl">{cat.icon}</span>
                {cat.badge && (
                  <span className="absolute top-3 right-3 badge bg-white/20 text-white text-[10px]">{cat.badge}</span>
                )}
              </div>
              <div className="p-4">
                <div className="flex items-start justify-between mb-1">
                  <h3 className="font-semibold text-sm text-brand-green leading-tight">{cat.title}</h3>
                  <span className="text-[10px] text-textSecondary shrink-0 mt-0.5 ml-1">{cat.skus}</span>
                </div>
                <p className="text-xs text-textSecondary leading-relaxed mb-3">{cat.desc}</p>
                <span className="flex items-center gap-1 text-xs font-semibold text-brand-mid group-hover:gap-2 transition-all">
                  Explore <ArrowRight size={11} />
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
