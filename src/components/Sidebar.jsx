import { Home, Compass, PlaySquare, Clock, ThumbsUp, Music, Film, Gamepad2, Radio, Settings } from 'lucide-react';

const items = [
  { icon: Home, label: 'Home', active: true },
  { icon: Compass, label: 'Explore' },
  { icon: PlaySquare, label: 'Subscriptions' },
  { icon: Music, label: 'Music' },
  { icon: Film, label: 'Movies' },
  { icon: Gamepad2, label: 'Gaming' },
  { icon: Radio, label: 'Live' },
  { icon: Clock, label: 'Watch later' },
  { icon: ThumbsUp, label: 'Liked' },
  { icon: Settings, label: 'Settings' },
];

function Sidebar() {
  return (
    <aside className="hidden md:block sticky top-16 h-[calc(100vh-4rem)] w-64 shrink-0 overflow-y-auto border-r border-gray-200 bg-white">
      <nav className="py-4">
        {items.map(({ icon: Icon, label, active }) => (
          <button
            key={label}
            className={`w-full flex items-center gap-3 px-5 py-2.5 text-sm hover:bg-gray-100 ${
              active ? 'font-semibold text-gray-900' : 'text-gray-700'
            }`}
          >
            <Icon className="w-5 h-5" />
            <span>{label}</span>
          </button>
        ))}
      </nav>
    </aside>
  );
}

export default Sidebar;
