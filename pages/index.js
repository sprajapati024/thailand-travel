import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { logout } from '../lib/auth';
import { tripData } from '../lib/tripData';
import CountdownTimer from '../components/CountdownTimer';

export default function Home() {
  const router = useRouter();
  const [authenticated, setAuthenticated] = useState(false);
  const [activeTab, setActiveTab] = useState('overview');
  const [sidebarOpen, setSidebarOpen] = useState(false);
  
  // Packing Checklist
  const [packingItems, setPackingItems] = useState([]);
  const [newPackingItem, setNewPackingItem] = useState('');
  
  // Places to Visit
  const [places, setPlaces] = useState([]);
  const [newPlaceName, setNewPlaceName] = useState('');
  const [newPlaceAddress, setNewPlaceAddress] = useState('');

  // Load data from localStorage
  useEffect(() => {
    const isAuth = localStorage.getItem('thailand-auth');
    if (isAuth !== 'authenticated') {
      router.push('/login');
    } else {
      setAuthenticated(true);
      loadPackingList();
      loadPlaces();
    }
  }, [router]);

  // Load packing list from localStorage
  const loadPackingList = () => {
    const saved = localStorage.getItem('thailand-packing-list');
    if (saved) {
      setPackingItems(JSON.parse(saved));
    } else {
      const defaultItems = [
        { id: 1, text: 'Passport', checked: false },
        { id: 2, text: 'Phone charger', checked: false },
        { id: 3, text: 'Waterproof phone case', checked: false },
        { id: 4, text: 'Swimwear', checked: false },
        { id: 5, text: 'Sunscreen', checked: false },
        { id: 6, text: 'Travel adapter', checked: false },
        { id: 7, text: 'Hindu meal confirmation', checked: false },
      ];
      setPackingItems(defaultItems);
      localStorage.setItem('thailand-packing-list', JSON.stringify(defaultItems));
    }
  };

  // Load places from localStorage
  const loadPlaces = () => {
    const saved = localStorage.getItem('thailand-places');
    if (saved) {
      setPlaces(JSON.parse(saved));
    }
  };

  // Add packing item
  const addPackingItem = () => {
    if (newPackingItem.trim()) {
      const newItem = {
        id: Date.now(),
        text: newPackingItem,
        checked: false,
      };
      const updated = [...packingItems, newItem];
      setPackingItems(updated);
      localStorage.setItem('thailand-packing-list', JSON.stringify(updated));
      setNewPackingItem('');
    }
  };

  // Toggle packing item
  const togglePackingItem = (id) => {
    const updated = packingItems.map(item =>
      item.id === id ? { ...item, checked: !item.checked } : item
    );
    setPackingItems(updated);
    localStorage.setItem('thailand-packing-list', JSON.stringify(updated));
  };

  // Remove packing item
  const removePackingItem = (id) => {
    const updated = packingItems.filter(item => item.id !== id);
    setPackingItems(updated);
    localStorage.setItem('thailand-packing-list', JSON.stringify(updated));
  };

  // Add place to visit
  const addPlace = () => {
    if (newPlaceName.trim()) {
      const newPlace = {
        id: Date.now(),
        name: newPlaceName,
        address: newPlaceAddress,
      };
      const updated = [...places, newPlace];
      setPlaces(updated);
      localStorage.setItem('thailand-places', JSON.stringify(updated));
      setNewPlaceName('');
      setNewPlaceAddress('');
    }
  };

  // Remove place
  const removePlace = (id) => {
    const updated = places.filter(place => place.id !== id);
    setPlaces(updated);
    localStorage.setItem('thailand-places', JSON.stringify(updated));
  };

  const handleLogout = () => {
    logout();
    router.push('/login');
  };

  // Calculate countdown
  const departureDate = new Date('2026-04-03').getTime();
  const today = new Date().getTime();
  const daysUntil = Math.ceil((departureDate - today) / (1000 * 60 * 60 * 24));

  if (!authenticated) {
    return (
      <div className="min-h-screen bg-black flex items-center justify-center">
        <div className="text-amber-500 text-lg">Loading...</div>
      </div>
    );
  }

  const packedCount = packingItems.filter(item => item.checked).length;

  // Tab content rendering
  const renderContent = () => {
    switch(activeTab) {
      case 'overview':
        return <OverviewTab daysUntil={daysUntil} packedCount={packedCount} packingItems={packingItems} />;
      case 'itinerary':
        return <ItineraryTab />;
      case 'flights':
        return <FlightsTab />;
      case 'hotels':
        return <HotelsTab />;
      case 'packing':
        return (
          <PackingTab 
            packingItems={packingItems}
            newPackingItem={newPackingItem}
            setNewPackingItem={setNewPackingItem}
            addPackingItem={addPackingItem}
            togglePackingItem={togglePackingItem}
            removePackingItem={removePackingItem}
          />
        );
      case 'places':
        return (
          <PlacesTab 
            places={places}
            newPlaceName={newPlaceName}
            setNewPlaceName={setNewPlaceName}
            newPlaceAddress={newPlaceAddress}
            setNewPlaceAddress={setNewPlaceAddress}
            addPlace={addPlace}
            removePlace={removePlace}
          />
        );
      case 'costs':
        return <CostsTab />;
      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-black text-white flex flex-col">
      {/* Header */}
      <header className="border-b border-neutral-800 px-4 sm:px-8 py-4 sm:py-6 bg-black">
        <div className="flex justify-between items-start gap-4">
          <div className="flex-1">
            <h1 className="text-2xl sm:text-4xl font-bold mb-1 font-mono tracking-tight">THAILAND 2026</h1>
            <p className="text-neutral-400 text-xs sm:text-sm tracking-wide">April 3-17 · 14 Days · Shirin & Zeel</p>
          </div>
          
          {/* Mobile Menu Button */}
          <button
            onClick={() => setSidebarOpen(!sidebarOpen)}
            className="md:hidden flex flex-col gap-1.5 p-2"
            aria-label="Toggle menu"
          >
            <span className={`w-6 h-0.5 bg-amber-500 transition-transform ${sidebarOpen ? 'rotate-45 translate-y-2' : ''}`}></span>
            <span className={`w-6 h-0.5 bg-amber-500 transition-opacity ${sidebarOpen ? 'opacity-0' : ''}`}></span>
            <span className={`w-6 h-0.5 bg-amber-500 transition-transform ${sidebarOpen ? '-rotate-45 -translate-y-2' : ''}`}></span>
          </button>
          
          {/* Logout Button */}
          <button
            onClick={handleLogout}
            className="hidden sm:block px-4 py-2 text-sm font-mono bg-neutral-900 border border-neutral-700 hover:border-amber-500 text-amber-500 transition-all duration-200"
          >
            logout
          </button>
        </div>
      </header>

      {/* Mobile Logout Button */}
      <div className="md:hidden px-4 border-b border-neutral-800 bg-neutral-950">
        <button
          onClick={handleLogout}
          className="w-full py-3 text-sm font-mono bg-amber-500 text-black font-bold hover:bg-amber-600 transition-colors"
        >
          logout
        </button>
      </div>

      {/* Main Content Area */}
      <div className="flex flex-1 overflow-hidden">
        {/* Mobile Sidebar Overlay */}
        {sidebarOpen && (
          <div 
            className="fixed inset-0 bg-black/50 md:hidden z-40"
            onClick={() => setSidebarOpen(false)}
          ></div>
        )}

        {/* Sidebar */}
        <nav className={`fixed md:static top-0 left-0 h-full md:h-auto w-48 border-r border-neutral-800 bg-neutral-950 py-4 px-0 overflow-y-auto z-50 transform transition-transform duration-200 ${
          sidebarOpen ? 'translate-x-0' : '-translate-x-full md:translate-x-0'
        }`}>
          <div className="space-y-1 px-2 sm:px-4">
            {[
              { id: 'overview', label: 'Overview' },
              { id: 'itinerary', label: 'Itinerary' },
              { id: 'flights', label: 'Flights' },
              { id: 'hotels', label: 'Hotels' },
              { id: 'packing', label: 'Packing' },
              { id: 'places', label: 'Places' },
              { id: 'costs', label: 'Costs' }
            ].map(tab => (
              <button
                key={tab.id}
                onClick={() => {
                  setActiveTab(tab.id);
                  setSidebarOpen(false);
                }}
                className={`w-full text-left px-3 sm:px-4 py-2.5 text-sm font-mono transition-all duration-200 ${
                  activeTab === tab.id
                    ? 'bg-neutral-800 text-amber-500 border-l-2 border-amber-500 pl-3 sm:pl-3'
                    : 'text-neutral-400 hover:text-white hover:bg-neutral-900'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </nav>

        {/* Content Area */}
        <div className="flex-1 overflow-y-auto bg-black p-4 sm:p-8">
          <div className="max-w-5xl">
            {renderContent()}
          </div>
        </div>
      </div>
    </div>
  );
}

// Tab Components
function OverviewTab({ daysUntil, packedCount, packingItems }) {
  return (
    <div className="space-y-6 sm:space-y-8">
      {/* Enhanced Countdown Timer */}
      <CountdownTimer />

      {/* Trip Stats Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6">
        <div className="border border-neutral-800 p-4 sm:p-6">
          <div className="text-xl sm:text-2xl font-mono font-bold text-white mb-1">7</div>
          <div className="text-xs text-neutral-500 uppercase tracking-wide">Flights</div>
        </div>
        <div className="border border-neutral-800 p-4 sm:p-6">
          <div className="text-xl sm:text-2xl font-mono font-bold text-white mb-1">5</div>
          <div className="text-xs text-neutral-500 uppercase tracking-wide">Hotels</div>
        </div>
        <div className="border border-neutral-800 p-4 sm:p-6">
          <div className="text-xl sm:text-2xl font-mono font-bold text-amber-500 mb-1">CA ${tripData.overview.totalCost.split('$')[1]}</div>
          <div className="text-xs text-neutral-500 uppercase tracking-wide">Total Cost</div>
        </div>
      </div>

      {/* Packing Progress */}
      <div className="border border-neutral-800 p-4 sm:p-6 space-y-4">
        <div className="flex justify-between items-center">
          <div className="text-sm font-mono uppercase tracking-wide text-neutral-400">Packing Checklist</div>
          <div className="text-sm font-mono text-amber-500">{packedCount}/{packingItems.length}</div>
        </div>
        <div className="w-full bg-neutral-900 h-1 rounded-full overflow-hidden">
          <div 
            className="h-full bg-amber-500 transition-all duration-300"
            style={{ width: `${(packedCount / packingItems.length) * 100}%` }}
          ></div>
        </div>
      </div>

      {/* Quick Facts */}
      <div className="space-y-3">
        <h3 className="text-sm font-mono uppercase tracking-wide text-neutral-400">Quick Facts</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div className="border border-neutral-800 p-4">
            <div className="text-xs text-neutral-500 mb-1">Duration</div>
            <div className="font-mono text-white">14 Days</div>
          </div>
          <div className="border border-neutral-800 p-4">
            <div className="text-xs text-neutral-500 mb-1">Cities</div>
            <div className="font-mono text-white">4 Cities</div>
          </div>
          <div className="border border-neutral-800 p-4">
            <div className="text-xs text-neutral-500 mb-1">Highlight</div>
            <div className="font-mono text-white">Songkran Festival</div>
          </div>
          <div className="border border-neutral-800 p-4">
            <div className="text-xs text-neutral-500 mb-1">Return</div>
            <div className="font-mono text-white">April 17</div>
          </div>
        </div>
      </div>
    </div>
  );
}

function ItineraryTab() {
  const itinerary = tripData.itinerary || [];
  
  return (
    <div className="space-y-4">
      <h2 className="text-2xl font-mono font-bold mb-6">14-Day Itinerary</h2>
      
      {itinerary.map((day, idx) => (
        <div key={idx} className="border border-neutral-800 p-4 sm:p-6 space-y-3">
          <div className="flex items-baseline gap-3 sm:gap-4 flex-wrap">
            <span className="text-sm font-mono text-amber-500 font-bold">Day {day.day}</span>
            <span className="text-sm text-neutral-400">{day.date}</span>
          </div>
          <div className="font-mono text-white font-bold text-lg">{day.city || day.location}</div>
          <p className="text-neutral-300 text-sm leading-relaxed">{day.activity || (day.flights ? `Flight to ${day.flights[0].to}` : day.activities?.join(', ') || day.description || 'Rest day')}</p>
          {day.notes && <p className="text-xs text-neutral-500 italic">{day.notes}</p>}
        </div>
      ))}
    </div>
  );
}

function FlightsTab() {
  const flights = tripData.flights || [];
  
  return (
    <div className="space-y-4">
      <h2 className="text-2xl font-mono font-bold mb-6">Flights ({flights.length})</h2>
      
      {flights.map((flight, idx) => (
        <div key={idx} className="border border-neutral-800 p-4 sm:p-6 space-y-4">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <div className="flex-1 min-w-0">
              <div className="text-xs text-neutral-400 mb-1">From</div>
              <div className="font-mono font-bold text-base sm:text-lg truncate">{flight.from}</div>
            </div>
            <div className="text-xl sm:text-2xl text-neutral-600">→</div>
            <div className="flex-1 text-right min-w-0">
              <div className="text-xs text-neutral-400 mb-1">To</div>
              <div className="font-mono font-bold text-base sm:text-lg truncate">{flight.to}</div>
            </div>
          </div>
          
          <div className="border-t border-neutral-700 pt-4 grid grid-cols-2 sm:grid-cols-3 gap-3 sm:gap-4 text-sm">
            <div>
              <div className="text-xs text-neutral-500 uppercase tracking-wide mb-1">Flight</div>
              <div className="font-mono text-white">{flight.number}</div>
            </div>
            <div>
              <div className="text-xs text-neutral-500 uppercase tracking-wide mb-1">Operator</div>
              <div className="font-mono text-white text-sm">{flight.operator}</div>
            </div>
            <div>
              <div className="text-xs text-neutral-500 uppercase tracking-wide mb-1">Departure</div>
              <div className="font-mono text-white text-sm">{flight.departure}</div>
            </div>
            <div>
              <div className="text-xs text-neutral-500 uppercase tracking-wide mb-1">Arrival</div>
              <div className="font-mono text-white text-sm">{flight.arrival}</div>
            </div>
            <div>
              <div className="text-xs text-neutral-500 uppercase tracking-wide mb-1">Confirmation</div>
              <div className="font-mono text-amber-500 font-bold text-sm">{flight.confirmation}</div>
            </div>
            {flight.seats && (
              <div>
                <div className="text-xs text-neutral-500 uppercase tracking-wide mb-1">Seats</div>
                <div className="font-mono text-white text-sm">{flight.seats}</div>
              </div>
            )}
          </div>
        </div>
      ))}
    </div>
  );
}

function HotelsTab() {
  const hotels = tripData.hotels || [];
  
  return (
    <div className="space-y-4">
      <h2 className="text-2xl font-mono font-bold mb-6">Hotels ({hotels.length})</h2>
      
      {hotels.map((hotel, idx) => (
        <div key={idx} className="border border-neutral-800 p-4 sm:p-6 space-y-4">
          <div className="font-mono font-bold text-base sm:text-lg text-white">{hotel.name}</div>
          <p className="text-sm text-neutral-400">{hotel.address}</p>
          
          <div className="border-t border-neutral-700 pt-4 grid grid-cols-2 sm:grid-cols-3 gap-3 sm:gap-4 text-sm">
            <div>
              <div className="text-xs text-neutral-500 uppercase tracking-wide mb-1">City</div>
              <div className="font-mono text-white">{hotel.city}</div>
            </div>
            <div>
              <div className="text-xs text-neutral-500 uppercase tracking-wide mb-1">Nights</div>
              <div className="font-mono text-white">{hotel.nights}</div>
            </div>
            <div>
              <div className="text-xs text-neutral-500 uppercase tracking-wide mb-1">Room Type</div>
              <div className="font-mono text-white text-xs sm:text-sm">{hotel.roomType}</div>
            </div>
            <div>
              <div className="text-xs text-neutral-500 uppercase tracking-wide mb-1">Cost</div>
              <div className="font-mono text-amber-500 font-bold">{hotel.cost}</div>
            </div>
            <div className="col-span-2 sm:col-span-1">
              <div className="text-xs text-neutral-500 uppercase tracking-wide mb-1">Confirmation</div>
              <div className="font-mono text-amber-500 font-bold text-sm">{hotel.confirmation}</div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

function PackingTab({ packingItems, newPackingItem, setNewPackingItem, addPackingItem, togglePackingItem, removePackingItem }) {
  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-mono font-bold">Packing Checklist</h2>
      
      <div className="border border-neutral-800 p-4 sm:p-6 space-y-3">
        <input
          type="text"
          value={newPackingItem}
          onChange={(e) => setNewPackingItem(e.target.value)}
          onKeyPress={(e) => e.key === 'Enter' && addPackingItem()}
          placeholder="Add item..."
          className="w-full bg-neutral-900 border border-neutral-700 px-4 py-2 text-white text-sm placeholder-neutral-600 focus:outline-none focus:border-amber-500 transition-colors"
        />
        <button
          onClick={addPackingItem}
          className="w-full px-4 py-2 bg-amber-500 text-black font-mono text-sm font-bold hover:bg-amber-600 transition-colors"
        >
          Add
        </button>
      </div>

      <div className="space-y-2">
        {packingItems.map(item => (
          <div key={item.id} className="border border-neutral-800 p-4 flex items-center justify-between gap-3">
            <div className="flex items-center gap-3 flex-1 min-w-0">
              <input
                type="checkbox"
                checked={item.checked}
                onChange={() => togglePackingItem(item.id)}
                className="w-4 h-4 cursor-pointer accent-amber-500 flex-shrink-0"
              />
              <span className={`text-sm font-mono ${item.checked ? 'line-through text-neutral-600' : 'text-white'}`}>
                {item.text}
              </span>
            </div>
            <button
              onClick={() => removePackingItem(item.id)}
              className="text-neutral-500 hover:text-red-500 transition-colors text-sm flex-shrink-0"
            >
              ✕
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

function PlacesTab({ places, newPlaceName, setNewPlaceName, newPlaceAddress, setNewPlaceAddress, addPlace, removePlace }) {
  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-mono font-bold">Places to Visit</h2>
      
      <div className="border border-neutral-800 p-4 sm:p-6 space-y-3">
        <input
          type="text"
          value={newPlaceName}
          onChange={(e) => setNewPlaceName(e.target.value)}
          placeholder="Place name..."
          className="w-full bg-neutral-900 border border-neutral-700 px-4 py-2 text-white text-sm placeholder-neutral-600 focus:outline-none focus:border-amber-500 transition-colors"
        />
        <input
          type="text"
          value={newPlaceAddress}
          onChange={(e) => setNewPlaceAddress(e.target.value)}
          onKeyPress={(e) => e.key === 'Enter' && addPlace()}
          placeholder="Address..."
          className="w-full bg-neutral-900 border border-neutral-700 px-4 py-2 text-white text-sm placeholder-neutral-600 focus:outline-none focus:border-amber-500 transition-colors"
        />
        <button
          onClick={addPlace}
          className="w-full px-4 py-2 bg-amber-500 text-black font-mono text-sm font-bold hover:bg-amber-600 transition-colors"
        >
          Add Place
        </button>
      </div>

      <div className="space-y-2">
        {places.length === 0 ? (
          <p className="text-neutral-500 text-sm italic">No places added yet</p>
        ) : (
          places.map(place => (
            <div key={place.id} className="border border-neutral-800 p-4 space-y-2">
              <div className="flex justify-between items-start gap-3">
                <div className="flex-1 min-w-0">
                  <div className="font-mono font-bold text-white text-sm">{place.name}</div>
                  <p className="text-sm text-neutral-400">{place.address}</p>
                </div>
                <button
                  onClick={() => removePlace(place.id)}
                  className="text-neutral-500 hover:text-red-500 transition-colors text-sm flex-shrink-0"
                >
                  ✕
                </button>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
}

function CostsTab() {
  const costs = tripData.costs || {};
  
  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-mono font-bold">Cost Breakdown</h2>
      
      <div className="space-y-2">
        {Object.entries(costs).map(([category, amount]) => (
          <div key={category} className="border border-neutral-800 p-4 flex justify-between items-center text-sm">
            <span className="font-mono text-neutral-300 capitalize">{category.replace(/_/g, ' ')}</span>
            <span className="font-mono font-bold text-amber-500">{amount}</span>
          </div>
        ))}
      </div>

      <div className="border border-amber-500 bg-neutral-950 p-4 sm:p-6 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <span className="font-mono text-lg font-bold text-white">TOTAL</span>
        <span className="font-mono text-2xl sm:text-3xl font-bold text-amber-500">{tripData.overview.totalCost}</span>
      </div>
    </div>
  );
}
