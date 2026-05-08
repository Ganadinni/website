import Image from 'next/image';
import Link from 'next/link';
import { CheckCircle, ArrowRight, MessageCircle, Star } from 'lucide-react';

const CDN = 'https://theteaplanet.com/cdn/shop/files';
const WA = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER ?? '918886277713';

const BENEFITS = [
  { icon: '🎨', title: 'Branded Equipment', desc: 'Cups, straws, shakers and packaging with your brand identity — not ours.' },
  { icon: '📋', title: 'Ready-Made Menu', desc: 'A proven 15–25 drink menu designed for your format. No recipe R&D needed.' },
  { icon: '🏋️', title: 'Staff Training', desc: 'On-site or virtual training for your team. Typically 1–2 days.' },
  { icon: '🛒', title: 'Priority Supply', desc: 'Dedicated account manager, priority dispatch and consistent stock.' },
  { icon: '📈', title: 'Business Support', desc: 'Pricing strategy, costing sheets, supplier introductions and ongoing WhatsApp support.' },
  { icon: '🤝', title: 'No Franchise Fees', desc: 'No royalties, no territorial restrictions, no monthly reporting obligations.' },
];

const HOW_IT_WORKS = [
  { step: '01', title: 'Discovery Call', desc: 'We understand your format, location, customer profile and goals. 30 minutes on WhatsApp.' },
  { step: '02', title: 'Menu Design', desc: 'We curate a 15–25 drink menu matched to your market. Includes costing and sell price recommendations.' },
  { step: '03', title: 'Starter Kit Dispatch', desc: 'Ingredients, branded equipment, recipe cards and training materials shipped to your door in 7 days.' },
  { step: '04', title: 'Launch & Ongoing Support', desc: 'Open with confidence. Dedicated WhatsApp support, monthly check-ins and easy reordering.' },
];

const PACKAGES = [
  {
    name: 'Menu Plug-In Kit',
    price: '₹12,000',
    tag: 'Best for: Cafés adding boba to existing menu',
    features: ['15-drink curated menu','Ingredients for 300 cups','Recipe cards + prep guide','WhatsApp support 30 days'],
    href: '/solutions/menu-plugin',
    cta: 'Get Menu Plug-In Kit',
    highlight: false,
  },
  {
    name: 'Branded Operator Kit',
    price: '₹28,000',
    tag: 'Best for: New boba bars & cloud kitchens',
    features: ['25-drink curated menu','Ingredients for 750 cups','Branded cups, straws & shakers','Staff training (1 day)','30-day account manager support','Marketing materials & price list'],
    href: '/contact#bulk-enquiry',
    cta: 'Apply via WhatsApp',
    highlight: true,
  },
  {
    name: 'Pro / Custom',
    price: 'Custom',
    tag: 'Best for: Multi-outlet, QSR chains, Distributors',
    features: ['Full custom menu engineering','Bulk ingredient contract','Branded packaging (MOQ 5,000 pcs)','On-site training','Dedicated account manager','Monthly business review'],
    href: '/contact#bulk-enquiry',
    cta: 'Enquire Now',
    highlight: false,
  },
];

export const metadata = {
  title: 'Branded Operator Program — The Tea Planet',
  description: 'Launch a premium boba bar without franchising. Branded equipment, ready-made menus, staff training and ongoing B2B support. No royalties.',
};

