'use client';

import { MessageCircle, ArrowRight } from 'lucide-react';

interface BulkEnquiryCTAProps {
  productName?: string;
  sku?: string;
  variant?: 'banner' | 'inline' | 'card';
}

export default function BulkEnquiryCTA({ productName, sku, variant = 'inline' }: BulkEnquiryCTAProps) {
  const number = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER ?? '918886277713';
  const baseMsg = productName
    ? `Hi Tea Planet! I'd like bulk pricing for ${productName}${sku ? ` (SKU: ${sku})` : ''}. Please share your B2B price sheet.`
    : `Hi Tea Planet! I'd like to place a bulk order. Please share your B2B price sheet.`;
  const waUrl = `https://wa.me/${number}?text=${encodeURIComponent(baseMsg)}`;

  if (variant === 'banner') {
    return (
      <div className="bg-brand-pale border border-brand-light rounded-2xl p-6 flex flex-col sm:flex-row items-center justify-between gap-4">
        <div>
          <p className="font-semibold text-brand-green">Need bulk quantities?</p>
          <p className="text-sm text-gray-600 mt-0.5">
            B2B pricing available from 5 kg. Custom pack sizes on request.
          </p>
        </div>
        <div className="flex gap-3 shrink-0">
          <a href={waUrl} target="_blank" rel="noreferrer" className="btn-whatsapp">
            <MessageCircle size={15} /> WhatsApp
          </a>
          <a href="/contact#bulk-enquiry" className="btn-secondary">
            Enquiry Form <ArrowRight size={14} />
          </a>
        </div>
      </div>
    );
  }

  if (variant === 'card') {
    return (
      <div className="card p-5 text-center">
        <div className="text-3xl mb-2">📦</div>
        <h4 className="font-semibold text-brand-green mb-1">Bulk / B2B Order</h4>
        <p className="text-xs text-gray-500 mb-4">From 5 kg. Custom packs available.</p>
        <a href={waUrl} target="_blank" rel="noreferrer" className="btn-whatsapp w-full justify-center text-sm">
          <MessageCircle size={14} /> WhatsApp Enquiry
        </a>
      </div>
    );
  }

  return (
    <a href={waUrl} target="_blank" rel="noreferrer" className="btn-secondary">
      <MessageCircle size={14} /> Bulk Enquiry
    </a>
  );
}
