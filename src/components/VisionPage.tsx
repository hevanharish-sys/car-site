import React from 'react';
import { motion } from 'framer-motion';
import { ArrowLeft, Award, Shield, Sparkles, Compass } from 'lucide-react';
import { BrandLogo } from './BrandLogo';

interface VisionPageProps {
  onBack: () => void;
}

export function VisionPage({ onBack }: VisionPageProps) {
  return (
    <div className="relative min-h-screen overflow-y-auto bg-[#050505] text-white font-sans flex flex-col justify-center items-center py-24 px-4 sm:px-6 lg:px-8 selection:bg-h2t-red selection:text-white">
      
      {/* Cinematic Background Grid and Blurs */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-0 w-full h-full bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iODAiIGhlaWdodD0iODAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGcgc3Ryb2tlPSJyZ2JhKDI1NSwyNTUsMjU1LDAuMDIpIiBzdHJva2Utd2lkdGg9IjEiIGZpbGw9Im5vbmUiPjxwYXRoIGQ9Ik0wIDgwaDgwTTAgMGg4ME04MCAwdjgwTTAgMHY4MCIvPjwvZz48L3N2Zz4=')] opacity-30" />
        <div className="absolute top-1/4 left-1/4 w-[50%] h-[50%] bg-h2t-red/10 blur-[160px] rounded-full animate-pulse" style={{ animationDuration: '8s' }} />
        <div className="absolute bottom-1/4 right-1/4 w-[40%] h-[40%] bg-purple-900/10 blur-[140px] rounded-full animate-pulse" style={{ animationDuration: '10s' }} />
      </div>

      {/* Premium Top Navigation Pill Row */}
      <div className="absolute top-8 left-4 right-4 sm:left-8 sm:right-8 z-50 flex items-center justify-between max-w-6xl w-full mx-auto">
        {/* Left circular H2T brand logo button */}
        <button
          onClick={onBack}
          title="Go back to Home"
          className="flex items-center justify-center shrink-0 hover:opacity-85 transition-opacity active:scale-95 duration-150"
        >
          <BrandLogo height={36} />
        </button>

        {/* Right back button */}
        <button
          onClick={onBack}
          className="flex items-center gap-2 px-5 py-2.5 rounded-full bg-white/5 hover:bg-white/10 text-white border border-white/10 text-xs font-semibold shadow-lg backdrop-blur-md transition-all hover:scale-105 active:scale-95 duration-200"
        >
          <ArrowLeft className="w-4 h-4 text-h2t-red" />
          Back to Home
        </button>
      </div>

      {/* Main Quote Container */}
      <div className="relative max-w-6xl w-full z-10 flex flex-col items-center text-center mt-12 sm:mt-8">
        
        {/* Custom Concentric Red Target SVG Logo Badge */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, type: 'spring' }}
          className="mb-8 p-4 rounded-3xl bg-white/[0.01] border border-white/10 backdrop-blur-md flex items-center justify-center text-h2t-red shadow-[0_0_30px_rgba(255,26,26,0.15)] relative group overflow-hidden"
        >
          {/* Glass highlights */}
          <div className="absolute inset-0 bg-gradient-to-tr from-h2t-red/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
          
          <div className="relative z-10 w-12 h-12 flex items-center justify-center">
            <svg width="48" height="48" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" className="animate-pulse">
              <circle cx="50" cy="50" r="40" stroke="#ff1a1a" strokeWidth="7" />
              <circle cx="50" cy="50" r="24" stroke="#ff1a1a" strokeWidth="7" />
              <circle cx="50" cy="50" r="8" fill="#ff1a1a" />
            </svg>
          </div>
        </motion.div>

        {/* Small upper subtitle */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="flex items-center gap-3 mb-6"
        >
          <div className="h-[1px] w-6 bg-h2t-red/50" />
          <span className="text-h2t-red text-xs font-bold tracking-[0.3em] uppercase">H2T Technologies</span>
          <div className="h-[1px] w-6 bg-h2t-red/50" />
        </motion.div>

        {/* Heading */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-4xl sm:text-6xl font-bold font-serif tracking-tight text-white mb-16"
        >
          Vision & <span className="text-[#ff1a1a]">Mission</span>
        </motion.h1>

        {/* Dynamic Double Column Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full max-w-5xl">
          
          {/* ================== VISION CARD ================== */}
          <motion.div
            initial={{ opacity: 0, x: -30, y: 20 }}
            animate={{ opacity: 1, x: 0, y: 0 }}
            transition={{ duration: 1, type: 'spring', delay: 0.3 }}
            className="relative rounded-[28px] p-[1.5px] overflow-hidden shadow-[0_20px_50px_rgba(255,26,26,0.08)] flex flex-col"
          >
            {/* Conic Gradient sweeping red glow border */}
            <div className="absolute inset-[-1000%] bg-[conic-gradient(from_0deg,transparent_75%,#ff1a1a_100%)] animate-[spin_6s_linear_infinite]" />
            <div className="absolute inset-[-1000%] bg-[conic-gradient(from_0deg,transparent_75%,#ff1a1a_100%)] animate-[spin_6s_linear_infinite] blur-md opacity-30" />

            <div className="relative z-10 w-full rounded-[26.5px] bg-[#09090c]/98 p-8 sm:p-12 backdrop-blur-2xl flex-grow flex flex-col justify-between">
              <div>
                {/* Floating visual glass shine */}
                <div className="absolute top-0 left-0 right-0 h-[100px] bg-gradient-to-b from-white/[0.02] via-transparent to-transparent pointer-events-none" />
                
                {/* Upper card header */}
                <div className="flex items-center gap-3 mb-6 border-b border-white/5 pb-4">
                  <div className="w-8 h-8 rounded-lg bg-h2t-red/10 border border-h2t-red/25 flex items-center justify-center text-h2t-red">
                    <Sparkles className="w-4 h-4 animate-pulse" />
                  </div>
                  <span className="text-sm font-bold uppercase tracking-wider text-white">Our Vision</span>
                </div>

                <div className="relative my-4">
                  <span className="absolute -top-6 -left-3 text-7xl font-serif text-h2t-red/10 select-none pointer-events-none">“</span>
                  <p className="relative z-10 text-xl font-light font-serif leading-relaxed text-gray-200 italic">
                    To become a globally recognized technology company that empowers businesses through innovation, automation, and scalable digital solutions.
                  </p>
                  <span className="absolute -bottom-14 -right-1 text-7xl font-serif text-h2t-red/10 select-none pointer-events-none">”</span>
                </div>
              </div>

              <div className="mt-12 flex items-center gap-2 text-[9px] font-mono text-gray-600 uppercase tracking-widest text-left">
                <Shield className="w-3 h-3 text-h2t-red" />
                Empowering Digital Scales
              </div>
            </div>
          </motion.div>

          {/* ================== MISSION CARD ================== */}
          <motion.div
            initial={{ opacity: 0, x: 30, y: 20 }}
            animate={{ opacity: 1, x: 0, y: 0 }}
            transition={{ duration: 1, type: 'spring', delay: 0.4 }}
            className="relative rounded-[28px] p-[1.5px] overflow-hidden shadow-[0_20px_50px_rgba(255,26,26,0.08)] flex flex-col"
          >
            {/* Conic Gradient sweeping red glow border */}
            <div className="absolute inset-[-1000%] bg-[conic-gradient(from_0deg,transparent_75%,#ff1a1a_100%)] animate-[spin_6s_linear_infinite]" />
            <div className="absolute inset-[-1000%] bg-[conic-gradient(from_0deg,transparent_75%,#ff1a1a_100%)] animate-[spin_6s_linear_infinite] blur-md opacity-30" />

            <div className="relative z-10 w-full rounded-[26.5px] bg-[#09090c]/98 p-8 sm:p-12 backdrop-blur-2xl flex-grow flex flex-col justify-between">
              <div>
                {/* Floating visual glass shine */}
                <div className="absolute top-0 left-0 right-0 h-[100px] bg-gradient-to-b from-white/[0.02] via-transparent to-transparent pointer-events-none" />
                
                {/* Upper card header */}
                <div className="flex items-center gap-3 mb-6 border-b border-white/5 pb-4">
                  <div className="w-8 h-8 rounded-lg bg-h2t-red/10 border border-h2t-red/25 flex items-center justify-center text-h2t-red">
                    <Compass className="w-4 h-4 animate-pulse" />
                  </div>
                  <span className="text-sm font-bold uppercase tracking-wider text-white">Our Mission</span>
                </div>

                <div className="relative my-4">
                  <span className="absolute -top-6 -left-3 text-7xl font-serif text-h2t-red/10 select-none pointer-events-none">“</span>
                  <p className="relative z-10 text-xl font-light font-serif leading-relaxed text-gray-200 italic">
                    Our mission is to help businesses grow through innovative technology, smart automation, and high-performance digital solutions that create real impact.
                  </p>
                  <span className="absolute -bottom-14 -right-1 text-7xl font-serif text-h2t-red/10 select-none pointer-events-none">”</span>
                </div>
              </div>

              <div className="mt-12 flex items-center gap-2 text-[9px] font-mono text-gray-600 uppercase tracking-widest text-left">
                <Award className="w-3 h-3 text-h2t-red" />
                Impactful Smart Architecture
              </div>
            </div>
          </motion.div>

        </div>
        
        {/* Bottom verification metadata */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.8 }}
          className="mt-16 text-[10px] font-mono text-gray-600 tracking-widest"
        >
          H2T_SYSTEM_PROTOCOL // REF_098_VISION_MISSION_OFFICIAL // VERIFIED
        </motion.div>

      </div>
    </div>
  );
}
