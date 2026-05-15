'use client';

import { ShoppingCart, Truck, Shield, Zap } from 'lucide-react';
import Link from 'next/link';

const products = [
  { id: 1, name: 'Premium Headphones', price: 299, category: 'Electronics', image: '🎧' },
  { id: 2, name: 'Smart Watch', price: 199, category: 'Electronics', image: '⌚' },
  { id: 3, name: 'Wireless Charger', price: 49, category: 'Accessories', image: '🔌' },
  { id: 4, name: 'Phone Case', price: 29, category: 'Accessories', image: '📱' },
  { id: 5, name: 'USB-C Cable', price: 15, category: 'Cables', image: '🔗' },
  { id: 6, name: 'Screen Protector', price: 12, category: 'Accessories', image: '📺' },
];

export default function Home() {
  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-20 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-5xl font-bold mb-6">Welcome to ShopHub</h1>
          <p className="text-xl mb-8">Discover premium products at unbeatable prices</p>
          <Link href="/products" className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 inline-block">
            Shop Now
          </Link>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Why Choose ShopHub?</h2>
          <div className="grid md:grid-cols-4 gap-8">
            {[
              { icon: Truck, title: 'Fast Shipping', desc: 'Free shipping on orders over $50' },
              { icon: Shield, title: 'Secure', desc: '100% secure transactions' },
              { icon: ShoppingCart, title: 'Easy Returns', desc: '30-day return policy' },
              { icon: Zap, title: 'Best Prices', desc: 'Guaranteed lowest prices' },
            ].map((feature, i) => {
              const Icon = feature.icon;
              return (
                <div key={i} className="bg-white p-8 rounded-lg shadow text-center">
                  <Icon className="w-12 h-12 mx-auto mb-4 text-blue-600" />
                  <h3 className="font-bold text-lg mb-2">{feature.title}</h3>
                  <p className="text-gray-600 text-sm">{feature.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold mb-12">Featured Products</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {products.map((product) => (
              <Link key={product.id} href={`/product/${product.id}`}>
                <div className="bg-white rounded-lg shadow hover:shadow-lg transition cursor-pointer overflow-hidden">
                  <div className="h-48 bg-gray-100 flex items-center justify-center text-6xl">
                    {product.image}
                  </div>
                  <div className="p-6">
                    <p className="text-sm text-gray-500 mb-2">{product.category}</p>
                    <h3 className="font-bold text-lg mb-2">{product.name}</h3>
                    <p className="text-2xl font-bold text-blue-600">${product.price}</p>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="bg-blue-600 text-white py-12 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">Subscribe to Our Newsletter</h2>
          <p className="mb-6">Get exclusive deals and updates delivered to your inbox</p>
          <div className="flex gap-2 max-w-md mx-auto">
            <input type="email" placeholder="Enter your email" className="flex-1 px-4 py-2 rounded text-gray-800" />
            <button className="bg-yellow-500 hover:bg-yellow-600 px-6 py-2 rounded font-semibold">Subscribe</button>
          </div>
        </div>
      </section>
    </div>
  );
}
