import { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowLeft, Check, ChevronRight } from 'lucide-react';
import { BrandLogo } from './BrandLogo';
import { ServiceContact, type ServiceContactConfig } from './ServiceContact';

function ServiceTitle({ title }: { title: string }) {
  const words = title.split(' ');
  const accent = words.pop() ?? '';
  const main = words.join(' ');

  return (
    <>
      {main && <span className="text-white">{main} </span>}
      <span className="text-h2t-red">{accent}</span>
    </>
  );
}

export interface PricingTier {
  name: string;
  price: string;
  period?: string;
  description: string;
  features: string[];
  popular?: boolean;
}

export interface ServiceDetailData {
  title: string;
  tagline: string;
  description: string;
  longDescription: string;
  features: { title: string; desc: string }[];
  pricing: PricingTier[];
  pricingNote?: { title: string; description: string };
}

export const servicesData: Record<string, ServiceDetailData> = {
  'web-app': {
    title: 'AI Web & App Development',
    tagline: 'High-performance, custom-crafted digital engines built to convert.',
    description: 'Modern high-performance websites, web apps, landing pages, ecommerce platforms, and custom business systems.',
    longDescription: 'In today’s digital-first landscape, your website is your primary brand asset. We build hand-crafted digital platforms utilizing React, Next.js, and AI-driven optimizations. We avoid standard templates to construct bespoke corporate websites and highly functional web apps with fluid motion layouts, smart features, and blazing-fast loading speeds.',
    features: [
      { title: 'Bespoke UI/UX Design', desc: 'Crafted from scratch to represent your brand’s premium identity.' },
      { title: 'Interactive Animations', desc: 'Smooth, cinematic micro-interactions for modern web aesthetics.' },
      { title: 'Ultra Mobile-Responsive', desc: 'Pixel-perfect layouts across desktops, tablets, and smartphones.' },
      { title: 'AI-Enhanced Performance', desc: 'Smart caching, SEO optimization, and intelligent code splitting.' },
    ],
    pricing: [
      {
        name: 'Growth Landing',
        price: '₹9,999+',
        description: 'For startups, personal brands, traders, coaches, and local businesses.',
        features: [
          '1 Landing Page',
          'Mobile Responsive Design',
          'Contact Form',
          'WhatsApp Integration',
          'Basic SEO Setup',
          'Social Media Links',
          'Fast Loading Pages',
          '2 Revisions',
          '7 Days Support',
        ],
      },
      {
        name: 'Business Website',
        price: '₹19,999+',
        description: 'For businesses looking to build trust and generate leads.',
        features: [
          'Up to 5 Pages',
          'Custom UI Design',
          'Mobile Responsive Design',
          'Contact & Lead Forms',
          'WhatsApp Integration',
          'Basic SEO Setup',
          'Google Maps Integration',
          'Social Media Integration',
          'Blog Setup (Optional)',
          '3 Revisions',
          '15 Days Support',
        ],
        popular: true,
      },
      {
        name: 'Custom Website',
        price: '₹39,999+',
        description: 'For businesses requiring advanced features and scalability.',
        features: [
          'Up to 10 Pages',
          'Custom UI/UX Design',
          'Admin Dashboard',
          'User Login & Registration',
          'Database Integration',
          'API Integrations',
          'Contact & Lead Management',
          'Advanced Forms',
          'Basic Analytics Setup',
          '5 Revisions',
          '30 Days Support',
        ],
      },
    ],
    pricingNote: {
      title: 'Need something custom?',
      description:
        'Every project is unique. Contact us for a tailored solution based on your business requirements.',
    },
  },
  'ai-automation': {
    title: 'AI Business Automation',
    tagline: 'Transform manual operations into smart, scalable AI systems.',
    description: 'Automate workflows, operations, reporting, and repetitive business tasks using AI-powered systems.',
    longDescription: 'Time is your most valuable asset. We help you reclaim it by replacing manual data entry, reporting, and repetitive workflows with intelligent automation. Using advanced API integrations, AI decision engines, and custom triggers, we build frictionless internal systems that operate your business on autopilot.',
    features: [
      { title: 'Workflow Automation', desc: 'Connect your apps to automatically share data and trigger actions.' },
      { title: 'Smart CRM Syncing', desc: 'Automated lead tracking, updating, and funnel movement.' },
      { title: 'AI Data Processing', desc: 'Use AI to parse emails, generate reports, and analyze trends.' },
      { title: 'Business Optimization', desc: 'Eliminate human error and reduce operational overhead significantly.' },
    ],
    pricing: [
      {
        name: 'Starter Automation',
        price: '₹25,000+',
        description: 'Automate the most tedious core processes in your daily operations.',
        features: [
          'Up to 3 core workflow automations',
          'Basic Zapier/Make integration',
          'Lead to CRM automated sync',
          'Email & Notification triggers',
          '1 round of system tuning',
          'Standard technical support'
        ]
      },
      {
        name: 'AI Operations Pro',
        price: '₹45,000+',
        description: 'Advanced AI integration for intelligent data handling and team operations.',
        features: [
          'Up to 10 advanced workflows',
          'AI document & data processing',
          'Complex multi-step conditions',
          'Automated team task assignment',
          'Custom webhook development',
          'Priority implementation support'
        ],
        popular: true
      },
      {
        name: 'Enterprise Architect',
        price: '₹95,000+',
        description: 'Full-scale digital transformation for complex business ecosystems.',
        features: [
          'Unlimited workflow automations',
          'Custom API and backend scripts',
          'Full ERP/CRM systemic sync',
          'Bespoke automated dashboards',
          'Team training & onboarding',
          'Dedicated automation engineer'
        ]
      }
    ]
  },
  'ai-chatbots': {
    title: 'AI Chatbots & WhatsApp Automation',
    tagline: 'Deploy intelligent chat experiences that capture leads, answer questions, and engage customers 24/7.',
    description: 'Intelligent chatbots for WhatsApp and your website — built to capture leads and automate support.',
    longDescription: 'We build WhatsApp and AI chatbots that answer FAQs, collect leads, and qualify prospects automatically — so your business stays responsive even when your team is offline.',
    features: [
      { title: 'Omnichannel Presence', desc: 'Unified AI bots across WhatsApp, Web, FB, and Instagram.' },
      { title: 'Intelligent Lead Capture', desc: 'Automatically gather details and push them straight to your CRM.' },
      { title: 'Automated Booking', desc: 'Let the AI handle calendar scheduling without manual back-and-forth.' },
      { title: 'Natural Language Processing', desc: 'Context-aware responses trained specifically on your business data.' },
    ],
    pricing: [
      {
        name: 'WhatsApp Starter',
        price: '₹9,999+',
        description: 'For small businesses looking to automate customer inquiries and lead collection.',
        features: [
          'WhatsApp Business Integration',
          'FAQ Chatbot Setup',
          'Up to 20 Questions & Answers',
          'Lead Collection Flow',
          'Google Sheets Integration',
          'Instant Lead Notifications',
          'Business Hours Auto-Reply',
          '7 Days Support',
        ],
      },
      {
        name: 'AI Chatbot Pro',
        price: '₹24,999+',
        description: 'For businesses looking to automate sales, support, and lead qualification.',
        features: [
          'Everything in Starter',
          'AI-Powered Responses',
          'Website + WhatsApp Chatbot',
          'Lead Qualification Flow',
          'Appointment Booking Flow',
          'CRM Integration',
          'Custom Conversation Design',
          'Knowledge Base Training',
          'Analytics Setup',
          '30 Days Support',
        ],
        popular: true,
      },
    ],
  },
  'social-branding': {
    title: 'Social Media & Branding',
    tagline: 'Build an authoritative, high-converting digital identity that commands attention.',
    description: 'Creative branding and social media growth systems for businesses and creators.',
    longDescription: 'Your brand is what people say about you when you leave the room. We ensure that conversation is premium. Through cohesive brand identity design, strategic content creation, and high-retention video editing (Reels/Shorts), we build communities that trust your business and convert into loyal customers.',
    features: [
      { title: 'Visual Identity', desc: 'Logos, color palettes, and typography that exude professionalism.' },
      { title: 'High-Retention Video', desc: 'Cinematic Reels and Shorts designed for algorithm dominance.' },
      { title: 'Strategic Content', desc: 'Data-backed posting schedules that maximize engagement rates.' },
      { title: 'Graphic Design', desc: 'Premium banners, posts, and thumbnails that stop the scroll.' },
    ],
    pricing: [
      {
        name: 'Brand Starter',
        price: '₹7,999',
        period: '/month',
        description: 'Perfect for businesses building their online presence.',
        features: [
          '12 Social Media Posts / Month',
          'Basic Graphic Design',
          'Caption Writing',
          'Hashtag Research',
          'Profile Optimization',
          'Monthly Performance Report',
        ],
      },
      {
        name: 'Growth Branding',
        price: '₹14,999',
        period: '/month',
        description: 'For businesses focused on audience growth and engagement.',
        features: [
          '20 Social Media Posts / Month',
          '4 Reels / Month',
          'Premium Graphic Designs',
          'Caption & Content Strategy',
          'Hashtag Research',
          'Profile Management',
          'Monthly Analytics Report',
        ],
        popular: true,
      },
      {
        name: 'Premium Brand Management',
        price: '₹24,999',
        period: '/month',
        description: 'For brands seeking consistent content and stronger visibility.',
        features: [
          '20 Social Media Posts / Month',
          '8 Reels / Month',
          'Premium Graphic Designs',
          'Content Calendar Planning',
          'Profile Management',
          'Monthly Strategy Call',
          'Priority Support',
        ],
      },
    ],
  },
  'seo': {
    title: 'SEO & Digital Visibility',
    tagline: 'Climb organic search rankings and dominate your local and global market.',
    description: 'Improve search rankings, visibility, and online presence with advanced SEO systems.',
    longDescription: 'Paid ads stop when your budget stops, but SEO provides compounding, long-term returns. We conduct technical auditing, on-page optimization, content cluster structuring, schema styling, and building high-domain backlinks to position your brand as the answer to your customers search queries.',
    features: [
      { title: 'Technical SEO Auditing', desc: 'Fixing site speed, crawl errors, site architecture, and schema markup.' },
      { title: 'On-Page Optimization', desc: 'Optimizing titles, headers, images, and content for search intent.' },
      { title: 'High-Domain Backlinks', desc: 'Securing editorial features to compound search authority scores.' },
      { title: 'Keyword Clustering', desc: 'Targeting transactional search queries that capture ready-to-buy users.' },
    ],
    pricing: [
      {
        name: 'Local SEO',
        price: '₹7,999',
        period: '/month',
        description: 'Perfect for local businesses looking to improve visibility.',
        features: [
          'Google Business Profile Optimization',
          'Local Keyword Research',
          'On-Page SEO Optimization',
          'Meta Titles & Descriptions',
          'Monthly SEO Report',
          'Basic Technical SEO Check',
        ],
      },
      {
        name: 'Growth SEO',
        price: '₹14,999',
        period: '/month',
        description: 'For businesses looking to generate leads through search.',
        features: [
          'Everything in Local SEO',
          'Up to 15 Target Keywords',
          'Technical SEO Optimization',
          'Competitor Analysis',
          'Content Recommendations',
          'Internal Linking Optimization',
          'Monthly Performance Report',
          'Priority Support',
        ],
        popular: true,
      },
      {
        name: 'SEO Authority',
        price: '₹24,999',
        period: '/month',
        description: 'For businesses ready to dominate search and scale organic traffic.',
        features: [
          'Everything in Growth SEO',
          'Up to 30 Keywords',
          'Monthly SEO Content Strategy',
          'Advanced Technical SEO',
          'Competitor Tracking',
          'Priority Support',
        ],
      },
    ],
  },
  'digital-marketing': {
    title: 'Digital Marketing & Ads',
    tagline: 'Capture high-intent customers and scale your revenue predictably.',
    description: 'Performance marketing systems designed to generate leads, sales, and business growth.',
    longDescription: 'We deploy performance-driven ad campaigns across Meta (Facebook/Instagram) and Google using advanced targeting, visual creatives, and AI bidding strategies. Combined with custom-built high-converting funnels and automated email retargeting, we maximize your Return on Ad Spend (ROAS).',
    features: [
      { title: 'Omnichannel Bidding', desc: 'Strategic ad placements across Meta, Google Search, and YouTube.' },
      { title: 'Audience Funneling', desc: 'Multi-step retargeting to warm cold prospects into active buyers.' },
      { title: 'Scroll-Stopping Creative', desc: 'High-fidelity graphics and video ads made to command attention.' },
      { title: 'Pixel Tracking Audits', desc: 'Advanced GTM and offline conversion integration for clean metrics.' },
    ],
    pricing: [
      {
        name: 'Ad Launch',
        price: '₹9,999',
        period: '/month',
        description: 'Perfect for businesses running their first ad campaigns.',
        features: [
          'Meta Ads or Google Ads Management',
          'Audience Research',
          'Campaign Setup',
          'Ad Copywriting',
          'Basic Conversion Tracking',
          'Monthly Performance Report',
        ],
      },
      {
        name: 'Growth Ads',
        price: '₹19,999',
        period: '/month',
        description: 'For businesses focused on generating leads and sales.',
        features: [
          'Meta Ads + Google Ads Management',
          'Advanced Audience Targeting',
          'Retargeting Campaign Setup',
          'Conversion Tracking Setup',
          'Creative Strategy Guidance',
          'Bi-Weekly Optimization',
          'Monthly Performance Report',
        ],
        popular: true,
      },
      {
        name: 'Scale Ads',
        price: '₹34,999',
        period: '/month',
        description: 'For businesses looking to scale advertising efforts.',
        features: [
          'Everything in Growth Ads',
          'Multi-Campaign Management',
          'Funnel Optimization',
          'Landing Page Recommendations',
          'Advanced Reporting Dashboard',
          'Weekly Strategy Calls',
          'Priority Support',
        ],
      },
    ],
    pricingNote: {
      title: 'Important Note',
      description: 'Ad Spend is separate and paid directly to Meta/Google.',
    },
  },
  'ecommerce': {
    title: 'Ecommerce Growth Solutions',
    tagline: 'Complete automated digital storefronts built to scale your product sales.',
    description: 'Complete ecommerce setup and automation systems to scale online stores.',
    longDescription: 'Selling online requires more than just a cart. We build robust, conversion-optimized Shopify and custom ecommerce platforms. From seamless payment gateways and inventory syncing to advanced abandoned cart recovery flows and AI product recommendations, we engineer storefronts designed to maximize average order value.',
    features: [
      { title: 'Shopify Architecture', desc: 'Premium custom themes designed for speed and mobile conversions.' },
      { title: 'Conversion Optimization', desc: 'Frictionless checkout flows and strategic product page layouts.' },
      { title: 'Marketing Automation', desc: 'Automated email flows for abandoned carts and post-purchase upsells.' },
      { title: 'Inventory Systems', desc: 'Real-time synchronization of stock, orders, and fulfillment.' },
    ],
    pricing: [
      {
        name: 'Store Launch',
        price: '₹20,000+',
        description: 'Perfect for new brands launching their first professional online store.',
        features: [
          'Shopify Store Setup',
          'Premium Theme configuration',
          'Up to 20 Product Uploads',
          'Payment Gateway Integration',
          'Basic Shipping Rules',
          'Standard Mobile Optimization'
        ]
      },
      {
        name: 'Ecom Accelerator',
        price: '₹45,000+',
        description: 'Advanced storefront with marketing automations to boost revenue.',
        features: [
          'Custom UI/UX Store Design',
          'Advanced Product Filtering',
          'Abandoned Cart Email Setup',
          'Review & Loyalty App Integration',
          'On-Page SEO Optimization',
          'Up to 100 Product Uploads'
        ],
        popular: true
      },
      {
        name: 'Enterprise Scale',
        price: '₹85,000+',
        description: 'Fully custom headless commerce or complex operational integrations.',
        features: [
          'Bespoke Headless/Custom Build',
          'ERP/Inventory System Sync',
          'Advanced Subscriptions setup',
          'AI Product Recommendations',
          'Custom Checkout modifications',
          'Ongoing priority technical support'
        ]
      }
    ]
  }
};

