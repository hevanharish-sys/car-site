import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';

const services = [
  {
    num: '01',
    title: 'Web & App Development',
    description: 'Websites, apps, and custom business platforms.',
    serviceKey: 'web-app',
  },
  {
    num: '02',
    title: 'AI & Automation',
    description: 'Workflows and operations on autopilot.',
    serviceKey: 'ai-automation',
  },
  {
    num: '03',
    title: 'AI Chatbots & WhatsApp',
    description: 'Capture leads and automate support 24/7.',
    serviceKey: 'ai-chatbots',
  },
  {
    num: '04',
    title: 'SEO & Visibility',
    description: 'Rank higher and grow organic reach.',
    serviceKey: 'seo',
  },
  {
    num: '05',
    title: 'Branding & Social Media',
    description: 'Identity, content, and channel growth.',
    serviceKey: 'social-branding',
  },
  {
    num: '06',
    title: 'Marketing & Ads',
    description: 'Performance campaigns that convert.',
    serviceKey: 'digital-marketing',
  },
];

export function Services({ onSelectService }: { onSelectService: (serviceKey: string) => void }) {
  return (
    <section id="services" className="py-24 sm:py-28 bg-[#050505] relative overflow-hidden">
      <div className="absolute top-1/4 right-0 w-[40%] h-[40%] bg-red-900/10 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12 sm:mb-14"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight mb-3">
            Our <span className="text-h2t-red">Expertise</span>
          </h2>
          <p className="text-gray-400 text-sm font-light max-w-md mx-auto">
            Digital solutions tailored to your business.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4">
          {services.map((service, index) => (
            <motion.button
              key={service.num}
              type="button"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
              onClick={() => onSelectService(service.serviceKey)}
              className="group relative text-left bg-[#0c0c0c] hover:bg-[#111111] border border-white/[0.06] hover:border-h2t-red/40 p-6 sm:p-7 min-h-[160px] flex flex-col transition-all duration-300 cursor-pointer"
            >
              <span className="absolute top-5 right-5 text-xs text-gray-500 group-hover:text-h2t-red/70 font-light transition-colors">
                /{service.num}
              </span>

              <h3 className="text-lg sm:text-xl font-bold text-white tracking-tight pr-10">
                {service.title}
              </h3>

              <p className="text-xs sm:text-sm text-gray-500 font-light mt-2 group-hover:text-gray-400 transition-colors">
                {service.description}
              </p>
            </motion.button>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-12 max-w-3xl mx-auto rounded-full bg-[#0a0a0a] border border-white/5 p-2 pl-6 sm:pl-8 flex flex-col sm:flex-row items-center justify-between gap-4"
        >
          <p className="text-gray-400 text-xs font-light py-3 sm:py-0 text-center sm:text-left">
            Ready to grow? Let's talk strategy.
          </p>
          <a
            href="#contact"
            className="w-full sm:w-auto flex items-center justify-center gap-2 bg-h2t-red hover:bg-red-600 transition-colors text-white text-xs font-bold uppercase tracking-wider px-6 sm:px-8 py-3.5 sm:py-4 rounded-full"
          >
            Let's Work Together
            <ArrowUpRight className="w-4 h-4" strokeWidth={2.5} />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
