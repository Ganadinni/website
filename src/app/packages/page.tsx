import Link from 'next/link';
import { CheckCircle, ArrowRight } from 'lucide-react';

const PACKAGES = [
  {
    id: 'starter',
    name: 'Starter Kit',
    tagline: 'Perfect for new cafes & tea bars',
    price: '₹12,000',
    period: 'one-time',
    badge: null,
    items: [
      'Silky Mix Base — Original (1 kg)',
      'Black Tapioca Pearls (1 kg)',
      'Popping Boba Assorted (2 × 450g)',
      'Brown Sugar Syrup (1L)',
      'Recipe guide: 10 beverages',
      'Portion cards (printed)',
      'WhatsApp support for 30 days',
    ],
    cupsYield: '300–400 cups',
    cta: 'Order Starter Kit',
  },
  {
    id: 'growth',
    name: 'Growth Kit',
    tagline: 'For cafes ready to scale their boba menu',
    price: '₹28,000',
    period: 'one-time',
    badge: 'Most Popular',
    items: [
      'Silky Mix Base — 3 flavours (3 kg each)',
      'Black Tapioca Pearls (5 kg)',
      'Popping Boba — 3 flavours (3.2 kg each)',
      'Brown Sugar + 2 other syrups (3 × 1L)',
      'Nata de Coco (2 kg)',
      'Recipe guide: 20 beverages',
      'Staff training video library',
      'Cost-per-cup analysis sheet',
      'Dedicated WhatsApp support',
    ],
    cupsYield: '800–1,200 cups',
    cta: 'Order Growth Kit',
  },
  {
    id: 'pro',
    name: 'Pro Setup',
    tagline: 'Complete bar setup for QSR & multi-outlet',
    price: 'Custom',
    period: 'contact us',
    badge: 'Best Value',
    items: [
      'Full ingredient range (custom selection)',
      'Custom recipe development (5 exclusive)',
      'Staff SOP + training session (on-site)',
      'Monthly replenishment subscription',
      'Menu design consultation',
      'Dedicated account manager',
      'Volume pricing with credit terms',
    ],
    cupsYield: '5,000+ cups/month',
    cta: 'Get Custom Quote',
  },
];

export const metadata = {
  title: 'Business Packages',
  description: 'Curated beverage business packages for cafes, QSRs, and cloud kitchens. Everything to launch and scale.',
};

export default function PackagesPage() {
  const number = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER ?? '919876543210';
  return (
    <div className="bg-white">
      <div className="bg-brand-green py-16 text-center">
        <h1 className="font-display text-4xl md:text-5xl font-bold text-white mb-4">Business Packages</h1>
        <p className="text-brand-pale text-lg max-w-xl mx-auto">
          Everything you need to launch, run, and scale a profitable beverage business.
        </p>
      </div>

      <div className="container-site py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {PACKAGES.map((pkg) => (
            <div key={pkg.id}
                 className={`card p-7 flex flex-col relative ${
                   pkg.badge === 'Most Popular' ? 'border-2 border-brand-green ring-4 ring-brand-pale' : ''
                 }`}>
              {pkg.badge && (
                <span className="absolute -top-3 left-1/2 -translate-x-1/2 badge bg-brand-green text-white px-4">
                  {pkg.badge}
                </span>
              )}
              <h2 className="font-display text-2xl font-bold text-brand-green mb-1">{pkg.name}</h2>
              <p className="text-sm text-gray-500 mb-4">{pkg.tagline}</p>
              <div className="mb-2">
                <span className="font-display text-3xl font-bold text-brand-green">{pkg.price}</span>
                <span className="text-sm text-gray-400 ml-2">{pkg.period}</span>
              </div>
              <p className="text-xs text-brand-mid font-medium mb-5">Yields approx. {pkg.cupsYield}</p>
              <ul className="space-y-2 mb-8 flex-1">
                {pkg.items.map((item) => (
                  <li key={item} className="flex items-start gap-2 text-sm text-gray-700">
                    <CheckCircle size={14} className="text-brand-mid mt-0.5 shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
              <a
                href={`https://wa.me/${number}?text=${encodeURIComponent(`Hi! I'm interested in the ${pkg.name} package. Can you share details?`)}`}
                target="_blank" rel="noreferrer"
                className="btn-whatsapp w-full justify-center mb-3"
              >
                {pkg.cta}
              </a>
              <Link href="/contact#bulk-enquiry" className="btn-secondary w-full justify-center text-sm">
                Enquiry Form <ArrowRight size={13} />
              </Link>
            </div>
          ))}
        </div>

        <div className="mt-14 bg-brand-pale rounded-2xl p-8 text-center">
          <h3 className="font-display text-2xl font-bold text-brand-green mb-2">Need a Custom Package?</h3>
          <p className="text-gray-600 mb-6">We build custom ingredient subscriptions for multi-outlet chains and institutional buyers. Contact us to discuss.</p>
          <a
            href={`https://wa.me/${number}?text=${encodeURIComponent('Hi! I need a custom bulk package for my business. Can we discuss?')}`}
            target="_blank" rel="noreferrer"
            className="btn-whatsapp inline-flex"
          >
            Talk to Our Team
          </a>
        </div>
      </div>
    </div>
  );
}
