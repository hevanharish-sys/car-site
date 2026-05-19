import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowUpRight, ShoppingBag, Monitor, Smartphone, Briefcase, TrendingUp, Store, Rocket, LayoutGrid, Users, Star, Award, Zap, BarChart } from 'lucide-react';

const categories = ['All Works', 'Client Projects', 'Showcase Works'];

const projects = [
  {
    id: '01',
    title: 'CocoBliss Henna',
    category: 'E-Commerce Brand',
    catIcon: <ShoppingBag className="w-3.5 h-3.5" />,
    filter: 'Client Projects',
    url: 'https://cocobliss-henna.vercel.app/',
    image: 'https://images.unsplash.com/photo-1615397323380-60b29ce37d45?q=80&w=800&auto=format&fit=crop', // Organic beauty vibe
    description: 'Premium organic henna brand website with modern e-commerce experience.',
    stats: [
      { icon: <TrendingUp className="w-4 h-4 text-h2t-red" />, value: '+220%', label: 'Engagement' },
      { icon: <BarChart className="w-4 h-4 text-h2t-red" />, value: '4x', label: 'Product Reach' },
    ]
  },
  {
    id: '02',
    title: 'Pixel Craft Studio',
    category: 'Creative Agency',
    catIcon: <Monitor className="w-3.5 h-3.5" />,
    filter: 'Showcase Works',
    url: 'https://pixel-craft-studio-one.vercel.app/',
    image: '/portfolio_1_1778938210084.png',
    description: 'Modern creative agency website with immersive digital experiences.',
    stats: [
      { icon: <TrendingUp className="w-4 h-4 text-h2t-red" />, value: '+180%', label: 'Conversion' },
      { icon: <Users className="w-4 h-4 text-h2t-red" />, value: '10K+', label: 'Visitors' },
    ]
  },
  {
    id: '03',
    title: 'Heroic Entry',
    category: 'Tech Platform',
    catIcon: <Smartphone className="w-3.5 h-3.5" />,
    filter: 'Showcase Works',
    url: 'https://heroic-entry.vercel.app/',
    image: '/portfolio_2_1778938344119.png',
    description: 'High-performance futuristic platform designed for modern digital experiences.',
    stats: [
      { icon: <Zap className="w-4 h-4 text-h2t-red" />, value: '99.9%', label: 'Performance' },
      { icon: <Zap className="w-4 h-4 text-h2t-red" />, value: '3x', label: 'Faster UX' },
    ]
  },
  {
    id: '04',
    title: 'Hareesh Portfolio',
    category: 'Personal Portfolio',
    catIcon: <Briefcase className="w-3.5 h-3.5" />,
    filter: 'Showcase Works',
    url: 'https://hareesh-portfilio.vercel.app/',
    image: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=800&auto=format&fit=crop', // Developer vibe
    description: 'Premium developer portfolio showcasing futuristic web experiences.',
    stats: [
      { icon: <Award className="w-4 h-4 text-h2t-red" />, value: 'Award', label: 'Winning UI' },
      { icon: <Monitor className="w-4 h-4 text-h2t-red" />, value: '100%', label: 'Responsive' },
    ]
  },
  {
    id: '05',
    title: 'Elite Trader',
    category: 'Trading Platform',
    catIcon: <TrendingUp className="w-3.5 h-3.5" />,
    filter: 'Client Projects',
    url: 'https://theelitetrader.in/',
    image: '/portfolio_3_1778938455814.png',
    description: 'Professional trading platform with high-performance market-focused experience.',
    stats: [
      { icon: <TrendingUp className="w-4 h-4 text-h2t-red" />, value: '+300%', label: 'Growth' },
      { icon: <Users className="w-4 h-4 text-h2t-red" />, value: 'High', label: 'User Retention' },
    ]
  },
  {
    id: '06',
    title: 'Sabarees Trading',
    category: 'Business Website',
    catIcon: <Store className="w-3.5 h-3.5" />,
    filter: 'Client Projects',
    url: 'https://www.sabareestrading.store/',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=800&auto=format&fit=crop', // Business vibe
    description: 'Modern business website designed for scalable online growth.',
    stats: [
      { icon: <TrendingUp className="w-4 h-4 text-h2t-red" />, value: '+250%', label: 'Reach' },
      { icon: <BarChart className="w-4 h-4 text-h2t-red" />, value: 'Improved', label: 'Conversion' },
    ]
  }
];

