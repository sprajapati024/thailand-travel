import { useState, useEffect } from 'react';
import { Cloud, Sun, CloudRain, Wind, Droplets, Thermometer, MapPin } from 'lucide-react';

// Thailand destination data with coordinates for weather simulation
const destinations = [
  { name: 'Bangkok', region: 'Central', lat: 13.7563, lon: 100.5018 },
  { name: 'Chiang Mai', region: 'North', lat: 18.7883, lon: 98.9853 },
  { name: 'Phuket', region: 'South', lat: 7.8804, lon: 98.3923 },
];

// Simulated weather data (April typical weather patterns)
const getWeatherData = (destination, dateOffset = 0) => {
  const baseWeather = {
    Bangkok: { 
      temp: 34, 
      humidity: 75, 
      wind: 12, 
      condition: 'partly-cloudy',
      rainChance: 40,
      description: 'Partly Cloudy'
    },
    'Chiang Mai': { 
      temp: 36, 
      humidity: 55, 
      wind: 8, 
      condition: 'sunny',
      rainChance: 15,
      description: 'Hot & Sunny'
    },
    Phuket: { 
      temp: 32, 
      humidity: 80, 
      wind: 15, 
      condition: 'rainy',
      rainChance: 60,
      description: 'Showers Possible'
    }
  };
  
  const weather = baseWeather[destination.name];
  // Add some variation based on date offset
  const variation = Math.sin(dateOffset * 0.5) * 2;
  return {
    ...weather,
    temp: Math.round(weather.temp + variation),
    humidity: Math.min(100, Math.max(0, weather.humidity + Math.round(variation * 2))),
  };
};

const WeatherIcon = ({ condition, size = 24, className = '' }) => {
  const iconProps = { size, className };
  
  switch (condition) {
    case 'sunny':
      return <Sun {...iconProps} className={`text-yellow-500 ${className}`} />;
    case 'rainy':
      return <CloudRain {...iconProps} className={`text-blue-500 ${className}`} />;
    case 'partly-cloudy':
    default:
      return <Cloud {...iconProps} className={`text-slate-400 ${className}`} />;
  }
};

