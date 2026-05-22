import { motion } from 'motion/react';
import { MapPin, Calendar, ArrowRight } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { Link } from 'react-router-dom';

export default function PastYatrasList() {
  const { t } = useLanguage();

  return (
    <main className="min-h-screen bg-cream pt-24 pb-20">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16 max-w-2xl mx-auto pt-10">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl font-serif font-bold text-charcoal mb-4"
          >
            {t.pastYatras.title}
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-slate text-lg"
          >
            {t.pastYatras.subtitle}
          </motion.p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-10">
          {t.pastYatras.list.map((yatra, index) => (
            <motion.div
              key={yatra.id}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
            >
              <Link 
                to={`/past-yatras/${yatra.id}`}
                className="group block bg-white rounded-3xl overflow-hidden border border-slate/5 shadow-sm hover:shadow-2xl transition-all duration-300"
              >
                <div className="h-80 overflow-hidden relative">
                  <img 
                    src={yatra.image} 
                    alt={yatra.title} 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-black/10 opacity-90 group-hover:opacity-100 transition-opacity"></div>
                  
                  <div className="absolute top-6 right-6">
                    <div className="w-12 h-12 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center text-white opacity-0 group-hover:opacity-100 transform translate-x-4 group-hover:translate-x-0 transition-all">
                      <ArrowRight size={24} />
                    </div>
                  </div>

                  <div className="absolute inset-0 flex flex-col justify-end p-8">
                    <div className="flex items-center gap-2 text-primary/90 text-sm font-medium mb-3 tracking-wide">
                      <MapPin size={16} />
                      {yatra.location}
                    </div>
                    <h3 className="text-3xl font-serif font-bold text-white mb-3 leading-tight group-hover:text-primary transition-colors">
                      {yatra.title}
                    </h3>
                    <div className="flex items-center gap-2 text-white/70 text-sm">
                      <Calendar size={16} />
                      {yatra.dates}
                    </div>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </main>
  );
}
