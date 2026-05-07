import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

const CATEGORIES = [
  {
    handle: 'boba-innovations',
    title: 'Boba Innovations',
    description: 'Tapioca pearls, popping boba, silky mix bases & complete boba range',
    icon: '🧋',
    color: 'from-brand-green to-brand-mid',
    badge: 'Best Sellers',
    skuCount: '30+ SKUs',
  },
  {
    handle: 'tea-premixes',
    title: 'Tea Premixes',
    description: 'CTC, Orthodox, Masala Chai & specialty tea blends for every format',
    icon: '🍵',
    color: 'from-amber-700 to-amber-500',
    badge: 'Most Popular',
    skuCount: '25+ SKUs',
  },
  {
    handle: 'syrups-flavours',
    title: 'Syrups & Flavours',
    description: 'Fruit, floral, classic & seasonal syrups for beverages and desserts',
    icon: '🍯',
    color: 'from-pink-600 to-rose-400',
    badge: 'New Flavours',
    skuCount: '25+ Flavours',
  },
  {
    handle: 'silky-mix',
    title: 'Silky Mix Bases',
    description: 'All-in-one hot & cold beverage bases — one SKU, unlimited recipes',
    icon: '✨',
    color: 'from-purple-700 to-purple-400',
    skuCount: '10+ Bases',
  },
  {
    handle: 'toppings',
    title: 'Toppings & Jellies',
    description: 'Nata de coco, konjac jelly, sago & premium drink toppings',
    icon: '🎇',
    color: 'from-teal-600 to-cyan-400',
    skuCount: '15+ Toppings',
  },
  {
    handle: 'kits',
    title: 'Beverage Kits',
    description: 'Curated starter kits for cafes, QSRs & cloud kitchens — ready to launch',
    icon: '📦',
    color: 'from-brand-brown to-amber-600',
    badge: 'High Value',
    skuCount: '5 Kit Types',
  },
];

export default function CategoryGrid() {
  return (
    <section className="bg-brand-cream py-16 md:py-24">
      <div className="container-site">
        <div className="text-center mb-12">
          <h2 className="section-heading">Shop by Category</h2>
          <p className="section-subheading max-w-2xl mx-auto">
            Everything your beverage menu needs — sourced from one FSSC certified manufacturer.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {CATEGORIES.map((cat) => (
            <Link
              key={cat.handle}
              href={`/collections/${cat.handle}`}
              className="group card overflow-hidden"
            >
              {/* Gradient header */}
              <div className={`bg-gradient-to-br ${cat.color} p-6 relative`}>
                <span className="text-4xl">{cat.icon}</span>
                {cat.badge && (
                  <span className="absolute top-4 right-4 badge bg-white/20 text-white">
                    {cat.badge}
                  </span>
                )}
              </div>
              {/* Content */}
              <div className="p-5">
                <div className="flex items-start justify-between mb-2">
                  <h3 className="font-display text-lg font-bold text-brand-green">{cat.title}</h3>
                  <span className="text-xs text-gray-400 shrink-0 mt-1">{cat.skuCount}</span>
                </div>
                <p className="text-sm text-gray-600 leading-relaxed mb-4">{cat.description}</p>
                <span className="flex items-center gap-1.5 text-sm font-semibold text-brand-mid group-hover:gap-3 transition-all">
                  Explore Range <ArrowRight size={14} />
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