export default function Weather() {
  const [selectedDestination, setSelectedDestination] = useState(destinations[0]);
  const [weatherData, setWeatherData] = useState(null);
  const [dateOffset, setDateOffset] = useState(0);
  const [loading, setLoading] = useState(true);

  // Calculate trip date
  const tripStart = new Date('2026-04-03');
  const today = new Date();
  const daysUntilTrip = Math.ceil((tripStart - today) / (1000 * 60 * 60 * 24));

  useEffect(() => {
    // Simulate loading
    setLoading(true);
    setTimeout(() => {
      setWeatherData(getWeatherData(selectedDestination, dateOffset));
      setLoading(false);
    }, 300);
  }, [selectedDestination, dateOffset]);

  const getWeatherAdvice = () => {
    if (!weatherData) return [];
    
    const advice = [];
    
    if (weatherData.temp > 33) {
      advice.push({ type: 'warning', text: 'Very hot! Stay hydrated and take breaks in AC.' });
    }
    
    if (weatherData.rainChance > 50) {
      advice.push({ type: 'info', text: 'High chance of rain - pack a compact umbrella.' });
    }
    
    if (weatherData.humidity > 70) {
      advice.push({ type: 'tip', text: 'High humidity - light, breathable clothing recommended.' });
    }
    
    // Songkran check (April 13-15)
    const tripDays = 14; // April 3-17
    const songkranDates = [10, 11, 12, 13, 14, 15]; // Songkran period
    advice.push({ type: 'event', text: '🎉 Songkran (Thai New Year) is April 13-15! Expect water fights!' });
    
    return advice;
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="bg-gradient-to-r from-blue-500 to-violet-500 rounded-2xl p-6 text-white">
        <h2 className="text-2xl font-bold mb-2">Thailand Weather</h2>
        <p className="text-blue-100">
          Your trip starts in <span className="font-bold">{daysUntilTrip}</span> days (April 3-17, 2026)
        </p>
      </div>

      {/* Destination Selector */}
      <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-4">
        <label className="block text-sm font-medium text-slate-700 mb-3">
          Select Destination
        </label>
        <div className="grid grid-cols-3 gap-3">
          {destinations.map((dest) => (
            <button
              key={dest.name}
              onClick={() => setSelectedDestination(dest)}
              className={`
                p-3 rounded-lg text-center transition-all duration-200
                ${selectedDestination.name === dest.name 
                  ? 'bg-blue-50 border-2 border-blue-500 text-blue-700' 
                  : 'bg-slate-50 border-2 border-transparent hover:bg-slate-100'
                }
              `}
            >
              <MapPin className={`w-4 h-4 mx-auto mb-1 ${selectedDestination.name === dest.name ? 'text-blue-500' : 'text-slate-400'}`} />
              <span className="text-sm font-medium">{dest.name}</span>
              <span className="block text-xs text-slate-500">{dest.region}</span>
            </button>
          ))}
        </div>
      </div>

      {/* Day Slider */}
      <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-4">
        <div className="flex justify-between items-center mb-2">
          <label className="text-sm font-medium text-slate-700">Day of Trip</label>
          <span className="text-sm font-bold text-blue-600">
            Day {dateOffset + 1} (April {3 + dateOffset})
          </span>
        </div>
        <input
          type="range"
          min="0"
          max="13"
          value={dateOffset}
          onChange={(e) => setDateOffset(parseInt(e.target.value))}
          className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-blue-500"
        />
        <div className="flex justify-between text-xs text-slate-500 mt-1">
          <span>Apr 3</span>
          <span>Apr 10</span>
          <span>Apr 17</span>
        </div>
      </div>

      {/* Weather Display */}
      {loading ? (
        <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-8 text-center">
          <div className="animate-pulse">
            <div className="h-8 w-8 bg-slate-200 rounded-full mx-auto mb-4"></div>
            <div className="h-4 bg-slate-200 rounded w-3/4 mx-auto"></div>
          </div>
        </div>
      ) : weatherData && (
        <div className="bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden">
          {/* Main Weather */}
          <div className="p-6 bg-gradient-to-br from-slate-50 to-blue-50">
            <div className="flex items-center justify-between">
              <div>
                <div className="flex items-center gap-2 mb-1">
                  <WeatherIcon condition={weatherData.condition} size={32} />
                  <span className="text-4xl font-bold text-slate-800">{weatherData.temp}°C</span>
                </div>
                <p className="text-lg text-slate-600 font-medium">{weatherData.description}</p>
              </div>
              <div className="text-right">
                <p className="text-sm text-slate-500">{selectedDestination.name}</p>
                <p className="text-xs text-slate-400">Thailand</p>
              </div>
            </div>
          </div>

          {/* Weather Details */}
          <div className="grid grid-cols-3 gap-4 p-4 border-t border-slate-100">
            <div className="text-center">
              <Droplets className="w-5 h-5 mx-auto text-blue-400 mb-1" />
              <p className="text-lg font-semibold text-slate-800">{weatherData.humidity}%</p>
              <p className="text-xs text-slate-500">Humidity</p>
            </div>
            <div className="text-center">
              <Wind className="w-5 h-5 mx-auto text-slate-400 mb-1" />
              <p className="text-lg font-semibold text-slate-800">{weatherData.wind} km/h</p>
              <p className="text-xs text-slate-500">Wind</p>
            </div>
            <div className="text-center">
              <CloudRain className="w-5 h-5 mx-auto text-blue-400 mb-1" />
              <p className="text-lg font-semibold text-slate-800">{weatherData.rainChance}%</p>
              <p className="text-xs text-slate-500">Rain Chance</p>
            </div>
          </div>
        </div>
      )}

      {/* Weather Advice */}
      <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-4">
        <h3 className="text-lg font-semibold text-slate-800 mb-3">Travel Tips</h3>
        <div className="space-y-2">
          {getWeatherAdvice().map((advice, idx) => (
            <div
              key={idx}
              className={`
                p-3 rounded-lg text-sm
                ${advice.type === 'warning' ? 'bg-amber-50 text-amber-700 border border-amber-200' : ''}
                ${advice.type === 'info' ? 'bg-blue-50 text-blue-700 border border-blue-200' : ''}
                ${advice.type === 'tip' ? 'bg-green-50 text-green-700 border border-green-200' : ''}
                ${advice.type === 'event' ? 'bg-purple-50 text-purple-700 border border-purple-200' : ''}
              `}
            >
              {advice.text}
            </div>
          ))}
        </div>
      </div>

      {/* Quick Forecast for All Destinations */}
      <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-4">
        <h3 className="text-lg font-semibold text-slate-800 mb-3">All Destinations Overview</h3>
        <div className="space-y-3">
          {destinations.map((dest) => {
            const weather = getWeatherData(dest, dateOffset);
            return (
              <div key={dest.name} className="flex items-center justify-between p-3 bg-slate-50 rounded-lg">
                <div className="flex items-center gap-3">
                  <WeatherIcon condition={weather.condition} size={20} />
                  <div>
                    <p className="font-medium text-slate-800">{dest.name}</p>
                    <p className="text-xs text-slate-500">{dest.region}</p>
                  </div>
                </div>
                <div className="text-right">
                  <p className="font-semibold text-slate-800">{weather.temp}°C</p>
                  <p className="text-xs text-slate-500">{weather.description}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
