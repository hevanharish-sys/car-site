import { motion } from 'framer-motion';
import { ChevronRight, Play } from 'lucide-react';
import { BrandLogo } from './BrandLogo';

const headlineContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.18, delayChildren: 0.15 },
  },
};

const headlineLine = {
  hidden: { opacity: 0, y: 36, filter: 'blur(10px)' },
  visible: {
    opacity: 1,
    y: 0,
    filter: 'blur(0px)',
    transition: { duration: 0.75, ease: [0.16, 1, 0.3, 1] as const },
  },
};

export function Hero() {
  return (
    <section 
      id="home" 
      className="relative w-full h-screen overflow-hidden flex items-end md:items-center justify-start bg-[#050505] pb-12 md:pb-0"
    >
      {/* Linear gradient dark overlay */}
      <div 
        className="absolute inset-0 z-0 pointer-events-none" 
        style={{
          background: "linear-gradient(90deg, rgba(0,0,0,0.72) 0%, rgba(0,0,0,0.50) 35%, rgba(0,0,0,0.18) 100%)"
        }}
      />

      {/* Hero Content Overlay aligned left-center */}
      <div className="relative z-10 w-full px-6 md:pl-[30px] lg:pl-[40px] md:pr-0 pt-[40px]">
        <div className="text-left flex flex-col justify-center w-full max-w-[850px]">
          
          {/* Logo above heading (desktop) */}
          <motion.a
            href="#home"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="mb-8 hidden md:block hover:opacity-90 transition-opacity"
          >
            <BrandLogo className="h-[80px] lg:h-[96px] w-auto object-contain" />
          </motion.a>

          {/* Main Typography */}
          <motion.h1
            variants={headlineContainer}
            initial="hidden"
            animate="visible"
            className="text-[32px] sm:text-[42px] lg:text-[54px] font-[800] tracking-tight m-0 leading-[1.15] sm:leading-[1.1] text-white max-w-[640px]"
          >
            <motion.span variants={headlineLine} className="block">
              We automate.
            </motion.span>
            <motion.span variants={headlineLine} className="block">
              We{' '}
              <span className="text-[#cc0000] text-glow">generate</span>
              {' '}leads.
            </motion.span>
            <motion.span variants={headlineLine} className="block">
              We scale revenue.
            </motion.span>
          </motion.h1>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.75 }}
            className="flex flex-col sm:flex-row items-stretch sm:items-center gap-[16px] w-full mt-[32px]"
          >
            <button
              onClick={() => window.dispatchEvent(new CustomEvent('open-consultation-modal'))}
              className="flex items-center justify-center gap-2 px-8 py-4 rounded-xl bg-[#cc0000] hover:bg-red-600 text-white font-medium transition-all duration-300 shadow-[0_0_15px_rgba(204,0,0,0.3)] hover:shadow-[0_0_25px_rgba(204,0,0,0.6)] text-center text-sm sm:text-base active:scale-95 whitespace-nowrap"
            >
              Get Free Consultation
              <ChevronRight className="w-4 h-4" />
            </button>
            <a
              href="#works"
              className="flex items-center justify-center gap-3 px-8 py-4 rounded-xl border border-white/20 text-white font-medium transition-all duration-300 hover:bg-white/5 backdrop-blur-sm text-center text-sm sm:text-base hover:border-[#cc0000]/50 hover:shadow-[0_0_15px_rgba(255,255,255,0.05)] active:scale-95 whitespace-nowrap"
            >
              <Play className="w-4 h-4 fill-white/10" />
              See Our Work
            </a>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
