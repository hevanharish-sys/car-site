import { motion } from 'framer-motion';

function GrowthIcon() {
  return (
    <svg viewBox="0 0 48 48" className="w-8 h-8" fill="none" aria-hidden>
      <motion.path
        d="M6 34 L16 24 L24 28 L40 10"
        stroke="currentColor"
        strokeWidth="2.2"
        strokeLinecap="round"
        strokeLinejoin="round"
        initial={{ pathLength: 0 }}
        animate={{ pathLength: [0, 1, 1] }}
        transition={{ duration: 2.4, repeat: Infinity, ease: 'easeInOut' }}
      />
      <motion.path
        d="M32 10 H40 V18"
        stroke="currentColor"
        strokeWidth="2.2"
        strokeLinecap="round"
        strokeLinejoin="round"
        initial={{ pathLength: 0, opacity: 0 }}
        animate={{ pathLength: 1, opacity: [0, 1, 1, 0] }}
        transition={{ duration: 2.4, repeat: Infinity, ease: 'easeInOut' }}
      />
      <motion.circle
        r="3"
        fill="currentColor"
        animate={{ cx: [6, 16, 24, 40], cy: [34, 24, 28, 10], scale: [1, 1.15, 1] }}
        transition={{ duration: 2.4, repeat: Infinity, ease: 'easeInOut' }}
      />
    </svg>
  );
}

function TargetIcon() {
  return (
    <svg viewBox="0 0 48 48" className="w-8 h-8" fill="none" aria-hidden>
      <motion.circle
        cx="24"
        cy="24"
        r="16"
        stroke="currentColor"
        strokeWidth="1.8"
        animate={{ rotate: 360, scale: [1, 1.06, 1] }}
        transition={{ rotate: { duration: 8, repeat: Infinity, ease: 'linear' }, scale: { duration: 2.2, repeat: Infinity } }}
        style={{ transformOrigin: '24px 24px' }}
      />
      <motion.circle
        cx="24"
        cy="24"
        r="10"
        stroke="currentColor"
        strokeWidth="1.8"
        animate={{ rotate: -360 }}
        transition={{ duration: 5.5, repeat: Infinity, ease: 'linear' }}
        style={{ transformOrigin: '24px 24px' }}
        strokeDasharray="8 10"
      />
      <motion.circle
        cx="24"
        cy="24"
        r="4"
        fill="currentColor"
        animate={{ scale: [0.75, 1.2, 0.75], opacity: [0.7, 1, 0.7] }}
        transition={{ duration: 1.6, repeat: Infinity, ease: 'easeInOut' }}
        style={{ transformOrigin: '24px 24px' }}
      />
      <motion.circle
        cx="24"
        cy="24"
        r="18"
        stroke="currentColor"
        strokeWidth="1"
        animate={{ scale: [0.85, 1.25], opacity: [0.45, 0] }}
        transition={{ duration: 2, repeat: Infinity, ease: 'easeOut' }}
        style={{ transformOrigin: '24px 24px' }}
      />
    </svg>
  );
}

function ShieldIcon() {
  return (
    <svg viewBox="0 0 48 48" className="w-8 h-8" fill="none" aria-hidden>
      <motion.path
        d="M24 6 L38 12 V24 C38 33 32 39 24 42 C16 39 10 33 10 24 V12 Z"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinejoin="round"
        initial={{ pathLength: 0 }}
        animate={{ pathLength: [0.15, 1, 1, 0.15] }}
        transition={{ duration: 3.2, repeat: Infinity, ease: 'easeInOut' }}
      />
      <motion.path
        d="M17 24 L22 29 L32 18"
        stroke="currentColor"
        strokeWidth="2.2"
        strokeLinecap="round"
        strokeLinejoin="round"
        initial={{ pathLength: 0 }}
        animate={{ pathLength: [0, 1, 1, 0] }}
        transition={{ duration: 3.2, repeat: Infinity, ease: 'easeInOut', times: [0, 0.35, 0.75, 1] }}
      />
      <motion.rect
        x="12"
        width="24"
        height="3"
        rx="1.5"
        fill="currentColor"
        opacity="0.45"
        animate={{ y: [12, 34] }}
        transition={{ duration: 2.4, repeat: Infinity, ease: 'easeInOut' }}
      />
    </svg>
  );
}

function SupportIcon() {
  return (
    <svg viewBox="0 0 48 48" className="w-8 h-8" fill="none" aria-hidden>
      <motion.path
        d="M14 22 V28 C14 31 16 33 19 33 H21 V22 C21 15 24 11 24 11 C24 11 27 15 27 22 V33 H29 C32 33 34 31 34 28 V22"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        animate={{ y: [0, -1.5, 0] }}
        transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
      />
      <motion.path
        d="M10 20 C8 24 8 28 10 32"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        animate={{ opacity: [0.25, 1, 0.25], x: [-1, 0, -1] }}
        transition={{ duration: 1.4, repeat: Infinity, ease: 'easeInOut' }}
      />
      <motion.path
        d="M7 17 C4 23 4 29 7 35"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        animate={{ opacity: [0.15, 0.7, 0.15] }}
        transition={{ duration: 1.4, repeat: Infinity, ease: 'easeInOut', delay: 0.2 }}
      />
      <motion.path
        d="M38 20 C40 24 40 28 38 32"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        animate={{ opacity: [0.25, 1, 0.25], x: [1, 0, 1] }}
        transition={{ duration: 1.4, repeat: Infinity, ease: 'easeInOut' }}
      />
      <motion.path
        d="M41 17 C44 23 44 29 41 35"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        animate={{ opacity: [0.15, 0.7, 0.15] }}
        transition={{ duration: 1.4, repeat: Infinity, ease: 'easeInOut', delay: 0.2 }}
      />
    </svg>
  );
}

