import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { useLanguage } from '../context/LanguageContext';

const HERO_IMAGES = [
  '/images/JDF_Hero_001.jpg',
  '/images/JDF_Hero_002.jpg',
  '/images/JDF_Hero_003.jpeg',
];

export default function Hero() {
  const { t } = useLanguage();
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % HERO_IMAGES.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative h-screen w-full overflow-hidden flex items-center justify-center bg-charcoal">
      <AnimatePresence initial={false}>
        <motion.img
          key={currentIndex}
          src={HERO_IMAGES[currentIndex]}
          alt="Peaceful Journey"
          className="absolute inset-0 w-full h-full object-cover"
          initial={{ opacity: 0, scale: 1.05 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1.5, ease: "easeInOut" }}
        />
      </AnimatePresence>

      <div className="absolute inset-0 bg-black/60"></div>
      
      <div className="relative z-10 text-center px-6 max-w-5xl mx-auto pt-20">
        <motion.div
           initial={{ opacity: 0, y: 20 }}
           animate={{ opacity: 1, y: 0 }}
           transition={{ duration: 0.8, delay: 0.2 }}
        >
          <span className="inline-block py-1.5 px-4 rounded-full bg-white/20 backdrop-blur-md text-white font-semibold text-sm mb-6 tracking-widest uppercase shadow-md">
            {t.hero.welcome}
          </span>
        </motion.div>
        
        <motion.h1
           initial={{ opacity: 0, y: 30 }}
           animate={{ opacity: 1, y: 0 }}
           transition={{ duration: 0.8, delay: 0.3 }}
           className="text-5xl md:text-7xl lg:text-[5.5rem] font-serif font-bold text-white leading-tight mb-12 drop-shadow-2xl"
        >
          {t.motto.text}
        </motion.h1>

        <motion.div
           initial={{ opacity: 0, y: 20 }}
           animate={{ opacity: 1, y: 0 }}
           transition={{ duration: 0.8, delay: 0.5 }}
           className="flex flex-col sm:flex-row gap-4 justify-center"
        >
           <a
             href="/#tours"
             className="bg-primary hover:bg-primary-hover text-white px-8 py-4 rounded-full font-medium text-center transition-all hover:scale-[1.02] hover:shadow-xl hover:shadow-primary/20 shadow-lg"
           >
             {t.hero.exploreTours}
           </a>
           <a
             href="/#join"
             className="bg-white/10 hover:bg-white/20 backdrop-blur-md border border-white/30 text-white px-8 py-4 rounded-full font-medium text-center transition-all hover:scale-[1.02] shadow-lg"
           >
             {t.hero.joinCommunity}
           </a>
        </motion.div>
      </div>
    </section>
  );
}
