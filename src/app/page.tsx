import Link from 'next/link';
import Image from 'next/image';
import ProductCard from '@/components/ProductCard';
import { mockProducts } from '@/lib/mockData';

export default function Home() {
  const featuredProducts = mockProducts.filter(p => p.is_featured).slice(0, 4);

  return (
    <div className="flex flex-col min-h-screen">

      {/* ═══════════════════════════════════════
          HERO — Full-bleed cinematic
      ═══════════════════════════════════════ */}
      <section className="relative h-screen min-h-[600px] flex items-center justify-center overflow-hidden">
        {/* Background image */}
        <div className="absolute inset-0 z-0">
          <Image
            src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=2070&auto=format&fit=crop"
            alt="Modern home entrance"
            fill
            className="object-cover"
            priority
          />
          {/* Deep blue overlay — brand colour */}
          <div className="absolute inset-0 bg-blue-950/70" />
          {/* Bottom fade */}
          <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white to-transparent" />
        </div>

        {/* Hero content */}
        <div className="relative z-10 text-center px-4 max-w-5xl mx-auto">
          <p className="text-blue-200 uppercase tracking-[0.3em] text-sm font-semibold mb-6">
            Premium Quality Since 2010
          </p>
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold text-white mb-6 leading-tight tracking-tight">
            Doors &amp; Windows<br />
            <span className="text-blue-300">Redefined.</span>
          </h1>
          <p className="text-lg md:text-xl text-blue-100 mb-10 max-w-2xl mx-auto leading-relaxed">
            Handcrafted Galvanized Iron doors, gates &amp; windows — built to last, designed to impress.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/catalogue"
              className="w-full sm:w-auto px-10 py-4 bg-white text-blue-950 text-base font-bold rounded-full hover:bg-blue-50 transition-all hover:shadow-xl hover:scale-105"
            >
              Browse Catalogue
            </Link>
            <a
              href="https://wa.me/919935914480"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto px-10 py-4 bg-green-500 hover:bg-green-400 text-white text-base font-bold rounded-full transition-all hover:shadow-xl hover:scale-105 flex items-center justify-center gap-2"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.582 2.128 2.182-.573c.978.58 1.911.928 3.145.929 3.178 0 5.767-2.587 5.768-5.766.001-3.187-2.575-5.77-5.764-5.771zm3.392 8.244c-.144.405-.837.774-1.17.824-.299.045-.677.063-1.092-.069-.252-.08-.575-.187-.988-.365-1.739-.751-2.874-2.502-2.961-2.617-.087-.116-.708-.94-.708-1.793s.448-1.273.607-1.446c.159-.173.346-.217.462-.217l.332.006c.106.005.249-.04.39.298.144.347.491 1.2.534 1.287.043.087.072.188.014.304-.058.116-.087.188-.173.289l-.26.304c-.087.086-.177.18-.076.354.101.174.449.741.964 1.201.662.591 1.221.774 1.394.86s.274.072.376-.043c.101-.116.433-.506.549-.68.116-.173.231-.145.39-.087s1.011.477 1.184.564.289.13.332.202c.045.072.045.419-.099.824zm-3.423-14.416c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm.029 18.88c-1.161 0-2.305-.292-3.318-.844l-3.677.964.984-3.595c-.607-1.052-.927-2.246-.926-3.468.001-5.824 4.74-10.563 10.567-10.563 5.824 0 10.563 4.739 10.563 10.564 0 5.825-4.739 10.564-10.563 10.564z"/></svg>
              WhatsApp Us
            </a>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-10 animate-bounce">
          <svg className="w-6 h-6 text-white/60" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        </div>
      </section>

      {/* ═══════════════════════════════════════
          STATS STRIP
      ═══════════════════════════════════════ */}
      <section className="bg-blue-950 py-10">
        <div className="max-w-5xl mx-auto px-4 grid grid-cols-2 md:grid-cols-4 gap-8 text-center text-white">
          {[
            { number: '500+', label: 'Products Available' },
            { number: '5000+', label: 'Happy Customers' },
            { number: '5 Yrs', label: 'Warranty on All GI Products' },
            { number: '15+', label: 'Years of Experience' },
          ].map((s, i) => (
            <div key={i}>
              <p className="text-3xl md:text-4xl font-bold text-white">{s.number}</p>
              <p className="text-blue-200 text-sm mt-1">{s.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ═══════════════════════════════════════
          CATEGORIES — Large editorial cards
      ═══════════════════════════════════════ */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <p className="text-blue-900 uppercase tracking-widest text-sm font-semibold mb-3">Our Collections</p>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900">Shop by Category</h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {[
              { name: 'GI Doors', desc: 'Rust-free, 40mm thick', image: '/images/gi-door-2.jpg', link: '/doors?category=gi%20door' },
              { name: 'Door Frames', desc: 'All sizes available', image: '/images/door-frame-new.jpeg', link: '/doors?category=door%20frame' },
              { name: 'Main Gates', desc: 'Heavy duty security gates', image: '/images/premium-main-gate.jpeg', link: '/doors?category=main%20gate' },
              { name: 'Windows', desc: 'Steel frame, all styles', image: '/images/window-steel-new-1.jpeg', link: '/windows' },
            ].map((cat, idx) => (
              <Link href={cat.link} key={idx} className="group relative h-80 rounded-3xl overflow-hidden shadow-lg block">
                <Image src={cat.image} alt={cat.name} fill className="object-cover group-hover:scale-110 transition-transform duration-700 ease-out" />
                {/* Gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-blue-950/90 via-blue-950/30 to-transparent" />
                {/* Text */}
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <h3 className="text-white text-xl font-bold">{cat.name}</h3>
                  <p className="text-blue-200 text-sm mt-1 opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all duration-300">{cat.desc}</p>
                  <span className="inline-flex items-center gap-1 text-blue-300 text-sm font-medium mt-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    Explore
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7"/></svg>
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════
          FEATURED PRODUCTS
      ═══════════════════════════════════════ */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-14 gap-4">
            <div>
              <p className="text-blue-900 uppercase tracking-widest text-sm font-semibold mb-3">Hand-Picked</p>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900">Featured Products</h2>
            </div>
            <Link href="/catalogue" className="hidden md:inline-flex items-center gap-2 text-blue-900 font-semibold hover:text-blue-700 border-b-2 border-blue-900 hover:border-blue-700 pb-0.5 transition-colors">
              View Full Catalogue
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3"/></svg>
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {featuredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>

          <div className="mt-10 text-center md:hidden">
            <Link href="/catalogue" className="inline-flex items-center gap-2 text-blue-900 font-semibold hover:text-blue-700">
              View Full Catalogue
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3"/></svg>
            </Link>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════
          WHY CHOOSE US
      ═══════════════════════════════════════ */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <p className="text-blue-900 uppercase tracking-widest text-sm font-semibold mb-3">Our Promise</p>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900">Why Anjali Enterprises?</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: (
                  <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"/></svg>
                ),
                title: 'Premium Quality GI',
                desc: 'All our doors use Galvanized Iron — meaning no rust, no paint damage, built to last decades with a 5-year warranty.',
              },
              {
                icon: (
                  <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5l-5-5m5 5v-4m0 4h-4"/></svg>
                ),
                title: 'All Custom Sizes',
                desc: 'Every product is available in custom sizes to perfectly fit your space — no compromise on fit or finish.',
              },
              {
                icon: (
                  <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"/></svg>
                ),
                title: 'Home Delivery',
                desc: 'We deliver right to your doorstep across Karwi, Chitrakoot and surrounding districts. Contact us for delivery details.',
              },
            ].map((f, i) => (
              <div key={i} className="group p-8 rounded-3xl border border-gray-100 hover:border-blue-100 hover:bg-blue-50 transition-all duration-300 hover:shadow-lg">
                <div className="w-14 h-14 bg-blue-950 text-white rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  {f.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{f.title}</h3>
                <p className="text-gray-500 leading-relaxed">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════
          CTA BANNER
      ═══════════════════════════════════════ */}
      <section className="bg-blue-950 py-20">
        <div className="max-w-4xl mx-auto text-center px-4">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">Ready to transform your home?</h2>
          <p className="text-blue-200 text-lg mb-10">
            Talk to us on WhatsApp — get a quote in minutes, delivered to your door.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://wa.me/919935914480"
              target="_blank"
              rel="noopener noreferrer"
              className="px-10 py-4 bg-green-500 hover:bg-green-400 text-white font-bold rounded-full text-lg transition-all hover:scale-105 hover:shadow-xl flex items-center justify-center gap-2"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.582 2.128 2.182-.573c.978.58 1.911.928 3.145.929 3.178 0 5.767-2.587 5.768-5.766.001-3.187-2.575-5.77-5.764-5.771zm3.392 8.244c-.144.405-.837.774-1.17.824-.299.045-.677.063-1.092-.069-.252-.08-.575-.187-.988-.365-1.739-.751-2.874-2.502-2.961-2.617-.087-.116-.708-.94-.708-1.793s.448-1.273.607-1.446c.159-.173.346-.217.462-.217l.332.006c.106.005.249-.04.39.298.144.347.491 1.2.534 1.287.043.087.072.188.014.304-.058.116-.087.188-.173.289l-.26.304c-.087.086-.177.18-.076.354.101.174.449.741.964 1.201.662.591 1.221.774 1.394.86s.274.072.376-.043c.101-.116.433-.506.549-.68.116-.173.231-.145.39-.087s1.011.477 1.184.564.289.13.332.202c.045.072.045.419-.099.824zm-3.423-14.416c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm.029 18.88c-1.161 0-2.305-.292-3.318-.844l-3.677.964.984-3.595c-.607-1.052-.927-2.246-.926-3.468.001-5.824 4.74-10.563 10.567-10.563 5.824 0 10.563 4.739 10.563 10.564 0 5.825-4.739 10.564-10.563 10.564z"/></svg>
              WhatsApp Now
            </a>
            <Link
              href="/contact"
              className="px-10 py-4 border-2 border-white/40 hover:border-white text-white font-bold rounded-full text-lg transition-all hover:bg-white/10"
            >
              Send Enquiry
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
}
