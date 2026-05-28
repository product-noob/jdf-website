import { motion } from 'motion/react';
import { ArrowRight, CalendarDays, MapPin } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';

export default function PastYatras() {
  const { t } = useLanguage();
  const latestYatras = [...t.pastYatras.list].reverse();
  const featuredYatras = latestYatras.slice(0, 4);

  return (
    <section className="py-24 bg-paper" id="pastYatras">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-16">
          <div className="max-w-2xl">
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-primary font-semibold tracking-[0.2em] uppercase text-sm mb-3"
            >
              Past Yatras
            </motion.p>
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

          <Link
            to="/past-yatras"
            className="inline-flex items-center justify-center gap-2 self-start md:self-auto bg-charcoal text-white px-5 py-3 rounded-full font-medium hover:bg-primary transition-colors"
          >
            Full timeline
            <ArrowRight size={18} />
          </Link>
        </div>

        <div className="relative">
          <div className="absolute left-5 md:left-1/2 top-0 bottom-0 w-px bg-primary/25 md:-translate-x-px" />
          <div className="space-y-10">
            {featuredYatras.map((yatra, index) => (
              <motion.article
                key={yatra.id}
                initial={{ opacity: 0, y: 28 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-80px' }}
                transition={{ delay: index * 0.08 }}
                className="relative grid md:grid-cols-[1fr_88px_1fr] gap-6 items-center"
              >
                <div
                  className={`ml-14 md:ml-0 bg-paper-warm border border-line rounded-paper p-6 shadow-paper ${
                    index % 2 === 0 ? 'md:col-start-1' : 'md:col-start-3'
                  } md:row-start-1`}
                >
                  <div className="flex items-center gap-2 text-primary font-semibold mb-3">
                    <MapPin size={18} />
                    <span>{yatra.location}</span>
                  </div>
                  <h3 className="text-2xl font-serif font-bold text-charcoal mb-4">
                    {yatra.title}
                  </h3>
                  <p className="text-slate leading-relaxed mb-5">
                    {yatra.itinerary[0]}
                  </p>
                  <Link
                    to={`/past-yatras/${yatra.id}`}
                    className="inline-flex items-center gap-2 text-charcoal font-semibold hover:text-primary transition-colors"
                  >
                    {t.pastYatras.viewDetails}
                    <ArrowRight size={18} />
                  </Link>
                </div>

                <div className="absolute left-0 top-6 md:static md:col-start-2 md:row-start-1 md:flex md:items-center md:justify-center">
                  <div className="w-10 h-10 md:w-20 md:h-20 rounded-full bg-primary text-white flex items-center justify-center font-serif font-bold shadow-lg ring-8 ring-white">
                    {yatra.dates}
                  </div>
                </div>

                <div className={`hidden md:block md:row-start-1 ${index % 2 === 0 ? 'md:col-start-3' : 'md:col-start-1'}`} />
              </motion.article>
            ))}
          </div>
        </div>

        <div className="mt-14 flex items-center gap-3 text-slate">
          <CalendarDays className="text-primary" size={20} />
          <span>Major yatras and seva milestones from 2015 to the present.</span>
        </div>
      </div>
    </section>
  );
}
