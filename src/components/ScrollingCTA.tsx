import { motion } from 'framer-motion';

const marqueeItems = [
  'SMART UX',
  'FLAWLESS',
  'AI POWERED',
  'GROWTH',
  'AUTOMATION',
  'PREMIUM',
];

function MarqueeDot() {
  return (
    <span className="inline-flex items-center justify-center mx-6 sm:mx-10 lg:mx-14 align-middle shrink-0">
      <span className="w-5 h-5 sm:w-7 sm:h-7 lg:w-9 lg:h-9 rounded-full bg-h2t-red shadow-[0_0_24px_rgba(255,26,26,0.5)]" />
    </span>
  );
}

function MarqueeTrack({ reverse = false }: { reverse?: boolean }) {
  const content = marqueeItems.flatMap((text, i) => [
    <span key={`${text}-a-${i}`} className="text-[2.25rem] min-[400px]:text-[3.5rem] sm:text-[5rem] lg:text-[6.5rem] font-bold uppercase tracking-tight text-white/90">
      {text}
    </span>,
    <MarqueeDot key={`dot-a-${i}`} />,
  ]);

  return (
    <div className={`marquee-track flex w-max items-center ${reverse ? 'marquee-reverse' : 'marquee-forward'}`}>
      <div className="flex items-center shrink-0">{content}</div>
      <div className="flex items-center shrink-0" aria-hidden>
        {content}
      </div>
    </div>
  );
}

export function ScrollingCTA() {
  return (
    <section className="bg-[#050505] py-20 sm:py-28 overflow-hidden border-t border-white/5">
      {/* Scrolling marquee rows */}
      <div className="space-y-4 sm:space-y-6 mb-16 sm:mb-20">
        <div className="marquee-mask">
          <MarqueeTrack />
        </div>
        <div className="marquee-mask">
          <MarqueeTrack reverse />
        </div>
      </div>

      {/* Center CTA */}
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="flex flex-col items-center text-center px-4"
      >
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white uppercase tracking-tight mb-10 sm:mb-12">
          Have an Idea?
        </h2>

        <button
          type="button"
          onClick={() => {
            document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
          }}
          className="px-8 sm:px-12 lg:px-16 py-3.5 sm:py-5 rounded-full border border-white/40 text-white text-xs sm:text-base font-semibold uppercase tracking-[0.12em] sm:tracking-[0.2em] hover:bg-white hover:text-black transition-all duration-300"
        >
          Tell Us
        </button>

        <p className="mt-10 sm:mt-12 text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tighter text-white">
          H2T<span className="text-h2t-red">.</span>
        </p>
      </motion.div>
    </section>
  );
}
