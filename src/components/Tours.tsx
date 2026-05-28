import { motion, AnimatePresence } from 'motion/react';
import { MapPin, Calendar, Activity } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import OptimizedImage from './OptimizedImage';

export default function Tours() {
  const { t } = useLanguage();
  const filteredTours = t.tours.toursList;

  return (
    <section className="py-24 bg-cream overflow-hidden" id="tours">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16">
          <div className="max-w-2xl">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-3xl md:text-4xl font-serif font-bold text-charcoal mb-4"
            >
              {t.tours.title}
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-slate text-lg"
            >
              {t.tours.subtitle}
            </motion.p>
          </div>
        </div>

        <div className="flex gap-8 overflow-x-auto pb-8 pt-4 -mx-6 px-6 hide-scrollbar scroll-smooth">
          <AnimatePresence mode="popLayout">
            {filteredTours.map((tour, index) => (
              <motion.div
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                key={tour.id}
                className="group bg-paper rounded-panel overflow-hidden border border-line shadow-paper hover:shadow-lifted transition-all duration-300 w-full md:w-[calc(50%-16px)] flex flex-col"
              >
                <div className="relative h-80 overflow-hidden shrink-0">
                  <OptimizedImage
                    src={tour.image} 
                    alt={tour.title} 
                    width={900}
                    height={640}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                  />
                  <div className="absolute top-6 right-6 flex gap-2">
                    <span className="bg-white/90 backdrop-blur-md px-4 py-1.5 rounded-full text-xs font-semibold text-charcoal tracking-wide">
                      {tour.type}
                    </span>
                  </div>
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-black/20 backdrop-blur-[2px]">
                    <button className="bg-white text-charcoal px-8 py-3 rounded-full font-medium shadow-xl transform translate-y-4 group-hover:translate-y-0 transition-all duration-300">
                      {t.tours.viewItinerary}
                    </button>
                  </div>
                </div>
                
                <div className="p-8 flex flex-col flex-grow">
                  <div className="flex items-center gap-2 text-primary text-sm font-medium mb-4">
                    <MapPin size={18} />
                    {tour.location}
                  </div>
                  <h3 className="text-2xl font-serif font-bold text-charcoal mb-4 group-hover:text-primary transition-colors leading-tight">
                    {tour.title}
                  </h3>
                  
                  <div className="space-y-4 pt-6 mt-auto border-t border-slate/10">
                    <div className="flex items-center gap-3 text-slate">
                      <Calendar size={20} className="text-primary" strokeWidth={1.5} />
                      <span className="font-medium text-lg text-charcoal">{tour.dates}</span>
                    </div>
                    <div className="flex items-center gap-3 text-slate">
                      <Activity size={20} className="text-slate/60" strokeWidth={1.5} />
                      {t.tours.comfortLevel} <span className="font-medium text-charcoal">{tour.comfort}</span>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
        
      </div>
    </section>
  );
}
