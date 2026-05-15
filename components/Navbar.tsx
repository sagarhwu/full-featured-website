'use client';

import Link from 'next/link';
import { ShoppingCart, Search, Menu, X } from 'lucide-react';
import { useState } from 'react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white shadow-lg sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <Link href="/" className="text-2xl font-bold text-blue-600">
            ShopHub
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-8">
            <Link href="/" className="hover:text-blue-600 transition">Home</Link>
            <Link href="/products" className="hover:text-blue-600 transition">Products</Link>
            <Link href="/about" className="hover:text-blue-600 transition">About</Link>
            <Link href="/contact" className="hover:text-blue-600 transition">Contact</Link>
          </div>

          {/* Right Section */}
          <div className="flex items-center gap-4">
            <div className="hidden md:block relative">
              <input
                type="text"
                placeholder="Search..."
                className="bg-gray-100 px-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 w-48"
              />
              <Search className="absolute right-3 top-2.5 w-5 h-5 text-gray-400" />
            </div>
            <Link href="/cart" className="flex items-center gap-2 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition">
              <ShoppingCart className="w-5 h-5" />
              <span className="hidden md:inline">Cart</span>
            </Link>
            <button onClick={() => setIsOpen(!isOpen)} className="md:hidden">
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden mt-4 space-y-4 pb-4">
            <Link href="/" className="block hover:text-blue-600 transition">Home</Link>
            <Link href="/products" className="block hover:text-blue-600 transition">Products</Link>
            <Link href="/about" className="block hover:text-blue-600 transition">About</Link>
            <Link href="/contact" className="block hover:text-blue-600 transition">Contact</Link>
            <input
              type="text"
              placeholder="Search..."
              className="w-full bg-gray-100 px-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
        )}
      </div>
    </nav>
  );
}
