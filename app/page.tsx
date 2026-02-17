import React from 'react';
import Link from 'next/link';

interface Product {
  id: string;
  name: string;
  price: number;
  image: string;
  seller: string;
  rating: number;
}

const sampleProducts: Product[] = [
  {
    id: '1',
    name: 'Wireless Headphones',
    price: 129.99,
    image: '🎧',
    seller: 'TechStore',
    rating: 4.8,
  },
  {
    id: '2',
    name: 'Smart Watch',
    price: 199.99,
    image: '⌚',
    seller: 'GadgetHub',
    rating: 4.5,
  },
  {
    id: '3',
    name: 'USB-C Cable',
    price: 19.99,
    image: '🔌',
    seller: 'AccessoriesPro',
    rating: 4.9,
  },
  {
    id: '4',
    name: 'Phone Case',
    price: 24.99,
    image: '📱',
    seller: 'CaseDesigns',
    rating: 4.6,
  },
  {
    id: '5',
    name: 'Portable Charger',
    price: 49.99,
    image: '🔋',
    seller: 'PowerSolutions',
    rating: 4.7,
  },
  {
    id: '6',
    name: 'Screen Protector',
    price: 9.99,
    image: '🛡️',
    seller: 'ProtectionPro',
    rating: 4.8,
  },
];

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-white shadow">
        <div className="max-w-7xl mx-auto px-4 py-6 flex justify-between items-center">
          <h1 className="text-3xl font-bold text-gray-900">🛍️ MarketHub</h1>
          <nav className="flex gap-4">
            <Link href="/products" className="text-blue-600 hover:text-blue-800">
              Browse
            </Link>
            <Link href="/seller/dashboard" className="text-blue-600 hover:text-blue-800">
              Sell
            </Link>
            <Link href="/cart" className="text-blue-600 hover:text-blue-800">
              Cart
            </Link>
          </nav>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 py-12">
        <section className="mb-12">
          <div className="bg-gradient-to-r from-blue-600 to-blue-800 rounded-lg p-8 text-white mb-8">
            <h2 className="text-4xl font-bold mb-2">Welcome to MarketHub</h2>
            <p className="text-lg">Discover amazing products from trusted sellers worldwide</p>
          </div>

          <h3 className="text-2xl font-bold text-gray-900 mb-6">Featured Products</h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {sampleProducts.map((product) => (
              <div
                key={product.id}
                className="bg-white rounded-lg shadow hover:shadow-lg transition-shadow"
              >
                <div className="p-6">
                  <div className="text-5xl mb-4">{product.image}</div>
                  <h4 className="text-xl font-semibold text-gray-900 mb-2">
                    {product.name}
                  </h4>
                  <p className="text-sm text-gray-600 mb-4">by {product.seller}</p>
                  
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-2xl font-bold text-blue-600">
                      ${product.price}
                    </span>
                    <span className="flex items-center gap-1">
                      <span className="text-yellow-400">⭐</span>
                      <span className="text-sm font-medium">{product.rating}</span>
                    </span>
                  </div>

                  <button className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded-lg transition-colors">
                    Add to Cart
                  </button>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="grid grid-cols-1 md:grid-cols-3 gap-6 py-12">
          <div className="bg-white p-6 rounded-lg shadow">
            <div className="text-3xl mb-2">🚚</div>
            <h4 className="font-semibold text-gray-900 mb-2">Fast Shipping</h4>
            <p className="text-sm text-gray-600">Free shipping on orders over $50</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow">
            <div className="text-3xl mb-2">🛡️</div>
            <h4 className="font-semibold text-gray-900 mb-2">Secure Payment</h4>
            <p className="text-sm text-gray-600">Powered by Stripe for your safety</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow">
            <div className="text-3xl mb-2">💬</div>
            <h4 className="font-semibold text-gray-900 mb-2">24/7 Support</h4>
            <p className="text-sm text-gray-600">Get help whenever you need it</p>
          </div>
        </section>
      </main>
    </div>
  );
}
