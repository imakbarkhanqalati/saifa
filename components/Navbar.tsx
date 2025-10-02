import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { PhoneIcon, MailIcon, MenuIcon, CloseIcon } from './icons/Icons';

interface NavItemProps {
  title: string;
  to: string;
  onClick?: () => void;
}

const NavItem: React.FC<NavItemProps> = ({ title, to, onClick }) => {
  const location = useLocation();
  const isActive = location.pathname === to;

  return (
    <li>
      <Link
        to={to}
        onClick={onClick}
        className={`px-3 py-2 text-base font-medium rounded-md transition-colors duration-300 ${
          isActive
            ? 'text-red-600 font-semibold'
            : 'text-gray-700 hover:bg-gray-100'
        }`}
      >
        {title}
      </Link>
    </li>
  );
};

const Navbar: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const handleNavClick = () => {
    setIsMobileMenuOpen(false);
  };
  
  return (
    <header className="fixed top-0 left-0 right-0 z-50 shadow-md">
      {/* Top Bar */}
      <div className="bg-red-700 text-white text-sm">
        <div className="container mx-auto px-4 py-1 flex justify-between items-center">
          <div className="flex items-center space-x-4">
            <a href="mailto:info@door2doorcargo.com" className="flex items-center space-x-1 hover:underline">
              <MailIcon className="w-4 h-4" />
              <span>info@door2doorcargo.com</span>
            </a>
            <span className="hidden md:block">|</span>
            <a href="tel:+8618306101718" className="hidden md:flex items-center space-x-1 hover:underline">
              <PhoneIcon className="w-4 h-4" />
              <span>+86 183 0610 1718</span>
            </a>
          </div>
          <div className="flex items-center space-x-3">
            {/* Social Icons could go here */}
          </div>
        </div>
      </div>
      {/* Main Nav */}
      <nav className="bg-white bg-opacity-95 backdrop-blur-sm">
        <div className="container mx-auto px-4 py-3 flex justify-between items-center">
          <Link to="/" className="flex items-center space-x-2 cursor-pointer">
            <img src="/logo/saifa-logo.png" alt="Saifa Logo" className="h-10 w-auto" />
            <h1 className="text-xl md:text-2xl font-bold text-gray-900">Saifa International</h1>
          </Link>
          
          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-2">
            <ul className="flex space-x-1">
              <NavItem title="Home" to="/" onClick={handleNavClick} />
              <NavItem title="About Us" to="/about" onClick={handleNavClick} />
              <NavItem title="Services" to="/services" onClick={handleNavClick} />
              <NavItem title="Why Choose Us" to="/why-choose-us" onClick={handleNavClick} />
              <NavItem title="Contact" to="/contact" onClick={handleNavClick} />
            </ul>
            <Link to="/request-quote" className="ml-2 px-4 py-2 text-sm font-semibold bg-red-600 text-white rounded-md hover:bg-red-700 transition-colors">
              Get a Quote
            </Link>
            <Link to="/contact" className="px-4 py-2 text-sm font-semibold bg-blue-900 text-white rounded-md hover:bg-blue-800 transition-colors">
              Contact Us
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} className="p-2 text-gray-600 hover:bg-gray-100 rounded-md">
              {isMobileMenuOpen ? <CloseIcon /> : <MenuIcon />}
            </button>
          </div>
        </div>
        
         {/* Mobile Menu */}
         {isMobileMenuOpen && (
          <div className="md:hidden bg-white py-4">
              <ul className="flex flex-col items-center space-y-2">
                  <NavItem title="Home" to="/" onClick={handleNavClick} />
                  <NavItem title="About Us" to="/about" onClick={handleNavClick} />
                  <NavItem title="Services" to="/services" onClick={handleNavClick} />
                  <NavItem title="Why Choose Us" to="/why-choose-us" onClick={handleNavClick} />
                  <NavItem title="Contact" to="/contact" onClick={handleNavClick} />
                  <li className="pt-2">
                    <Link to="/request-quote" onClick={handleNavClick} className="px-5 py-2 text-sm font-semibold bg-red-600 text-white rounded-md hover:bg-red-700 transition-colors">
                      Get a Quote
                    </Link>
                  </li>
                   <li>
                    <Link to="/contact" onClick={handleNavClick} className="px-5 py-2 text-sm font-semibold bg-blue-900 text-white rounded-md hover:bg-blue-800 transition-colors">
                      Contact Us
                    </Link>
                  </li>
              </ul>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Navbar;