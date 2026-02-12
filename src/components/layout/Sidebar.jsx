import React from 'react';
import { NavLink } from 'react-router-dom';
import menuItems from '../../data/menu.json';

const Sidebar = ({ isOpen, toggleSidebar }) => {
  const handleMenuItemClick = () => {
    // Only close sidebar on mobile (< 1024px which is Tailwind's lg breakpoint)
    if (window.innerWidth < 1024) {
      toggleSidebar();
    }
  };

  const sidebarBaseClasses = 'w-64 bg-zinc-900/95 backdrop-blur-lg border-r border-emerald-500/30 min-h-screen sticky top-0 transition-transform duration-300 ease-in-out z-50 fixed lg:sticky';
  const sidebarVisibilityClasses = isOpen ? 'translate-x-0' : '-translate-x-full';
  const sidebarClasses = `${sidebarBaseClasses} ${sidebarVisibilityClasses} lg:translate-x-0`;

  return (
    <>
      {/* Overlay for mobile */}
      {isOpen && (
        <div 
          className="fixed inset-0 bg-black/50 z-40 lg:hidden"
          onClick={toggleSidebar}
          aria-hidden="true"
        />
      )}
      
      {/* Sidebar */}
      <aside className={sidebarClasses}>
        <div className="p-6">
          {/* Navigation Menu */}
          <nav className="space-y-2">
            {menuItems.map((item) => (
              <NavLink
                key={item.path}
                to={item.path}
                onClick={handleMenuItemClick}
                className={({ isActive }) =>
                  `flex items-center gap-3 px-4 py-3 rounded-lg transition-all duration-300 ${
                    isActive
                      ? 'bg-emerald-500/90 text-white shadow-lg shadow-emerald-500/50'
                      : 'text-white/70 hover:bg-white/10 hover:text-white'
                  }`
                }
              >
                <span className="text-2xl" role="img" aria-hidden="true">
                  {item.icon}
                </span>
                <span className="font-semibold">{item.name}</span>
              </NavLink>
            ))}
          </nav>
        </div>
      </aside>
    </>
  );
};

export default Sidebar;