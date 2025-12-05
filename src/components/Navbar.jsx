import React, { useState, useEffect } from 'react';
import { Menu, X, ChefHat } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

// Defined locally to avoid import errors
const brandContent = {
  brandName: "Shree Shyam Caterers",
  proprietor: "Prop: Arpit Agarwal"
};

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
      const sections = ['home', 'about', 'services', 'menu', 'contact'];
      let current = '';
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
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
      const navHeight = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - navHeight;
      window.scrollTo({ top: offsetPosition, behavior: "smooth" });
    }
  };

  const navLinks = ['Home', 'About', 'Services', 'Menu', 'Contact'];

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-neutral-900 shadow-lg' : 'bg-transparent py-6'}`}>
      <div className="container mx-auto px-6 flex justify-between items-center relative z-50">
        
        {/* LOGO SECTION WITH ICON */}
        <div className="flex items-center cursor-pointer" onClick={(e) => handleNavClick(e, 'home')}>
          {/* Icon Container */}
          <div className="bg-amber-500/10 p-2 rounded-full mr-3 border border-amber-500/20">
            <img src="/logo.png" alt="Logo" className="w-8 h-8 object-cover rounded-full" />
          </div>
          
          {/* Brand Name Text */}
          <div className="flex flex-col items-start">
            <h1 className="text-xl md:text-2xl font-bold text-amber-500 tracking-wider uppercase leading-none">
              {brandContent.brandName}
            </h1>
            <span className="text-[10px] md:text-xs text-neutral-400 tracking-[0.1em] hidden md:block mt-1">
              {brandContent.proprietor}
            </span>
          </div>
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
                {!isActive && (
                  <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-amber-500 transition-all duration-300 group-hover:w-full"></span>
                )}
              </a>
            );
          })}
        </div>
        
        {/* Mobile Menu Button */}
        <button 
          className="md:hidden text-amber-500 z-50 relative p-2 focus:outline-none" 
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          {isOpen ? <X size={32} /> : <Menu size={32} />}
        </button>
      </div>

      {/* Mobile Sidebar */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Backdrop: Visible background (dimmed) */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
              className="md:hidden fixed inset-0 bg-black/50 z-40 backdrop-blur-sm"
            />
            
            {/* Sidebar: Covers small area (w-64), visible background (bg-neutral-950) */}
            <motion.div 
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
              className="md:hidden fixed top-0 right-0 h-screen w-64 bg-neutral-950 border-l border-neutral-800 z-50 flex flex-col items-center justify-center shadow-2xl"
            >
              {/* Close Button inside sidebar */}
              <button 
                className="absolute top-6 right-6 text-amber-500 p-2 focus:outline-none" 
                onClick={() => setIsOpen(false)}
              >
                <X size={28} />
              </button>

              <div className="flex flex-col items-center space-y-6 text-center w-full px-6">
                {navLinks.map((item) => {
                  const sectionId = item.toLowerCase();
                  const isActive = activeSection === sectionId;
                  return (
                    <a 
                      key={item} 
                      href={`#${sectionId}`} 
                      onClick={(e) => handleNavClick(e, sectionId)} 
                      // Small text size (text-lg) as requested
                      className={`text-lg font-serif tracking-wider py-3 w-full rounded-lg transition-all ${
                        isActive 
                          ? 'text-amber-500 font-bold bg-amber-500/10' 
                          : 'text-neutral-300 hover:text-white hover:bg-neutral-800'
                      }`}
                    >
                      {item.toUpperCase()}
                    </a>
                  );
                })}
              </div>
              
              <div className="absolute bottom-10 text-neutral-600 text-xs tracking-widest uppercase text-center w-full px-4">
                {brandContent.brandName}
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;