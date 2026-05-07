'use client';

import { useState } from 'react';
import { Phone, Mail, MapPin, ArrowRight } from 'lucide-react';

export default function ContactPage() {
  const [form, setForm] = useState({
    name: '', phone: '', email: '', business: '', type: '', quantity: '', message: '',
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const msg = [
      `*Bulk Enquiry — Tea Planet*`,
      `Name: ${form.name}`,
      `Phone: ${form.phone}`,
      `Email: ${form.email}`,
      `Business: ${form.business}`,
      `Type: ${form.type}`,
      `Quantity: ${form.quantity}`,
      `Message: ${form.message}`,
    ].join('\n');
    const number = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER ?? '919876543210';
    window.open(`https://wa.me/${number}?text=${encodeURIComponent(msg)}`, '_blank');
    setSubmitted(true);
  };

  return (
    <div className="bg-white">
      <div className="bg-brand-green py-16">
        <div className="container-site">
          <h1 className="font-display text-4xl font-bold text-white mb-3">Contact &amp; Bulk Enquiry</h1>
          <p className="text-brand-pale text-lg">We respond to all B2B enquiries within 4 business hours.</p>
        </div>
      </div>

      <div className="container-site py-14">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Form */}
          <div className="lg:col-span-2" id="bulk-enquiry">
            {submitted ? (
              <div className="text-center py-16">
                <div className="text-6xl mb-4">🎉</div>
                <h2 className="font-display text-2xl font-bold text-brand-green mb-2">Enquiry Sent!</h2>
                <p className="text-gray-600">Our specialist will contact you within 4 business hours on WhatsApp.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <h2 className="font-display text-2xl font-bold text-brand-green mb-6">Bulk Enquiry Form</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-xs font-semibold text-gray-600 mb-1">Full Name *</label>
                    <input required type="text" value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })}
                      placeholder="Your name" className="w-full border border-gray-200 rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-brand-green" />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-gray-600 mb-1">WhatsApp Number *</label>
                    <input required type="tel" value={form.phone} onChange={(e) => setForm({ ...form, phone: e.target.value })}
                      placeholder="+91 98765 43210" className="w-full border border-gray-200 rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-brand-green" />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-gray-600 mb-1">Email</label>
                    <input type="email" value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })}
                      placeholder="you@business.com" className="w-full border border-gray-200 rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-brand-green" />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-gray-600 mb-1">Business Name</label>
                    <input type="text" value={form.business} onChange={(e) => setForm({ ...form, business: e.target.value })}
                      placeholder="Your business" className="w-full border border-gray-200 rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-brand-green" />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-gray-600 mb-1">Business Type</label>
                    <select value={form.type} onChange={(e) => setForm({ ...form, type: e.target.value })}
                      className="w-full border border-gray-200 rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-brand-green bg-white">
                      <option value="">Select…</option>
                      <option>Café / Tea Bar</option>
                      <option>QSR / Fast Food Chain</option>
                      <option>Cloud Kitchen</option>
                      <option>Hotel / Resort</option>
                      <option>Distributor / Wholesaler</option>
                      <option>Export / International</option>
                      <option>Other</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-gray-600 mb-1">Monthly Order Quantity</label>
                    <select value={form.quantity} onChange={(e) => setForm({ ...form, quantity: e.target.value })}
                      className="w-full border border-gray-200 rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-brand-green bg-white">
                      <option value="">Select…</option>
                      <option>Trial (5–10 kg)</option>
                      <option>Small (10–50 kg)</option>
                      <option>Medium (50–200 kg)</option>
                      <option>Large (200+ kg)</option>
                    </select>
                  </div>
                </div>
                <div>
                  <label className="block text-xs font-semibold text-gray-600 mb-1">What are you looking for?</label>
                  <textarea value={form.message} onChange={(e) => setForm({ ...form, message: e.target.value })}
                    rows={4} placeholder="Describe your requirement, specific SKUs, or any questions…"
                    className="w-full border border-gray-200 rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-brand-green resize-none" />
                </div>
                <button type="submit" className="btn-whatsapp w-full justify-center py-4 text-base">
                  Submit via WhatsApp <ArrowRight size={16} />
                </button>
                <p className="text-xs text-gray-400 text-center">Your enquiry will be sent securely via WhatsApp. We reply within 4 hours.</p>
              </form>
            )}
          </div>

          {/* Contact info sidebar */}
          <div className="space-y-6">
            <div className="card p-6">
              <h3 className="font-semibold text-brand-green mb-4">Get in Touch</h3>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <Phone size={16} className="text-brand-mid mt-0.5" />
                  <div>
                    <p className="text-xs text-gray-500">Sales &amp; B2B</p>
                    <a href="tel:+919876543210" className="text-sm font-medium text-brand-green hover:underline">+91 98765 43210</a>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Mail size={16} className="text-brand-mid mt-0.5" />
                  <div>
                    <p className="text-xs text-gray-500">Email</p>
                    <a href="mailto:b2b@theteaplanet.com" className="text-sm font-medium text-brand-green hover:underline">b2b@theteaplanet.com</a>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <MapPin size={16} className="text-brand-mid mt-0.5" />
                  <div>
                    <p className="text-xs text-gray-500">Manufacturing Unit</p>
                    <p className="text-sm text-gray-700">Hyderabad, Telangana, India</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-brand-green rounded-xl p-6 text-white">
              <h3 className="font-semibold mb-2">Prefer WhatsApp?</h3>
              <p className="text-brand-pale text-sm mb-4">Most of our B2B conversations happen on WhatsApp. Fast, personal, and easy to share product photos.</p>
              <a
                href={`https://wa.me/${process.env.NEXT_PUBLIC_WHATSAPP_NUMBER ?? '919876543210'}?text=${encodeURIComponent('Hi Tea Planet! I have a B2B enquiry.')}`}
                target="_blank" rel="noreferrer"
                className="btn-whatsapp w-full justify-center"
              >
                Open WhatsApp Chat
              </a>
            </div>

            <div className="card p-6">
              <h4 className="font-semibold text-brand-green mb-3">⏰ Response Time</h4>
              <ul className="space-y-2 text-sm">
                <li className="flex justify-between"><span className="text-gray-600">WhatsApp</span><span className="font-medium text-brand-green">&lt; 2 hours</span></li>
                <li className="flex justify-between"><span className="text-gray-600">Email</span><span className="font-medium text-brand-green">&lt; 4 hours</span></li>
                <li className="flex justify-between"><span className="text-gray-600">Dispatch</span><span className="font-medium text-brand-green">48 hrs standard</span></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
