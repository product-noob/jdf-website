import { motion } from 'motion/react';
import { ArrowRight, CalendarDays, MapPin } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';
import OptimizedImage from '../components/OptimizedImage';

export default function PastYatrasList() {
  const { t } = useLanguage();
  const latestYatras = [...t.pastYatras.list].reverse();

  return (
    <main className="min-h-screen bg-alabaster pt-24 pb-20">
      <div className="max-w-6xl mx-auto px-6">
        <div className="pt-10 mb-16 max-w-3xl">
          <motion.p
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-primary font-semibold tracking-[0.2em] uppercase text-sm mb-4"
          >
            Yatra Timeline
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-6xl font-serif font-bold text-charcoal mb-5"
          >
            {t.pastYatras.title}
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-slate text-xl"
          >
            {t.pastYatras.subtitle}
          </motion.p>
        </div>

        <div className="relative">
          <div className="absolute left-5 md:left-1/2 top-0 bottom-0 w-px bg-primary/30 md:-translate-x-px" />

          <div className="space-y-12">
            {latestYatras.map((yatra, index) => (
              <motion.article
                key={yatra.id}
                initial={{ opacity: 0, y: 32 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.08, duration: 0.5 }}
                className="relative grid md:grid-cols-[1fr_96px_1fr] gap-6 items-stretch"
              >
                <Link
                  to={`/past-yatras/${yatra.id}`}
                  className={`group ml-14 md:ml-0 bg-paper border border-line rounded-paper overflow-hidden shadow-paper hover:shadow-lifted transition-all duration-300 ${
                    index % 2 === 0 ? 'md:col-start-1' : 'md:col-start-3'
                  } md:row-start-1`}
                >
                  <div className="aspect-[16/8] overflow-hidden">
                    <OptimizedImage
                      src={yatra.image}
                      alt={yatra.title}
                      width={900}
                      height={450}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                  </div>
                  <div className="p-6">
                    <div className="flex items-start gap-2 text-primary font-semibold mb-3">
                      <MapPin size={18} className="mt-1 shrink-0" />
                      <span>{yatra.location}</span>
                    </div>
                    <h2 className="text-2xl md:text-3xl font-serif font-bold text-charcoal mb-4">
                      {yatra.title}
                    </h2>
                    <p className="text-slate leading-relaxed line-clamp-3 mb-5">
                      {yatra.itinerary[0]}
                    </p>
                    <span className="inline-flex items-center gap-2 text-charcoal font-semibold group-hover:text-primary transition-colors">
                      {t.pastYatras.viewDetails}
                      <ArrowRight size={18} />
                    </span>
                  </div>
                </Link>

                <div className="absolute left-0 top-7 md:static md:col-start-2 md:row-start-1 md:flex md:items-start md:justify-center md:pt-8">
                  <div className="w-10 h-10 md:w-24 md:h-24 rounded-full bg-primary text-white flex items-center justify-center font-serif font-bold shadow-lg ring-8 ring-alabaster">
                    {yatra.dates}
                  </div>
                </div>

                <div className={`hidden md:flex items-center md:row-start-1 ${index % 2 === 0 ? 'md:col-start-3' : 'md:col-start-1'}`}>
                  <div className="flex items-center gap-3 text-slate">
                    <CalendarDays className="text-primary" size={22} />
                    <span>Year {yatra.dates}</span>
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
}
