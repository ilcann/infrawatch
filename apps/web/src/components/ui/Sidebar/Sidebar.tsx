import { 
  BarChart3, 
  Package, 
  Users, 
  Settings, 
  LogOut, 
  Home,
  PanelRight,
  PanelLeft
} from 'lucide-react';
import { NavLink, useLocation } from 'react-router';
import { useEffect, useState, useMemo } from 'react';

const Sidebar = () => {
  const location = useLocation();
  const [indicatorPosition, setIndicatorPosition] = useState(0);
  const [isExpanded, setIsExpanded] = useState(false);

  const navItems = useMemo(() => [
    { path: '/dashboard', icon: <Home size={18} />, label: 'Dashboard' },
    { path: '/insights', icon: <BarChart3 size={18} />, label: 'Insights' },
    { path: '/assets', icon: <Package size={18} />, label: 'Assets' },
    { path: '/team', icon: <Users size={18} />, label: 'Team' }
  ], []);

  useEffect(() => {
    if (!isExpanded) {
      const activeIndex = navItems.findIndex(item => item.path === location.pathname);
      if (activeIndex !== -1) {
        setIndicatorPosition(activeIndex * 48); // Updated spacing for new layout
      }
    }
  }, [location.pathname, navItems, isExpanded]);

  return (
    <aside className={`h-screen px-3 py-9 transition-all duration-300 ${isExpanded ? 'w-64' : 'w-20'}`}>
      <div 
        className={`h-full flex flex-col py-4 shadow-[0_10px_25px_rgba(0,0,0,0.2)] bg-neutral-800 justify-between overflow-y-hidden transition-all duration-300 ${
          isExpanded ? 'rounded-2xl px-4' : 'rounded-2xl items-center'
        }`}
      >
        {/* Logo Section */}
        <div className={`flex ${isExpanded ? 'justify-between items-center' : 'justify-center'} px-2`}>
          {isExpanded ? (
            <>
              <div className="flex items-center gap-3">
                <div 
                  className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center text-white font-bold text-lg border border-white/20 flex-shrink-0"
                  style={{ backdropFilter: 'blur(10px)' }}
                >
                  K
                </div>
                <span className="text-white font-semibold text-lg">Kannon</span>
              </div>
              <button
                onClick={() => setIsExpanded(false)}
                className="w-10 h-10 flex items-center justify-center rounded-lg text-gray-400 transition-all duration-200 cursor-pointer hover:text-white hover:bg-white/20"
                title="Collapse sidebar"
              >
                <PanelLeft size={16} />
              </button>
            </>
          ) : (
            <div className="relative group">
              <div 
                className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center text-white font-bold text-lg border border-white/20 cursor-pointer transition-all duration-200 group-hover:opacity-0"
                style={{ backdropFilter: 'blur(10px)' }}
                onClick={() => setIsExpanded(true)}
                title="Expand sidebar"
              >
                K
              </div>
              <button
                onClick={() => setIsExpanded(true)}
                className="absolute inset-0 w-10 h-10 flex items-center justify-center rounded-lg text-gray-400 transition-all duration-200 cursor-pointer hover:text-white hover:bg-white/20 opacity-0 group-hover:opacity-100"
                title="Expand sidebar"
              >
                <PanelRight size={16} />
              </button>
            </div>
          )}
        </div>

        {/* Navigation Section */}
        <nav className="w-full flex-1 relative flex flex-col items-center justify-center">
          <div className={`relative w-full flex flex-col ${isExpanded ? 'items-stretch px-2' : 'items-center'}`}>
            {!isExpanded && (
              <div 
                className="absolute right-0 w-[0.2rem] bg-amber-600 rounded-r-sm transition-all duration-[400ms] ease-out h-10 z-10 top-0"
                style={{ transform: `translateY(${indicatorPosition}px)` }}
              />
            )}
            <div className={`flex flex-col gap-2 relative z-20 ${isExpanded ? 'w-full' : ''}`}>
              {navItems.map((item, index) => (
                <NavLink 
                  key={index}
                  to={item.path} 
                  className={({ isActive }) => `
                    ${isExpanded ? 'w-full h-12 px-3' : 'w-10 h-10'} flex items-center ${isExpanded ? 'justify-start gap-3' : 'justify-center'} 
                    bg-transparent border-0 rounded-xl transition-all duration-200 cursor-pointer no-underline relative
                    ${isActive 
                      ? (isExpanded ? 'text-amber-600 bg-amber-600/10' : 'text-amber-600') 
                      : 'text-gray-400 hover:text-gray-300 hover:bg-white/5'
                    }
                  `}
                >
                  <span className="flex-shrink-0">{item.icon}</span>
                  {isExpanded && (
                    <span className="text-sm font-medium">{item.label}</span>
                  )}
                </NavLink>
              ))}
            </div>
          </div>
        </nav>

        {/* Bottom Section */}
        <div className={`flex ${isExpanded ? 'flex-col gap-2 w-full px-2' : 'flex-col gap-2 items-center w-full'}`}>
          {/* Settings Button */}
          <button 
            className={`${isExpanded ? 'w-full h-12 px-3 justify-start gap-3' : 'w-10 h-10 justify-center'} flex items-center bg-transparent border-0 rounded-xl text-gray-400 transition-all duration-200 cursor-pointer hover:text-gray-300 hover:bg-white/5`} 
            title="Settings"
          >
            <Settings size={20} />
            {isExpanded && <span className="text-sm font-medium">Settings</span>}
          </button>
          
          {/* Logout Button */}
          <button 
            className={`${isExpanded ? 'w-full h-12 px-3 justify-start gap-3' : 'w-10 h-10 justify-center'} flex items-center bg-transparent border-0 rounded-xl text-gray-400 transition-all duration-200 cursor-pointer hover:text-red-300 hover:bg-red-500/10`} 
            title="Logout"
          >
            <LogOut size={20} />
            {isExpanded && <span className="text-sm font-medium">Logout</span>}
          </button>
        </div>
      </div>
    </aside>
  );
}

export default Sidebar;