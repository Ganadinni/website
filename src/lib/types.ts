export interface ShopifyProduct {
  id: string;
  handle: string;
  title: string;
  description: string;
  descriptionHtml: string;
  tags: string[];
  productType: string;
  vendor: string;
  priceRange: {
    minVariantPrice: { amount: string; currencyCode: string };
    maxVariantPrice: { amount: string; currencyCode: string };
  };
  images: { nodes: ShopifyImage[] };
  variants: { nodes: ShopifyVariant[] };
  metafields?: ShopifyMetafield[];
}

export interface ShopifyImage {
  url: string;
  altText: string | null;
  width: number;
  height: number;
}

export interface ShopifyVariant {
  id: string;
  title: string;
  availableForSale: boolean;
  price: { amount: string; currencyCode: string };
  compareAtPrice: { amount: string; currencyCode: string } | null;
  selectedOptions: { name: string; value: string }[];
}

export interface ShopifyMetafield {
  namespace: string;
  key: string;
  value: string;
  type: string;
}

export interface ShopifyCollection {
  id: string;
  handle: string;
  title: string;
  description: string;
  image: ShopifyImage | null;
  products: { nodes: ShopifyProduct[] };
}

export interface MockProduct {
  id: string;
  handle: string;
  title: string;
  subtitle: string;
  category: string;
  categoryHandle: string;
  packSizes: string[];
  price: number;
  compareAtPrice?: number;
  unit: string;
  sku: string;
  image: string;
  tags: string[];
  badge?: string;
  isBestSeller?: boolean;
  isNew?: boolean;
  description: string;
  benefits: string[];
  usageDosage: { hot?: string; cold?: string; notes?: string };
  applications: string[];
  faq: { q: string; a: string }[];
  relatedRecipes: string[];
  crossSell: string[];
}

export interface MockRecipe {
  slug: string;
  title: string;
  category: string;
  prepTime: string;
  servingSize: string;
  difficulty: 'Easy' | 'Medium' | 'Advanced';
  image: string;
  description: string;
  ingredients: { name: string; dosage: string; sku?: string; productHandle?: string }[];
  steps: string[];
  sellingNotes: string;
  applicationTypes: string[];
  linkedProducts: string[];
}
