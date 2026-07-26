'use client';

import Link from 'next/link';

export default function AdminDashboard() {
  return (
    <div className="bg-gray-100 min-h-screen p-8">
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-bold text-gray-900">Admin Dashboard</h1>
          <button className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-lg font-medium transition-colors">
            Logout
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
            <h3 className="text-gray-500 text-sm font-medium mb-2">Total Products</h3>
            <div className="text-3xl font-bold text-gray-900">124</div>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
            <h3 className="text-gray-500 text-sm font-medium mb-2">Total Inquiries</h3>
            <div className="text-3xl font-bold text-gray-900">45</div>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
            <h3 className="text-gray-500 text-sm font-medium mb-2">New Messages</h3>
            <div className="text-3xl font-bold text-gray-900">12</div>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
            <h3 className="text-gray-500 text-sm font-medium mb-2">Low Stock Items</h3>
            <div className="text-3xl font-bold text-red-500">8</div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Quick Actions */}
          <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
            <h2 className="text-xl font-bold text-gray-900 mb-6">Quick Actions</h2>
            <div className="space-y-4">
              <Link href="/admin/products/new" className="block w-full text-center bg-blue-900 hover:bg-blue-800 text-white py-3 rounded-lg font-medium transition-colors">
                Add New Product
              </Link>
              <Link href="/admin/products" className="block w-full text-center bg-white border border-gray-300 hover:bg-gray-50 text-gray-700 py-3 rounded-lg font-medium transition-colors">
                Manage Products
              </Link>
              <Link href="/admin/inquiries" className="block w-full text-center bg-white border border-gray-300 hover:bg-gray-50 text-gray-700 py-3 rounded-lg font-medium transition-colors">
                View Inquiries
              </Link>
              <Link href="/admin/media" className="block w-full text-center bg-white border border-gray-300 hover:bg-gray-50 text-gray-700 py-3 rounded-lg font-medium transition-colors">
                Manage Media / Uploads
              </Link>
            </div>
          </div>

          {/* Recent Inquiries */}
          <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-xl font-bold text-gray-900">Recent Inquiries</h2>
              <Link href="/admin/inquiries" className="text-blue-600 hover:text-blue-800 text-sm font-medium">View All</Link>
            </div>
            
            <div className="space-y-4">
              {[1, 2, 3].map((_, idx) => (
                <div key={idx} className="border-b border-gray-100 pb-4 last:border-0 last:pb-0">
                  <div className="flex justify-between items-start mb-1">
                    <h4 className="font-semibold text-gray-900">John Doe</h4>
                    <span className="text-xs text-gray-500">2 hours ago</span>
                  </div>
                  <p className="text-sm text-gray-600 mb-2">Interested in Premium Teak Wood Main Door...</p>
                  <div className="flex gap-2">
                    <span className="bg-yellow-100 text-yellow-800 text-xs px-2 py-1 rounded">New</span>
                    <button className="text-blue-600 hover:text-blue-800 text-xs font-medium">Reply via WhatsApp</button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
