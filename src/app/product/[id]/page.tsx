"use client";

import { useState, use } from 'react';
import { mockProducts } from '@/lib/mockData';
import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';

export default function ProductDetailPage({ params }: { params: Promise<{ id: string }> }) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [calcWidth, setCalcWidth] = useState<string>('');
  const [calcHeight, setCalcHeight] = useState<string>('');
  const resolvedParams = use(params);

  const product = mockProducts.find(p => p.id === resolvedParams.id);

  if (!product) {
    notFound();
  }

  const hasDiscount = product.discount_price && product.discount_price < product.price;

  return (
    <div className="bg-white min-h-screen py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Breadcrumb */}
        <nav className="flex text-gray-500 text-sm mb-8">
          <Link href="/" className="hover:text-blue-900 transition-colors">Home</Link>
          <span className="mx-2">/</span>
          <Link href={`/${product.type}s`} className="hover:text-blue-900 transition-colors capitalize">{product.type}s</Link>
          <span className="mx-2">/</span>
          <span className="text-gray-900 font-medium">{product.name}</span>
        </nav>

        <div className="flex flex-col lg:flex-row gap-12">
          {/* Product Images */}
          <div className="lg:w-1/2">
            <button 
              onClick={() => setIsModalOpen(true)}
              className="block relative h-[500px] md:h-[700px] w-full bg-gray-50 rounded-2xl overflow-hidden border border-gray-100 mb-4 hover:opacity-95 transition-opacity cursor-zoom-in"
              title="Click to view full size image"
            >
              <Image 
                src={product.images[0] || '/placeholder.svg'} 
                alt={product.name} 
                fill 
                className="object-contain p-2"
              />
            </button>
            {/* Thumbnails if multiple images existed */}
            {product.images.length > 1 && (
              <div className="flex gap-4 overflow-x-auto pb-2">
                {product.images.map((img: string, idx: number) => (
                  <div key={idx} className="relative h-24 w-24 flex-shrink-0 rounded-lg overflow-hidden border-2 border-transparent hover:border-yellow-500 cursor-pointer">
                     <Image src={img} alt={`${product.name} ${idx}`} fill className="object-cover" />
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Product Info */}
          <div className="lg:w-1/2 flex flex-col">
            <div className="mb-2 flex items-center justify-between">
              <span className="text-sm text-blue-900 font-bold uppercase tracking-wider">{product.category}</span>
              <span className={`text-sm font-bold px-3 py-1 rounded-full ${product.stock_quantity > 0 ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'}`}>
                {product.stock_quantity > 0 ? 'In Stock' : 'Out of Stock'}
              </span>
            </div>
            
            <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">{product.name}</h1>
            <p className="text-gray-500 text-sm mb-6">SKU: {product.sku}</p>
            
            <div className="mb-6 flex items-end gap-4">
              {hasDiscount ? (
                <>
                  <span className="text-4xl font-bold text-blue-900">₹{product.discount_price!.toFixed(2)} <span className="text-xl text-gray-500 font-normal">{product.unit ? `/ ${product.unit}` : '/ sq. ft.'}</span></span>
                  <span className="text-xl text-gray-400 line-through mb-1">₹{product.price.toFixed(2)}</span>
                  <span className="text-sm font-bold text-green-600 mb-1 bg-green-50 px-2 py-1 rounded">Save ₹{(product.price - product.discount_price!).toFixed(2)}</span>
                </>
              ) : (
                <span className="text-4xl font-bold text-blue-900">₹{product.price.toFixed(2)} <span className="text-xl text-gray-500 font-normal">{product.unit ? `/ ${product.unit}` : '/ sq. ft.'}</span></span>
              )}
            </div>

            {/* Rate Calculator */}
            <div className="bg-blue-50 border border-blue-100 rounded-xl p-6 mb-8">
              <h3 className="text-lg font-bold text-blue-900 mb-4 flex items-center">
                <svg className="w-5 h-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" /></svg>
                Custom Size Price Calculator
              </h3>
              <p className="text-sm text-gray-600 mb-4">
                {product.unit === 'running ft' 
                  ? 'Available in all sizes. Enter your frame requirements (perimeter is calculated as 2 × (width + height)):' 
                  : 'Available in all sizes. Enter your requirements in feet:'}
              </p>
              <div className="flex flex-col sm:flex-row gap-4 mb-4">
                <div className="flex-1">
                  <label className="block text-xs font-semibold text-gray-700 uppercase mb-1">Width (ft)</label>
                  <input type="number" placeholder="e.g. 3" className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500" value={calcWidth} onChange={(e) => setCalcWidth(e.target.value)} />
                </div>
                <div className="flex-1">
                  <label className="block text-xs font-semibold text-gray-700 uppercase mb-1">Height (ft)</label>
                  <input type="number" placeholder="e.g. 6" className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500" value={calcHeight} onChange={(e) => setCalcHeight(e.target.value)} />
                </div>
              </div>
              <div className="flex items-center justify-between border-t border-blue-100 pt-4 mt-2">
                <span className="text-gray-700 font-medium">Estimated Total:</span>
                <span className="text-2xl font-bold text-blue-900">
                  ₹{(() => {
                    const w = parseFloat(calcWidth) || 0;
                    const h = parseFloat(calcHeight) || 0;
                    const price = product.discount_price || product.price;
                    if (product.unit === 'running ft') {
                      return ((w + h) * 2 * price).toFixed(2);
                    }
                    return (w * h * price).toFixed(2);
                  })()}
                </span>
              </div>
            </div>

            <p className="text-gray-700 text-base leading-relaxed mb-8">{product.description}</p>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 mb-10">
              <a 
                href={`https://wa.me/919935914480?text=Hi, I am interested in ${product.name} (SKU: ${product.sku})`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 bg-green-500 hover:bg-green-600 text-white py-4 rounded-xl font-bold flex items-center justify-center transition-all hover:shadow-lg"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-2" fill="currentColor" viewBox="0 0 24 24"><path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.582 2.128 2.182-.573c.978.58 1.911.928 3.145.929 3.178 0 5.767-2.587 5.768-5.766.001-3.187-2.575-5.77-5.764-5.771zm3.392 8.244c-.144.405-.837.774-1.17.824-.299.045-.677.063-1.092-.069-.252-.08-.575-.187-.988-.365-1.739-.751-2.874-2.502-2.961-2.617-.087-.116-.708-.94-.708-1.793s.448-1.273.607-1.446c.159-.173.346-.217.462-.217l.332.006c.106.005.249-.04.39.298.144.347.491 1.2.534 1.287.043.087.072.188.014.304-.058.116-.087.188-.173.289l-.26.304c-.087.086-.177.18-.076.354.101.174.449.741.964 1.201.662.591 1.221.774 1.394.86s.274.072.376-.043c.101-.116.433-.506.549-.68.116-.173.231-.145.39-.087s1.011.477 1.184.564.289.13.332.202c.045.072.045.419-.099.824z"/></svg>
                WhatsApp Inquiry
              </a>
              <Link 
                href={`/contact?product=${product.sku}`}
                className="flex-1 bg-blue-950 hover:bg-blue-900 text-white py-4 rounded-xl font-bold flex items-center justify-center transition-all hover:shadow-lg"
              >
                Request Quote
              </Link>
            </div>

            {/* Specifications */}
            <div className="border-t border-gray-200 pt-8 mt-auto">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Specifications</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-4 text-sm">
                
                {/* Dimensions */}
                <div className="space-y-3">
                  <h4 className="font-semibold text-gray-900 uppercase tracking-wider text-xs bg-gray-100 p-2 rounded">Dimensions</h4>
                  <div className="flex justify-between border-b border-gray-100 pb-2">
                    <span className="text-gray-500">Size</span>
                    <span className="font-medium text-gray-900 text-right">Custom (All sizes available)</span>
                  </div>
                  {product.thickness && (
                    <div className="flex justify-between border-b border-gray-100 pb-2">
                      <span className="text-gray-500">Thickness</span>
                      <span className="font-medium text-gray-900">{product.thickness}</span>
                    </div>
                  )}
                </div>

                {/* Details */}
                <div className="space-y-3">
                  <h4 className="font-semibold text-gray-900 uppercase tracking-wider text-xs bg-gray-100 p-2 rounded">Details</h4>
                  <div className="flex justify-between border-b border-gray-100 pb-2">
                    <span className="text-gray-500">Material</span>
                    <span className="font-medium text-gray-900">{product.material || 'N/A'}</span>
                  </div>
                  <div className="flex justify-between border-b border-gray-100 pb-2">
                    <span className="text-gray-500">Color/Finish</span>
                    <span className="font-medium text-gray-900">{product.color} / {product.finish}</span>
                  </div>
                  {product.glass_type && (
                     <div className="flex justify-between border-b border-gray-100 pb-2">
                     <span className="text-gray-500">Glass Type</span>
                     <span className="font-medium text-gray-900">{product.glass_type}</span>
                   </div>
                  )}
                  <div className="flex justify-between border-b border-gray-100 pb-2">
                    <span className="text-gray-500">Water Resistant</span>
                    <span className="font-medium text-gray-900">{product.water_resistant ? 'Yes' : 'No'}</span>
                  </div>
                  <div className="flex justify-between border-b border-gray-100 pb-2">
                    <span className="text-gray-500">Warranty</span>
                    <span className="font-medium text-gray-900">{product.warranty || 'N/A'}</span>
                  </div>
                </div>

              </div>

              {product.room_suitability && product.room_suitability.length > 0 && (
                <div className="mt-6">
                  <h4 className="font-semibold text-gray-900 uppercase tracking-wider text-xs bg-gray-100 p-2 rounded mb-3">Room Suitability</h4>
                  <div className="flex flex-wrap gap-2">
                    {product.room_suitability.map((room: string, idx: number) => (
                      <span key={idx} className="bg-white border border-gray-300 text-gray-700 px-3 py-1 rounded-full text-sm">
                        {room}
                      </span>
                    ))}
                  </div>
                </div>
              )}

            </div>
          </div>
        </div>
      </div>

      {/* Fullscreen Image Modal */}
      {isModalOpen && (
        <div 
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/90 p-4 sm:p-8 cursor-zoom-out"
          onClick={() => setIsModalOpen(false)}
        >
          <button 
            className="absolute top-4 right-4 text-white hover:text-gray-300 z-[110] p-2 bg-black/50 rounded-full"
            onClick={(e) => {
              e.stopPropagation();
              setIsModalOpen(false);
            }}
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
          <div className="relative w-full h-full max-w-6xl max-h-[90vh]">
            <Image 
              src={product.images[0] || '/placeholder.svg'} 
              alt={product.name} 
              fill 
              className="object-contain"
            />
          </div>
        </div>
      )}
    </div>
  );
}
