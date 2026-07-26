'use client';

import { useState } from 'react';
import { mockProducts } from '@/lib/mockData';
import Link from 'next/link';
import Image from 'next/image';

export default function AdminProductsPage() {
  const [products, setProducts] = useState(mockProducts);

  const handleDelete = (id: string) => {
    if (confirm('Are you sure you want to delete this product?')) {
      setProducts(products.filter(p => p.id !== id));
    }
  };

  return (
    <div className="bg-gray-100 min-h-screen p-8">
      <div className="max-w-7xl mx-auto">
        
        <div className="flex justify-between items-center mb-8">
          <div>
            <Link href="/admin" className="text-gray-500 hover:text-gray-900 flex items-center mb-2">
              <svg className="w-4 h-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" /></svg>
              Back to Dashboard
            </Link>
            <h1 className="text-3xl font-bold text-gray-900">Manage Products</h1>
          </div>
          <Link href="/admin/products/new" className="bg-blue-900 hover:bg-blue-800 text-white px-6 py-3 rounded-lg font-bold transition-colors shadow-md">
            + Add New Product
          </Link>
        </div>

        <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
          <div className="p-4 border-b border-gray-200 flex justify-between items-center bg-gray-50">
            <input 
              type="text" 
              placeholder="Search products..." 
              className="px-4 py-2 border border-gray-300 rounded-lg w-64 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <div className="flex gap-2">
              <select className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white">
                <option value="all">All Categories</option>
                <option value="door">Doors</option>
                <option value="window">Windows</option>
              </select>
            </div>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-gray-50 text-gray-500 text-sm uppercase tracking-wider">
                  <th className="p-4 font-medium border-b">Product</th>
                  <th className="p-4 font-medium border-b">SKU</th>
                  <th className="p-4 font-medium border-b">Category</th>
                  <th className="p-4 font-medium border-b">Price</th>
                  <th className="p-4 font-medium border-b">Stock</th>
                  <th className="p-4 font-medium border-b text-right">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {products.map(product => (
                  <tr key={product.id} className="hover:bg-gray-50 transition-colors">
                    <td className="p-4 flex items-center gap-4">
                      <div className="w-12 h-12 relative rounded-lg overflow-hidden bg-gray-100 flex-shrink-0 border border-gray-200">
                        <Image src={product.images[0] || '/placeholder.svg'} alt={product.name} fill className="object-cover" />
                      </div>
                      <span className="font-medium text-gray-900 line-clamp-1">{product.name}</span>
                    </td>
                    <td className="p-4 text-gray-600 text-sm">{product.sku}</td>
                    <td className="p-4 text-gray-600 text-sm">
                      <span className="bg-blue-50 text-blue-800 px-2 py-1 rounded text-xs font-medium uppercase">{product.type}</span>
                    </td>
                    <td className="p-4 text-gray-900 font-medium">₹{product.price.toFixed(2)}</td>
                    <td className="p-4">
                      <span className={`px-2 py-1 rounded text-xs font-medium ${product.stock_quantity > 10 ? 'bg-green-100 text-green-800' : product.stock_quantity > 0 ? 'bg-yellow-100 text-yellow-800' : 'bg-red-100 text-red-800'}`}>
                        {product.stock_quantity}
                      </span>
                    </td>
                    <td className="p-4 text-right space-x-3">
                      <Link href={`/product/${product.id}`} target="_blank" className="text-gray-500 hover:text-blue-600" title="View">
                        <svg className="w-5 h-5 inline" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" /></svg>
                      </Link>
                      <button className="text-gray-500 hover:text-blue-600" title="Edit">
                        <svg className="w-5 h-5 inline" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" /></svg>
                      </button>
                      <button onClick={() => handleDelete(product.id)} className="text-gray-500 hover:text-red-600" title="Delete">
                        <svg className="w-5 h-5 inline" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" /></svg>
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          
          <div className="p-4 border-t border-gray-200 flex items-center justify-between text-sm text-gray-500 bg-gray-50">
            <span>Showing 1 to {products.length} of {products.length} entries</span>
            <div className="flex gap-1">
              <button className="px-3 py-1 border border-gray-300 rounded bg-white text-gray-400 cursor-not-allowed">Previous</button>
              <button className="px-3 py-1 border border-gray-300 rounded bg-blue-900 text-white">1</button>
              <button className="px-3 py-1 border border-gray-300 rounded bg-white hover:bg-gray-50">Next</button>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
