import { motion } from 'framer-motion';
import { ChevronRight, Play } from 'lucide-react';

export function Hero() {
  return (
    <section 
      id="home" 
      className="relative w-full h-screen overflow-hidden flex items-center justify-start bg-[#050505]"
      style={{
        backgroundImage: "url('/image copy 9.png')",
        backgroundSize: "cover",
        backgroundPosition: "right center",
        backgroundRepeat: "no-repeat"
      }}
    >
      {/* Linear gradient dark overlay */}
      <div 
        className="absolute inset-0 z-0 pointer-events-none" 
        style={{
          background: "linear-gradient(90deg, rgba(0,0,0,0.72) 0%, rgba(0,0,0,0.50) 35%, rgba(0,0,0,0.18) 100%)"
        }}
      />

      {/* Hero Content Overlay aligned left-center */}
      <div className="relative z-10 w-full pl-6 md:pl-[30px] lg:pl-[40px] pt-[40px]">
        <div className="text-left flex flex-col justify-center w-full max-w-[850px]">
          
          {/* Desktop Logo (Visible above heading) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="mb-8 flex flex-col"
          >
            <div className="flex items-center gap-1 mb-1">
              <span className="text-white text-5xl font-black italic tracking-tighter leading-none">H</span>
              <span className="text-[#cc0000] text-5xl font-black italic tracking-tighter leading-none">2</span>
              <span className="text-white text-5xl font-black italic tracking-tighter leading-none">T</span>
            </div>
            <div className="text-white text-[11px] tracking-[0.45em] font-medium mt-1.5 leading-none">
              TECHNOLOGIES
            </div>
            <div className="flex items-center gap-2 mt-2">
              <div className="h-[1px] w-4 bg-[#cc0000]"></div>
              <div className="text-[#cc0000] text-[8px] uppercase tracking-widest leading-none">Innovate Beyond Limits</div>
              <div className="h-[1px] w-4 bg-[#cc0000]"></div>
            </div>
          </motion.div>

          {/* Main Typography */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.1 }}
            className="text-[36px] md:text-[48px] lg:text-[58px] font-[800] tracking-tight m-0 leading-[1.05] text-white"
          >
            <span className="whitespace-nowrap">We Build. We Automate.</span><br />
            <span className="whitespace-nowrap">We <span className="text-[#cc0000] text-glow select-none">Grow</span> Your Business.</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.3 }}
            className="text-[15px] md:text-[18px] leading-[1.6] mt-[24px] w-full max-w-[480px]"
            style={{ color: "rgba(255,255,255,0.78)" }}
          >
            Powerful technology and marketing solutions<br className="hidden sm:block" />
            that help businesses attract, engage,<br className="hidden sm:block" />
            and convert more customers.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
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
