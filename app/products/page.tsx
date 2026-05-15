'use client';

import { useState } from 'react';
import { Search } from 'lucide-react';
import Link from 'next/link';

const allProducts = [
  { id: 1, name: 'Premium Headphones', price: 299, category: 'Electronics', rating: 4.5 },
  { id: 2, name: 'Smart Watch', price: 199, category: 'Electronics', rating: 4.2 },
  { id: 3, name: 'Wireless Charger', price: 49, category: 'Accessories', rating: 4.0 },
  { id: 4, name: 'Phone Case', price: 29, category: 'Accessories', rating: 4.8 },
  { id: 5, name: 'USB-C Cable', price: 15, category: 'Cables', rating: 4.3 },
  { id: 6, name: 'Screen Protector', price: 12, category: 'Accessories', rating: 4.1 },
  { id: 7, name: 'Laptop Stand', price: 79, category: 'Electronics', rating: 4.7 },
  { id: 8, name: 'Keyboard', price: 129, category: 'Electronics', rating: 4.4 },
  { id: 9, name: 'Mouse', price: 59, category: 'Accessories', rating: 4.6 },
];

const categories = ['All', 'Electronics', 'Accessories', 'Cables'];

export default function ProductsPage() {
  const [search, setSearch] = useState('');
  const [category, setCategory] = useState('All');
  const [sort, setSort] = useState('name');

  let filtered = allProducts.filter(p => {
    const matchesSearch = p.name.toLowerCase().includes(search.toLowerCase());
    const matchesCategory = category === 'All' || p.category === category;
    return matchesSearch && matchesCategory;
  });

  filtered.sort((a, b) => {
    if (sort === 'price-low') return a.price - b.price;
    if (sort === 'price-high') return b.price - a.price;
    if (sort === 'rating') return b.rating - a.rating;
    return a.name.localeCompare(b.name);
  });

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl font-bold mb-8">Our Products</h1>

        {/* Filters */}
        <div className="bg-white rounded-lg shadow p-6 mb-8">
          <div className="grid md:grid-cols-4 gap-4">
            {/* Search */}
            <div className="relative">
              <Search className="absolute left-3 top-3 w-5 h-5 text-gray-400" />
              <input
                type="text"
                placeholder="Search products..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="w-full pl-10 pr-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            {/* Category */}
            <select
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              className="px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              {categories.map(cat => (
                <option key={cat} value={cat}>{cat}</option>
              ))}
            </select>

            {/* Sort */}
            <select
              value={sort}
              onChange={(e) => setSort(e.target.value)}
              className="px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option value="name">Sort by Name</option>
              <option value="price-low">Price: Low to High</option>
              <option value="price-high">Price: High to Low</option>
              <option value="rating">Top Rated</option>
            </select>

            {/* Results */}
            <div className="text-right pt-2">
              <p className="text-gray-600 font-semibold">{filtered.length} products found</p>
            </div>
          </div>
        </div>

        {/* Products Grid */}
        {filtered.length > 0 ? (
          <div className="grid md:grid-cols-3 gap-8">
            {filtered.map((product) => (
              <Link key={product.id} href={`/product/${product.id}`}>
                <div className="bg-white rounded-lg shadow hover:shadow-lg transition cursor-pointer overflow-hidden">
                  <div className="h-48 bg-gray-200 flex items-center justify-center text-5xl">
                    📦
                  </div>
                  <div className="p-6">
                    <h3 className="font-bold text-lg mb-2">{product.name}</h3>
                    <p className="text-sm text-gray-500 mb-3">{product.category}</p>
                    <div className="flex justify-between items-center">
                      <p className="text-2xl font-bold text-blue-600">${product.price}</p>
                      <span className="text-yellow-500">★ {product.rating}</span>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        ) : (
          <div className="text-center py-12 bg-white rounded-lg">
            <p className="text-gray-600 text-lg">No products found. Try adjusting your filters.</p>
          </div>
        )}
      </div>
    </div>
  );
}
