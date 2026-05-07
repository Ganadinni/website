import Link from 'next/link';
import Image from 'next/image';
import { Clock, ArrowRight } from 'lucide-react';
import { MOCK_RECIPES } from '@/lib/mock-data';

const CATEGORIES = ['All', 'Boba Drinks', 'Iced Tea', 'Hot Beverages', 'Frappes', 'Desserts'];

const DIFF_COLOR: Record<string, string> = {
  Easy: 'bg-green-100 text-green-700',
  Medium: 'bg-amber-100 text-amber-700',
  Advanced: 'bg-red-100 text-red-700',
};

export const metadata = {
  title: 'Recipes',
  description: 'Explore 50+ tested beverage recipes using Tea Planet ingredients. Every recipe links to exact products.',
};

export default function RecipesPage() {
  return (
    <div className="bg-white">
      {/* Hero */}
      <div className="bg-brand-green py-16">
        <div className="container-site text-center">
          <h1 className="font-display text-4xl md:text-5xl font-bold text-white mb-4">
            Recipe Library
          </h1>
          <p className="text-brand-pale text-lg max-w-xl mx-auto">
            50+ tested recipes. Every ingredient linked to Tea Planet stock. Build your menu today.
          </p>
        </div>
      </div>

      {/* Category filter */}
      <div className="sticky top-16 z-30 bg-white border-b shadow-sm">
        <div className="container-site">
          <div className="flex gap-2 overflow-x-auto py-3 scrollbar-hide">
            {CATEGORIES.map((cat) => (
              <button
                key={cat}
                className="shrink-0 px-4 py-1.5 rounded-full text-sm font-medium border border-gray-200 hover:border-brand-green hover:text-brand-green transition-colors"
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Grid */}
      <section className="container-site py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {MOCK_RECIPES.map((recipe) => (
            <Link key={recipe.slug} href={`/recipes/${recipe.slug}`} className="card group overflow-hidden">
              <div className="relative h-56 bg-gray-100 overflow-hidden">
                <Image
                  src={recipe.image} alt={recipe.title} fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
                <span className={`absolute top-3 left-3 badge ${DIFF_COLOR[recipe.difficulty]}`}>
                  {recipe.difficulty}
                </span>
                <div className="absolute top-3 right-3 flex gap-1">
                  {recipe.applicationTypes.map((t) => (
                    <span key={t} className="badge bg-black/50 text-white text-[10px]">{t}</span>
                  ))}
                </div>
              </div>
              <div className="p-5">
                <p className="text-xs font-medium text-brand-mid mb-1">{recipe.category}</p>
                <h2 className="font-display text-lg font-bold text-brand-green mb-2">{recipe.title}</h2>
                <p className="text-sm text-gray-600 mb-4 line-clamp-2">{recipe.description}</p>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3 text-xs text-gray-500">
                    <span className="flex items-center gap-1"><Clock size={11} /> {recipe.prepTime}</span>
                    <span>{recipe.servingSize}</span>
                  </div>
                  <span className="text-sm font-semibold text-brand-mid flex items-center gap-1 group-hover:gap-2 transition-all">
                    View <ArrowRight size={13} />
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* CTA */}
      <div className="bg-brand-pale py-12">
        <div className="container-site text-center">
          <h2 className="font-display text-2xl font-bold text-brand-green mb-2">Need a Custom Recipe?</h2>
          <p className="text-gray-600 mb-6">Our R&amp;D team can formulate recipes for your specific menu and business format.</p>
          <a
            href={`https://wa.me/${process.env.NEXT_PUBLIC_WHATSAPP_NUMBER ?? '919876543210'}?text=${encodeURIComponent('Hi! I need a custom recipe developed for my menu. Can you help?')}`}
            target="_blank" rel="noreferrer"
            className="btn-whatsapp inline-flex"
          >
            WhatsApp Our R&amp;D Team
          </a>
        </div>
      </div>
    </div>
  );
}
