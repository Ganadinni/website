import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { WA_LINK } from '@/lib/config';

const SOLUTIONS = [
  {
    href: '/operator-program',
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
      </svg>
    ),
    title: 'Branded Operator Program',
    tagline: 'Your brand. Our backbone. No franchise fees.',
    points: [
      'Branded cups, straws & packaging',
      'Ready-made 15–25 drink menu',
      'Staff training (on-site or virtual)',
      'Dedicated account manager + reorder support',
    ],
    cta: 'Apply for Program',
    highlight: true,
  },
  {
    href: '/solutions/menu-plugin',
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
      </svg>
    ),
    title: 'Menu Plug-In Kit',
    tagline: 'Launch a profitable boba menu in 7 days',
    points: [
      'Curated ingredients for 300 cups',
      'Recipe cards + portion guide included',
      'WhatsApp support for 30 days',
      'Reorder in 2 minutes on WhatsApp',
    ],
    cta: 'Get Menu Plan',
  },
  {
    href: '/solutions/cloud-kitchen',
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
      </svg>
    ),
    title: 'Cloud Kitchen Pack',
    tagline: 'Delivery-optimised beverages that travel well',
    points: [
      'Sealed cup-compatible recipes',
      'Zomato & Swiggy menu naming guide',
      'High shelf-life ingredient selection',
      'Cost-per-cup analysis included',
    ],
    cta: 'View Pack',
  },
  {
    href: '/solutions/distributor',
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" />
      </svg>
    ),
    title: 'Distributor Program',
    tagline: 'Become a regional supply partner',
    points: [
      'Exclusive territory agreements',
      'Factory-direct pricing',
      'Marketing & display support',
      'Pan-India network access',
    ],
    cta: 'Apply Now',
  },
];

export default function BusinessSolutions() {
  return (
    <section className="bg-brand-pale py-16 md:py-24">
      <div className="container-site">
        <div className="text-center mb-12">
          <p className="text-brand-mid text-sm font-semibold uppercase tracking-widest mb-2">For Every Business Format</p>
          <h2 className="section-heading">Beverage Solutions for Your Business</h2>
          <p className="section-subheading max-w-2xl mx-auto">
            We don't just sell ingredients — we help you build a profitable beverage business.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {SOLUTIONS.map((sol) => (
            <div
              key={sol.title}
              className={`card p-6 md:p-8 flex flex-col ${
                sol.highlight ? 'border-2 border-brand-green ring-2 ring-brand-pale' : ''
              }`}
            >
              {sol.highlight && (
                <span className="self-start badge bg-brand-green text-white mb-4">Most Popular</span>
              )}
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#e8f5ee] text-[#1a5c38] mb-4">
                {sol.icon}
              </div>
              <h3 className="font-display text-xl font-bold text-brand-green mb-1">{sol.title}</h3>
              <p className="text-brand-mid text-sm mb-4">{sol.tagline}</p>
              <ul className="space-y-2 mb-6 flex-1">
                {sol.points.map((pt) => (
                  <li key={pt} className="flex items-start gap-2 text-sm text-gray-700">
                    <span className="text-brand-green font-bold mt-0.5">✓</span>
                    {pt}
                  </li>
                ))}
              </ul>
              <Link href={sol.href} className="btn-primary self-start">
                {sol.cta} <ArrowRight size={14} />
              </Link>
            </div>
          ))}
        </div>

        <div className="mt-10 bg-brand-green rounded-2xl p-8 flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <h3 className="font-display text-2xl font-bold text-white mb-1">Not sure which solution fits?</h3>
            <p className="text-brand-pale text-sm">Talk to our beverage specialist. Free 15-min consultation on WhatsApp.</p>
          </div>
          <div className="flex gap-4 shrink-0">
            <a
              href={WA_LINK('Hi Tea Planet! I\'d like a free beverage consultation for my business.')}
              target="_blank"
              rel="noreferrer"
              className="btn-whatsapp"
            >
              WhatsApp Us
            </a>
            <Link href="/contact#bulk-enquiry" className="btn-secondary bg-transparent text-white border-white hover:bg-white/10">
              Bulk Enquiry
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
