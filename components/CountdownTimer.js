import { useEffect, useState } from 'react';

export default function CountdownTimer() {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
    percentDays: 0
  });

  useEffect(() => {
    const calculateTimeLeft = () => {
      // Trip departs April 3, 2026 at 3:10 PM
      const tripDate = new Date('2026-04-03T15:10:00').getTime();
      const now = new Date().getTime();
      const distance = tripDate - now;

      if (distance > 0) {
        const days = Math.floor(distance / (1000 * 60 * 60 * 24));
        const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((distance % (1000 * 60)) / 1000);
        
        // Calculate percentage of total 14-day trip already "locked in"
        const totalTripDays = 14;
        const percentDays = Math.round((days / totalTripDays) * 100);

        setTimeLeft({
          days,
          hours,
          minutes,
          seconds,
          percentDays
        });
      } else {
        setTimeLeft({
          days: 0,
          hours: 0,
          minutes: 0,
          seconds: 0,
          percentDays: 0
        });
      }
    };

    calculateTimeLeft();
    const timer = setInterval(calculateTimeLeft, 1000);

    return () => clearInterval(timer);
  }, []);

  const TimeUnit = ({ value, label }) => (
    <div className="flex flex-col items-center">
      <div className="bg-neutral-900 border-2 border-amber-500 rounded-lg p-3 sm:p-4 min-w-16 sm:min-w-20">
        <div className="text-2xl sm:text-4xl font-bold font-mono text-amber-500 text-center">
          {String(value).padStart(2, '0')}
        </div>
      </div>
      <div className="text-xs sm:text-sm text-neutral-400 uppercase tracking-widest mt-2 font-mono">
        {label}
      </div>
    </div>
  );

  return (
    <div className="space-y-6">
      {/* Main Countdown */}
      <div className="border border-amber-500/30 bg-gradient-to-br from-neutral-900 to-black p-6 sm:p-8 rounded-lg overflow-hidden relative">
        {/* Background glow effect */}
        <div className="absolute -top-20 -right-20 w-40 h-40 bg-amber-500/10 rounded-full blur-3xl"></div>
        
        <div className="relative z-10">
          <h2 className="text-lg sm:text-xl font-mono text-neutral-400 mb-6 uppercase tracking-widest">
            ✈️ Time to Thailand
          </h2>
          
          {/* Countdown Units */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4 mb-8">
            <TimeUnit value={timeLeft.days} label="Days" />
            <TimeUnit value={timeLeft.hours} label="Hours" />
            <TimeUnit value={timeLeft.minutes} label="Minutes" />
            <TimeUnit value={timeLeft.seconds} label="Seconds" />
          </div>

          {/* Detailed text */}
          <div className="text-center pt-4 border-t border-neutral-800">
            <p className="text-sm sm:text-base text-neutral-300 font-mono">
              Departure: <span className="text-amber-500 font-bold">Friday, April 3, 2026 @ 3:10 PM</span>
            </p>
            <p className="text-xs text-neutral-500 mt-2">EY22 • Toronto → Abu Dhabi</p>
          </div>
        </div>
      </div>

      {/* Trip Progress Bar */}
      <div className="border border-neutral-800 p-4 sm:p-6 rounded-lg">
        <div className="flex justify-between items-center mb-3">
          <span className="text-sm font-mono text-neutral-400 uppercase">14-Day Trip</span>
          <span className="text-xs font-mono text-amber-500">{timeLeft.percentDays}% wait time remaining</span>
        </div>
        <div className="w-full bg-neutral-900 rounded-full h-2 overflow-hidden">
          <div 
            className="h-full bg-gradient-to-r from-amber-500 to-amber-600 rounded-full transition-all duration-1000"
            style={{ width: `${100 - timeLeft.percentDays}%` }}
          ></div>
        </div>
        <p className="text-xs text-neutral-500 mt-3">
          {timeLeft.days > 0 
            ? `Get ready! ${timeLeft.days} days to pack, plan & get excited! 🎉`
            : 'The adventure has begun! Have an amazing trip! 🌴'
          }
        </p>
      </div>

      {/* Quick Trip Facts */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div className="border border-neutral-800 p-4 rounded-lg">
          <div className="text-xs text-neutral-500 uppercase tracking-wide mb-2">Duration</div>
          <div className="text-xl sm:text-2xl font-mono font-bold text-white">14 Days</div>
          <div className="text-xs text-neutral-400 mt-1">Apr 3-17, 2026</div>
        </div>
        <div className="border border-neutral-800 p-4 rounded-lg">
          <div className="text-xs text-neutral-500 uppercase tracking-wide mb-2">Highlight</div>
          <div className="text-xl sm:text-2xl font-mono font-bold text-amber-500">Songkran!</div>
          <div className="text-xs text-neutral-400 mt-1">Apr 13-15 in Phuket</div>
        </div>
      </div>
    </div>
  );
}
