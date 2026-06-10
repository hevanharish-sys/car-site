import { motion } from 'framer-motion';

export function Philosophy() {
  return (
    <section id="philosophy" className="py-24 sm:py-32 bg-[#050505] relative overflow-hidden">
      <div className="absolute top-1/2 left-0 w-[35%] h-[35%] bg-red-900/10 blur-[120px] rounded-full pointer-events-none -translate-y-1/2" />

      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.h2
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white text-center mb-12 sm:mb-16 tracking-tight"
        >
          Why <span className="text-h2t-red">Choose Us</span>
        </motion.h2>

        <motion.div
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
          className="space-y-6 text-gray-300 text-sm sm:text-base lg:text-lg font-light leading-relaxed text-center"
        >
          <p>
            We are results driven and focused on measurable business growth. Client focused
            means your goals are always our priority. We deliver innovative solutions through
            creative technology for modern challenges, with quality and reliability built
            right and delivered on time.
          </p>
          <p>
            Our expert team brings experienced professionals you can trust, with 24/7 support
            always available when you need it. We offer 100% commitment dedicated to your
            success, and scalable technology built for future growth.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
