import { useEffect, useState } from 'react';
import { Plane } from 'lucide-react';

export default function CountdownTimer() {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
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

        setTimeLeft({ days, hours, minutes, seconds });
      } else {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
      }
    };

    calculateTimeLeft();
    const timer = setInterval(calculateTimeLeft, 1000);

    return () => clearInterval(timer);
  }, []);

  const TimeUnit = ({ value, label }) => (
    <div className="flex flex-col items-center">
      <div className="bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl p-4 min-w-[70px] lg:min-w-[90px] shadow-lg shadow-blue-500/20">
        <div className="text-3xl lg:text-5xl font-bold text-white text-center tabular-nums">
          {String(value).padStart(2, '0')}
        </div>
      </div>
      <div className="text-xs lg:text-sm font-medium text-slate-500 uppercase tracking-wider mt-3">
        {label}
      </div>
    </div>
  );

  return (
    <div className="bg-white rounded-xl shadow-sm border border-slate-100 p-6 lg:p-8 overflow-hidden relative">
      {/* Background decoration */}
      <div className="absolute -top-12 -right-12 w-32 h-32 bg-blue-100 rounded-full blur-3xl"></div>
      <div className="absolute -bottom-8 -left-8 w-24 h-24 bg-violet-100 rounded-full blur-2xl"></div>
      
      <div className="relative z-10">
        {/* Header */}
        <div className="flex items-center justify-center gap-2 mb-6 lg:mb-8">
          <Plane className="w-5 h-5 text-blue-500" />
          <span className="text-sm lg:text-base font-medium text-slate-500 uppercase tracking-widest">
            Countdown to Departure
          </span>
        </div>
        
        {/* Countdown Units */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 lg:gap-6 mb-6 lg:mb-8">
          <TimeUnit value={timeLeft.days} label="Days" />
          <TimeUnit value={timeLeft.hours} label="Hours" />
          <TimeUnit value={timeLeft.minutes} label="Minutes" />
          <TimeUnit value={timeLeft.seconds} label="Seconds" />
        </div>

        {/* Subtitle */}
        <div className="text-center pt-4 border-t border-slate-100">
          <p className="text-sm lg:text-base text-slate-600">
            <span className="font-medium">April 3, 2026</span> — Flight EY22 to Thailand
          </p>
        </div>
      </div>
    </div>
  );
}
