import { motion } from 'framer-motion';

const team = [
  {
    name: 'Hareesh VN',
    role: 'Founder & CEO',
    image: '/image-fc785e2c-1a9e-44c8-9e39-951bee541211.png',
  },
  {
    name: 'Hevan Harish LM',
    role: 'Chief Technology Officer (CTO)',
    image: '/IMG_20251026_181737_516.webp',
  },
  {
    name: 'Ramkishore M',
    role: 'Digital Marketing Specialist',
    image: '/H2T2.jpeg',
  },
  {
    name: 'Balajivasan M',
    role: 'Marketing Head',
    image: '/H2T .jpeg',
  },
  {
    name: 'Jaswanth Reddy M',
    role: 'Video Editor & Marketing Executive',
    image: '/image-019646c1-4d61-4a22-b249-679e45c6b8a5.png',
  },
];

function TeamPhoto({
  src,
  alt,
  className,
  delay = 0,
}: {
  src: string;
  alt: string;
  className?: string;
  delay?: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay }}
      className={`rounded-2xl overflow-hidden ${className}`}
    >
      <img
        src={src}
        alt={alt}
        className="w-full h-full object-cover object-top grayscale hover:grayscale-0 transition-all duration-500"
      />
    </motion.div>
  );
}

export function About() {
  return (
    <section id="about" className="py-24 sm:py-32 bg-[#050505]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex items-center gap-3 mb-14 sm:mb-20"
        >
          <img src="/image.png" alt="H2T" className="h-7 w-auto object-contain opacity-90" />
          <span className="text-white text-lg font-bold tracking-tight">
            H2T<span className="text-h2t-red">.</span>
          </span>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-start">
          {/* Staggered photo mosaic */}
          <div className="lg:col-span-7 grid grid-cols-3 gap-3 sm:gap-4">
            <TeamPhoto
              src={team[0].image}
              alt={team[0].name}
              className="col-start-1 row-start-1 row-span-2 h-[280px] sm:h-[360px] lg:h-[420px]"
            />
            <TeamPhoto
              src={team[1].image}
              alt={team[1].name}
              delay={0.05}
              className="col-start-2 row-start-1 h-[130px] sm:h-[170px] lg:h-[200px]"
            />
            <TeamPhoto
              src={team[3].image}
              alt={team[3].name}
              delay={0.1}
              className="col-start-2 row-start-2 h-[130px] sm:h-[170px] lg:h-[200px]"
            />
            <TeamPhoto
              src={team[2].image}
              alt={team[2].name}
              delay={0.15}
              className="col-start-3 row-start-1 mt-10 sm:mt-14 h-[130px] sm:h-[170px] lg:h-[200px]"
            />
            <TeamPhoto
              src={team[4].image}
              alt={team[4].name}
              delay={0.2}
              className="col-start-3 row-start-2 h-[130px] sm:h-[170px] lg:h-[200px]"
            />
          </div>

          {/* Minimal team list */}
          <div className="lg:col-span-5 flex flex-col justify-center gap-10 sm:gap-12 lg:py-6">
            {team.map((member, index) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, x: 24 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.06 }}
                className="flex items-start gap-4"
              >
                <span className="w-8 h-3 rounded-full bg-h2t-red/80 shrink-0 mt-2.5" />
                <div>
                  <h3 className="text-white text-lg sm:text-xl font-bold tracking-tight">
                    {member.name}
                  </h3>
                  <p className="text-gray-500 text-[11px] sm:text-xs font-medium uppercase tracking-[0.15em] mt-1.5">
                    {member.role}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
