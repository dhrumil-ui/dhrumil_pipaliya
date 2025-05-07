import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { Link } from 'react-scroll';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const navItems = [
    { id: 'about', label: 'About' },
    { id: 'education', label: 'Education' },
    { id: 'experience', label: 'Experience' },
    { id: 'skills', label: 'Skills' },
    { id: 'projects', label: 'Projects' },
    { id: 'contact', label: 'Contact' },
  ];

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled 
          ? 'bg-white/90 backdrop-blur-md shadow-md py-2' 
          : 'bg-transparent py-4'
      }`}
    >
      <nav className="container mx-auto px-6 flex justify-between items-center">
        <Link 
          to="hero" 
          spy={true} 
          smooth={true} 
          duration={500} 
          className="text-xl font-bold cursor-pointer"
        >
          <span className={`${scrolled ? 'text-blue-700' : 'text-white'}`}>Dhrumil</span>
          <span className={`${scrolled ? 'text-gray-700' : 'text-blue-300'}`}> Pipaliya</span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex space-x-8">
          {navItems.map(item => (
            <Link
              key={item.id}
              to={item.id}
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              className={`${
                scrolled ? 'text-gray-700 hover:text-blue-700' : 'text-gray-200 hover:text-white'
              } cursor-pointer transition-colors duration-300`}
            >
              {item.label}
            </Link>
          ))}
        </div>

        {/* Mobile Navigation Toggle */}
        <button 
          className="md:hidden focus:outline-none"
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          {isMenuOpen ? (
            <X className={scrolled ? 'text-gray-800' : 'text-white'} size={24} />
          ) : (
            <Menu className={scrolled ? 'text-gray-800' : 'text-white'} size={24} />
          )}
        </button>
      </nav>

      {/* Mobile Navigation Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white/95 backdrop-blur-md shadow-lg absolute top-full left-0 right-0 py-4 px-6">
          <div className="flex flex-col space-y-4">
            {navItems.map(item => (
              <Link
                key={item.id}
                to={item.id}
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
                className="text-gray-800 hover:text-blue-700 transition-colors duration-300"
                onClick={closeMenu}
              >
                {item.label}
              </Link>
            ))}
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;