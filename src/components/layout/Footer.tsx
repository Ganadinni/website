import Link from 'next/link';
import { MapPin, Phone, Mail, Instagram, Youtube, Linkedin } from 'lucide-react';

const SHOP_LINKS = [
  { label: 'Boba Innovations', href: '/collections/boba-innovations' },
  { label: 'Tea Premixes', href: '/collections/tea-premixes' },
  { label: 'Syrups & Flavours', href: '/collections/syrups-flavours' },
  { label: 'Silky Mix Bases', href: '/collections/silky-mix' },
  { label: 'Toppings & Jellies', href: '/collections/toppings' },
  { label: 'Beverage Kits', href: '/collections/kits' },
];

const SOLUTION_LINKS = [
  { label: 'Menu Plug-In', href: '/solutions/menu-plugin' },
  { label: 'Cloud Kitchen Pack', href: '/solutions/cloud-kitchen' },
  { label: 'QSR & Café Setup', href: '/solutions/cafe-setup' },
  { label: 'Distributor Program', href: '/solutions/distributor' },
  { label: 'Business Packages', href: '/packages' },
];

const RECIPE_LINKS = [
  { label: 'Boba Recipes', href: '/recipes?category=boba' },
  { label: 'Iced Tea Recipes', href: '/recipes?category=iced-tea' },
  { label: 'Hot Beverages', href: '/recipes?category=hot' },
  { label: 'Frappes & Shakes', href: '/recipes?category=frappe' },
  { label: 'Desserts', href: '/recipes?category=dessert' },
];

export default function Footer() {
  return (
    <footer className="bg-brand-green text-white">
      {/* Main footer */}
      <div className="container-site py-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-10">
        {/* Brand column */}
        <div className="lg:col-span-2">
          <p className="font-display text-2xl font-bold mb-3">The Tea Planet</p>
          <p className="text-brand-pale text-sm leading-relaxed mb-5 max-w-xs">
            India's leading manufacturer of Boba, Syrups, Tea Premixes &amp; Beverage Ingredients.
            FSSC 22000 Certified. Trusted by 1000+ F&amp;B businesses across India.
          </p>
          <div className="flex items-start gap-2 text-sm text-brand-pale mb-2">
            <MapPin size={15} className="mt-0.5 shrink-0" />
            <span>Manufacturing Unit, Hyderabad, Telangana, India</span>
          </div>
          <div className="flex items-center gap-2 text-sm text-brand-pale mb-2">
            <Phone size={15} />
            <a href="tel:+918886277713" className="hover:text-white transition-colors">+91 88862 77713</a>
          </div>
          <div className="flex items-center gap-2 text-sm text-brand-pale mb-5">
            <Mail size={15} />
            <a href="mailto:founder@theteaplanet.com" className="hover:text-white transition-colors">founder@theteaplanet.com</a>
          </div>
          <div className="flex gap-3">
            <a href="https://instagram.com/theteaplanet" target="_blank" rel="noreferrer" aria-label="Instagram"
               className="p-2 rounded-full bg-white/10 hover:bg-white/20 transition-colors">
              <Instagram size={16} />
            </a>
            <a href="https://youtube.com/@theteaplanet" target="_blank" rel="noreferrer" aria-label="YouTube"
               className="p-2 rounded-full bg-white/10 hover:bg-white/20 transition-colors">
              <Youtube size={16} />
            </a>
            <a href="https://linkedin.com/company/theteaplanet" target="_blank" rel="noreferrer" aria-label="LinkedIn"
               className="p-2 rounded-full bg-white/10 hover:bg-white/20 transition-colors">
              <Linkedin size={16} />
            </a>
          </div>
        </div>

        {/* Shop links */}
        <div>
          <h4 className="font-semibold text-sm uppercase tracking-wider mb-4 text-brand-amber">Shop</h4>
          <ul className="space-y-2">
            {SHOP_LINKS.map((l) => (
              <li key={l.label}>
                <Link href={l.href} className="text-sm text-brand-pale hover:text-white transition-colors">{l.label}</Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Solutions */}
        <div>
          <h4 className="font-semibold text-sm uppercase tracking-wider mb-4 text-brand-amber">Solutions</h4>
          <ul className="space-y-2">
            {SOLUTION_LINKS.map((l) => (
              <li key={l.label}>
                <Link href={l.href} className="text-sm text-brand-pale hover:text-white transition-colors">{l.label}</Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Recipes */}
        <div>
          <h4 className="font-semibold text-sm uppercase tracking-wider mb-4 text-brand-amber">Recipes</h4>
          <ul className="space-y-2">
            {RECIPE_LINKS.map((l) => (
              <li key={l.label}>
                <Link href={l.href} className="text-sm text-brand-pale hover:text-white transition-colors">{l.label}</Link>
              </li>
            ))}
          </ul>
          <h4 className="font-semibold text-sm uppercase tracking-wider mt-6 mb-4 text-brand-amber">Company</h4>
          <ul className="space-y-2">
            <li><Link href="/about" className="text-sm text-brand-pale hover:text-white transition-colors">Why Tea Planet</Link></li>
            <li><Link href="/about#certifications" className="text-sm text-brand-pale hover:text-white transition-colors">Certifications</Link></li>
            <li><Link href="/contact" className="text-sm text-brand-pale hover:text-white transition-colors">Contact &amp; Enquiry</Link></li>
          </ul>
        </div>
      </div>

      {/* Trust bar */}
      <div className="border-t border-white/10">
        <div className="container-site py-4 flex flex-wrap items-center justify-between gap-3 text-xs text-brand-pale">
          <div className="flex flex-wrap gap-4">
            <span>✅ FSSC 22000 Certified</span>
            <span>🇮🇳 Made in India</span>
            <span>📦 Pan-India Delivery</span>
            <span>🤝 1000+ Business Clients</span>
          </div>
          <span>© {new Date().getFullYear()} The Tea Planet. All rights reserved.</span>
        </div>
      </div>
    </footer>
  );
}
