'use client';

import { useState } from 'react';
import { Trash2 } from 'lucide-react';
import Link from 'next/link';

const cartItems = [
  { id: 1, name: 'Premium Headphones', price: 299, quantity: 1 },
  { id: 2, name: 'Smart Watch', price: 199, quantity: 1 },
];

export default function CartPage() {
  const [items, setItems] = useState(cartItems);
  
  const subtotal = items.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const tax = subtotal * 0.1;
  const total = subtotal + tax;

  const removeItem = (id: number) => {
    setItems(items.filter(item => item.id !== id));
  };

  const updateQuantity = (id: number, newQuantity: number) => {
    if (newQuantity > 0) {
      setItems(items.map(item => item.id === id ? { ...item, quantity: newQuantity } : item));
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl font-bold mb-8">Shopping Cart</h1>

        {items.length > 0 ? (
          <div className="grid md:grid-cols-3 gap-8">
            {/* Cart Items */}
            <div className="md:col-span-2 space-y-4">
              {items.map(item => (
                <div key={item.id} className="bg-white rounded-lg shadow p-6 flex items-center gap-6">
                  <div className="w-20 h-20 bg-gray-100 rounded flex items-center justify-center text-3xl">📦</div>
                  <div className="flex-1">
                    <h3 className="font-bold text-lg">{item.name}</h3>
                    <p className="text-blue-600 font-semibold">${item.price}</p>
                  </div>
                  <div className="flex items-center border rounded-lg">
                    <button onClick={() => updateQuantity(item.id, item.quantity - 1)} className="px-3 py-1">−</button>
                    <span className="px-4 py-1">{item.quantity}</span>
                    <button onClick={() => updateQuantity(item.id, item.quantity + 1)} className="px-3 py-1">+</button>
                  </div>
                  <p className="font-bold w-24 text-right">${(item.price * item.quantity).toFixed(2)}</p>
                  <button onClick={() => removeItem(item.id)} className="text-red-600 hover:text-red-800">
                    <Trash2 className="w-5 h-5" />
                  </button>
                </div>
              ))}
            </div>

            {/* Order Summary */}
            <div className="bg-white rounded-lg shadow p-6 h-fit">
              <h2 className="text-2xl font-bold mb-6">Order Summary</h2>
              <div className="space-y-4 mb-6">
                <div className="flex justify-between pb-4 border-b">
                  <span className="text-gray-600">Subtotal</span>
                  <span>${subtotal.toFixed(2)}</span>
                </div>
                <div className="flex justify-between pb-4 border-b">
                  <span className="text-gray-600">Tax (10%)</span>
                  <span>${tax.toFixed(2)}</span>
                </div>
                <div className="flex justify-between pb-4 border-b">
                  <span className="text-gray-600">Shipping</span>
                  <span className="text-green-600">FREE</span>
                </div>
                <div className="flex justify-between text-xl font-bold pt-4">
                  <span>Total</span>
                  <span className="text-blue-600">${total.toFixed(2)}</span>
                </div>
              </div>
              <button className="w-full bg-blue-600 text-white py-3 rounded-lg font-bold hover:bg-blue-700 mb-3">
                Proceed to Checkout
              </button>
              <Link href="/products" className="block text-center text-blue-600 hover:underline">
                Continue Shopping
              </Link>
            </div>
          </div>
        ) : (
          <div className="bg-white rounded-lg shadow p-12 text-center">
            <p className="text-xl text-gray-600 mb-6">Your cart is empty</p>
            <Link href="/products" className="bg-blue-600 text-white px-8 py-3 rounded-lg inline-block hover:bg-blue-700">
              Start Shopping
            </Link>
          </div>
        )}
      </div>
    </div>
  );
}
