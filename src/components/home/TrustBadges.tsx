const BADGES = [
  {
    icon: '📊',
    title: 'High-Margin Recipes',
    subtitle: '200%+ gross margins on every drink',
  },
  {
    icon: '📋',
    title: 'Ready SOPs & Training',
    subtitle: 'Step-by-step recipes your team can follow',
  },
  {
    icon: '⚡',
    title: 'Go Live in 7 Days',
    subtitle: 'From order to serving customers — fast',
  },
  {
    icon: '🍶',
    title: 'Scalable Supply',
    subtitle: 'Factory-direct, never out of stock',
  },
  {
    icon: '🇮🇳',
    title: 'Made in India',
    subtitle: 'FSSC 22000 certified Hyderabad facility',
  },
  {
    icon: '🤝',
    title: 'Business Partner',
    subtitle: 'Menu planning, costing & ongoing support',
  },
];

export default function TrustBadges() {
  return (
    <section className="bg-brand-green py-14">
      <div className="container-site">
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-6">
          {BADGES.map((b) => (
            <div key={b.title} className="text-center">
              <div className="text-3xl mb-2">{b.icon}</div>
              <div className="text-white font-semibold text-sm">{b.title}</div>
              <div className="text-brand-pale text-xs mt-0.5 leading-snug">{b.subtitle}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
