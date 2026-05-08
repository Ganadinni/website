import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight, CheckCircle } from 'lucide-react';
import { WA_LINK } from '@/lib/config';

const CDN = 'https://theteaplanet.com/cdn/shop/files';

const STATS = [
  { number: '100+',   label: 'Partner Businesses', icon: '🤝' },
  { number: '₹19',     label: 'Cost per cup from',  icon: '💰' },
  { number: '15+',    label: 'Years experience',    icon: '🏅' },
  { number: '1 week', label: 'Dispatch time',       icon: '🚚' },
];

export default function HeroSection() {
  return (
    <section className="relative bg-brand-green overflow-hidden">
      <div className="absolute inset-0 opacity-10"
           style={{ backgroundImage: 'radial-gradient(circle at 15% 60%, #52B788 0%, transparent 50%), radial-gradient(circle at 85% 10%, #D4A017 0%, transparent 40%)' }} />

      <div className="container-site relative">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-0 items-stretch min-h-[560px]">
          <div className="flex flex-col justify-center py-16 lg:py-20 lg:pr-12">
            <div className="inline-flex items-center gap-2 bg-brand-amber/20 text-brand-amber px-4 py-1.5 rounded-full text-sm font-semibold mb-6 self-start">
              <span className="w-2 h-2 rounded-full bg-brand-amber animate-pulse" />
              B2B Beverage Manufacturer · FSSC 22000
            </div>

            <h1 className="font-display text-white leading-[1.1] mb-4">
              Imported When Necessary.
              <br />
              <span className="text-brand-amber">Indian-Made</span> When You Want
              <br />
              Speed, Support &amp; Scale.
            </h1>

            <p className="text-brand-pale text-lg leading-relaxed mb-6 max-w-lg">
              Premium Boba Ingredients, Tea Premixes &amp; Syrups manufactured in India.
              {' '}<strong className="text-white">₹19–20 per cup</strong> vs ₹22–25 imported.
              Dispatch in 1 week vs 4–8 weeks.
            </p>

            <div className="flex flex-wrap gap-2 mb-8">
              {['FSSC 22000 Certified', 'Made in India', '15+ Years Experience', '3x Repeat Rate'].map((t) => (
                <span key={t} className="flex items-center gap-1.5 bg-white/10 text-white text-xs px-3 py-1.5 rounded-full">
                  <CheckCircle size={11} className="text-brand-amber" /> {t}
                </span>
              ))}
            </div>

            <div className="flex flex-wrap gap-3">
              <Link href="/collections/silky-mix" className="btn-gold">
                Shop Products <ArrowRight size={15} />
              </Link>
              <a
                href={WA_LINK('Hi Tea Planet! I want to launch a boba menu. Please share your Menu Plug-In Kit details.')}
                target="_blank" rel="noreferrer"
                className="btn-whatsapp"
              >
                <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 0 0-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z" />
                </svg>
                Get Free Menu Plan
              </a>
            </div>
          </div>

          <div className="relative hidden lg:block">
            <Image
              src={`${CDN}/TP_cafe.jpg`}
              alt="Tea Planet café setup"
              fill priority
              className="object-cover object-center"
              sizes="50vw"
            />
            <div className="absolute inset-0 bg-gradient-to-l from-transparent to-brand-green/40" />
            <div className="absolute bottom-6 left-6 right-6 grid grid-cols-2 gap-3">
              {STATS.map((s) => (
                <div key={s.label} className="bg-white/90 backdrop-blur-sm rounded-[8px] p-3 text-center">
                  <div className="text-lg mb-0.5">{s.icon}</div>
                  <div className="font-display text-xl font-bold text-brand-green">{s.number}</div>
                  <div className="text-textSecondary text-xs">{s.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="lg:hidden grid grid-cols-2 gap-3 pb-8">
          {STATS.map((s) => (
            <div key={s.label} className="bg-white/10 rounded-[8px] p-4 text-center">
              <div className="text-2xl mb-1">{s.icon}</div>
              <div className="font-display text-2xl font-bold text-brand-amber">{s.number}</div>
              <div className="text-brand-pale text-xs mt-0.5">{s.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
