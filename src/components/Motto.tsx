import { motion } from 'motion/react';
import { useLanguage } from '../context/LanguageContext';

export default function Motto() {
  const { t } = useLanguage();

  return (
    <section className="bg-charcoal py-16 md:py-20 relative overflow-hidden border-y-4 border-primary">
      <div className="max-w-5xl mx-auto px-6 text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
        >
          <h2 className="text-3xl md:text-5xl lg:text-5xl font-serif font-bold text-white tracking-wide leading-relaxed">
            <span className="text-primary mr-2 text-5xl md:text-6xl leading-none font-sans">"</span>
            {t.motto.text}
            <span className="text-primary ml-2 text-5xl md:text-6xl leading-none font-sans">"</span>
          </h2>
        </motion.div>
      </div>
    </section>
  );
}
