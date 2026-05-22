import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { MapPin, Calendar, X, Image as ImageIcon, Map as MapIcon } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

export default function PastYatras() {
  const { t } = useLanguage();
  const [selectedYatra, setSelectedYatra] = useState<typeof t.pastYatras.list[0] | null>(null);

  return (
    <section className="py-24 bg-white" id="pastYatras">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16 max-w-2xl mx-auto">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-serif font-bold text-charcoal mb-4"
          >
            {t.pastYatras.title}
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-slate text-lg"
          >
            {t.pastYatras.subtitle}
          </motion.p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
          {t.pastYatras.list.map((yatra, index) => (
            <motion.div
              key={yatra.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15, duration: 0.6 }}
              className="group cursor-pointer bg-cream rounded-3xl overflow-hidden border border-slate/5 shadow-sm hover:shadow-xl transition-all duration-300"
              onClick={() => setSelectedYatra(yatra)}
            >
              <div className="h-72 overflow-hidden relative">
                <img 
                  src={yatra.image} 
                  alt={yatra.title} 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
                <div className="absolute inset-0 flex flex-col justify-end p-8">
                  <div className="flex items-center gap-2 text-white/90 text-sm font-medium mb-3">
                    <MapPin size={16} className="text-primary" />
                    {yatra.location}
                  </div>
                  <h3 className="text-2xl font-serif font-bold text-white mb-2 leading-tight">
                    {yatra.title}
                  </h3>
                  <div className="flex items-center gap-2 text-white/70 text-sm">
                    <Calendar size={16} />
                    {yatra.dates}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Modal / Expanded View */}
      <AnimatePresence>
        {selectedYatra && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedYatra(null)}
              className="fixed inset-0 bg-charcoal/60 backdrop-blur-sm z-[100]"
            />
            <motion.div
              initial={{ opacity: 0, y: '100%' }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: '100%' }}
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
              className="fixed inset-x-0 bottom-0 top-12 md:top-24 bg-white z-[101] rounded-t-[2rem] shadow-2xl overflow-hidden flex flex-col mx-auto max-w-5xl"
            >
              {/* Modal Header */}
              <div className="relative h-64 md:h-80 shrink-0">
                <img 
                  src={selectedYatra.image} 
                  alt={selectedYatra.title} 
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-charcoal/90 to-transparent"></div>
                
                <button
                  onClick={() => setSelectedYatra(null)}
                  className="absolute top-6 right-6 bg-white/20 hover:bg-white/40 text-white p-3 rounded-full backdrop-blur-md transition-colors"
                >
                  <X size={24} />
                </button>

                <div className="absolute bottom-6 left-6 md:bottom-8 md:left-10 text-white">
                  <div className="flex items-center gap-2 text-primary/90 text-sm font-medium mb-2">
                    <MapPin size={16} />
                    {selectedYatra.location}
                  </div>
                  <h2 className="text-3xl md:text-5xl font-serif font-bold mb-3">{selectedYatra.title}</h2>
                  <div className="flex items-center gap-2 text-white/80">
                    <Calendar size={18} />
                    {selectedYatra.dates}
                  </div>
                </div>
              </div>

              {/* Modal Content */}
              <div className="overflow-y-auto flex-grow p-6 md:p-10 bg-alabaster">
                <div className="grid md:grid-cols-3 gap-10">
                  {/* Itinerary */}
                  <div className="md:col-span-1 border-r border-slate/10 pr-6">
                    <div className="flex items-center gap-3 mb-6 text-charcoal">
                      <MapIcon className="text-primary" />
                      <h3 className="text-xl font-serif font-bold">{t.pastYatras.itineraryTitle}</h3>
                    </div>
                    <ul className="space-y-6">
                      {selectedYatra.itinerary.map((day, idx) => (
                        <li key={idx} className="relative pl-6 before:content-[''] before:absolute before:left-0 before:top-2 before:w-2 before:h-2 before:bg-primary before:rounded-full after:content-[''] after:absolute after:left-[3px] after:top-4 after:bottom-[-20px] after:w-px after:bg-primary/20 last:after:hidden text-slate text-sm leading-relaxed">
                          {day}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Gallery */}
                  <div className="md:col-span-2">
                    <div className="flex items-center gap-3 mb-6 text-charcoal">
                      <ImageIcon className="text-primary" />
                      <h3 className="text-xl font-serif font-bold">{t.pastYatras.galleryTitle}</h3>
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                      {selectedYatra.gallery.map((imgUrl, idx) => (
                        <div key={idx} className={`rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-shadow ${idx === 0 ? 'col-span-2 aspect-video' : 'col-span-1 aspect-square'}`}>
                          <img src={imgUrl} alt={`Gallery ${idx + 1}`} className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" />
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </section>
  );
}
