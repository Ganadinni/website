const domain = process.env.NEXT_PUBLIC_SHOPIFY_STORE_DOMAIN;
const token = process.env.NEXT_PUBLIC_SHOPIFY_STOREFRONT_ACCESS_TOKEN;

const SHOPIFY_ENDPOINT = domain
  ? `https://${domain}/api/2024-10/graphql.json`
  : null;

async function shopifyFetch<T>(query: string, variables?: Record<string, unknown>): Promise<T> {
  if (!SHOPIFY_ENDPOINT || !token) {
    throw new Error('Shopify credentials not configured. Set NEXT_PUBLIC_SHOPIFY_STORE_DOMAIN and NEXT_PUBLIC_SHOPIFY_STOREFRONT_ACCESS_TOKEN.');
  }
  const res = await fetch(SHOPIFY_ENDPOINT, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'X-Shopify-Storefront-Access-Token': token,
    },
    body: JSON.stringify({ query, variables }),
    next: { revalidate: 300 },
  });
  const json = await res.json();
  if (json.errors) throw new Error(json.errors[0].message);
  return json.data as T;
}

export const PRODUCT_FRAGMENT = `
  fragment ProductFields on Product {
    id
    handle
    title
    description
    descriptionHtml
    tags
    productType
    vendor
    priceRange {
      minVariantPrice { amount currencyCode }
      maxVariantPrice { amount currencyCode }
    }
    images(first: 6) {
      nodes { url altText width height }
    }
    variants(first: 10) {
      nodes {
        id
        title
        availableForSale
        price { amount currencyCode }
        compareAtPrice { amount currencyCode }
        selectedOptions { name value }
      }
    }
  }
`;

export async function getProduct(handle: string) {
  const query = `
    ${PRODUCT_FRAGMENT}
    query GetProduct($handle: String!) {
      product(handle: $handle) { ...ProductFields }
    }
  `;
  const data = await shopifyFetch<{ product: unknown }>(query, { handle });
  return data.product;
}

export async function getCollection(handle: string, first = 24) {
  const query = `
    ${PRODUCT_FRAGMENT}
    query GetCollection($handle: String!, $first: Int!) {
      collection(handle: $handle) {
        id handle title description
        image { url altText width height }
        products(first: $first) { nodes { ...ProductFields } }
      }
    }
  `;
  const data = await shopifyFetch<{ collection: unknown }>(query, { handle, first });
  return data.collection;
}

export async function getProducts(first = 12) {
  const query = `
    ${PRODUCT_FRAGMENT}
    query GetProducts($first: Int!) {
      products(first: $first, sortKey: BEST_SELLING) {
        nodes { ...ProductFields }
      }
    }
  `;
  const data = await shopifyFetch<{ products: { nodes: unknown[] } }>(query, { first });
  return data.products.nodes;
}

export const isShopifyConfigured = Boolean(domain && token);
