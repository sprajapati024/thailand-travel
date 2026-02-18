import { useState } from 'react'
import Itinerary from './Itinerary'
import Header from './Header'

export default function Dashboard() {
  const [activeTab, setActiveTab] = useState('itinerary')

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-emerald-50">
      <Header onLogout={() => {
        localStorage.removeItem('thailand-auth')
        window.location.reload()
      }} />
      
      <main className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Trip Overview */}
        <div className="bg-white rounded-2xl shadow-lg p-8 mb-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="text-3xl mb-2">📅</div>
              <p className="text-gray-600 text-sm">Duration</p>
              <p className="text-2xl font-bold text-gray-900">14 Days</p>
            </div>
            <div className="text-center">
              <div className="text-3xl mb-2">✈️</div>
              <p className="text-gray-600 text-sm">Flights</p>
              <p className="text-2xl font-bold text-gray-900">5</p>
            </div>
            <div className="text-center">
              <div className="text-3xl mb-2">🏨</div>
              <p className="text-gray-600 text-sm">Hotels</p>
              <p className="text-2xl font-bold text-gray-900">5</p>
            </div>
            <div className="text-center">
              <div className="text-3xl mb-2">💰</div>
              <p className="text-gray-600 text-sm">Total Cost</p>
              <p className="text-2xl font-bold text-gray-900">CA $5,772</p>
            </div>
          </div>
        </div>

        {/* Route Overview */}
        <div className="bg-gradient-to-r from-blue-500 to-emerald-500 text-white rounded-2xl shadow-lg p-8 mb-8">
          <h2 className="text-3xl font-bold mb-4">🗺️ Your Route</h2>
          <div className="flex flex-wrap gap-3 items-center justify-center md:justify-start">
            <span className="font-semibold">Toronto</span>
            <span className="text-2xl">→</span>
            <span className="font-semibold">Abu Dhabi</span>
            <span className="text-2xl">→</span>
            <span className="font-semibold">Bangkok</span>
            <span className="text-2xl">→</span>
            <span className="font-semibold">Chiang Mai</span>
            <span className="text-2xl">→</span>
            <span className="font-semibold">Phuket</span>
            <span className="text-2xl">→</span>
            <span className="font-semibold">Toronto</span>
          </div>
          <p className="mt-6 text-sm opacity-90">🎉 Songkran Festival • April 13-15, 2026 • Phuket</p>
        </div>

        {/* Tabs */}
        <div className="flex gap-4 mb-8 flex-wrap">
          <button
            onClick={() => setActiveTab('itinerary')}
            className={`px-6 py-3 rounded-lg font-semibold transition ${
              activeTab === 'itinerary'
                ? 'bg-emerald-500 text-white shadow-lg'
                : 'bg-white text-gray-700 hover:bg-gray-50'
            }`}
          >
            📅 Full Itinerary
          </button>
          <button
            onClick={() => setActiveTab('confirmations')}
            className={`px-6 py-3 rounded-lg font-semibold transition ${
              activeTab === 'confirmations'
                ? 'bg-emerald-500 text-white shadow-lg'
                : 'bg-white text-gray-700 hover:bg-gray-50'
            }`}
          >
            ✅ Confirmations
          </button>
        </div>

        {/* Content */}
        {activeTab === 'itinerary' && <Itinerary />}
        {activeTab === 'confirmations' && <Confirmations />}
      </main>
    </div>
  )
}

function Confirmations() {
  const confirmations = [
    { label: 'Main Booking (Etihad Airways)', number: '8DCFFH', type: 'Flight' },
    { label: 'Grand Millennium Al Wahda', number: 'EYH283203', type: 'Hotel' },
    { label: 'Grande Centre Point Sukhumvit 55', number: '72071195297563', type: 'Hotel' },
    { label: 'Proud Phu Fah Maerim', number: '72071197167185', type: 'Hotel' },
    { label: 'Marina Gallery Resort - KACHA Kalim Bay', number: '72071199640133', type: 'Hotel' },
    { label: 'The Park Nine Hotel Suvarnabhumi', number: '72071198449390', type: 'Hotel' },
  ]

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      {confirmations.map((item, idx) => (
        <div key={idx} className="bg-white rounded-xl shadow p-6 border-l-4 border-emerald-500">
          <p className="text-xs font-semibold text-emerald-600 uppercase tracking-wide">{item.type}</p>
          <p className="font-semibold text-gray-900 mt-2">{item.label}</p>
          <p className="text-lg font-mono text-gray-700 mt-3 bg-gray-100 p-3 rounded break-all">
            {item.number}
          </p>
        </div>
      ))}
    </div>
  )
}
