
interface StatCardProps {
  title: string;
  value: string;
  period?: string;
}

export function StatCard({ title, value, period }: StatCardProps) {
  return (
    <div className="bg-white p-3 rounded-lg flex flex-col">
      <span className="text-gray-500 text-sm">{title}</span>
      <span className="text-gray-900 text-xl font-semibold mt-1">{value}</span>
      {period && <span className="text-gray-500 text-sm">{period}</span>}
    </div>
  );
}

export function FinanceStatCard({ title, value }: { title: string; value: string }) {
  return (
    <div className="bg-white p-4 rounded-lg flex flex-col gap-1 shadow-sm">
      <span className="text-gray-500 text-sm">{title}</span>
      <span className="text-gray-900 text-xl font-semibold">{value}</span>
    </div>
  );
}

interface MetricCardProps {
  icon: React.ReactNode;
  title: string;
  value: string;
  change: string;
  changeValue: string;
  color: string;
}

export function MetricCard({ icon, title, value, change, changeValue, color }: MetricCardProps) {
  return (
    <div className="bg-white p-4 rounded-lg shadow-sm">
      <div className="flex items-center gap-4 mb-6">
        <div className={`w-10 h-10 rounded-full flex items-center justify-center ${color}`}>
          {icon}
        </div>
        <div>
          <h3 className="text-gray-500 text-sm">{title}</h3>
          <p className="font-semibold text-xl">{value}</p>
        </div>
      </div>
      
      <div className="bg-gray-100 h-2 rounded-full overflow-hidden">
        <div className={`h-full ${color.includes('bg-') ? color : `bg-${color}-500`}`} style={{ width: '70%' }}></div>
      </div>
      
      <div className="flex items-center mt-2">
        <span className="text-gray-500 text-xs flex items-center">
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-1">
            <polyline points="23 6 13.5 15.5 8.5 10.5 1 18" />
            <polyline points="17 6 23 6 23 12" />
          </svg>
          {change}
        </span>
        <span className="text-green-500 text-xs ml-1">+ {changeValue}</span>
      </div>
    </div>
  );
}
