import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Rocket, TrendingUp, Crown, Target, ShieldCheck, Clock, LineChart, Headphones, Calendar, Briefcase, ChevronRight, Check, CheckCircle2 } from 'lucide-react';

const plans = [
  {
    name: 'STARTER',
    nameSpan: 'PLAN',
    target: 'Small businesses & startups',
    price: '9,999',
    period: '/ month',
    theme: 'purple',
    icon: <Rocket className="w-8 h-8 text-indigo-400" />,
    features: [
      'Modern Responsive Website',
      'Basic SEO Setup',
      'WhatsApp Integration',
      'Contact Forms',
      'Mobile Optimization',
      'Basic Speed Optimization',
      '1 Month Support'
    ],
    buttonText: 'Get Started',
    buttonClass: 'border border-indigo-500 text-white hover:bg-indigo-500/20',
    borderClass: 'border-indigo-500/40',
    glowClass: 'shadow-[0_0_30px_rgba(99,102,241,0.15)] hover:shadow-[0_0_50px_rgba(99,102,241,0.3)]',
    textHighlight: 'text-indigo-400',
    bgGlow: 'from-indigo-500/10 via-transparent to-transparent',
    iconBg: 'border-indigo-500/30 bg-indigo-500/10'
  },
  {
    name: 'GROWTH',
    nameSpan: 'PLAN',
    target: 'Growing businesses',
    price: '24,999',
    period: '/ month',
    theme: 'red',
    icon: <TrendingUp className="w-8 h-8 text-red-500" />,
    isPopular: true,
    features: [
      'Premium Website Design',
      'Advanced SEO Optimization',
      'Facebook & Instagram Ads Setup',
      'WhatsApp Automation',
      'Google My Business Setup',
      'Performance Analytics',
      '3 Months Support',
      'Lead Generation Funnel'
    ],
    buttonText: 'Scale My Business',
    buttonClass: 'bg-red-600 text-white hover:bg-red-700 shadow-[0_0_20px_rgba(239,68,68,0.4)]',
    borderClass: 'border-red-500',
    glowClass: 'shadow-[0_0_40px_rgba(239,68,68,0.25)] hover:shadow-[0_0_60px_rgba(239,68,68,0.4)]',
    textHighlight: 'text-red-500',
    bgGlow: 'from-red-500/10 via-transparent to-transparent',
    iconBg: 'border-red-500/30 bg-red-500/10'
  },
  {
    name: 'ELITE',
    nameSpan: 'PLAN',
    target: 'Brands & enterprises',
    price: '49,999',
    period: '/ month',
    theme: 'gold',
    icon: <Crown className="w-8 h-8 text-yellow-500" />,
    features: [
      'Fully Custom Website',
      'Full Marketing Automation',
      'Google & YouTube Ads',
      'AI Chatbot Integration',
      'CRM Integration',
      'LinkedIn Growth Strategy',
      'Advanced SEO Strategy',
      'Priority Support',
      'Dedicated Strategy Team'
    ],
    buttonText: 'Go Elite',
    buttonClass: 'border border-yellow-500 text-white hover:bg-yellow-500/20',
    borderClass: 'border-yellow-500/40',
    glowClass: 'shadow-[0_0_30px_rgba(234,179,8,0.15)] hover:shadow-[0_0_50px_rgba(234,179,8,0.3)]',
    textHighlight: 'text-yellow-500',
    bgGlow: 'from-yellow-500/10 via-transparent to-transparent',
    iconBg: 'border-yellow-500/30 bg-yellow-500/10'
  }
];

