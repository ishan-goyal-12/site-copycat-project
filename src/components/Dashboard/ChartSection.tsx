
import { MetricCard } from "./StatCards";

export function ChartSection() {
  // Months labels
  const months = ["01", "02", "03", "04", "05", "06", "07", "08", "09", "10", "11", "12"];
  
  // Sample data for the bar chart - values between 0-100
  const barValues = [75, 68, 35, 50, 40, 85, 30, 65, 45, 35, 90, 60];
  
  // Sample data points for the line chart
  const linePoints = [
    [0, 50], [1, 35], [2, 45], [3, 60], [4, 30], [5, 50], 
    [6, 40], [7, 60], [8, 50], [9, 45], [10, 75], [11, 40]
  ];

  // Calculate the SVG path for the line
  const createLinePath = () => {
    // Define the dimensions of the chart area
    const width = 600;
    const height = 200;
    
    // Scale the data points to fit the chart area
    const scaledPoints = linePoints.map(([x, y]) => [
      (x / 11) * width, 
      height - (y / 100) * height
    ]);
    
    // Create the SVG path
    let path = `M ${scaledPoints[0][0]},${scaledPoints[0][1]}`;
    
    // Add cubic bezier curves for a smooth line
    for (let i = 0; i < scaledPoints.length - 1; i++) {
      const x1 = scaledPoints[i][0];
      const y1 = scaledPoints[i][1];
      const x2 = scaledPoints[i + 1][0];
      const y2 = scaledPoints[i + 1][1];
      
      // Calculate control points for the curve
      const cpx1 = x1 + (x2 - x1) / 3;
      const cpy1 = y1;
      const cpx2 = x1 + 2 * (x2 - x1) / 3;
      const cpy2 = y2;
      
      path += ` C ${cpx1},${cpy1} ${cpx2},${cpy2} ${x2},${y2}`;
    }
    
    return path;
  };

  return (
    <div className="mt-8">
      <div className="grid grid-cols-3 gap-4 mb-4">
        <StatCard title="Total Earnings" value="500k" />
        <StatCard title="Period" value="1 Month" />
        <StatCard title="Upcoming Projects" value="245" />
      </div>
      
      <div className="bg-white p-6 rounded-xl shadow-sm relative h-80">
        {/* Line chart overlay */}
        <svg className="absolute inset-0 w-full h-full" preserveAspectRatio="none">
          <path
            d={createLinePath()}
            fill="none"
            stroke="#FF7E65"
            strokeWidth="3"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
        
        {/* Bar chart */}
        <div className="flex items-end justify-between h-48 relative z-10">
          {barValues.map((value, index) => (
            <div key={index} className="flex flex-col items-center">
              <div
                className="w-8 bg-jaida-purple rounded-md chart-bar"
                style={{ 
                  height: `${value}%`,
                  opacity: index === 5 || index === 7 || index === 10 ? 1 : 0.7
                }}
              ></div>
              <span className="text-gray-500 text-xs mt-2">{months[index]}</span>
            </div>
          ))}
        </div>
      </div>
      
      <div className="grid grid-cols-3 gap-6 mt-6">
        <MetricCard
          icon={<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-white"><circle cx="12" cy="12" r="10"/><circle cx="12" cy="12" r="3"/></svg>}
          title="Total Connections"
          value="2,140"
          change="Past Month"
          changeValue="45%"
          color="bg-blue-100 text-blue-500"
        />
        <MetricCard
          icon={<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-white"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>}
          title="Security"
          value="100%"
          change="Past Month"
          changeValue="55%"
          color="bg-red-100 text-red-500"
        />
        <MetricCard
          icon={<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-white"><rect width="20" height="14" x="2" y="5" rx="2"/><line x1="2" x2="22" y1="10" y2="10"/></svg>}
          title="Total Items"
          value="140"
          change="Past Month"
          changeValue="15%"
          color="bg-purple-100 text-purple-500"
        />
      </div>
    </div>
  );
}

interface StatCardProps {
  title: string;
  value: string;
}

function StatCard({ title, value }: StatCardProps) {
  return (
    <div className="bg-white rounded-lg p-4 shadow-sm">
      <h3 className="text-gray-500 text-sm">{title}</h3>
      <p className="font-semibold text-xl">{value}</p>
    </div>
  );
}
