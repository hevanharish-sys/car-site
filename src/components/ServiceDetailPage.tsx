import { motion } from 'framer-motion';
import { ArrowLeft, Check, Sparkles, Zap, Shield, HelpCircle, MessageSquare } from 'lucide-react';

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
  iconBg: string;
  textColor: string;
  borderColor: string;
  features: { title: string; desc: string }[];
  pricing: PricingTier[];
}

export const servicesData: Record<string, ServiceDetailData> = {
  website: {
    title: 'Website Development',
    tagline: 'High-performance, custom-crafted digital engines built to convert.',
    description: 'We engineer ultra-fast, premium websites using modern stacks optimized for SEO, branding, speed, and conversion.',
    longDescription: 'In today’s digital-first landscape, your website is your primary brand asset. We build hand-crafted digital platforms utilizing React, Next.js, and advanced Tailwind CSS. We avoid standard templates to construct bespoke corporate websites and highly functional landing pages with gorgeous glassmorphism, fluid motion layouts, and blazing-fast loading speeds.',
    iconBg: 'bg-[#3b82f6]/10',
    textColor: 'text-[#3b82f6]',
    borderColor: 'border-[#3b82f6]/30',
    features: [
      { title: 'Bespoke UI/UX Design', desc: 'Crafted from scratch to represent your brand’s premium identity.' },
      { title: 'Interactive Animations', desc: 'Smooth, cinematic micro-interactions using Framer Motion.' },
      { title: 'Ultra Mobile-Responsive', desc: 'Pixel-perfect layouts across desktops, tablets, and smartphones.' },
      { title: 'Optimized Speed & SEO', desc: 'Perfect Lighthouse audit scores for compounding organic growth.' },
    ],
    pricing: [
      {
        name: 'Growth Landing',
        price: '$999',
        description: 'Perfect for startups and single product launches looking for premium positioning.',
        features: [
          'High-converting single page',
          'Cinematic design aesthetics',
          'Fully mobile responsive',
          'Basic SEO & analytics setup',
          'Contact & lead capture form',
          '3 rounds of design revisions'
        ]
      },
      {
        name: 'Corporate Scale',
        price: '$2,499',
        description: 'For growing businesses seeking an authority-building multi-page digital platform.',
        features: [
          'Up to 6 fully custom pages',
          'Advanced micro-animations',
          'CMS integration (Sanity/Wordpress)',
          'Complete on-page SEO setup',
          'Custom graphics & icon sets',
          '1 month of priority support'
        ],
        popular: true
      },
      {
        name: 'Enterprise App',
        price: '$4,999',
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
  video: {
    title: 'Video Editing & Production',
    tagline: 'Cinematic storytelling designed to capture attention in seconds.',
    description: 'Premium video editing for brands, reels, advertisements, and digital creators looking for high retention.',
    longDescription: 'Attention is the ultimate digital currency. Our high-retention video editing services are engineered for modern social platforms. We combine sharp storytelling, professional color grading, dynamic sound design, kinetic typography, and seamless transitions to elevate commercial ads, social reels, YouTube content, and executive presentations.',
    iconBg: 'bg-[#ec4899]/10',
    textColor: 'text-[#ec4899]',
    borderColor: 'border-[#ec4899]/30',
    features: [
      { title: 'High-Retention Pacing', desc: 'Strategically designed hooks and edits that keep viewers engaged.' },
      { title: 'Sound Design & SFX', desc: 'Layered soundscapes, custom sound effects, and atmospheric design.' },
      { title: 'Premium Color Grading', desc: 'Cinematic LUTs and grading customized for your brand’s lighting tone.' },
      { title: 'Dynamic Kinetic Text', desc: 'Pop captions, stylized animations, and visual call-outs.' },
    ],
    pricing: [
      {
        name: 'Social Creator',
        price: '$299',
        period: '/mo',
        description: 'Ideal for creators looking to establish a regular presence with high-quality social reels.',
        features: [
          '5 edited Reels / Shorts',
          'Dynamic visual captions',
          'Basic color grading & LUTs',
          'Sound effects & trend music',
          'Up to 60s length per video',
          '2 days delivery turnaround'
        ]
      },
      {
        name: 'Brand Growth',
        price: '$799',
        period: '/mo',
        description: 'Complete high-retention content system to dominate social algorithms and build community.',
        features: [
          '15 premium edited Shorts / Reels',
          'Advanced kinetic typography',
          'Custom brand sound design',
          'A/B tested hooks & ideas',
          'Platform-specific format export',
          'Dedicated video strategist'
        ],
        popular: true
      },
      {
        name: 'Cinematic Commercial',
        price: '$1,499',
        description: 'Premium promotional video to drive high-ticket sales or explain complex products.',
        features: [
          '1 commercial brand film',
          'Bespoke visual storytelling script',
          'Heavy motion graphics & VFX',
          'Voiceover & soundscape production',
          'Cinematic premium color grade',
          'Ad campaign optimization guidance'
        ]
      }
    ]
  },
  linkedin: {
    title: 'LinkedIn Growth Mastery',
    tagline: 'Turn your personal brand into a high-ticket lead generation system.',
    description: 'Establish authority and scale your business using our targeted LinkedIn positioning and copywriting.',
    longDescription: 'LinkedIn is the premier B2B pipeline. We help founders, CEOs, and agency owners build influential personal brands that organically attract high-ticket leads. Through customized profile optimization, ghostwriting, daily strategic engagement, and direct outreach systems, we build compounding corporate authority.',
    iconBg: 'bg-[#3b82f6]/10',
    textColor: 'text-[#3b82f6]',
    borderColor: 'border-[#3b82f6]/30',
    features: [
      { title: 'Executive Ghostwriting', desc: 'Thought-leadership posts that match your voice and drive inbound leads.' },
      { title: 'Profile Optimization', desc: 'Converting profile headers, taglines, and bios into sales pages.' },
      { title: 'Outbound Automation', desc: 'Laser-targeted, personalized cold outreach campaigns.' },
      { title: 'Authority Authority', desc: 'Compounding brand assets that position you as the top 1% expert.' },
    ],
    pricing: [
      {
        name: 'Personal Authority',
        price: '$599',
        period: '/mo',
        description: 'Optimize your profile and start publishing executive content to build B2B influence.',
        features: [
          'Complete profile conversion audit',
          '12 written authority posts / month',
          'Tailored B2B content themes',
          'Hashtag & format optimization',
          'Monthly analytics audit',
          'Slack communication support'
        ]
      },
      {
        name: 'Lead Accelerator',
        price: '$1,299',
        period: '/mo',
        description: 'Bespoke daily thought leadership coupled with an automated B2B outbound campaign.',
        features: [
          '20 high-converting posts / month',
          'Daily profile strategy & writing',
          'Automated targeted lead search',
          'Custom sequence outreach copy',
          'Profile funnel optimization',
          'Weekly strategy calls'
        ],
        popular: true
      },
      {
        name: 'Executive Partner',
        price: '$2,499',
        period: '/mo',
        description: 'Full-suite digital PR, premium thought leadership, ghostwriting, and dedicated high-ticket prospecting.',
        features: [
          'Daily custom ghostwriting (24+ posts)',
          'Complete outbound prospecting',
          'Active comment networking strategy',
          'Newsletter creation & scheduling',
          'Bespoke graphical visual carousels',
          'Direct lead handoff to booking calendar'
        ]
      }
    ]
  },
  seo: {
    title: 'SEO Optimization',
    tagline: 'Climb organic search rankings and dominate your local and global market.',
    description: 'Data-driven search engine optimization that generates compounding high-intent traffic.',
    longDescription: 'Paid ads stop when your budget stops, but SEO provides compounding, long-term returns. We conduct technical auditing, on-page optimization, content cluster structuring, schema styling, and building high-domain backlinks to position your brand as the answer to your customers search queries.',
    iconBg: 'bg-[#22c55e]/10',
    textColor: 'text-[#22c55e]',
    borderColor: 'border-[#22c55e]/30',
    features: [
      { title: 'Technical SEO Auditing', desc: 'Fixing site speed, crawl errors, site architecture, and schema markup.' },
      { title: 'On-Page Optimization', desc: 'Optimizing titles, headers, images, and content for search intent.' },
      { title: 'High-Domain Backlinks', desc: 'Securing editorial features to compound search authority scores.' },
      { title: 'Keyword Clustering', desc: 'Targeting transactional search queries that capture ready-to-buy users.' },
    ],
    pricing: [
      {
        name: 'Local Dominance',
        price: '$499',
        period: '/mo',
        description: 'Dominate regional search parameters and secure high-value local customer inquiries.',
        features: [
          'Google Business Profile setup',
          'Local citation building (50+)',
          'Targeting up to 10 local keywords',
          'On-page title & meta optimization',
          'Monthly local performance report',
          'Basic speed optimization'
        ]
      },
      {
        name: 'Organic Authority',
        price: '$1,199',
        period: '/mo',
        description: 'National and global optimization to rank for massive transactional terms.',
        features: [
          'Full technical SEO audit & fix',
          'Targeting up to 30 national keywords',
          '4 optimized blog posts / month',
          '10 high-domain backlinks / month',
          'Complete schema markup injection',
          'Quarterly competitor audit'
        ],
        popular: true
      },
      {
        name: 'Global Enterprise',
        price: '$2,499',
        period: '/mo',
        description: 'Aggressive SEO dominance to out-rank competitive giants and capture massive market share.',
        features: [
          'Unlimited targeted keywords',
          'Advanced technical architecture',
          '8 premium blog articles / month',
          '25+ editorial backlinks / month',
          'PR outreach & publisher network',
          'Dedicated SEO account head'
        ]
      }
    ]
  },
  'google-ads': {
    title: 'Google & YouTube Ads',
    tagline: 'Capture high-intent customers exactly when they are searching.',
    description: 'Scale your sales funnel with high-intent search ads and premium YouTube campaigns.',
    longDescription: 'Google Ads allow you to bypass years of SEO building by placing you at the top of search listings instantly. We build performance-driven campaigns using Search, YouTube, Display, and Performance Max formats, combined with custom-built high-converting landing pages to maximize advertising return.',
    iconBg: 'bg-[#ef4444]/10',
    textColor: 'text-[#ef4444]',
    borderColor: 'border-[#ef4444]/30',
    features: [
      { title: 'Intent Keyword Bidding', desc: 'Bidding exclusively on search terms indicating strong buyer intent.' },
      { title: 'PMax Optimization', desc: 'AI-assisted campaign targeting spanning all of Google’s visual properties.' },
      { title: 'A/B landing testing', desc: 'Building landing pages that match search query messaging precisely.' },
      { title: 'Pixel Tracking Audits', desc: 'Advanced GTM and offline conversion integration for clean metrics.' },
    ],
    pricing: [
      {
        name: 'Ad Launch',
        price: '$699',
        period: '/mo',
        description: 'Complete campaign build and budget monitoring for startup ad campaigns.',
        features: [
          'Google Search ads configuration',
          'Keyword research & competitor audit',
          'Targeted ad copywriting',
          'Conversion tag setup (GTM)',
          'Budget management up to $3k/mo',
          'Weekly dashboard updates'
        ]
      },
      {
        name: 'Omni Accelerator',
        price: '$1,499',
        period: '/mo',
        description: 'Combine high-intent Search Ads with visual remarketing to capture missed visitors.',
        features: [
          'Search + Performance Max ads',
          'YouTube retargeting ads build',
          'Custom landing page building',
          'Ad copy & design variants testing',
          'Budget management up to $10k/mo',
          'Bi-weekly strategy reviews'
        ],
        popular: true
      },
      {
        name: 'Market Dominance',
        price: '$2,999',
        period: '/mo',
        description: 'Bespoke multichannel visual ads, CRM database loop integration, and heavy scale.',
        features: [
          'Full visual & search campaigns',
          'YouTube premium video ads setup',
          'Multiple custom conversion funnels',
          'Offline conversion API sync',
          'Unlimited budget management',
          'Daily bid & placement optimization'
        ]
      }
    ]
  },
  'facebook-ads': {
    title: 'Facebook & Instagram Ads',
    tagline: 'Stop the scroll, spark desire, and scale your social commerce.',
    description: 'Target your ideal demographic with high-converting Meta social campaigns.',
    longDescription: 'Meta is the ultimate tool for visual discovery. We create highly persuasive graphic and video ads that halt users in their feeds. Combined with advanced Lookalike and custom retargeting setups, we ensure your ad budget is directed strictly toward highly interested B2C or B2B buyers.',
    iconBg: 'bg-[#a855f7]/10',
    textColor: 'text-[#a855f7]',
    borderColor: 'border-[#a855f7]/30',
    features: [
      { title: 'Scroll-Stopping Design', desc: 'High-fidelity graphics and Reels edits made to command attention.' },
      { title: 'Audience Funneling', desc: 'Multi-step retargeting to warm cold prospects into active buyers.' },
      { title: 'Lookalike Modeling', desc: 'Using client databases to find similar high-spending demographics.' },
      { title: 'CAPI Optimizations', desc: 'Bypassing iOS privacy blocks with clean server-side syncing.' },
    ],
    pricing: [
      {
        name: 'Meta Launch',
        price: '$699',
        period: '/mo',
        description: 'Establish initial social campaigns to build initial momentum and generate immediate leads.',
        features: [
          'Ad account setup & Pixel placement',
          'Core demographic targeting build',
          '4 custom-crafted graphic ad creatives',
          'A/B title testing',
          'Budget management up to $3k/mo',
          'Bi-weekly analysis reviews'
        ]
      },
      {
        name: 'Growth Scale',
        price: '$1,499',
        period: '/mo',
        description: 'A comprehensive, multi-step campaign setup with custom video assets and Lookalike expansion.',
        features: [
          'Advanced social funnels (Warm/Cold)',
          'Lookalike audience mapping',
          '12 custom graphic & video creatives',
          'Server-side CAPI integration',
          'Budget management up to $10k/mo',
          'Weekly strategy calls'
        ],
        popular: true
      },
      {
        name: 'Meta Dominance',
        price: '$2,999',
        period: '/mo',
        description: 'Full omni-funnel dominance. Visual creatives, constant optimization, and high-budget scales.',
        features: [
          'High-budget creative scaling',
          'UGC / Video design custom pipeline',
          'Omnichannel Retargeting loops',
          'Complete landing page funnel builds',
          'Unlimited budget scale oversight',
          '24/7 campaign tracking & bid scaling'
        ]
      }
    ]
  }
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
          H2T<span className="text-red-500">.</span>
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
            <div className={`inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full ${data.iconBg} ${data.borderColor} border mb-6`}>
              <Sparkles className={`w-3.5 h-3.5 ${data.textColor}`} />
              <span className={`text-[10px] font-bold tracking-[0.2em] uppercase ${data.textColor}`}>
                Premium Services
              </span>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6 leading-[1.1]">
              {data.title.split(' ').map((word, i) => (
                <span key={i} className={i === data.title.split(' ').length - 1 ? data.textColor : 'text-white'}>
                  {word}{' '}
                </span>
              ))}
            </h1>

            <p className="text-lg md:text-xl font-light text-gray-300 mb-8 leading-relaxed">
              {data.tagline}
            </p>

            <p className="text-sm md:text-base font-light text-gray-400 leading-relaxed mb-12 border-l-2 border-red-500/30 pl-6">
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
                className="p-5 rounded-2xl bg-[#0a0a0a] border border-white/5 hover:border-white/10 transition-colors"
              >
                <div className="w-8 h-8 rounded-lg bg-red-500/5 border border-red-500/10 flex items-center justify-center text-red-500 mb-4">
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
            className="w-full relative aspect-[4/3] rounded-[2rem] p-[1px] bg-gradient-to-b from-white/10 to-transparent overflow-hidden"
          >
            <div className="absolute inset-0 bg-[#080808] rounded-[2rem] overflow-hidden flex flex-col p-8 justify-between border border-black shadow-[inset_0_0_60px_rgba(255,255,255,0.02)]">
              {/* Top Details */}
              <div className="flex justify-between items-start">
                <div className="flex gap-1.5">
                  <div className="w-2.5 h-2.5 rounded-full bg-red-500" />
                  <div className="w-2.5 h-2.5 rounded-full bg-yellow-500" />
                  <div className="w-2.5 h-2.5 rounded-full bg-green-500" />
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
                  <Shield className="w-4 h-4 text-green-400" />
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
          <div className="h-[1px] w-8 bg-red-500/50" />
          <span className="text-red-500 text-xs font-bold tracking-[0.2em] uppercase">Flexible Rates</span>
          <div className="h-[1px] w-8 bg-red-500/50" />
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
                ? 'bg-gradient-to-b from-red-950/20 via-black to-black border-red-500/50 shadow-[0_0_30px_rgba(239,68,68,0.1)]'
                : 'bg-[#080808] border-white/5 hover:border-white/10'
            } border h-full`}
          >
            {tier.popular && (
              <span className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-red-600 text-white text-[9px] font-bold tracking-widest px-3 py-1 rounded-full uppercase shadow-[0_0_15px_rgba(230,0,0,0.5)]">
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
                  <div className="w-4 h-4 rounded-full bg-red-500/10 flex items-center justify-center text-red-500 mt-0.5 shrink-0">
                    <Check className="w-2.5 h-2.5" />
                  </div>
                  <span className="text-gray-300 text-xs sm:text-sm font-light leading-relaxed">{feat}</span>
                </li>
              ))}
            </ul>

            {/* Call to Action Button */}
            <a
              href="#contact"
              onClick={(e) => {
                e.preventDefault();
                onBack();
                setTimeout(() => {
                  document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
                }, 300);
              }}
              className={`w-full text-center py-4 rounded-xl text-xs font-bold tracking-widest uppercase transition-all duration-300 ${
                tier.popular
                  ? 'bg-red-600 hover:bg-red-700 text-white shadow-[0_0_20px_rgba(230,0,0,0.3)]'
                  : 'bg-white/5 hover:bg-white/10 text-white'
              }`}
            >
              Get Started
            </a>
          </motion.div>
        ))}
      </div>

      {/* Direct Communication Info banner */}
      <div className="max-w-7xl mx-auto px-6 mt-20">
        <div className="rounded-2xl bg-[#0a0a0a] border border-white/5 p-6 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-xl bg-red-500/5 border border-red-500/10 flex items-center justify-center text-red-500">
              <MessageSquare className="w-5 h-5" />
            </div>
            <div>
              <h4 className="text-white font-bold text-sm">Need a custom feature set or timeline?</h4>
              <p className="text-gray-400 text-xs font-light mt-0.5">Let's hop on a call and draft a customized quote for your needs.</p>
            </div>
          </div>
          <a
            href="#contact"
            onClick={(e) => {
              e.preventDefault();
              onBack();
              setTimeout(() => {
                document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
              }, 300);
            }}
            className="px-6 py-3.5 bg-white/5 hover:bg-white/10 rounded-xl text-xs font-bold uppercase tracking-wider transition-colors border border-white/5"
          >
            Request Custom Proposal
          </a>
        </div>
      </div>
    </div>
  );
}