export function Pricing() {
  const [isMonthly, setIsMonthly] = useState(true);

  return (
    <section id="pricing" className="py-24 bg-[#030303] relative overflow-hidden font-sans">
      {/* Background Cyberpunk Ambience */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-0 w-full h-full bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGcgc3Ryb2tlPSJyZ2JhKDI1NSwyNTUsMjU1LDAuMDMiIHN0cm9rZS13aWR0aD0iMSIgZmlsbD0ibm9uZSI+PHBhdGggZD0iTTAgNjBoNjBNMCAwaDYwTTYwIDB2NjBNMCAwdjYwIi8+PC9nPjwvc3ZnPg==')] opacity-[0.15] mask-image:linear-gradient(to_bottom,transparent,black,transparent)]" />
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[80%] h-[500px] bg-red-900/20 blur-[150px] rounded-[100%]" />
      </div>

      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center mb-16 relative">
          <div className="flex items-center justify-center gap-4 mb-6">
            <div className="h-[1px] w-8 bg-red-500/50" />
            <span className="text-red-500 text-[10px] sm:text-xs font-bold tracking-[0.2em] uppercase border border-red-500/30 rounded-full px-4 py-1.5 bg-red-500/10">Pricing Plans</span>
            <div className="h-[1px] w-8 bg-red-500/50" />
          </div>
          
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl lg:text-[64px] font-extrabold mb-6 tracking-tight text-white leading-tight"
          >
            Simple Pricing.<br />
            <span className="text-red-500 text-glow">Powerful Results.</span>
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-sm md:text-base text-gray-400 font-light max-w-2xl mx-auto mb-10"
          >
            Choose the perfect digital growth package for your business and scale with cutting-edge technology, automation, and marketing solutions.
          </motion.p>

          {/* Toggle */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="inline-flex items-center p-1.5 rounded-full bg-[#111] border border-white/10 relative"
          >
            <button
              onClick={() => setIsMonthly(true)}
              className={`relative z-10 flex items-center gap-2 px-6 py-2.5 rounded-full text-sm font-semibold transition-all duration-300 ${
                isMonthly ? 'text-white' : 'text-gray-500 hover:text-gray-300'
              }`}
            >
              <Calendar className="w-4 h-4" />
              Monthly
            </button>
            <button
              onClick={() => setIsMonthly(false)}
              className={`relative z-10 flex items-center gap-2 px-6 py-2.5 rounded-full text-sm font-semibold transition-all duration-300 ${
                !isMonthly ? 'text-white' : 'text-gray-500 hover:text-gray-300'
              }`}
            >
              <Briefcase className="w-4 h-4" />
              Project Based
            </button>
            
            {/* Active Pill Background */}
            <div 
              className={`absolute top-1.5 bottom-1.5 w-[calc(50%-0.375rem)] bg-red-600 rounded-full transition-transform duration-300 ease-out shadow-[0_0_15px_rgba(220,38,38,0.5)] ${
                isMonthly ? 'left-1.5' : 'translate-x-full left-1.5'
              }`}
            />
          </motion.div>
        </div>

        {/* Pricing Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10 mb-24 max-w-6xl mx-auto items-center">
          {plans.map((plan, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`relative group rounded-[2.5rem] bg-[#0a0a0a] border ${plan.borderClass} p-8 lg:p-10 transition-all duration-500 hover:-translate-y-2 ${plan.glowClass} flex flex-col ${
                plan.isPopular ? 'lg:scale-105 z-10' : 'z-0'
              }`}
            >
              {/* Card Background Gradient Glow */}
              <div className={`absolute inset-0 bg-gradient-to-b ${plan.bgGlow} opacity-50 rounded-[2.5rem] pointer-events-none`} />

              {/* Bottom Holographic Platform Glow (Image mockup effect) */}
              <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 w-[80%] h-[20px] rounded-full blur-[20px] bg-gradient-to-r from-transparent via-white/10 to-transparent pointer-events-none group-hover:opacity-100 opacity-50 transition-opacity" />
              <div className={`absolute -bottom-4 left-1/2 -translate-x-1/2 w-[60%] h-[10px] rounded-full blur-[15px] opacity-0 group-hover:opacity-100 transition-opacity duration-500 ${plan.theme === 'red' ? 'bg-red-500' : plan.theme === 'purple' ? 'bg-indigo-500' : 'bg-yellow-500'}`} />

              {plan.isPopular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full bg-[#1a0505] border border-red-500 text-red-500 text-[10px] font-bold uppercase tracking-widest z-20 shadow-[0_0_10px_rgba(239,68,68,0.5)]">
                  Most Popular
                </div>
              )}

              {/* Icon */}
              <div className="flex justify-center mb-6">
                <div className={`w-16 h-16 rounded-2xl flex items-center justify-center border backdrop-blur-md ${plan.iconBg} transform rotate-45 group-hover:scale-110 transition-transform duration-500`}>
                  <div className="-rotate-45">
                    {plan.icon}
                  </div>
                </div>
              </div>

              {/* Title */}
              <div className="text-center mb-6">
                <h3 className="text-lg font-bold tracking-widest mb-1">
                  <span className="text-white">{plan.name}</span> <span className={plan.textHighlight}>{plan.nameSpan}</span>
                </h3>
                <p className="text-gray-400 text-xs font-light">{plan.target}</p>
              </div>

              {/* Price */}
              <div className="text-center mb-8">
                <div className="flex items-end justify-center gap-1">
                  <span className="text-2xl text-gray-400 font-light mb-1">₹</span>
                  <span className="text-5xl font-black text-white tracking-tight">{plan.price}</span>
                </div>
                <div className={`text-sm mt-2 ${plan.textHighlight}`}>{plan.period}</div>
              </div>

              {/* Divider */}
              <div className="h-[1px] w-full bg-gradient-to-r from-transparent via-white/10 to-transparent mb-8" />

              {/* Features List */}
              <div className="flex-grow">
                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <div className={`mt-0.5 w-4 h-4 rounded-full flex items-center justify-center flex-shrink-0 ${plan.theme === 'red' ? 'bg-red-500/20 text-red-500' : plan.theme === 'purple' ? 'bg-indigo-500/20 text-indigo-400' : 'bg-yellow-500/20 text-yellow-500'}`}>
                        <Check className="w-3 h-3" strokeWidth={3} />
                      </div>
                      <span className="text-gray-300 text-sm font-light">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* CTA Button */}
              <a
                href="#contact"
                className={`mt-auto w-full py-4 rounded-2xl flex items-center justify-center gap-2 text-sm font-bold transition-all duration-300 relative z-10 group/btn ${plan.buttonClass}`}
              >
                {plan.buttonText}
                <ChevronRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
              </a>
            </motion.div>
          ))}
        </div>

        {/* Custom Solution Banner */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-5xl mx-auto rounded-3xl bg-[#0a0a0a] border border-white/5 p-8 lg:p-12 relative overflow-hidden flex flex-col lg:flex-row items-center gap-10 lg:gap-16"
        >
          {/* Subtle red glow */}
          <div className="absolute top-0 right-0 w-[300px] h-[300px] bg-red-600/10 blur-[100px] rounded-full pointer-events-none" />

          {/* Left Icon Graphic */}
          <div className="w-32 h-32 flex-shrink-0 relative flex items-center justify-center">
            <div className="absolute inset-0 bg-red-500/20 rounded-full blur-xl animate-pulse" />
            <div className="w-24 h-24 rounded-full border-2 border-red-500/30 flex items-center justify-center">
              <div className="w-16 h-16 rounded-full bg-red-500/20 border border-red-500/50 flex items-center justify-center backdrop-blur-sm">
                <Target className="w-8 h-8 text-red-500" />
              </div>
            </div>
          </div>

          {/* Middle Text */}
          <div className="text-center lg:text-left flex-grow relative z-10">
            <h3 className="text-2xl font-bold text-white mb-3">Need a <span className="text-red-500 text-glow">Custom Solution?</span></h3>
            <p className="text-gray-400 text-sm leading-relaxed mb-6">
              We also provide tailored enterprise solutions for businesses that need custom automation, advanced marketing systems, and scalable digital infrastructure.
            </p>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-red-600 hover:bg-red-700 text-white text-sm font-bold transition-colors shadow-[0_0_20px_rgba(239,68,68,0.3)]"
            >
              Book Free Consultation
              <ChevronRight className="w-4 h-4" />
            </a>
          </div>

          {/* Right Mini Grid */}
          <div className="grid grid-cols-2 gap-4 flex-shrink-0 relative z-10 w-full lg:w-auto">
            <div className="bg-black/50 border border-white/5 rounded-xl p-4 flex flex-col items-center justify-center text-center hover:border-red-500/30 transition-colors">
              <ShieldCheck className="w-5 h-5 text-red-500 mb-2" />
              <span className="text-[10px] text-gray-300 font-medium">Custom<br/>Solutions</span>
            </div>
            <div className="bg-black/50 border border-white/5 rounded-xl p-4 flex flex-col items-center justify-center text-center hover:border-red-500/30 transition-colors">
              <TrendingUp className="w-5 h-5 text-red-500 mb-2" />
              <span className="text-[10px] text-gray-300 font-medium">Scalable<br/>Systems</span>
            </div>
            <div className="bg-black/50 border border-white/5 rounded-xl p-4 flex flex-col items-center justify-center text-center hover:border-red-500/30 transition-colors">
              <Headphones className="w-5 h-5 text-red-500 mb-2" />
              <span className="text-[10px] text-gray-300 font-medium">Dedicated<br/>Support</span>
            </div>
            <div className="bg-black/50 border border-white/5 rounded-xl p-4 flex flex-col items-center justify-center text-center hover:border-red-500/30 transition-colors">
              <CheckCircle2 className="w-5 h-5 text-red-500 mb-2" />
              <span className="text-[10px] text-gray-300 font-medium">Proven<br/>Results</span>
            </div>
          </div>
        </motion.div>

        {/* Bottom Trust Bar */}
        <div className="mt-16 max-w-5xl mx-auto border-t border-white/5 pt-10 grid grid-cols-2 md:grid-cols-4 gap-6">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full border border-red-500/20 bg-red-500/5 flex items-center justify-center flex-shrink-0">
              <ShieldCheck className="w-5 h-5 text-red-500" />
            </div>
            <div>
              <div className="text-white text-xs font-bold mb-0.5">100% Secure</div>
              <div className="text-gray-500 text-[10px]">Your data is safe with us</div>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full border border-red-500/20 bg-red-500/5 flex items-center justify-center flex-shrink-0">
              <Clock className="w-5 h-5 text-red-500" />
            </div>
            <div>
              <div className="text-white text-xs font-bold mb-0.5">On-Time Delivery</div>
              <div className="text-gray-500 text-[10px]">We deliver on our promises</div>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full border border-red-500/20 bg-red-500/5 flex items-center justify-center flex-shrink-0">
              <LineChart className="w-5 h-5 text-red-500" />
            </div>
            <div>
              <div className="text-white text-xs font-bold mb-0.5">ROI Focused</div>
              <div className="text-gray-500 text-[10px]">Maximize your returns</div>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full border border-red-500/20 bg-red-500/5 flex items-center justify-center flex-shrink-0">
              <Headphones className="w-5 h-5 text-red-500" />
            </div>
            <div>
              <div className="text-white text-xs font-bold mb-0.5">24/7 Support</div>
              <div className="text-gray-500 text-[10px]">We're always here</div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
