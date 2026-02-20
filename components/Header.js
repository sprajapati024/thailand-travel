import { Search, Printer, FileText, Menu } from 'lucide-react';

export default function Header({ title, onMenuClick }) {
  return (
    <header className="h-16 bg-white border-b border-slate-200 flex items-center justify-between px-4 lg:px-6">
      {/* Mobile Menu Button */}
      <button 
        onClick={onMenuClick}
        className="lg:hidden p-2 -ml-2 text-slate-600 hover:bg-slate-100 rounded-lg"
      >
        <Menu className="w-5 h-5" />
      </button>

      {/* Page Title (mobile) */}
      <h1 className="text-lg font-semibold text-slate-800 lg:hidden">{title}</h1>
      <div className="hidden lg:block"></div>

      {/* Search Bar (decorative) */}
      <div className="hidden md:flex items-center flex-1 max-w-md mx-4">
        <div className="relative w-full">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
          <input
            type="text"
            placeholder="Search..."
            className="w-full pl-10 pr-4 py-2 bg-slate-100 border-0 rounded-lg text-sm text-slate-700 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500/20"
          />
        </div>
      </div>

      {/* Action Buttons */}
      <div className="flex items-center gap-2">
        <button className="flex items-center gap-2 px-3 py-2 text-sm font-medium text-slate-600 hover:bg-slate-100 rounded-lg transition-colors">
          <Printer className="w-4 h-4" />
          <span className="hidden sm:inline">Print</span>
        </button>
        <button className="flex items-center gap-2 px-3 py-2 text-sm font-medium text-white bg-blue-500 hover:bg-blue-600 rounded-lg transition-colors">
          <FileText className="w-4 h-4" />
          <span className="hidden sm:inline">Summary</span>
        </button>
      </div>
    </header>
  );
}
