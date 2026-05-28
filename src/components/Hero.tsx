import { useState, useEffect } from 'react';
import { motion, AnimatePresence, useReducedMotion } from 'motion/react';
import { useLanguage } from '../context/LanguageContext';
import Button from './ui/Button';

const HERO_IMAGES = [
  `${import.meta.env.BASE_URL}images/JDF_Hero_001.webp`,
  `${import.meta.env.BASE_URL}images/JDF_Hero_002.webp`,
  `${import.meta.env.BASE_URL}images/JDF_Hero_003.webp`,
  `${import.meta.env.BASE_URL}images/JDF_Hero_005.webp`,
  `${import.meta.env.BASE_URL}images/JDF_Hero_006.webp`,
];

export default function Hero() {
  const { t } = useLanguage();
  const [currentIndex, setCurrentIndex] = useState(0);
  const reduceMotion = useReducedMotion();
  const currentImage = HERO_IMAGES[currentIndex] ?? HERO_IMAGES[0];

  useEffect(() => {
    const preload = document.createElement('link');
    preload.rel = 'preload';
    preload.as = 'image';
    preload.href = HERO_IMAGES[0] ?? '';
    document.head.appendChild(preload);

    return () => {
      document.head.removeChild(preload);
    };
  }, []);

  useEffect(() => {
    if (reduceMotion) return undefined;

    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % HERO_IMAGES.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [reduceMotion]);

  return (
    <section className="relative min-h-[100svh] lg:h-[100svh] flex flex-col-reverse lg:flex-row items-center lg:items-stretch pt-[72px] bg-paper-warm overflow-hidden">
      {/* Left Column: Editorial Content */}
      <div className="w-full lg:flex-1 flex flex-col justify-start lg:justify-center px-6 pt-8 pb-16 sm:py-12 lg:px-16 xl:px-24 lg:py-24 z-10 relative">
        {/* Subtle decorative accent */}
        <div className="absolute top-0 left-0 w-32 h-32 bg-primary/5 rounded-br-full pointer-events-none"></div>

        <div className="max-w-2xl mx-auto lg:mx-0 w-full relative z-10">
          <motion.div
             initial={{ opacity: 0, y: 20 }}
             animate={{ opacity: 1, y: 0 }}
             transition={{ duration: 0.8, delay: 0.1 }}
          >
            <span className="inline-block py-1.5 px-4 rounded-full bg-primary/10 border border-primary/20 text-primary font-semibold text-xs sm:text-sm mb-6 lg:mb-8 tracking-widest uppercase shadow-sm">
              {t.hero.welcome}
            </span>
          </motion.div>
          
          <motion.h1
             initial={{ opacity: 0, y: 30 }}
             animate={{ opacity: 1, y: 0 }}
             transition={{ duration: 0.8, delay: 0.2 }}
             className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl 2xl:text-6xl font-serif font-bold text-charcoal leading-[1.1] mb-4 lg:mb-6 text-balance"
          >
            <span className="block mb-1 sm:mb-2">{t.hero.title1}</span>
            <span className="block mb-1 sm:mb-2">{t.hero.title2}</span>
            <span className="block text-primary italic">{t.hero.title3}</span>
          </motion.h1>

          <motion.p
             initial={{ opacity: 0, y: 20 }}
             animate={{ opacity: 1, y: 0 }}
             transition={{ duration: 0.8, delay: 0.3 }}
             className="text-base sm:text-lg lg:text-xl xl:text-2xl text-slate max-w-xl mb-8 lg:mb-10 text-pretty leading-relaxed"
          >
            {t.hero.subtitle}
          </motion.p>

          <motion.div
             initial={{ opacity: 0, y: 20 }}
             animate={{ opacity: 1, y: 0 }}
             transition={{ duration: 0.8, delay: 0.4 }}
             className="flex flex-col sm:flex-row gap-3 sm:gap-4"
          >
             <Button
               as="a"
               href={`${import.meta.env.BASE_URL}#tours`}
               variant="primary"
             >
               {t.hero.exploreTours}
             </Button>
             <Button
               as="a"
               href={`${import.meta.env.BASE_URL}#join`}
               variant="outline"
             >
               {t.hero.joinCommunity}
             </Button>
          </motion.div>
        </div>
      </div>

      {/* Right Column: Framed Image Crossfade */}
      <div className="w-full lg:flex-[1.2] xl:flex-[1.4] relative flex items-center justify-center pt-8 pb-2 px-6 lg:py-12 lg:pl-0 lg:pr-16 xl:pr-24 mt-4 lg:mt-0">
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.3 }}
          className="relative w-full max-w-4xl xl:max-w-5xl aspect-video rounded-2xl sm:rounded-3xl lg:rounded-[2rem] overflow-hidden shadow-lifted border border-line bg-paper mx-auto"
        >
          <AnimatePresence initial={false}>
            <motion.img
              key={currentIndex}
              src={currentImage}
              alt="Jain Dosti Federation Journey"
              decoding={currentIndex === 0 ? 'sync' : 'async'}
              fetchPriority={currentIndex === 0 ? 'high' : 'auto'}
              loading={currentIndex === 0 ? 'eager' : 'lazy'}
              className="absolute inset-0 h-full w-full object-cover"
              initial={reduceMotion ? false : { opacity: 0, scale: 1.05 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: reduceMotion ? 0 : 1.5, ease: "easeInOut" }}
            />
          </AnimatePresence>
          
          {/* Subtle inner shadow to frame the image nicely */}
          <div className="absolute inset-0 ring-1 ring-inset ring-black/10 rounded-3xl lg:rounded-[2rem] pointer-events-none"></div>
        </motion.div>
      </div>
    </section>
  );
}
