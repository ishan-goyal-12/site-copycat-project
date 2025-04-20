
import { Home, MapPin, Cloud, MessageSquare, Calendar, Bookmark, Share2 } from "lucide-react";
import { cn } from "@/lib/utils";
import { Link } from "react-router-dom";

interface SidebarItemProps {
  icon: React.ElementType;
  label: string;
  href: string;
  active?: boolean;
  badge?: number;
}

const SidebarItem = ({ icon: Icon, label, href, active, badge }: SidebarItemProps) => {
  return (
    <Link
      to={href}
      className={cn(
        "flex items-center gap-3 px-3 py-2 rounded-lg text-gray-500 hover:bg-gray-100 transition-colors",
        active && "text-jaida-purple font-medium bg-purple-50"
      )}
    >
      <Icon size={20} className={cn(active && "text-jaida-purple")} />
      <span>{label}</span>
      {badge && (
        <span className="ml-auto bg-jaida-purple text-white text-xs font-medium px-2 py-0.5 rounded-md">
          {badge}
        </span>
      )}
    </Link>
  );
};

export function Sidebar() {
  return (
    <div className="w-56 h-screen border-r bg-white flex flex-col">
      <div className="p-4 flex items-center gap-2">
        <div className="w-8 h-8 bg-jaida-purple rounded-lg flex items-center justify-center">
          <span className="text-white font-bold">J</span>
        </div>
        <span className="text-jaida-purple text-xl font-semibold">Jaida</span>
      </div>
      
      <div className="px-3 py-6 space-y-1 flex-1">
        <SidebarItem icon={Home} label="Home" href="/" active />
        <SidebarItem icon={MapPin} label="Locations" href="/locations" />
        <SidebarItem icon={Cloud} label="Cloud Storage" href="/storage" />
        <SidebarItem icon={MessageSquare} label="Messages" href="/messages" badge={10} />
        <SidebarItem icon={Calendar} label="Calendar" href="/calendar" />
        <SidebarItem icon={Bookmark} label="Saved" href="/saved" />
        <SidebarItem icon={Share2} label="Shared Files" href="/shared" />
      </div>
      
      <div className="p-4 mt-auto">
        <div className="bg-blue-50 p-4 rounded-lg">
          <div className="flex justify-center mb-2">
            <img 
              src="/lovable-uploads/94de3e12-fb8d-47a6-89ef-b898ed08d61f.png" 
              alt="Support"
              className="h-20 w-auto"
            />
          </div>
          <button className="bg-white text-center w-full py-2 rounded-md shadow-sm border text-sm font-medium">
            Let's Talk😊
          </button>
        </div>
      </div>
    </div>
  );
}