export default function OperatorProgramPage() {
  const waUrl = `https://wa.me/${WA}?text=${encodeURIComponent('Hi Tea Planet! I want to learn about the Branded Operator Program. Please share details.')}` ;

  return (
    <div className="bg-white">
      {/* ── Hero ─────────────────────────────────────────────────────────── */}
      <section className="relative bg-brand-green min-h-[500px] flex items-center overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src={`${CDN}/TP_Shop_Models-2.jpg`}
            alt="Tea Planet Branded Operator Program"
            fill
            priority
            className="object-cover object-center opacity-30"
            sizes="100vw"
          />
        </div>
        <div className="relative container-site py-20 lg:py-28">
          <div className="max-w-2xl">
            <span className="inline-flex items-center gap-2 bg-brand-amber/20 text-brand-amber px-4 py-1.5 rounded-full text-sm font-semibold mb-6">
              <Star size={13} fill="currentColor" /> Franchise-Alternative Model
            </span>
            <h1 className="font-display text-4xl md:text-5xl font-bold text-white leading-[1.1] mb-5">
              Launch Your Boba Bar.
              <br />
              <span className="text-brand-amber">Your Brand. Our Backbone.</span>
            </h1>
            <p className="text-brand-pale text-lg leading-relaxed mb-8 max-w-xl">
              The Tea Planet Branded Operator Program gives you everything you need to run a premium boba bar — branded equipment, proven menus, staff training and ongoing support — without any franchise fees or royalties.
            </p>
            <div className="flex flex-wrap gap-3">
              <a href={waUrl} target="_blank" rel="noreferrer" className="btn-whatsapp">
                <MessageCircle size={16} /> Apply via WhatsApp
              </a>
              <Link href="#packages" className="btn-outline-white">
                View Packages <ArrowRight size={15} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ── Trust bar ────────────────────────────────────────────────────── */}
      <div className="bg-brand-pale border-b border-borderLight">
        <div className="container-site py-4 flex flex-wrap justify-center gap-6 text-sm text-textSecondary">
          {['✅ No Franchise Fees', '🚀 Launch in 7 Days', '🎨 Branded Equipment', '📋 Proven Menus', '🏅 FSSC 22000 Certified', '🤝 100+ Partners'].map((t) => (
            <span key={t} className="font-medium">{t}</span>
          ))}
        </div>
      </div>

      {/* ── What You Get ─────────────────────────────────────────────────── */}
      <section className="container-site py-16">
        <div className="text-center mb-12">
          <p className="text-brand-mid text-sm font-semibold uppercase tracking-widest mb-2">What's Included</p>
          <h2 className="section-heading mb-3">Everything to Run a Profitable Boba Bar</h2>
          <p className="text-textSecondary max-w-2xl mx-auto">Not just ingredients — a complete business-in-a-box. From day 1 training to month 6 scaling.</p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {BENEFITS.map((b) => (
            <div key={b.title} className="card p-6">
              <div className="text-3xl mb-3">{b.icon}</div>
              <h3 className="font-semibold text-brand-green mb-2">{b.title}</h3>
              <p className="text-textSecondary text-sm leading-relaxed">{b.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ── Visual showcase ───────────────────────────────────────────────── */}
      <section className="bg-brand-pale py-16">
        <div className="container-site">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div>
              <p className="text-brand-mid text-sm font-semibold uppercase tracking-widest mb-3">What It Looks Like</p>
              <h2 className="font-display text-3xl font-bold text-brand-green mb-4">A Full Menu Ready to Print and Sell</h2>
              <p className="text-textSecondary leading-relaxed mb-6">
                We supply a professionally designed, ready-to-use menu covering 15–25 drinks. Price points, selling descriptions and photography included. Costs calibrated to your local market.
              </p>
              <ul className="space-y-3 mb-8">
                {['Bubble teas, fruit coolers & iced teas','Sponge cake and dessert add-ons','WhatsApp ordering integration for cloud kitchens','Seasonal specials calendar'].map((item) => (
                  <li key={item} className="flex items-center gap-3 text-sm text-textPrimary">
                    <CheckCircle size={16} className="text-brand-mid shrink-0" /> {item}
                  </li>
                ))}
              </ul>
              <a href={waUrl} target="_blank" rel="noreferrer" className="btn-whatsapp inline-flex">
                Get a Sample Menu
              </a>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="relative aspect-square rounded-xl overflow-hidden">
                <Image src={`${CDN}/All_Menus.jpg`} alt="Sample menus" fill className="object-cover" sizes="25vw" />
              </div>
              <div className="relative aspect-square rounded-xl overflow-hidden">
                <Image src={`${CDN}/MenuPlugin_BubbleTea-Kit.jpg`} alt="Menu Plug-In Kit" fill className="object-cover" sizes="25vw" />
              </div>
              <div className="relative aspect-square rounded-xl overflow-hidden col-span-2">
                <Image src={`${CDN}/Event_Package_Branding-Equipment.jpg`} alt="Branded equipment" fill className="object-cover" sizes="50vw" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── How It Works ──────────────────────────────────────────────────── */}
      <section className="container-site py-16">
        <div className="text-center mb-12">
          <p className="text-brand-mid text-sm font-semibold uppercase tracking-widest mb-2">The Process</p>
          <h2 className="section-heading mb-3">How It Works</h2>
        </div>
        <div className="relative">
          <div className="hidden lg:block absolute top-8 left-[12.5%] right-[12.5%] h-0.5 bg-borderLight" />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {HOW_IT_WORKS.map((step) => (
              <div key={step.step} className="text-center">
                <div className="w-16 h-16 rounded-full bg-brand-pale border-2 border-brand-light flex items-center justify-center mx-auto mb-4 relative">
                  <span className="font-display text-xl font-bold text-brand-green">{step.step}</span>
                </div>
                <h3 className="font-semibold text-brand-green mb-2">{step.title}</h3>
                <p className="text-textSecondary text-sm leading-relaxed">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
        <div className="mt-12 rounded-2xl overflow-hidden">
          <div className="relative h-64 md:h-80">
            <Image
              src={`${CDN}/how_it_works_v2.png`}
              alt="How the Branded Operator Program works"
              fill
              className="object-cover object-center"
              sizes="100vw"
            />
          </div>
        </div>
      </section>

      {/* ── Why Tea Planet ────────────────────────────────────────────────── */}
      <section className="bg-brand-green py-16">
        <div className="container-site">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="relative h-80 rounded-2xl overflow-hidden">
              <Image src={`${CDN}/why_choose_us.jpg`} alt="Why choose Tea Planet" fill className="object-cover" sizes="50vw" />
            </div>
            <div>
              <p className="text-brand-amber text-sm font-semibold uppercase tracking-widest mb-3">Why Tea Planet</p>
              <h2 className="font-display text-3xl font-bold text-white mb-5">
                Indian-Made. FSSC 22000.
                <br />₹19 per cup vs ₹22–25 imported.
              </h2>
              <ul className="space-y-4 mb-8">
                {[
                  { label:'Cost per cup', value:'₹19–20 (vs ₹22–25 imported)' },
                  { label:'Dispatch time', value:'1 week (vs 4–8 weeks imported)' },
                  { label:'MOQ', value:'5 kg (vs 20–50 kg imported)' },
                  { label:'Support', value:'WhatsApp, same-day response' },
                  { label:'Certification', value:'FSSC 22000, Halal, Made in India' },
                ].map((item) => (
                  <li key={item.label} className="flex justify-between border-b border-white/10 pb-3">
                    <span className="text-brand-pale text-sm">{item.label}</span>
                    <span className="text-white text-sm font-semibold">{item.value}</span>
                  </li>
                ))}
              </ul>
              <a href={waUrl} target="_blank" rel="noreferrer" className="btn-whatsapp inline-flex">
                <MessageCircle size={16} /> Talk to Our Team
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ── Packages ─────────────────────────────────────────────────────── */}
      <section id="packages" className="container-site py-16">
        <div className="text-center mb-12">
          <p className="text-brand-mid text-sm font-semibold uppercase tracking-widest mb-2">Pricing</p>
          <h2 className="section-heading mb-3">Choose Your Launch Package</h2>
          <p className="text-textSecondary">All packages include ingredients, training materials and WhatsApp support.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {PACKAGES.map((pkg) => (
            <div
              key={pkg.name}
              className={`rounded-2xl p-8 flex flex-col ${
                pkg.highlight
                  ? 'bg-brand-green text-white ring-2 ring-brand-amber'
                  : 'border border-borderLight bg-white'
              }`}
            >
              {pkg.highlight && (
                <span className="text-xs font-semibold bg-brand-amber text-white px-3 py-1 rounded-full self-start mb-4">Most Popular</span>
              )}
              <h3 className={`font-display text-xl font-bold mb-1 ${ pkg.highlight ? 'text-white' : 'text-brand-green' }`}>{pkg.name}</h3>
              <p className={`text-xs mb-4 ${ pkg.highlight ? 'text-brand-pale' : 'text-textSecondary' }`}>{pkg.tag}</p>
              <p className={`font-display text-3xl font-bold mb-6 ${ pkg.highlight ? 'text-brand-amber' : 'text-brand-green' }`}>{pkg.price}</p>
              <ul className="space-y-3 mb-8 flex-1">
                {pkg.features.map((f) => (
                  <li key={f} className={`flex items-start gap-2 text-sm ${ pkg.highlight ? 'text-brand-pale' : 'text-textSecondary' }`}>
                    <CheckCircle size={15} className={`shrink-0 mt-0.5 ${ pkg.highlight ? 'text-brand-amber' : 'text-brand-mid' }`} /> {f}
                  </li>
                ))}
              </ul>
              {pkg.highlight ? (
                <a
                  href={waUrl}
                  target="_blank" rel="noreferrer"
                  className="btn-whatsapp justify-center"
                >
                  {pkg.cta}
                </a>
              ) : (
                <Link href={pkg.href} className="btn-secondary justify-center">
                  {pkg.cta} <ArrowRight size={14} />
                </Link>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* ── Final CTA ────────────────────────────────────────────────────── */}
      <section className="bg-brand-pale py-14">
        <div className="container-site text-center">
          <h2 className="font-display text-3xl font-bold text-brand-green mb-3">Ready to Launch?</h2>
          <p className="text-textSecondary mb-8 max-w-lg mx-auto">
            Most operators are operational within 7 days of joining. WhatsApp us now to start your discovery call.
          </p>
          <a href={waUrl} target="_blank" rel="noreferrer" className="btn-whatsapp inline-flex text-base px-8 py-4">
            <MessageCircle size={18} /> Apply via WhatsApp
          </a>
        </div>
      </section>
    </div>
  );
}
