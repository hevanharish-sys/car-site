import { motion } from 'framer-motion';
import { ArrowLeft, Check, Sparkles, Zap, Shield } from 'lucide-react';
import { ServiceContact, type ServiceContactConfig } from './ServiceContact';

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
        price: '₹15,000+',
        description: 'Perfect for startups and product launches looking for premium positioning.',
        features: [
          'High-converting single/landing page',
          'Cinematic design aesthetics',
          'Fully mobile responsive',
          'Basic SEO & analytics setup',
          'Contact & lead capture form',
          '3 rounds of design revisions'
        ]
      },
      {
        name: 'Corporate Scale',
        price: '₹35,000+',
        description: 'For growing businesses seeking an authority-building multi-page digital platform.',
        features: [
          'Up to 6 fully custom pages',
          'Advanced micro-animations',
          'CMS integration setup',
          'Complete on-page SEO optimization',
          'Custom graphics & UI elements',
          '1 month of priority support'
        ],
        popular: true
      },
      {
        name: 'Enterprise Web App',
        price: '₹75,000+',
        description: 'Bespoke web applications with advanced custom operations and database structures.',
        features: [
          'Unlimited modern pages',
          'Bespoke user dashboard & portal',
          'API integrations & payments',
          'Real-time database systems',
          'Advanced animations & heavy assets',
          '3 months of dedicated dev support'
        ]
      }
    ]
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
    title: 'AI Chatbots & WhatsApp',
    tagline: '24/7 intelligent conversational agents that qualify leads and drive sales.',
    description: '24/7 intelligent chatbot systems for websites, WhatsApp, Instagram, and customer support.',
    longDescription: 'Customers demand instant responses. We build conversational AI that never sleeps, qualifying leads, answering complex FAQs, and booking appointments automatically via WhatsApp, Instagram, and your website. Experience a system that handles customer service like a human, but at machine speed.',
    features: [
      { title: 'Omnichannel Presence', desc: 'Unified AI bots across WhatsApp, Web, FB, and Instagram.' },
      { title: 'Intelligent Lead Capture', desc: 'Automatically gather details and push them straight to your CRM.' },
      { title: 'Automated Booking', desc: 'Let the AI handle calendar scheduling without manual back-and-forth.' },
      { title: 'Natural Language Processing', desc: 'Context-aware responses trained specifically on your business data.' },
    ],
    pricing: [
      {
        name: 'Starter Bot',
        price: '₹12,000+',
        description: 'Perfect for small businesses wanting automated FAQ answering and lead collection.',
        features: [
          'Official WhatsApp API Setup',
          'Custom FAQ Chatbot sequence',
          'Instant Lead notifications',
          'Basic Google Sheets Sync',
          '1 business number connection',
          'Standard prompt engineering'
        ]
      },
      {
        name: 'Conversational Pro',
        price: '₹25,000+',
        description: 'For brands looking to run automated broadcast campaigns and deep CRM sync.',
        features: [
          'Omnichannel Bot (Web + WA)',
          'Broadcast outreach capabilities',
          'Advanced conversational AI logic',
          'Full HubSpot/CRM webhooks',
          'Multi-agent chat inbox setup',
          'Monthly performance tweaks'
        ],
        popular: true
      },
      {
        name: 'Enterprise Systems',
        price: '₹55,000+',
        description: 'Custom conversational pipelines, automated client portals, and massive triggers.',
        features: [
          'Bespoke API chatbot integrations',
          'Mass scale broadcast automation',
          'Full internal team handoff rules',
          'Complex calendar & scheduling loop',
          'Dedicated account manager',
          'Priority SLA Dev Support'
        ]
      }
    ]
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
        name: 'Brand Growth',
        price: '₹8,000',
        period: '/mo',
        description: 'Establish a consistent, professional baseline across your social channels.',
        features: [
          '12 Custom Static Posts / month',
          'Basic account management',
          'Hashtag & keyword strategy',
          'Monthly analytics report',
          'Profile optimization',
          'Standard community engagement'
        ]
      },
      {
        name: 'Creator Scale',
        price: '₹18,000',
        period: '/mo',
        description: 'Aggressive growth system incorporating high-retention short-form video.',
        features: [
          '8 Premium Edited Reels / month',
          '15 Custom Graphic Posts',
          'Advanced kinetic typography',
          'Custom brand sound design',
          'A/B tested visual hooks',
          'Bi-weekly strategy sessions'
        ],
        popular: true
      },
      {
        name: 'Omni Dominance',
        price: '₹35,000',
        period: '/mo',
        description: 'Full-suite digital PR, premium thought leadership, and dedicated channel growth.',
        features: [
          '15 Premium Edited Reels / month',
          'Daily channel posting & management',
          'Full Brand Identity revamp',
          'Proactive community networking',
          'Bespoke graphical carousels',
          'Dedicated account strategist'
        ]
      }
    ]
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
        name: 'Local Visibility',
        price: '₹10,000',
        period: '/mo',
        description: 'Dominate regional search parameters and secure high-value local inquiries.',
        features: [
          'Google Business Profile setup',
          'Local citation building (20+)',
          'Targeting up to 10 local keywords',
          'On-page title & meta optimization',
          'Monthly local performance report',
          'Basic speed optimization'
        ]
      },
      {
        name: 'Organic Authority',
        price: '₹22,000',
        period: '/mo',
        description: 'National and global optimization to rank for massive transactional terms.',
        features: [
          'Full technical SEO audit & fix',
          'Targeting up to 25 national keywords',
          '4 optimized blog posts / month',
          'High-domain backlinks acquisition',
          'Complete schema markup injection',
          'Quarterly competitor audit'
        ],
        popular: true
      },
      {
        name: 'Market Leader',
        price: '₹45,000',
        period: '/mo',
        description: 'Aggressive SEO dominance to out-rank competitive giants and capture market share.',
        features: [
          'Unlimited targeted keywords focus',
          'Advanced technical architecture',
          '8 premium SEO articles / month',
          'Aggressive PR & editorial backlinks',
          'Conversion rate optimization (CRO)',
          'Dedicated SEO account head'
        ]
      }
    ]
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
        price: '₹15,000',
        period: '/mo',
        description: 'Establish initial ad campaigns to build momentum and generate immediate leads.',
        features: [
          'Meta or Google Ads Setup',
          'Targeting & audience research',
          'Ad copywriting & setup',
          'Basic conversion tracking',
          'Budget management (up to ₹1L)',
          'Monthly performance report'
        ]
      },
      {
        name: 'Growth Scale',
        price: '₹30,000',
        period: '/mo',
        description: 'Comprehensive multi-step campaign setup with advanced retargeting.',
        features: [
          'Meta + Google Search campaigns',
          'Advanced social funnels (Warm/Cold)',
          'Custom graphic & video creatives',
          'Server-side CAPI integration',
          'Budget management (up to ₹5L)',
          'Bi-weekly strategy calls'
        ],
        popular: true
      },
      {
        name: 'Omni Dominance',
        price: '₹60,000',
        period: '/mo',
        description: 'Full omni-funnel dominance. Visual creatives, constant optimization, high scale.',
        features: [
          'Omnichannel (Meta, Google, YT)',
          'High-budget creative scaling',
          'Email & Funnel Marketing integration',
          'Complete landing page funnel builds',
          'Unlimited budget scale oversight',
          '24/7 campaign tracking & bid scaling'
        ]
      }
    ]
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
    <div className="min-h-screen bg-[#050505] text-white font-sans selection:bg-red-600 selection:text-white pb-24 relative overflow-hidden">
      {/* Background Ambience */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <div className="absolute top-0 left-0 w-full h-[600px] bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGcgc3Ryb2tlPSJyZ2JhKDI1NSwyNTUsMjU1LDAuMDMpIiBzdHJva2Utd2lkdGg9IjEiIGZpbGw9Im5vbmUiPjxwYXRoIGQ9Ik0wIDYwaDYwTTAgMGg2ME02MCAwdjYwTTAgMHY2MCIvPjwvZz48L3N2Zz4=')] opacity-20" />
        <div className={`absolute top-0 left-1/4 w-[500px] h-[500px] bg-red-950/10 blur-[150px] rounded-full`} />
        <div className="absolute top-1/2 right-0 w-[400px] h-[400px] bg-red-900/5 blur-[150px] rounded-full" />
      </div>

      {/* Top Navbar */}
      <nav className="relative z-10 max-w-7xl mx-auto px-6 py-8 flex justify-between items-center">
        <button
          onClick={onBack}
          className="flex items-center gap-2 text-sm text-gray-400 hover:text-white transition-colors duration-200 group"
        >
          <ArrowLeft className="w-4 h-4 transition-transform group-hover:-translate-x-1" />
          Back to Services
        </button>
        <span className="text-xl font-bold tracking-tighter">
          H2T<span className="text-h2t-red">.</span>
        </span>
      </nav>

      {/* Main Container */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 mt-8 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
        
        {/* Left Side: Information */}
        <div className="lg:col-span-7 flex flex-col justify-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-h2t-red/10 border border-h2t-red/30 mb-6">
              <Sparkles className="w-3.5 h-3.5 text-h2t-red" />
              <span className="text-[10px] font-bold tracking-[0.2em] uppercase text-h2t-red">
                Premium Services
              </span>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6 leading-[1.1]">
              {data.title.split(' ').map((word, i) => (
                <span key={i} className={i === data.title.split(' ').length - 1 ? 'text-h2t-red' : 'text-white'}>
                  {word}{' '}
                </span>
              ))}
            </h1>

            <p className="text-lg md:text-xl font-light text-gray-300 mb-8 leading-relaxed">
              {data.tagline}
            </p>

            <p className="text-sm md:text-base font-light text-gray-400 leading-relaxed mb-12 border-l-2 border-h2t-red/50 pl-6">
              {data.longDescription}
            </p>
          </motion.div>

          {/* Key Deliverables Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-4">
            {data.features.map((feature, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: idx * 0.1 + 0.2 }}
                className="p-5 rounded-2xl bg-[#0a0a0a] border border-white/5 hover:border-h2t-red/30 transition-colors"
              >
                <div className="w-8 h-8 rounded-lg bg-h2t-red/10 border border-h2t-red/20 flex items-center justify-center text-h2t-red mb-4">
                  <Zap className="w-4 h-4" />
                </div>
                <h3 className="text-white font-bold text-[15px] mb-2">{feature.title}</h3>
                <p className="text-gray-400 text-xs font-light leading-relaxed">{feature.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Right Side: Showcase Element */}
        <div className="lg:col-span-5 flex items-center justify-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="w-full relative aspect-[4/3] rounded-[2rem] p-[1px] bg-gradient-to-b from-h2t-red/20 to-transparent overflow-hidden"
          >
            <div className="absolute inset-0 bg-[#080808] rounded-[2rem] overflow-hidden flex flex-col p-8 justify-between border border-h2t-red/10 shadow-[inset_0_0_60px_rgba(255,26,26,0.03)]">
              {/* Top Details */}
              <div className="flex justify-between items-start">
                <div className="flex gap-1.5">
                  <div className="w-2.5 h-2.5 rounded-full bg-h2t-red" />
                  <div className="w-2.5 h-2.5 rounded-full bg-red-900/60" />
                  <div className="w-2.5 h-2.5 rounded-full bg-white/20" />
                </div>
                <div className="text-[10px] text-gray-500 font-mono">STATUS // LIVE</div>
              </div>

              {/* Middle Core Statement */}
              <div className="my-auto py-6">
                <h4 className="text-2xl font-bold text-white mb-4">Result-Driven Delivery System</h4>
                <p className="text-gray-400 text-xs font-light leading-relaxed">
                  We don’t believe in bloated processes or fluff. Every campaign, website, or automation we construct is focused laser-sharp on driving real, tangible revenue growth.
                </p>
              </div>

              {/* Bottom Row Trust Badges */}
              <div className="flex items-center justify-between pt-6 border-t border-white/5">
                <div className="flex items-center gap-2 text-gray-400 text-[10px] uppercase font-bold tracking-widest">
                  <Shield className="w-4 h-4 text-h2t-red" />
                  Verified System
                </div>
                <div className="flex items-center gap-1 text-gray-500 text-[10px] font-mono">
                  SECURE SSL // 256 BIT
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Pricing Header */}
      <div className="max-w-7xl mx-auto px-6 mt-28 mb-16 text-center">
        <div className="flex items-center justify-center gap-4 mb-4">
          <div className="h-[1px] w-8 bg-h2t-red/50" />
          <span className="text-h2t-red text-xs font-bold tracking-[0.2em] uppercase">Flexible Rates</span>
          <div className="h-[1px] w-8 bg-h2t-red/50" />
        </div>
        <h2 className="text-3xl md:text-4xl font-bold">Transparent Tiers & Plans</h2>
        <p className="text-sm font-light text-gray-400 mt-3 max-w-lg mx-auto">
          Choose a dynamic pricing model customized perfectly for your business growth timeline.
        </p>
      </div>

      {/* Pricing Cards Grid */}
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-8">
        {data.pricing.map((tier, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: idx * 0.1 }}
            className={`relative rounded-3xl p-8 flex flex-col transition-all duration-300 ${
              tier.popular
                ? 'bg-gradient-to-b from-red-950/30 via-[#080808] to-black border-h2t-red/50 shadow-[0_0_30px_rgba(255,26,26,0.15)]'
                : 'bg-[#080808] border-white/5 hover:border-h2t-red/20'
            } border h-full`}
          >
            {tier.popular && (
              <span className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-h2t-red text-white text-[9px] font-bold tracking-widest px-3 py-1 rounded-full uppercase shadow-[0_0_15px_rgba(255,26,26,0.5)]">
                Most Popular
              </span>
            )}

            <div className="mb-6">
              <h3 className="text-white text-lg font-bold tracking-wide">{tier.name}</h3>
              <p className="text-gray-400 text-xs font-light mt-2 min-h-[40px] leading-relaxed">
                {tier.description}
              </p>
            </div>

            <div className="flex items-baseline gap-1 mb-8 pb-6 border-b border-white/5">
              <span className="text-4xl md:text-5xl font-extrabold tracking-tight text-white">{tier.price}</span>
              {tier.period && <span className="text-gray-500 text-sm font-light">{tier.period}</span>}
            </div>

            {/* Feature List */}
            <ul className="flex flex-col gap-4 mb-8 flex-grow">
              {tier.features.map((feat, fIdx) => (
                <li key={fIdx} className="flex items-start gap-3">
                  <div className="w-4 h-4 rounded-full bg-h2t-red/10 flex items-center justify-center text-h2t-red mt-0.5 shrink-0">
                    <Check className="w-2.5 h-2.5" />
                  </div>
                  <span className="text-gray-300 text-xs sm:text-sm font-light leading-relaxed">{feat}</span>
                </li>
              ))}
            </ul>

            {/* Call to Action Button */}
            <a
              href="#service-contact"
              onClick={(e) => {
                e.preventDefault();
                document.getElementById('service-contact')?.scrollIntoView({ behavior: 'smooth' });
              }}
              className={`w-full text-center py-4 rounded-xl text-xs font-bold tracking-widest uppercase transition-all duration-300 ${
                tier.popular
                  ? 'bg-h2t-red hover:bg-red-600 text-white shadow-[0_0_20px_rgba(255,26,26,0.35)]'
                  : 'bg-white/5 hover:bg-h2t-red/10 hover:border hover:border-h2t-red/20 text-white'
              }`}
            >
              Get Started
            </a>
          </motion.div>
        ))}
      </div>

      {serviceContactByKey[serviceKey] && (
        <ServiceContact
          serviceName={data.title}
          contact={serviceContactByKey[serviceKey]}
        />
      )}
    </div>
  );
}
