'use client';

import { useState, useMemo, Suspense } from 'react';
import { useSearchParams, useRouter } from 'next/navigation';
import ProductCard from '@/components/ProductCard';
import { mockProducts, categories } from '@/lib/mockData';

function WindowsContent() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const categoryQuery = searchParams.get('category');
  
  const [sortOption, setSortOption] = useState('newest');

  const windows = useMemo(() => {
    let result = mockProducts.filter(p => p.type === 'window');
    
    if (categoryQuery && categoryQuery !== 'all') {
      result = result.filter(p => p.category.toLowerCase() === categoryQuery.toLowerCase());
    }

    if (sortOption === 'price-asc') {
      result.sort((a, b) => a.price - b.price);
    } else if (sortOption === 'price-desc') {
      result.sort((a, b) => b.price - a.price);
    } else if (sortOption === 'rating') {
      result.sort((a, b) => (b.rating || 0) - (a.rating || 0));
    } else if (sortOption === 'newest') {
      result.sort((a, b) => new Date(b.created_at || 0).getTime() - new Date(a.created_at || 0).getTime());
    }

    return result;
  }, [categoryQuery, sortOption]);

  const windowCategories = categories.filter(c => c.type === 'window');

  return (
    <div className="bg-gray-50 min-h-screen py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-10">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">All Windows</h1>
          <p className="text-lg text-gray-600">Browse our complete collection of high-quality windows.</p>
        </div>

        <div className="flex flex-col lg:flex-row gap-8">
          {/* Sidebar Filters */}
          <div className="w-full lg:w-64 flex-shrink-0">
            <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 sticky top-28">
              <h3 className="font-bold text-lg mb-4 text-gray-900 border-b pb-2">Categories</h3>
              <ul className="space-y-2">
                <li>
                  <button 
                    onClick={() => router.push('/windows')}
                    className={`text-left w-full font-medium transition-colors ${!categoryQuery ? 'text-blue-100' : 'text-gray-600 hover:text-blue-100'}`}
                  >
                    All Windows
                  </button>
                </li>
                {windowCategories.map(cat => (
                  <li key={cat.id}>
                    <button 
                      onClick={() => router.push(`/windows?category=${encodeURIComponent(cat.name)}`)}
                      className={`text-left w-full font-medium transition-colors ${categoryQuery?.toLowerCase() === cat.name.toLowerCase() ? 'text-blue-100' : 'text-gray-600 hover:text-blue-100'}`}
                    >
                      {cat.name}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Product Grid */}
          <div className="flex-1">
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-6 bg-white p-4 rounded-xl shadow-sm border border-gray-100">
              <span className="text-gray-600 font-medium">Showing {windows.length} products</span>
              <div className="flex items-center space-x-2 w-full sm:w-auto">
                <span className="text-sm text-gray-600 whitespace-nowrap">Sort by:</span>
                <select 
                  className="w-full sm:w-auto border border-gray-200 rounded-lg text-sm p-2 bg-gray-50 outline-none focus:ring-2 focus:ring-blue-500"
                  value={sortOption}
                  onChange={(e) => setSortOption(e.target.value)}
                >
                  <option value="newest">Newly Added</option>
                  <option value="rating">Top Rated</option>
                  <option value="price-asc">Price: Low to High</option>
                  <option value="price-desc">Price: High to Low</option>
                </select>
              </div>
            </div>

            {windows.length > 0 ? (
              <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6">
                {windows.map(product => (
                  <ProductCard key={product.id} product={product} />
                ))}
              </div>
            ) : (
              <div className="bg-white p-12 rounded-2xl shadow-sm text-center">
                <h3 className="text-lg font-bold text-gray-900 mb-2">No windows found</h3>
                <p className="text-gray-500">We couldn&apos;t find any windows matching this category.</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default function WindowsPage() {
  return (
    <Suspense fallback={<div className="min-h-screen flex items-center justify-center">Loading...</div>}>
      <WindowsContent />
    </Suspense>
  );
}
