import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

const CATEGORIES = [
  {
    handle: 'boba-bubble-tea',
    title: 'Boba & Bubble Tea',
    icon: '🧋',
    desc: 'Premixes, toppings, pearls & everything boba.',
    badge: 'Best Seller',
    skus: '20+ SKUs',
    gradient: 'from-brand-green to-brand-mid',
  },
  {
    handle: 'boba-desserts',
    title: 'Boba Desserts',
    icon: '🍰',
    desc: 'Sponge cake base mixes & frost swirls whip premix.',
    badge: 'New',
    skus: '5 Products',
    gradient: 'from-pink-600 to-rose-400',
  },
  {
    handle: 'tea-coffee',
    title: 'Tea & Coffee',
    icon: '☕',
    desc: 'Chai premixes, tea concentrates & coffee blends.',
    badge: 'Most Popular',
    skus: '15+ Flavours',
    gradient: 'from-amber-700 to-amber-500',
  },
  {
    handle: 'japanese-tea',
    title: 'Japanese Tea Range',
    icon: '🍵',
    desc: 'Premium Sencha, Matcha, Hōjicha, Gyokuro & latte premixes.',
    badge: 'Premium',
    skus: '10+ Varieties',
    gradient: 'from-teal-700 to-teal-500',
  },
  {
    handle: 'beverage-mixes',
    title: 'Beverage Mixes',
    icon: '🥤',
    desc: 'Milkshakes, mocktails, lemonades & syrups.',
    badge: null,
    skus: '25+ Flavours',
    gradient: 'from-violet-700 to-purple-500',
  },
  {
    handle: 'toppings',
    title: 'Toppings',
    icon: '🫧',
    desc: 'Popping boba (14+ flavors), nata de coco, tapioca pearls & konjac jelly.',
    badge: null,
    skus: '30+ Variants',
    gradient: 'from-orange-600 to-amber-400',
  },
  {
    handle: 'diy-boba-cups',
    title: 'DIY Boba Cups',
    icon: '🧉',
    desc: 'Single-serve boba cups — just add hot water.',
    badge: 'New',
    skus: '4 Variants',
    gradient: 'from-sky-600 to-cyan-500',
  },
  {
    handle: 'rtd-beverages',
    title: 'RTD Beverages',
    icon: '🍶',
    desc: 'Ready to drink popping boba, nata de coco & iced tea.',
    badge: null,
    skus: '3 Products',
    gradient: 'from-indigo-700 to-indigo-500',
  },
];

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

        <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-5">
          {CATEGORIES.map((cat) => (
            <Link key={cat.handle} href={`/collections/${cat.handle}`} className="group card overflow-hidden">
              <div className={`bg-gradient-to-br ${cat.gradient} p-5 relative`}>
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

        <div className="text-center mt-10">
          <Link href="/collections/all" className="btn-secondary">
            Browse Full Catalog <ArrowRight size={14} />
          </Link>
        </div>
      </div>
    </section>
  );
}
