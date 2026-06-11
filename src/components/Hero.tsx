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
      className="relative w-full min-h-screen overflow-hidden flex items-end md:items-center bg-[#050505]"
    >
      {/* Gradient overlay */}
      <div
        className="absolute inset-0 z-0 pointer-events-none"
        style={{
          background:
            'linear-gradient(90deg, rgba(0,0,0,0.88) 0%, rgba(0,0,0,0.72) 35%, rgba(0,0,0,0.45) 60%, rgba(0,0,0,0.25) 100%)',
        }}
      />

      <div className="relative z-10 w-full px-4 sm:px-6 md:pl-[30px] lg:pl-[40px] md:pr-6 lg:pr-8 pt-[88px] sm:pt-[96px] md:pt-[40px] pb-12 sm:pb-16 md:pb-0">
        <div className="text-left flex flex-col justify-center w-full max-w-[850px]">
          <motion.a
            href="#home"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="mb-6 md:mb-8 inline-block hover:opacity-90 transition-opacity"
          >
            <BrandLogo height={56} className="md:hidden" />
            <BrandLogo height={72} className="hidden md:block lg:hidden" />
            <BrandLogo height={88} className="hidden lg:block" />
          </motion.a>

          <motion.h1
            variants={headlineContainer}
            initial="hidden"
            animate="visible"
            className="text-[1.75rem] min-[400px]:text-[32px] sm:text-[42px] lg:text-[54px] font-[800] tracking-tight m-0 leading-[1.15] sm:leading-[1.1] text-white max-w-[640px]"
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
            className="flex flex-col min-[480px]:flex-row items-stretch min-[480px]:items-center gap-3 sm:gap-4 w-full mt-6 sm:mt-8 max-w-lg min-[480px]:max-w-none"
          >
            <button
              onClick={() => window.dispatchEvent(new CustomEvent('open-consultation-modal'))}
              className="flex items-center justify-center gap-2 px-5 sm:px-8 py-3.5 sm:py-4 rounded-xl bg-[#cc0000] hover:bg-red-600 text-white font-medium transition-all duration-300 shadow-[0_0_15px_rgba(204,0,0,0.3)] hover:shadow-[0_0_25px_rgba(204,0,0,0.6)] text-center text-sm sm:text-base active:scale-95"
            >
              Get Free Consultation
              <ChevronRight className="w-4 h-4 shrink-0" />
            </button>
            <a
              href="#works"
              className="flex items-center justify-center gap-2 sm:gap-3 px-5 sm:px-8 py-3.5 sm:py-4 rounded-xl border border-white/20 text-white font-medium transition-all duration-300 hover:bg-white/5 backdrop-blur-sm text-center text-sm sm:text-base hover:border-[#cc0000]/50 hover:shadow-[0_0_15px_rgba(255,255,255,0.05)] active:scale-95"
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
