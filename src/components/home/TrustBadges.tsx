const BADGES = [
  {
    icon: '🏅',
    title: 'FSSC 22000',
    subtitle: 'Food Safety Certified',
  },
  {
    icon: '🇮🇳',
    title: 'Made in India',
    subtitle: 'Hyderabad Manufacturing Unit',
  },
  {
    icon: '📦',
    title: 'Pan-India Delivery',
    subtitle: 'Every state & UT covered',
  },
  {
    icon: '🤝',
    title: '1000+ Businesses',
    subtitle: 'Cafes, QSRs & Hotels',
  },
  {
    icon: '⏱️',
    title: 'Fast Turnaround',
    subtitle: '48hr dispatch on standard orders',
  },
  {
    icon: '🥹',
    title: 'Custom Formulation',
    subtitle: 'White-label & OEM available',
  },
];

const LOGOS = [
  'Chai Point', 'Third Wave Coffee', 'Chaayos', 'Wow! Momo', 'Boba Bhai', 'Kung Fu Tea',
];

export default function TrustBadges() {
  return (
    <section className="bg-brand-green py-16">
      <div className="container-site">
        {/* Badges grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-6 mb-14">
          {BADGES.map((b) => (
            <div key={b.title} className="text-center">
              <div className="text-3xl mb-2">{b.icon}</div>
              <div className="text-white font-semibold text-sm">{b.title}</div>
              <div className="text-brand-pale text-xs mt-0.5">{b.subtitle}</div>
            </div>
          ))}
        </div>

        {/* Client logo strip */}
        <div className="border-t border-white/10 pt-10">
          <p className="text-center text-brand-pale text-sm mb-6">Trusted by leading beverage brands across India</p>
          <div className="flex flex-wrap justify-center items-center gap-x-8 gap-y-4">
            {LOGOS.map((logo) => (
              <span key={logo} className="text-white/60 font-semibold text-sm tracking-wide hover:text-white transition-colors">
                {logo}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
