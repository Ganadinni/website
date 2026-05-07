import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { Clock, ChevronRight, ShoppingCart, Users } from 'lucide-react';
import { MOCK_RECIPES, MOCK_PRODUCTS } from '@/lib/mock-data';

export async function generateStaticParams() {
  return MOCK_RECIPES.map((r) => ({ slug: r.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const recipe = MOCK_RECIPES.find((r) => r.slug === slug);
  if (!recipe) return {};
  return { title: recipe.title, description: recipe.description };
}

export default async function RecipePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const recipe = MOCK_RECIPES.find((r) => r.slug === slug);
  if (!recipe) notFound();

  const linkedProducts = MOCK_PRODUCTS.filter((p) => recipe.linkedProducts.includes(p.handle));
  const number = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER ?? '919876543210';
  const shopMsg = encodeURIComponent(
    `Hi! I want to order ingredients for the recipe: ${recipe.title}. Can you share a combined price?`
  );

  return (
    <div className="bg-white">
      {/* Breadcrumb */}
      <div className="container-site py-4">
        <nav className="flex items-center gap-2 text-xs text-gray-500">
          <Link href="/" className="hover:text-brand-green">Home</Link>
          <ChevronRight size={12} />
          <Link href="/recipes" className="hover:text-brand-green">Recipes</Link>
          <ChevronRight size={12} />
          <span className="text-brand-green font-medium truncate max-w-xs">{recipe.title}</span>
        </nav>
      </div>

      <div className="container-site pb-16">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
          {/* Left: main content */}
          <div className="lg:col-span-3">
            {/* Hero image */}
            <div className="relative h-72 md:h-96 rounded-2xl overflow-hidden bg-gray-100 mb-8">
              <Image
                src={recipe.image} alt={recipe.title} fill priority
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 60vw"
              />
            </div>

            {/* Meta */}
            <div className="flex flex-wrap gap-3 mb-4">
              <span className="badge bg-brand-pale text-brand-green">{recipe.category}</span>
              <span className="flex items-center gap-1 text-xs text-gray-500"><Clock size={12} /> {recipe.prepTime}</span>
              <span className="flex items-center gap-1 text-xs text-gray-500"><Users size={12} /> {recipe.servingSize}</span>
              <span className="badge bg-gray-100 text-gray-600">{recipe.difficulty}</span>
            </div>

            <h1 className="font-display text-3xl md:text-4xl font-bold text-brand-green mb-3">{recipe.title}</h1>
            <p className="text-gray-600 leading-relaxed mb-8">{recipe.description}</p>

            {/* Ingredients */}
            <div className="bg-brand-pale rounded-2xl p-6 mb-8">
              <h2 className="font-display text-xl font-bold text-brand-green mb-4">Ingredient Matrix</h2>
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b border-brand-light">
                      <th className="text-left pb-2 text-brand-green font-semibold">Ingredient</th>
                      <th className="text-left pb-2 text-brand-green font-semibold">Dosage</th>
                      <th className="text-left pb-2 text-brand-green font-semibold">SKU</th>
                    </tr>
                  </thead>
                  <tbody>
                    {recipe.ingredients.map((ing) => (
                      <tr key={ing.name} className="border-b border-gray-100 last:border-0">
                        <td className="py-2.5 font-medium text-gray-800">
                          {ing.productHandle ? (
                            <Link href={`/products/${ing.productHandle}`} className="text-brand-mid hover:underline">
                              {ing.name}
                            </Link>
                          ) : ing.name}
                        </td>
                        <td className="py-2.5 text-gray-600">{ing.dosage}</td>
                        <td className="py-2.5 font-mono text-xs text-gray-400">{ing.sku ?? '—'}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            {/* Preparation steps */}
            <div className="mb-8">
              <h2 className="font-display text-xl font-bold text-brand-green mb-4">Preparation Steps</h2>
              <ol className="space-y-3">
                {recipe.steps.map((step, i) => (
                  <li key={i} className="flex gap-4">
                    <span className="shrink-0 w-7 h-7 rounded-full bg-brand-green text-white text-sm font-bold flex items-center justify-center">
                      {i + 1}
                    </span>
                    <p className="text-gray-700 text-sm leading-relaxed pt-0.5">{step}</p>
                  </li>
                ))}
              </ol>
            </div>

            {/* Selling notes */}
            <div className="bg-amber-50 border border-amber-200 rounded-2xl p-6">
              <h3 className="font-semibold text-amber-800 mb-2">💰 Selling &amp; Demo Notes</h3>
              <p className="text-amber-900 text-sm leading-relaxed">{recipe.sellingNotes}</p>
            </div>
          </div>

          {/* Right: sidebar */}
          <div className="lg:col-span-2 space-y-6">
            {/* Shop this recipe */}
            <div className="bg-brand-green rounded-2xl p-6 text-white sticky top-20">
              <h3 className="font-display text-xl font-bold mb-1">Shop This Recipe</h3>
              <p className="text-brand-pale text-sm mb-5">Order all ingredients in one enquiry.</p>
              <div className="space-y-3 mb-5">
                {linkedProducts.map((p) => (
                  <div key={p.id} className="flex items-center justify-between">
                    <Link href={`/products/${p.handle}`} className="text-sm text-brand-pale hover:text-white transition-colors line-clamp-1 flex-1">
                      {p.title}
                    </Link>
                    <span className="text-brand-amber text-sm font-bold ml-3 shrink-0">₹{p.price}</span>
                  </div>
                ))}
              </div>
              <a
                href={`https://wa.me/${number}?text=${shopMsg}`}
                target="_blank" rel="noreferrer"
                className="btn-whatsapp w-full justify-center"
              >
                Order All Ingredients
              </a>
              <div className="mt-3 space-y-2">
                {linkedProducts.map((p) => (
                  <Link
                    key={p.id}
                    href={`/products/${p.handle}`}
                    className="flex items-center justify-between bg-white/10 rounded-lg px-3 py-2 text-sm hover:bg-white/20 transition-colors"
                  >
                    <span className="text-white text-xs">{p.title}</span>
                    <ShoppingCart size={13} className="text-brand-amber" />
                  </Link>
                ))}
              </div>
            </div>

            {/* Applications */}
            <div className="card p-5">
              <h4 className="font-semibold text-brand-green mb-3">Ideal For</h4>
              <div className="flex flex-wrap gap-2">
                {recipe.applicationTypes.map((app) => (
                  <span key={app} className="badge bg-brand-pale text-brand-green">{app}</span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
