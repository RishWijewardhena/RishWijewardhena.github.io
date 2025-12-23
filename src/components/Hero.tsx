import React, { useRef } from 'react';
import { motion, useScroll, useTransform, useAnimation } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

export function Hero() {
  const ref = useRef<HTMLDivElement>(null);
  const controls = useAnimation();

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start start', 'end start'],
  });

  const backgroundY = useTransform(scrollYProgress, [0, 1], ['0%', '50%']);
  const textY = useTransform(scrollYProgress, [0, 1], ['0%', '60%']);
  const opacity = useTransform(scrollYProgress, [0, 0.6], [1, 0]);

  async function handleViewProjects() {
    // quick press animation then smooth scroll
    await controls.start({ scale: 0.95, transition: { duration: 0.12 } });
    controls.start({ scale: 1, transition: { duration: 0.12 } });
    document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }

  return (
    <section
      id="hero"
      ref={ref}
      className="relative h-screen w-full overflow-hidden bg-slate-50 flex items-center"
    >
      {/* Background */}
      <motion.div style={{ y: backgroundY }} className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_40%_40%,rgba(167,139,250,0.12),rgba(248,250,252,1))]" />
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1451187580459-43490279c0fa')] bg-cover bg-center opacity-5" />
      </motion.div>

      {/* Content */}
      <motion.div
        style={{ y: textY, opacity }}
        className="relative z-10 w-full max-w-7xl mx-auto px-6"
      >
        {/* Use grid so image column keeps its space and text vertically centers */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center">
          {/* Image column: pushed left on md+ */}
          <motion.div
            initial={{ opacity: 0, x: -8, scale: 0.98 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            className="flex justify-center md:justify-start md:pl-8 lg:pl-12"
          >
            <img
              src="Images/profile.jpg"
              alt="Rishmika Wijewardhana"
              className="
                w-56 h-56
                md:w-80 md:h-80
                lg:w-96 lg:h-96
                object-cover
                rounded-2xl
                border-4 border-white
                shadow-2xl
              "
            />
          </motion.div>

          {/* Text column: vertically centered */}
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut', delay: 0.12 }}
            className="flex flex-col justify-center text-center md:text-left px-2"
          >
            <h2 className="text-purple-600 font-medium tracking-wider uppercase mb-3 text-sm md:text-base">
              Electronic & IT Undergraduate • Embedded Systems • Robotics • IoT
            </h2>

            <h1 className="text-3xl md:text-5xl lg:text-6xl font-extrabold text-slate-900 leading-tight mb-4">
              Hi, I'm{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 via-blue-500 to-rose-400">
                Rishmika
              </span>
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-rose-400 via-purple-500 to-indigo-500">
                Wijewardhana
              </span>
            </h1>

            <p className="text-slate-600 text-base md:text-lg max-w-xl leading-relaxed mb-6">
              BSc (Hons) Electronic & Information Technology — I build embedded and
              robotic systems that bring ML to the edge while crafting clean web
              interfaces for demos and control.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
              <a
                // href="https://drive.google.com/file/d/1fYVdsTGncPJMKaRDFbSplgtQvg3n0rC0/view?usp=drive_link"
                href="Documents/Rishmika_Robotics & AI.pdf"

                className="px-6 py-3 bg-slate-900 text-white rounded-lg font-medium hover:bg-slate-800 transition"
              >
                Download CV
              </a>

              <motion.button
                animate={controls}
                onClick={handleViewProjects}
                className="px-6 py-3 border border-slate-300 rounded-lg text-slate-800 hover:bg-slate-100 transition font-medium"
                aria-label="View Projects"
                whileTap={{ scale: 0.97 }}
              >
                View Projects
              </motion.button>
            </div>
          </motion.div>
        </div>
      </motion.div>

      {/* Scroll Indicator */}
      <motion.div
        style={{ opacity }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 z-10"
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
      >
        <ChevronDown className="w-8 h-8 text-slate-400" />
      </motion.div>
    </section>
  );
}
