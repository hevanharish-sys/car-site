import { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowLeft, ArrowRight } from 'lucide-react';

const faqs = [
  {
    question: 'What do I need to get started?',
    answer:
      "To get started, we'll need a brief overview of your project goals, any existing brand guidelines, and your preferred timeline. Once you book a consultation, we'll guide you through the rest.",
  },
  {
    question: 'What kind of customization is available?',
    answer:
      'We offer complete end-to-end customization. From unique UI/UX design patterns to custom-coded features and integrations, every aspect of the project is tailored to your specific business needs.',
  },
  {
    question: 'How easy is it to edit for beginners?',
    answer:
      'We build with user-friendliness in mind. For most projects, we provide easy-to-use CMS integration (like Framer or specialized dashboards) and documentation so you can update content without touching any code.',
  },
  {
    question: 'Let me know more about moneyback guarantee?',
    answer:
      'We offer a transparency-first policy. If we are unable to meet the specific requirements outlined in our project agreement, we provide a structured refund policy. Detailed terms are discussed during the proposal stage.',
  },
];

export function FAQ() {
  const [activeIndex, setActiveIndex] = useState(0);

  const goPrev = () => setActiveIndex((i) => (i - 1 + faqs.length) % faqs.length);
  const goNext = () => setActiveIndex((i) => (i + 1) % faqs.length);

  const visibleIndices = [
    activeIndex,
    (activeIndex + 1) % faqs.length,
    (activeIndex + 2) % faqs.length,
  ];

  return (
    <section id="faq" className="py-24 sm:py-32 bg-[#050505] relative overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-h2t-red/5 rounded-full blur-[150px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header — title left, description + arrows right */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 mb-14 sm:mb-16 items-end">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl sm:text-5xl lg:text-[3.25rem] font-bold text-white leading-[1.1] tracking-tight">
              Frequently Asked{' '}
              <span className="text-h2t-red">Questions</span>
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="flex flex-col gap-6 lg:items-end"
          >
            <p className="text-gray-400 text-sm sm:text-base font-light leading-relaxed lg:text-right max-w-md lg:ml-auto">
              Have questions? Our FAQ section has you covered with quick answers to the most common inquiries.
            </p>

            <div className="flex items-center gap-3">
              <button
                type="button"
                onClick={goPrev}
                aria-label="Previous question"
                className="w-11 h-11 rounded-full border border-white/15 bg-transparent hover:bg-white/5 text-gray-400 hover:text-white flex items-center justify-center transition-all duration-200"
              >
                <ArrowLeft className="w-4 h-4" />
              </button>
              <button
                type="button"
                onClick={goNext}
                aria-label="Next question"
                className="w-11 h-11 rounded-full bg-h2t-red hover:bg-red-600 text-white flex items-center justify-center transition-all duration-200 shadow-[0_4px_20px_rgba(255,26,26,0.35)]"
              >
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </motion.div>
        </div>

        {/* Mobile — single active card */}
        <motion.div
          key={activeIndex}
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.35 }}
          className="sm:hidden rounded-3xl p-8 bg-h2t-red shadow-[0_12px_48px_rgba(255,26,26,0.25)] min-h-[280px] flex flex-col"
        >
          <h3 className="text-white text-xl font-semibold leading-snug">
            {faqs[activeIndex].question}
          </h3>
          <p className="text-white/85 text-sm font-light leading-relaxed mt-6">
            {faqs[activeIndex].answer}
          </p>
        </motion.div>

        {/* Desktop — 3-card carousel row */}
        <div className="hidden sm:flex gap-4 lg:gap-5 min-h-[380px]">
          {visibleIndices.map((faqIndex, position) => {
            const faq = faqs[faqIndex];
            const isActive = position === 0;

            return (
              <motion.button
                key={`${faqIndex}-${activeIndex}`}
                type="button"
                onClick={() => setActiveIndex(faqIndex)}
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: position * 0.08 }}
                className={`text-left rounded-3xl p-8 lg:p-10 transition-all duration-400 flex flex-col ${
                  isActive
                    ? 'flex-[1.6] bg-h2t-red shadow-[0_12px_48px_rgba(255,26,26,0.25)]'
                    : 'flex-1 bg-[#0f0f0f] border border-white/[0.06] hover:border-white/12 hover:bg-[#141414]'
                }`}
              >
                <h3
                  className={`font-semibold leading-snug mb-auto ${
                    isActive
                      ? 'text-white text-2xl lg:text-[1.65rem]'
                      : 'text-gray-300 text-xl lg:text-2xl'
                  }`}
                >
                  {faq.question}
                </h3>

                {isActive && (
                  <motion.p
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3, delay: 0.1 }}
                    className="text-white/85 text-[15px] font-light leading-relaxed mt-8"
                  >
                    {faq.answer}
                  </motion.p>
                )}
              </motion.button>
            );
          })}
        </div>

        {/* Dot indicators */}
        <div className="flex justify-center gap-2 mt-8 sm:mt-10">
          {faqs.map((_, i) => (
            <button
              key={i}
              type="button"
              onClick={() => setActiveIndex(i)}
              aria-label={`Go to question ${i + 1}`}
              className={`h-1.5 rounded-full transition-all duration-300 ${
                i === activeIndex ? 'w-6 bg-h2t-red' : 'w-1.5 bg-white/20'
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
