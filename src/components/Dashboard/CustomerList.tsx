
import { MessageSquare } from "lucide-react";

interface Customer {
  id: number;
  name: string;
  avatar: string;
  purchases: number;
  likes: number;
}

interface CustomerListProps {
  customers: Customer[];
}

export function CustomerList({ customers }: CustomerListProps) {
  return (
    <div className="bg-white rounded-xl p-5 shadow-sm">
      <div className="flex items-center justify-between mb-4">
        <h2 className="font-semibold text-lg">Latest Customers</h2>
        <a href="#" className="text-xs text-gray-500 hover:text-jaida-purple">
          View All
        </a>
      </div>
      
      <div className="space-y-4">
        {customers.map((customer) => (
          <div key={customer.id} className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <img
                src={customer.avatar}
                alt={customer.name}
                className="w-10 h-10 rounded-full object-cover"
              />
              <div>
                <h3 className="font-medium">{customer.name}</h3>
                <p className="text-xs text-gray-500">
                  {customer.purchases} Purchases | {customer.likes} Likes
                </p>
              </div>
            </div>
            <button className="text-gray-400 hover:text-jaida-purple">
              <MessageSquare size={18} />
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
