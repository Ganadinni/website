import { CheckCircle } from 'lucide-react';
import Link from 'next/link';

const CERTIFICATIONS = [
  { name: 'FSSC 22000', desc: 'Food Safety System Certification — highest standard for food manufacturers' },
  { name: 'FSSAI Licensed', desc: 'India Food Safety and Standards Authority registration' },
  { name: 'ISO 9001:2015', desc: 'Quality Management System certification' },
  { name: 'Made in India', desc: 'Manufactured at our Hyderabad production facility' },
];

const STATS = [
  { number: '2015', label: 'Founded' },
  { number: '1000+', label: 'B2B Clients' },
  { number: '100+', label: 'SKUs' },
  { number: '28', label: 'States served' },
];

const VALUES = [
  { icon: '🦹🏼‍♂️', title: 'Manufacturer Direct', desc: 'We manufacture everything we sell. No sourcing middlemen.' },
  { icon: '🔬', title: 'R&D Driven', desc: 'In-house recipe development team working on new formulations every quarter.' },
  { icon: '💰', title: 'B2B First', desc: 'Pricing, pack sizes, and support designed for businesses, not retail consumers.' },
  { icon: '🤝', title: 'Partner Mindset', desc: 'We grow when you grow. Our team is invested in your menu success.' },
];

export const metadata = {
  title: 'Why Tea Planet',
  description: 'Learn about The Tea Planet — India\'s leading B2B beverage ingredient manufacturer. FSSC 22000 certified.',
};

export default function AboutPage() {
  return (
    <div className="bg-white">
      {/* Hero */}
      <div className="bg-brand-green py-20">
        <div className="container-site">
          <h1 className="font-display text-4xl md:text-5xl font-bold text-white mb-5">Why Tea Planet?</h1>
          <p className="text-brand-pale text-xl max-w-2xl leading-relaxed">
            We’re not a distributor. We’re the manufacturer. That means better prices, faster supply, and a
            partner that’s invested in your business growing.
          </p>
        </div>
      </div>

      {/* Stats */}
      <div className="bg-brand-cream py-12">
        <div className="container-site grid grid-cols-2 md:grid-cols-4 gap-6">
          {STATS.map((s) => (
            <div key={s.label} className="text-center">
              <div className="font-display text-4xl font-bold text-brand-green">{s.number}</div>
              <div className="text-gray-600 text-sm mt-1">{s.label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Story */}
      <div className="container-site py-16 max-w-3xl">
        <h2 className="section-heading mb-5">Our Story</h2>
        <div className="space-y-4 text-gray-700 leading-relaxed">
          <p>The Tea Planet was founded in 2015 with a single goal: make professional-grade beverage ingredients accessible to every F&B business in India, not just large chains.</p>
          <p>Today we manufacture over 100 SKUs across Boba Ingredients, Tea Premixes, Syrups, Silky Mix Bases and Toppings at our FSSC 22000 certified facility in Hyderabad.</p>
          <p>We supply directly to 1000+ cafes, QSRs, cloud kitchens, hotels, and distributors across 28 states. No middlemen. Factory-direct pricing.</p>
        </div>
      </div>

      {/* Values */}
      <div className="bg-brand-pale py-14">
        <div className="container-site">
          <h2 className="section-heading text-center mb-10">What Makes Us Different</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {VALUES.map((v) => (
              <div key={v.title} className="card p-6 text-center">
                <div className="text-3xl mb-3">{v.icon}</div>
                <h3 className="font-semibold text-brand-green mb-2">{v.title}</h3>
                <p className="text-sm text-gray-600">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Certifications */}
      <div className="container-site py-14" id="certifications">
        <h2 className="section-heading mb-8">Certifications</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          {CERTIFICATIONS.map((cert) => (
            <div key={cert.name} className="flex items-start gap-4 card p-5">
              <CheckCircle size={22} className="text-brand-mid mt-0.5 shrink-0" />
              <div>
                <h3 className="font-semibold text-brand-green">{cert.name}</h3>
                <p className="text-sm text-gray-600 mt-1">{cert.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* CTA */}
      <div className="bg-brand-green py-14">
        <div className="container-site text-center">
          <h2 className="font-display text-3xl font-bold text-white mb-4">Ready to Work Together?</h2>
          <p className="text-brand-pale mb-8">Talk to our team. Free beverage consultation for new business enquiries.</p>
          <div className="flex justify-center gap-4 flex-wrap">
            <Link href="/contact#bulk-enquiry" className="btn-gold">Make an Enquiry</Link>
            <Link href="/collections/boba-innovations" className="btn-secondary bg-transparent text-white border-white hover:bg-white/10">Shop Products</Link>
          </div>
        </div>
      </div>
    </div>
  );
}
