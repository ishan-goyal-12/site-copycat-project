
import { Search, Settings, Bell, User } from "lucide-react";

export function Header() {
  return (
    <div className="flex items-center justify-between mb-8">
      <div>
        <h1 className="text-2xl font-semibold text-jaida-purple">Analytics</h1>
        <p className="text-gray-500">Welcome back. Let's get back to work.</p>
      </div>
      
      <div className="flex items-center gap-4">
        <div className="relative">
          <div className="flex items-center px-3 py-2 bg-white border rounded-lg w-64">
            <Search size={18} className="text-gray-400 mr-2" />
            <input
              type="text"
              placeholder="Search Dashboard"
              className="flex-1 bg-transparent border-none outline-none text-sm"
            />
          </div>
        </div>
        
        <button className="p-2 text-gray-500 hover:bg-gray-100 rounded-lg">
          <Settings size={20} />
        </button>
        
        <div className="relative">
          <button className="p-2 text-gray-500 hover:bg-gray-100 rounded-lg">
            <Bell size={20} />
          </button>
          <span className="absolute top-0 right-0 h-4 w-4 bg-red-500 rounded-full text-white text-xs flex items-center justify-center">
            4
          </span>
        </div>
        
        <button className="p-2 text-gray-500 hover:bg-gray-100 rounded-lg">
          <User size={20} />
        </button>
      </div>
    </div>
  );
}
