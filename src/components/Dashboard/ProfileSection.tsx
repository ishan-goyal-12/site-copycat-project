
interface ProfileProps {
  name: string;
  title: string;
  avatar: string;
  stats: {
    projects: number;
    completed: number;
    awards: number;
  }
}

export function ProfileSection({ name, title, avatar, stats }: ProfileProps) {
  return (
    <div className="flex flex-col items-center">
      <div className="relative mb-2">
        <div className="w-24 h-24 rounded-full border-4 border-white overflow-hidden shadow-sm">
          <img 
            src={avatar} 
            alt={name}
            className="w-full h-full object-cover" 
          />
        </div>
        <div className="absolute bottom-0 right-0 bg-green-400 w-4 h-4 rounded-full border-2 border-white"></div>
      </div>
      
      <h2 className="font-semibold text-lg">{name}</h2>
      <p className="text-gray-500">{title}</p>
      
      <div className="grid grid-cols-3 gap-6 mt-4 text-center">
        <div>
          <p className="font-semibold text-xl text-gray-800">{stats.projects}</p>
          <p className="text-gray-500 text-sm">Projects</p>
        </div>
        <div>
          <p className="font-semibold text-xl text-gray-800">{stats.completed}</p>
          <p className="text-gray-500 text-sm">Completed</p>
        </div>
        <div>
          <p className="font-semibold text-xl text-gray-800">{stats.awards}</p>
          <p className="text-gray-500 text-sm">Awards</p>
        </div>
      </div>
    </div>
  );
}
