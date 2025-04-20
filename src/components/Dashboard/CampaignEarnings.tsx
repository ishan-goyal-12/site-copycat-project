
export function CampaignEarnings() {
  return (
    <div className="bg-jaida-purple rounded-xl p-5 text-white relative overflow-hidden h-full">
      <div className="flex items-center justify-between mb-6">
        <h2 className="font-semibold text-lg">Campaign Earnings</h2>
        <button className="text-white opacity-80 hover:opacity-100">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <circle cx="12" cy="12" r="1" />
            <circle cx="19" cy="12" r="1" />
            <circle cx="5" cy="12" r="1" />
          </svg>
        </button>
      </div>

      <div className="flex justify-center mb-6">
        <div className="relative w-32 h-32">
          {/* Donut chart */}
          <svg viewBox="0 0 100 100" className="w-full h-full transform -rotate-90">
            {/* Background circle */}
            <circle cx="50" cy="50" r="40" fill="transparent" stroke="#6E5BC5" strokeWidth="15" />
            
            {/* Teal segment (40%) */}
            <circle 
              cx="50" 
              cy="50" 
              r="40" 
              fill="transparent" 
              stroke="#75E2E6" 
              strokeWidth="15"
              strokeDasharray={`${0.4 * Math.PI * 80} ${0.6 * Math.PI * 80}`}
            />
            
            {/* Inner white circle */}
            <circle cx="50" cy="50" r="30" fill="white" />
            
            {/* Inner orange dot */}
            <circle cx="50" cy="50" r="10" fill="#FF7E65" />
          </svg>
        </div>
      </div>

      <div className="flex justify-between text-center mb-8">
        <div>
          <p className="opacity-80 text-sm mb-1">Earnings</p>
          <p className="font-semibold text-lg">$15.5k</p>
          <p className="text-green-300 text-xs">↑ 17%</p>
        </div>
        <div>
          <p className="opacity-80 text-sm mb-1">Expenses</p>
          <p className="font-semibold text-lg">$11.4k</p>
          <p className="text-green-300 text-xs">↑ 14%</p>
        </div>
      </div>

      <div className="h-16">
        {/* Mini bar chart */}
        <div className="flex items-end justify-between h-full">
          {[15, 25, 18, 30, 22, 28, 20, 35, 25, 40, 30, 35, 22, 25, 32, 28].map((value, index) => (
            <div 
              key={index} 
              className="w-1 bg-white bg-opacity-30 rounded-t"
              style={{ height: `${value}%` }}
            ></div>
          ))}
        </div>
      </div>

      <div className="bg-orange-400 bg-opacity-30 rounded-lg p-4 mt-10">
        <p className="font-medium text-lg mb-1">Need More Ideas?</p>
        <p className="text-sm opacity-80 mb-4">Upgrade to pro max for added benefits.</p>
        <div className="flex justify-end">
          <button className="bg-white text-jaida-purple px-3 py-1 rounded text-sm font-medium">
            Upgrade Now!
          </button>
        </div>
      </div>
    </div>
  );
}