const serviceContactByKey: Record<string, ServiceContactConfig> = {
  'web-app': {
    headline: "Let's Build Your",
    accent: 'Digital Platform.',
    description:
      'Tell us about your website or app vision. We will map architecture, timelines, and a custom development quote.',
    messagePlaceholder:
      'Describe your site or app goals, pages needed, features, and preferred timeline...',
    highlights: [
      'Custom UI/UX from scratch',
      'React, Next.js & modern stack',
      'Free consultation & project roadmap',
    ],
  },
  'ai-automation': {
    headline: 'Ready to Automate',
    accent: 'Your Business?',
    description:
      'Share your current workflows and bottlenecks. We will design intelligent automations that save time and reduce errors.',
    messagePlaceholder:
      'Which processes should be automated? What tools do you currently use (CRM, sheets, email)?',
    highlights: [
      'Workflow & CRM integrations',
      'AI-powered data processing',
      'Scalable automation architecture',
    ],
  },
  'ai-chatbots': {
    headline: 'Launch Your',
    accent: 'AI Chatbot.',
    description:
      'Get a conversational AI built for WhatsApp, your website, or social channels — for leads, support, and bookings.',
    messagePlaceholder:
      'Which channels do you need? WhatsApp, website, Instagram? What should the bot handle?',
    highlights: [
      'WhatsApp API & web chatbots',
      'Lead capture & CRM sync',
      '24/7 automated responses',
    ],
  },
  'social-branding': {
    headline: 'Elevate Your',
    accent: 'Brand Presence.',
    description:
      'Let us discuss your brand identity, content strategy, reels, and social growth goals.',
    messagePlaceholder:
      'Tell us about your brand, platforms, content style, and monthly posting needs...',
    highlights: [
      'Logo & visual identity design',
      'Reels, posts & graphic content',
      'Social media growth strategy',
    ],
  },
  seo: {
    headline: 'Rank Higher with',
    accent: 'Smart SEO.',
    description:
      'Share your website and target market. We will audit your visibility and propose a tailored SEO growth plan.',
    messagePlaceholder:
      'Your website URL, target keywords, business location, and current ranking challenges...',
    highlights: [
      'Technical & on-page SEO',
      'Local & national keyword targeting',
      'Monthly performance reporting',
    ],
  },
  'digital-marketing': {
    headline: 'Scale Your',
    accent: 'Ad Campaigns.',
    description:
      'Tell us your budget, audience, and goals. We will build performance campaigns that drive leads and sales.',
    messagePlaceholder:
      'Ad platforms (Meta, Google), monthly budget, target audience, and conversion goals...',
    highlights: [
      'Meta & Google Ads management',
      'Retargeting & funnel setup',
      'Creative design & ROAS tracking',
    ],
  },
  ecommerce: {
    headline: 'Grow Your',
    accent: 'Online Store.',
    description:
      'From Shopify setup to checkout optimization — let us plan your store launch or revenue scale-up.',
    messagePlaceholder:
      'Store platform, product count, payment setup, and current sales challenges...',
    highlights: [
      'Shopify & custom store builds',
      'Payment & inventory integration',
      'Abandoned cart & email automation',
    ],
  },
};

