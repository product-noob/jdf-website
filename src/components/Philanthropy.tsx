import { useState, useEffect, useRef } from 'react';
import { motion, useInView } from 'motion/react';
import { Heart } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

function AnimatedCounter({ end, suffix = "", duration = 2 }: { end: number, suffix?: string, duration?: number }) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  useEffect(() => {
    if (isInView) {
      let startTime: number;
      let animationFrame: number;

      const step = (timestamp: number) => {
        if (!startTime) startTime = timestamp;
        const progress = Math.min((timestamp - startTime) / (duration * 1000), 1);
        
        // easeOutQuart
        const easeOut = 1 - Math.pow(1 - progress, 4);
        setCount(Math.floor(easeOut * end));

        if (progress < 1) {
          animationFrame = window.requestAnimationFrame(step);
        }
      };

      animationFrame = window.requestAnimationFrame(step);
      return () => window.cancelAnimationFrame(animationFrame);
    }
  }, [isInView, end, duration]);

  return (
    <span ref={ref}>
      {count.toLocaleString()}{suffix}
    </span>
  );
}

export default function Philanthropy() {
  const { t } = useLanguage();

  return (
    <section className="bg-alabaster pb-24 pt-12" id="seva">
      {/* Stats Ribbon */}
      <div className="bg-charcoal text-white py-16 mb-24 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-8 text-center divide-y md:divide-y-0 md:divide-x divide-white/10 relative z-10">
          <div className="py-4 md:py-0 flex flex-col items-center justify-center">
            <div className="text-4xl md:text-5xl font-serif font-bold text-primary mb-2">
              <AnimatedCounter end={15000} suffix="+" />
            </div>
            <div className="text-white/70 font-medium tracking-wider text-sm">{t.philanthropy.mealsServed}</div>
          </div>
          <div className="py-4 md:py-0 flex flex-col items-center justify-center">
            <div className="text-4xl md:text-5xl font-serif font-bold text-primary mb-2">
              <AnimatedCounter end={50} suffix="+" />
            </div>
            <div className="text-white/70 font-medium tracking-wider text-sm">{t.philanthropy.medicalCamps}</div>
          </div>
          <div className="py-4 md:py-0 flex flex-col items-center justify-center">
            <div className="text-4xl md:text-5xl font-serif font-bold text-primary mb-2">
              <AnimatedCounter end={1000} suffix="+" />
            </div>
            <div className="text-white/70 font-medium tracking-wider text-sm">{t.philanthropy.activeVolunteers}</div>
          </div>
        </div>
      </div>

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
                <div className="rounded-2xl overflow-hidden shadow-xl shadow-slate/5 aspect-[4/3]">
                  <img 
                    src={cause.image} 
                    alt={cause.title} 
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
                <h3 className="text-3xl font-serif font-bold text-charcoal leading-tight">
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

        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-24 text-center"
          id="donate"
        >
          <div className="bg-cream border border-primary/20 rounded-3xl p-10 md:p-16 max-w-4xl mx-auto shadow-sm">
            <Heart size={40} className="text-primary mx-auto mb-6" strokeWidth={1.5} />
            <h3 className="text-2xl md:text-3xl font-serif font-bold text-charcoal mb-4">
              {t.philanthropy.joinUsTitle}
            </h3>
            <p className="text-slate mb-8 max-w-xl mx-auto">
              {t.philanthropy.joinUsSubtitle}
            </p>
            <button className="bg-primary hover:bg-primary-hover text-white px-8 py-4 rounded-full font-medium text-lg transition-all hover:scale-[1.02] hover:shadow-xl shadow-primary/20 inline-flex items-center gap-2">
              {t.philanthropy.supportCauses}
              <Heart size={18} className="fill-white/20" />
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
