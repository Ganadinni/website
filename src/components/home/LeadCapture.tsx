'use client';

import { useState } from 'react';
import { ArrowRight } from 'lucide-react';
import { WA_LINK } from '@/lib/config';

export default function LeadCapture() {
  const [form, setForm] = useState({ name: '', phone: '', business: '', type: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const msg = `Hi Tea Planet! I'd like a free menu plan.\nName: ${form.name}\nPhone: ${form.phone}\nBusiness: ${form.business}\nType: ${form.type}`;
    window.open(WA_LINK(msg), '_blank');
    setSubmitted(true);
  };

  return (
    <section className="bg-brand-cream py-16 md:py-24">
      <div className="container-site">
        <div className="max-w-3xl mx-auto bg-white rounded-3xl shadow-lg overflow-hidden">
          <div className="grid grid-cols-1 md:grid-cols-2">
            {/* Left: Copy */}
            <div className="bg-brand-green p-8 md:p-10 flex flex-col justify-center">
              <span className="badge bg-brand-amber text-white self-start mb-4">Free for B2B</span>
              <h2 className="font-display text-3xl font-bold text-white mb-3">
                Get Your Free
                <br />Menu Plan
              </h2>
              <p className="text-brand-pale text-sm leading-relaxed mb-6">
                Tell us about your business. Our beverage specialist will send you a custom menu plan
                with cost-per-cup analysis within 24 hours.
              </p>
              <ul className="space-y-2">
                {[
                  '10+ recipe suggestions',
                  'Ingredient shopping list',
                  'Cost-per-cup analysis',
                  'Supplier pricing sheet',
                ].map((item) => (
                  <li key={item} className="flex items-center gap-2 text-sm text-brand-pale">
                    <span className="text-brand-amber">✓</span> {item}
                  </li>
                ))}
              </ul>
            </div>

            {/* Right: Form */}
            <div className="p-8 md:p-10">
              {submitted ? (
                <div className="h-full flex flex-col items-center justify-center text-center">
                  <div className="text-5xl mb-4">🎉</div>
                  <h3 className="font-display text-xl font-bold text-brand-green mb-2">You're all set!</h3>
                  <p className="text-gray-600 text-sm">Our specialist will reach out on WhatsApp within 24 hours.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <h3 className="font-display text-xl font-bold text-brand-green mb-2">Request Menu Plan</h3>
                  <div>
                    <label className="block text-xs font-semibold text-gray-600 mb-1">Your Name *</label>
                    <input
                      required type="text" value={form.name}
                      onChange={(e) => setForm({ ...form, name: e.target.value })}
                      placeholder="Your name"
                      className="w-full border border-gray-200 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-brand-green"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-gray-600 mb-1">WhatsApp Number *</label>
                    <input
                      required type="tel" value={form.phone}
                      onChange={(e) => setForm({ ...form, phone: e.target.value })}
                      placeholder="+91 98765 43210"
                      className="w-full border border-gray-200 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-brand-green"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-gray-600 mb-1">Business Name</label>
                    <input
                      type="text" value={form.business}
                      onChange={(e) => setForm({ ...form, business: e.target.value })}
                      placeholder="Café / Restaurant / Cloud Kitchen"
                      className="w-full border border-gray-200 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-brand-green"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-gray-600 mb-1">Business Type</label>
                    <select
                      value={form.type}
                      onChange={(e) => setForm({ ...form, type: e.target.value })}
                      className="w-full border border-gray-200 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-brand-green bg-white"
                    >
                      <option value="">Select type…</option>
                      <option>Café / Tea Bar</option>
                      <option>QSR / Fast Food</option>
                      <option>Cloud Kitchen</option>
                      <option>Hotel / Resort</option>
                      <option>Distributor</option>
                      <option>Other</option>
                    </select>
                  </div>
                  <button type="submit" className="btn-whatsapp w-full justify-center">
                    Send via WhatsApp <ArrowRight size={15} />
                  </button>
                  <p className="text-xs text-gray-400 text-center">Free. No spam. We respond within 24 hours.</p>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
