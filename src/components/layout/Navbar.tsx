'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Menu, X, ChevronDown, Phone } from 'lucide-react';

const NAV_ITEMS = [
  {
    label: 'Shop',
    href: '#',
    children: [
      { label: 'Boba Innovations', href: '/collections/boba-innovations', desc: 'Tapioca pearls, popping boba & bases' },
      { label: 'Tea Premixes', href: '/collections/tea-premixes', desc: 'CTC, Orthodox & specialty blends' },
      { label: 'Syrups & Flavours', href: '/collections/syrups-flavours', desc: 'Fruit, floral & classic syrups' },
      { label: 'Silky Mix Bases', href: '/collections/silky-mix', desc: 'Hot & cold beverage bases' },
      { label: 'Toppings & Jellies', href: '/collections/toppings', desc: 'Nata de coco, konjac & more' },
      { label: 'Beverage Kits', href: '/collections/kits', desc: 'Ready-to-launch starter packs' },
    ],
  },
  {
    label: 'Recipes',
    href: '/recipes',
    children: [
      { label: 'Boba Drinks', href: '/recipes?category=boba', desc: 'Classic & fusion boba' },
      { label: 'Iced Teas', href: '/recipes?category=iced-tea', desc: 'Cold brew & fruit teas' },
      { label: 'Hot Beverages', href: '/recipes?category=hot', desc: 'Chai, matcha & more' },
      { label: 'Frappes & Shakes', href: '/recipes?category=frappe', desc: 'Blended drink formulas' },
      { label: 'Desserts & Cakes', href: '/recipes?category=dessert', desc: 'Boba cheesecakes & more' },
    ],
  },
  {
    label: 'Solutions',
    href: '#',
    children: [
      { label: 'Menu Plug-In', href: '/solutions/menu-plugin', desc: 'Launch a boba menu in 7 days' },
      { label: 'Cloud Kitchen Pack', href: '/solutions/cloud-kitchen', desc: 'Delivery-optimised beverage kits' },
      { label: 'QSR & Café Setup', href: '/solutions/cafe-setup', desc: 'Full bar setup & training' },
      { label: 'Distributor Program', href: '/solutions/distributor', desc: 'Become a regional partner' },
      { label: 'Export Enquiry', href: '/solutions/export', desc: 'International B2B supply' },
    ],
  },
  {
    label: 'Packages',
    href: '/packages',
  },
  {
    label: 'Why Tea Planet',
    href: '/about',
  },
  {
    label: 'Contact',
    href: '/contact',
  },
];

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  return (
    <header className="sticky top-0 z-50 bg-white border-b border-gray-100 shadow-sm">
      {/* Top bar */}
      <div className="bg-brand-green text-white text-xs py-1.5">
        <div className="container-site flex justify-between items-center">
          <span>🇮🇳 Made in India &nbsp;|&nbsp; FSSC 22000 Certified &nbsp;|&nbsp; 1000+ Cafes & QSRs Served</span>
          <a
            href={`https://wa.me/${process.env.NEXT_PUBLIC_WHATSAPP_NUMBER ?? '919876543210'}?text=Hi%2C%20I%27d%20like%20a%20bulk%20enquiry`}
            className="flex items-center gap-1 hover:text-brand-amber transition-colors"
            target="_blank"
            rel="noreferrer"
          >
            <Phone size={12} />
            Bulk Enquiry
          </a>
        </div>
      </div>

      {/* Main nav */}
      <nav className="container-site flex items-center justify-between h-16">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2">
          <span className="font-display text-2xl font-bold text-brand-green tracking-tight">
            The Tea Planet
          </span>
        </Link>

        {/* Desktop nav */}
        <ul className="hidden lg:flex items-center gap-1">
          {NAV_ITEMS.map((item) => (
            <li
              key={item.label}
              className="relative"
              onMouseEnter={() => item.children && setActiveDropdown(item.label)}
              onMouseLeave={() => setActiveDropdown(null)}
            >
              <Link
                href={item.href}
                className="flex items-center gap-1 px-3 py-2 text-sm font-medium text-gray-700 hover:text-brand-green rounded-md hover:bg-brand-pale transition-colors"
              >
                {item.label}
                {item.children && <ChevronDown size={14} />}
              </Link>

              {item.children && activeDropdown === item.label && (
                <div className="absolute top-full left-0 mt-0 w-72 bg-white rounded-xl shadow-xl border border-gray-100 py-2 z-50">
                  {item.children.map((child) => (
                    <Link
                      key={child.label}
                      href={child.href}
                      className="flex flex-col px-4 py-3 hover:bg-brand-pale transition-colors"
                    >
                      <span className="text-sm font-semibold text-brand-green">{child.label}</span>
                      <span className="text-xs text-gray-500 mt-0.5">{child.desc}</span>
                    </Link>
                  ))}
                </div>
              )}
            </li>
          ))}
        </ul>

        {/* Desktop CTAs */}
        <div className="hidden lg:flex items-center gap-3">
          <Link
            href="/contact#bulk-enquiry"
            className="btn-secondary text-xs px-4 py-2"
          >
            Bulk Enquiry
          </Link>
          <a
            href={`https://wa.me/${process.env.NEXT_PUBLIC_WHATSAPP_NUMBER ?? '919876543210'}?text=Hi%2C%20I%27d%20like%20to%20know%20more%20about%20your%20products`}
            target="_blank"
            rel="noreferrer"
            className="btn-whatsapp text-xs px-4 py-2"
          >
            WhatsApp Us
          </a>
        </div>

        {/* Mobile hamburger */}
        <button
          className="lg:hidden p-2 rounded-md text-brand-green"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </nav>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="lg:hidden border-t border-gray-100 bg-white pb-4">
          {NAV_ITEMS.map((item) => (
            <div key={item.label}>
              <Link
                href={item.href}
                className="block px-6 py-3 text-sm font-semibold text-brand-green hover:bg-brand-pale"
                onClick={() => setMobileOpen(false)}
              >
                {item.label}
              </Link>
              {item.children && (
                <div className="bg-gray-50">
                  {item.children.map((child) => (
                    <Link
                      key={child.label}
                      href={child.href}
                      className="block px-10 py-2 text-sm text-gray-600 hover:text-brand-green"
                      onClick={() => setMobileOpen(false)}
                    >
                      {child.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ))}
          <div className="flex gap-3 px-6 pt-4">
            <a
              href={`https://wa.me/${process.env.NEXT_PUBLIC_WHATSAPP_NUMBER ?? '919876543210'}?text=Hi%2C%20I%27d%20like%20a%20bulk%20enquiry`}
              target="_blank"
              rel="noreferrer"
              className="btn-whatsapp flex-1 justify-center text-sm"
            >
              WhatsApp
            </a>
            <Link href="/contact#bulk-enquiry" className="btn-secondary flex-1 justify-center text-sm" onClick={() => setMobileOpen(false)}>
              Bulk Enquiry
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
