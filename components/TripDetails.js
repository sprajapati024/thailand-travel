import { Plane, Hotel, MapPin, Users, Calendar, Clock } from 'lucide-react';

const TRIP_DATA = {
  bookingRef: '8DCFFH',
  outbound: {
    date: 'April 3, 2026',
    time: '3:10 PM',
    departure: 'Toronto (YYZ)',
    arrival: 'Abu Dhabi (AUH)',
    airline: 'Etihad Airways',
    flight: 'EY22',
    duration: '13h 20m',
    seats: '70A, 70B',
  },
  flights: [
    { date: 'April 3', flight: 'EY22', route: 'YYZ → AUH', time: '3:10 PM', seats: '70A, 70B' },
    { date: 'April 6', flight: 'EY406', route: 'AUH → BKK', time: '8:35 AM', seats: '51A, 51C' },
    { date: 'April 8', flight: 'TG106', route: 'BKK → CNX', time: '11:40 AM', seats: '' },
    { date: 'April 11', flight: 'FD3162', route: 'CNX → HKT', time: '1:00 PM', seats: '24A, 24B' },
    { date: 'April 14', flight: 'TG212', route: 'HKT → BKK', time: '4:05 PM', seats: '47A, 47B' },
    { date: 'April 15', flight: 'EY409', route: 'BKK → AUH', time: '9:45 AM', seats: '38A, 38B' },
    { date: 'April 16', flight: 'EY21', route: 'AUH → YYZ', time: '2:15 AM', seats: '70A, 70B' },
  ],
  return: {
    date: 'April 16, 2026',
    time: '2:15 AM',
    departure: 'Abu Dhabi (AUH)',
    arrival: 'Toronto (YYZ)',
    airline: 'Etihad Airways',
    flight: 'EY21',
    duration: '14h 45m',
    seats: '70A, 70B',
  },
  hotels: [
    {
      name: 'Grand Millennium Al Wahda',
      city: 'Abu Dhabi',
      checkIn: 'April 4, 2026',
      checkOut: 'April 6, 2026',
      nights: 2,
      address: 'Haza Bin Zayed Street, Al Wahda Complex, Abu Dhabi',
      confirmation: 'EYH283203',
    },
    {
      name: 'Grande Centre Point Sukhumvit 55',
      city: 'Bangkok',
      checkIn: 'April 6, 2026',
      checkOut: 'April 8, 2026',
      nights: 2,
      address: '300 Sukhumvit Soi 55 (Thonglor), Klongton Nua, Wattana, Bangkok',
      confirmation: '72071195297563',
    },
    {
      name: 'Proud Phu Fah Maerim',
      city: 'Chiang Mai',
      checkIn: 'April 8, 2026',
      checkOut: 'April 11, 2026',
      nights: 3,
      address: '97/5 M. 1 Mae Rim-Samoeng Rd, T. Pong Yaeng, Mae Rim, Chiang Mai',
      confirmation: '72071197167185',
    },
    {
      name: 'Marina Gallery Resort - KACHA',
      city: 'Phuket',
      checkIn: 'April 11, 2026',
      checkOut: 'April 14, 2026',
      nights: 3,
      address: '326/13 Phrabarami Road, Kathu, Patong, Phuket',
      confirmation: '72071199640133',
    },
    {
      name: 'The Park Nine Hotel Suvarnabhumi',
      city: 'Bangkok',
      checkIn: 'April 14, 2026',
      checkOut: 'April 15, 2026',
      nights: 1,
      address: '599, 599/1 Lat Krabang Road, Lat Krabang, Bangkok',
      confirmation: '72071198449390',
    },
  ],
  destinations: [
    { name: 'Abu Dhabi', activities: 'City exploration, Sheikh Zayed Mosque, Shopping' },
    { name: 'Bangkok', activities: 'Grand Palace, Wat Arun, Thonglor nightlife, Songkran Festival' },
    { name: 'Chiang Mai', activities: 'Doi Suthep Temple, Elephant Nature Park, Old City, Night Bazaar' },
    { name: 'Phuket', activities: 'Phi Phi Islands, Beach hopping, Songkran Festival 🎉' },
  ],
  travelers: [
    { name: 'Shirin', frequentFlyer: '607 2414513542' },
    { name: 'Zeel', frequentFlyer: '607 2414513541' },
  ],
  keyEvents: [
    { date: 'April 13-15', event: '🎉 SONGSKRAN FESTIVAL - Thai New Year!' },
  ],
};

