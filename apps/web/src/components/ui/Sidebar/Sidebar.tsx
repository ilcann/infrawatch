import { 
  BarChart3, 
  Package, 
  Users, 
  Settings, 
  LogOut, 
  Home
} from 'lucide-react';
import { NavLink, useLocation } from 'react-router';
import { useEffect, useState, useMemo } from 'react';

const Sidebar = () => {
  const location = useLocation();
  const [indicatorPosition, setIndicatorPosition] = useState(0);

  const navItems = useMemo(() => [
    { path: '/dashboard', icon: <Home size={18} /> },
    { path: '/insights', icon: <BarChart3 size={18} /> },
    { path: '/assets', icon: <Package size={18} /> },
    { path: '/team', icon: <Users size={18} /> }
  ], []);

  useEffect(() => {
    const activeIndex = navItems.findIndex(item => item.path === location.pathname);
    if (activeIndex !== -1) {
      setIndicatorPosition(activeIndex * 56); // 2.5rem button height + 1rem gap = 56px
    }
  }, [location.pathname, navItems]);

  return (
    <aside className="h-screen px-3 py-9">
      <div 
        className="h-full flex flex-col rounded-full py-4 items-center shadow-[0_10px_25px_rgba(0,0,0,0.2)] bg-neutral-800 justify-between overflow-y-hidden"
      >
        {/* Logo Section */}
        <div className="flex justify-center px-2">
          <div 
            className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center text-white font-bold text-lg border border-white/20"
            style={{ backdropFilter: 'blur(10px)' }}
          >
            K
          </div>
        </div>

        {/* Navigation Section */}
        <nav className="w-full flex-1 relative flex flex-col items-center justify-center">
          <div className='relative w-full flex flex-col items-center'>
            <div 
              className="absolute right-0 w-[0.2rem] bg-amber-600 rounded-r-sm transition-all duration-[400ms] ease-out h-10 z-10 top-0"
              style={{ transform: `translateY(${indicatorPosition}px)` }}
            />
            <div className="flex flex-col gap-4 relative z-20">
              {navItems.map((item, index) => (
                <NavLink 
                  key={index}
                  to={item.path} 
                  className={({ isActive }) => `
                    w-10 h-10 flex items-center justify-center bg-transparent border-0 rounded-xl 
                    transition-all duration-200 cursor-pointer no-underline relative
                    ${isActive ? 'text-amber-600' : 'text-gray-400 hover:text-gray-300'}
                  `}
                >
                  {item.icon}
                </NavLink>
              ))}
            </div>
          </div>

        </nav>

        {/* Bottom Section */}
        <div className="flex flex-col gap-2 items-center w-full">
          {/* Settings Button */}
          <button 
            className="w-10 h-10 flex items-center justify-center bg-transparent border-0 rounded-xl text-gray-400 transition-all duration-200 cursor-pointer hover:text-gray-300" 
            title="Settings"
          >
            <Settings size={20} />
          </button>
          
          {/* Logout Button */}
          <button 
            className="w-10 h-10 flex items-center justify-center bg-transparent border-0 rounded-xl text-gray-400 transition-all duration-200 cursor-pointer hover:text-red-300" 
            title="Logout"
          >
            <LogOut size={20} />
          </button>
        </div>
      </div>
    </aside>
  );
}

export default Sidebar;