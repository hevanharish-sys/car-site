import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Philosophy } from './components/Philosophy';
import { FAQ } from './components/FAQ';
import { Services } from './components/Services';
import { FeaturedProjects } from './components/FeaturedProjects';
import { Portfolio } from './components/Portfolio';
import { Contact } from './components/Contact';
import { ScrollingCTA } from './components/ScrollingCTA';
import { Footer } from './components/Footer';
import { ServiceDetailPage } from './components/ServiceDetailPage';
import { ConsultationModal } from './components/ConsultationModal';
import { ExitIntentModal } from './components/ExitIntentModal';
import { PrivacyModal } from './components/PrivacyModal';
import { VisionPage } from './components/VisionPage';
import { ArrowLeft, Check, Sparkles, Zap, ShieldAlert, Cpu } from 'lucide-react';
import { useContentProtection } from './hooks/useContentProtection';

// Inline H2T Brand Logo Image component
const Logo = () => (
  <img 
    src="/image.png" 
    alt="H2T Technologies Logo" 
    className="h-8 sm:h-9 w-auto object-contain"
  />
);

export default function App() {
  useContentProtection();

  const [currentPage, setCurrentPage] = useState<string>('home');
  const [isConsultationOpen, setIsConsultationOpen] = useState(false);
  const [privacyModalState, setPrivacyModalState] = useState<{ isOpen: boolean; defaultTab: 'privacy' | 'terms' }>({
    isOpen: false,
    defaultTab: 'privacy',
  });
  const [showFloatingWhatsApp, setShowFloatingWhatsApp] = useState(false);

  // Listen to open-consultation-modal event
  useEffect(() => {
    const handleOpen = () => setIsConsultationOpen(true);
    window.addEventListener('open-consultation-modal', handleOpen);
    return () => window.removeEventListener('open-consultation-modal', handleOpen);
  }, []);

  // Track scrolling Y axis for floating WhatsApp button
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 500) {
        setShowFloatingWhatsApp(true);
      } else {
        setShowFloatingWhatsApp(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Scroll to top when switching pages
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [currentPage]);

  // Handle Dynamic Service Details Routing
  if (currentPage !== 'home' && currentPage !== 'automation' && currentPage !== 'vision') {
    return (
      <ServiceDetailPage
        serviceKey={currentPage}
        onBack={() => setCurrentPage('home')}
      />
    );
  }

  // Vision Statement Page View
  if (currentPage === 'vision') {
    return <VisionPage onBack={() => setCurrentPage('home')} />;
  }

  // Automation / WhatsApp Marketing Page View
  if (currentPage === 'automation') {
    return (
      <div className="relative min-h-screen overflow-y-auto bg-[#f0f0ee] font-sans selection:bg-blue-500 selection:text-white pb-24">
        {/* Fullscreen autoplaying, muted, looping, playsInline background video */}
        <div className="absolute top-0 left-0 w-full h-screen pointer-events-none overflow-hidden z-0">
          <video
            autoPlay
            muted
            loop
            playsInline
            className="w-full h-full object-cover"
          >
            <source
              src="https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260508_215831_c6a8989c-d716-4d8d-8745-e972a2eec711.mp4"
              type="video/mp4"
            />
          </video>
        </div>

        {/* Floating Back to Home button for usability */}
        <button
          onClick={() => setCurrentPage('home')}
          className="fixed top-6 left-6 z-50 flex items-center gap-2 px-4 py-2.5 rounded-full bg-white/80 hover:bg-white text-gray-800 text-xs font-semibold shadow-md transition-all hover:scale-105 duration-200 border border-gray-200/50"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to H2T
        </button>

        {/* Top Fold: Hero Section (min-h-screen) */}
        <div className="relative z-10 flex flex-col min-h-screen">
          
          {/* Centered, pill-style, two separate pills Navbar */}
          <nav className="flex items-center justify-center pt-4 sm:pt-6 px-4 sm:px-8 gap-2 sm:gap-3">
            {/* Left logo button container */}
            <button
              onClick={() => setCurrentPage('home')}
              title="Go back to Home"
              className="flex items-center justify-center shrink-0 hover:opacity-85 transition-opacity active:scale-95 duration-150"
            >
              <Logo />
            </button>

            {/* Right pill container */}
            <div
              className="flex items-center gap-4 sm:gap-10 rounded-xl px-4 sm:px-8 py-2.5 sm:py-3"
              style={{ backgroundColor: '#EDEDED' }}
            >
              {['Story', 'Products', 'Help', 'Support'].map((link) => (
                <a
                  key={link}
                  href="#"
                  onClick={(e) => e.preventDefault()}
                  className="text-[12px] sm:text-[14px] font-medium text-gray-700 hover:text-gray-900 transition-colors duration-200"
                >
                  {link}
                </a>
              ))}
            </div>
          </nav>

          {/* Hero Content (bottom-left aligned) */}
          <div className="flex-1 flex items-end pb-10 sm:pb-16 lg:pb-20 px-6 sm:px-12 md:px-20 lg:px-28">
            <div className="max-w-xs">
              
              {/* 1. Badge link */}
              <div className="mb-3">
                <a
                  href="#"
                  onClick={(e) => e.preventDefault()}
                  className="inline-flex items-center gap-1.5 text-[11.5px] font-medium text-blue-500 hover:text-blue-600 transition-colors group"
                >
                  Seen on Shark Tank in India
                  <span className="inline-block transition-transform duration-200 group-hover:translate-x-0.5">
                    →
                  </span>
                </a>
              </div>

              {/* 2. Headline */}
              <h1 className="text-[1.5rem] sm:text-[1.75rem] leading-[1.15] font-medium text-gray-900 tracking-tight mb-3">
                Simple, smart prosthetics made for people who keep fighting.
              </h1>

              {/* 3. Subtext */}
              <p className="text-[13px] text-gray-400 font-normal mb-3">
                Reclaim your movement now.
              </p>

              {/* 4. CTA anchor */}
              <div className="mb-3">
                <a
                  href="#details"
                  onClick={(e) => {
                    e.preventDefault();
                    document.getElementById('details')?.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="inline-flex items-center gap-2 text-[13px] font-medium text-blue-500 border border-blue-400 rounded-full px-5 py-2.5 hover:bg-blue-500 hover:text-white hover:border-blue-500 transition-all duration-200 group"
                >
                  Try a free fitting
                  <span className="transition-transform duration-200 group-hover:translate-x-0.5">
                    →
                  </span>
                </a>
              </div>

            </div>
          </div>
        </div>

        {/* Second Fold: Detailed WhatsApp & Marketing Automation Section (Light/Minimal Style to match fold 1) */}
        <div id="details" className="relative z-10 max-w-7xl mx-auto px-6 sm:px-12 md:px-20 lg:px-28 mt-24">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            {/* Left Content */}
            <div className="lg:col-span-7">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/20 mb-6">
                <Cpu className="w-3.5 h-3.5 text-blue-500" />
                <span className="text-blue-500 text-[10px] font-bold tracking-[0.2em] uppercase">
                  INTELLIGENT SYSTEMS
                </span>
              </div>

              <h2 className="text-3xl sm:text-4xl md:text-5xl font-medium tracking-tight text-gray-950 mb-6 leading-[1.1]">
                WhatsApp Marketing & <br />
                <span className="text-blue-500">Business Automations</span>
              </h2>

              <p className="text-sm sm:text-base font-light text-gray-600 leading-relaxed mb-8">
                Eliminate manual follow-ups, speed up customer communication times to seconds, and build automated lead generation machines. We build full conversational AI flows, robust database integrations, broadcast systems, and automatic webhook triggers.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-12">
                {[
                  { title: 'Conversational AI Chatbots', desc: 'Pre-qualify leads, answer FAQs, and route bookings automatically 24/7.' },
                  { title: 'Mass Broadcast Outreach', desc: 'Securely message your customer database with high-conversions and custom data inputs.' },
                  { title: 'CRM & Pipeline Triggers', desc: 'Automatically sync bookings and conversations straight to HubSpot or Google Sheets.' },
                  { title: 'Operations Automations', desc: 'Streamline standard business practices via automated workflows and triggers.' }
                ].map((item, idx) => (
                  <div key={idx} className="p-5 rounded-2xl bg-white/70 border border-gray-200/50 shadow-sm">
                    <div className="w-8 h-8 rounded-lg bg-blue-500/10 flex items-center justify-center text-blue-500 mb-4">
                      <Zap className="w-4 h-4" />
                    </div>
                    <h4 className="text-gray-950 font-semibold text-sm mb-2">{item.title}</h4>
                    <p className="text-gray-500 text-xs font-light leading-relaxed">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Card / Trust */}
            <div className="lg:col-span-5">
              <div className="p-8 rounded-3xl bg-white/80 border border-gray-200/50 shadow-md">
                <h3 className="text-gray-950 font-bold text-lg mb-4">24/7 Operations Integration</h3>
                <p className="text-gray-500 text-xs font-light leading-relaxed mb-6">
                  Automation isn't just about saving time; it's about speed-to-lead. Research shows that replying to leads within 5 minutes increases conversion rates by over 300%. Our customized integration secures that responsiveness for your business automatically.
                </p>
                <div className="flex items-center gap-3 p-4 rounded-xl bg-yellow-500/10 border border-yellow-500/20 text-yellow-800 mb-6">
                  <ShieldAlert className="w-5 h-5 shrink-0" />
                  <span className="text-[11px] font-medium leading-normal">Zero-Ban risk integrations following official meta-API frameworks.</span>
                </div>
                <div className="flex justify-between text-[10px] text-gray-400 font-mono pt-4 border-t border-gray-100">
                  <span>SECURE SSL</span>
                  <span>SYSTEM // LIVE</span>
                </div>
              </div>
            </div>
          </div>

          {/* Pricing Grid */}
          <div className="mt-28">
            <div className="text-center mb-16">
              <div className="flex items-center justify-center gap-3 mb-4">
                <div className="h-[1px] w-6 bg-blue-500/40" />
                <span className="text-blue-500 text-[10px] font-bold tracking-[0.2em] uppercase">SYSTEM RATES</span>
                <div className="h-[1px] w-6 bg-blue-500/40" />
              </div>
              <h3 className="text-2xl sm:text-3xl font-semibold text-gray-950">Transparent Automation Plans</h3>
              <p className="text-gray-400 text-xs font-light mt-2">Scale your operations and conversational marketing at the perfect budget tier.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  name: 'Starter Chatbot',
                  price: '$499',
                  desc: 'Perfect for small businesses wanting automated FAQ answering and initial lead collection.',
                  features: ['Official WhatsApp API Setup', 'Custom FAQ Chatbot sequence', 'Instant Lead notification', 'Basic Google Sheets Sync', '1 business number connection', '1 round of chatbot tuning']
                },
                {
                  name: 'Marketing Automation Pro',
                  price: '$1,199',
                  popular: true,
                  desc: 'For brands looking to run automated broadcast campaigns and deep HubSpot/CRM sync.',
                  features: ['All Starter Bot benefits', 'Broadcast outreach campaigns', 'Conversational AI sequence', 'Full HubSpot/Zapier webhooks', 'Multi-agent chat inbox', 'Monthly performance tweaks']
                },
                {
                  name: 'Enterprise Operations System',
                  price: '$2,499',
                  desc: 'Custom business pipelines, automated client portals, and massive custom data triggers.',
                  features: ['All Pro features included', 'Bespoke custom API integrations', 'Full internal team automations', 'Calendar & scheduling loop', 'Dedicated account manager', '24/7 Priority SLA Dev Support']
                }
              ].map((tier, idx) => (
                <div
                  key={idx}
                  className={`relative rounded-3xl p-8 flex flex-col transition-all duration-300 ${
                    tier.popular
                      ? 'bg-[#EDEDED] border-blue-400 shadow-[0_0_30px_rgba(59,130,246,0.15)] scale-[1.02]'
                      : 'bg-white/70 border-gray-200/50 hover:border-gray-300'
                  } border h-full`}
                >
                  {tier.popular && (
                    <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-blue-500 text-white text-[9px] font-bold tracking-widest px-3 py-0.5 rounded-full uppercase">
                      Best Value
                    </span>
                  )}
                  <h4 className="text-gray-950 text-base font-bold tracking-wide mb-2">{tier.name}</h4>
                  <p className="text-gray-500 text-xs font-light mb-6 min-h-[40px] leading-relaxed">{tier.desc}</p>
                  
                  <div className="flex items-baseline gap-0.5 mb-8 pb-6 border-b border-gray-200">
                    <span className="text-4xl font-bold tracking-tight text-gray-950">{tier.price}</span>
                  </div>

                  <ul className="flex flex-col gap-4 mb-8 flex-grow">
                    {tier.features.map((feat, fIdx) => (
                      <li key={fIdx} className="flex items-start gap-3">
                        <div className="w-4 h-4 rounded-full bg-blue-500/10 flex items-center justify-center text-blue-500 mt-0.5 shrink-0">
                          <Check className="w-2.5 h-2.5" />
                        </div>
                        <span className="text-gray-700 text-xs sm:text-sm font-light leading-normal">{feat}</span>
                      </li>
                    ))}
                  </ul>

                  <button
                    onClick={() => {
                      setCurrentPage('home');
                      setTimeout(() => {
                        document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
                      }, 300);
                    }}
                    className={`w-full text-center py-4 rounded-xl text-xs font-bold tracking-widest uppercase transition-all duration-300 ${
                      tier.popular
                        ? 'bg-blue-500 hover:bg-blue-600 text-white shadow-md'
                        : 'bg-gray-200/80 hover:bg-gray-200 text-gray-800'
                    }`}
                  >
                    Get Automated
                  </button>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    );
  }

  // Home Page View
  return (
    <div className="min-h-screen bg-h2t-black text-white font-sans selection:bg-h2t-red selection:text-white">
      <Navbar />
      <Hero />
      <About />
      <FeaturedProjects />
      <Philosophy />
      <Services onSelectService={(serviceKey) => setCurrentPage(serviceKey)} />
      {/* <Portfolio /> */}
      <FAQ />
      <Contact />
      <ScrollingCTA />
      <Footer 
        onOpenPrivacy={(tab) => setPrivacyModalState({ isOpen: true, defaultTab: tab })} 
        onOpenVision={() => setCurrentPage('vision')} 
      />
      <ConsultationModal isOpen={isConsultationOpen} onClose={() => setIsConsultationOpen(false)} />
      <ExitIntentModal />
      <PrivacyModal 
        isOpen={privacyModalState.isOpen} 
        defaultTab={privacyModalState.defaultTab} 
        onClose={() => setPrivacyModalState(prev => ({ ...prev, isOpen: false }))} 
      />

      {/* Premium Floating WhatsApp Button */}
      <AnimatePresence>
        {showFloatingWhatsApp && (
          <motion.a
            initial={{ opacity: 0, scale: 0.6, y: 30 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.6, y: 30 }}
            transition={{ type: 'spring', stiffness: 260, damping: 20 }}
            href="https://wa.me/919566245321"
            target="_blank"
            rel="noopener noreferrer"
            title="Chat on WhatsApp"
            className="fixed bottom-[max(1.25rem,env(safe-area-inset-bottom))] right-[max(1.25rem,env(safe-area-inset-right))] sm:bottom-8 sm:right-8 z-[200] w-14 h-14 bg-[#25D366] hover:bg-[#20ba5a] text-white flex items-center justify-center rounded-full shadow-[0_8px_32px_rgba(37,211,102,0.45)] hover:shadow-[0_12px_40px_rgba(37,211,102,0.65)] hover:scale-110 active:scale-95 transition-all duration-300 group"
          >
            {/* Pulsing halo ring */}
            <span className="absolute inset-0 rounded-full bg-[#25D366]/30 animate-ping pointer-events-none" style={{ animationDuration: '2s' }} />
            
            <svg width="28" height="28" viewBox="0 0 24 24" fill="currentColor" className="w-7 h-7">
              <path d="M12.004 2c-5.518 0-9.996 4.477-9.996 9.995 0 1.763.459 3.42 1.261 4.877L2 22l5.304-1.393a9.932 9.932 0 0 0 4.697 1.184c5.518 0 10.004-4.477 10.004-9.995C22.008 6.477 17.522 2 12.004 2zm5.79 14.195c-.24.678-1.196 1.246-1.637 1.285-.436.039-.993.078-3.08-.745-2.67-1.05-4.385-3.765-4.52-3.94-.131-.176-1.077-1.433-1.077-2.73 0-1.296.677-1.934.919-2.195.242-.26.527-.326.702-.326.177 0 .356.002.508.01.161.008.38-.059.593.453.22.528.75 1.83.815 1.962.065.132.11.286.02.463-.087.177-.132.286-.264.442-.132.155-.278.347-.396.463-.131.13-.27.273-.117.534.153.261.68 1.121 1.458 1.813.998.887 1.838 1.164 2.102 1.295.263.131.417.11.572-.068.156-.177.663-.77.838-1.033.177-.263.355-.22.593-.132.24.088 1.517.715 1.777.847.26.131.434.198.498.31.066.11.066.643-.174 1.321z" />
            </svg>
          </motion.a>
        )}
      </AnimatePresence>
    </div>
  );
}
