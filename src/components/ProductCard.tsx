import Link from 'next/link';
import Image from 'next/image';

interface Product {
  id: string;
  name: string;
  category: string;
  description?: string;
  images: string[];
  rating?: number;
  warranty?: string;
}

export default function ProductCard({ product }: { product: Product }) {
  return (
    <Link href={`/product/${product.id}`} className="group block h-full">
      <div className="bg-white rounded-2xl overflow-hidden h-full flex flex-col border border-gray-100 hover:border-blue-100 shadow-md hover:shadow-2xl transition-all duration-500">

        {/* ── Studio Image Frame ── */}
        <div className="relative h-72 w-full overflow-hidden" style={{ background: 'radial-gradient(ellipse at center, #f8f9fb 0%, #e8ecf0 100%)' }}>

          {/* Subtle inner vignette — simulates studio lighting */}
          <div className="absolute inset-0 z-10 pointer-events-none" style={{
            background: 'radial-gradient(ellipse at center, transparent 55%, rgba(0,0,0,0.08) 100%)',
          }} />

          <Image
            src={product.images[0] || '/placeholder.svg'}
            alt={product.name}
            fill
            className="object-contain p-4 group-hover:scale-105 transition-transform duration-700 ease-out"
            style={{
              filter: 'contrast(1.08) brightness(1.04) saturate(1.12)',
              objectPosition: 'center',
            }}
          />

          {/* Bottom shimmer on hover */}
          <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-white/60 to-transparent z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

          {/* Category badge */}
          <div className="absolute top-3 left-3 z-20">
            <span className="bg-blue-950/90 backdrop-blur-sm text-white text-xs font-semibold px-3 py-1.5 rounded-full tracking-widest uppercase shadow-sm">
              {product.category}
            </span>
          </div>

          {/* Warranty badge */}
          {product.warranty && (
            <div className="absolute top-3 right-3 z-20">
              <span className="bg-green-600/90 backdrop-blur-sm text-white text-xs font-semibold px-2.5 py-1.5 rounded-full shadow-sm">
                ✓ {product.warranty}
              </span>
            </div>
          )}
        </div>

        {/* ── Info ── */}
        <div className="p-5 flex-1 flex flex-col">
          <h3 className="text-lg font-bold text-gray-900 mb-1 group-hover:text-blue-900 transition-colors leading-snug">
            {product.name}
          </h3>
          {product.description && (
            <p className="text-gray-400 text-sm line-clamp-2 leading-relaxed mb-3">
              {product.description}
            </p>
          )}

          <div className="mt-auto pt-3 border-t border-gray-100 flex items-center justify-between">
            {/* Star rating */}
            {product.rating && (
              <div className="flex items-center gap-0.5">
                {[1,2,3,4,5].map(i => (
                  <svg key={i} className={`w-3.5 h-3.5 ${i <= Math.round(product.rating!) ? 'text-amber-400' : 'text-gray-200'}`} fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
                  </svg>
                ))}
                <span className="text-xs text-gray-400 ml-1">{product.rating.toFixed(1)}</span>
              </div>
            )}
            <span className="text-blue-900 font-semibold text-sm flex items-center gap-1 group-hover:gap-2 transition-all ml-auto">
              View Details
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </span>
          </div>
        </div>
      </div>
    </Link>
  );
}
