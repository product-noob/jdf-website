import { motion } from 'motion/react';
import { Map, HeartHandshake } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import OptimizedImage from './OptimizedImage';

export default function Pillars() {
  const { t } = useLanguage();

  const pillars = [
    {
      title: t.pillars.travelWithUs,
      subtitle: t.pillars.spiritualDarshan,
      description: t.pillars.travelDesc,
      icon: Map,
      image: 'https://images.unsplash.com/photo-1548013146-72479768bada?q=80&w=2952&auto=format&fit=crop',
    },
    {
      title: t.pillars.serveWithUs,
      subtitle: t.pillars.philanthropySeva,
      description: t.pillars.serveDesc,
      icon: HeartHandshake,
      image: 'https://images.unsplash.com/photo-1593113544331-bda923295982?q=80&w=2940&auto=format&fit=crop',
    },
  ];

  return (
    <section className="py-24 bg-alabaster relative z-10" id="about">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16 max-w-2xl mx-auto">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-3xl md:text-4xl font-serif font-bold text-charcoal mb-4"
          >
            {t.pillars.title}
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-slate text-lg"
          >
            {t.pillars.subtitle}
          </motion.p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 md:gap-12">
          {pillars.map((pillar, index) => (
            <motion.div
              key={pillar.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="bg-paper rounded-panel overflow-hidden group shadow-paper hover:shadow-lifted transition-all duration-500 border border-line"
            >
              <div className="h-64 overflow-hidden relative">
                <OptimizedImage
                  src={pillar.image} 
                  alt={pillar.title} 
                  width={900}
                  height={576}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                <div className="absolute bottom-6 left-6 text-white flex items-center gap-3">
                  <div className="bg-white/20 backdrop-blur-md p-3 rounded-full">
                    <pillar.icon size={24} strokeWidth={1.5} aria-hidden="true" />
                  </div>
                  <div>
                    <p className="text-white/80 text-sm font-medium tracking-wide uppercase">{pillar.subtitle}</p>
                    <h3 className="text-2xl font-serif font-bold">{pillar.title}</h3>
                  </div>
                </div>
              </div>
              <div className="p-8 flex flex-col h-full">
                <p className="text-slate leading-relaxed flex-grow">
                  {pillar.description}
                </p>
                <button className="mt-6 text-primary font-medium flex items-center gap-2 group-hover:gap-3 transition-all">
                  {t.pillars.learnMore} <span aria-hidden="true">�</span>
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
