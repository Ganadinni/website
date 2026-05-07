# The Tea Planet — Website

Next.js 15 headless storefront for The Tea Planet (`www.theteaplanet.com`).

## Stack

- **Next.js 15** (App Router)
- **TypeScript**
- **Tailwind CSS** (brand color system)
- **Shopify Storefront API** (optional — works with mock data without credentials)
- **Vercel** deployment

## Architecture

```
src/
  app/
    page.tsx                     # Homepage
    products/[handle]/page.tsx   # Product detail
    collections/[handle]/page.tsx  # Collection page
    recipes/page.tsx             # Recipe listing
    recipes/[slug]/page.tsx      # Recipe detail
    solutions/[slug]/page.tsx    # B2B solution pages
    packages/page.tsx            # Business packages
    about/page.tsx               # Why Tea Planet
    contact/page.tsx             # Bulk enquiry
    sitemap.ts                   # Auto-generated SEO sitemap
  components/
    layout/                      # Navbar, Footer
    home/                        # All homepage sections
    shared/                      # WhatsAppFloat, BulkEnquiryCTA
  lib/
    shopify.ts                   # Shopify Storefront API client
    mock-data.ts                 # Preview data (no API needed)
    types.ts                     # TypeScript interfaces
```

## Page Map

| Page | Route | Purpose |
|------|---------|---------|
| Homepage | `/` | B2B hero, categories, best sellers, solutions, recipes, trust badges, lead capture |
| Collection | `/collections/[handle]` | Product grid + education + bulk CTA |
| Product | `/products/[handle]` | Full product page with benefits, dosage, recipes, cross-sell, FAQ |
| Recipes | `/recipes` | Filterable recipe library |
| Recipe Detail | `/recipes/[slug]` | Ingredient matrix, steps, "Shop This Recipe" sidebar |
| Solutions | `/solutions/[slug]` | 5 B2B solution pages |
| Packages | `/packages` | 3-tier kit pricing |
| About | `/about` | Story, values, certifications |
| Contact | `/contact` | Bulk enquiry form (WhatsApp) |

## Setup

```bash
npm install
cp .env.example .env.local
# Fill in Shopify credentials (optional — mock data works without them)
npm run dev
```

### Connecting to Shopify

1. In Shopify Admin → Apps → Develop Apps → Create app
2. Enable Storefront API with `read_products`, `read_product_listings`
3. Copy `Storefront API access token`
4. Set in `.env.local`:
   ```
   NEXT_PUBLIC_SHOPIFY_STORE_DOMAIN=your-store.myshopify.com
   NEXT_PUBLIC_SHOPIFY_STOREFRONT_ACCESS_TOKEN=your-token
   ```
5. Replace mock data calls in pages with `getProduct()` / `getCollection()` from `src/lib/shopify.ts`

## Deployment (Vercel)

```bash
vercel --prod
```

Or connect the GitHub repo to Vercel for automatic preview deploys on every push.

## Approval Workflow

1. Push to `claude/rebuild-tea-planet-shopify-47WZr` (this branch)
2. Vercel creates a **preview URL** automatically
3. Review preview at the Vercel URL
4. Approve → merge to `main` → auto-deploys to production
