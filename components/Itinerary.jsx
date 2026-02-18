export default function Itinerary() {
  const itinerary = [
    {
      day: 1,
      date: 'Friday, April 3',
      title: 'Toronto → Abu Dhabi',
      details: [
        '3:10 PM EY22 Toronto (YYZ) → Abu Dhabi (AUH)',
        'Duration: 13h 20m',
        'Seats: 70A, 70B',
      ],
      icon: '✈️',
    },
    {
      day: '2-3',
      date: 'April 4-5',
      title: 'Abu Dhabi Stopover',
      details: [
        '🏨 Grand Millennium Al Wahda',
        'Confirmation: EYH283203',
      ],
      icon: '🏨',
    },
    {
      day: 4,
      date: 'Monday, April 6',
      title: 'Abu Dhabi → Bangkok',
      details: [
        '8:35 AM EY406',
        '🏨 Grande Centre Point Sukhumvit 55',
        'Confirmation: 72071195297563',
      ],
      icon: '✈️',
    },
    {
      day: '5',
      date: 'Tuesday, April 7',
      title: 'Bangkok Exploration',
      details: ['Free day to explore Bangkok & prepare for Chiang Mai'],
      icon: '🗺️',
    },
    {
      day: 6,
      date: 'Wednesday, April 8',
      title: 'Bangkok → Chiang Mai',
      details: [
        '11:40 AM TG106',
        '🏨 Proud Phu Fah Maerim',
        'Confirmation: 72071197167185',
      ],
      icon: '✈️',
    },
    {
      day: '7-8',
      date: 'April 9-10',
      title: 'Chiang Mai Adventures',
      details: [
        'Explore temples, night bazaar, and local culture',
        'Optional: Elephant sanctuary, zip-lining, cooking class',
      ],
      icon: '🏯',
    },
    {
      day: 9,
      date: 'Saturday, April 11',
      title: 'Chiang Mai → Phuket',
      details: [
        '1:00 PM FD3162',
        '🏨 Marina Gallery Resort - KACHA Kalim Bay',
        'Confirmation: 72071199640133',
      ],
      icon: '✈️',
    },
    {
      day: '10-12',
      date: 'April 12-13',
      title: 'Phuket Pre-Songkran',
      details: ['Beach relaxation, island exploration, prep for festival'],
      icon: '🏖️',
    },
    {
      day: '13',
      date: 'April 13-15',
      title: 'Songkran Festival',
      details: [
        '🎉 Thai New Year Water Festival in Phuket!',
        'Patong Beach, Phuket Old Town, Bangla Road',
        'Water fights, parades, cultural celebrations',
      ],
      icon: '💦',
      highlight: true,
    },
    {
      day: 13,
      date: 'Tuesday, April 14',
      title: 'Phuket → Bangkok',
      details: [
        '4:05 PM TG212',
        '🏨 The Park Nine Hotel Suvarnabhumi',
        'Confirmation: 72071198449390',
      ],
      icon: '✈️',
    },
    {
      day: 14,
      date: 'Wednesday, April 15',
      title: 'Bangkok → Abu Dhabi → Toronto',
      details: [
        '9:45 AM EY409 (Bangkok → Abu Dhabi)',
        '2:15 AM EY21 (Abu Dhabi → Toronto)',
        'Final day - depart early morning',
      ],
      icon: '✈️',
    },
  ]

  return (
    <div className="space-y-6">
      <div className="bg-blue-50 border-l-4 border-blue-500 p-6 rounded-r-lg">
        <p className="text-blue-900 font-semibold">📍 Trip Overview</p>
        <p className="text-blue-800 mt-2">
          April 3-17, 2026 • Toronto → Abu Dhabi → Bangkok → Chiang Mai → Phuket → Bangkok → Toronto
        </p>
      </div>

      <div className="space-y-4">
        {itinerary.map((day, idx) => (
          <div
            key={idx}
            className={`rounded-xl shadow-md p-6 border-l-4 transition hover:shadow-lg ${
              day.highlight
                ? 'bg-gradient-to-r from-red-50 to-orange-50 border-red-500'
                : 'bg-white border-emerald-500'
            }`}
          >
            <div className="flex items-start gap-4">
              <div className="text-4xl">{day.icon}</div>
              <div className="flex-1">
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 mb-3">
                  <div>
                    <h3 className="text-xl font-bold text-gray-900">{day.title}</h3>
                    <p className="text-sm text-gray-600">
                      Day {day.day} • {day.date}
                    </p>
                  </div>
                </div>

                <div className="space-y-2">
                  {day.details.map((detail, didx) => (
                    <p key={didx} className="text-gray-700">
                      {detail}
                    </p>
                  ))}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Key Information Box */}
      <div className="bg-gradient-to-r from-emerald-500 to-teal-500 text-white rounded-xl shadow-lg p-8 mt-8">
        <h3 className="text-2xl font-bold mb-4">📋 Key Information</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <p className="font-semibold mb-2">Main Booking Reference</p>
            <p className="text-lg font-mono bg-white bg-opacity-20 p-3 rounded">8DCFFH</p>
            <p className="text-xs mt-2 opacity-90">Etihad Airways</p>
          </div>
          <div>
            <p className="font-semibold mb-2">Trip Duration & Cost</p>
            <p className="text-lg">14 Days • 5 Flights • 5 Hotels</p>
            <p className="text-xs mt-2 opacity-90">Total: CA $5,772</p>
          </div>
        </div>
      </div>
    </div>
  )
}
