import { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { Home, User, Briefcase, Mail, FolderKanban } from "lucide-react";

const TopNav = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-[#1A1F2C]/80 backdrop-blur-lg shadow-lg" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <NavLink to="/" className="text-xl font-bold text-[#9b87f5]">
            ES
          </NavLink>

          <div className="hidden md:flex space-x-8">
            <NavLink
              to="/"
              className={({ isActive }) =>
                `flex items-center space-x-2 text-sm transition-colors ${
                  isActive ? "text-[#9b87f5]" : "text-gray-400 hover:text-white"
                }`
              }
            >
              <Home className="w-4 h-4" />
              <span>Home</span>
            </NavLink>

            <NavLink
              to="/about"
              className={({ isActive }) =>
                `flex items-center space-x-2 text-sm transition-colors ${
                  isActive ? "text-[#9b87f5]" : "text-gray-400 hover:text-white"
                }`
              }
            >
              <User className="w-4 h-4" />
              <span>About</span>
            </NavLink>

            <NavLink
              to="/services"
              className={({ isActive }) =>
                `flex items-center space-x-2 text-sm transition-colors ${
                  isActive ? "text-[#9b87f5]" : "text-gray-400 hover:text-white"
                }`
              }
            >
              <Briefcase className="w-4 h-4" />
              <span>Services</span>
            </NavLink>

            <NavLink
              to="/projects"
              className={({ isActive }) =>
                `flex items-center space-x-2 text-sm transition-colors ${
                  isActive ? "text-[#9b87f5]" : "text-gray-400 hover:text-white"
                }`
              }
            >
              <FolderKanban className="w-4 h-4" />
              <span>Projects</span>
            </NavLink>

            <NavLink
              to="/contact"
              className={({ isActive }) =>
                `flex items-center space-x-2 text-sm transition-colors ${
                  isActive ? "text-[#9b87f5]" : "text-gray-400 hover:text-white"
                }`
              }
            >
              <Mail className="w-4 h-4" />
              <span>Contact</span>
            </NavLink>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default TopNav;