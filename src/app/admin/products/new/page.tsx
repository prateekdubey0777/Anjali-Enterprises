'use client';

import Link from 'next/link';

export default function AddProductPage() {
  return (
    <div className="bg-gray-100 min-h-screen p-8">
      <div className="max-w-4xl mx-auto">
        
        <div className="mb-8">
          <Link href="/admin/products" className="text-gray-500 hover:text-gray-900 flex items-center mb-2">
            <svg className="w-4 h-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" /></svg>
            Back to Products
          </Link>
          <h1 className="text-3xl font-bold text-gray-900">Add New Product</h1>
        </div>

        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-8">
          <form className="space-y-8">
            
            {/* Basic Info */}
            <div>
              <h3 className="text-lg font-bold border-b border-gray-200 pb-2 mb-4 text-gray-900">Basic Information</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Product Name *</label>
                  <input type="text" className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none" placeholder="e.g. Premium Teak Wood Door" required />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">SKU *</label>
                  <input type="text" className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none" placeholder="e.g. DOOR-TEAK-001" required />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Product Type *</label>
                  <select className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none bg-white">
                    <option value="door">Door</option>
                    <option value="window">Window</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Category *</label>
                  <select className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none bg-white">
                    <option value="wooden">Wooden Door</option>
                    <option value="flush">Flush Door</option>
                    <option value="upvc">UPVC Window</option>
                    <option value="aluminium">Aluminium Window</option>
                  </select>
                </div>
                <div className="md:col-span-2">
                  <label className="block text-sm font-medium text-gray-700 mb-2">Description</label>
                  <textarea rows={4} className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none resize-none" placeholder="Detailed product description..."></textarea>
                </div>
              </div>
            </div>

            {/* Pricing & Inventory */}
            <div>
              <h3 className="text-lg font-bold border-b border-gray-200 pb-2 mb-4 text-gray-900">Pricing & Inventory</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Regular Price (₹) *</label>
                  <input type="number" step="0.01" className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none" placeholder="0.00" required />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Discount Price (₹)</label>
                  <input type="number" step="0.01" className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none" placeholder="0.00" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Stock Quantity *</label>
                  <input type="number" className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none" placeholder="0" required />
                </div>
              </div>
            </div>

            {/* Media */}
            <div>
              <h3 className="text-lg font-bold border-b border-gray-200 pb-2 mb-4 text-gray-900">Media</h3>
              <div className="border-2 border-dashed border-gray-300 rounded-lg p-8 text-center bg-gray-50 hover:bg-gray-100 transition-colors cursor-pointer">
                <svg className="w-12 h-12 text-gray-400 mx-auto mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12" /></svg>
                <p className="text-gray-600 font-medium mb-1">Click to upload or drag and drop</p>
                <p className="text-xs text-gray-500">SVG, PNG, JPG or GIF (max. 800x400px)</p>
                <input type="file" multiple className="hidden" />
              </div>
            </div>

            {/* Specifications */}
            <div>
              <h3 className="text-lg font-bold border-b border-gray-200 pb-2 mb-4 text-gray-900">Specifications</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Width</label>
                  <input type="text" className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none" placeholder="e.g. 3 ft" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Height</label>
                  <input type="text" className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none" placeholder="e.g. 7 ft" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Thickness</label>
                  <input type="text" className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none" placeholder="e.g. 32 mm" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Material</label>
                  <input type="text" className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none" placeholder="e.g. Teak Wood" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Color</label>
                  <input type="text" className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none" placeholder="e.g. Dark Walnut" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Warranty</label>
                  <input type="text" className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none" placeholder="e.g. 5 Years" />
                </div>
              </div>
            </div>

            <div className="flex justify-end gap-4 pt-4">
              <Link href="/admin/products" className="px-6 py-3 border border-gray-300 rounded-lg text-gray-700 font-medium hover:bg-gray-50 transition-colors">
                Cancel
              </Link>
              <button type="submit" className="px-6 py-3 bg-blue-900 text-white rounded-lg font-bold hover:bg-blue-800 transition-colors shadow-md">
                Save Product
              </button>
            </div>

          </form>
        </div>

      </div>
    </div>
  );
}
