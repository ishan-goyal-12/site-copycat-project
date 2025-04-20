
import { Settings } from "lucide-react";

interface StatusCardProps {
  percentage: number;
  level: string;
  spent: number;
  total: number;
}

export function StatusCard({ percentage, level, spent, total }: StatusCardProps) {
  return (
    <div className="bg-white rounded-xl p-5 shadow-sm">
      <div className="flex items-center justify-between mb-4">
        <h2 className="font-semibold text-lg">Your Professional Status</h2>
        <div className="flex gap-2">
          <button className="p-1 text-gray-400 hover:text-gray-600">
            <span className="sr-only">List View</span>
            <svg width="20" height="20" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
            </svg>
          </button>
          <button className="p-1 text-gray-400 hover:text-gray-600">
            <Settings size={18} />
          </button>
        </div>
      </div>
      
      <div className="flex gap-8 items-center">
        <div className="relative w-36 h-36">
          {/* Create a circular progress with multiple colored segments */}
          <svg className="w-full h-full" viewBox="0 0 100 100">
            {/* Background circle */}
            <circle 
              cx="50" 
              cy="50" 
              r="40" 
              fill="none" 
              stroke="#f0f0f0" 
              strokeWidth="10" 
            />
            
            {/* Purple segment (25% of the circle) */}
            <circle 
              cx="50" 
              cy="50" 
              r="40" 
              fill="none" 
              stroke="#5D4DB1" 
              strokeWidth="10" 
              strokeDasharray={`${Math.PI * 80 * 0.25} ${Math.PI * 80 * 0.75}`}
              strokeDashoffset={Math.PI * 80 * 0.25}
              transform="rotate(-90 50 50)"
              className="animate-[progress_1s_ease-out_forwards]"
            />
            
            {/* Coral segment (15% of the circle) */}
            <circle 
              cx="50" 
              cy="50" 
              r="40" 
              fill="none" 
              stroke="#FF7E65" 
              strokeWidth="10" 
              strokeDasharray={`${Math.PI * 80 * 0.15} ${Math.PI * 80 * 0.85}`}
              strokeDashoffset={Math.PI * 80 * 0.15}
              transform="rotate(0 50 50)"
              className="animate-[progress_1.2s_ease-out_forwards]"
            />
            
            {/* Teal segment (10% of the circle) */}
            <circle 
              cx="50" 
              cy="50" 
              r="40" 
              fill="none" 
              stroke="#75E2E6" 
              strokeWidth="10" 
              strokeDasharray={`${Math.PI * 80 * 0.1} ${Math.PI * 80 * 0.9}`}
              strokeDashoffset={Math.PI * 80 * 0.1}
              transform="rotate(54 50 50)"
              className="animate-[progress_1.4s_ease-out_forwards]"
            />
            
            {/* Text in the middle */}
            <text 
              x="50" 
              y="50" 
              textAnchor="middle" 
              dominantBaseline="middle"
              className="text-2xl font-bold"
              fill="#5D4DB1"
            >
              {percentage}%
            </text>
          </svg>
        </div>
        
        <div>
          <div className="mb-4">
            <h3 className="text-gray-500">Current Level</h3>
            <p className="font-semibold text-lg">{level}</p>
          </div>
          
          <div>
            <h3 className="text-gray-500">Spent</h3>
            <div className="flex items-baseline gap-2">
              <p className="font-semibold text-lg">${spent.toLocaleString()}</p>
              <span className="text-gray-400">/ ${total.toLocaleString()}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
