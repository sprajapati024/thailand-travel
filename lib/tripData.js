export const tripData = {
  overview: {
    title: "Thailand Adventure 2026",
    subtitle: "A curated journey through the Land of Smiles",
    dates: "April 3-17, 2026",
    duration: "14 Days",
    flights: 7,
    hotels: 5,
    mainBooking: "8DCFFH (Etihad Airways)",
    route: ["Toronto", "Abu Dhabi", "Bangkok", "Chiang Mai", "Phuket", "Bangkok", "Abu Dhabi", "Toronto"],
    totalCost: "CA $5,772",
  },

  flights: [
    {
      number: "EY22",
      operator: "Etihad Airways",
      from: "Toronto (YYZ)",
      to: "Abu Dhabi (AUH)",
      departure: "Friday Apr 3, 3:10 PM",
      arrival: "Saturday Apr 4, 12:30 PM",
      duration: "13h 20m",
      seats: "70A, 70B",
      confirmation: "8DCFFH"
    },
    {
      number: "EY406",
      operator: "Etihad Airways",
      from: "Abu Dhabi (AUH)",
      to: "Bangkok (BKK)",
      departure: "Monday Apr 6, 8:35 AM",
      arrival: "Monday Apr 6, 6:10 PM",
      duration: "6h 35m",
      seats: "TBA",
      confirmation: "8DCFFH"
    },
    {
      number: "TG106",
      operator: "Thai Airways",
      from: "Bangkok (BKK)",
      to: "Chiang Mai (CNX)",
      departure: "Wednesday Apr 8, 11:40 AM",
      arrival: "Wednesday Apr 8, 1:00 PM",
      duration: "1h 20m",
      seats: "TBA",
      confirmation: "EJI66L"
    },
    {
      number: "FD3162",
      operator: "AirAsia",
      from: "Chiang Mai (CNX)",
      to: "Phuket (HKT)",
      departure: "Saturday Apr 11, 1:00 PM",
      arrival: "Saturday Apr 11, 3:00 PM",
      duration: "2h",
      seats: "24A, 24B",
      confirmation: "TIIIPX"
    },
    {
      number: "TG212",
      operator: "Thai Airways",
      from: "Phuket (HKT)",
      to: "Bangkok (BKK)",
      departure: "Tuesday Apr 14, 4:05 PM",
      arrival: "Tuesday Apr 14, 5:40 PM",
      duration: "1h 35m",
      seats: "47A, 47B",
      confirmation: "EJRMGG"
    },
    {
      number: "EY409",
      operator: "Etihad Airways",
      from: "Bangkok (BKK)",
      to: "Abu Dhabi (AUH)",
      departure: "Wednesday Apr 15, 9:45 AM",
      arrival: "Wednesday Apr 15, 3:05 PM",
      duration: "6h 20m",
      seats: "38A, 38B",
      confirmation: "8DCFFH"
    },
    {
      number: "EY21",
      operator: "Etihad Airways",
      from: "Abu Dhabi (AUH)",
      to: "Toronto (YYZ)",
      departure: "Thursday Apr 16, 2:15 AM",
      arrival: "Thursday Apr 16, 9:00 AM",
      duration: "14h 45m",
      seats: "70A, 70B",
      confirmation: "8DCFFH"
    }
  ],

  hotels: [
    {
      name: "Grand Millennium Al Wahda",
      city: "Abu Dhabi",
      address: "Haza Bin Zayed Street, Al Wahda Complex, Abu Dhabi",
      nights: 2,
      roomType: "Standard Room",
      cost: "Included with flight",
      confirmation: "EYH283203"
    },
    {
      name: "Grande Centre Point Sukhumvit 55",
      city: "Bangkok",
      address: "300 Sukhumvit Soi 55 (Thonglor), Bangkok",
      nights: 2,
      roomType: "Signature Deluxe",
      cost: "CA $361.00",
      confirmation: "72071195297563"
    },
    {
      name: "Proud Phu Fah Maerim",
      city: "Chiang Mai",
      address: "97/5 M. 1 Mae Rim-Samoeng Rd, Mae Rim, Chiang Mai",
      nights: 3,
      roomType: "Pool Suite",
      cost: "CA $734.97",
      confirmation: "72071197167185"
    },
    {
      name: "Marina Gallery Resort - KACHA Kalim Bay",
      city: "Phuket",
      address: "326/13 Phrabarami Road, Kathu, Patong, Phuket",
      nights: 3,
      roomType: "Deluxe Room with Pool View",
      cost: "CA $406.87",
      confirmation: "72071199640133"
    },
    {
      name: "The Park Nine Hotel Suvarnabhumi",
      city: "Bangkok",
      address: "599, 599/1 Lat Krabang Road, Lat Krabang, Bangkok",
      nights: 1,
      roomType: "Deluxe Double Room",
      cost: "CA $120.65",
      confirmation: "72071198449390"
    }
  ],
  
  itinerary: [
    {
      day: 1,
      date: "Friday, April 3",
      location: "Toronto → Abu Dhabi",
      flights: [
        {
          time: "3:10 PM",
          flight: "EY22",
          from: "Toronto (YYZ)",
          to: "Abu Dhabi (AUH)",
          duration: "13h 20m",
          seats: ["70A", "70B"],
          notes: "Overnight flight - arrives April 4 at 12:30 PM local",
          booking: "8DCFFH"
        }
      ]
    },
    {
      day: "2-3",
      date: "April 4-5",
      location: "Abu Dhabi Stopover",
      hotel: {
        name: "Grand Millennium Al Wahda",
        address: "Haza Bin Zayed Street, Al Wahda Complex, Abu Dhabi",
        dates: "Apr 4-6 (2 nights)",
        room: "Standard Room",
        confirmation: "EYH283203",
        amenities: ["24-hour check-in/check-out available"]
      }
    },
    {
      day: 4,
      date: "Monday, April 6",
      location: "Abu Dhabi → Bangkok",
      flights: [
        {
          time: "8:35 AM",
          flight: "EY406",
          from: "Abu Dhabi (AUH)",
          to: "Bangkok (BKK)",
          duration: "6h 35m",
          arrival: "6:10 PM Bangkok time",
          booking: "8DCFFH"
        }
      ],
      hotel: {
        name: "Grande Centre Point Sukhumvit 55",
        address: "300 Sukhumvit Soi 55 (Thonglor), Bangkok",
        dates: "Apr 6-8 (2 nights)",
        room: "Signature Deluxe",
        cost: "CA $361.00",
        confirmation: "72071195297563",
        notes: "Thonglor area - trendy neighborhood"
      }
    },
    {
      day: 5,
      date: "Tuesday, April 7",
      location: "Bangkok",
      activities: [
        "Grand Palace",
        "Wat Arun",
        "Chatuchak Market",
        "Street food tour"
      ],
      notes: "Full day to explore Bangkok!"
    },
    {
      day: 6,
      date: "Wednesday, April 8",
      location: "Bangkok → Chiang Mai",
      flights: [
        {
          time: "11:40 AM",
          flight: "TG106",
          from: "Bangkok (BKK)",
          to: "Chiang Mai (CNX)",
          duration: "1h 20m",
          booking: "EJI66L",
          airline: "Thai Airways",
          cost: "THB 3,400.00"
        }
      ],
      hotel: {
        name: "Proud Phu Fah Maerim",
        address: "97/5 M. 1 Mae Rim-Samoeng Rd, Mae Rim, Chiang Mai",
        dates: "Apr 8-11 (3 nights)",
        room: "Pool Suite",
        cost: "CA $734.97",
        confirmation: "72071197167185"
      }
    },
    {
      day: "7-8",
      date: "April 9-10",
      location: "Chiang Mai",
      activities: [
        "Doi Suthep Temple",
        "Old City temples",
        "Elephant Nature Park",
        "Night Bazaar",
        "Thai cooking class"
      ]
    },
    {
      day: 9,
      date: "Saturday, April 11",
      location: "Chiang Mai → Phuket",
      flights: [
        {
          time: "1:00 PM",
          flight: "FD3162",
          from: "Chiang Mai (CNX)",
          to: "Phuket (HKT)",
          duration: "2h",
          seats: ["24A", "24B"],
          booking: "TIIIPX",
          airline: "AirAsia",
          baggage: "25kg each"
        }
      ],
      hotel: {
        name: "Marina Gallery Resort - KACHA Kalim Bay",
        address: "326/13 Phrabarami Road, Kathu, Patong, Phuket",
        dates: "Apr 11-14 (3 nights)",
        room: "Deluxe Room with Pool View",
        cost: "CA $406.87",
        confirmation: "72071199640133"
      }
    },
    {
      day: "10-12",
      date: "April 12-13",
      location: "Phuket - SONGKRAN!",
      festival: "🎉 Songkran Festival April 13-15! Thai New Year",
      activities: [
        "Phi Phi Islands",
        "James Bond Island",
        "Big Buddha",
        "Beach hopping"
      ]
    },
    {
      day: 13,
      date: "Tuesday, April 14",
      location: "Phuket → Bangkok",
      flights: [
        {
          time: "4:05 PM",
          flight: "TG212",
          from: "Phuket (HKT)",
          to: "Bangkok (BKK)",
          duration: "1h 35m",
          seats: ["47A", "47B"],
          booking: "EJRMGG",
          airline: "Thai Airways",
          meals: "Hindu meals confirmed",
          baggage: "1 checked bag each"
        }
      ],
      hotel: {
        name: "The Park Nine Hotel Suvarnabhumi",
        address: "599, 599/1 Lat Krabang Road, Lat Krabang, Bangkok",
        dates: "Apr 14-15 (1 night)",
        room: "Deluxe Double Room",
        cost: "CA $120.65",
        confirmation: "72071198449390"
      }
    },
    {
      day: 14,
      date: "Wednesday, April 15",
      location: "Bangkok → Abu Dhabi → Toronto",
      flights: [
        {
          time: "9:45 AM",
          flight: "EY409",
          from: "Bangkok (BKK)",
          to: "Abu Dhabi (AUH)",
          duration: "6h 20m",
          seats: ["38A", "38B"],
          booking: "8DCFFH"
        },
        {
          time: "2:15 AM (April 16)",
          flight: "EY21",
          from: "Abu Dhabi (AUH)",
          to: "Toronto (YYZ)",
          duration: "14h 45m",
          seats: ["70A", "70B"],
          arrival: "9:00 AM Toronto time",
          layover: "~10 hour layover in Abu Dhabi",
          booking: "8DCFFH"
        }
      ]
    }
  ],

  confirmations: {
    etihad: "8DCFFH",
    shirin: "607 2414513542",
    zeel: "607 2414513541",
    thaiBKKtoCNX: "EJI66L",
    airAsiaCNXtoPhuket: "TIIIPX",
    thaiPhuketToBKK: "EJRMGG",
    grandMillennium: "EYH283203",
    grandeCentrePoint: "72071195297563",
    proudPhuFah: "72071197167185",
    marinaGallery: "72071199640133",
    parkNine: "72071198449390"
  },

  costs: {
    etihad_flights: "CA $3,282.04",
    thai_bkk_cnx: "CA $130.00",
    airasia_cnx_phuket: "CA $400.00",
    thai_phuket_bkk: "CA $336.00",
    abu_dhabi_hotel: "Included",
    bangkok_hotel_1: "CA $361.00",
    chiang_mai_hotel: "CA $734.97",
    phuket_hotel: "CA $406.87",
    bangkok_hotel_2: "CA $120.65"
  },

  importantNotes: [
    { icon: "🧳", title: "BAGGAGE", detail: "Etihad 23kg×2 bags each + carry-on" },
    { icon: "💦", title: "SONGKRAN", detail: "Waterproof phone case essential!" }
  ],

  songkran: {
    dates: "April 13-15, 2026",
    location: "Phuket",
    description: "Thai New Year celebration",
    whatToBring: [
      "📱 Waterproof phone case - MUST HAVE",
      "👕 Quick-dry clothes",
      "🧴 Sunscreen",
      "🔫 Water gun (buy in Thailand)",
      "👜 Waterproof bag for valuables"
    ],
    bestAreas: [
      { area: "Patong Beach", description: "Heart of Songkran celebrations" },
      { area: "Phuket Old Town", description: "Cultural events & parade" },
      { area: "Bangla Road", description: "Water fighting central!" }
    ]
  },

  dayTrips: [
    {
      name: "Phi Phi Islands",
      description: "Maya Bay, Monkey Beach, Snorkeling",
      duration: "Full Day",
      transport: "Speedboat",
      cost: "1500-2000 THB",
      tip: "Book via local operator"
    },
    {
      name: "James Bond Island",
      description: "Limestone karsts, Phang Nga Bay",
      duration: "Full Day",
      transport: "Longtail boat",
      cost: "1200-1800 THB",
      tip: "Visit early to avoid crowds"
    },
    {
      name: "Simba Islands",
      description: "Crystal clear water, snorkeling",
      duration: "Half/Full Day",
      transport: "Speedboat",
      cost: "1000-1500 THB",
      tip: "Less crowded than Phi Phi"
    },
    {
      name: "Raya Island",
      description: "Pristine beaches, diving",
      duration: "Full Day",
      transport: "Speedboat",
      cost: "1300-1800 THB",
      tip: "Bring underwater camera"
    }
  ],

  weather: [
    {
      city: "Bangkok",
      temp: "28-35°C",
      humidity: "70-80%",
      rain: "Low",
      tip: "Hot and humid, stay hydrated"
    },
    {
      city: "Chiang Mai",
      temp: "25-35°C",
      humidity: "50-70%",
      rain: "Low",
      tip: "Very smoky, wear mask outdoors"
    },
    {
      city: "Phuket",
      temp: "27-32°C",
      humidity: "75-85%",
      rain: "Low",
      tip: "Songkran = water everywhere!"
    }
  ],

  vegetarianGuide: [
    {
      name: "Broccoli Revolution",
      icon: "🥦",
      type: "Plant-based • $$",
      specialty: "Beyond Burger & Cold Pressed Juices",
      diet: "Vegan"
    },
    {
      name: "Vegan Thai at Gateway",
      icon: "🍛",
      type: "Thai • $",
      specialty: "Pad Thai & Green Curry",
      diet: "Vegan"
    },
    {
      name: "Dosa King",
      icon: "🫓",
      type: "South Indian • $",
      specialty: "Masala Dosa & Idli",
      diet: "Indian"
    },
    {
      name: "Chachawan",
      icon: "🍜",
      type: "Thai Northeast • $$",
      specialty: "Isaan salad bar",
      diet: "Vegan-friendly"
    }
  ],

  hiddenGems: [
    {
      name: "Rocket Coffeebar",
      icon: "☕",
      location: "Soi 11, Sukhumvit",
      vibe: "Scandinavian vibes, excellent single origin",
      specialty: "Flat White & Avocado Toast"
    },
    {
      name: "One Ounce for Onion",
      icon: "🧅",
      location: "Ladprao Soi 15",
      vibe: "Artisanal brews, hipster paradise",
      specialty: "Onion Latte"
    },
    {
      name: "The Commons",
      icon: "🍜",
      location: "Soi 17, Thonglor",
      vibe: "Urban food hall, great for brunch",
      specialty: "Soul Food"
    },
    {
      name: "Homland Cafe",
      icon: "🥗",
      location: "Sukhumvit 23",
      vibe: "Organic cafe in leafy courtyard",
      specialty: "Green Smoothie Bowl"
    }
  ],

  emergencyContacts: {
    embassy: {
      name: "Canadian Embassy Bangkok",
      address: "AIA Sathorn Tower, 11 South Sathorn Road",
      phone: "+66 2 646 4300",
      emergency: "+1 613 996 8885",
      hours: "Mon-Fri 8:30AM-12PM, 1-5PM"
    }
  },

  thaiPhrases: [
    { english: "Hello", thai: "สวัสดี", pronunciation: "Sawadee", roman: "sa-wa-dee" },
    { english: "Thank you", thai: "ขอบคุณ", pronunciation: "Khob Khun", roman: "kop-kun" },
    { english: "Yes / No", thai: "ใช่ / ไม่", pronunciation: "Chai / Mai", roman: "chai / mai" },
    { english: "How much?", thai: "เท่าไหร่", pronunciation: "Tao Rai", roman: "tao-rai" },
    { english: "Too expensive", thai: "แพงเกินไป", pronunciation: "Phaeng oern pai", roman: "paeng er pai" },
    { english: "Help!", thai: "ช่วยด้วย", pronunciation: "Chuay duay", roman: "chuay-doo-ay" },
    { english: "I don't understand", thai: "ไม่เข้าใจ", pronunciation: "Mai kao jai", roman: "mai kao-jai" },
    { english: "Where is...?", thai: "...อยู่ที่ไหน", pronunciation: "Yoo tee nai", roman: "yoo tee-nai" },
    { english: "Hospital", thai: "โรงพยาบาล", pronunciation: "Rong pha ya ban", roman: "rong-pa-ya-bahn" },
    { english: "Delicious", thai: "อร่อย", pronunciation: "A roi", roman: "ah-roi" },
    { english: "I'm vegetarian", thai: "ฉันเป็นมังสวิรัติ", pronunciation: "Chan pen mang sa wi rat", roman: "chan pen mang-sa-wi-rat" },
    { english: "Water", thai: "น้ำ", pronunciation: "Nam", roman: "nahm" },
    { english: "Bill please", thai: "เก็บเงิน", pronunciation: "Gep ngern", roman: "gep ngern" }
  ]
};
