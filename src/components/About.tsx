import { motion } from 'framer-motion';

const pillars = [
  {
    index: '01',
    title: 'Automate',
    copy: 'We replace slow, manual work with systems that run quietly in the background — so your team can focus on growth.',
  },
  {
    index: '02',
    title: 'Generate',
    copy: 'We build digital experiences that attract the right audience and turn attention into qualified, high-intent leads.',
  },
  {
    index: '03',
    title: 'Scale',
    copy: 'We design for the next stage, not just the launch — platforms, funnels, and strategy that grow with your revenue.',
  },
];

const ease = [0.16, 1, 0.3, 1] as const;

const headerFade = {
  hidden: { opacity: 0, y: 48 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 1, ease },
  },
};

const lineFade = {
  hidden: { opacity: 0, y: 28, filter: 'blur(8px)' },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    filter: 'blur(0px)',
    transition: { duration: 0.8, delay: 0.12 + i * 0.12, ease },
  }),
};

const cardFade = {
  hidden: { opacity: 0, y: 36 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, delay: 0.2 + i * 0.12, ease },
  }),
};

export function About() {
  return (
    <section id="about" className="py-24 sm:py-32 bg-[#050505] relative overflow-hidden">
      <div className="absolute top-0 right-1/4 w-[45%] h-[45%] bg-red-900/10 blur-[140px] rounded-full pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[30%] h-[30%] bg-h2t-red/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-[1600px] mx-auto px-6 sm:px-10 lg:px-16 xl:px-20 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_auto] gap-10 lg:gap-16 mb-16 sm:mb-20 lg:mb-24 items-end">
          <motion.header
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-40px' }}
            variants={headerFade}
          >
            <p className="text-h2t-red text-[10px] sm:text-xs font-bold tracking-[0.35em] uppercase mb-4 sm:mb-6">
              Who we are
            </p>
            <h2 className="text-[2rem] min-[400px]:text-[2.75rem] sm:text-[4rem] lg:text-[5.5rem] font-bold text-white leading-[0.92] tracking-tight">
              About
            </h2>
            <div className="flex items-center gap-3 sm:gap-5 mt-1 sm:mt-2">
              <span className="w-4 h-4 min-[400px]:w-5 min-[400px]:h-5 sm:w-7 sm:h-7 lg:w-8 lg:h-8 rounded-full bg-h2t-red shadow-[0_0_30px_rgba(255,26,26,0.55)] shrink-0" />
              <span className="text-[2rem] min-[400px]:text-[2.75rem] sm:text-[4rem] lg:text-[5.5rem] font-bold text-white leading-[0.92] tracking-tight">
                H2T
              </span>
            </div>
          </motion.header>

          <motion.div
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9, delay: 0.15, ease }}
            className="lg:max-w-sm lg:pb-2"
          >
            <div className="hidden lg:block w-12 h-[2px] bg-h2t-red mb-6 ml-auto" />
            <p className="text-gray-400 text-sm sm:text-base font-light leading-relaxed lg:text-right">
              Builders, strategists, and creators helping businesses automate, scale,
              and grow through technology and digital strategy.
            </p>
          </motion.div>
        </div>

        <div className="max-w-4xl mb-14 sm:mb-20 lg:mb-24">
          {['We don\'t just ship websites.', 'We build revenue engines.'].map((line, i) => (
            <motion.p
              key={line}
              custom={i}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-40px' }}
              variants={lineFade}
              className="text-xl min-[400px]:text-2xl sm:text-3xl lg:text-4xl font-semibold text-white leading-[1.2] tracking-tight"
            >
              {i === 1 ? (
                <>
                  We build <span className="text-h2t-red">revenue engines.</span>
                </>
              ) : (
                line
              )}
            </motion.p>
          ))}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4, ease }}
            className="mt-6 sm:mt-8 text-gray-400 text-sm sm:text-base lg:text-lg font-light leading-relaxed max-w-2xl"
          >
            H2T Technologies is a Chennai-based digital studio. From first impression to
            conversion, we craft high-performance sites, marketing systems, and automation
            that make growth feel inevitable — not accidental.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-5 lg:gap-6">
          {pillars.map((pillar, index) => (
            <motion.article
              key={pillar.title}
              custom={index}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-40px' }}
              variants={cardFade}
              className="group relative rounded-2xl border border-white/[0.08] bg-white/[0.02] p-6 sm:p-8 overflow-hidden hover:border-h2t-red/40 transition-all duration-500 hover:shadow-[0_0_40px_rgba(255,26,26,0.12)]"
            >
              <div className="absolute top-0 left-0 h-[3px] w-0 group-hover:w-full bg-h2t-red transition-all duration-500" />
              <p className="text-h2t-red text-[11px] font-bold tracking-[0.28em] mb-5">
                {pillar.index}
              </p>
              <h3 className="text-white text-xl sm:text-2xl font-semibold tracking-tight mb-3">
                {pillar.title}
              </h3>
              <p className="text-gray-500 text-sm font-light leading-relaxed">
                {pillar.copy}
              </p>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
