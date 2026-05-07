import Link from 'next/link';
import Image from 'next/image';
import { Clock, ArrowRight } from 'lucide-react';
import { MOCK_RECIPES } from '@/lib/mock-data';

const FEATURED = MOCK_RECIPES.slice(0, 3);

const DIFF_COLOR = {
  Easy: 'bg-green-100 text-green-700',
  Medium: 'bg-amber-100 text-amber-700',
  Advanced: 'bg-red-100 text-red-700',
};

export default function RecipeSection() {
  return (
    <section className="bg-white py-16 md:py-24">
      <div className="container-site">
        <div className="flex items-end justify-between mb-10">
          <div>
            <h2 className="section-heading">Discover Recipes</h2>
            <p className="section-subheading">Build your menu from 50+ tested recipes. Every recipe links directly to ingredients.</p>
          </div>
          <Link href="/recipes" className="hidden sm:flex btn-secondary text-sm">
            All Recipes
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {FEATURED.map((recipe) => (
            <Link key={recipe.slug} href={`/recipes/${recipe.slug}`} className="card group overflow-hidden">
              <div className="relative h-52 bg-gray-100 overflow-hidden">
                <Image
                  src={recipe.image}
                  alt={recipe.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
                <span className={`absolute top-3 left-3 badge ${DIFF_COLOR[recipe.difficulty]}`}>
                  {recipe.difficulty}
                </span>
              </div>
              <div className="p-5">
                <p className="text-xs font-medium text-brand-mid mb-1">{recipe.category}</p>
                <h3 className="font-display text-lg font-bold text-brand-green mb-2 leading-tight">{recipe.title}</h3>
                <p className="text-sm text-gray-600 mb-4 line-clamp-2">{recipe.description}</p>
                <div className="flex items-center justify-between">
                  <span className="flex items-center gap-1.5 text-xs text-gray-500">
                    <Clock size={12} /> {recipe.prepTime} &nbsp;·&nbsp; {recipe.servingSize}
                  </span>
                  <span className="text-brand-mid text-sm font-semibold flex items-center gap-1 group-hover:gap-2 transition-all">
                    View Recipe <ArrowRight size={13} />
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* Recipe-to-product CTA */}
        <div className="mt-10 bg-brand-cream rounded-2xl p-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div>
            <h3 className="font-display text-xl font-bold text-brand-green">📊 50+ Recipes, All Ingredients In Stock</h3>
            <p className="text-gray-600 text-sm mt-1">Every recipe links to its exact Tea Planet ingredients. Order in one click.</p>
          </div>
          <Link href="/recipes" className="btn-primary shrink-0">
            Browse All Recipes <ArrowRight size={14} />
          </Link>
        </div>

        <div className="text-center mt-6 sm:hidden">
          <Link href="/recipes" className="btn-secondary">View All Recipes</Link>
        </div>
      </div>
    </section>
  );
}
