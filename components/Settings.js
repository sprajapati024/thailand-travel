import { Download, Trash2, RefreshCw } from 'lucide-react';

export default function Settings({ onExport, onClear }) {
  const handleExport = () => {
    const packingList = localStorage.getItem('thailand-packing-list');
    const todoList = localStorage.getItem('thailand-todo-list');
    
    const data = {
      packingList: packingList ? JSON.parse(packingList) : [],
      todoList: todoList ? JSON.parse(todoList) : [],
      exportedAt: new Date().toISOString(),
    };

    const dataStr = JSON.stringify(data, null, 2);
    const dataBlob = new Blob([dataStr], { type: 'application/json' });
    const url = URL.createObjectURL(dataBlob);
    const link = document.createElement('a');
    link.href = url;
    link.download = `thailand-trip-data-${new Date().toISOString().split('T')[0]}.json`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
  };

  const handleClearAll = () => {
    if (confirm('Are you sure? This will delete all your packing list and todo list items. This action cannot be undone.')) {
      localStorage.removeItem('thailand-packing-list');
      localStorage.removeItem('thailand-todo-list');
      window.location.reload();
    }
  };

  return (
    <div className="space-y-6">
      {/* App Settings */}
      <div className="bg-white rounded-xl shadow-sm border border-slate-100 p-6">
        <h2 className="text-lg font-semibold text-slate-800 mb-6">Settings</h2>
        
        <div className="space-y-4">
          {/* Export Data */}
          <div className="flex items-center justify-between p-4 border border-slate-200 rounded-lg hover:bg-slate-50 transition-colors">
            <div className="flex items-center gap-3">
              <Download className="w-5 h-5 text-blue-500" />
              <div>
                <div className="font-medium text-slate-800">Export Data</div>
                <div className="text-sm text-slate-500">Download your packing and todo lists as JSON</div>
              </div>
            </div>
            <button
              onClick={handleExport}
              className="px-4 py-2 bg-blue-500 text-white font-medium rounded-lg hover:bg-blue-600 transition-colors flex-shrink-0"
            >
              Export
            </button>
          </div>

          {/* Clear All Data */}
          <div className="flex items-center justify-between p-4 border border-slate-200 rounded-lg hover:bg-red-50 transition-colors">
            <div className="flex items-center gap-3">
              <Trash2 className="w-5 h-5 text-red-500" />
              <div>
                <div className="font-medium text-slate-800">Clear All Data</div>
                <div className="text-sm text-slate-500">Delete all packing and todo list items</div>
              </div>
            </div>
            <button
              onClick={handleClearAll}
              className="px-4 py-2 bg-red-500 text-white font-medium rounded-lg hover:bg-red-600 transition-colors flex-shrink-0"
            >
              Clear
            </button>
          </div>
        </div>
      </div>

      {/* About */}
      <div className="bg-white rounded-xl shadow-sm border border-slate-100 p-6">
        <h2 className="text-lg font-semibold text-slate-800 mb-4">About</h2>
        
        <div className="space-y-4 text-sm text-slate-600">
          <div>
            <div className="font-medium text-slate-800 mb-1">Thailand 2026 Trip Dashboard</div>
            <div>Version 3.0.0</div>
          </div>

          <div className="pt-4 border-t border-slate-200">
            <div className="font-medium text-slate-800 mb-2">Trip Details</div>
            <div className="space-y-1">
              <div><span className="text-slate-500">Duration:</span> April 3-17, 2026 (15 days)</div>
              <div><span className="text-slate-500">Travelers:</span> 2 people</div>
              <div><span className="text-slate-500">Destinations:</span> Bangkok, Chiang Mai, Phuket</div>
            </div>
          </div>

          <div className="pt-4 border-t border-slate-200">
            <div className="font-medium text-slate-800 mb-2">Data Storage</div>
            <div>All your data is stored locally in your browser using LocalStorage. No data is sent to any server.</div>
          </div>
        </div>
      </div>

      {/* Storage Info */}
      <div className="bg-gradient-to-r from-blue-50 to-slate-50 rounded-xl border border-blue-200 p-6">
        <div className="flex items-start gap-3">
          <RefreshCw className="w-5 h-5 text-blue-500 mt-1 flex-shrink-0" />
          <div>
            <div className="font-medium text-slate-800 mb-1">Privacy & Data</div>
            <div className="text-sm text-slate-600">
              This dashboard uses browser LocalStorage to persist your packing list and todo items. Your data stays on your device and is never sent to any server. You can export or clear your data at any time using the controls above.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
