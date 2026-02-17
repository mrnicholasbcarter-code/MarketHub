import Link from 'next/link';

export default function Cart() {
  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-white shadow">
        <div className="max-w-7xl mx-auto px-4 py-6 flex justify-between items-center">
          <Link href="/" className="text-3xl font-bold text-gray-900 hover:text-blue-600">
            🛍️ MarketHub
          </Link>
          <nav className="flex gap-4">
            <Link href="/products" className="text-blue-600 hover:text-blue-800">
              Browse
            </Link>
            <Link href="/seller/dashboard" className="text-blue-600 hover:text-blue-800">
              Sell
            </Link>
            <Link href="/cart" className="text-blue-600 hover:text-blue-800 font-semibold">
              Cart
            </Link>
          </nav>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 py-12">
        <h1 className="text-4xl font-bold text-gray-900 mb-8">Shopping Cart</h1>
        <div className="bg-white rounded-lg shadow p-8">
          <div className="text-center py-12">
            <div className="text-5xl mb-4">🛒</div>
            <p className="text-gray-600 text-lg">Your cart is empty</p>
            <Link href="/products" className="inline-block mt-6 bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-6 rounded-lg transition-colors">
              Continue Shopping
            </Link>
          </div>
        </div>
      </main>
    </div>
  );
}
