import { motion } from 'motion/react';
import { ArrowRight, MapPin } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';
import OptimizedImage from '../components/OptimizedImage';

export default function PastYatrasList() {
  const { t } = useLanguage();
  const latestYatras = [...t.pastYatras.list].reverse();
  const upcomingYatras = t.tours.toursList;

  return (
    <main className="min-h-screen bg-alabaster pt-24 pb-20">
      <div className="max-w-3xl mx-auto px-6">
        <div className="pt-10 mb-16">
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
            className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-charcoal mb-5"
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

        <div className="relative pl-12 md:pl-24 ml-4 md:ml-10 mt-8">
          {/* Vertical Line */}
          <div className="absolute left-0 top-8 bottom-0 w-[2px] bg-primary/20 rounded-full" />

          <div className="space-y-16">
            {/* Upcoming Yatras Section */}
            {upcomingYatras.map((tour, index) => (
              <motion.article
                key={`upcoming-${tour.id}`}
                initial={{ opacity: 0, y: 32 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.08, duration: 0.5 }}
                className="relative"
              >
                {/* Timeline Circle */}
                <div className="absolute -left-[71px] md:-left-[135px] top-[24px] w-12 h-12 md:w-20 md:h-20 rounded-full bg-primary text-white flex items-center justify-center font-serif font-bold text-xs md:text-base shadow-md ring-4 md:ring-8 ring-alabaster z-10 text-center leading-tight">
                  Soon
                </div>

                <div className="bg-paper border-2 border-primary/30 rounded-2xl md:rounded-[2rem] overflow-hidden shadow-paper hover:shadow-lifted transition-all duration-300 relative block group">
                  <div className="absolute top-4 right-4 z-10">
                    <span className="bg-primary text-white text-[10px] md:text-xs font-bold uppercase tracking-wider py-1.5 px-3 md:px-4 rounded-full shadow-md">
                      Upcoming
                    </span>
                  </div>
                  <div className="aspect-video overflow-hidden">
                    <OptimizedImage
                      src={tour.image}
                      alt={tour.title}
                      width={1200}
                      height={675}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                  </div>
                  <div className="p-6 md:p-8">
                    <div className="flex flex-wrap items-center gap-3 mb-2 md:mb-4">
                      <div className="flex items-center gap-1.5 text-slate font-medium text-sm">
                        <MapPin size={16} className="shrink-0 text-primary" />
                        <span>{tour.location}</span>
                      </div>
                    </div>
                    <h2 className="text-2xl md:text-3xl font-serif font-bold text-charcoal mb-4 md:mb-6 leading-tight">
                      {tour.title}
                    </h2>
                    <span className="inline-flex items-center gap-2 text-charcoal font-semibold text-base md:text-lg">
                      {t.tours.viewItinerary}
                      <ArrowRight size={18} className="group-hover:translate-x-1.5 transition-transform" />
                    </span>
                  </div>
                </div>
              </motion.article>
            ))}

            {/* Past Yatras Section */}
            {latestYatras.map((yatra, index) => {
              const adjustedIndex = index + upcomingYatras.length;
              return (
              <motion.article
                key={`past-${yatra.id}`}
                initial={{ opacity: 0, y: 32 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: adjustedIndex * 0.08, duration: 0.5 }}
                className="relative"
              >
                {/* Timeline Circle */}
                <div className="absolute -left-[71px] md:-left-[135px] top-[24px] w-12 h-12 md:w-20 md:h-20 rounded-full bg-charcoal text-white flex items-center justify-center font-serif font-bold text-xs md:text-lg shadow-sm ring-4 md:ring-8 ring-alabaster z-10 text-center">
                  {yatra.dates}
                </div>

                <Link
                  to={`/past-yatras/${yatra.id}`}
                  className="bg-paper border border-line rounded-2xl md:rounded-[2rem] overflow-hidden shadow-paper hover:shadow-lifted transition-all duration-300 block group"
                >
                  <div className="aspect-video overflow-hidden">
                    <OptimizedImage
                      src={yatra.image}
                      alt={yatra.title}
                      width={1200}
                      height={675}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                  </div>
                  <div className="p-6 md:p-8">
                    <div className="flex flex-wrap items-center gap-3 mb-2 md:mb-4">
                      <div className="flex items-center gap-1.5 text-slate font-medium text-sm">
                        <MapPin size={16} className="shrink-0 text-primary" />
                        <span>{yatra.location}</span>
                      </div>
                    </div>
                    <h2 className="text-xl md:text-2xl font-serif font-bold text-charcoal mb-3 md:mb-4 group-hover:text-primary transition-colors leading-tight">
                      {yatra.title}
                    </h2>
                    <p className="text-slate text-base md:text-lg leading-relaxed line-clamp-2 mb-4 md:mb-6">
                      {yatra.itinerary[0]}
                    </p>
                    <span className="inline-flex items-center gap-2 text-charcoal font-semibold group-hover:text-primary transition-colors text-base md:text-lg">
                      {t.pastYatras.viewDetails}
                      <ArrowRight size={18} className="group-hover:translate-x-1.5 transition-transform" />
                    </span>
                  </div>
                </Link>
              </motion.article>
            )})}
          </div>
        </div>
      </div>
    </main>
  );
}
