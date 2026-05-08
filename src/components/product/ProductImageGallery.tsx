'use client';

import { useState } from 'react';

interface Props {
  images: string[];
  title: string;
  badge?: string;
}

export default function ProductImageGallery({ images, title, badge }: Props) {
  const [selected, setSelected] = useState(0);

  return (
    <div>
      {/* Main image */}
      <div className="relative aspect-square overflow-hidden rounded-2xl bg-[#f5f1eb]">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={images[selected] ?? images[0]}
          alt={title}
          className="h-full w-full object-cover"
          loading="eager"
        />
        {badge && (
          <span className="absolute left-4 top-4 rounded-full bg-[#d4a24e] px-4 py-1.5 text-sm font-bold text-white shadow">
            {badge}
          </span>
        )}
      </div>

      {/* Thumbnail strip */}
      {images.length > 1 && (
        <div className="mt-3 flex gap-2">
          {images.map((img, i) => (
            <button
              key={i}
              onClick={() => setSelected(i)}
              className={`relative h-16 w-16 flex-shrink-0 overflow-hidden rounded-lg border-2 transition-all ${
                i === selected
                  ? 'border-[#1a5c38] opacity-100'
                  : 'border-[#e5e0da] opacity-55 hover:opacity-90'
              }`}
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={img} alt="" className="h-full w-full object-cover" />
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
