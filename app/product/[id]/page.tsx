'use client';

import { useState } from 'react';
import { Heart, Share2, Star, Truck, Shield, RotateCcw } from 'lucide-react';
import Link from 'next/link';

const products: Record<string, any> = {
  '1': { id: 1, name: 'Premium Headphones', price: 299, category: 'Electronics', rating: 4.5, reviews: 128, image: '🎧', description: 'High-quality wireless headphones with active noise cancellation' },
  '2': { id: 2, name: 'Smart Watch', price: 199, category: 'Electronics', rating: 4.2, reviews: 95, image: '⌚', description: 'Smartwatch with fitness tracking and heart rate monitor' },
  '3': { id: 3, name: 'Wireless Charger', price: 49, category: 'Accessories', rating: 4.0, reviews: 67, image: '🔌', description: 'Fast wireless charging pad compatible with all devices' },
};

export default function ProductPage({ params }: { params: { id: string } }) {
  const product = products[params.id] || products['1'];
  const [quantity, setQuantity] = useState(1);
  const [inCart, setInCart] = useState(false);

  const addToCart = () => {
    setInCart(true);
    setTimeout(() => setInCart(false), 2000);
  };

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4">
      <div className="max-w-7xl mx-auto">
        <Link href="/products" className="text-blue-600 hover:underline mb-8 inline-block">
          ← Back to Products
        </Link>

        <div className="grid md:grid-cols-2 gap-12 bg-white rounded-lg shadow p-8">
          {/* Image */}
          <div className="h-96 bg-gray-100 rounded-lg flex items-center justify-center text-9xl">
            {product.image}
          </div>

          {/* Details */}
          <div>
            <p className="text-sm text-gray-500 mb-2">{product.category}</p>
            <h1 className="text-4xl font-bold mb-4">{product.name}</h1>
            
            {/* Rating */}
            <div className="flex items-center gap-2 mb-6">
              <div className="flex">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className={`w-5 h-5 ${i < Math.floor(product.rating) ? 'fill-yellow-400 text-yellow-400' : 'text-gray-300'}`} />
                ))}
              </div>
              <span className="text-gray-600">({product.reviews} reviews)</span>
            </div>

            <p className="text-5xl font-bold text-blue-600 mb-6">${product.price}</p>
            <p className="text-gray-600 mb-8">{product.description}</p>

            {/* Quantity */}
            <div className="mb-8">
              <label className="block text-sm font-semibold mb-2">Quantity</label>
              <div className="flex items-center border rounded-lg w-fit">
                <button onClick={() => setQuantity(Math.max(1, quantity - 1))} className="px-4 py-2 text-lg">−</button>
                <span className="px-6 py-2 text-lg font-semibold">{quantity}</span>
                <button onClick={() => setQuantity(quantity + 1)} className="px-4 py-2 text-lg">+</button>
              </div>
            </div>

            {/* Actions */}
            <div className="flex gap-4 mb-8">
              <button
                onClick={addToCart}
                className={`flex-1 py-3 rounded-lg font-bold text-white transition ${
                  inCart ? 'bg-green-600' : 'bg-blue-600 hover:bg-blue-700'
                }`}
              >
                {inCart ? '✓ Added to Cart' : 'Add to Cart'}
              </button>
              <button className="px-6 py-3 border rounded-lg hover:bg-gray-50">
                <Heart className="w-6 h-6" />
              </button>
              <button className="px-6 py-3 border rounded-lg hover:bg-gray-50">
                <Share2 className="w-6 h-6" />
              </button>
            </div>

            {/* Benefits */}
            <div className="space-y-4 pt-8 border-t">
              {[
                { icon: Truck, text: 'Free shipping on orders over $50' },
                { icon: Shield, text: '100% secure transactions' },
                { icon: RotateCcw, text: '30-day money back guarantee' },
              ].map((benefit, i) => {
                const Icon = benefit.icon;
                return (
                  <div key={i} className="flex items-center gap-3">
                    <Icon className="w-6 h-6 text-blue-600" />
                    <span className="text-gray-700">{benefit.text}</span>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
