import Link from 'next/link';
import { notFound } from 'next/navigation';
import { CheckCircle, ArrowRight } from 'lucide-react';
import BulkEnquiryCTA from '@/components/shared/BulkEnquiryCTA';

const SOLUTIONS = {
  'menu-plugin': {
    title: 'Menu Plug-In',
    tagline: 'Launch a profitable boba menu in 7 days',
    icon: '🚀',
    description:
      'The Tea Planet Menu Plug-In is a complete, curated ingredient kit designed for cafes and tea bars launching boba for the first time. Everything you need arrives in one shipment. No guesswork, no sourcing from multiple vendors.',
    includes: [
      'Curated ingredient kit for 10 menu items',
      'Printed recipe guide with portion cards',
      'Staff training video library (WhatsApp delivery)',
      'Cost-per-cup analysis for each recipe',
      'Reorder system via WhatsApp in 2 minutes',
      '30-day support from our beverage specialist',
    ],
    idealFor: ['Café & Tea Bar', 'Fine Dining (beverage extension)', 'New business launch'],
    pricing: 'Kit pricing from ₹12,000. Custom sizing available.',
    ctaText: 'Get My Menu Kit',
  },
  'cloud-kitchen': {
    title: 'Cloud Kitchen Pack',
    tagline: 'Delivery-optimised beverages that travel well',
    icon: '🥑',
    description:
      'Not all boba beverages survive a 20-minute delivery ride. Our Cloud Kitchen Pack is specifically designed around ingredients and recipes that maintain quality in sealed cups at ambient temperature.',
    includes: [
      'Delivery-stable recipe selection (tested up to 30min)',
      'Sealed cup-compatible ingredient list',
      'High shelf-life ingredient kit',
      'Zomato & Swiggy menu naming & photo guide',
      'Cost-per-cup analysis for delivery pricing',
      'Packaging recommendation list',
    ],
    idealFor: ['Cloud Kitchen', 'Ghost Kitchens', 'Aggregator-only F&B brands'],
    pricing: 'Kit pricing from ₹8,500.',
    ctaText: 'Get Cloud Kitchen Pack',
  },
  'cafe-setup': {
    title: 'QSR & Café Setup',
    tagline: 'Complete bar setup from equipment to menu',
    icon: '☕',
    description:
      'A full-service setup package for QSRs and multi-outlet cafes that want to launch or scale their boba and premium beverage menu. We work with your team on layout, equipment, ingredient sourcing, and staff training.',
    includes: [
      'Bar layout & equipment checklist',
      'Ingredient subscription plan with volume pricing',
      'Staff SOP manual + recipe booklet',
      'Monthly menu refresh support (seasonal)',
      'Wastage reduction guide',
      'Dedicated account manager',
    ],
    idealFor: ['QSR chains', 'Multi-outlet cafes', 'Hotel F&B operations'],
    pricing: 'Consultation-based. Contact us for a proposal.',
    ctaText: 'Book Free Consultation',
  },
  'distributor': {
    title: 'Distributor Program',
    tagline: 'Become a regional Tea Planet partner',
    icon: '🚚',
    description:
      'Join our growing network of regional distributors. Tea Planet products sell themselves — strong brand, FSSC certification, and a product range that every F&B business needs. We support you with marketing materials, training, and competitive pricing.',
    includes: [
      'Exclusive territory agreement',
      'High-margin B2B factory pricing',
      'Marketing & POS display materials',
      'Product training for your sales team',
      'Direct factory supply (no middle man)',
      'Co-branded recipe & menu content',
    ],
    idealFor: ['Wholesale distributors', 'Regional FMCG distributors', 'Institutional supply companies'],
    pricing: 'Minimum stock commitment required. Apply to discuss terms.',
    ctaText: 'Apply for Distributorship',
  },
  'export': {
    title: 'Export Enquiry',
    tagline: 'International B2B beverage supply',
    icon: '🌍',
    description:
      'Tea Planet exports to markets across South Asia, Southeast Asia, and the Middle East. We handle custom formulations, private labelling, halal certification, and export documentation.',
    includes: [
      'MOQ-flexible export pricing',
      'Private label / white-label available',
      'Halal certification on request',
      'Custom formulation for market requirements',
      'Full export documentation support',
      'Sea & air freight options',
    ],
    idealFor: ['International importers', 'Overseas distributors', 'Retail chains in target markets'],
    pricing: 'Pricing depends on destination, MOQ, and product mix.',
    ctaText: 'Submit Export Enquiry',
  },
};

export async function generateStaticParams() {
  return Object.keys(SOLUTIONS).map((slug) => ({ slug }));
}

export default async function SolutionPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const sol = SOLUTIONS[slug as keyof typeof SOLUTIONS];
  if (!sol) notFound();
  const number = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER ?? '919876543210';
  const waMsg = encodeURIComponent(`Hi! I'm interested in the ${sol.title} from Tea Planet. Can you share details?`);

  return (
    <div className="bg-white">
      <div className="bg-brand-green py-16">
        <div className="container-site">
          <div className="text-5xl mb-4">{sol.icon}</div>
          <h1 className="font-display text-4xl font-bold text-white mb-3">{sol.title}</h1>
          <p className="text-brand-pale text-xl max-w-xl">{sol.tagline}</p>
        </div>
      </div>

      <div className="container-site py-14">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          <div className="lg:col-span-2">
            <p className="text-gray-700 text-lg leading-relaxed mb-10">{sol.description}</p>

            <h2 className="font-display text-2xl font-bold text-brand-green mb-5">What’s Included</h2>
            <ul className="space-y-3 mb-10">
              {sol.includes.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <CheckCircle size={18} className="text-brand-mid mt-0.5 shrink-0" />
                  <span className="text-gray-700">{item}</span>
                </li>
              ))}
            </ul>

            <h2 className="font-display text-2xl font-bold text-brand-green mb-4">Ideal For</h2>
            <div className="flex flex-wrap gap-2 mb-10">
              {sol.idealFor.map((f) => (
                <span key={f} className="badge bg-brand-pale text-brand-green px-4 py-2">{f}</span>
              ))}
            </div>

            <div className="bg-brand-pale rounded-xl p-5">
              <h3 className="font-semibold text-brand-green mb-1">Pricing</h3>
              <p className="text-gray-700 text-sm">{sol.pricing}</p>
            </div>
          </div>

          <div className="space-y-5">
            <div className="bg-brand-green rounded-2xl p-6 text-white">
              <h3 className="font-display text-xl font-bold mb-3">Ready to get started?</h3>
              <p className="text-brand-pale text-sm mb-5">Talk to our specialist. Free consultation.</p>
              <a href={`https://wa.me/${number}?text=${waMsg}`} target="_blank" rel="noreferrer"
                 className="btn-whatsapp w-full justify-center mb-3">
                WhatsApp Now
              </a>
              <Link href="/contact#bulk-enquiry" className="btn-secondary bg-transparent text-white border-white w-full justify-center hover:bg-white/10">
                Enquiry Form <ArrowRight size={14} />
              </Link>
            </div>

            <div className="card p-5">
              <h4 className="font-semibold text-brand-green mb-3">Other Solutions</h4>
              <ul className="space-y-2">
                {Object.entries(SOLUTIONS).filter(([s]) => s !== slug).map(([s, data]) => (
                  <li key={s}>
                    <Link href={`/solutions/${s}`} className="text-sm text-brand-mid hover:text-brand-green flex items-center gap-2">
                      <span>{data.icon}</span> {data.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
