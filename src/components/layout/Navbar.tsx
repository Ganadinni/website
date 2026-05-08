'use client';

import { useState, useRef } from 'react';
import Link from 'next/link';
import { Menu, X, ChevronDown, Phone } from 'lucide-react';
import { WA_LINK } from '@/lib/config';

// ── Products mega-menu data (matches theteaplanet.co.in exactly) ─────────────
const PRODUCT_CATEGORIES = [
  {
    icon: '🧋',
    name: 'Boba & Bubble Tea',
    desc: 'Premixes, toppings, pearls & everything boba',
    href: '/collections/boba-bubble-tea',
    tags: [
      { label: 'Bubble Tea Premixes', href: '/collections/bubble-tea-premixes' },
      { label: 'Popping Boba',        href: '/collections/popping-boba' },
      { label: 'Tapioca Pearls',      href: '/collections/tapioca-pearls' },
      { label: 'Nata de Coco',        href: '/collections/nata-de-coco' },
      { label: 'Konjac Jelly',        href: '/collections/konjac-jelly' },
    ],
  },
  {
    icon: '🍰',
    name: 'Boba Desserts',
    desc: 'Sponge cake base mixes & frost swirls whip premix',
    href: '/collections/boba-desserts',
    tags: [
      { label: 'Sponge Cake Base Mixes', href: '/collections/sponge-cake-mixes' },
      { label: 'Boba Frost Swirls Whip', href: '/collections/frost-swirls-whip' },
      { label: 'Tea-Inspired Cakes',     href: '/collections/tea-cakes' },
      { label: 'Taro Whip',             href: '/collections/taro-whip' },
      { label: 'Matcha Whip',           href: '/collections/matcha-whip' },
    ],
  },
  {
    icon: '☕',
    name: 'Tea & Coffee',
    desc: 'Chai premixes, tea concentrates & coffee blends',
    href: '/collections/tea-coffee',
    tags: [
      { label: 'Masala Chai Premix',  href: '/collections/masala-chai' },
      { label: 'Tea Concentrates',    href: '/collections/tea-concentrates' },
      { label: 'Coffee Premixes',     href: '/collections/coffee-premixes' },
      { label: 'Green Tea & Matcha',  href: '/collections/green-tea-matcha' },
      { label: 'Flavored Teas',       href: '/collections/flavored-teas' },
    ],
  },
  {
    icon: '🍵',
    name: 'Japanese Tea Range',
    desc: 'Premium Sencha, Matcha, Hōjicha, Gyokuro & latte premixes',
    href: '/collections/japanese-tea',
    tags: [
      { label: 'Sencha',                         href: '/collections/sencha' },
      { label: 'Matcha (Ceremonial & Culinary)',  href: '/collections/matcha' },
      { label: 'Hōjicha',                        href: '/collections/hojicha' },
      { label: 'Gyokuro',                        href: '/collections/gyokuro' },
      { label: 'Latte Premixes',                 href: '/collections/latte-premixes' },
    ],
  },
  {
    icon: '🥤',
    name: 'Beverage Mixes',
    desc: 'Milkshakes, mocktails, lemonades & syrups',
    href: '/collections/beverage-mixes',
    tags: [
      { label: 'Milkshake Mixes',  href: '/collections/milkshake-mixes' },
      { label: 'Mocktail Mixes',   href: '/collections/mocktail-mixes' },
      { label: 'Lemonade Mixes',   href: '/collections/lemonade-mixes' },
      { label: 'Syrups & Bases',   href: '/collections/syrups-flavours' },
      { label: 'Lassi Mixes',      href: '/collections/lassi-mixes' },
    ],
  },
  {
    icon: '🫧',
    name: 'Toppings',
    desc: 'Popping boba, nata de coco, tapioca pearls & konjac jelly',
    href: '/collections/toppings',
    tags: [
      { label: 'Popping Boba (14+ Flavors)',    href: '/collections/popping-boba' },
      { label: 'Nata de Coco (10+ Variants)',   href: '/collections/nata-de-coco' },
      { label: 'Tapioca Pearls',               href: '/collections/tapioca-pearls' },
      { label: 'Konjac Jelly',                 href: '/collections/konjac-jelly' },
    ],
  },
  {
    icon: '🧉',
    name: 'DIY Boba Cups',
    desc: 'Single-serve boba cups — just add hot water',
    href: '/collections/diy-boba-cups',
    tags: [
      { label: 'Matcha Boba Cup',    href: '/collections/matcha-boba-cup' },
      { label: 'Taro Boba Cup',      href: '/collections/taro-boba-cup' },
      { label: 'Thai Boba Cup',      href: '/collections/thai-boba-cup' },
      { label: 'Chocolate Boba Cup', href: '/collections/chocolate-boba-cup' },
    ],
  },
  {
    icon: '🍶',
    name: 'RTD Beverages',
    desc: 'Ready to drink popping boba, nata de coco & iced tea',
    href: '/collections/rtd-beverages',
    tags: [
      { label: 'Popping Boba Drinks',  href: '/collections/popping-boba-drinks' },
      { label: 'Nata de Coco Drink',   href: '/collections/nata-de-coco-drink' },
      { label: 'Brewed Iced Tea',      href: '/collections/brewed-iced-tea' },
    ],
  },
];

