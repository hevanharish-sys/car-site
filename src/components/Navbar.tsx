import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ChevronRight } from 'lucide-react';

const navItems = [
  { name: 'Home', href: '#home', id: 'home' },
  { name: 'Services', href: '#services', id: 'services' },
  // { name: 'Our Work', href: '#works', id: 'works' },
  { name: 'About Us', href: '#about', id: 'about' },
  { name: 'Contact', href: '#contact', id: 'contact' },
];

export function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 200; // Offset for better dynamic trigger timing

      // Find the current active section
      for (let i = navItems.length - 1; i >= 0; i--) {
        const item = navItems[i];
        const element = document.getElementById(item.id);
        if (element) {
          const top = element.offsetTop;
          if (scrollPosition >= top) {
            setActiveSection(item.id);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    // Initial run
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      className="fixed top-[20px] left-1/2 -translate-x-1/2 z-[50] transition-all duration-300 w-[90%] lg:w-auto max-w-[1200px] lg:max-w-none"
    >
      <div className="bg-[#050505]/45 backdrop-blur-xl border border-white/10 shadow-[0_4px_30px_rgba(0,0,0,0.5)] rounded-[20px] lg:rounded-[16px] px-6 lg:px-8 h-[68px] flex items-center w-full lg:w-auto justify-between lg:justify-start">
        {/* Logo Left (Mobile Only) */}
        <a 
          href="#home" 
          className="flex lg:hidden items-center shrink-0 hover:opacity-85 transition-opacity active:scale-95 duration-150"
        >
          <img 
            src="/image.png" 
            alt="H2T Technologies Logo" 
            className="h-7 sm:h-8 w-auto object-contain"
          />
        </a>

        {/* Desktop Menu */}
        <div className="hidden lg:flex items-center space-x-10">
          <div className="flex items-center space-x-8">
            {navItems.map((item) => {
              const isActive = activeSection === item.id;
              return (
                <a
                  key={item.name}
                  href={item.href}
                  className={`text-[14px] font-medium transition-colors relative py-2 group whitespace-nowrap ${
                    isActive ? 'text-[#cc0000]' : 'text-gray-300 hover:text-white'
                  }`}
                >
                  {item.name}
                  {isActive && (
                    <motion.span 
                      layoutId="activeUnderline"
                      className="absolute bottom-0 left-0 w-full h-[2px] bg-[#cc0000] shadow-[0_0_10px_rgba(204,0,0,0.8)]"
                      transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                    />
                  )}
                </a>
              );
            })}
          </div>
          
          <button
            onClick={() => window.dispatchEvent(new CustomEvent('open-consultation-modal'))}
            className="text-[13px] font-medium text-white px-5 py-2.5 rounded-[12px] border border-[#cc0000] hover:bg-[#cc0000] flex items-center gap-2 group transition-all duration-300 shadow-[0_0_15px_rgba(204,0,0,0.1)] hover:shadow-[0_0_20px_rgba(204,0,0,0.4)] whitespace-nowrap"
          >
            Get Free Consultation
            <ChevronRight className="w-4 h-4 text-[#cc0000] group-hover:text-white transition-colors" />
          </button>
        </div>

        {/* Mobile Hamburger Right */}
        <div className="lg:hidden flex items-center">
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="text-white hover:text-[#cc0000] transition-colors p-1"
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="lg:hidden absolute top-full left-0 right-0 mt-4 bg-[#050505]/95 backdrop-blur-3xl border border-white/5 rounded-3xl overflow-hidden shadow-2xl"
          >
            <div className="px-6 py-6 space-y-1">
              {navItems.map((item) => {
                const isActive = activeSection === item.id;
                return (
                  <a
                    key={item.name}
                    href={item.href}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className={`block px-4 py-4 text-base font-medium rounded-xl transition-colors ${
                      isActive ? 'bg-white/5 text-[#cc0000]' : 'text-gray-300 hover:bg-white/5 hover:text-white'
                    }`}
                  >
                    {item.name}
                  </a>
                );
              })}
              <div className="pt-6 mt-2 border-t border-white/5 px-4">
                <button
                  onClick={() => {
                    setIsMobileMenuOpen(false);
                    window.dispatchEvent(new CustomEvent('open-consultation-modal'));
                  }}
                  className="flex items-center justify-center gap-2 w-full px-6 py-4 rounded-xl bg-[#cc0000] text-white text-base font-medium box-glow transition-all active:scale-95"
                >
                  Get Free Consultation
                  <ChevronRight className="w-5 h-5" />
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
