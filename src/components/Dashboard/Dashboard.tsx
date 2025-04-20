
import { Sidebar } from "./Sidebar";
import { Header } from "./Header";
import { CustomerList } from "./CustomerList";
import { StatusCard } from "./StatusCard";
import { CampaignEarnings } from "./CampaignEarnings";
import { ChartSection } from "./ChartSection";
import { ProfileSection } from "./ProfileSection";
import { SubscriptionNotice } from "./SubscriptionNotice";
import { FinanceStats } from "./FinanceStats";

export function Dashboard() {
  // Sample data for customers
  const customers = [
    {
      id: 1,
      name: "Harry Joe",
      avatar: "https://randomuser.me/api/portraits/men/32.jpg",
      purchases: 24,
      likes: 123,
    },
    {
      id: 2,
      name: "Martha June",
      avatar: "https://randomuser.me/api/portraits/women/44.jpg",
      purchases: 24,
      likes: 123,
    },
    {
      id: 3,
      name: "Sarah Altman",
      avatar: "https://randomuser.me/api/portraits/women/68.jpg",
      purchases: 24,
      likes: 123,
    },
    {
      id: 4,
      name: "Michael Clark",
      avatar: "https://randomuser.me/api/portraits/men/41.jpg",
      purchases: 24,
      likes: 123,
    },
  ];

  return (
    <div className="flex bg-jaida-bg min-h-screen">
      <Sidebar />
      
      <div className="flex-1 p-8">
        <Header />
        
        <div className="grid grid-cols-12 gap-6">
          {/* Left Column - 7/12 width */}
          <div className="col-span-7 space-y-6">
            <CustomerList customers={customers} />
            <ChartSection />
          </div>
          
          {/* Right Column - 5/12 width */}
          <div className="col-span-5 space-y-6">
            <div className="grid grid-cols-12 gap-6">
              <div className="col-span-7">
                <StatusCard 
                  percentage={50}
                  level="Expert"
                  spent={1550}
                  total={3500}
                />
                <SubscriptionNotice />
                <FinanceStats />
              </div>
              
              <div className="col-span-5">
                <ProfileSection
                  name="AR Shakir"
                  title="Designer"
                  avatar="https://randomuser.me/api/portraits/men/32.jpg"
                  stats={{
                    projects: 457,
                    completed: 450,
                    awards: 12
                  }}
                />
              </div>
            </div>
            
            <CampaignEarnings />
          </div>
        </div>
      </div>
    </div>
  );
}