// ── Rest of nav (Solutions, Recipes, etc.) ────────────────────────────────────
type Column = {
  heading: string;
  items: Array<{ label: string; href: string; desc?: string }>;
  cta?: { label: string; href: string };
};
type ColumnarNavItem = { label: string; columns: Column[] };
type LinkNavItem    = { label: string; href: string };
type RestNavItem    = ColumnarNavItem | LinkNavItem;

function hasColumns(item: RestNavItem): item is ColumnarNavItem { return 'columns' in item; }
function hasHref(item: RestNavItem): item is LinkNavItem       { return 'href' in item; }

const NAV_REST: RestNavItem[] = [
  {
    label: 'Solutions',
    columns: [
      {
        heading: 'By Business Type',
        items: [
          { label: 'For Cafés & Tea Bars',    href: '/solutions/cafe-setup',    desc: 'Full bar setup, menu & training' },
          { label: 'For QSR Chains',           href: '/solutions/qsr',           desc: 'Multi-outlet consistency & supply' },
          { label: 'For Cloud Kitchens',       href: '/solutions/cloud-kitchen', desc: 'Delivery-stable beverages & kits' },
          { label: 'For Distributors',         href: '/solutions/distributor',   desc: 'Regional partner program' },
          { label: 'For Industrial Customers', href: '/solutions/industrial',    desc: 'Bulk 20 kg supply & custom formulation' },
          { label: 'Export Enquiry',           href: '/solutions/export',        desc: 'International B2B supply' },
        ],
      },
      {
        heading: 'Packages',
        items: [
          { label: 'Menu Plug-In Kit',         href: '/solutions/menu-plugin', desc: 'Launch a boba menu in 7 days' },
          { label: 'Branded Operator Program', href: '/operator-program',      desc: 'Franchise-alternative model' },
        ],
      },
    ],
  },
  {
    label: 'Recipes',
    columns: [
      {
        heading: 'By Drink Type',
        items: [
          { label: 'Milk Teas',         href: '/recipes?category=milk-tea' },
          { label: 'Fruit Coolers',     href: '/recipes?category=fruit-cooler' },
          { label: 'Signature Fusions', href: '/recipes?category=signature' },
          { label: 'Iced Teas',         href: '/recipes?category=iced-tea' },
          { label: 'Hot Beverages',     href: '/recipes?category=hot' },
        ],
      },
      {
        heading: 'By Series',
        items: [
          { label: 'Premium Series',    href: '/recipes?series=premium' },
          { label: 'Seasonal Specials', href: '/recipes?series=seasonal' },
          { label: 'Wellness Range',    href: '/recipes?series=wellness' },
          { label: 'Desserts & Cakes',  href: '/recipes?series=dessert' },
        ],
        cta: { label: 'All Recipes →', href: '/recipes' },
      },
    ],
  },
  { label: 'Signature Drinks', href: '/signature-drinks' },
  {
    label: 'Launch Business',
    columns: [
      {
        heading: 'Operator Programs',
        items: [
          { label: 'Branded Operator Program', href: '/operator-program',      desc: 'Your brand, our backbone' },
          { label: 'Menu Plug-In Kit',         href: '/solutions/menu-plugin', desc: 'Launch a boba menu in 7 days' },
          { label: 'Café Setup Program',       href: '/solutions/cafe-setup',  desc: 'Full setup: menu, training & supply' },
        ],
      },
      {
        heading: 'Why Tea Planet',
        items: [
          { label: 'Our Story & Certifications', href: '/about' },
          { label: 'High-Margin Recipes',        href: '/recipes' },
          { label: 'Signature Drinks',           href: '/signature-drinks' },
          { label: 'Contact & Bulk Enquiry',     href: '/contact' },
        ],
        cta: { label: 'Get Free Menu Plan →', href: '/contact#bulk-enquiry' },
      },
    ],
  },
  { label: 'Contact', href: '/contact' },
];

