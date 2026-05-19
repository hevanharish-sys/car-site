import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  ChevronLeft, 
  ChevronRight, 
  Globe, 
  Video, 
  Zap, 
  Users, 
  Search, 
  Megaphone, 
  Share2, 
  ArrowUpRight 
} from 'lucide-react';

const services = [
  {
    num: '01',
    title: 'Cinematic Video Editing',
    description: 'Transform raw footage into captivating cinematic stories. We edit high-retention social content, ads, and brand films that captivate and convert.',
    icon: <Video className="w-8 h-8 text-white" />,
    image: '/image copy 3.png',
    serviceKey: 'video',
  },
  {
    num: '02',
    title: 'Website Development',
    description: 'Depending on business goals, we develop premium high-performance web systems that fit your brand perfectly like a custom suit. No templates allowed!',
    icon: <Globe className="w-8 h-8 text-white" />,
    image: '/image copy 5.png',
    serviceKey: 'website',
  },
  {
    num: '03',
    title: 'Google SEO Engine',
    description: 'Rank for high-intent keywords that drive immediate pipeline. Technical audits, content velocity strategy, and white-hat domain authority optimization.',
    icon: <Search className="w-8 h-8 text-white" />,
    image: '/image copy.png',
    serviceKey: 'seo',
  },
  {
    num: '04',
    title: 'WhatsApp Automation',
    description: 'Build conversational AI chatbots, mass broadcast channels, and automatic follow-up workflows straight to your sales pipeline Meta-API frameworks.',
    icon: <Zap className="w-8 h-8 text-white" />,
    image: '/image copy 4.png',
    serviceKey: 'automation',
  },
  {
    num: '05',
    title: 'LinkedIn Lead Systems',
    description: 'Unlock enterprise-level professional growth. We build authority-generating content funnels and automated campaigns that connect you to core decision-makers.',
    icon: <Users className="w-8 h-8 text-white" />,
    image: '/image copy 6.png',
    serviceKey: 'linkedin',
  },
  {
    num: '06',
    title: 'Google & YouTube Ads',
    description: 'Capture active buying intent at the exact second prospects search. We deploy optimized campaign structures that filter waste and maximize pipeline.',
    icon: <Megaphone className="w-8 h-8 text-white" />,
    image: '/image copy 8.png',
    serviceKey: 'google-ads',
  },
  {
    num: '07',
    title: 'Social Paid Advertising',
    description: 'Command attention on Facebook & Instagram. High-converting creative strategies combined with deep funnel scaling to drive customer acquisition.',
    icon: <Share2 className="w-8 h-8 text-white" />,
    image: '/image copy 7.png',
    serviceKey: 'facebook-ads',
  }
];

