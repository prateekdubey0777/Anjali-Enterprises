'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <nav className="bg-blue-950 text-white sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20">
          <div className="flex items-center">
            <Link href="/" className="flex-shrink-0 flex items-center">
              <span className="font-bold text-2xl tracking-wider text-yellow-500">PRIME</span>
              <span className="font-semibold text-2xl tracking-wider ml-1">DOORS</span>
            </Link>
          </div>
          <div className="hidden md:flex items-center space-x-8">
            <Link href="/" className="hover:text-yellow-400 transition-colors font-medium">Home</Link>
            <Link href="/doors" className="hover:text-yellow-400 transition-colors font-medium">Doors</Link>
            <Link href="/windows" className="hover:text-yellow-400 transition-colors font-medium">Windows</Link>
            <Link href="/catalogue" className="hover:text-yellow-400 transition-colors font-medium">Catalogue</Link>
            <Link href="/gallery" className="hover:text-yellow-400 transition-colors font-medium">Gallery</Link>
            <Link href="/about" className="hover:text-yellow-400 transition-colors font-medium">About</Link>
            <Link href="/contact" className="hover:text-yellow-400 transition-colors font-medium">Contact</Link>
            
            <a href="https://wa.me/1234567890" target="_blank" rel="noopener noreferrer" className="bg-green-500 hover:bg-green-600 text-white px-5 py-2.5 rounded-full font-semibold transition-all transform hover:scale-105 shadow-md flex items-center">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.582 2.128 2.182-.573c.978.58 1.911.928 3.145.929 3.178 0 5.767-2.587 5.768-5.766.001-3.187-2.575-5.77-5.764-5.771zm3.392 8.244c-.144.405-.837.774-1.17.824-.299.045-.677.063-1.092-.069-.252-.08-.575-.187-.988-.365-1.739-.751-2.874-2.502-2.961-2.617-.087-.116-.708-.94-.708-1.793s.448-1.273.607-1.446c.159-.173.346-.217.462-.217l.332.006c.106.005.249-.04.39.298.144.347.491 1.2.534 1.287.043.087.072.188.014.304-.058.116-.087.188-.173.289l-.26.304c-.087.086-.177.18-.076.354.101.174.449.741.964 1.201.662.591 1.221.774 1.394.86s.274.072.376-.043c.101-.116.433-.506.549-.68.116-.173.231-.145.39-.087s1.011.477 1.184.564.289.13.332.202c.045.072.045.419-.099.824zm-3.423-14.416c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm.029 18.88c-1.161 0-2.305-.292-3.318-.844l-3.677.964.984-3.595c-.607-1.052-.927-2.246-.926-3.468.001-5.824 4.74-10.563 10.567-10.563 5.824 0 10.563 4.739 10.563 10.564 0 5.825-4.739 10.564-10.563 10.564z"/>
              </svg>
              WhatsApp
            </a>
          </div>
          
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-white hover:text-yellow-400 focus:outline-none"
            >
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                {isMobileMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {isMobileMenuOpen && (
        <div className="md:hidden bg-blue-900 absolute w-full shadow-lg">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 border-t border-blue-800">
            <Link href="/" className="block px-3 py-2 rounded-md text-base font-medium hover:bg-blue-800 hover:text-yellow-400">Home</Link>
            <Link href="/doors" className="block px-3 py-2 rounded-md text-base font-medium hover:bg-blue-800 hover:text-yellow-400">Doors</Link>
            <Link href="/windows" className="block px-3 py-2 rounded-md text-base font-medium hover:bg-blue-800 hover:text-yellow-400">Windows</Link>
            <Link href="/catalogue" className="block px-3 py-2 rounded-md text-base font-medium hover:bg-blue-800 hover:text-yellow-400">Catalogue</Link>
            <Link href="/gallery" className="block px-3 py-2 rounded-md text-base font-medium hover:bg-blue-800 hover:text-yellow-400">Gallery</Link>
            <Link href="/about" className="block px-3 py-2 rounded-md text-base font-medium hover:bg-blue-800 hover:text-yellow-400">About</Link>
            <Link href="/contact" className="block px-3 py-2 rounded-md text-base font-medium hover:bg-blue-800 hover:text-yellow-400">Contact</Link>
          </div>
        </div>
      )}
    </nav>
  );
}
