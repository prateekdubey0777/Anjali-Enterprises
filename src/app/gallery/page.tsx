'use client';

import { useState } from 'react';
import Image from 'next/image';

const galleryItems = [
  { type: 'video', src: '/videos/installation-1.mp4', category: 'Installation', title: 'On-Site Door Installation' },
  { type: 'video', src: '/videos/installation-2.mp4', category: 'Installation', title: 'Seamless Frame Fitting' },
  { type: 'image', src: '/images/installation-img-1.jpeg', category: 'Installation', title: 'Completed Project View' },
  { type: 'image', src: '/images/installation-img-2.jpeg', category: 'Installation', title: 'Expert Fitting' },
  { type: 'image', src: '/images/installation-img-3.jpeg', category: 'Installation', title: 'Finished Door Look' },
  { type: 'image', src: '/images/installation-img-4.jpeg', category: 'Installation', title: 'Perfect Alignment' },
  { type: 'image', src: '/images/installation-img-5.jpeg', category: 'Installation', title: 'Installation Results' },
  { type: 'image', src: '/images/installation-img-6.jpeg', category: 'Installation', title: 'Durable Finish' },
];

export default function GalleryPage() {
  const [selectedItem, setSelectedItem] = useState<{ type: string, src: string, title: string } | null>(null);

  return (
    <div className="bg-gray-50 min-h-screen py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Project Gallery</h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Explore our recent installations, product showcases, and successful projects to get inspired for your own space.
          </p>
        </div>

        {/* Filters */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {['All', 'Doors', 'Windows', 'Installation', 'Projects'].map((filter, idx) => (
            <button 
              key={idx}
              className={`px-6 py-2 rounded-full font-medium transition-colors ${idx === 0 ? 'bg-blue-900 text-white' : 'bg-white text-gray-600 border border-gray-200 hover:border-blue-900 hover:text-blue-900'}`}
            >
              {filter}
            </button>
          ))}
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {galleryItems.map((item, idx) => (
            <div 
              key={idx} 
              className="group relative h-80 rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all block cursor-pointer bg-gray-200"
              onClick={() => setSelectedItem(item)}
            >
              {item.type === 'video' ? (
                <video 
                  src={item.src} 
                  className="object-cover w-full h-full"
                  autoPlay 
                  loop 
                  muted 
                  playsInline 
                />
              ) : (
                <Image src={item.src} alt={item.title} fill className="object-cover group-hover:scale-110 transition-transform duration-700" />
              )}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                   <div className="bg-white/30 backdrop-blur-sm p-3 rounded-full">
                     <svg className="w-8 h-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7" /></svg>
                   </div>
                </div>
                <span className="text-yellow-400 text-sm font-bold uppercase tracking-wider mb-1 relative z-10">{item.category}</span>
                <h3 className="text-white text-xl font-bold relative z-10">{item.title}</h3>
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* Enlarged Modal */}
      {selectedItem && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4 sm:p-8" onClick={() => setSelectedItem(null)}>
          <button 
            className="absolute top-6 right-6 text-white hover:text-yellow-500 transition-colors bg-black/50 p-2 rounded-full"
            onClick={() => setSelectedItem(null)}
          >
            <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
          
          <div className="relative w-full max-w-5xl max-h-[85vh] rounded-2xl overflow-hidden shadow-2xl bg-black" onClick={(e) => e.stopPropagation()}>
            {selectedItem.type === 'video' ? (
              <video 
                src={selectedItem.src} 
                className="w-full h-full max-h-[85vh] object-contain"
                controls
                autoPlay 
                playsInline 
              />
            ) : (
              <div className="relative w-full h-[80vh]">
                <Image src={selectedItem.src} alt={selectedItem.title} fill className="object-contain" />
              </div>
            )}
            <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-black/80 to-transparent p-6 pointer-events-none">
              <h3 className="text-white text-2xl font-bold">{selectedItem.title}</h3>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
