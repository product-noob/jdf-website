import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Quote, ChevronLeft, ChevronRight } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

export default function Testimonials() {
  const { t } = useLanguage();
  const [currentIndex, setCurrentIndex] = useState(0);
  const currentTestimonial = t.testimonials.list[currentIndex] ?? t.testimonials.list[0];

  const next = () => setCurrentIndex((prev) => (prev + 1) % t.testimonials.list.length);
  const prev = () => setCurrentIndex((prev) => (prev - 1 + t.testimonials.list.length) % t.testimonials.list.length);

  if (!currentTestimonial) return null;

  return (
    <section className="py-24 bg-cream overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        
        <div className="text-center mb-16">
          <Quote size={48} className="text-primary/20 mx-auto mb-6" strokeWidth={1} />
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-charcoal mb-4">
            {t.testimonials.title}
          </h2>
          <p className="text-slate text-lg">
            {t.testimonials.subtitle}
          </p>
        </div>

        <div className="relative max-w-4xl mx-auto">
          {/* Controls */}
          <button 
            onClick={prev}
            aria-label="Previous testimonial"
            className="absolute left-0 top-1/2 -translate-y-1/2 -ml-4 md:-ml-12 z-10 bg-paper p-3 rounded-full shadow-paper text-slate hover:text-primary transition-colors hidden md:block"
          >
            <ChevronLeft size={24} />
          </button>
          
          <button 
            onClick={next}
            aria-label="Next testimonial"
            className="absolute right-0 top-1/2 -translate-y-1/2 -mr-4 md:-mr-12 z-10 bg-paper p-3 rounded-full shadow-paper text-slate hover:text-primary transition-colors hidden md:block"
          >
            <ChevronRight size={24} />
          </button>

          <div className="overflow-hidden px-4 md:px-0">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -50 }}
                transition={{ duration: 0.4, ease: "easeInOut" }}
                className="bg-paper rounded-panel p-8 md:p-12 shadow-paper border border-line text-center"
              >
                <p className="text-xl md:text-2xl font-serif text-charcoal/90 leading-relaxed mb-8">
                  "{currentTestimonial.quote}"
                </p>
                <div className="flex flex-col items-center justify-center">
                  <h4 className="font-bold text-charcoal text-lg">{currentTestimonial.author}</h4>
                  <p className="text-slate text-sm mb-1">{currentTestimonial.role}</p>
                  <span className="text-xs font-semibold text-primary/70 uppercase tracking-wider bg-primary/5 px-3 py-1 rounded-full mt-2">
                    {currentTestimonial.ageGroup}
                  </span>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          <div className="flex justify-center gap-2 mt-8">
            {t.testimonials.list.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setCurrentIndex(idx)}
                className={`w-2.5 h-2.5 rounded-full transition-all ${
                  idx === currentIndex ? 'bg-primary w-6' : 'bg-slate/20 hover:bg-slate/40'
                }`}
                aria-label={`Go to slide ${idx + 1}`}
              />
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
