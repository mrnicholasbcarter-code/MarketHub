import Link from 'next/link';

export default function Products() {
  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-white shadow">
        <div className="max-w-7xl mx-auto px-4 py-6 flex justify-between items-center">
          <Link href="/" className="text-3xl font-bold text-gray-900 hover:text-blue-600">
            🛍️ MarketHub
          </Link>
          <nav className="flex gap-4">
            <Link href="/products" className="text-blue-600 hover:text-blue-800 font-semibold">
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
        <h1 className="text-4xl font-bold text-gray-900 mb-8">Browse Products</h1>
        <div className="bg-white rounded-lg shadow p-8">
          <p className="text-gray-600">Product listing page</p>
        </div>
      </main>
    </div>
  );
}
