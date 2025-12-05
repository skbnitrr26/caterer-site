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

  // NEW: Effect to handle page refresh behavior (Reset URL and Scroll)
  useEffect(() => {
    // 1. Disable browser's default scroll restoration to ensure we start at top
    if ('scrollRestoration' in window.history) {
      window.history.scrollRestoration = 'manual';
    }

    // 2. Scroll to top immediately
    window.scrollTo(0, 0);

    // 3. Clear the URL hash if it exists (e.g., change localhost:5173/#contact to localhost:5173)
    if (window.location.hash) {
      window.history.replaceState(null, '', window.location.pathname);
    }
  }, []);

  // Handle scroll spy and header background
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
      const sections = ['home', 'about', 'services', 'menu', 'contact'];
      let current = '';
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          // Adjust offset for sticky header
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

  // Handle manual navigation click
  const handleNavClick = (e, sectionId) => {
    e.preventDefault();
    
    // 1. Update URL hash manually without reloading (e.g. adds #contact)
    window.history.pushState(null, '', `#${sectionId}`);
    
    // 2. Set active state
    setActiveSection(sectionId);
    
    // 3. Close mobile menu
    setIsOpen(false);
    
    // 4. Smooth scroll to section with offset for header
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
        <div className="flex items-center cursor-pointer" onClick={(e) => handleNavClick(e, 'home')}>
          <div className="bg-amber-500/10 p-2 rounded-full mr-3 border border-amber-500/20">
            <img src="/logo.png" alt="Logo" className="w-8 h-8 object-cover rounded-full" />
          </div>
          <div className="flex flex-col items-start">
            <h1 className="text-xl md:text-2xl font-bold text-amber-500 tracking-wider uppercase leading-none">{brandContent.brandName}</h1>
            <span className="text-[10px] md:text-xs text-neutral-400 tracking-[0.1em] hidden md:block mt-1">{brandContent.proprietor}</span>
          </div>
        </div>

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
        
        <button 
          className="md:hidden text-amber-500 z-50 relative p-2 focus:outline-none" 
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          {isOpen ? <X size={32} /> : <Menu size={32} />}
        </button>
      </div>

      <AnimatePresence>
        {isOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
              className="md:hidden fixed inset-0 bg-black/50 z-40 backdrop-blur-sm"
            />
            
            <motion.div 
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
              className="md:hidden fixed top-0 right-0 h-screen w-64 bg-neutral-950/85 backdrop-blur-md border-l border-neutral-800 z-50 flex flex-col items-center justify-center shadow-2xl"
            >
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