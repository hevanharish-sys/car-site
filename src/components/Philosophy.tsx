import { motion } from 'framer-motion';

export function Philosophy() {
  return (
    <section id="philosophy" className="py-24 sm:py-32 bg-[#050505]">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white text-center mb-12 sm:mb-16 tracking-tight"
        >
          Our Philosophy
        </motion.h2>

        <motion.div
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
          className="space-y-8 text-gray-300 text-sm sm:text-base lg:text-lg font-light leading-relaxed text-center"
        >
          <p>
            In our team, developers work alongside designers, strategists, and analysts.
            H2T doesn&apos;t do cookie-cutter solutions — we build products exactly as they
            were during the design phase, with no shortcuts or simplifications.
          </p>
          <p>
            We&apos;re driven by user-centered design that drives productivity and increases
            revenue. Our expertise and ingenuity are remarkable, yet we always strive to
            outdo and outperform our previous achievements.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