export function Services({ onSelectService }: { onSelectService: (serviceKey: string) => void }) {
  const [activeIndex, setActiveIndex] = useState(1);
  const [isMobile, setIsMobile] = useState(false);
  const trackRef = useRef<HTMLDivElement>(null);

  // Handle responsive detection
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const handleNext = () => {
    setActiveIndex((prev) => (prev + 1) % services.length);
  };

  const handlePrev = () => {
    setActiveIndex((prev) => (prev - 1 + services.length) % services.length);
  };

  return (
    <section id="services" className="py-24 bg-[#050505] relative overflow-hidden">
      {/* Premium Background Ambient Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-0 w-full h-[500px] bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGcgc3Ryb2tlPSJyZ2JhKDI1NSwyNTUsMjU1LDAuMDMpIiBzdHJva2Utd2lkdGg9IjEiIGZpbGw9Im5vbmUiPjxwYXRoIGQ9Ik0wIDYwaDYwTTAgMGg2ME02MCAwdjYwTTAgMHY2MCIvPjwvZz48L3N2Zz4=')] opacity-20 mask-image:linear-gradient(to_bottom,transparent,black,transparent)]" />
        <div className="absolute top-1/4 left-0 w-[40%] h-[40%] bg-purple-900/10 blur-[120px] rounded-full" />
        <div className="absolute top-3/4 right-0 w-[40%] h-[40%] bg-blue-900/10 blur-[120px] rounded-full" />
      </div>

      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center mb-16 relative">
          <div className="flex items-center justify-center gap-4 mb-4">
            <div className="h-[1px] w-8 bg-white/20" />
            <span className="text-white/60 text-xs font-bold tracking-[0.2em] uppercase">What We Do</span>
            <div className="h-[1px] w-8 bg-white/20" />
          </div>
          
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl lg:text-[56px] font-bold mb-6 tracking-tight text-white"
          >
            Powerful <span className="text-[#ff1a1a]">Digital</span> Services
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-sm md:text-base text-white font-light max-w-2xl mx-auto"
          >
            We combine high-end technology, automated operations, and performance marketing to help modern brands scale.
          </motion.p>
        </div>

        {/* Carousel Section Container */}
        <div className="relative px-2 md:px-12 mb-16">
          
          {/* Outer Slider Wrapper */}
          <div className="overflow-hidden py-10">
            <div
              ref={trackRef}
              className="flex transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)]"
              style={{
                transform: isMobile
                  ? `translateX(-${activeIndex * 100}%)`
                  : `translateX(-${(activeIndex - 1) * 33.3333}%)`,
              }}
            >
              {services.map((service, index) => {
                const isCenter = index === activeIndex;
                const isLeft = index === (activeIndex - 1 + services.length) % services.length;
                const isRight = index === (activeIndex + 1) % services.length;

                return (
                  <div
                    key={index}
                    onClick={() => {
                      if (!isCenter) setActiveIndex(index);
                    }}
                    className={`shrink-0 px-3 md:px-5 transition-all duration-500 cursor-pointer ${
                      isMobile
                        ? 'w-full'
                        : 'w-[33.3333%]'
                    } ${
                      isCenter
                        ? 'scale-105 z-20 opacity-100'
                        : 'scale-[0.94] z-10 opacity-45 hover:opacity-75 blur-[0.5px]'
                    }`}
                  >
                    {/* The Premium Glassmorphic Service Card */}
                    <div
                      className={`relative w-full h-full rounded-[28px] p-6 sm:p-8 overflow-hidden transition-all duration-500 border backdrop-blur-xl ${
                        isCenter
                          ? 'bg-[#101015]/65 border-white/15 shadow-[0_20px_50px_rgba(139,92,246,0.12)]'
                          : 'bg-[#08080a]/35 border-white/5 shadow-none'
                      }`}
                    >
                      {/* Dynamic glossy reflection shine across the top left */}
                      <div className="absolute top-0 left-0 right-0 h-[100px] bg-gradient-to-br from-white/[0.02] via-transparent to-transparent pointer-events-none" />

                      {/* Active glowing color gradients (Center Card only) */}
                      {isCenter && (
                        <>
                          <div className="absolute inset-0 bg-gradient-to-t from-purple-600/[0.08] via-blue-600/[0.03] to-transparent pointer-events-none" />
                          <div className="absolute -bottom-10 left-1/2 -translate-x-1/2 w-[120%] h-[150px] bg-gradient-to-t from-purple-500/20 via-blue-500/5 to-transparent rounded-full blur-2xl pointer-events-none animate-pulse" />
                        </>
                      )}

                      {/* Header Hexagon Glass Icon block */}
                      <div className="w-full aspect-[4/3] rounded-[20px] overflow-hidden mb-6 relative bg-gradient-to-tr from-[#131316] via-[#1c1c21] to-[#131316] flex items-center justify-center border border-white/5 shadow-inner">
                        {/* Diagonal reflection shine line */}
                        <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/[0.02] to-transparent pointer-events-none" />
                        
                        {/* Glowing reflection behind active card hexagon */}
                        {isCenter && (
                          <div className="absolute w-24 h-24 rounded-full bg-purple-500/20 blur-xl pointer-events-none animate-pulse" />
                        )}

                        {/* Refined Glass Hexagon Container */}
                        <div className="relative w-24 h-24 flex items-center justify-center bg-white/[0.02] border border-white/10 rounded-2xl backdrop-blur-md shadow-[inset_0_1px_1px_rgba(255,255,255,0.15)] group-hover:scale-105 transition-transform duration-300">
                          {/* Inner Hexagonal Border */}
                          <svg className="absolute inset-0 w-full h-full p-2 text-white/5 opacity-20" viewBox="0 0 100 100" fill="currentColor">
                            <path d="M50 5 L90 28 L90 72 L50 95 L10 72 L10 28 Z" />
                          </svg>
                          <svg className="w-[82%] h-[82%] absolute inset-0 m-auto" viewBox="0 0 100 100" fill="none">
                            <path
                              d="M50 6 L88 28 L88 72 L50 94 L12 72 L12 28 Z"
                              fill="rgba(255, 255, 255, 0.02)"
                              stroke="rgba(255, 255, 255, 0.15)"
                              strokeWidth="1.2"
                            />
                          </svg>
                          <div className="relative z-10 text-white drop-shadow-[0_0_8px_rgba(255,255,255,0.2)]">
                            {service.icon}
                          </div>
                        </div>
                      </div>

                      {/* Content */}
                      <div className="flex flex-col relative z-10">
                        {/* Service Number Badge */}
                        <div className="text-gray-600 text-xs font-bold tracking-widest uppercase mb-1">
                          SERVICE {service.num}
                        </div>

                        {/* Title */}
                        <h3 className="text-xl sm:text-2xl font-bold tracking-wide text-[#ff1a1a] leading-tight mb-4 min-h-[56px] flex items-center">
                          {service.title}
                        </h3>
                        
                        {/* Description */}
                        <p className="text-white text-xs sm:text-sm font-light leading-relaxed mb-8 min-h-[80px]">
                          {service.description}
                        </p>

                        {/* Action CTA Button */}
                        <button
                          onClick={(e) => {
                            e.stopPropagation();
                            onSelectService(service.serviceKey);
                          }}
                          className={`w-full text-center py-3.5 px-6 rounded-xl text-xs sm:text-sm font-bold tracking-wider transition-all duration-300 ${
                            isCenter
                              ? 'bg-[#ff1a1a] hover:bg-[#e60000] text-white shadow-[0_0_20px_rgba(255,26,26,0.35)] font-semibold active:scale-95'
                              : 'bg-white/5 border border-white/10 text-white hover:bg-white/10 hover:border-white/20 active:scale-95'
                          }`}
                        >
                          Learn more
                        </button>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Navigation Arrows at Sides (Desktop only) */}
          <button
            onClick={handlePrev}
            className="absolute left-0 top-1/2 -translate-y-1/2 z-30 w-12 h-12 rounded-full border border-white/10 bg-black/60 hover:bg-[#dc2626] hover:border-[#dc2626] text-white flex items-center justify-center transition-all duration-300 group shadow-md"
            aria-label="Previous service"
          >
            <ChevronLeft className="w-5 h-5 group-hover:scale-110 transition-transform" />
          </button>
          
          <button
            onClick={handleNext}
            className="absolute right-0 top-1/2 -translate-y-1/2 z-30 w-12 h-12 rounded-full border border-white/10 bg-black/60 hover:bg-[#dc2626] hover:border-[#dc2626] text-white flex items-center justify-center transition-all duration-300 group shadow-md"
            aria-label="Next service"
          >
            <ChevronRight className="w-5 h-5 group-hover:scale-110 transition-transform" />
          </button>

        </div>

        {/* Carousel Pagination Dots */}
        <div className="flex justify-center items-center gap-3 mb-16">
          {services.map((_, index) => (
            <button
              key={index}
              onClick={() => setActiveIndex(index)}
              className={`h-2.5 rounded-full transition-all duration-300 ${
                index === activeIndex
                  ? 'w-8 bg-red-600 shadow-[0_0_10px_rgba(220,38,38,0.5)]'
                  : 'w-2.5 bg-white/20 hover:bg-white/40'
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>

        {/* Bottom CTA Banner */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto rounded-full bg-[#0a0a0a] border border-white/5 p-2 pr-2 pl-6 sm:pl-8 flex flex-col sm:flex-row items-center justify-between gap-6 relative overflow-hidden"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-red-500/5 to-transparent pointer-events-none" />
          
          <div className="flex items-center gap-4 py-4 sm:py-2 relative z-10">
            <div className="text-red-500 hidden sm:block">
              <span className="inline-block animate-bounce">🚀</span>
            </div>
            <div>
              <h4 className="text-white font-bold text-[15px] mb-0.5">Ready to take your business to the next level?</h4>
              <p className="text-gray-400 text-xs font-light">Let's build powerful strategies that drive real results.</p>
            </div>
          </div>

          <a
            href="#contact"
            className="w-full sm:w-auto relative z-10 flex items-center justify-center gap-2 bg-[#dc2626] hover:bg-red-600 transition-colors text-white text-xs font-bold uppercase tracking-wider px-8 py-5 rounded-full whitespace-nowrap"
          >
            Let's Work Together
            <ArrowUpRight className="w-4 h-4" strokeWidth={2.5} />
          </a>
        </motion.div>
        
      </div>
    </section>
  );
}
