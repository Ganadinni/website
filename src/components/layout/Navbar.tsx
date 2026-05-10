'use client';

import { useState, useRef } from 'react';
import Link from 'next/link';
import { Menu, X, ChevronDown, Phone } from 'lucide-react';
import { WA_LINK } from '@/lib/config';

// ── Products mega-menu data ───────────────────────────────────────────────────
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

// ── Solutions dropdown data ───────────────────────────────────────────────────
const SOLUTIONS_NAV = [
  {
    icon: '📖',
    title: 'Shop by Recipe',
    desc: 'Recipe series & beverage success toolkit',
    href: '/recipes',
    featured: false,
  },
  {
    icon: '✏️',
    title: 'Menu Plug-In',
    desc: 'Ready-made beverage category modules',
    href: '/solutions/menu-plugin',
    featured: false,
  },
  {
    icon: '🏠',
    title: 'Cloud Kitchen Menu',
    desc: 'Delivery-optimized complete beverage menu',
    href: '/solutions/cloud-kitchen',
    featured: false,
  },
  {
    icon: '🏭',
    title: 'Industrial Ingredients',
    desc: 'Bulk ingredients for manufacturers & food service',
    href: '/solutions/industrial',
    featured: false,
  },
  {
    icon: '🏆',
    title: 'Why Tea Planet',
    desc: 'Cost-per-cup advantage, formulation & support',
    href: '/about',
    featured: true,
  },
];

// ── Recipes dropdown columns ──────────────────────────────────────────────────
const RECIPES_COLUMNS = [
  {
    heading: 'By Drink Type',
    items: [
      { label: 'Boba & Bubble Tea',    href: '/recipes?type=boba' },
      { label: 'Matcha & Lattes',      href: '/recipes?type=matcha' },
      { label: 'Chai & Tea',           href: '/recipes?type=chai' },
      { label: 'Mocktails & Lemonades', href: '/recipes?type=mocktails' },
      { label: 'Boba Desserts',        href: '/recipes?type=desserts' },
      { label: '⭐ Signature Drinks',  href: '/signature-drinks' },
    ],
  },
  {
    heading: 'Tools & Guides',
    items: [
      { label: 'All Recipes',         href: '/recipes' },
      { label: 'Menu Planning Guide', href: '/recipes#menu-plan' },
      { label: 'Cost Calculator',     href: '/recipes#calculator' },
    ],
    cta: { label: 'Browse All Recipes →', href: '/recipes' },
  },
];

// ── Launch Business packages ──────────────────────────────────────────────────
const LAUNCH_PACKAGES = [
  {
    icon: '🏆',
    title: 'Branded Operator Program',
    desc: 'Operate under The Tea Planet brand — ₹0 fee',
    href: '/operator-program',
    tags: ['₹0 Franchise Fee', 'No Royalties', 'Full Brand License', 'Ongoing Mentorship'],
  },
  {
    icon: '🧋',
    title: 'Boba Business Package',
    desc: 'Complete bubble tea business setup',
    href: '/packages',
    tags: ['Full Ingredient Kit', '30+ Recipes', 'Costing Sheets', 'Staff Training'],
  },
  {
    icon: '☕',
    title: 'Tea & Coffee Package',
    desc: 'Premium tea & coffee counter setup',
    href: '/solutions/cafe-setup',
    tags: ['Chai & Coffee Premixes', 'Recipe SOPs', 'Menu Design', 'Marketing Materials'],
  },
  {
    icon: '🎉',
    title: 'ODC / Events Package',
    desc: 'Event beverage solutions',
    href: '/solutions/cloud-kitchen',
    tags: ['Event-Sized Packs', 'Portable Setup Guide', 'Seasonal Menus', 'Quick-Serve Recipes'],
  },
];

// ── Contact-only rest nav ─────────────────────────────────────────────────────
type LinkNavItem = { label: string; href: string };

