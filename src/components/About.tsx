import React from 'react';
import { motion } from 'framer-motion';

export function About() {
  return (
    <section id="about" className="py-24 bg-[#050505] relative overflow-hidden">
      {/* Premium background glow elements */}
      <div className="absolute top-1/2 left-1/4 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-h2t-red/5 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-[300px] h-[300px] bg-h2t-red/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column - Founder Image cropped to show only left half (logo & person) */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-5 flex justify-center"
          >
            <div className="relative w-full max-w-[480px] lg:max-w-none h-[420px] sm:h-[500px] lg:h-[620px] overflow-hidden rounded-2xl border border-white/10 shadow-2xl group">
              <img
                src="/image copy 10.png"
                alt="Hareesh VN - H2T Technologies"
                className="absolute inset-0 w-[205%] max-w-none h-full object-cover object-left transition-transform duration-700 group-hover:scale-105"
              />
              {/* Subtle overlay for mobile to blend edges */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#050505]/75 via-transparent to-transparent lg:hidden pointer-events-none" />
              <div className="absolute inset-0 bg-white/[0.02] pointer-events-none" />
            </div>
          </motion.div>

          {/* Right Column - Premium Content & Quotes */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
            className="lg:col-span-7 flex flex-col justify-center text-left lg:pl-6"
          >
            {/* Subtitle */}
            <div className="flex items-center gap-3 text-h2t-red font-semibold tracking-[0.2em] text-xs sm:text-sm mb-6 uppercase">
              <span className="w-8 h-[1px] bg-h2t-red"></span>
              <span>ABOUT H2T</span>
              <span className="w-8 h-[1px] bg-h2t-red"></span>
            </div>

            {/* Main Headline */}
            <h2 className="text-3xl sm:text-4xl lg:text-[46px] font-serif font-bold text-white leading-[1.15] mb-8 tracking-tight">
              Engineering Growth <br />
              Through <span className="text-h2t-red">Innovation & Automation</span>
            </h2>

            {/* Body Copy */}
            <div className="space-y-6 text-gray-300 text-sm sm:text-base font-light leading-relaxed mb-8">
              <p>
                At H2T Technologies, we help businesses scale through smart automation, 
                modern development, and innovative digital solutions. From web platforms 
                to business automation systems, we create technology that improves 
                efficiency, strengthens brand presence, and drives measurable growth.
              </p>
              <p>
                Built with innovation at the core, H2T combines technology, strategy, 
                and creativity to deliver solutions that are not only visually premium but 
                also performance-driven and future-ready.
              </p>
            </div>

            {/* Premium Quote Card with Rotating Star Border */}
            <div className="relative rounded-2xl p-[1.5px] overflow-hidden shadow-[0_8px_32px_rgba(0,0,0,0.5)]">
              {/* Outer soft ambient glow blur */}
              <div className="absolute inset-0 rounded-2xl p-[1.5px] overflow-hidden pointer-events-none opacity-40 blur-sm">
                <div className="absolute inset-[-1000%] bg-[conic-gradient(from_0deg,transparent_75%,#ff1a1a_100%)] animate-[spin_5s_linear_infinite]" />
              </div>
              
              {/* The actual rotating star border track */}
              <div className="absolute inset-0 rounded-2xl p-[1.5px] overflow-hidden pointer-events-none">
                <div className="absolute inset-[-1000%] bg-[conic-gradient(from_0deg,transparent_75%,#ff1a1a_100%)] animate-[spin_5s_linear_infinite]" />
              </div>

              {/* Inner card container */}
              <div className="relative z-10 w-full h-full rounded-[15px] p-6 sm:p-8 bg-[#050505]/95 backdrop-blur-md overflow-hidden">
                {/* Subtle base border overlay */}
                <div className="absolute inset-0 rounded-[15px] border border-white/5 pointer-events-none" />

                {/* Top-left double quotation mark */}
                <span className="text-h2t-red text-6xl font-serif absolute top-2 left-4 select-none opacity-80 leading-none">“</span>
                
                <div className="relative z-10 pl-6 pr-6 py-2">
                  <p className="text-white text-base sm:text-lg lg:text-xl font-bold tracking-wide leading-relaxed mb-4 uppercase italic font-sans">
                    Technology is not just about building systems, it's about creating impact and{' '}
                    <span className="text-h2t-red">transforming possibilities</span> into growth.
                  </p>
                  <div className="text-gray-400 text-xs sm:text-sm">
                    — <span className="text-h2t-red font-semibold">Hareesh VN</span>, Founder & CEO, H2T Technologies
                  </div>
                </div>
                
                {/* Bottom-right double quotation mark */}
                <span className="text-h2t-red text-6xl font-serif absolute bottom-0 right-4 select-none opacity-80 leading-none">”</span>
              </div>
            </div>

          </motion.div>

        </div>
      </div>
    </section>
  );
}
