import { motion } from 'motion/react';
import { useLanguage } from '../context/LanguageContext';
import OptimizedImage from './OptimizedImage';

export default function Philanthropy() {
  const { t } = useLanguage();

  return (
    <section className="bg-alabaster pb-24 pt-24" id="seva">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center md:mb-20 mb-12 max-w-2xl mx-auto">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-serif font-bold text-charcoal mb-4"
          >
            {t.philanthropy.title}
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-slate text-lg"
          >
            {t.philanthropy.subtitle}
          </motion.p>
        </div>

        <div className="space-y-24">
          {t.philanthropy.causes.map((cause, index) => (
            <div 
              key={index} 
              className={`flex flex-col md:flex-row gap-12 items-center ${index % 2 !== 0 ? 'md:flex-row-reverse' : ''}`}
            >
              <motion.div 
                initial={{ opacity: 0, x: index % 2 === 0 ? -40 : 40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.7 }}
                className="w-full md:w-1/2"
              >
                <div className="rounded-panel overflow-hidden shadow-paper aspect-[4/3]">
                  <OptimizedImage
                    src={cause.image} 
                    alt={cause.title} 
                    width={900}
                    height={675}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-700" 
                  />
                </div>
              </motion.div>
              
              <motion.div 
                initial={{ opacity: 0, x: index % 2 === 0 ? 40 : -40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.7, delay: 0.2 }}
                className="w-full md:w-1/2 space-y-6"
              >
                <h3 className="text-2xl md:text-3xl font-serif font-bold text-charcoal leading-tight">
                  {cause.title}
                </h3>
                <p className="text-slate text-lg leading-relaxed">
                  {cause.description}
                </p>
                <ul className="space-y-2">
                  <li className="flex items-center gap-3 text-slate">
                    <div className="w-1.5 h-1.5 rounded-full bg-primary/60"></div>
                    {t.philanthropy.directInvolvement}
                  </li>
                  <li className="flex items-center gap-3 text-slate">
                    <div className="w-1.5 h-1.5 rounded-full bg-primary/60"></div>
                    {t.philanthropy.transparentFunding}
                  </li>
                </ul>
              </motion.div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
