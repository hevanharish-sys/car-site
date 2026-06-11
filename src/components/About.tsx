import { motion } from 'framer-motion';

const team = [
  {
    name: 'Hareesh VN',
    role: 'Founder & CEO',
    image: '/image-fc785e2c-1a9e-44c8-9e39-951bee541211.png',
    objectPosition: '50% 18%',
  },
  {
    name: 'Hevan Harish LM',
    role: 'Chief Technology Officer',
    image: '/veo3.png',
    objectPosition: '50% 20%',
  },
  {
    name: 'Ramkishore M',
    role: 'Digital Marketing Specialist',
    image: '/rishore H2T cdu.jpeg',
    objectPosition: '50% 20%',
  },
  {
    name: 'Balajivasan M',
    role: 'Marketing Head',
    image: '/balaji H2T.jpeg',
    objectPosition: '50% 20%',
  },
  {
    name: 'Jaswanth Reddy M',
    role: 'Video Editor & Marketing Executive',
    image: '/jaswant H2T cdu.jpeg',
    objectPosition: '50% 20%',
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 32 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      delay: i * 0.08,
      ease: [0.16, 1, 0.3, 1] as const,
    },
  }),
};

const headerFade = {
  hidden: { opacity: 0, y: 48 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 1, ease: [0.16, 1, 0.3, 1] as const },
  },
};

function TeamCard({
  member,
  index,
}: {
  member: (typeof team)[0];
  index: number;
}) {
  return (
    <motion.article
      custom={index}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-40px' }}
      variants={fadeUp}
      className="group relative flex flex-col rounded-2xl overflow-hidden bg-white/[0.02] border border-white/[0.08] hover:border-h2t-red/40 transition-all duration-500 hover:shadow-[0_0_40px_rgba(255,26,26,0.12)]"
    >
      {/* Photo */}
      <div className="relative aspect-[3/4] overflow-hidden bg-[#0c0c0c]">
        <div className="absolute inset-0 bg-gradient-to-b from-h2t-red/10 via-transparent to-transparent z-[1] pointer-events-none" />
        <img
          src={member.image}
          alt={member.name}
          loading="lazy"
          className="absolute inset-0 size-full object-cover transition-transform duration-700 group-hover:scale-[1.04]"
          style={{ objectPosition: member.objectPosition }}
        />
        <div className="absolute inset-x-0 bottom-0 h-2/5 bg-gradient-to-t from-[#0a0a0a] via-[#0a0a0a]/80 to-transparent z-[1]" />
        <div className="absolute top-0 left-0 w-full h-[3px] bg-h2t-red scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-500 z-[2]" />
      </div>

      {/* Info */}
      <div className="relative p-5 sm:p-6 flex-1 flex flex-col">
        <div className="w-8 h-[2px] bg-h2t-red mb-4 rounded-full" />
        <h3 className="text-white font-semibold text-base sm:text-lg leading-tight tracking-tight">
          {member.name}
        </h3>
        <p className="text-gray-500 text-[10px] sm:text-xs font-medium uppercase tracking-[0.1em] sm:tracking-[0.12em] mt-2 leading-relaxed">
          {member.role}
        </p>
      </div>
    </motion.article>
  );
}

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
            transition={{ duration: 0.9, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
            className="lg:max-w-sm lg:pb-2"
          >
            <div className="hidden lg:block w-12 h-[2px] bg-h2t-red mb-6 ml-auto" />
            <p className="text-gray-400 text-sm sm:text-base font-light leading-relaxed lg:text-right">
              Builders, strategists, and creators helping businesses automate, scale,
              and grow through technology and digital strategy.
            </p>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 min-[480px]:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4 sm:gap-5 lg:gap-6">
          {team.map((member, index) => (
            <TeamCard key={member.name} member={member} index={index} />
          ))}
        </div>

      </div>
    </section>
  );
}
