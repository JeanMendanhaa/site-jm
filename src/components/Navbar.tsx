
import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const menuItems = [
    { label: "Home", href: "/" },
    { label: "Projects", href: "/#projects" },
    { label: "Specializations", href: "/especializacoes" },
    { label: "Articles", href: "/artigos" },
    { label: "Partners", href: "/#partners" },
    { label: "Contact", href: "/#contact" }
  ];

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-charcoal/95 backdrop-blur-sm shadow-md py-3' : 'bg-transparent py-5'}`}>
      <div className="container mx-auto flex justify-between items-center container-padding">
        <Link to="/" className="text-white text-xl font-bold">Jean<span className="text-gray-400">MENDANHA</span></Link>
        
        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-8">
          {menuItems.map((item) => (
            item.href.startsWith('/#') ? (
              <a 
                key={item.label}
                href={item.href}
                className="text-gray-300 hover:text-white transition-colors duration-300 text-sm uppercase tracking-wider"
              >
                {item.label}
              </a>
            ) : (
              <Link 
                key={item.label}
                to={item.href}
                className="text-gray-300 hover:text-white transition-colors duration-300 text-sm uppercase tracking-wider"
              >
                {item.label}
              </Link>
            )
          ))}
        </div>
        
        {/* Mobile Menu Button */}
        <button 
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-gray-300 hover:text-white"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>
      
      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-charcoal/95 backdrop-blur-sm shadow-md animate-fade-in">
          <div className="container mx-auto py-4 flex flex-col space-y-4 container-padding">
            {menuItems.map((item) => (
              item.href.startsWith('/#') ? (
                <a 
                  key={item.label}
                  href={item.href}
                  className="text-gray-300 hover:text-white transition-colors duration-300 text-sm uppercase tracking-wider"
                  onClick={() => setIsOpen(false)}
                >
                  {item.label}
                </a>
              ) : (
                <Link 
                  key={item.label}
                  to={item.href}
                  className="text-gray-300 hover:text-white transition-colors duration-300 text-sm uppercase tracking-wider"
                  onClick={() => setIsOpen(false)}
                >
                  {item.label}
                </Link>
              )
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
