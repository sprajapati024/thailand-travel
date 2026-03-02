'use client';

import { useEffect, useState } from 'react';

const DESTINATIONS = [
  {
    name: 'Toronto',
    lat: 43.6532,
    lng: -79.3832,
    type: 'departure',
    date: 'April 3',
    activity: '✈️ Departure',
  },
  {
    name: 'Abu Dhabi',
    lat: 24.4539,
    lng: 54.3773,
    type: 'stopover',
    date: 'April 4-6',
    activity: '🏛️ Sheikh Zayed Mosque, Shopping',
  },
  {
    name: 'Bangkok',
    lat: 13.7563,
    lng: 100.5018,
    type: 'destination',
    date: 'April 6-8',
    activity: '🏰 Grand Palace, Songkran Festival 🎉',
  },
  {
    name: 'Chiang Mai',
    lat: 18.7883,
    lng: 98.9853,
    type: 'destination',
    date: 'April 8-11',
    activity: '🐘 Elephant Nature Park, Doi Suthep',
  },
  {
    name: 'Phuket',
    lat: 7.8804,
    lng: 98.3923,
    type: 'destination',
    date: 'April 11-14',
    activity: '🏖️ Phi Phi Islands, Beach hopping',
  },
  {
    name: 'Bangkok',
    lat: 13.7563,
    lng: 100.5018,
    type: 'return',
    date: 'April 14-15',
    activity: '🌙 Thonglor Nightlife, Songkran',
  },
  {
    name: 'Toronto',
    lat: 43.6532,
    lng: -79.3832,
    type: 'arrival',
    date: 'April 16',
    activity: '🏠 Home Sweet Home',
  },
];

const getIconColor = (type) => {
  switch (type) {
    case 'departure':
    case 'arrival':
      return '#6b7280';
    case 'stopover':
      return '#f59e0b';
    case 'destination':
      return '#10b981';
    case 'return':
      return '#3b82f6';
    default:
      return '#6b7280';
  }
};

export default function InteractiveMap() {
  const [MapComponents, setMapComponents] = useState(null);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
    
    // Dynamically import Leaflet and React-Leaflet only on client side
    async function loadMap() {
      const L = (await import('leaflet')).default;
      const { MapContainer, TileLayer, Marker, Popup, Polyline } = await import('react-leaflet');
      
      // Fix for default marker icons
      delete L.Icon.Default.prototype._getIconUrl;
      L.Icon.Default.mergeOptions({
        iconRetinaUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon-2x.png',
        iconUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png',
        shadowUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png',
      });

      const createCustomIcon = (type) => {
        const color = getIconColor(type);
        return L.divIcon({
          className: 'custom-marker',
          html: `<div style="
            background-color: ${color};
            width: 24px;
            height: 24px;
            border-radius: 50%;
            border: 3px solid white;
            box-shadow: 0 2px 6px rgba(0,0,0,0.3);
          "></div>`,
          iconSize: [24, 24],
          iconAnchor: [12, 12],
          popupAnchor: [0, -12],
        });
      };

      const centerLat = DESTINATIONS.reduce((sum, d) => sum + d.lat, 0) / DESTINATIONS.length;
      const centerLng = DESTINATIONS.reduce((sum, d) => sum + d.lng, 0) / DESTINATIONS.length;
      const routePositions = DESTINATIONS.map(d => [d.lat, d.lng]);

      setMapComponents({
        L,
        MapContainer,
        TileLayer,
        Marker,
        Popup,
        Polyline,
        createCustomIcon,
        centerLat,
        centerLng,
        routePositions,
      });
    }

    loadMap();
  }, []);

  if (!isMounted) {
    return (
      <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-6">
        <h2 className="text-xl font-semibold text-slate-800 mb-4 flex items-center gap-2">
          🗺️ Interactive Trip Map
        </h2>
        <div className="h-96 bg-slate-100 rounded-lg flex items-center justify-center">
          <p className="text-slate-500">Loading map...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden">
      <div className="p-4 border-b border-slate-100">
        <h2 className="text-xl font-semibold text-slate-800 flex items-center gap-2">
          🗺️ Interactive Trip Map
        </h2>
        <p className="text-sm text-slate-500 mt-1">Your journey from Toronto → Thailand → Toronto</p>
      </div>
      
      <div className="relative h-96">
        {MapComponents ? (
          <MapComponents.MapContainer
            center={[MapComponents.centerLat, MapComponents.centerLng]}
            zoom={4}
            style={{ height: '100%', width: '100%' }}
            scrollWheelZoom={true}
          >
            <MapComponents.TileLayer
              attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            
            <MapComponents.Polyline
              positions={MapComponents.routePositions}
              color="#3b82f6"
              weight={3}
              opacity={0.7}
              dashArray="10, 10"
            />
            
            {DESTINATIONS.map((dest, index) => (
              <MapComponents.Marker
                key={`${dest.name}-${index}`}
                position={[dest.lat, dest.lng]}
                icon={MapComponents.createCustomIcon(dest.type)}
              >
                <MapComponents.Popup>
                  <div className="text-center min-w-[150px]">
                    <h3 className="font-bold text-slate-800">{dest.name}</h3>
                    <p className="text-sm text-slate-600">{dest.date}</p>
                    <p className="text-sm text-emerald-600 mt-1">{dest.activity}</p>
                  </div>
                </MapComponents.Popup>
              </MapComponents.Marker>
            ))}
          </MapComponents.MapContainer>
        ) : (
          <div className="h-full flex items-center justify-center bg-slate-100">
            <p className="text-slate-500">Loading map...</p>
          </div>
        )}
        
        {/* Legend */}
        <div className="absolute bottom-4 left-4 bg-white/95 backdrop-blur-sm rounded-lg p-3 shadow-lg z-[1000]">
          <div className="text-xs font-medium text-slate-600 mb-2">Legend</div>
          <div className="space-y-1.5">
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded-full bg-gray-500"></div>
              <span className="text-xs text-slate-600">Departure/Return</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded-full bg-amber-500"></div>
              <span className="text-xs text-slate-600">Stopover</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded-full bg-emerald-500"></div>
              <span className="text-xs text-slate-600">Destination</span>
            </div>
          </div>
        </div>
      </div>
      
      {/* Destination cards below map */}
      <div className="p-4 bg-slate-50">
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-2">
          {DESTINATIONS.slice(1, -1).map((dest, idx) => (
            <div
              key={idx}
              className={`p-2 rounded-lg text-center transition-all hover:scale-105 cursor-pointer ${
                dest.type === 'destination' 
                  ? 'bg-emerald-100 border border-emerald-200' 
                  : 'bg-amber-100 border border-amber-200'
              }`}
            >
              <div className="text-sm font-semibold text-slate-800">{dest.name}</div>
              <div className="text-xs text-slate-500">{dest.date.split('-')[0]}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
