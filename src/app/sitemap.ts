import { MetadataRoute } from 'next';
import { MOCK_PRODUCTS, MOCK_RECIPES, MOCK_COLLECTIONS } from '@/lib/mock-data';

const BASE = process.env.NEXT_PUBLIC_SITE_URL ?? 'https://www.theteaplanet.com';

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes = [
    { url: BASE, priority: 1.0 },
    { url: `${BASE}/recipes`, priority: 0.9 },
    { url: `${BASE}/packages`, priority: 0.8 },
    { url: `${BASE}/about`, priority: 0.7 },
    { url: `${BASE}/contact`, priority: 0.8 },
    { url: `${BASE}/solutions/menu-plugin`, priority: 0.8 },
    { url: `${BASE}/solutions/cloud-kitchen`, priority: 0.7 },
    { url: `${BASE}/solutions/cafe-setup`, priority: 0.7 },
    { url: `${BASE}/solutions/distributor`, priority: 0.7 },
    { url: `${BASE}/solutions/export`, priority: 0.6 },
  ].map((r) => ({ ...r, lastModified: new Date(), changeFrequency: 'weekly' as const }));

  const productRoutes = MOCK_PRODUCTS.map((p) => ({
    url: `${BASE}/products/${p.handle}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: 0.8,
  }));

  const collectionRoutes = MOCK_COLLECTIONS.map((c) => ({
    url: `${BASE}/collections/${c.handle}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: 0.85,
  }));

  const recipeRoutes = MOCK_RECIPES.map((r) => ({
    url: `${BASE}/recipes/${r.slug}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.7,
  }));

  return [...staticRoutes, ...collectionRoutes, ...productRoutes, ...recipeRoutes];
}
