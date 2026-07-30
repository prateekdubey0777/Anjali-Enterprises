import Link from 'next/link';
import Image from 'next/image';

interface Product {
  id: string;
  name: string;
  category: string;
  price: number;
  discount_price?: number;
  description?: string;
  images: string[];
  unit?: string;
}

export default function ProductCard({ product }: { product: Product }) {
  const hasDiscount = product.discount_price && product.discount_price < product.price;
  const unitLabel = product.unit ? `/ ${product.unit}` : '/ sq. ft.';

  return (
    <Link href={`/product/${product.id}`} className="group block h-full">
      <div className="bg-white rounded-xl shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 overflow-hidden h-full flex flex-col relative">
        {hasDiscount && (
          <div className="absolute top-4 left-4 bg-white text-white text-xs font-bold px-3 py-1 rounded-full z-10">
            SALE
          </div>
        )}
        <div className="relative h-64 w-full bg-gray-50 overflow-hidden">
          <Image
            src={product.images[0] || '/placeholder.svg'}
            alt={product.name}
            fill
            className="object-cover group-hover:scale-105 transition-transform duration-500"
          />
        </div>
        <div className="p-5 flex-1 flex flex-col">
          <p className="text-sm text-blue-900 font-medium mb-1 uppercase tracking-wider">{product.category}</p>
          <h3 className="text-xl font-semibold text-gray-900 mb-2 line-clamp-2">{product.name}</h3>
          {product.description && (
            <p className="text-gray-500 text-sm line-clamp-2 mt-1 mb-2">{product.description}</p>
          )}
          
          <div className="mt-auto pt-4 flex items-center justify-between border-t border-gray-100">
            <div className="flex flex-col">
              {hasDiscount ? (
                <>
                  <span className="text-sm text-gray-400 line-through">₹{product.price.toFixed(2)} {unitLabel}</span>
                  <span className="text-xl font-bold text-blue-900">₹{product.discount_price!.toFixed(2)} {unitLabel}</span>
                </>
              ) : (
                <span className="text-xl font-bold text-blue-900">₹{product.price.toFixed(2)} {unitLabel}</span>
              )}
            </div>
            <span className="text-blue-100 font-medium text-sm group-hover:text-white flex items-center transition-colors">
              View Details 
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1 transform group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </span>
          </div>
        </div>
      </div>
    </Link>
  );
}
