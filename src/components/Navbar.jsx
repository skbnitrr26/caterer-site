import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

// Defined locally to fix build import errors
const brandContent = {
  brandName: "Shree Shyam Caterers",
  proprietor: "Prop: Arpit Agarwal"
};

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  // NEW EFFECT: Force scroll to top on page refresh
  useEffect(() => {
    // 1. Prevent default browser scroll restoration
    if ('scrollRestoration' in window.history) {
      window.history.scrollRestoration = 'manual';
    }
    
    // 2. Scroll to top immediately
    window.scrollTo(0, 0);
    
    // 3. Clean the URL (remove #contact, #menu etc) without reloading
    if (window.location.hash) {
      window.history.replaceState(null, null, window.location.pathname);
    }
  }, []);

  // Existing Scroll Spy Effect
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);

      // Logic to detect active section based on scroll position
      const sections = ['home', 'about', 'services', 'menu', 'contact'];
      let current = '';

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          // If the section is roughly in the middle of the viewport or near top
          if (rect.top <= 150 && rect.bottom >= 150) {
            current = section;
          }
        }
      }
      if (current) setActiveSection(current);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (e, sectionId) => {
    e.preventDefault();
    setActiveSection(sectionId);
    setIsOpen(false);
    
    const element = document.getElementById(sectionId);
    if (element) {
      const navHeight = 80; // Offset for sticky header
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - navHeight;
  
      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
      
      // Update URL hash manually when clicking links so copy-pasting links still works
      window.history.pushState(null, null, `#${sectionId}`);
    }
  };

  const navLinks = ['Home', 'About', 'Services', 'Menu', 'Contact'];

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-neutral-900/95 backdrop-blur-md py-3 shadow-lg' : 'bg-transparent py-6'}`}>
      <div className="container mx-auto px-6 flex justify-between items-center">
        {/* Logo */}
        <div className="flex flex-col items-center md:items-start cursor-pointer" onClick={(e) => handleNavClick(e, 'home')}>
          <h1 className="text-xl md:text-2xl font-bold text-amber-500 tracking-wider uppercase">{brandContent.brandName}</h1>
          <span className="text-[10px] md:text-xs text-neutral-400 tracking-[0.1em] hidden md:block">{brandContent.proprietor}</span>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-8 text-sm font-medium tracking-wide text-neutral-300">
          {navLinks.map((item) => {
            const sectionId = item.toLowerCase();
            const isActive = activeSection === sectionId;

            return (
              <a 
                key={item} 
                href={`#${sectionId}`} 
                onClick={(e) => handleNavClick(e, sectionId)}
                className={`relative group transition-colors duration-300 ${isActive ? 'text-amber-500 font-bold' : 'hover:text-white'}`}
              >
                {item.toUpperCase()}
                
                {/* Underline Animation */}
                {!isActive && (
                  <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-amber-500 transition-all duration-300 group-hover:w-full"></span>
                )}
              </a>
            );
          })}
        </div>

        {/* Mobile Menu Button */}
        <button className="md:hidden text-amber-500" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu Dropdown */}
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-neutral-900 border-t border-neutral-800"
          >
            <div className="flex flex-col items-center py-8 space-y-6 text-neutral-300">
              {navLinks.map((item) => {
                const sectionId = item.toLowerCase();
                const isActive = activeSection === sectionId;
                return (
                  <a 
                    key={item} 
                    href={`#${sectionId}`} 
                    onClick={(e) => handleNavClick(e, sectionId)} 
                    className={`${isActive ? 'text-amber-500 font-bold' : 'hover:text-white'} transition-colors`}
                  >
                    {item.toUpperCase()}
                  </a>
                );
              })}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;