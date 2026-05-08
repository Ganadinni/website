'use client';

import { useState, useRef } from 'react';
import Link from 'next/link';
import { Menu, X, ChevronDown, Phone } from 'lucide-react';

const NAV = [
  {
    label: 'Products',
    columns: [
      {
        heading: 'Premixes',
        items: [
          { label: 'Milk Tea Premixes',  href: '/collections/milk-tea-premixes' },
          { label: 'Fruit Tea Premixes', href: '/collections/fruit-tea-premixes' },
          { label: 'Ice Tea Premixes',   href: '/collections/ice-tea-premixes' },
        ],
      },
      {
        heading: 'Boba & Toppings',
        items: [
          { label: 'Popping Boba',        href: '/collections/popping-boba' },
          { label: 'Tapioca Pearls',      href: '/collections/tapioca-pearls' },
          { label: 'Nata de Coco',        href: '/collections/nata-de-coco' },
          { label: 'Konjac Pearls',       href: '/collections/konjac-pearls' },
        ],
      },
      {
        heading: 'Syrups & Bases',
        items: [
          { label: 'Syrups & Concentrates', href: '/collections/syrups-concentrates' },
          { label: 'Tea Concentrates',      href: '/collections/tea-concentrates' },
          { label: 'Silky Mix Bases',       href: '/collections/silky-mix' },
        ],
      },
      {
        heading: 'Specialty',
        items: [
          { label: 'Sponge Cake Base Mixes',  href: '/collections/sponge-cake-mixes' },
          { label: 'Industrial Ingredients',  href: '/collections/industrial' },
        ],
        cta: { label: 'View All Products →', href: '/collections/all' },
      },
    ],
  },
  {
    label: 'Solutions',
    columns: [
      {
        heading: 'By Business Type',
        items: [
          { label: 'For Cafés & Tea Bars',    href: '/solutions/cafe-setup',   desc: 'Full bar setup, menu & training' },
          { label: 'For QSR Chains',           href: '/solutions/qsr',          desc: 'Multi-outlet consistency & supply' },
          { label: 'For Cloud Kitchens',       href: '/solutions/cloud-kitchen',desc: 'Delivery-stable beverages & kits' },
          { label: 'For Distributors',         href: '/solutions/distributor',  desc: 'Regional partner program' },
          { label: 'For Industrial Customers', href: '/solutions/industrial',   desc: 'Bulk 20kg supply & custom formulation' },
          { label: 'Export Enquiry',           href: '/solutions/export',       desc: 'International B2B supply' },
        ],
      },
      {
        heading: 'Packages',
        items: [
          { label: 'Menu Plug-In Kit',       href: '/solutions/menu-plugin',   desc: 'Launch a boba menu in 7 days' },
          { label: 'Branded Operator Program', href: '/operator-program',     desc: 'Franchise-alternative model' },
          { label: 'Business Packages',      href: '/packages',               desc: 'Starter, Growth & Pro kits' },
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
          { label: 'Milk Teas',          href: '/recipes?category=milk-tea' },
          { label: 'Fruit Coolers',      href: '/recipes?category=fruit-cooler' },
          { label: 'Signature Fusions',  href: '/recipes?category=signature' },
          { label: 'Iced Teas',          href: '/recipes?category=iced-tea' },
          { label: 'Hot Beverages',      href: '/recipes?category=hot' },
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
  {
    label: 'Signature Drinks',
    href: '/signature-drinks',
  },
  {
    label: 'About',
    columns: [
      {
        heading: 'Company',
        items: [
          { label: 'Our Story',                href: '/about' },
          { label: 'Why Tea Planet',           href: '/about#why' },
          { label: 'Certifications',           href: '/about#certifications' },
          { label: 'Branded Operator Program', href: '/operator-program' },
        ],
      },
    ],
  },
  {
    label: 'Contact',
    href: '/contact',
  },
];

type NavItem = typeof NAV[number];

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [active, setActive] = useState<string | null>(null);
  const [mobileExpanded, setMobileExpanded] = useState<string | null>(null);
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const openDropdown = (label: string) => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    setActive(label);
  };
  const closeDropdown = () => {
    timeoutRef.current = setTimeout(() => setActive(null), 120);
  };

  const waNumber = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER ?? '918886277713';

  return (
    <header className="sticky top-0 z-50 bg-white border-b border-borderLight shadow-subtle">
      {/* Top announcement bar */}
      <div className="bg-brand-green text-white">
        <div className="container-site flex items-center justify-between py-1.5 text-xs">
          <span className="hidden sm:block">
            🇮🇳  Made in India | FSSC 22000 Certified | Cost per cup from ₹19 | 100+ Partners
          </span>
          <span className="sm:hidden">FSSC 22000 · Made in India · ₹19/cup</span>
          <a
            href={`https://wa.me/${waNumber}?text=${encodeURIComponent('Hi Tea Planet! I have a bulk enquiry.')}`}
            target="_blank" rel="noreferrer"
            className="flex items-center gap-1.5 font-medium hover:text-brand-amber transition-colors"
          >
            <Phone size={11} /> Bulk Enquiry
          </a>
        </div>
      </div>

      {/* Main nav */}
      <nav className="container-site flex items-center justify-between h-[64px]">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 shrink-0">
          <span className="font-display text-xl font-bold text-brand-green tracking-tight leading-none">
            The Tea Planet
          </span>
        </Link>

        {/* Desktop links */}
        <ul className="hidden lg:flex items-center">
          {NAV.map((item) => (
            <li
              key={item.label}
              className="relative"
              onMouseEnter={() => item.columns && openDropdown(item.label)}
              onMouseLeave={() => item.columns && closeDropdown()}
            >
              {'href' in item && item.href ? (
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

              {/* Mega dropdown */}
              {item.columns && active === item.label && (
                <div
                  className="absolute top-full left-0 mt-0 bg-white shadow-elevated border border-borderLight rounded-[8px] py-6 z-50 min-w-[480px]"
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
                                {'desc' in child && child.desc && (
                                  <span className="block text-xs text-textSecondary mt-0.5">{child.desc}</span>
                                )}
                              </Link>
                            </li>
                          ))}
                        </ul>
                        {'cta' in col && col.cta && (
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

        {/* Desktop CTAs */}
        <div className="hidden lg:flex items-center gap-2">
          <Link href="/contact#bulk-enquiry" className="btn-secondary text-sm px-4 py-2">
            Bulk Enquiry
          </Link>
          <a
            href={`https://wa.me/${waNumber}?text=${encodeURIComponent('Hi Tea Planet! I want to know about your products and pricing.')}`}
            target="_blank" rel="noreferrer"
            className="btn-whatsapp text-sm px-4 py-2"
          >
            WhatsApp
          </a>
        </div>

        {/* Mobile toggle */}
        <button
          className="lg:hidden p-2 rounded-[8px] text-brand-green hover:bg-background min-w-[44px] min-h-[44px] flex items-center justify-center"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </nav>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="lg:hidden border-t border-borderLight bg-white max-h-[80vh] overflow-y-auto">
          {NAV.map((item: NavItem) => (
            <div key={item.label}>
              {'href' in item && item.href ? (
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
                  {mobileExpanded === item.label && item.columns && (
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
              href={`https://wa.me/${waNumber}?text=${encodeURIComponent('Hi Tea Planet! Bulk enquiry.')}`}
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
