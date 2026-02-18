export default function Header({ onLogout }) {
  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-6 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <span className="text-4xl">🌏</span>
          <div>
            <h1 className="text-2xl font-bold text-gray-900">Thailand Adventure 2026</h1>
            <p className="text-sm text-gray-600">Shirin & Zeel's Journey</p>
          </div>
        </div>
        <button
          onClick={onLogout}
          className="px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 transition text-sm font-semibold"
        >
          Logout
        </button>
      </div>
    </header>
  )
}
