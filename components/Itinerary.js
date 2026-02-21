import { Plane, Hotel, MapPin, Navigation } from 'lucide-react';

const ITINERARY_DATA = [
  {
    day: 1,
    date: 'April 3, 2026',
    title: 'Departure - Toronto → Abu Dhabi',
    events: [
      { type: 'flight', time: '3:10 PM', description: 'EY22 Etihad Airways to Abu Dhabi', location: 'YYZ → AUH', seats: '70A, 70B' },
    ]
  },
  {
    day: 2,
    date: 'April 4, 2026',
    title: 'Abu Dhabi Arrival',
    events: [
      { type: 'flight', time: '12:30 PM', description: 'Arrive Abu Dhabi (local time)', location: 'AUH' },
      { type: 'hotel', time: 'Check-in', description: 'Grand Millennium Al Wahda', location: 'Abu Dhabi', confirmation: 'EYH283203' },
    ]
  },
  {
    day: 3,
    date: 'April 5, 2026',
    title: 'Abu Dhabi Exploration',
    events: [
      { type: 'activity', time: '10:00 AM', description: 'Explore Abu Dhabi city', location: 'Abu Dhabi' },
      { type: 'activity', time: '3:00 PM', description: 'Sheikh Zayed Mosque visit', location: 'Abu Dhabi' },
    ]
  },
  {
    day: 4,
    date: 'April 6, 2026',
    title: 'Abu Dhabi → Bangkok',
    events: [
      { type: 'flight', time: '8:35 AM', description: 'EY406 Etihad Airways to Bangkok', location: 'AUH → BKK', seats: '51A, 51C' },
      { type: 'hotel', time: 'Evening', description: 'Grande Centre Point Sukhumvit 55', location: 'Bangkok', confirmation: '72071195297563' },
    ]
  },
  {
    day: 5,
    date: 'April 7, 2026',
    title: 'Bangkok Exploration',
    events: [
      { type: 'activity', time: '9:00 AM', description: 'Grand Palace & Wat Phra Kaew', location: 'Bangkok' },
      { type: 'activity', time: '2:00 PM', description: 'Wat Arun (Temple of Dawn)', location: 'Bangkok' },
    ]
  },
  {
    day: 6,
    date: 'April 8, 2026',
    title: 'Bangkok → Chiang Mai',
    events: [
      { type: 'flight', time: '11:40 AM', description: 'TG106 Thai Airways to Chiang Mai', location: 'BKK → CNX' },
      { type: 'hotel', time: 'Afternoon', description: 'Proud Phu Fah Maerim', location: 'Chiang Mai', confirmation: '72071197167185' },
    ]
  },
  {
    day: 7,
    date: 'April 9, 2026',
    title: 'Chiang Mai Culture',
    events: [
      { type: 'activity', time: '8:00 AM', description: 'Doi Suthep Temple', location: 'Chiang Mai' },
      { type: 'activity', time: '3:00 PM', description: 'Old City temples', location: 'Chiang Mai' },
    ]
  },
  {
    day: 8,
    date: 'April 10, 2026',
    title: 'Chiang Mai Adventures',
    events: [
      { type: 'activity', time: '9:00 AM', description: 'Elephant Nature Park', location: 'Chiang Mai' },
      { type: 'activity', time: '6:00 PM', description: 'Night Bazaar', location: 'Chiang Mai' },
    ]
  },
  {
    day: 9,
    date: 'April 11, 2026',
    title: 'Chiang Mai → Phuket',
    events: [
      { type: 'flight', time: '1:00 PM', description: 'FD3162 AirAsia to Phuket', location: 'CNX → HKT', seats: '24A, 24B' },
      { type: 'hotel', time: 'Evening', description: 'Marina Gallery Resort - KACHA', location: 'Phuket', confirmation: '72071199640133' },
    ]
  },
  {
    day: 10,
    date: 'April 12, 2026',
    title: 'Phuket & Songkran Eve',
    events: [
      { type: 'activity', time: '9:00 AM', description: 'Phi Phi Islands day trip', location: 'Phuket' },
      { type: 'activity', time: '4:00 PM', description: 'Prepare for Songkran!', location: 'Phuket' },
    ]
  },
  {
    day: 11,
    date: 'April 13, 2026',
    title: '🎉 SONGKRAN FESTIVAL - Day 1',
    events: [
      { type: 'activity', time: 'All Day', description: 'SONGKRAN WATER FIGHT! 🌊', location: 'Phuket' },
      { type: 'activity', time: 'Evening', description: 'Songkran celebrations', location: 'Phuket' },
    ]
  },
  {
    day: 12,
    date: 'April 14, 2026',
    title: '🎉 SONGKRAN FESTIVAL - Day 2',
    events: [
      { type: 'activity', time: 'All Day', description: 'SONGKRAN WATER FIGHT! 🌊', location: 'Phuket' },
      { type: 'flight', time: '4:05 PM', description: 'TG212 Thai Airways to Bangkok', location: 'HKT → BKK', seats: '47A, 47B' },
      { type: 'hotel', time: 'Evening', description: 'The Park Nine Hotel Suvarnabhumi', location: 'Bangkok', confirmation: '72071198449390' },
    ]
  },
  {
    day: 13,
    date: 'April 15, 2026',
    title: 'Bangkok → Abu Dhabi',
    events: [
      { type: 'flight', time: '9:45 AM', description: 'EY409 Etihad Airways to Abu Dhabi', location: 'BKK → AUH', seats: '38A, 38B' },
      { type: 'activity', time: 'Layover', description: '~10 hour Abu Dhabi layover', location: 'AUH' },
    ]
  },
  {
    day: 14,
    date: 'April 16, 2026',
    title: 'Homeward Bound',
    events: [
      { type: 'flight', time: '2:15 AM', description: 'EY21 Etihad Airways to Toronto (depart Apr 15)', location: 'AUH → YYZ', seats: '70A, 70B' },
      { type: 'flight', time: '9:00 AM', description: 'Arrive Toronto', location: 'YYZ' },
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
                      {event.seats && <div className="text-xs opacity-75">Seats: {event.seats}</div>}
                      {event.confirmation && <div className="text-xs opacity-75">Conf: {event.confirmation}</div>}
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
