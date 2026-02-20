import { useState } from 'react';
import { Trash2, Plus, ChevronDown } from 'lucide-react';

const CATEGORIES = ['Clothes', 'Toiletries', 'Electronics', 'Documents', 'Misc'];

export default function PackingList({ items, onAdd, onToggle, onDelete }) {
  const [expandedCategory, setExpandedCategory] = useState(CATEGORIES);
  const [newItems, setNewItems] = useState({});

  const toggleCategory = (category) => {
    setExpandedCategory(prev =>
      prev.includes(category)
        ? prev.filter(c => c !== category)
        : [...prev, category]
    );
  };

  const handleAddItem = (category) => {
    const text = newItems[category] || '';
    if (text.trim()) {
      onAdd(category, text);
      setNewItems(prev => ({ ...prev, [category]: '' }));
    }
  };

  const handleKeyPress = (e, category) => {
    if (e.key === 'Enter') {
      handleAddItem(category);
    }
  };

  const getCategoryItems = (category) => {
    return items.filter(item => item.category === category);
  };

  const totalItems = items.length;
  const packedItems = items.filter(item => item.packed).length;
  const completionPercent = totalItems > 0 ? (packedItems / totalItems) * 100 : 0;

  return (
    <div className="bg-white rounded-xl shadow-sm border border-slate-100 p-6">
      <div className="mb-6">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-lg font-semibold text-slate-800">Packing List</h2>
          <span className="text-sm font-medium text-slate-500">{packedItems}/{totalItems}</span>
        </div>
        
        {/* Progress Bar */}
        <div className="w-full bg-slate-100 rounded-full h-2 overflow-hidden">
          <div
            className="h-full bg-emerald-500 transition-all duration-500 rounded-full"
            style={{ width: `${completionPercent}%` }}
          />
        </div>
        <div className="text-xs text-slate-400 mt-2">
          {Math.round(completionPercent)}% packed
        </div>
      </div>

      {/* Categories */}
      <div className="space-y-4">
        {CATEGORIES.map((category) => {
          const categoryItems = getCategoryItems(category);
          const isExpanded = expandedCategory.includes(category);
          const categoryPacked = categoryItems.filter(item => item.packed).length;

          return (
            <div key={category} className="border border-slate-200 rounded-lg overflow-hidden">
              {/* Category Header */}
              <button
                onClick={() => toggleCategory(category)}
                className="w-full flex items-center justify-between p-4 hover:bg-slate-50 transition-colors"
              >
                <div className="flex items-center gap-3">
                  <ChevronDown
                    className={`w-5 h-5 text-slate-400 transition-transform ${
                      isExpanded ? 'rotate-0' : '-rotate-90'
                    }`}
                  />
                  <div className="text-left">
                    <div className="font-semibold text-slate-800">{category}</div>
                    <div className="text-xs text-slate-500">
                      {categoryPacked} of {categoryItems.length} packed
                    </div>
                  </div>
                </div>
                <div className="text-sm font-medium text-slate-500">
                  {categoryPacked}/{categoryItems.length}
                </div>
              </button>

              {/* Category Content */}
              {isExpanded && (
                <div className="border-t border-slate-200 bg-slate-50 p-4 space-y-3">
                  {/* Items List */}
                  {categoryItems.length > 0 ? (
                    <div className="space-y-2 mb-4">
                      {categoryItems.map((item) => (
                        <div
                          key={item.id}
                          className="flex items-center gap-3 p-2 bg-white rounded border border-slate-200 hover:border-slate-300 transition-colors group"
                        >
                          <input
                            type="checkbox"
                            checked={item.packed}
                            onChange={() => onToggle(item.id)}
                            className="w-5 h-5 text-emerald-500 bg-white border-slate-300 rounded cursor-pointer"
                          />
                          <span
                            className={`flex-1 text-sm ${
                              item.packed
                                ? 'text-slate-400 line-through'
                                : 'text-slate-700'
                            }`}
                          >
                            {item.name}
                          </span>
                          <button
                            onClick={() => onDelete(item.id)}
                            className="flex-shrink-0 p-1.5 text-slate-400 hover:text-red-500 hover:bg-red-50 rounded transition-colors opacity-0 group-hover:opacity-100"
                          >
                            <Trash2 className="w-4 h-4" />
                          </button>
                        </div>
                      ))}
                    </div>
                  ) : null}

                  {/* Add Item Input */}
                  <div className="flex gap-2 pt-2 border-t border-slate-200">
                    <input
                      type="text"
                      value={newItems[category] || ''}
                      onChange={(e) => setNewItems(prev => ({ ...prev, [category]: e.target.value }))}
                      onKeyPress={(e) => handleKeyPress(e, category)}
                      placeholder={`Add ${category.toLowerCase()} item...`}
                      className="flex-1 px-3 py-2 bg-white border border-slate-200 rounded text-sm text-slate-700 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500 transition-all"
                    />
                    <button
                      onClick={() => handleAddItem(category)}
                      className="flex items-center gap-2 px-3 py-2 bg-emerald-500 text-white font-medium rounded hover:bg-emerald-600 transition-colors flex-shrink-0"
                    >
                      <Plus className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}
