import Link from 'next/link';
import { ArrowRight, CheckCircle } from 'lucide-react';

const TRUST_PILLS = [
  'FSSC 22000 Certified',
  'Made in India',
  '1000+ Cafes & QSRs',
  'Pan-India Delivery',
];

export default function HeroSection() {
  return (
    <section className="relative bg-brand-green overflow-hidden">
      {/* Background texture */}
      <div className="absolute inset-0 opacity-10"
           style={{ backgroundImage: 'radial-gradient(circle at 20% 50%, #52B788 0%, transparent 50%), radial-gradient(circle at 80% 20%, #D4A017 0%, transparent 40%)' }} />

      <div className="container-site relative py-20 md:py-28 lg:py-32">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left: Copy */}
          <div className="animate-fade-in">
            <div className="inline-flex items-center gap-2 bg-brand-amber/20 text-brand-amber px-4 py-1.5 rounded-full text-sm font-semibold mb-6">
              <span className="w-2 h-2 rounded-full bg-brand-amber animate-pulse" />
              B2B Beverage Manufacturer
            </div>

            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
              Launch Your
              <span className="text-brand-amber"> Boba Menu</span>
              <br />in 7 Days
            </h1>

            <p className="text-brand-pale text-lg md:text-xl leading-relaxed mb-8 max-w-xl">
              India&apos;s leading manufacturer of Boba Ingredients, Tea Premixes &amp; Beverage Bases.
              Cost-per-cup from ₹12. No minimum order for first trial.
            </p>

            {/* Trust pills */}
            <div className="flex flex-wrap gap-3 mb-8">
              {TRUST_PILLS.map((pill) => (
                <span key={pill} className="flex items-center gap-1.5 bg-white/10 text-white text-xs px-3 py-1.5 rounded-full">
                  <CheckCircle size={12} className="text-brand-amber" />
                  {pill}
                </span>
              ))}
            </div>

            {/* CTAs */}
            <div className="flex flex-wrap gap-4">
              <Link href="/collections/boba-innovations" className="btn-gold">
                Shop Boba Range
                <ArrowRight size={16} />
              </Link>
              <a
                href={`https://wa.me/${process.env.NEXT_PUBLIC_WHATSAPP_NUMBER ?? '919876543210'}?text=Hi%2C%20I%20want%20to%20launch%20a%20boba%20menu.%20Please%20share%20your%20starter%20kit%20details.`}
                target="_blank"
                rel="noreferrer"
                className="btn-whatsapp"
              >
                <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 0 0-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z" />
                </svg>
                Get Free Menu Plan
              </a>
            </div>
          </div>

          {/* Right: Stats */}
          <div className="grid grid-cols-2 gap-4">
            {[
              { number: '1000+', label: 'Cafes & QSRs', icon: '☕' },
              { number: '₹12', label: 'Cost per cup from', icon: '💰' },
              { number: '100+', label: 'SKUs in catalog', icon: '📦' },
              { number: '7 days', label: 'Menu launch time', icon: '🚀' },
            ].map((stat) => (
              <div key={stat.label} className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 text-white">
                <div className="text-3xl mb-2">{stat.icon}</div>
                <div className="font-display text-3xl font-bold text-brand-amber">{stat.number}</div>
                <div className="text-brand-pale text-sm mt-1">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
