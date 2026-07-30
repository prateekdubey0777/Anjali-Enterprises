import Link from 'next/link';
import Image from 'next/image';
import ProductCard from '@/components/ProductCard';
import { mockProducts } from '@/lib/mockData';

export default function Home() {
  const featuredProducts = mockProducts.filter(p => p.is_featured).slice(0, 4);

  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[80vh] flex items-center justify-center bg-blue-950 overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-40">
          <Image 
            src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=2070&auto=format&fit=crop" 
            alt="Modern home entrance" 
            fill 
            className="object-cover"
            priority
          />
        </div>
        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 tracking-tight">
            Elevate Your Space with <span className="text-white">Premium Doors</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-200 mb-10 max-w-2xl mx-auto">
            Discover our complete catalogue of readymade doors and windows. High-quality, durable, and stylish designs for every home.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-8">
            <Link href="/doors" className="w-full sm:w-auto px-8 py-4 bg-white hover:bg-gray-100 text-blue-950 text-lg font-bold rounded-full transition-transform hover:scale-105">
              Explore Doors
            </Link>
            <Link href="/windows" className="w-full sm:w-auto px-8 py-4 bg-white/10 hover:bg-white/20 backdrop-blur-md text-white border border-white/30 text-lg font-bold rounded-full transition-transform hover:scale-105">
              Explore Windows
            </Link>
          </div>
        </div>
      </section>

      {/* Popular Categories */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Shop by Category</h2>
            <div className="w-24 h-1 bg-blue-950 mx-auto rounded-full"></div>
          </div>
          
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { name: 'GI Doors', image: '/images/gi-door-2.jpg', link: '/doors?category=gi%20door' },
              { name: 'Door Frames', image: '/images/door-frame-new.jpeg', link: '/doors?category=door%20frame' },
              { name: 'Main Gates', image: '/images/premium-main-gate.jpeg', link: '/doors?category=main%20gate' },
              { name: 'Windows', image: '/images/window-steel-new-1.jpeg', link: '/windows' },
            ].map((cat, idx) => (
              <Link href={cat.link} key={idx} className="group relative h-64 rounded-2xl overflow-hidden shadow-lg block">
                <Image src={cat.image} alt={cat.name} fill className="object-cover group-hover:scale-110 transition-transform duration-700" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex items-end justify-center p-6">
                  <h3 className="text-white text-xl font-bold">{cat.name}</h3>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-end mb-12">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-4">Featured Products</h2>
              <div className="w-24 h-1 bg-white rounded-full"></div>
            </div>
            <Link href="/catalogue" className="hidden md:flex items-center text-blue-900 font-semibold hover:text-blue-700 transition-colors">
              View All Catalogue <svg className="w-5 h-5 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
            </Link>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {featuredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
          
          <div className="mt-10 text-center md:hidden">
            <Link href="/catalogue" className="inline-flex items-center text-blue-900 font-semibold hover:text-blue-700 transition-colors">
              View All Catalogue <svg className="w-5 h-5 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
            </Link>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-blue-950 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Why Choose Anjali Enterprises?</h2>
            <div className="w-24 h-1 bg-white mx-auto rounded-full"></div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 text-center">
            <div className="p-6 bg-blue-900 rounded-2xl">
              <div className="w-16 h-16 bg-white text-blue-950 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
              </div>
              <h3 className="text-xl font-bold mb-3">Premium Quality</h3>
              <p className="text-gray-300">We source only the finest materials to ensure our doors and windows stand the test of time.</p>
            </div>
            <div className="p-6 bg-blue-900 rounded-2xl">
              <div className="w-16 h-16 bg-white text-blue-950 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
              </div>
              <h3 className="text-xl font-bold mb-3">Competitive Pricing</h3>
              <p className="text-gray-300">Get the best value for your money with our direct-from-manufacturer pricing model.</p>
            </div>
            <div className="p-6 bg-blue-900 rounded-2xl">
              <div className="w-16 h-16 bg-white text-blue-950 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>
              </div>
              <h3 className="text-xl font-bold mb-3">Fast Installation</h3>
              <p className="text-gray-300">Our professional team ensures quick and flawless installation of all your products.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
