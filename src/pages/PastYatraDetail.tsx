import { useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { motion } from 'motion/react';
import { MapPin, Calendar, ArrowLeft, Image as ImageIcon, Map as MapIcon } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

export default function PastYatraDetail() {
  const { id } = useParams();
  const { t } = useLanguage();
  const navigate = useNavigate();

  const yatra = t.pastYatras.list.find(y => y.id === (id ? parseInt(id, 10) : -1));

  useEffect(() => {
    window.scrollTo(0, 0);
    if (!yatra) {
      navigate('/past-yatras');
    }
  }, [yatra, navigate]);

  if (!yatra) return null;

  return (
    <main className="min-h-screen bg-alabaster pb-20 pt-20">
      {/* Hero Banner for Detail */}
      <div className="relative h-[60vh] w-full">
        <img 
          src={yatra.image} 
          alt={yatra.title} 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-black/20"></div>
        
        <div className="absolute top-10 left-6 z-10 w-full max-w-7xl mx-auto px-6">
          <Link 
            to="/past-yatras"
            className="inline-flex items-center gap-2 text-white/90 hover:text-white bg-white/10 hover:bg-white/20 backdrop-blur-md px-4 py-2 rounded-full transition-all text-sm font-medium"
          >
            <ArrowLeft size={16} />
            Back to Yatras
          </Link>
        </div>

        <div className="absolute bottom-12 left-0 w-full">
          <div className="max-w-7xl mx-auto px-6 text-white">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              <div className="flex items-center gap-2 text-primary text-sm font-medium mb-4 uppercase tracking-widest">
                <MapPin size={18} />
                {yatra.location}
              </div>
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-serif font-bold mb-4 leading-tight">
                {yatra.title}
              </h1>
              <div className="flex items-center gap-2 text-white/80 text-lg">
                <Calendar size={20} />
                {yatra.dates}
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Content Section */}
      <div className="max-w-7xl mx-auto px-6 mt-16">
        <div className="grid lg:grid-cols-3 gap-16">
          {/* Main Itinerary / Info */}
          <div className="lg:col-span-1">
            <div className="sticky top-28 bg-white p-8 rounded-3xl shadow-sm border border-slate/5">
              <div className="flex items-center gap-3 mb-8 text-charcoal">
                <MapIcon className="text-primary" size={24} />
                <h3 className="text-2xl font-serif font-bold">{t.pastYatras.itineraryTitle}</h3>
              </div>
              <ul className="space-y-8">
                {yatra.itinerary.map((day, idx) => (
                  <li key={idx} className="relative pl-8 before:content-[''] before:absolute before:left-0 before:top-2 before:w-3 before:h-3 before:bg-primary before:rounded-full after:content-[''] after:absolute after:left-[5px] after:top-5 after:bottom-[-28px] after:w-[2px] after:bg-primary/20 last:after:hidden text-slate leading-relaxed">
                    <span className="block font-medium text-charcoal mb-1">Day {idx + 1}</span>
                    {day}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Gallery */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-3 mb-10 text-charcoal">
              <ImageIcon className="text-primary" size={28} />
              <h3 className="text-3xl font-serif font-bold">{t.pastYatras.galleryTitle}</h3>
            </div>
            
            <div className="grid grid-cols-2 gap-6">
              {yatra.gallery.map((imgUrl, idx) => (
                <motion.div 
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  key={idx} 
                  className={`rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500 bg-white ${
                    idx === 0 || idx === 3 ? 'col-span-2 aspect-[21/9]' : 'col-span-1 aspect-square'
                  }`}
                >
                  <img 
                    src={imgUrl} 
                    alt={`Gallery Moment ${idx + 1}`} 
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-700" 
                  />
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