const reasons = [
  {
    num: '01',
    icon: GrowthIcon,
    title: 'Results, not noise',
    copy: 'Every build is tied to measurable growth — leads, conversion, and revenue you can actually track.',
  },
  {
    num: '02',
    icon: TargetIcon,
    title: 'Your goals first',
    copy: 'Client-focused means the roadmap starts with your outcomes, then we choose the tech that gets you there.',
  },
  {
    num: '03',
    icon: ShieldIcon,
    title: 'Built right. On time.',
    copy: 'Quality and reliability are non-negotiable. Innovative solutions, delivered when we said they would be.',
  },
  {
    num: '04',
    icon: SupportIcon,
    title: 'Always on',
    copy: 'An expert team you can trust, 24/7 support when you need it, and 100% commitment to your next stage of scale.',
  },
];

const ease = [0.16, 1, 0.3, 1] as const;

export function Philosophy() {
  return (
    <section
      id="philosophy"
      className="py-24 sm:py-32 bg-[#050505] relative z-20 overflow-hidden"
    >
      <div className="absolute top-1/2 right-0 w-[40%] h-[50%] bg-h2t-red/[0.08] blur-[150px] rounded-full pointer-events-none -translate-y-1/2" />

      <div className="max-w-[1600px] mx-auto px-6 sm:px-10 lg:px-16 xl:px-20 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] gap-14 lg:gap-20 items-start">
          <div className="lg:sticky lg:top-32">
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, ease }}
              className="text-h2t-red text-[10px] sm:text-xs font-bold tracking-[0.4em] uppercase mb-5"
            >
              The difference
            </motion.p>

            <motion.h2
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.9, ease }}
              className="text-[3.2rem] min-[400px]:text-6xl sm:text-7xl lg:text-8xl font-bold text-white leading-[0.85] tracking-tight"
            >
              Why
              <br />
              <span className="text-h2t-red">choose</span>
              <br />
              <span
                className="text-transparent"
                style={{ WebkitTextStroke: '1.5px rgba(255,255,255,0.35)' }}
              >
                us
              </span>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2, ease }}
              className="mt-8 max-w-sm text-gray-400 text-sm sm:text-base font-light leading-relaxed"
            >
              Results-driven. Client-focused. Built for modern challenges — and the growth that comes after launch.
            </motion.p>

            <motion.div
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.9, delay: 0.35, ease }}
              className="origin-left mt-8 h-[2px] w-24 bg-h2t-red"
            />
          </div>

          <div className="relative">
            <span className="hidden lg:block absolute left-[19px] top-3 bottom-3 w-px bg-gradient-to-b from-h2t-red via-white/15 to-transparent" />

            <div className="space-y-4 sm:space-y-5">
              {reasons.map((reason, index) => {
                const Icon = reason.icon;
                return (
                  <motion.article
                    key={reason.num}
                    initial={{ opacity: 0, x: 48 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: '-40px' }}
                    transition={{ duration: 0.7, delay: index * 0.1, ease }}
                    className="group relative lg:pl-12"
                  >
                    <span className="hidden lg:flex absolute left-0 top-8 w-10 h-10 rounded-full bg-[#050505] border border-white/15 items-center justify-center z-10 group-hover:border-h2t-red group-hover:bg-h2t-red transition-colors duration-300">
                      <span className="w-2 h-2 rounded-full bg-h2t-red group-hover:bg-white transition-colors" />
                    </span>

                    <div className="relative overflow-hidden rounded-2xl border border-white/[0.08] bg-white/[0.02] p-6 sm:p-7 hover:border-h2t-red/40 transition-all duration-500 hover:shadow-[0_0_40px_rgba(255,26,26,0.1)]">
                      <div className="absolute inset-y-0 left-0 w-0 group-hover:w-full bg-h2t-red/[0.06] transition-all duration-500 pointer-events-none" />

                      <div className="relative flex items-start gap-4 sm:gap-5">
                        <div className="relative flex w-16 h-16 sm:w-[72px] sm:h-[72px] rounded-2xl border border-white/10 items-center justify-center shrink-0 text-h2t-red overflow-hidden group-hover:border-h2t-red/70 group-hover:bg-h2t-red group-hover:text-white transition-all duration-300">
                          <span className="absolute inset-0 rounded-2xl bg-h2t-red/10 animate-pulse pointer-events-none group-hover:opacity-0" />
                          <Icon />
                        </div>

                        <div className="min-w-0 flex-1">
                          <div className="flex items-center gap-3 mb-2">
                            <span className="text-[11px] font-bold tracking-[0.28em] text-h2t-red">
                              {reason.num}
                            </span>
                            <h3 className="text-white text-lg sm:text-xl font-semibold tracking-tight">
                              {reason.title}
                            </h3>
                          </div>
                          <p className="text-gray-500 text-sm font-light leading-relaxed group-hover:text-gray-300 transition-colors duration-300">
                            {reason.copy}
                          </p>
                        </div>
                      </div>
                    </div>
                  </motion.article>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
