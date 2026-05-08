const STATS = [
  {
    number: '500+',
    label: 'Partner Businesses',
    sublabel: 'Cafés, QSRs & cloud kitchens',
  },
  {
    number: '200+',
    label: 'Tested Recipes',
    sublabel: 'With cost-per-cup analysis',
  },
  {
    number: 'FSSC 22000',
    label: 'Food Safety Certified',
    sublabel: 'Hyderabad facility · Since 2019',
  },
  {
    number: '48 hrs',
    label: 'Dispatch SLA',
    sublabel: 'Pan-India · Factory direct',
  },
];

export default function StatsBar() {
  return (
    <section className="border-b border-[#e5e0da] bg-white py-10 lg:py-12">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid grid-cols-2 gap-y-8 lg:grid-cols-4 lg:divide-x lg:divide-[#e5e0da] lg:gap-y-0">
          {STATS.map((stat, i) => (
            <div
              key={stat.label}
              className={`flex flex-col items-center text-center ${
                i % 2 === 0 ? 'lg:pl-0' : ''
              } lg:px-8`}
            >
              <span className="font-display text-[2rem] font-extrabold leading-none tracking-tight text-[#0f3a22] lg:text-[2.25rem]">
                {stat.number}
              </span>
              <span className="mt-1.5 text-[13px] font-bold text-[#1a1412]">
                {stat.label}
              </span>
              <span className="mt-0.5 text-[11px] text-[#6b6560]">
                {stat.sublabel}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
