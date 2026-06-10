import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ChevronRight } from 'lucide-react';
import { BrandLogo } from './BrandLogo';

const navItems = [
  { name: 'Home', href: '#home', id: 'home' },
  { name: 'Works', href: '#works', id: 'works' },
  { name: 'Services', href: '#services', id: 'services' },
  { name: 'About Us', href: '#about', id: 'about' },
  { name: 'Contact', href: '#contact', id: 'contact' },
];

export function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [ctaActive, setCtaActive] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 200;

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

      const works = document.getElementById('works');
      if (works) {
        setCtaActive(window.scrollY + 100 >= works.offsetTop);
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const ctaClasses = ctaActive
    ? 'bg-[#cc0000] border-[#cc0000] text-white hover:bg-red-600 shadow-[0_0_12px_rgba(204,0,0,0.35)] hover:shadow-[0_0_18px_rgba(204,0,0,0.55)]'
    : 'bg-[#050505]/45 backdrop-blur-xl border-white/20 text-white hover:bg-white/5 hover:border-white/30';

  const ctaIconClasses = ctaActive ? 'text-white' : 'text-[#cc0000]';

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      className="fixed top-[20px] left-1/2 -translate-x-1/2 z-[50] px-4 pointer-events-none w-[95%] max-w-[1200px]"
    >
      <div className="flex items-center justify-center gap-2 sm:gap-2.5">
        {/* Logo — outside nav */}
        <a
          href="#home"
          className="pointer-events-auto flex items-center shrink-0 hover:opacity-85 transition-opacity active:scale-95 duration-150"
        >
          <BrandLogo className="h-7 sm:h-8 lg:h-9 w-auto object-contain" />
        </a>

        {/* Nav pill — links only */}
        <nav className="pointer-events-auto relative shrink min-w-0">
          <div className="bg-[#050505]/45 backdrop-blur-xl border border-white/10 shadow-[0_4px_30px_rgba(0,0,0,0.5)] rounded-[20px] lg:rounded-[16px] px-4 sm:px-6 lg:px-8 h-[52px] sm:h-[56px] lg:h-[68px] flex items-center justify-center">
            <div className="hidden lg:flex items-center space-x-8">
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
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="lg:hidden text-white hover:text-[#cc0000] transition-colors p-1"
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

          <AnimatePresence>
            {isMobileMenuOpen && (
              <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                className="lg:hidden absolute top-full left-1/2 -translate-x-1/2 w-[min(100%,320px)] mt-3 bg-[#050505]/95 backdrop-blur-3xl border border-white/5 rounded-3xl overflow-hidden shadow-2xl"
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
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </nav>

        {/* Consultation CTA — outside nav */}
        <button
          onClick={() => window.dispatchEvent(new CustomEvent('open-consultation-modal'))}
          className={`pointer-events-auto shrink-0 flex items-center gap-1 sm:gap-1.5 h-9 sm:h-10 text-[10px] sm:text-[11px] font-medium px-2.5 sm:px-3.5 rounded-lg border transition-all duration-300 whitespace-nowrap active:scale-95 ${ctaClasses}`}
        >
          <span className="hidden min-[480px]:inline">Get Free Consultation</span>
          <span className="min-[480px]:hidden">Consult</span>
          <ChevronRight className={`w-3 h-3 sm:w-3.5 sm:h-3.5 shrink-0 transition-colors duration-300 ${ctaIconClasses}`} />
        </button>
      </div>
    </motion.header>
  );
}