export default function Navbar() {
  const [mobileOpen, setMobileOpen]     = useState(false);
  const [active, setActive]             = useState<string | null>(null);
  const [mobileExpanded, setMobileExpanded] = useState<string | null>(null);
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const openDropdown  = (label: string) => { if (timeoutRef.current) clearTimeout(timeoutRef.current); setActive(label); };
  const closeDropdown = () => { timeoutRef.current = setTimeout(() => setActive(null), 120); };

  return (
    <header className="sticky top-0 z-50 bg-white border-b border-borderLight shadow-subtle">

      {/* ── Announcement bar ── */}
      <div className="bg-brand-green text-white">
        <div className="container-site flex items-center justify-between py-1.5 text-xs">
          <span className="hidden sm:block">
            🇮🇳 Made in India | FSSC 22000 Certified | Cost per cup from ₹19 | 100+ Partners
          </span>
          <span className="sm:hidden">FSSC 22000 · Made in India · ₹19/cup</span>
          <a
            href={WA_LINK('Hi Tea Planet! I have a bulk enquiry.')}
            target="_blank" rel="noreferrer"
            className="flex items-center gap-1.5 font-medium hover:text-brand-amber transition-colors"
          >
            <Phone size={11} /> Bulk Enquiry
          </a>
        </div>
      </div>

      {/* ── Main nav ── */}
      <nav className="container-site flex items-center justify-between h-[64px]">

        <Link href="/" className="flex items-center gap-2 shrink-0">
          <span className="font-display text-xl font-bold text-brand-green tracking-tight leading-none">
            The Tea Planet
          </span>
        </Link>

        <ul className="hidden lg:flex items-center">

          {/* ── Products mega menu ── */}
          <li
            className="relative"
            onMouseEnter={() => openDropdown('Products')}
            onMouseLeave={closeDropdown}
          >
            <button
              className={`flex items-center gap-1 px-3.5 py-2 text-sm font-medium rounded-[8px] transition-colors ${
                active === 'Products'
                  ? 'text-brand-green bg-background'
                  : 'text-textPrimary hover:text-brand-green hover:bg-background'
              }`}
            >
              Products
              <ChevronDown size={13} className={`transition-transform ${active === 'Products' ? 'rotate-180' : ''}`} />
            </button>

            {active === 'Products' && (
              <div
                className="absolute top-full left-0 mt-0 bg-white shadow-elevated border border-borderLight rounded-[12px] z-50 w-[920px]"
                onMouseEnter={() => openDropdown('Products')}
                onMouseLeave={closeDropdown}
              >
                <div className="p-6">
                  <div className="grid grid-cols-3 gap-x-8 gap-y-6">
                    {PRODUCT_CATEGORIES.map((cat) => (
                      <div key={cat.name}>
                        <div className="flex items-start gap-3 mb-2.5">
                          <span className="text-[22px] leading-none mt-0.5 shrink-0">{cat.icon}</span>
                          <div className="min-w-0">
                            <Link
                              href={cat.href}
                              className="font-semibold text-sm text-textPrimary hover:text-brand-green transition-colors block leading-snug"
                              onClick={() => setActive(null)}
                            >
                              {cat.name}
                            </Link>
                            <p className="text-[11px] text-textSecondary leading-snug mt-0.5">{cat.desc}</p>
                          </div>
                        </div>
                        <div className="flex flex-wrap gap-1.5 pl-[34px]">
                          {cat.tags.map((tag) => (
                            <Link
                              key={tag.label}
                              href={tag.href}
                              className="text-[11px] px-2 py-0.5 rounded-full bg-gray-100 text-gray-600 hover:bg-brand-pale hover:text-brand-green transition-colors whitespace-nowrap"
                              onClick={() => setActive(null)}
                            >
                              {tag.label}
                            </Link>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Footer row */}
                  <div className="mt-5 pt-4 border-t border-borderLight flex items-center justify-between">
                    <div>
                      <p className="text-sm font-semibold text-textPrimary">Browse Full Catalog</p>
                      <p className="text-xs text-textSecondary">View all products, pricing &amp; specs</p>
                    </div>
                    <Link
                      href="/collections/all"
                      className="btn-primary text-sm px-5 py-2"
                      onClick={() => setActive(null)}
                    >
                      All Products →
                    </Link>
                  </div>
                </div>
              </div>
            )}
          </li>

          {/* ── Rest of nav items ── */}
          {NAV_REST.map((item) => (
            <li
              key={item.label}
              className="relative"
              onMouseEnter={() => hasColumns(item) && openDropdown(item.label)}
              onMouseLeave={() => hasColumns(item) && closeDropdown()}
            >
              {hasHref(item) ? (
                <Link
                  href={item.href}
                  className="flex items-center gap-1 px-3.5 py-2 text-sm font-medium text-textPrimary hover:text-brand-green rounded-[8px] hover:bg-background transition-colors"
                >
                  {item.label}
                </Link>
              ) : (
                <button
                  className={`flex items-center gap-1 px-3.5 py-2 text-sm font-medium rounded-[8px] transition-colors ${
                    active === item.label
                      ? 'text-brand-green bg-background'
                      : 'text-textPrimary hover:text-brand-green hover:bg-background'
                  }`}
                >
                  {item.label}
                  <ChevronDown size={13} className={`transition-transform ${active === item.label ? 'rotate-180' : ''}`} />
                </button>
              )}

              {hasColumns(item) && active === item.label && (
                <div
                  className="absolute top-full left-0 mt-0 bg-white shadow-elevated border border-borderLight rounded-[8px] py-6 z-50 min-w-[440px]"
                  onMouseEnter={() => openDropdown(item.label)}
                  onMouseLeave={closeDropdown}
                >
                  <div className={`grid gap-6 px-6 ${
                    item.columns.length >= 3 ? 'grid-cols-3' :
                    item.columns.length === 2 ? 'grid-cols-2' : 'grid-cols-1'
                  }`}>
                    {item.columns.map((col) => (
                      <div key={col.heading}>
                        <p className="text-xs font-semibold uppercase tracking-widest text-textSecondary mb-3 pb-2 border-b border-borderLight">
                          {col.heading}
                        </p>
                        <ul className="space-y-1">
                          {col.items.map((child) => (
                            <li key={child.label}>
                              <Link
                                href={child.href}
                                className="block py-1.5 text-sm text-textPrimary hover:text-brand-green transition-colors"
                                onClick={() => setActive(null)}
                              >
                                {child.label}
                                {child.desc && (
                                  <span className="block text-xs text-textSecondary mt-0.5">{child.desc}</span>
                                )}
                              </Link>
                            </li>
                          ))}
                        </ul>
                        {col.cta && (
                          <Link
                            href={col.cta.href}
                            className="mt-3 inline-block text-xs font-semibold text-brand-mid hover:text-brand-green transition-colors"
                            onClick={() => setActive(null)}
                          >
                            {col.cta.label}
                          </Link>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </li>
          ))}
        </ul>

        <div className="hidden lg:flex items-center gap-2">
          <Link href="/contact#bulk-enquiry" className="btn-secondary text-sm px-4 py-2">
            Bulk Enquiry
          </Link>
          <a
            href={WA_LINK('Hi Tea Planet! I want to know about your products and pricing.')}
            target="_blank" rel="noreferrer"
            className="btn-whatsapp text-sm px-4 py-2"
          >
            WhatsApp
          </a>
        </div>

        <button
          className="lg:hidden p-2 rounded-[8px] text-brand-green hover:bg-background min-w-[44px] min-h-[44px] flex items-center justify-center"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </nav>

      {/* ── Mobile menu ── */}
      {mobileOpen && (
        <div className="lg:hidden border-t border-borderLight bg-white max-h-[80vh] overflow-y-auto">

          {/* Products */}
          <div>
            <button
              className="w-full flex items-center justify-between px-6 py-3.5 text-sm font-semibold text-textPrimary border-b border-borderLight hover:bg-background min-h-[44px]"
              onClick={() => setMobileExpanded(mobileExpanded === 'Products' ? null : 'Products')}
            >
              Products
              <ChevronDown size={14} className={`transition-transform ${mobileExpanded === 'Products' ? 'rotate-180' : ''}`} />
            </button>
            {mobileExpanded === 'Products' && (
              <div className="bg-background px-6 pb-4">
                {PRODUCT_CATEGORIES.map((cat) => (
                  <div key={cat.name} className="pt-3 border-b border-borderLight/50 pb-3 last:border-0">
                    <Link
                      href={cat.href}
                      className="flex items-center gap-2 text-sm font-semibold text-brand-green"
                      onClick={() => setMobileOpen(false)}
                    >
                      <span className="text-base">{cat.icon}</span> {cat.name}
                    </Link>
                    <div className="flex flex-wrap gap-1.5 mt-2 pl-6">
                      {cat.tags.map((tag) => (
                        <Link
                          key={tag.label}
                          href={tag.href}
                          className="text-[11px] px-2 py-0.5 rounded-full bg-white border border-gray-200 text-gray-600 hover:text-brand-green"
                          onClick={() => setMobileOpen(false)}
                        >
                          {tag.label}
                        </Link>
                      ))}
                    </div>
                  </div>
                ))}
                <Link
                  href="/collections/all"
                  className="block mt-3 text-sm font-semibold text-brand-mid hover:text-brand-green"
                  onClick={() => setMobileOpen(false)}
                >
                  All Products →
                </Link>
              </div>
            )}
          </div>

          {/* Rest of nav */}
          {NAV_REST.map((item) => (
            <div key={item.label}>
              {hasHref(item) ? (
                <Link
                  href={item.href}
                  className="block px-6 py-3.5 text-sm font-semibold text-textPrimary border-b border-borderLight hover:bg-background"
                  onClick={() => setMobileOpen(false)}
                >
                  {item.label}
                </Link>
              ) : (
                <>
                  <button
                    className="w-full flex items-center justify-between px-6 py-3.5 text-sm font-semibold text-textPrimary border-b border-borderLight hover:bg-background min-h-[44px]"
                    onClick={() => setMobileExpanded(mobileExpanded === item.label ? null : item.label)}
                  >
                    {item.label}
                    <ChevronDown size={14} className={`transition-transform ${mobileExpanded === item.label ? 'rotate-180' : ''}`} />
                  </button>
                  {mobileExpanded === item.label && (
                    <div className="bg-background px-6 pb-3">
                      {item.columns.map((col) => (
                        <div key={col.heading} className="pt-3">
                          <p className="text-[10px] font-semibold uppercase tracking-widest text-textSecondary mb-2">{col.heading}</p>
                          {col.items.map((child) => (
                            <Link
                              key={child.label}
                              href={child.href}
                              className="block py-2 text-sm text-textPrimary hover:text-brand-green"
                              onClick={() => setMobileOpen(false)}
                            >
                              {child.label}
                            </Link>
                          ))}
                        </div>
                      ))}
                    </div>
                  )}
                </>
              )}
            </div>
          ))}

          <div className="flex gap-3 p-4 border-t border-borderLight">
            <a
              href={WA_LINK('Hi Tea Planet! Bulk enquiry.')}
              target="_blank" rel="noreferrer"
              className="btn-whatsapp flex-1 justify-center text-sm"
            >
              WhatsApp
            </a>
            <Link
              href="/contact#bulk-enquiry"
              className="btn-secondary flex-1 justify-center text-sm"
              onClick={() => setMobileOpen(false)}
            >
              Enquiry
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