interface ServiceDetailPageProps {
  serviceKey: string;
  onBack: () => void;
}

export function ServiceDetailPage({ serviceKey, onBack }: ServiceDetailPageProps) {
  const data = servicesData[serviceKey];
  const [selectedPlan, setSelectedPlan] = useState<{
    name: string;
    price: string;
    period?: string;
  } | null>(null);

  const handleSelectPlan = (tier: PricingTier) => {
    setSelectedPlan({
      name: tier.name,
      price: tier.price,
      period: tier.period,
    });
    setTimeout(() => {
      document.getElementById('service-contact')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }, 80);
  };

  if (!data) {
    return (
      <div className="min-h-screen bg-[#050505] text-white flex flex-col items-center justify-center p-6">
        <p className="text-xl mb-4">Service not found.</p>
        <button onClick={onBack} className="px-6 py-2.5 bg-red-600 rounded-full font-bold">
          Go Back
        </button>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#050505] text-white font-sans selection:bg-h2t-red selection:text-white pb-24 relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none z-0">
        <div className="absolute top-0 right-0 w-[45%] h-[45%] bg-red-900/10 blur-[140px] rounded-full" />
        <div className="absolute bottom-1/4 left-0 w-[30%] h-[30%] bg-red-950/10 blur-[120px] rounded-full" />
      </div>

      {/* Top bar */}
      <nav className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 py-6 flex justify-between items-center">
        <button
          onClick={onBack}
          className="flex items-center gap-2 text-sm text-gray-400 hover:text-white transition-colors group"
        >
          <ArrowLeft className="w-4 h-4 transition-transform group-hover:-translate-x-1" />
          Back to Services
        </button>
        <BrandLogo height={32} />
      </nav>

      {/* Hero */}
      <section className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 pt-8 sm:pt-12 pb-16 sm:pb-20">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="max-w-3xl"
        >
          <p className="text-h2t-red text-[10px] sm:text-xs font-bold tracking-[0.25em] uppercase mb-5">
            H2T Service
          </p>
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[3.25rem] font-bold tracking-tight leading-[1.1]">
            <ServiceTitle title={data.title} />
          </h1>
          <p className="text-lg sm:text-xl text-gray-300 font-light mt-6 leading-relaxed">
            {data.tagline}
          </p>
          <p className="text-sm sm:text-base text-gray-400 font-light mt-5 leading-relaxed max-w-2xl">
            {data.longDescription}
          </p>

          <div className="flex flex-col sm:flex-row gap-3 mt-8">
            <a
              href="#pricing"
              onClick={(e) => {
                e.preventDefault();
                document.getElementById('pricing')?.scrollIntoView({ behavior: 'smooth' });
              }}
              className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-h2t-red hover:bg-red-600 text-white text-sm font-medium transition-all shadow-[0_0_15px_rgba(204,0,0,0.25)] active:scale-95"
            >
              View Plans
              <ChevronRight className="w-4 h-4" />
            </a>
            <a
              href="#service-contact"
              onClick={(e) => {
                e.preventDefault();
                document.getElementById('service-contact')?.scrollIntoView({ behavior: 'smooth' });
              }}
              className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl border border-white/15 text-white text-sm font-medium hover:bg-white/5 hover:border-h2t-red/40 transition-all active:scale-95"
            >
              Get a Quote
            </a>
          </div>
        </motion.div>

        {/* What's included */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.15 }}
          className="mt-16 sm:mt-20"
        >
          <h2 className="text-sm font-bold tracking-[0.2em] uppercase text-gray-500 mb-6">
            What&apos;s Included
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
            {data.features.map((feature, idx) => (
              <div
                key={idx}
                className="bg-[#0c0c0c] border border-white/[0.06] hover:border-h2t-red/30 p-5 sm:p-6 transition-colors duration-300"
              >
                <span className="text-h2t-red text-xs font-bold tabular-nums">
                  {String(idx + 1).padStart(2, '0')}
                </span>
                <h3 className="text-white font-bold text-sm sm:text-base mt-3 mb-2 tracking-tight">
                  {feature.title}
                </h3>
                <p className="text-gray-500 text-xs sm:text-sm font-light leading-relaxed">
                  {feature.desc}
                </p>
              </div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* Pricing */}
      <section id="pricing" className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 pt-8 pb-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-10 sm:mb-12"
        >
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight">
            Pricing <span className="text-h2t-red">Plans</span>
          </h2>
          <p className="text-gray-400 text-sm font-light mt-3 max-w-xl">
            Clear packages built around real deliverables. Pick what fits your stage — scale anytime.
          </p>
        </motion.div>

        <div
          className={`grid grid-cols-1 gap-4 sm:gap-5 pt-2 ${
            data.pricing.length === 2 ? 'md:grid-cols-2' : 'md:grid-cols-2 lg:grid-cols-3'
          }`}
        >
          {data.pricing.map((tier, idx) => {
            const cardContent = (
              <>
                <h3 className="text-white text-base sm:text-lg font-bold tracking-tight">{tier.name}</h3>
                <p className="text-gray-500 text-xs sm:text-sm font-light mt-2 min-h-[40px] leading-relaxed">
                  {tier.description}
                </p>

                <div className="flex items-baseline gap-1 mt-6 mb-6 pb-6 border-b border-white/[0.06]">
                  <span className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white">
                    {tier.price}
                  </span>
                  {tier.period && (
                    <span className="text-gray-500 text-sm font-light">{tier.period}</span>
                  )}
                </div>

                <ul className="flex flex-col gap-3 mb-8 flex-grow">
                  {tier.features.map((feat, fIdx) => (
                    <li key={fIdx} className="flex items-start gap-2.5">
                      <Check className="w-3.5 h-3.5 text-h2t-red mt-0.5 shrink-0" />
                      <span className="text-gray-400 text-xs sm:text-sm font-light leading-relaxed">
                        {feat}
                      </span>
                    </li>
                  ))}
                </ul>

                <button
                  type="button"
                  onClick={() => handleSelectPlan(tier)}
                  className={`relative w-full text-center py-3.5 rounded-xl text-xs font-bold tracking-widest uppercase transition-all duration-300 ${
                    tier.popular
                      ? 'popular-pricing-btn bg-h2t-red hover:bg-red-600 text-white shadow-[0_0_20px_rgba(255,26,26,0.35)]'
                      : 'border border-white/10 hover:border-h2t-red/40 hover:bg-h2t-red/5 text-white'
                  }`}
                >
                  <span className="relative z-[1]">Select Plan</span>
                </button>
              </>
            );

            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.08 }}
                className={`relative ${tier.popular ? 'pt-4 overflow-visible' : ''}`}
              >
                {tier.popular && (
                  <span className="absolute top-0 left-6 z-20 bg-h2t-red text-white text-[9px] font-bold tracking-widest px-2.5 py-1 uppercase rounded-sm shadow-[0_0_12px_rgba(255,26,26,0.5)]">
                    Most Popular
                  </span>
                )}
                <div
                  className={
                    tier.popular
                      ? 'popular-pricing-border shadow-[0_0_28px_rgba(255,26,26,0.15)]'
                      : ''
                  }
                >
                  <div
                    className={`relative flex flex-col p-6 sm:p-7 h-full transition-all duration-300 ${
                      tier.popular
                        ? 'popular-pricing-inner'
                        : 'bg-[#0a0a0a] border border-white/[0.06] hover:border-h2t-red/25 rounded-xl'
                    }`}
                  >
                    {cardContent}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </section>

      {data.pricingNote && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="max-w-2xl mx-auto px-6 mt-12 sm:mt-16 text-center"
        >
          <h3 className="text-white text-lg sm:text-xl font-bold mb-2">{data.pricingNote.title}</h3>
          <p className="text-gray-400 text-sm font-light leading-relaxed">{data.pricingNote.description}</p>
        </motion.div>
      )}

      {serviceContactByKey[serviceKey] && (
        <ServiceContact
          serviceName={data.title}
          contact={serviceContactByKey[serviceKey]}
          selectedPlan={selectedPlan}
          onClearPlan={() => setSelectedPlan(null)}
        />
      )}
    </div>
  );
}
