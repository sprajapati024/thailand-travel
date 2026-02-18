import { useState } from 'react'

const PASSWORD = 'thailand2026'

export default function PasswordProtection({ onSuccess }) {
  const [pin, setPin] = useState('')
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    setError('')
    setLoading(true)

    setTimeout(() => {
      if (pin === PASSWORD) {
        localStorage.setItem('thailand-auth', 'true')
        onSuccess()
      } else {
        setError('Incorrect PIN. Please try again.')
        setPin('')
      }
      setLoading(false)
    }, 500)
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-emerald-50 px-4">
      <div className="w-full max-w-md">
        <div className="bg-white rounded-2xl shadow-2xl p-8 md:p-12">
          {/* Header */}
          <div className="text-center mb-8">
            <div className="text-5xl mb-4">🌏</div>
            <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">
              Thailand Adventure 2026
            </h1>
            <p className="text-gray-600">Shirin & Zeel's Journey</p>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-3">
                Enter PIN to access trip details
              </label>
              <input
                type="password"
                value={pin}
                onChange={(e) => {
                  setPin(e.target.value)
                  setError('')
                }}
                placeholder="Enter PIN"
                className={`w-full px-4 py-3 border-2 rounded-lg font-mono text-center text-xl tracking-widest focus:outline-none focus:ring-0 transition ${
                  error
                    ? 'border-red-500 bg-red-50'
                    : 'border-gray-300 focus:border-emerald-500'
                }`}
                disabled={loading}
                maxLength="20"
              />
            </div>

            {error && (
              <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-lg text-sm">
                {error}
              </div>
            )}

            <button
              type="submit"
              disabled={loading || !pin}
              className="w-full bg-gradient-to-r from-blue-500 to-emerald-500 text-white font-semibold py-3 rounded-lg hover:from-blue-600 hover:to-emerald-600 disabled:opacity-50 disabled:cursor-not-allowed transition transform hover:scale-105"
            >
              {loading ? 'Verifying...' : 'Access Trip Details'}
            </button>
          </form>

          {/* Footer */}
          <p className="text-center text-gray-500 text-sm mt-6">
            April 3-17, 2026 • 14 Days • 5 Countries
          </p>
        </div>
      </div>
    </div>
  )
}
