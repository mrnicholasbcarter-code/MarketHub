import Link from 'next/link';

export default function SellerDashboard() {
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
            <Link href="/seller/dashboard" className="text-blue-600 hover:text-blue-800 font-semibold">
              Sell
            </Link>
            <Link href="/cart" className="text-blue-600 hover:text-blue-800">
              Cart
            </Link>
          </nav>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 py-12">
        <h1 className="text-4xl font-bold text-gray-900 mb-8">Seller Dashboard</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="bg-white rounded-lg shadow p-6">
            <div className="text-3xl mb-2">📊</div>
            <h3 className="text-lg font-semibold text-gray-900">Sales Analytics</h3>
            <p className="text-sm text-gray-600">Track your sales performance</p>
          </div>
          <div className="bg-white rounded-lg shadow p-6">
            <div className="text-3xl mb-2">📦</div>
            <h3 className="text-lg font-semibold text-gray-900">Manage Inventory</h3>
            <p className="text-sm text-gray-600">Add and edit your products</p>
          </div>
          <div className="bg-white rounded-lg shadow p-6">
            <div className="text-3xl mb-2">💳</div>
            <h3 className="text-lg font-semibold text-gray-900">Payouts</h3>
            <p className="text-sm text-gray-600">Manage your earnings</p>
          </div>
        </div>
      </main>
    </div>
  );
}
