import { Menu, Search, Mic, Bell, User } from 'lucide-react';

function Navbar() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur border-b border-gray-200">
      <div className="mx-auto max-w-[1400px] px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        {/* Left: Logo */}
        <div className="flex items-center gap-3">
          <button className="p-2 rounded-full hover:bg-gray-100">
            <Menu className="w-5 h-5" />
          </button>
          <div className="flex items-center gap-1">
            <div className="w-7 h-7 bg-red-600 rounded-[6px] flex items-center justify-center">
              <span className="text-white font-bold text-sm">▶</span>
            </div>
            <span className="font-semibold tracking-tight text-lg">YouView</span>
          </div>
        </div>

        {/* Center: Search */}
        <div className="hidden md:flex items-center flex-1 max-w-2xl mx-6">
          <div className="flex w-full">
            <input
              type="text"
              placeholder="Search"
              className="w-full border border-gray-300 rounded-l-full px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500/40"
            />
            <button className="px-4 py-2 border border-gray-300 border-l-0 rounded-r-full bg-gray-100 hover:bg-gray-200">
              <Search className="w-5 h-5" />
            </button>
          </div>
          <button className="ml-3 p-2 rounded-full hover:bg-gray-100">
            <Mic className="w-5 h-5" />
          </button>
        </div>

        {/* Right: Actions */}
        <div className="flex items-center gap-2 sm:gap-3">
          <button className="p-2 rounded-full hover:bg-gray-100">
            <Bell className="w-5 h-5" />
          </button>
          <button className="ml-1 px-3 py-1.5 rounded-full bg-gray-900 text-white text-sm flex items-center gap-1 hover:bg-black">
            <User className="w-4 h-4" />
            <span className="hidden sm:inline">Sign in</span>
          </button>
        </div>
      </div>
    </header>
  );
}

export default Navbar;
