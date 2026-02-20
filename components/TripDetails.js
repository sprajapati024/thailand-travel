import { Plane, Hotel, MapPin, Users, Calendar, Clock } from 'lucide-react';

const TRIP_DATA = {
  outbound: {
    date: 'April 3, 2026',
    time: '3:10 PM',
    departure: 'Toronto (YYZ)',
    arrival: 'Bangkok (BKK)',
    airline: 'Emirates',
    flight: 'EY22',
    duration: '14h 40m',
    plane: 'Boeing 777-300ER',
  },
  return: {
    date: 'April 16, 2026',
    time: '7:10 PM',
    departure: 'Bangkok (BKK)',
    arrival: 'Toronto (YYZ)',
    airline: 'Emirates',
    flight: 'EY23',
    duration: '14h 40m',
    plane: 'Boeing 777-300ER',
  },
  hotels: [
    {
      name: 'Mandarin Oriental Bangkok',
      city: 'Bangkok',
      checkIn: 'April 4, 2026',
      checkOut: 'April 6, 2026',
      nights: 2,
      address: '48 Oriental Avenue, Bangkok',
    },
    {
      name: 'Four Seasons Chiang Mai',
      city: 'Chiang Mai',
      checkIn: 'April 6, 2026',
      checkOut: 'April 8, 2026',
      nights: 2,
      address: '502/1-4 Tambon Rim Tai, Chiang Mai',
    },
    {
      name: 'Amanpuri Resort',
      city: 'Phuket',
      checkIn: 'April 8, 2026',
      checkOut: 'April 11, 2026',
      nights: 3,
      address: 'Phulay Bay, Phang Nga, Thailand',
    },
    {
      name: 'Mandarin Oriental Bangkok',
      city: 'Bangkok',
      checkIn: 'April 11, 2026',
      checkOut: 'April 16, 2026',
      nights: 5,
      address: '48 Oriental Avenue, Bangkok',
    },
  ],
  destinations: [
    { name: 'Bangkok', activities: 'Grand Palace, Floating Markets, Shopping' },
    { name: 'Chiang Mai', activities: 'Elephant Sanctuary, Temples, Culture' },
    { name: 'Phuket', activities: 'Snorkeling, Islands, Beaches' },
  ],
  travelers: [
    { name: 'Shirin', role: 'Organizer' },
    { name: 'Zeel', role: 'Co-traveler' },
  ],
};