export function Portfolio() {
  const [activeCategory, setActiveCategory] = useState('All Works');

  const filteredProjects = projects.filter(
    (project) => activeCategory === 'All Works' || project.filter === activeCategory
  );

  return (
    <section id="works" className="py-24 bg-[#020202] relative overflow-hidden">
      {/* Background Ambience */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-0 w-full h-full bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGcgc3Ryb2tlPSJyZ2JhKDI1NSwyNTUsMjU1LDAuMDMpIiBzdHJva2Utd2lkdGg9IjEiIGZpbGw9Im5vbmUiPjxwYXRoIGQ9Ik0wIDYwaDYwTTAgMGg2ME02MCAwdjYwTTAgMHY2MCIvPjwvZz48L3N2Zz4=')] opacity-20 mask-image:linear-gradient(to_bottom,transparent,black,transparent)]" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[60%] h-[60%] bg-h2t-red/10 blur-[150px] rounded-full" />
      </div>

      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center mb-12 relative">
          <div className="flex items-center justify-center gap-4 mb-4">
            <div className="h-[1px] w-12 bg-h2t-red/50" />
            <span className="text-h2t-red text-xs font-bold tracking-[0.2em] uppercase">Our Portfolio</span>
            <div className="h-[1px] w-12 bg-h2t-red/50" />
          </div>
          
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl lg:text-[60px] font-bold mb-4 tracking-tight text-white"
          >
            Our <span className="text-h2t-red text-glow">Works</span>
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-sm md:text-base text-gray-400 font-light"
          >
            Real Results. Creative Innovation.
          </motion.p>
        </div>

        {/* Filter Tabs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="flex flex-wrap justify-center gap-4 mb-16"
        >
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`flex items-center gap-2 px-6 py-2.5 rounded-full text-sm font-medium transition-all duration-300 border ${
                activeCategory === category
                  ? 'bg-[#cc0000] border-[#cc0000] text-white shadow-[0_0_20px_rgba(204,0,0,0.4)]'
                  : 'bg-transparent border-white/10 text-gray-400 hover:text-white hover:border-white/30'
              }`}
            >
              {category === 'All Works' && <LayoutGrid className="w-4 h-4" />}
              {category === 'Client Projects' && <Briefcase className="w-4 h-4" />}
              {category === 'Showcase Works' && <Star className="w-4 h-4" />}
              {category}
            </button>
          ))}
        </motion.div>

        {/* Projects Grid */}
        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          <AnimatePresence>
            {filteredProjects.map((project, index) => (
              <motion.a
                href={project.url}
                target="_blank"
                rel="noreferrer"
                layout
                initial={{ opacity: 0, scale: 0.95, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                key={project.id}
                className="group relative rounded-[2rem] bg-[#0a0a0a] border border-white/5 overflow-hidden block hover:border-h2t-red/50 transition-colors duration-500 hover:shadow-[0_0_40px_rgba(255,26,26,0.15)]"
              >
                {/* Immersive Image Area */}
                <div className="relative h-[240px] w-full overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-transparent to-transparent z-10" />
                  
                  {/* Badges */}
                  <div className="absolute top-4 left-4 z-20 w-8 h-8 rounded bg-black/60 backdrop-blur-md border border-white/10 flex items-center justify-center text-white text-xs font-bold">
                    {project.id}
                  </div>
                  <div className="absolute top-4 right-4 z-20 px-3 py-1.5 rounded-full bg-black/60 backdrop-blur-md border border-white/10 flex items-center gap-1.5 text-white text-[10px] sm:text-xs font-medium">
                    {project.catIcon}
                    {project.category}
                  </div>

                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                </div>
                
                {/* Content Panel */}
                <div className="p-6 relative z-20">
                  <h3 className="text-xl sm:text-2xl font-bold text-white mb-2">{project.title}</h3>
                  <p className="text-gray-400 text-sm font-light leading-relaxed mb-6 h-10 line-clamp-2">
                    {project.description}
                  </p>
                  
                  <div className="flex items-center justify-between border-t border-white/10 pt-5">
                    <div className="flex gap-6">
                      {project.stats.map((stat, i) => (
                        <div key={i} className="flex items-start gap-2">
                          <div className="mt-0.5">{stat.icon}</div>
                          <div>
                            <div className="text-white text-sm font-bold">{stat.value}</div>
                            <div className="text-gray-500 text-[10px] uppercase tracking-wider">{stat.label}</div>
                          </div>
                        </div>
                      ))}
                    </div>
                    
                    <div className="w-10 h-10 rounded-full border border-h2t-red flex items-center justify-center group-hover:bg-h2t-red transition-colors duration-300 flex-shrink-0">
                      <ArrowUpRight className="w-5 h-5 text-h2t-red group-hover:text-white transition-colors duration-300" />
                    </div>
                  </div>
                </div>
              </motion.a>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Bottom CTA */}
        <div className="flex justify-center">
          <a
            href="#contact"
            className="inline-flex items-center gap-3 px-8 py-4 rounded-full bg-[#111] border border-white/10 hover:border-h2t-red/50 text-white text-sm font-bold transition-all duration-300 hover:shadow-[0_0_30px_rgba(255,26,26,0.2)] group"
          >
            <Rocket className="w-5 h-5 text-h2t-red group-hover:-translate-y-1 group-hover:translate-x-1 transition-transform" />
            Let's Build Your Next Success Story
            <ArrowUpRight className="w-4 h-4 text-gray-400 group-hover:text-white transition-colors" />
          </a>
        </div>
      </div>
    </section>
  );
}
