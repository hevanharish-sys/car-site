import { motion } from 'framer-motion';

const projects = [
  {
    title: 'Sabarees Trading',
    description: 'Premium grocery & supermarket platform with online ordering.',
    location: 'Singapore',
    image: '/Signapore supermarket.png',
    url: 'https://www.sabareestrading.store/',
  },
  {
    title: 'Elite Trader',
    description: 'Professional trading education and mentorship platform.',
    location: 'India',
    image: '/Elite trader.png',
    url: 'https://theelitetrader.in/',
  },
  {
    title: 'The Brew Room',
    description: 'Modern café website with menu, gallery, and reservations.',
    location: 'India',
    image: '/Brew Room cafe demo.png',
    url: 'https://brew-cafe-sage.vercel.app/',
  },
  {
    title: 'Tea Studio Chennai',
    description: 'Premium tea lounge brand with an elegant digital presence.',
    location: 'Chennai, India',
    image: '/tea studio chennai.png',
    url: 'https://theteastudio-chennai.vercel.app/',
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 70 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 2.8,
      ease: [0.16, 1, 0.3, 1] as const,
      opacity: { duration: 3.2, ease: 'easeOut' as const },
    },
  },
};

export function FeaturedProjects() {
  return (
    <section id="works" className="py-20 sm:py-28 lg:py-32 bg-[#050505]">
      <div className="max-w-[1600px] mx-auto px-6 sm:px-10 lg:px-16 xl:px-20">
        <motion.header
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-40px' }}
          variants={fadeUp}
          className="mb-20 sm:mb-28 lg:mb-40"
        >
          <h2 className="text-[2rem] min-[400px]:text-[2.75rem] sm:text-[4rem] lg:text-[5.5rem] font-bold text-white leading-[0.95] tracking-tight break-words">
            Featured
          </h2>
          <div className="flex items-center gap-3 sm:gap-5 mt-1 sm:mt-2">
            <span className="w-4 h-4 min-[400px]:w-5 min-[400px]:h-5 sm:w-7 sm:h-7 lg:w-8 lg:h-8 rounded-full bg-h2t-red shadow-[0_0_30px_rgba(255,26,26,0.55)] shrink-0" />
            <span className="text-[2rem] min-[400px]:text-[2.75rem] sm:text-[4rem] lg:text-[5.5rem] font-bold text-white leading-[0.95] tracking-tight break-words">
              Projects
            </span>
          </div>
        </motion.header>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-8 lg:gap-x-14 gap-y-20 sm:gap-y-28 lg:gap-y-36">
          {projects.map((project, index) => {
            const isRight = index % 2 === 1;

            return (
              <motion.article
                key={project.title}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: '-80px' }}
                variants={fadeUp}
                className={`flex flex-col w-full max-w-full sm:max-w-[320px] lg:max-w-[340px] xl:max-w-[360px] mx-auto lg:mx-0 ${
                  isRight
                    ? 'lg:mt-36 xl:mt-48 lg:mr-auto'
                    : 'lg:ml-auto'
                }`}
              >
                {project.url ? (
                  <a
                    href={project.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block transition-opacity duration-300 hover:opacity-85 cursor-pointer"
                    aria-label={`Visit ${project.title} website`}
                  >
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-auto object-contain media-fluid"
                      loading="lazy"
                    />
                  </a>
                ) : (
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-auto object-contain media-fluid"
                    loading="lazy"
                  />
                )}

                <div className="mt-5 sm:mt-6">
                  <p className="text-sm sm:text-base lg:text-lg text-white leading-snug">
                    <span className="font-bold">{project.title}</span>
                    <span className="font-normal text-white/90"> — {project.description}</span>
                  </p>
                  <p className="text-gray-500 text-xs sm:text-sm font-normal mt-2">
                    {project.location}
                  </p>
                </div>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
