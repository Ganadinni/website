import type { MockProduct } from './types';

export const PACK_GRAMS: Record<string, number> = {
  '250g':   250,
  '400g':   400,
  '500g':   500,
  '800g':   800,
  '1 kg':  1000,
  '1.5 kg': 1500,
  '2 kg':  2000,
  '3 kg':  3000,
  '5 kg':  5000,
  '10 kg': 10000,
  '20 kg': 20000,
  '50 kg': 50000,
};

export function cupsFromPack(packSize: string, dosageGrams: number): number {
  return Math.floor((PACK_GRAMS[packSize] ?? 1000) / dosageGrams);
}

export function priceForPack(product: MockProduct, packSize: string): number {
  const grams = PACK_GRAMS[packSize] ?? 1000;
  if (product.unit === 'per kg') {
    return Math.round(product.price * (grams / 1000));
  }
  // 'per pack': price is for the first listed size; scale others proportionally
  const firstGrams = PACK_GRAMS[product.packSizes[0]] ?? grams;
  return Math.round(product.price * (grams / firstGrams));
}

export function costPerCup(product: MockProduct, packSize: string): number {
  const dosage = product.dosagePerCup ?? 40;
  const cups = cupsFromPack(packSize, dosage);
  if (cups === 0) return 0;
  return Math.round(priceForPack(product, packSize) / cups);
}
