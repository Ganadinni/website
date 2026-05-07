import Link from 'next/link';
import Image from 'next/image';
import { ShoppingCart, MessageCircle } from 'lucide-react';
import { BEST_SELLERS } from '@/lib/mock-data';

export default function BestSellers() {
  return (
    <section className="bg-white py-16 md:py-24">
      <div className="container-site">
        <div className="flex items-end justify-between mb-10">
          <div>
            <h2 className="section-heading">Best Sellers</h2>
            <p className="section-subheading">Top ingredients ordered by cafes &amp; QSRs across India.</p>
          </div>
          <Link href="/collections/boba-innovations" className="hidden sm:flex btn-secondary text-sm">
            View All
          </Link>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
          {BEST_SELLERS.map((product) => (
            <div key={product.id} className="card group">
              <Link href={`/products/${product.handle}`} className="block">
                <div className="relative aspect-square bg-gray-50 rounded-t-xl overflow-hidden">
                  <Image
                    src={product.image}
                    alt={product.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                    sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
                  />
                  {product.badge && (
                    <span className="absolute top-3 left-3 badge bg-brand-gold text-white">
                      {product.badge}
                    </span>
                  )}
                </div>
                <div className="p-4">
                  <p className="text-xs text-brand-mid font-medium mb-1">{product.category}</p>
                  <h3 className="font-semibold text-sm text-brand-green leading-tight mb-2 line-clamp-2">
                    {product.title}
                  </h3>
                  <div className="flex items-baseline gap-2 mb-3">
                    <span className="font-bold text-brand-green">₹{product.price}</span>
                    {product.compareAtPrice && (
                      <span className="text-xs text-gray-400 line-through">₹{product.compareAtPrice}</span>
                    )}
                    <span className="text-xs text-gray-500">{product.unit}</span>
                  </div>
                </div>
              </Link>
              <div className="px-4 pb-4 flex gap-2">
                <Link
                  href={`/products/${product.handle}`}
                  className="flex-1 btn-primary text-xs py-2 justify-center"
                >
                  <ShoppingCart size={13} />
                  Order
                </Link>
                <a
                  href={`https://wa.me/${process.env.NEXT_PUBLIC_WHATSAPP_NUMBER ?? '919876543210'}?text=Hi%2C%20I%27m%20interested%20in%20${encodeURIComponent(product.title)}%20(SKU%3A%20${product.sku}).%20Please%20share%20bulk%20pricing.`}
                  target="_blank"
                  rel="noreferrer"
                  className="p-2 rounded-md border-2 border-[#25D366] text-[#25D366] hover:bg-[#25D366] hover:text-white transition-colors"
                  title="Bulk Enquiry on WhatsApp"
                >
                  <MessageCircle size={14} />
                </a>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-8 sm:hidden">
          <Link href="/collections/boba-innovations" className="btn-secondary">View All Products</Link>
        </div>
      </div>
    </section>
  );
}
