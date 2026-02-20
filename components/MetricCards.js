import { Calendar, Package, CheckCircle, MapPin } from 'lucide-react';

export default function MetricCards({ daysUntil, packedCount, totalItems, tasksDone, totalTasks, destinations }) {
  const cards = [
    {
      id: 'days',
      label: 'Days Until Trip',
      value: daysUntil,
      icon: Calendar,
      color: 'blue',
    },
    {
      id: 'packed',
      label: 'Items Packed',
      value: `${packedCount}/${totalItems}`,
      icon: Package,
      color: 'green',
      progress: totalItems > 0 ? (packedCount / totalItems) * 100 : 0,
    },
    {
      id: 'tasks',
      label: 'Tasks Done',
      value: `${tasksDone}/${totalTasks}`,
      icon: CheckCircle,
      color: 'purple',
      progress: totalTasks > 0 ? (tasksDone / totalTasks) * 100 : 0,
    },
    {
      id: 'destinations',
      label: 'Destinations',
      value: destinations,
      icon: MapPin,
      color: 'violet',
    },
  ];

  const colorClasses = {
    blue: {
      bg: 'bg-blue-50',
      text: 'text-blue-600',
      icon: 'bg-blue-100 text-blue-600',
      progress: 'bg-blue-500',
    },
    green: {
      bg: 'bg-emerald-50',
      text: 'text-emerald-600',
      icon: 'bg-emerald-100 text-emerald-600',
      progress: 'bg-emerald-500',
    },
    purple: {
      bg: 'bg-violet-50',
      text: 'text-violet-600',
      icon: 'bg-violet-100 text-violet-600',
      progress: 'bg-violet-500',
    },
    violet: {
      bg: 'bg-purple-50',
      text: 'text-purple-600',
      icon: 'bg-purple-100 text-purple-600',
      progress: 'bg-purple-500',
    },
  };

  return (
    <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
      {cards.map((card) => {
        const Icon = card.icon;
        const colors = colorClasses[card.color];
        
        return (
          <div
            key={card.id}
            className="bg-white rounded-xl shadow-sm border border-slate-100 p-4 hover:shadow-md hover:-translate-y-0.5 transition-all duration-200"
          >
            {/* Icon & Value */}
            <div className="flex items-start justify-between mb-3">
              <div className={`p-2 rounded-lg ${colors.icon}`}>
                <Icon className="w-5 h-5" />
              </div>
            </div>
            
            <div className="text-2xl lg:text-3xl font-bold text-slate-800 mb-1">
              {card.value}
            </div>
            <div className="text-xs font-medium text-slate-500 uppercase tracking-wide">
              {card.label}
            </div>

            {/* Progress Bar (for packed & tasks) */}
            {card.progress !== undefined && (
              <div className="mt-3">
                <div className="w-full bg-slate-100 rounded-full h-1.5 overflow-hidden">
                  <div
                    className={`h-full rounded-full transition-all duration-500 ${colors.progress}`}
                    style={{ width: `${card.progress}%` }}
                  />
                </div>
                <div className="text-xs text-slate-400 mt-1">
                  {Math.round(card.progress)}% complete
                </div>
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}