export default function TripDetails() {
  return (
    <div className="space-y-6">
      {/* Flights Section */}
      <div className="bg-white rounded-xl shadow-sm border border-slate-100 p-6">
        <div className="flex items-center gap-2 mb-6">
          <Plane className="w-5 h-5 text-blue-500" />
          <h2 className="text-lg font-semibold text-slate-800">Flight Details</h2>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {/* Outbound Flight */}
          <div className="border border-slate-200 rounded-lg p-4">
            <div className="text-sm font-medium text-slate-500 uppercase tracking-wider mb-4">Outbound Flight</div>
            <div className="space-y-3">
              <div>
                <div className="text-xs text-slate-500 uppercase tracking-wider">Flight Number</div>
                <div className="font-semibold text-slate-800">{TRIP_DATA.outbound.flight} · {TRIP_DATA.outbound.airline}</div>
              </div>
              <div>
                <div className="text-xs text-slate-500 uppercase tracking-wider">Date & Time</div>
                <div className="font-semibold text-slate-800">{TRIP_DATA.outbound.date} at {TRIP_DATA.outbound.time}</div>
              </div>
              <div>
                <div className="text-xs text-slate-500 uppercase tracking-wider">Route</div>
                <div className="font-semibold text-slate-800">{TRIP_DATA.outbound.departure} → {TRIP_DATA.outbound.arrival}</div>
              </div>
              <div>
                <div className="text-xs text-slate-500 uppercase tracking-wider">Duration</div>
                <div className="font-semibold text-slate-800">{TRIP_DATA.outbound.duration}</div>
              </div>
            </div>
          </div>

          {/* Return Flight */}
          <div className="border border-slate-200 rounded-lg p-4">
            <div className="text-sm font-medium text-slate-500 uppercase tracking-wider mb-4">Return Flight</div>
            <div className="space-y-3">
              <div>
                <div className="text-xs text-slate-500 uppercase tracking-wider">Flight Number</div>
                <div className="font-semibold text-slate-800">{TRIP_DATA.return.flight} · {TRIP_DATA.return.airline}</div>
              </div>
              <div>
                <div className="text-xs text-slate-500 uppercase tracking-wider">Date & Time</div>
                <div className="font-semibold text-slate-800">{TRIP_DATA.return.date} at {TRIP_DATA.return.time}</div>
              </div>
              <div>
                <div className="text-xs text-slate-500 uppercase tracking-wider">Route</div>
                <div className="font-semibold text-slate-800">{TRIP_DATA.return.departure} → {TRIP_DATA.return.arrival}</div>
              </div>
              <div>
                <div className="text-xs text-slate-500 uppercase tracking-wider">Duration</div>
                <div className="font-semibold text-slate-800">{TRIP_DATA.return.duration}</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Hotels Section */}
      <div className="bg-white rounded-xl shadow-sm border border-slate-100 p-6">
        <div className="flex items-center gap-2 mb-6">
          <Hotel className="w-5 h-5 text-purple-500" />
          <h2 className="text-lg font-semibold text-slate-800">Hotel Bookings</h2>
        </div>

        <div className="grid md:grid-cols-2 gap-4">
          {TRIP_DATA.hotels.map((hotel, idx) => (
            <div key={idx} className="border border-slate-200 rounded-lg p-4">
              <div className="font-semibold text-slate-800 mb-3">{hotel.name}</div>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span className="text-slate-500">City</span>
                  <span className="font-medium text-slate-800">{hotel.city}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-500">Check-in</span>
                  <span className="font-medium text-slate-800">{hotel.checkIn}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-500">Check-out</span>
                  <span className="font-medium text-slate-800">{hotel.checkOut}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-500">Nights</span>
                  <span className="font-medium text-slate-800">{hotel.nights}</span>
                </div>
                <div className="pt-2 border-t border-slate-200">
                  <div className="text-xs text-slate-500">{hotel.address}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Destinations Section */}
      <div className="bg-white rounded-xl shadow-sm border border-slate-100 p-6">
        <div className="flex items-center gap-2 mb-6">
          <MapPin className="w-5 h-5 text-emerald-500" />
          <h2 className="text-lg font-semibold text-slate-800">Destinations</h2>
        </div>

        <div className="grid md:grid-cols-3 gap-4">
          {TRIP_DATA.destinations.map((dest, idx) => (
            <div key={idx} className="border border-slate-200 rounded-lg p-4 hover:shadow-md transition-shadow">
              <h3 className="font-semibold text-slate-800 mb-2">{dest.name}</h3>
              <p className="text-sm text-slate-600">{dest.activities}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Travelers Section */}
      <div className="bg-white rounded-xl shadow-sm border border-slate-100 p-6">
        <div className="flex items-center gap-2 mb-6">
          <Users className="w-5 h-5 text-blue-500" />
          <h2 className="text-lg font-semibold text-slate-800">Travelers</h2>
        </div>

        <div className="grid sm:grid-cols-2 gap-4">
          {TRIP_DATA.travelers.map((traveler, idx) => (
            <div key={idx} className="flex items-center gap-3 p-4 bg-slate-50 rounded-lg">
              <div className="w-10 h-10 rounded-full bg-blue-500 flex items-center justify-center text-white font-semibold">
                {traveler.name.charAt(0)}
              </div>
              <div>
                <div className="font-semibold text-slate-800">{traveler.name}</div>
                <div className="text-xs text-slate-500">{traveler.role}</div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Trip Summary */}
      <div className="bg-white rounded-xl shadow-sm border border-slate-100 p-6">
        <h2 className="text-lg font-semibold text-slate-800 mb-6">Trip Summary</h2>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
          <div className="bg-slate-50 rounded-lg p-4">
            <div className="text-xs text-slate-500 uppercase tracking-wider mb-1">Duration</div>
            <div className="text-2xl font-bold text-slate-800">14 days</div>
          </div>
          <div className="bg-slate-50 rounded-lg p-4">
            <div className="text-xs text-slate-500 uppercase tracking-wider mb-1">Destinations</div>
            <div className="text-2xl font-bold text-slate-800">3</div>
          </div>
          <div className="bg-slate-50 rounded-lg p-4">
            <div className="text-xs text-slate-500 uppercase tracking-wider mb-1">Hotels</div>
            <div className="text-2xl font-bold text-slate-800">4</div>
          </div>
          <div className="bg-slate-50 rounded-lg p-4">
            <div className="text-xs text-slate-500 uppercase tracking-wider mb-1">Flights</div>
            <div className="text-2xl font-bold text-slate-800">2</div>
          </div>
          <div className="bg-slate-50 rounded-lg p-4">
            <div className="text-xs text-slate-500 uppercase tracking-wider mb-1">Total Nights</div>
            <div className="text-2xl font-bold text-slate-800">12</div>
          </div>
          <div className="bg-slate-50 rounded-lg p-4">
            <div className="text-xs text-slate-500 uppercase tracking-wider mb-1">Travelers</div>
            <div className="text-2xl font-bold text-slate-800">2</div>
          </div>
        </div>
      </div>
    </div>
  );
}
