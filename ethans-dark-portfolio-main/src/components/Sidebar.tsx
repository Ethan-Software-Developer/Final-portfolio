import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { Home, User, Briefcase, LayoutGrid, Menu, X } from 'lucide-react';

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(true);

  const toggleSidebar = () => setIsOpen(!isOpen);

  const navItems = [
    { path: "/", icon: <Home className="w-5 h-5" />, label: "Home" },
    { path: "/about", icon: <User className="w-5 h-5" />, label: "About" },
    { path: "/services", icon: <Briefcase className="w-5 h-5" />, label: "Services" },
    { path: "/projects", icon: <LayoutGrid className="w-5 h-5" />, label: "Projects" },
  ];

  return (
    <>
      <button
        onClick={toggleSidebar}
        className="fixed top-4 left-4 z-50 p-2 rounded-lg bg-accent-blue/20 hover:bg-accent-blue/30 transition-colors lg:hidden"
      >
        {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
      </button>

      <aside className={`fixed top-0 left-0 h-full w-64 glass-card transform transition-transform duration-300 ease-in-out z-40 
        ${isOpen ? 'translate-x-0' : '-translate-x-full'} lg:translate-x-0`}>
        <div className="p-6">
          <h2 className="text-xl font-bold mb-8 text-center">Ethan Sevenster</h2>
          <nav className="space-y-2">
            {navItems.map((item) => (
              <NavLink
                key={item.path}
                to={item.path}
                className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}
              >
                {item.icon}
                <span>{item.label}</span>
              </NavLink>
            ))}
          </nav>
        </div>
      </aside>
    </>
  );
};

export default Sidebar;