export default function TripDetails() {
  return (
    <div className="space-y-6">
      {/* Booking Reference */}
      <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 text-center">
        <div className="text-sm text-blue-600 uppercase tracking-wider">Main Booking Reference</div>
        <div className="text-2xl font-bold text-blue-800">{TRIP_DATA.bookingRef}</div>
        <div className="text-sm text-blue-600">Etihad Airways</div>
      </div>

      {/* All Flights Section */}
      <div className="bg-white rounded-xl shadow-sm border border-slate-100 p-6">
        <div className="flex items-center gap-2 mb-6">
          <Plane className="w-5 h-5 text-blue-500" />
          <h2 className="text-lg font-semibold text-slate-800">All Flights (7 total)</h2>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-slate-200">
                <th className="text-left py-3 px-2 font-medium text-slate-500">Date</th>
                <th className="text-left py-3 px-2 font-medium text-slate-500">Flight</th>
                <th className="text-left py-3 px-2 font-medium text-slate-500">Route</th>
                <th className="text-left py-3 px-2 font-medium text-slate-500">Time</th>
                <th className="text-left py-3 px-2 font-medium text-slate-500">Seats</th>
              </tr>
            </thead>
            <tbody>
              {TRIP_DATA.flights.map((f, idx) => (
                <tr key={idx} className="border-b border-slate-100 hover:bg-slate-50">
                  <td className="py-3 px-2 font-medium">{f.date}</td>
                  <td className="py-3 px-2">{f.flight}</td>
                  <td className="py-3 px-2">{f.route}</td>
                  <td className="py-3 px-2">{f.time}</td>
                  <td className="py-3 px-2 text-slate-500">{f.seats || '-'}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Hotels Section */}
      <div className="bg-white rounded-xl shadow-sm border border-slate-100 p-6">
        <div className="flex items-center gap-2 mb-6">
          <Hotel className="w-5 h-5 text-purple-500" />
          <h2 className="text-lg font-semibold text-slate-800">Hotel Bookings (5 total)</h2>
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
                <div className="flex justify-between">
                  <span className="text-slate-500">Confirmation</span>
                  <span className="font-medium text-purple-600">{hotel.confirmation}</span>
                </div>
                <div className="pt-2 border-t border-slate-200">
                  <div className="text-xs text-slate-500">{hotel.address}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Key Events */}
      <div className="bg-white rounded-xl shadow-sm border border-slate-100 p-6">
        <div className="flex items-center gap-2 mb-4">
          <Calendar className="w-5 h-5 text-emerald-500" />
          <h2 className="text-lg font-semibold text-slate-800">Key Events</h2>
        </div>
        {TRIP_DATA.keyEvents.map((e, idx) => (
          <div key={idx} className="bg-emerald-50 border border-emerald-200 rounded-lg p-4">
            <div className="font-semibold text-emerald-800">{e.date}</div>
            <div className="text-emerald-700">{e.event}</div>
          </div>
        ))}
      </div>

      {/* Destinations Section */}
      <div className="bg-white rounded-xl shadow-sm border border-slate-100 p-6">
        <div className="flex items-center gap-2 mb-6">
          <MapPin className="w-5 h-5 text-emerald-500" />
          <h2 className="text-lg font-semibold text-slate-800">Destinations</h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
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
                <div className="text-xs text-slate-500">FF: {traveler.frequentFlyer}</div>
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
            <div className="text-2xl font-bold text-slate-800">4</div>
          </div>
          <div className="bg-slate-50 rounded-lg p-4">
            <div className="text-xs text-slate-500 uppercase tracking-wider mb-1">Hotels</div>
            <div className="text-2xl font-bold text-slate-800">5</div>
          </div>
          <div className="bg-slate-50 rounded-lg p-4">
            <div className="text-xs text-slate-500 uppercase tracking-wider mb-1">Flights</div>
            <div className="text-2xl font-bold text-slate-800">7</div>
          </div>
          <div className="bg-slate-50 rounded-lg p-4">
            <div className="text-xs text-slate-500 uppercase tracking-wider mb-1">Total Nights</div>
            <div className="text-2xl font-bold text-slate-800">11</div>
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
