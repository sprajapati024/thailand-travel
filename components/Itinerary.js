import { Plane, Hotel, MapPin, Navigation } from 'lucide-react';

const ITINERARY_DATA = [
  {
    day: 1,
    date: 'April 3, 2026',
    title: 'Departure to Bangkok',
    events: [
      { type: 'flight', time: '3:10 PM', description: 'EY22 Emirates to Bangkok', location: 'YYZ' },
    ]
  },
  {
    day: 2,
    date: 'April 4, 2026',
    title: 'Bangkok Arrival',
    events: [
      { type: 'flight', time: '4:30 PM+1', description: 'Arrive Bangkok International', location: 'BKK' },
      { type: 'hotel', time: '6:00 PM', description: 'Check-in at Mandarin Oriental', location: 'Bangkok' },
    ]
  },
  {
    day: 3,
    date: 'April 5, 2026',
    title: 'Bangkok Exploration',
    events: [
      { type: 'activity', time: '9:00 AM', description: 'Visit Grand Palace', location: 'Bangkok' },
      { type: 'activity', time: '2:00 PM', description: 'Floating Markets Tour', location: 'Bangkok' },
    ]
  },
  {
    day: 4,
    date: 'April 6, 2026',
    title: 'Travel to Chiang Mai',
    events: [
      { type: 'flight', time: '10:00 AM', description: 'PG241 Bangkok Airways', location: 'BKK → CNX' },
      { type: 'hotel', time: '1:00 PM', description: 'Check-in at Four Seasons', location: 'Chiang Mai' },
    ]
  },
  {
    day: 5,
    date: 'April 7, 2026',
    title: 'Chiang Mai Culture',
    events: [
      { type: 'activity', time: '8:00 AM', description: 'Elephant Sanctuary', location: 'Chiang Mai' },
      { type: 'activity', time: '3:00 PM', description: 'Temple Visit', location: 'Chiang Mai' },
    ]
  },
  {
    day: 6,
    date: 'April 8, 2026',
    title: 'Travel to Phuket',
    events: [
      { type: 'flight', time: '12:00 PM', description: 'PG3022 Bangkok Airways', location: 'CNX → HKT' },
      { type: 'hotel', time: '2:00 PM', description: 'Check-in at Amanpuri', location: 'Phuket' },
    ]
  },
  {
    day: 7,
    date: 'April 9, 2026',
    title: 'Island Activities',
    events: [
      { type: 'activity', time: '9:00 AM', description: 'Snorkeling at Phi Phi Islands', location: 'Phuket' },
      { type: 'activity', time: '4:00 PM', description: 'Sunset Beach Relaxation', location: 'Phuket' },
    ]
  },
  {
    day: 8,
    date: 'April 10, 2026',
    title: 'Water Activities',
    events: [
      { type: 'activity', time: '8:00 AM', description: 'Diving at Similan Islands', location: 'Phuket' },
      { type: 'activity', time: '6:00 PM', description: 'Beach Dinner', location: 'Phuket' },
    ]
  },
  {
    day: 9,
    date: 'April 11, 2026',
    title: 'Return to Bangkok',
    events: [
      { type: 'flight', time: '2:00 PM', description: 'PG3023 Bangkok Airways', location: 'HKT → BKK' },
      { type: 'activity', time: '5:00 PM', description: 'Shopping at MBK Center', location: 'Bangkok' },
    ]
  },
  {
    day: 10,
    date: 'April 12, 2026',
    title: 'Bangkok Shopping & Spa',
    events: [
      { type: 'activity', time: '10:00 AM', description: 'Traditional Thai Massage', location: 'Bangkok' },
      { type: 'activity', time: '2:00 PM', description: 'Chatuchak Weekend Market', location: 'Bangkok' },
    ]
  },
  {
    day: 11,
    date: 'April 13, 2026',
    title: 'Rest Day',
    events: [
      { type: 'activity', time: '9:00 AM', description: 'Pool & Spa at Mandarin', location: 'Bangkok' },
      { type: 'activity', time: '6:00 PM', description: 'Dinner Cruise', location: 'Bangkok' },
    ]
  },
  {
    day: 12,
    date: 'April 14, 2026',
    title: 'Final Shopping',
    events: [
      { type: 'activity', time: '10:00 AM', description: 'Siam Paragon Shopping', location: 'Bangkok' },
      { type: 'activity', time: '3:00 PM', description: 'Last Minute Souvenirs', location: 'Bangkok' },
    ]
  },
  {
    day: 13,
    date: 'April 15, 2026',
    title: 'Relax & Pack',
    events: [
      { type: 'activity', time: '9:00 AM', description: 'Final Spa Treatment', location: 'Bangkok' },
      { type: 'activity', time: '6:00 PM', description: 'Packing & Prep', location: 'Hotel' },
    ]
  },
  {
    day: 14,
    date: 'April 16, 2026',
    title: 'Departure Day',
    events: [
      { type: 'flight', time: '7:10 PM', description: 'EY23 Emirates to Toronto', location: 'BKK' },
    ]
  },
  {
    day: 15,
    date: 'April 17, 2026',
    title: 'Arrival Home',
    events: [
      { type: 'flight', time: '7:30 AM', description: 'Arrive Toronto', location: 'YYZ' },
    ]
  }
];

const getEventIcon = (type) => {
  switch(type) {
    case 'flight': return Plane;
    case 'hotel': return Hotel;
    case 'activity': return MapPin;
    case 'transport': return Navigation;
    default: return MapPin;
  }
};

const getEventColor = (type) => {
  switch(type) {
    case 'flight': return 'bg-blue-50 border-blue-200 text-blue-600';
    case 'hotel': return 'bg-purple-50 border-purple-200 text-purple-600';
    case 'activity': return 'bg-emerald-50 border-emerald-200 text-emerald-600';
    case 'transport': return 'bg-amber-50 border-amber-200 text-amber-600';
    default: return 'bg-slate-50 border-slate-200 text-slate-600';
  }
};

export default function Itinerary() {
  return (
    <div className="bg-white rounded-xl shadow-sm border border-slate-100 p-6">
      <h2 className="text-lg font-semibold text-slate-800 mb-6">Trip Itinerary</h2>
      
      <div className="space-y-4">
        {ITINERARY_DATA.map((day, idx) => (
          <div key={day.day} className="border border-slate-200 rounded-lg overflow-hidden hover:shadow-md transition-shadow">
            {/* Day Header */}
            <div className="bg-gradient-to-r from-blue-50 to-slate-50 p-4 border-b border-slate-200">
              <div className="flex items-center gap-3 mb-1">
                <div className="flex items-center justify-center w-8 h-8 rounded-full bg-blue-500 text-white font-semibold text-sm">
                  {day.day}
                </div>
                <div>
                  <h3 className="font-semibold text-slate-800">{day.title}</h3>
                  <p className="text-xs text-slate-500">{day.date}</p>
                </div>
              </div>
            </div>

            {/* Events */}
            <div className="p-4 space-y-3">
              {day.events.map((event, eventIdx) => {
                const Icon = getEventIcon(event.type);
                const colorClass = getEventColor(event.type);
                
                return (
                  <div key={eventIdx} className={`flex gap-3 p-3 border rounded-lg ${colorClass}`}>
                    <Icon className="w-5 h-5 flex-shrink-0 mt-0.5" />
                    <div className="flex-1 min-w-0">
                      <div className="font-semibold text-sm">{event.time}</div>
                      <div className="text-sm">{event.description}</div>
                      <div className="text-xs opacity-75 mt-1">{event.location}</div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