export default function Navbar() {
  const [mobileOpen, setMobileOpen]         = useState(false);
  const [active, setActive]                 = useState<string | null>(null);
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
            🇮🇳 Made in India | FSSC 22000 Certified | Cost per cup from ₹19 | 100+ Partners
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

          {/* ── Solutions dropdown ── */}
          <li
            className="relative"
            onMouseEnter={() => openDropdown('Solutions')}
            onMouseLeave={closeDropdown}
          >
            <button
              className={`flex items-center gap-1 px-3.5 py-2 text-sm font-medium rounded-[8px] transition-colors ${
                active === 'Solutions'
                  ? 'text-brand-green bg-background'
                  : 'text-textPrimary hover:text-brand-green hover:bg-background'
              }`}
            >
              Solutions
              <ChevronDown size={13} className={`transition-transform ${active === 'Solutions' ? 'rotate-180' : ''}`} />
            </button>

            {active === 'Solutions' && (
              <div
                className="absolute top-full left-0 mt-0 bg-white shadow-elevated border border-borderLight rounded-[12px] z-50 w-[360px] p-2"
                onMouseEnter={() => openDropdown('Solutions')}
                onMouseLeave={closeDropdown}
              >
                {SOLUTIONS_NAV.map((item) =>
                  item.featured ? (
                    <Link
                      key={item.title}
                      href={item.href}
                      onClick={() => setActive(null)}
                      className="flex items-start gap-3 rounded-[8px] bg-[#fef9f0] border border-[#d4a24e]/25 p-3 mt-1 hover:bg-[#fef3e2] transition-colors"
                    >
                      <span className="text-2xl leading-none mt-0.5 shrink-0">{item.icon}</span>
                      <div>
                        <p className="font-bold text-sm text-[#d4a24e]">{item.title}</p>
                        <p className="text-xs text-textSecondary mt-0.5 leading-relaxed">{item.desc}</p>
                      </div>
                    </Link>
                  ) : (
                    <Link
                      key={item.title}
                      href={item.href}
                      onClick={() => setActive(null)}
                      className="flex items-start gap-3 p-3 rounded-[8px] hover:bg-background transition-colors"
                    >
                      <span className="text-2xl leading-none mt-0.5 shrink-0">{item.icon}</span>
                      <div>
                        <p className="font-bold text-sm text-textPrimary">{item.title}</p>
                        <p className="text-xs text-textSecondary mt-0.5 leading-relaxed">{item.desc}</p>
                      </div>
                    </Link>
                  )
                )}
              </div>
            )}
          </li>

          {/* ── Recipes dropdown ── */}
          <li
            className="relative"
            onMouseEnter={() => openDropdown('Recipes')}
            onMouseLeave={closeDropdown}
          >
            <button
              className={`flex items-center gap-1 px-3.5 py-2 text-sm font-medium rounded-[8px] transition-colors ${
                active === 'Recipes'
                  ? 'text-brand-green bg-background'
                  : 'text-textPrimary hover:text-brand-green hover:bg-background'
              }`}
            >
              Recipes
              <ChevronDown size={13} className={`transition-transform ${active === 'Recipes' ? 'rotate-180' : ''}`} />
            </button>

            {active === 'Recipes' && (
              <div
                className="absolute top-full left-0 mt-0 bg-white shadow-elevated border border-borderLight rounded-[12px] z-50 w-[440px]"
                onMouseEnter={() => openDropdown('Recipes')}
                onMouseLeave={closeDropdown}
              >
                <div className="grid grid-cols-2 gap-6 p-6">
                  {RECIPES_COLUMNS.map((col) => (
                    <div key={col.heading}>
                      <p className="text-xs font-semibold uppercase tracking-widest text-textSecondary mb-3 pb-2 border-b border-borderLight">
                        {col.heading}
                      </p>
                      <ul className="space-y-1">
                        {col.items.map((item) => (
                          <li key={item.label}>
                            <Link
                              href={item.href}
                              className="block py-1.5 text-sm text-textPrimary hover:text-brand-green transition-colors"
                              onClick={() => setActive(null)}
                            >
                              {item.label}
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

          {/* ── Launch Business dropdown ── */}
          <li
            className="relative"
            onMouseEnter={() => openDropdown('Launch Business')}
            onMouseLeave={closeDropdown}
          >
            <button
              className={`flex items-center gap-1 px-3.5 py-2 text-sm font-medium rounded-[8px] transition-colors ${
                active === 'Launch Business'
                  ? 'text-brand-green bg-background'
                  : 'text-textPrimary hover:text-brand-green hover:bg-background'
              }`}
            >
              Launch Business
              <ChevronDown size={13} className={`transition-transform ${active === 'Launch Business' ? 'rotate-180' : ''}`} />
            </button>

            {active === 'Launch Business' && (
              <div
                className="absolute top-full right-0 mt-0 bg-white shadow-elevated border border-borderLight rounded-[12px] z-50 w-[520px]"
                onMouseEnter={() => openDropdown('Launch Business')}
                onMouseLeave={closeDropdown}
              >
                {/* Header */}
                <div className="px-5 pt-5 pb-4 border-b border-borderLight flex items-center justify-between">
                  <div>
                    <p className="text-[10px] font-bold uppercase tracking-widest text-textSecondary">Launch Your Business</p>
                    <p className="text-sm font-semibold text-textPrimary mt-0.5">4 Ways to Start with Tea Planet</p>
                  </div>
                  <span className="text-xs font-bold text-[#d4a24e] border border-[#d4a24e]/40 rounded-full px-3 py-1 bg-[#fef9f0] shrink-0 ml-4">
                    ₹0 Franchise Fee
                  </span>
                </div>

                {/* 2×2 package grid */}
                <div className="p-4 grid grid-cols-2 gap-3">
                  {LAUNCH_PACKAGES.map((pkg) => (
                    <Link
                      key={pkg.title}
                      href={pkg.href}
                      onClick={() => setActive(null)}
                      className="block p-3.5 rounded-[8px] border border-borderLight hover:border-brand-green/30 hover:bg-brand-pale transition-all"
                    >
                      <div className="flex items-start gap-2 mb-1.5">
                        <span className="text-xl leading-none shrink-0 mt-0.5">{pkg.icon}</span>
                        <p className="font-semibold text-sm text-textPrimary leading-snug">{pkg.title}</p>
                      </div>
                      <p className="text-xs text-textSecondary mb-2 leading-relaxed pl-[30px]">{pkg.desc}</p>
                      <div className="flex flex-wrap gap-1 pl-[30px]">
                        {pkg.tags.slice(0, 2).map((tag) => (
                          <span key={tag} className="text-[10px] px-1.5 py-0.5 rounded-full bg-gray-100 text-gray-600">
                            {tag}
                          </span>
                        ))}
                      </div>
                    </Link>
                  ))}
                </div>

                {/* Footer */}
                <div className="px-5 pb-4 pt-1 border-t border-borderLight flex items-center justify-between">
                  <p className="text-xs text-textSecondary">Not sure which package?</p>
                  <Link
                    href="/packages"
                    onClick={() => setActive(null)}
                    className="text-xs font-semibold text-brand-green hover:underline"
                  >
                    Compare All Packages →
                  </Link>
                </div>
              </div>
            )}
          </li>

          {/* ── Contact ── */}
          <li>
            <Link
              href="/contact"
              className="flex items-center gap-1 px-3.5 py-2 text-sm font-medium text-textPrimary hover:text-brand-green rounded-[8px] hover:bg-background transition-colors"
            >
              Contact
            </Link>
          </li>

        </ul>

        {/* ── Desktop right-side CTAs ── */}
        <div className="hidden lg:flex items-center gap-2">
          <Link
            href="/about"
            className="px-3.5 py-1.5 text-sm font-semibold text-[#d4a24e] border border-[#d4a24e]/50 rounded-full hover:bg-[#fef9f0] transition-colors whitespace-nowrap"
          >
            Why Tea Planet
          </Link>
          <Link href="/recipes" className="btn-secondary text-sm px-4 py-2 whitespace-nowrap">
            Browse All Recipes
          </Link>
          <Link href="/contact#menu-plan" className="btn-primary text-sm px-4 py-2 whitespace-nowrap">
            Get Menu Plan
          </Link>
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

          {/* Solutions */}
          <div>
            <button
              className="w-full flex items-center justify-between px-6 py-3.5 text-sm font-semibold text-textPrimary border-b border-borderLight hover:bg-background min-h-[44px]"
              onClick={() => setMobileExpanded(mobileExpanded === 'Solutions' ? null : 'Solutions')}
            >
              Solutions
              <ChevronDown size={14} className={`transition-transform ${mobileExpanded === 'Solutions' ? 'rotate-180' : ''}`} />
            </button>
            {mobileExpanded === 'Solutions' && (
              <div className="bg-background px-4 pb-3">
                {SOLUTIONS_NAV.map((item) => (
                  <Link
                    key={item.title}
                    href={item.href}
                    onClick={() => setMobileOpen(false)}
                    className={`flex items-center gap-3 py-3 border-b border-borderLight/50 last:border-0 ${
                      item.featured ? 'text-[#d4a24e]' : 'text-textPrimary'
                    }`}
                  >
                    <span className="text-xl shrink-0">{item.icon}</span>
                    <span className="text-sm font-semibold">{item.title}</span>
                  </Link>
                ))}
              </div>
            )}
          </div>

          {/* Recipes */}
          <div>
            <button
              className="w-full flex items-center justify-between px-6 py-3.5 text-sm font-semibold text-textPrimary border-b border-borderLight hover:bg-background min-h-[44px]"
              onClick={() => setMobileExpanded(mobileExpanded === 'Recipes' ? null : 'Recipes')}
            >
              Recipes
              <ChevronDown size={14} className={`transition-transform ${mobileExpanded === 'Recipes' ? 'rotate-180' : ''}`} />
            </button>
            {mobileExpanded === 'Recipes' && (
              <div className="bg-background px-6 pb-4">
                {RECIPES_COLUMNS.map((col) => (
                  <div key={col.heading} className="pt-3">
                    <p className="text-[10px] font-semibold uppercase tracking-widest text-textSecondary mb-2">{col.heading}</p>
                    {col.items.map((item) => (
                      <Link
                        key={item.label}
                        href={item.href}
                        className="block py-2 text-sm text-textPrimary hover:text-brand-green border-b border-borderLight/40 last:border-0"
                        onClick={() => setMobileOpen(false)}
                      >
                        {item.label}
                      </Link>
                    ))}
                  </div>
                ))}
                <Link
                  href="/recipes"
                  className="block mt-3 text-sm font-semibold text-brand-mid hover:text-brand-green"
                  onClick={() => setMobileOpen(false)}
                >
                  Browse All Recipes →
                </Link>
              </div>
            )}
          </div>

          {/* Launch Business */}
          <div>
            <button
              className="w-full flex items-center justify-between px-6 py-3.5 text-sm font-semibold text-textPrimary border-b border-borderLight hover:bg-background min-h-[44px]"
              onClick={() => setMobileExpanded(mobileExpanded === 'Launch Business' ? null : 'Launch Business')}
            >
              Launch Business
              <ChevronDown size={14} className={`transition-transform ${mobileExpanded === 'Launch Business' ? 'rotate-180' : ''}`} />
            </button>
            {mobileExpanded === 'Launch Business' && (
              <div className="bg-background px-4 pb-4">
                <div className="pt-3 pb-2 border-b border-borderLight/50">
                  <p className="text-xs text-textSecondary">
                    4 ways to start — <span className="font-semibold text-[#d4a24e]">₹0 Franchise Fee</span>
                  </p>
                </div>
                {LAUNCH_PACKAGES.map((pkg) => (
                  <Link
                    key={pkg.title}
                    href={pkg.href}
                    onClick={() => setMobileOpen(false)}
                    className="flex items-center gap-3 py-3 border-b border-borderLight/50 last:border-0"
                  >
                    <span className="text-xl shrink-0">{pkg.icon}</span>
                    <div>
                      <p className="text-sm font-semibold text-textPrimary">{pkg.title}</p>
                      <p className="text-xs text-textSecondary">{pkg.desc}</p>
                    </div>
                  </Link>
                ))}
                <Link
                  href="/packages"
                  className="block mt-3 text-sm font-semibold text-brand-mid hover:text-brand-green"
                  onClick={() => setMobileOpen(false)}
                >
                  Compare All Packages →
                </Link>
              </div>
            )}
          </div>

          {/* Contact */}
          <Link
            href="/contact"
            className="block px-6 py-3.5 text-sm font-semibold text-textPrimary border-b border-borderLight hover:bg-background"
            onClick={() => setMobileOpen(false)}
          >
            Contact
          </Link>

          {/* Mobile bottom CTAs */}
          <div className="flex gap-3 p-4 border-t border-borderLight">
            <Link
              href="/about"
              className="flex-1 text-center py-2.5 text-sm font-semibold text-[#d4a24e] border border-[#d4a24e]/50 rounded-full hover:bg-[#fef9f0] transition-colors"
              onClick={() => setMobileOpen(false)}
            >
              Why Tea Planet
            </Link>
            <Link
              href="/contact#menu-plan"
              className="btn-primary flex-1 justify-center text-sm"
              onClick={() => setMobileOpen(false)}
            >
              Get Menu Plan
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
