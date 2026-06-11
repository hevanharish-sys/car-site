import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ChevronRight } from 'lucide-react';
import { BrandLogo } from './BrandLogo';

const navItems = [
  { name: 'Home', href: '#home', id: 'home' },
  { name: 'Works', href: '#works', id: 'works' },
  { name: 'Services', href: '#services', id: 'services' },
  { name: 'About Us', href: '#about', id: 'about', shortName: 'About' },
  { name: 'Contact', href: '#contact', id: 'contact' },
];

export function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [ctaActive, setCtaActive] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 32);
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

  useEffect(() => {
    document.body.style.overflow = isMobileMenuOpen ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [isMobileMenuOpen]);

  const glassSurface = isScrolled
    ? 'bg-[#050505]/92 backdrop-blur-2xl border-white/15 shadow-[0_8px_32px_rgba(0,0,0,0.55)]'
    : 'bg-[#050505]/45 backdrop-blur-xl border-white/10 shadow-[0_4px_30px_rgba(0,0,0,0.5)]';

  const ctaClasses = ctaActive
    ? 'bg-[#cc0000] border-[#cc0000] text-white hover:bg-red-600 shadow-[0_0_12px_rgba(204,0,0,0.35)] hover:shadow-[0_0_18px_rgba(204,0,0,0.55)]'
    : `${glassSurface} text-white hover:bg-[#cc0000] hover:border-[#cc0000] hover:shadow-[0_0_14px_rgba(204,0,0,0.45)]`;

  const ctaIconClasses = ctaActive
    ? 'text-white'
    : 'text-[#cc0000] group-hover:text-white';

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      className="fixed top-0 inset-x-0 z-[100] pt-3 sm:pt-5 lg:pt-5 pointer-events-none"
    >
      {/* Phone only — hamburger */}
      <div className="md:hidden relative pointer-events-auto flex items-center justify-between gap-3 mx-3 sm:mx-5">
        <a href="#home" className="flex items-center shrink-0 hover:opacity-85 transition-opacity active:scale-95">
          <BrandLogo height={32} />
        </a>
        <button
          type="button"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className={`flex items-center justify-center w-10 h-10 rounded-xl border text-white hover:text-[#cc0000] transition-colors duration-300 ${glassSurface}`}
          aria-label="Toggle menu"
          aria-expanded={isMobileMenuOpen}
        >
          {isMobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* Tablet + desktop — logo | nav | CTA with breathing room */}
      <div className="hidden md:grid pointer-events-auto grid-cols-[1fr_auto_1fr] items-center gap-4 lg:gap-6 w-full max-w-[1400px] mx-auto px-5 lg:px-10 xl:px-14">
        <a
          href="#home"
          className="flex items-center shrink-0 justify-self-start hover:opacity-85 transition-opacity duration-300 active:scale-95"
        >
          <BrandLogo height={32} />
        </a>

        <nav
          className={`justify-self-center rounded-2xl px-3 md:px-4 lg:px-6 xl:px-7 h-[50px] md:h-[52px] lg:h-[58px] flex items-center justify-center min-w-0 border transition-all duration-300 ${glassSurface}`}
        >
          <div className="flex items-center gap-3 md:gap-4 lg:gap-6 xl:gap-7">
            {navItems.map((item) => {
              const isActive = activeSection === item.id;
              return (
                <a
                  key={item.name}
                  href={item.href}
                  className={`text-xs md:text-[13px] lg:text-sm font-medium transition-colors relative py-2 whitespace-nowrap ${
                    isActive ? 'text-[#cc0000]' : 'text-gray-300 hover:text-white'
                  }`}
                >
                  <span className="lg:hidden">{item.shortName ?? item.name}</span>
                  <span className="hidden lg:inline">{item.name}</span>
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
        </nav>

        <button
          type="button"
          onClick={() => window.dispatchEvent(new CustomEvent('open-consultation-modal'))}
          className={`group justify-self-end flex items-center gap-1.5 h-[50px] md:h-[52px] lg:h-[58px] text-[10px] md:text-[11px] font-medium px-3 md:px-4 lg:px-5 rounded-2xl border transition-all duration-300 active:scale-95 whitespace-nowrap shrink-0 cursor-pointer ${ctaClasses}`}
        >
          <span className="hidden xl:inline">Get Free Consultation</span>
          <span className="xl:hidden">Consult</span>
          <ChevronRight className={`w-3.5 h-3.5 shrink-0 transition-colors duration-300 ${ctaIconClasses}`} />
        </button>
      </div>

      {/* Dropdown — phone only */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="md:hidden fixed inset-0 bg-black/60 backdrop-blur-sm pointer-events-auto"
              onClick={() => setIsMobileMenuOpen(false)}
            />
            <motion.div
              initial={{ opacity: 0, y: -12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              className="md:hidden pointer-events-auto absolute top-full left-0 right-0 mt-3 bg-[#050505]/98 backdrop-blur-3xl border border-white/10 rounded-2xl overflow-hidden shadow-2xl max-h-[calc(100vh-6rem)] overflow-y-auto"
            >
              <div className="px-4 py-4 space-y-1">
                {navItems.map((item) => {
                  const isActive = activeSection === item.id;
                  return (
                    <a
                      key={item.name}
                      href={item.href}
                      onClick={() => setIsMobileMenuOpen(false)}
                      className={`block px-4 py-3.5 text-base font-medium rounded-xl transition-colors ${
                        isActive ? 'bg-white/5 text-[#cc0000]' : 'text-gray-300 hover:bg-white/5 hover:text-white'
                      }`}
                    >
                      {item.name}
                    </a>
                  );
                })}
                <button
                  type="button"
                  onClick={() => {
                    setIsMobileMenuOpen(false);
                    window.dispatchEvent(new CustomEvent('open-consultation-modal'));
                  }}
                  className="w-full mt-2 flex items-center justify-center gap-2 px-4 py-3.5 rounded-xl bg-[#cc0000] text-white text-sm font-medium"
                >
                  Get Free Consultation
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
